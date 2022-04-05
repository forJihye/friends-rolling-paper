import {Request, Response, NextFunction} from 'express';
import { v1 as uuidv1 } from 'uuid';
import template from '../template';
import { SessionData } from '../types';
import { HOST_ADDRESS } from '../config';
import { papers, postList } from '../models/paper';

export function getPaperByUid (req: Request, res: Response) {
  const uid = req.params.uid;
  const {isLogined, user} = req.session as SessionData;

  const paper = papers[uid];
  if (paper && !paper.isCompleted) {
    const html = template.HTML('롤링 페이퍼', `
      <h3>${paper.friendName}의 롤링 페이퍼</h3>
      <form action="/paper/${uid}" method="post" enctype='application/json'>
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
      ${isLogined ? `
      <form action="/paper/${uid}/complete" method="post" enctype='application/json'>
        <input type="submit" value="롤링 페이퍼 완성하기">
      </form>` : ''}
      `);
    res.send(html);
  } else if (paper && paper.isCompleted) {
    const html = template.HTML('롤링 페이퍼', `${template.list(postList)}`);
    res.send(html);
  } else {
    res.redirect('/');
  }
}

export function postPaperInsert (req: Request, res: Response) {
  const { uid } = req.params;
  const {name, content} = req.body;
  console.log(name, content);
  // postList.push({name, content})
  res.redirect(`/paper/${uid}`);
}

export function postPaperComplete (req: Request, res: Response) {
  const { uid } = req.params;
  const paper = papers[uid];
  if (paper) {
    const uuid = '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c';
    paper.completedId = '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c';
    paper.isCompleted = true;
    res.redirect(`/paper/${uid}?complete=${uuid}`);
  } else {
    res.redirect(`/paper/${uid}`);
  }
}
