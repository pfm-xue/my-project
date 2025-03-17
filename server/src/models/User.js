import pool from '../config/db.js';

class User {
  static async findByUsername(username) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return rows[0];
  }

  static async findByEmail(username) {
    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [username]
    );
    return rows[0];
  }

  static async createUser(username, passwordHash) {
    const [result] = await pool.query(
      'INSERT INTO users (username, password_hash) VALUES (?, ?)',
      [username, passwordHash]
    );
    return result.insertId;
  }

  }

export default User;