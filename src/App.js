import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './Navbar';
import AppFooter from './Footer';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import './App.css';
import AppHero from './Hero';
import AppAboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <AppHero />
        <AppAboutMe />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;