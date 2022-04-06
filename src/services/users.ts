import { users, Users } from "../models/users";

export const updatedUser = (userIndex: number, authData: {salt: any; hash: any}) => {
  const index = users.findIndex(({id}) => id === userIndex);
  users.splice(index, 1, {...users[index], salt: authData.salt, hash: authData.hash});
  return users;
}

export const findUser = (userId: string) => {
  return users.find((user) => user.userId === userId) as Users ?? null;
}