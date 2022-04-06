
export type Users = {
  id: number;
  userId: string;
  name: string;
  salt?: string;
  hash?: string;
}

export const users: Users[] = [
  {
    id: 0,
    userId: 'ghdrlfehd',
    name: '홍길동'
  },
  {
    id: 1,
    userId: 'dbwotjr',
    name: '유재석'
  }
]

