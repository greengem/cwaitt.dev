import React from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';

function SidebarAboutMe() {
  return (
    <div className="card mb-4">
      <div className="card-header">Author</div>
      <div className="card-body">
      <h5 className="card-title">Chris Waitt</h5>
      <p className="card-text">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
      </div>
      <div className="card-footer">
        <a href='https://www.linkedin.com/in/chriswaitt/' target="_blank" rel="noreferrer"><Linkedin className='me-2' /></a> <a href='https://github.com/greengem' target="_blank" rel="noreferrer"><Github /></a>
      </div>
    </div>
  );
}

export default SidebarAboutMe;
