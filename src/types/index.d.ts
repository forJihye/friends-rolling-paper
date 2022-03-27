import {Session} from 'express-session'

declare global {
  type SessionData = (
    Session & Partial<{ name: string; userId: string; isLogined: boolean; }>
  )
}