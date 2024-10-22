export type Work = {
  id: number;
  title: string;
  tags: string[];
  date: string;
  keywords: string[];
  image: string;
  content: string;
};

export const works: Work[] = [
  {
    id: 1,
    title: 'SNU CSE 홈페이지 리뉴얼',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['UXUI Design'],
    image: '/CSEREAL.png',
    content: 'Work 1 content...',
  },
  {
    id: 2,
    title: 'SNUTT: 서울대학교 시간표',
    tags: ['UXUI'],
    date: '2023~',
    keywords: ['Product Design'],
    image: '/SNUTT.png',
    content: 'Work 2 content...',
  },
  {
    id: 3,
    title: 'Designing a Product',
    tags: ['Graphic', 'Dev', 'HCI'],
    date: '2024',
    keywords: ['Starter Kit Design & Web'],
    image: '/DesigningAProduct.png',
    content: 'Work 2 content...',
  },
  {
    id: 4,
    title: 'Icebreaker',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['Hackathon: UXUI Design, LLM'],
    image: '/Icebreaker.png',
    content: 'Work 3 content...',
  },
  {
    id: 5,
    title: 'ADMIT ONE',
    tags: ['HCI', 'UXUI'],
    date: '2024',
    keywords: ['HCI Research & UXUI Design'],
    image: '/AdmitOne.png',
    content: 'Work 4 content...',
  },
  {
    id: 6,
    title: 'Cafe NIEVE',
    tags: ['Graphic'],
    date: '2024',
    keywords: ['Logo Design'],
    image: '/Nieve.png',
    content: 'Work 5 content...',
  },
  {
    id: 7,
    title: 'Emotion Tracker',
    tags: ['Graphic', 'Dev'],
    date: '2023',
    keywords: ['Web & Animation'],
    image: '/EmotionTracker2.png',
    content: 'Work 7 content...',
  },
  {
    id: 8,
    title: 'Observing C Codes',
    tags: ['Graphic', 'Dev'],
    date: '2023',
    keywords: ['Typography Poster'],
    image: '/ObservingCCodes.png',
    content: 'Work 8 content...',
  },
  {
    id: 9,
    title: 'Childrens Day',
    tags: ['Graphic', 'Dev'],
    date: '2023',
    keywords: ['Motion Typography Web'],
    image: '/ChildrensDay.png',
    content: 'Work 8 content...',
  },
  {
    id: 10,
    title: 'LIGHTBANK',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['Lending protocol for Kroma'],
    image: '/Lightbank.png',
    content: 'Work 9 content...',
  },
];
