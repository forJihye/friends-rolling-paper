import express from 'express';
import { Session } from 'express-session';
import { sessionOptions } from './app';

const router = express.Router();

const authData = {
  id: 'jihye',
  pw: '0000',
  name: 'jihye'
}

// 로그인 확인
router.post('/login', function (req, res) {
  const {id, pw, name} = req.body;
  console.log(req.body);
  const session = req.session as Session & Partial<{ name: string; userId: string; isLogined: boolean; }>;
  if (id === authData.id && pw === authData.pw) {
    session.userId = id;
    session.name = name;
    session.isLogined = true;
    session.save(function(err){
      if (err) console.error(err);
      else {
        res.status(200).redirect('/');
      }
    });
  } else {
    session.isLogined = false;
    res.status(401).redirect('/');
  }
});

// 로그아웃
router.get('/logout', function (req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('[Internal Server Error] Session destroy ')
    } else {
      res.clearCookie(sessionOptions.name);
      res.redirect('/');
    }
  });
})


export default router;

