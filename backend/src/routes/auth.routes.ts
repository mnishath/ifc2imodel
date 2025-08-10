import { Router } from 'express';
import { login, handleCallback, logout, getMe } from '../controllers/auth.controller';

const router = Router();

router.get('/login', login);
router.get('/callback', handleCallback);
router.post('/logout', logout);
router.get('/me', getMe);

export default router;