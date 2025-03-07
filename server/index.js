import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './src/routes/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/auth', authRoutes);

// 测试路由
app.get('/api/health', (req, res) => {
  res.json({ status: '服务运行正常', timestamp: new Date() });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '内部服务器错误' });
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});