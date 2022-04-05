import express from 'express';
import {getPaperByUid, postPaperComplete, postPaperInsert} from '../controllers/paper'

const router = express.Router();

router.get('/:uid', getPaperByUid);
router.post('/:uid', postPaperInsert);

router.post('/:uid/complete', postPaperComplete)

export default router;

