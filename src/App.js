import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './Navbar';
import AppFooter from './Footer';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail'; // Import the new ProjectDetail component
//import ThreeJSAnimation from './ThreeJSAnimation';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        {/*<ThreeJSAnimation />*/}
        <Routes> {/* Use the Routes component */}
          <Route path="/" element={<Projects />} /> {/* Use the "element" prop */}
          <Route path="/projects/:id" element={<ProjectDetail />} /> {/* Use the "element" prop */}
        </Routes>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;