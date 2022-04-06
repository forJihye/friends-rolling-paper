import {Request, Response, NextFunction} from 'express';
import { SessionData } from '../types';
import { HOST_ADDRESS } from '../config';
import template from '../template';

export function getMainPaper (req: Request, res: Response, next: NextFunction) {
  const {isLogined, user} = req.session as SessionData;
  
  const html = template.HTML('롤링 페이퍼 메인', `
  <h1>${user?.name} 롤링 페이퍼 메인 페이지</h1>
  <a href="${HOST_ADDRESS}/paper">롤링 페이퍼 만들기<a/>
  <br />
  <a href="${HOST_ADDRESS}/mypaper">내가 만든 롤링 페이퍼</a>
  `, isLogined);
  res.send(html);
}
