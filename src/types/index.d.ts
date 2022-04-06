import {Session} from 'express-session'
import { Users } from '../models/users';

type SessionData = (
  Session & { 
    user: { name: string; id: string; } | null;
    isLogined: boolean; 
  }
)