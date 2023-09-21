import React from 'react';
import NextLink from "next/link";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import {Chip} from "@nextui-org/chip";
import {Link} from "@nextui-org/link";
import { Bezier2, CodeSlash, Tools, Server } from 'react-bootstrap-icons';

export default function AppSkills() {
  return (
    <section id='skills' className="py-5">
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10 '>
        <div className='container'>
          <h1 className='custom-heading from-[#6FEE8D] to-[#17c964]'>Technical Expertise</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <Card shadow="lg" className='p-4 card-container'>
                <CardHeader className='text-xl font-semibold tracking-tight '><Bezier2 className='mr-2' /> Designer</CardHeader>
                <CardBody className='text-default-700 tracking-tight card-body relative'>
                  <p>Combining aesthetics with functionality to create intuitive and compelling designs. Passionate about user-centric designs, with a keen eye for detail and a strong understanding of modern UX/UI principles.</p>
                  <div className='flex flex-wrap mt-6'>
                    <Chip color='success' variant="dot" className='mr-2'>Figma</Chip>
                    <Chip color='success' variant="dot" className='mr-2'>Photoshop</Chip>
                  </div>
                </CardBody>
              </Card>
              <Card shadow="lg" className='p-4 card-container'>
                <CardHeader className='text-xl font-semibold tracking-tight '><CodeSlash className='mr-2' /> Frontend Developer</CardHeader>
                <CardBody className='text-default-700 tracking-tight card-body'>
                  <p>Crafting responsive, interactive, and user-friendly interfaces that bring designs to life. Skilled in HTML, CSS, and modern JavaScript frameworks to ensure optimal web performance and engaging user</p>
                  <div className='flex flex-wrap mt-6'>
                    <Chip color='success' variant="dot" className='mr-2'>React</Chip>
                    <Chip color='success' variant="dot" className='mr-2'>Vue</Chip>
                  </div>
                </CardBody>
              </Card>
              <Card shadow="lg" className='p-4 card-container'>
                <CardHeader className='text-xl font-semibold tracking-tight '><Server className='mr-2' /> Backend Developer</CardHeader>
                <CardBody className='text-default-700 tracking-tight card-body'>
                  <p>Expert in server-side logic, ensuring smooth data integration and building robust APIs. Proficient in various back-end languages and database management, delivering secure and scalable solutions.</p>
                  <div className='flex flex-wrap mt-6'>
                    <Chip color='success' variant="dot" className='mr-2'>PHP</Chip>
                    <Chip color='success' variant="dot">DB</Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
          <div className='mt-10'>
            <Link as={NextLink} href='tech-stack'>
              <Button size='lg' className='bg-gradient-to-tr from-[#6FEE8D] to-[#17c964]  text-white shadow-lg'><Tools /> Tech Stack</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}