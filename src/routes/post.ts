import express from 'express';
import { getPaperPost, postPaper} from '../controllers/post';

const router = express.Router();

router.get('/:paperId/:uid', getPaperPost);
router.post('/:paperId/:uid', postPaper);

export default router