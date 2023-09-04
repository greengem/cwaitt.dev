import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppNavbar from './Navbar/AppNavbar';
import HomePage from '../HomePage/HomePage';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import AppFooter from './Footer/AppFooter';
import TwinklingStars from '../Common/TwinklingStars/TwinklingStars';

import './App.css';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
    <AppFooter />
    <div className="stars-overlay">
      <TwinklingStars />
    </div>
  </Router>
);

export default App;
