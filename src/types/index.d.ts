import {Session} from 'express-session'
import { Users } from '../routes/auth';

type SessionData = (
  Session & Partial<{ user: Users; isLogined: boolean; }>
)