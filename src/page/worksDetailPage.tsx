import React from 'react';
import { useParams } from 'react-router-dom';

import styles from '../App.module.css';
import { works } from '../data/works';

const WorksDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 id 가져오기
  const selectedWork = works.find((workItem) => workItem.id === Number(id)); // work -> workItem으로 변경

  if (selectedWork === undefined) {
    return <div>Work not found</div>; // 명시적인 null, undefined 체크
  }

  return (
    <div style={{ padding: '40px' }}>
      {selectedWork.tags.map((tag) => (
        <button
          key={tag}
          className={`${styles.tag ?? ''} ${tag.includes(tag) ? (styles.activeTag ?? '') : ''}`}
          style={{ cursor: 'auto' }}
        >
          {tag}
        </button>
      ))}
      <h2 className={styles.worksDetailTitle}>{selectedWork.title}</h2>
      <div className={styles.worksDetailDivider}></div>
      <img
        src={selectedWork.image}
        alt={selectedWork.title}
        style={{
          margin: '0 auto',
          marginTop: '40px',
          marginBottom: '32px',
          width: '50vw',
          height: 'auto',
        }}
      />
      <div
        className={styles.worksDetailInfos}
        style={{
          margin: '20px',
          color: '#D5CFCF',
          fontSize: '14px',
          fontWeight: '500',
        }}
      >
        <p>{selectedWork.date}</p>
        <p>#{selectedWork.keywords.join(', #')}</p>
      </div>
      <p className={styles.worksDetailContent}>{selectedWork.content}</p>
    </div>
  );
};

export default WorksDetailPage;
