import {Request, Response, NextFunction} from 'express';
import { v1 as uuidv1 } from 'uuid';
import template from '../template';
import { users } from '../models/users';
import { SessionData } from '../types';
import { HOST_ADDRESS } from '../config';
import { papers, postList } from '../models/paper';

function getMainPaper (req: Request, res: Response) {
  const {isLogined, user} = req.session as SessionData;
  console.log(req.session)
  const html = template.HTML('롤링 페이퍼 메인', `
  <h1>${user?.name} 롤링 페이퍼 메인 페이지</h1>
  <a href="${HOST_ADDRESS}/paper/create">롤링 페이퍼 만들기<a/>
  `, isLogined);
  res.send(html);
}

function getCreatePaper (req: Request, res: Response) {
  const { isLogined } = req.session as SessionData;
  const html = template.HTML('롤링 페이퍼 만들기', `
  <h3>친구의 이름과 생일 입력</h3>
  <form action="/paper/create" method="post" enctype='application/json'>
    <p><input type="text" name="friendName" placeholder="친구 이름" value="홍길동" /></p>
    <p><input type="text" name="friendBirth" placeholder="친구 생일" value="0706" /></p>
    <input type="submit" value="롤링 페이퍼 만들기">
  </form>
  `, isLogined);
  res.send(html);
}
 
function postCreatePaper (req: Request, res: Response) {
  const { isLogined, user } = req.session as SessionData;
  const { friendName, friendBirth } = req.body;
  
  if (isLogined && user) {
    // const data = {
    //   userId: user.id,
    //   friendName,
    //   friendBirth,
    //   isCompleted: false,
    //   completedId: '',
    // }
    // papers[uuidv1()] = data;
    res.redirect(`/0b30f880-adb4-11ec-9205-2b546b0d71f6`);
  } else {
    res.redirect('/auth/login');
  }
}

function getPaperByUid (req: Request, res: Response) {
  const { isLogined, user } = req.session as SessionData;
  const uid = req.params.uid;

  const paper = papers[uid];
  if (paper) {
    const html = template.HTML('롤링 페이퍼', `
      <h3>${paper.friendName}의 롤링 페이퍼</h3>
      <form action="/paper/message" method="post" enctype='application/json'>
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
      <br />
      `);
    res.send(html);
  } else {
    res.redirect('/');
  }
}

function postPaperInsert (req: Request, res: Response) {
  const { uid } = req.params;
  const { isLogined, user } = req.session as SessionData;
  const {name, content} = req.body;
  console.log(name, content);
  // postList.push({name, content})
  res.redirect(`/${uid}`);
}

module.exports = {
  getMainPaper,
  getCreatePaper,
  postCreatePaper,
  getPaperByUid,
  postPaperInsert
}