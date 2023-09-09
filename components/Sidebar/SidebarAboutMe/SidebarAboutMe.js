import React from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { Github, Linkedin } from 'react-bootstrap-icons';

function SidebarAboutMe() {
  return (
    <Card className='mb-4'>
      <CardHeader>
        <h4 className="font-bold text-large">Author</h4>
      </CardHeader>
      <CardBody>
        <h5>Chris Waitt</h5>
        <p className="card-text">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
      </CardBody>
      <CardFooter>
        <a href='https://www.linkedin.com/in/chriswaitt/' target="_blank" rel="noreferrer"><Linkedin className='me-2' /></a> 
        <a href='https://github.com/greengem' target="_blank" rel="noreferrer"><Github /></a>
      </CardFooter>
    </Card>
  );
}

export default SidebarAboutMe;
