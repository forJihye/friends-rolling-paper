
type PaperConfig = {
  [uid: string]: {
    userId: string;
    friendName: string;
    friendBirth: string;
    isCompleted: boolean;
    completedId: string;
  }
};

export const papers: PaperConfig = {
  "0b30f880-adb4-11ec-9205-2b546b0d71f6": {
    userId: 'ghdrlfehd',
    friendName: '홍길순',
    friendBirth: '0706',
    isCompleted: true,
    completedId: ''
  }
}

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
