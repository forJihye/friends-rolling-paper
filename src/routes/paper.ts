import express from 'express';
import template from '../template';
import { v1 as uuidv1 } from 'uuid';
import MobileDetect from 'mobile-detect';

const paper: {
  uid: string;
  userId: string;
  name: string;
  birthDate: string;
  isCompleted: boolean;
  completedId: string;
} = {
  uid: '0b30f880-adb4-11ec-9205-2b546b0d71f6',
  userId: 'jihye',
  name: '홍길동',
  birthDate: '0706',
  isCompleted: true,
  completedId: ''
}

const paperList: {
  uid: string;
  userId: string;
  name: string;
  birthDate: string;
  isCompleted: boolean;
  completedId: string;
}[] = [
  {
    uid: '0b30f880-adb4-11ec-9205-2b546b0d71f6',
    userId: 'jihye',
    name: '홍길동',
    birthDate: '0706',
    isCompleted: true,
    completedId: '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c',
  },
  {
    uid: '0b30f880-adb4-11ec-9205-2b546b0d71f6',
    userId: 'dong',
    name: '홍길순',
    birthDate: '0910',
    isCompleted: false,
    completedId: ''
  }
]

const postList: {name: string; content: string}[] = [
  { name: '홍길순1', content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' },
  { name: '홍길순2', content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' },
  { name: '홍길순3', content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' }
];

const router = express.Router();

// 롤링 페이퍼 생성 폼
router.get('/', function (req, res) {
  // const {name} = req.session as any;
  // const list = paperList.map((paper, i) => {
  //   const link = !paper.completedId ? `http://localhost:3000/${name}/${paper.uid}` : `http://localhost:3000/${name}/${paper.uid}?id=${paper.completedId}`
  //   return `<ul>
  //     <li>
  //       <a href="${link}">${paper.name}의 롤링 페이퍼</a>
  //     </li>
  //   </ul>`
  // }).join('');
  // <h4>Wellcom ${name} 😊</h4>
  // <form action="${name}/create" method="post" enctype='application/json'>
  //   <p><input type="text" name="name" placeholder="친구 이름" value="홍길동" /></p>
  //   <p><input type="text" name="birthDate" placeholder="친구 생일" value="0706" /></p>
  //   <input type="submit" value="롤링 페이퍼 만들기">
  // </form>
  // <h4>내가 만든 친구의 롤링 페이퍼 리스트</h4>
  // ${list}
  const html = template.HTML('롤링 페이퍼 생성', ``);
  res.send(html);
});

// // 롤링 페이퍼 링크 생성
// router.post('/create', function (req, res, next) {
//   const {name, birthDate} = req.body;
//   // const uid = uuidv1();
//   // paper.uid = uid;
//   // paper.userId = (req.session as any).userId;
//   // paper.name = name;
//   // paper.birthDate = birthDate;
//   // console.log(paper);
//   res.redirect(`/${(req.session as any).name}/${paper.uid}`);
// });

// // 롤링 페이퍼 메인 링크 
// router.get('/:uid', function (req, res) {
//   const { uid } = req.params;
//   if (Object.keys(req.query).includes('id')) {
//     const list = template.list(postList);
//     const html = template.HTML('롤링 페이퍼', `
//       <h3>${paper.name}의 롤링 페이퍼</h3>
//       <div> ${list} </div>
//     `);
//     res.send(html);
//   } else {
//     const html = template.HTML('롤링 페이퍼', `
//       <h3>${paper.name}의 롤링 페이퍼</h3>
//       <form action="${uid}/insert" method="post" enctype='application/json'>
//         <p><input type="text" name="name" placeholder="작성자" value="홍길순" /></p>
//         <p>
//           <textarea name="content" rows="5" cols="30">
//   길동아!
//   생일 축하해!
//   from 길순이가
//           </textarea>
//         </p>
//         <input type="submit" value="롤링 페이퍼 등록">
//       </form>
//       <br />
//       <form action="${uid}/complete" method="post" enctype='application/json'>
//         <input type="submit" value="${paper.name}의 롤링 페이퍼 완성하기">
//       <form>
//     `);
//     res.send(html);
//   }
// });

// // 롤링 페이퍼 포스터 등록
// router.post('/:uid/insert', function (req, res, next) {
//   const {name, content} = req.body;
//   const {uid} = req.params;
//   // paperList.push({name, content});
//   // const md = new MobileDetect( req.headers['user-agent'] as string);
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(req.headers['user-agent'] as string)) { // 모바일인 경우 
//     console.log('mobile')
//   } else {
//     console.log('pc')
//   }
//   res.redirect(`/${(req.session as any).name}/${uid}`);
// });

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