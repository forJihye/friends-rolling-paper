import { Request, Response } from "express";
import { HOST_ADDRESS } from "../config";
import template from "../template";
import { SessionData } from "../types";

export function appController (req: Request, res: Response) {
  const { isLogined } = req.session as SessionData;
  const html = template.HTML('메인', `
  <h1>메인 화면</h1><br />
  ${!isLogined 
  ? `<a href="${HOST_ADDRESS}/auth/login">로그인</a>`
  : `<div>
    <a href="${HOST_ADDRESS}/auth/logout">로그아웃</a>
    <a href="${HOST_ADDRESS}/paper">롤링 페이퍼 만들기</a>
  </div>`}
  `)
  res.send(html);
}