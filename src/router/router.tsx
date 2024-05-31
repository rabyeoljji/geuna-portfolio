import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorView from '../view/ErrorView';
import IndexView from '../view/IndexView';
import ProjectView from '../view/ProjectView';
import EducationView from '../view/EducationView';

const Router = memo((): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<ErrorView />} />
      <Route path="/" element={<IndexView />} />
      <Route path="/project" element={<ProjectView />} />
      <Route path="/education" element={<EducationView />} />
    </Routes>
  );
});

export default Router;
