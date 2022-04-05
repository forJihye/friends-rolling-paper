import express from 'express';
import {getMainPaper, getCreatePaper, postCreatePaper} from '../controllers/main';

const router = express.Router();

router.get('/', getMainPaper);
router.get('/create', getCreatePaper);
router.post('/create', postCreatePaper);

export default router;