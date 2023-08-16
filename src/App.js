import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './Navbar';
import AppFooter from './Footer';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
//import ThreeJSAnimation from './ThreeJSAnimation';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        {/*<ThreeJSAnimation />*/}
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