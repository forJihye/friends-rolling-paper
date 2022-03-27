import {Request, Response, NextFunction} from 'express';

export const wrapAsync = (f: (req: Request, res: Response, next: NextFunction) => any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    f(req, res, next).catch(next);
  }
}

// wrapAsync(async function (req, res) {
//   await new Promise(resolve => setTimeout(() => resolve, 50))
//   // 비동기 에러
//   throw new Error("woops")
// })