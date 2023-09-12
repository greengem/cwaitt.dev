import React from 'react';
import NextLink from "next/link";
import {Card, CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";
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
        <Link as={NextLink} href='https://www.linkedin.com/in/chriswaitt/' isExternal>
          <Linkedin className='me-2' />
        </Link>
        <Link as={NextLink} href='https://github.com/greengem' isExternal>
          <Github />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default SidebarAboutMe;
