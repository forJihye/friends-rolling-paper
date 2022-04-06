import {Request, Response, NextFunction} from 'express';
import { v1 as uuidv1 } from 'uuid';
import { Users, users } from '../models/users';
import { SessionData } from '../types';
import { PaperConfig, papers } from '../models/paper';
import { HOST_ADDRESS } from '../config';
import template from '../template';
import { findUser } from '../services/users';

export function getCreatePaper (req: Request, res: Response) {
  const { isLogined } = req.session as SessionData;
  const html = template.HTML('롤링 페이퍼 만들기', `
  <h3>친구의 이름과 생일 입력</h3>
  <form action="/paper" method="post" enctype='application/json'>
    <p><input type="text" name="friendName" placeholder="친구 이름" value="홍길순" /></p>
    <p><input type="text" name="friendBirth" placeholder="친구 생일" value="0706" /></p>
    <input type="submit" value="롤링 페이퍼 만들기">
  </form>
  `, isLogined);

  res.send(html);
}

export function postCreatePaper (req: Request, res: Response) {
  const { isLogined, user: sessionUser } = req.session as SessionData;
  const { friendName, friendBirth } = req.body;
  
  if (isLogined && sessionUser) {
    const user = findUser(sessionUser.id);
    if (user === null) res.json({message: '찾을 수 없는 사용자입니다'});
    const index = papers.findIndex(({userId}) => userId === user.id);
    // papers.splice(index, 1, {...papers[index], uid: uuidv1()})
    papers.splice(index, 1, {...papers[index], name: friendName, birth: friendBirth, uid: '0b30f880-adb4-11ec-9205-2b546b0d71f6'})
    res.redirect(301, `/paper/${papers[index].id}/0b30f880-adb4-11ec-9205-2b546b0d71f6`);
  } else {
    res.redirect(301, '/auth/login');
  }
}

export function getPaperPost (req: Request, res: Response) {
  const {paperId, uid: paperUid} = req.params;
  
  const paper = papers.find(({id}) => id === Number(paperId)) as PaperConfig;
  if (!paper) {
    res.json({message: '찾을 수 없는 롤링 페이퍼 입니다.'});
  } else {
    const html = template.HTML('롤링 페이퍼', `
      <h3>${paper.name} 의 롤링 페이퍼</h3>
      <form action="/paper/${paperUid}" method="post" enctype='application/json'>
        <p><input type="text" name="name" placeholder="작성자" value="김동수" /></p>
        <p>
          <textarea name="content" rows="5" cols="30">
  길순아!
  생일 축하해!
  from 동수가
          </textarea>
        </p>
        <input type="submit" value="롤링 페이퍼 등록">
      </form>
      <a href="${HOST_ADDRESS}">메인으로 이동</a>
      <br />
    `);
    res.send(html);
  }
}

// export function postPaperComplete (req: Request, res: Response) {
//   const { uid } = req.params;
//   const paper = papers[uid];
//   if (paper) {
//     const uuid = '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c';
//     paper.completedId = '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c';
//     paper.isCompleted = true;
//     res.redirect(`/paper/${uid}?complete=${uuid}`);
//   } else {
//     res.redirect(`/paper/${uid}`);
//   }
// }
