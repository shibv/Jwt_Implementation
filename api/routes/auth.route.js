import express from 'express';
import { verifyToken } from '../utils/verifyToken.js';
import { register,logout, login, main } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get("/main",verifyToken, main)
router.get("/logout", logout);

export default router