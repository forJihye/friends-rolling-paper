import {Session} from 'express-session'
import { Users } from '../models/users';

type SessionData = (
  Session & { 
    user: {
      name: string;
      salt: string;
      hash: string;
      id: string;
    };
    isLogined: boolean; 
  }
)