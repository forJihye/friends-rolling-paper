import { NextFunction, Request, Response } from 'express';
import { SessionData } from '../types';

export function authRestrict (req: Request, res: Response, next: NextFunction) {
  const session = req.session as SessionData;
  if (!session.isLogined) {
    return res.redirect(301, '/auth/login');
  } else {
    return next();
  }
}
