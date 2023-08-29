import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppNavbar from './Navbar/AppNavbar';
import AppFooter from './Footer/AppFooter';
import HomePage from '../HomePage/HomePage';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
    <AppFooter />
  </Router>
);

export default App;
