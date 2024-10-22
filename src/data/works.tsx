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
    title: 'Work1',
    tags: ['UXUI'],
    date: '2024',
    keywords: ['Design', 'UX'],
    image: '/work1.png',
    content: 'Work 1 content...',
  },
  {
    id: 2,
    title: 'Work 2',
    tags: ['Graphic Design'],
    date: '2024',
    keywords: ['Graphics', 'Art'],
    image: 'image2.jpg',
    content: 'Work 2 content...',
  },
  {
    id: 3,
    title: 'Work 3',
    tags: ['UXUI', 'Web Development'],
    date: '2023',
    keywords: ['Web', 'Development'],
    image: 'image3.jpg',
    content: 'Work 3 content...',
  },
  {
    id: 4,
    title: 'Work 4',
    tags: ['UXUI', 'Web Development'],
    date: '2023',
    keywords: ['Web', 'Development'],
    image: 'image3.jpg',
    content: 'Work 3 content...',
  },
];
