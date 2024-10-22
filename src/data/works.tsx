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
    title: '컴공 홈페이지 리뉴얼',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['UXUI Design'],
    image: '/CSEREAL.png',
    content: 'Work 1 content...',
  },
  {
    id: 2,
    title: 'SNUTT',
    tags: ['UXUI'],
    date: '2023~',
    keywords: ['Product Design'],
    image: '/SNUTT.png',
    content: 'Work 2 content...',
  },
  {
    id: 3,
    title: 'Designing a Product',
    tags: ['Graphic/Branding'],
    date: '2024',
    keywords: ['Graphic Design: Starter Kit'],
    image: '/DesigningAProduct.png',
    content: 'Work 2 content...',
  },
  {
    id: 4,
    title: 'Icebreaker',
    tags: ['UXUI'],
    date: '02/2024',
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
    tags: ['Graphic/Branding'],
    date: '08/2024',
    keywords: ['Logo Design'],
    image: '/Nieve.png',
    content: 'Work 5 content...',
  },
];
