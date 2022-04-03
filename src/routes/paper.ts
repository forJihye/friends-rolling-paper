import express from 'express';

const paperController = require('../controllers/paper');

const router = express.Router();

router.get('/', paperController.getMainPaper);
router.get('/create', paperController.getCreatePaper);
router.post('/create', paperController.postCreatePaper);
router.post('/message', paperController.postPaperInsert);
// router.get('/:uid', paperController.getPaperByUid);

// // 롤링 페이퍼 작성 포스터 상세 내용
// router.get('/:uid/detail', function (req, res) {
//   const list = template.list(postList);
//   const html = template.HTML('롤링 페이퍼 리스트', `
//   ${list}
//   <a href="http://localhost:3000/${(req.session as any).name}/${paper.uid}">작성하러 가기</a>
// `);
//   res.send(html);
// });

// // 롤링 페이퍼 완성 링크 생성
// router.post('/:uid/complete', function (req, res) {
//   // const uuid = uuidv1();
//   const uuid = '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c';
//   const target = paperList.find(({uid}) => uid === req.params.uid);
//   target && (target.completedId = uuid);
//   res.redirect(`/${(req.session as any).name}/${target?.uid}?id=${uuid}`);
// });

// // 롤링 페이퍼 삭제
// router.get('/:uid/delete', function (req, res) {
//   const updated = paperList.filter(({uid}) => uid !== req.params.uid);
//   console.log('삭제', updated);
//   res.redirect(`/${(req.session as any).name}/${req.params.uid}`);
// });


export default router;