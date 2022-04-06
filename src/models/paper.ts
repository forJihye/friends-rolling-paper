
export type PaperConfig = {
  id: number;
  userId: number;
  name: string;
  birth: string;
  uid: string;
  completedUid: string;
  isCompleted: boolean;
}

export const papers: PaperConfig[] = [
  {
    id: 0,
    userId: 0,
    name: '홍길순',
    birth: '0706',
    uid: "0b30f880-adb4-11ec-9205-2b546b0d71f6",
    completedUid: '',
    isCompleted: false,
  },
  {
    id: 1,
    userId: 0,
    name: '김동수',
    birth: '1220',
    uid: '',
    completedUid: '',
    isCompleted: false,
  }
]

type Post = {
  name: string;
  content: string;
};

export const postList: Post[] = [
  { 
    name: '홍길순1', 
    content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' 
  },
  { 
    name: '홍길순2', 
    content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' 
  },
  { 
    name: '홍길순3', 
    content: '길동아!\r\n생일 축하해!\r\nfrom 길순이가\r\n' 
  }
];
