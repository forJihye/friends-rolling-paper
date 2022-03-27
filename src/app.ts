import express, {Request, Response, NextFunction} from 'express';
import session, { Session } from 'express-session';
import sessionFileStore from 'session-file-store';
import authRouter from './auth';
import paperRouter from './paper';
import template from './template';
import store from './store';
  
const app = express();
const FileStore = sessionFileStore(session);

export const sessionOptions = {
  name: 'my.connect.sid',
  secret: 'EOFKVNS49439W3JG',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 60 * 12 * 30
  },
  store: new FileStore()
};

app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 로그인 상태 미들웨어
function loginMiddleware (req: Request, res: Response, next: NextFunction) {
  const { isLogined } = req.session as Session & Partial<{ name: string; userId: string; isLogined: boolean; }>;
  console.log('isLogined', isLogined)
  if (isLogined === undefined || !isLogined) {
    res.redirect('/login');
  } else {
    next();
  }
}

// 메인
app.get('/', loginMiddleware, function (req, res) {
  const {name} = req.session as Session & Partial<{ name: string; userId: string; isLogined: boolean; }>;
  res.redirect(`/${name}`);
});

// 로그인 폼 렌더링
app.get('/login', function (req, res) {
  const html = template.HTML('login', `
    <form action="/auth/login" method="post" enctype='application/json'>
      <p><input type="text" name="id" placeholder="id" /></p>
      <p><input type="password" name="pw" placeholder="password" /></p>
      <p><input type="text" name="name" placeholder="name" /></p>
      <input type="submit" value="로그인">
    </form>
  `)
  res.send(html);
});

// 인증 라우터
app.use('/auth', authRouter);

// 롤링 페이퍼 라우터
app.use('/:username', paperRouter);

// 에러 미들웨어
app.use(function (error: Error, req: Request, res: Response, next: NextFunction) {
  res.json({message: error.message});
})

app.listen(3000,() => {
  console.log('http://localhost:3000');
});
