import { useLocation, useNavigate } from 'react-router-dom';

import styles from '../App.module.css';

const DefaultHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.header}>
      <button
        onClick={() => {
          navigate('/');
        }}
        className={`${styles.navButton ?? ''} ${location.pathname === '/' ? (styles.activeButton ?? '') : ''}`}
      >
        About
      </button>
      <button
        onClick={() => {
          navigate('/works');
        }}
        className={`${styles.navButton ?? ''} ${location.pathname === '/works' ? (styles.activeButton ?? '') : ''}`}
      >
        Works
      </button>
      <button
        onClick={() => {
          navigate('/blog');
        }}
        className={`${styles.navButton ?? ''} ${location.pathname === '/blog' ? (styles.activeButton ?? '') : ''}`}
      >
        Blog
      </button>
    </div>
  );
};

export default DefaultHeader;
