import React from 'react';

import About from '../components/about.tsx';
import Contact from '../components/contact.tsx';

const MainPage: React.FC = () => {
  return (
    <div>
        <div className="background"></div>
        <About />
        <Contact />
      </div>
  );
};

export default MainPage;