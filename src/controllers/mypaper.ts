import {Request, Response, NextFunction} from 'express';
import template from '../template';
import { SessionData } from '../types';
import { HOST_ADDRESS } from '../config';

export function getMyPaper (req: Request, res: Response, next: NextFunction) {
  const {isLogined, user} = req.session as SessionData;
  const html = template.HTML('마이 페이퍼', `
  <h1>${user?.name} 마이 페이퍼</h1>
  `, isLogined);
  
  res.send(html);
}
