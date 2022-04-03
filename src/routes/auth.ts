import express from 'express';

const router = express.Router();
const authController = require('../controllers/auth');

export type Users = {
  [name: string] : {
    name: string;
    salt?: string;
    hash?: string;
  }
}

export const users: Users = {
  'ghdrlfehd': { name: '홍길동' }
}

router.get('/register', authController.getRegisterUser);

router.post('/register', authController.postRegisterUser);

router.get('/login', authController.getLoginUser);

router.post('/login', authController.postLoginUser);

router.get('/logout', authController.getLogout);

export default router;

