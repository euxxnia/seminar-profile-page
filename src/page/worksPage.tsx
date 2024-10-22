import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../App.module.css';

type Work = {
  id: number;
  title: string;
  tags: string[];
  date: string;
  keywords: string[];
  image: string;
  content: string;
};

const worksData = [
  {
    id: 1,
    title: 'Work 1',
    tags: ['UXUI'],
    date: '2024-01-01',
    keywords: ['design', 'ux'],
    image: 'image1.jpg',
    content: 'Work 1 content...',
  },
  {
    id: 2,
    title: 'Work 2',
    tags: ['Graphic Design'],
    date: '2024-02-15',
    keywords: ['graphics', 'art'],
    image: 'image2.jpg',
    content: 'Work 2 content...',
  },
  {
    id: 3,
    title: 'Work 3',
    tags: ['UXUI', 'Web Development'],
    date: '2024-03-10',
    keywords: ['web', 'development'],
    image: 'image3.jpg',
    content: 'Work 3 content...',
  },
];

type WorksListProps = {
  works: Work[];
};

const WorksList: React.FC<WorksListProps> = ({ works }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  // works 배열에서 고유한 태그 목록 추출
  const uniqueTags = Array.from(new Set(works.flatMap((work) => work.tags)));

  // 태그 선택 및 선택 해제 함수
  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag],
    );
  };

  // 선택된 태그에 따라 works 필터링
  const filteredWorks =
    selectedTags.length > 0
      ? works.filter((work) =>
          work.tags.some((tag) => selectedTags.includes(tag)),
        )
      : works;

  return (
    <div>
      <div className={styles.filter}>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`${styles.tag ?? ''} ${selectedTags.includes(tag) ? (styles.activeTag ?? '') : ''}`}
            onClick={() => {
              toggleTag(tag);
            }}
          >
            {tag}
          </button>
        ))}
        <button
          className={styles.tag}
          onClick={() => {
            setSelectedTags([]);
          }}
        >
          All
        </button>
      </div>

      <div className={styles.worksList}>
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className={styles.workItem}
            onClick={() => {
              navigate(`/works/${work.id}`);
            }}
          >
            <h3>{work.title}</h3>
            <p>Date: {work.date}</p>
            <p>Keywords: {work.keywords.join(', ')}</p>
            <p>Tags: {work.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorksPage = () => {
  return <WorksList works={worksData} />;
};

export default WorksPage;
