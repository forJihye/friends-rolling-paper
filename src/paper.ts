import express from 'express';
import template from './template';
import { v1 as uuidv1 } from 'uuid';

const paper: {
  uid: string;
  userId: string;
  name: string;
  birthDate: string;
} = {
  uid: '0b30f880-adb4-11ec-9205-2b546b0d71f6',
  userId: 'jihye',
  name: '홍길동',
  birthDate: '0706'
}

const paperList: {name: string; content: string}[] = [
  { name: '홍길순1', content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' },
  { name: '홍길순2', content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' },
  { name: '홍길순3', content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' }
];

const router = express.Router();

// 롤링 페이퍼 생성 폼
router.get('/', function (req, res) {
  const {name} = req.session as any;
  const html = template.HTML('롤링 페이퍼 생성', `
    <h4>Wellcom ${name} 😊</h4>
    <form action="${name}/create" method="post" enctype='application/json'>
      <p><input type="text" name="name" placeholder="친구 이름" value="홍길동" /></p>
      <p><input type="text" name="birthDate" placeholder="친구 생일" value="0706" /></p>
      <input type="submit" value="롤링 페이퍼 만들기">
    </form>
    <div><a href="http://localhost:3000/${name}/${paper.uid}">${paper.name}의 롤링 페이퍼 작성하러 가기</a></div>
  `)
  res.send(html);
});

// 롤링 페이퍼 링크 생성
router.post('/create', function (req, res, next) {
  const {name, birthDate} = req.body;
  // const uid = uuidv1();
  // paper.uid = uid;
  // paper.userId = (req.session as any).userId;
  // paper.name = name;
  // paper.birthDate = birthDate;
  // console.log(paper);
  res.redirect(`/${(req.session as any).name}/${paper.uid}`);
});

// 롤링 페이퍼 메인 링크
router.get('/:uid', function (req, res) {
  const {uid} = req.params;
  const html = template.HTML('롤링 페이퍼', `
    <h3>${paper.name}의 롤링 페이퍼</h3>
    <form action="${uid}/insert" method="post" enctype='application/json'>
      <p><input type="text" name="name" placeholder="작성자" value="홍길순" /></p>
      <p>
        <textarea name="content" rows="5" cols="30">
길동아!
생일 축하해!
from 길순이가
        </textarea>
      </p>
      <input type="submit" value="롤링 페이퍼 등록">
    </form>
    <div><a href="http://localhost:3000/${(req.session as any).name}/${paper.uid}/list">${paper.name}의 롤링 페이퍼 보기</a></div>
  `);
  res.send(html);
});

// 롤링 페이퍼 포스터 리스트
router.get('/:uid/list', function (req, res) {
  const list = template.list(paperList);
  const html = template.HTML('롤링 페이퍼 리스트', `
  ${list}
  <a href="http://localhost:3000/${(req.session as any).name}/${paper.uid}">작성하러 가기</a>
`);
  res.send(html);
});

// 롤링 페이퍼 포스터 등록
router.post('/:uid/insert', function (req, res, next) {
  const {name, content} = req.body;
  const {uid} = req.params;
  // paperList.push({name, content});
  res.redirect(`/${(req.session as any).name}/${uid}/list`);
});


export default router;