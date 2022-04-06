import express from 'express';
import {getMainPaper} from '../controllers/main';

const router = express.Router();

router.get('/', getMainPaper);

export default router;