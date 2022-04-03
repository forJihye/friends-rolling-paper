import express from 'express';

const router = express.Router();
const authController = require('../controllers/auth');

router.get('/register', authController.getRegisterUser);

router.post('/register', authController.postRegisterUser);

router.get('/login', authController.getLoginUser);

router.post('/login', authController.postLoginUser);

router.get('/logout', authController.getLogout);

export default router;

