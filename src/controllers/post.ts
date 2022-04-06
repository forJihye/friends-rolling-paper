import {Request, Response, NextFunction} from 'express';
import { PaperConfig, papers } from '../models/paper';
import { HOST_ADDRESS } from '../config';
import template from '../template';

export function getPaperPost (req: Request, res: Response) {
  const {paperId, uid: paperUid} = req.params;
  console.log(req.params)
  const paper = papers.find(({id}) => id === Number(paperId)) as PaperConfig;
  if (!paper) {
    res.json({message: '찾을 수 없는 롤링 페이퍼 입니다.'});
  } else {
    const html = template.HTML('롤링 페이퍼', `
      <h3>${paper.name} 의 롤링 페이퍼</h3>
      <form action="/paper/${paperId}/${paperUid}" method="post" enctype='application/json'>
        <p><input type="text" name="name" placeholder="작성자" value="김동수" /></p>
        <p>
          <textarea name="content" rows="5" cols="30">
  길순아!
  생일 축하해!
  from 동수가
          </textarea>
        </p>
        <p><input type="hidden" name="isPost" value="0" /></p>
        <input type="submit" value="롤링 페이퍼 등록">
      </form>
      <a href="${HOST_ADDRESS}">메인으로 이동</a>
      <br />
    `);
    res.send(html);
  }
}

export function postPaper (req: Request, res:Response) {
  const {paperId, uid: paperUid} = req.params;
  const {name, content, isPost} = req.body;
  
  if (Number(isPost) > 0) {
    return res.json({message: '이미 등록하셨습니다'});
  } else {
    return res.redirect('/');
  }
}

// export function postPaperComplete (req: Request, res: Response) {
//   const { uid } = req.params;
//   const paper = papers[uid];
//   if (paper) {
//     const uuid = '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c';
//     paper.completedId = '5cb7b0f0-af66-11ec-a6d8-b39d1f12b83c';
//     paper.isCompleted = true;
//     res.redirect(`/paper/${uid}?complete=${uuid}`);
//   } else {
//     res.redirect(`/paper/${uid}`);
//   }
// }
