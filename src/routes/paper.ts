import express from 'express';
import { getCreatePaper, postCreatePaper} from '../controllers/paper';

const router = express.Router();

router.get('/', getCreatePaper);
router.post('/', postCreatePaper);
// router.get('/:uid', getPaperByUid);
// router.post('/:uid', postPaperInsert);
// router.post('/:uid/complete', postPaperComplete)

export default router;