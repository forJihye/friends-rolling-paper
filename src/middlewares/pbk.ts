import { Users } from "../models/users";

const hash = require('pbkdf2-password')();

export const setEncryption = (userPw: string, callback: (v: null|{salt: string; hash: string}) => void) => {
  hash({ password: userPw}, function (err: any, pass: any, salt: any, hash: any) {
    if (err) callback(null);
    callback({salt, hash});
  });
}

export const setDecryption = (users: Users[], userId: string, userPw: string, callback: (err: null|boolean, user: null|any) => void) => {
  const user = users.find((user) => user.userId === userId)
  if (!user) return callback(null, null);
  if (!user.hash || !user.salt) return callback(null, null);
  hash({ password: userPw, salt: user.salt }, function (err: any, pass: any, salt: any, hash: any) {
    if (err) return callback(null, null);
    if (hash === user.hash) return callback(false, user);
  });
}
