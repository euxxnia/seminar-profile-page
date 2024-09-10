import React from 'react';

import About from '../components/About.tsx';
import Contact from '../components/Contact.tsx';

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
