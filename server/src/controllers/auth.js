import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import pool from '../config/db.js';

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // 验证输入
    if (!username || !password) {
      return res.status(400).json({ error: '用户名和密码不能为空' });
    }

    // 检查用户是否存在
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(409).json({ error: '用户名已存在' });
    }

    // 密码哈希
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 创建用户
    const userId = await User.createUser(username, passwordHash);
    
    res.status(201).json({ 
      message: '用户注册成功',
      user: { id: userId, username }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '服务器错误' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 验证输入
    if (!username || !password) {
      return res.status(400).json({ error: '用户名和密码不能为空' });
    }

    // 查询用户
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ error: '用户不存在' });
    }

    // 验证密码
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: '密码错误' });
    }

    res.json({
      message: '登录成功',
      user: {
        id: user.id,
        username: user.username
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '服务器错误' });
  }
};

export const getUsers = async (req, res) => {
  try {
    // 分页参数（示例使用固定值，可按需扩展）
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    // 查询用户列表
    const [users] = await pool.query(`
      SELECT 
        id, 
        username, 
        created_at 
      FROM users 
      ORDER BY created_at DESC 
      LIMIT ? OFFSET ?
    `, [limit, offset]);

    // 获取总数
    const [total] = await pool.query('SELECT COUNT(*) AS count FROM users');

    res.json({
      data: users.map(user => ({
        ...user,
        created_at: new Date(user.created_at).toISOString()
      })),
      pagination: {
        total: total[0].count,
        page,
        totalPages: Math.ceil(total[0].count / limit)
      }
    });

  } catch (error) {
    console.error('获取用户列表错误:', error);
    res.status(500).json({ error: '获取用户列表失败' });
  }
};