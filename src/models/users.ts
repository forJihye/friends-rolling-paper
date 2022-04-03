
export type Users = {
  [name: string] : {
    name: string;
    id?: string;
    salt?: string;
    hash?: string;
  }
}

export const users: Users = {
  'ghdrlfehd': { name: '홍길동' }
}
