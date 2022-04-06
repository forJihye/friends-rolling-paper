import express from 'express';
import {getRegisterUser, postRegisterUser, getLoginUser, postLoginUser, getLogout} from '../controllers/auth';

const router = express.Router();

router.get('/user', getRegisterUser);

router.post('/user', postRegisterUser);

router.get('/login', getLoginUser);

router.post('/login', postLoginUser);

router.get('/logout', getLogout);

export default router;

