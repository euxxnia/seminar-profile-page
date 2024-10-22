import './App.css';

import { Route, Routes } from 'react-router-dom';

import DefaultHeader from './components/Header';
import MainPage from './page/mainPage';
import WorksPage from './page/worksPage';

const App = () => {
  return (
    <>
      <DefaultHeader />
      <div className="background"></div>
      <div>
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<WorksPage />} path="/works" />
          <Route element={<BlogPage />} path="/blog" />
        </Routes>
      </div>
    </>
  );
};

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Articles</h1>
    </div>
  );
};

export default App;
