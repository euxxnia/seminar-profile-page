import React from 'react';
import { useParams } from 'react-router-dom';

import { works } from '../data/works';

const WorksDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 id 가져오기
  const selectedWork = works.find((workItem) => workItem.id === Number(id)); // work -> workItem으로 변경

  if (selectedWork === undefined) {
    return <div>Work not found</div>; // 명시적인 null, undefined 체크
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{selectedWork.title}</h2>
      <p>Date: {selectedWork.date}</p>
      <p>Tags: {selectedWork.tags.join(', ')}</p>
      <p>Keywords: {selectedWork.keywords.join(', ')}</p>
      <img
        src={selectedWork.image}
        alt={selectedWork.title}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p>{selectedWork.content}</p>
    </div>
  );
};

export default WorksDetailPage;
