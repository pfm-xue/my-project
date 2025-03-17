import express from 'express';
import { register, login, getUsers } from '../controllers/auth.js';

const router = express.Router();

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/users
// 需要认证 
router.get('/getUsers', getUsers);

export default router;