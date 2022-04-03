import { NextFunction, Request, Response } from 'express';
import { SessionData } from '../types';

export function restrict (req: Request, res: Response, next: NextFunction) {
  const isLogined = (req.session as SessionData).isLogined;
  if (isLogined === undefined || !isLogined) {
    (req.session as SessionData).isLogined = false;
    res.redirect('/auth/login');
  } else {
    next();
  }
}
