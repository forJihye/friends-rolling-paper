import express from 'express';
import { getMyPaper } from '../controllers/mypaper';

const router = express.Router();

router.get('/', getMyPaper);

export default router;

