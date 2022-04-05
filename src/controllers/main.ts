import {Request, Response, NextFunction} from 'express';
import { v1 as uuidv1 } from 'uuid';
import template from '../template';
import { users } from '../models/users';
import { SessionData } from '../types';
import { HOST_ADDRESS } from '../config';
import { papers, postList } from '../models/paper';

export function getMainPaper (req: Request, res: Response, next: NextFunction) {
  const {isLogined, user} = req.session as SessionData;
  const html = template.HTML('롤링 페이퍼 메인', `
  <h1>${user?.name} 롤링 페이퍼 메인 페이지</h1>
  <a href="${HOST_ADDRESS}/main/create">롤링 페이퍼 만들기<a/>
  <a href="${HOST_ADDRESS}/mypaper">내가 만든 롤링 페이퍼</a>
  `, isLogined);
  res.send(html);
}

export function getCreatePaper (req: Request, res: Response) {
  const { isLogined } = req.session as SessionData;
  const html = template.HTML('롤링 페이퍼 만들기', `
  <h3>친구의 이름과 생일 입력</h3>
  <form action="/main/create" method="post" enctype='application/json'>
    <p><input type="text" name="friendName" placeholder="친구 이름" value="홍길순" /></p>
    <p><input type="text" name="friendBirth" placeholder="친구 생일" value="0706" /></p>
    <input type="submit" value="롤링 페이퍼 만들기">
  </form>
  `, isLogined);
  res.send(html);
}

export function postCreatePaper (req: Request, res: Response) {
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
    res.redirect(301, '/paper/0b30f880-adb4-11ec-9205-2b546b0d71f6');
  } else {
    res.redirect(301, '/auth/login');
  }
}
