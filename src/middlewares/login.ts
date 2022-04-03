import { NextFunction, Request, Response } from 'express';
import { papers } from '../models/paper';
import { SessionData } from '../types';

export function restrict (req: Request, res: Response, next: NextFunction) {
  const session = req.session as SessionData;
  if (!session.isLogined) {
    // const urlPath = req.originalUrl.split('/');
    // const paper = papers[urlPath[2]];
    // if (urlPath[1] === 'paper' && paper) {
    //   res.redirect(`/paper/${urlPath[2]}`);
    // } else {
    // }
    res.redirect('/auth/login');
  } else {
    next();
  }
}
