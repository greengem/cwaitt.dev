import React from 'react';
import Card from 'react-bootstrap/Card';
import { Github, Linkedin } from 'react-bootstrap-icons';

function SidebarAboutMe() {
  return (
    <Card className="mb-4">
    <Card.Header>Author</Card.Header>
      <Card.Body>
        <Card.Title>Chris Waitt</Card.Title>
        <Card.Text>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href='https://www.linkedin.com/in/chriswaitt/'><Linkedin className='me-2' /></a> <a href='https://github.com/greengem'><Github /></a>
      </Card.Footer>
    </Card>
  );
}

export default SidebarAboutMe;
