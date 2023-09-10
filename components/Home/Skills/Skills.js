import React from 'react';
import Link from 'next/link';
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import {Bezier2, CodeSlash, Tools, Server} from 'react-bootstrap-icons';

function AppSkills() {
  return (
    <section id='skills' className="py-20">
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10 '>
            <h1 className='custom-heading from-[#6FEE8D] to-[#17c964]'>Technical Expertise</h1>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
                <Card shadow="sm" className='p-4 card-container'>
                        <CardHeader className='text-xl font-semibold tracking-tight '><Bezier2 className='mr-2' /> Designer</CardHeader>
                        <CardBody className='text-default-700 tracking-tight card-body'>Combining aesthetics with functionality to create intuitive and compelling designs. Passionate about user-centric designs, with a keen eye for detail and a strong understanding of modern UX/UI principles.</CardBody>
                    </Card>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
                <Card shadow="sm" className='p-4 card-container'>
                        <CardHeader className='text-xl font-semibold tracking-tight '><CodeSlash className='mr-2' />Frontend Developer</CardHeader>
                        <CardBody className='text-default-700 tracking-tight card-body'>Crafting responsive, interactive, and user-friendly interfaces that bring designs to life. Skilled in HTML, CSS, and modern JavaScript frameworks to ensure optimal web performance and engaging user experiences.</CardBody>
                    </Card>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
                <Card shadow="sm" className='p-4 card-container'>
                        <CardHeader className='text-xl font-semibold tracking-tight '><Server className='mr-2' />Backend Developer</CardHeader>
                        <CardBody className='text-default-700 tracking-tight card-body'>Expert in server-side logic, ensuring smooth data integration and building robust APIs. Proficient in various back-end languages and database management, delivering secure and scalable solutions.</CardBody>
                    </Card>
                </div>
            </div>
            <div className='text-center mt-10'>
                <Link href='tech-stack'>
                <Button size='lg' className='bg-gradient-to-tr from-[#6FEE8D] to-[#17c964]  text-white shadow-lg'><Tools />Tech Stack</Button></Link>
            </div>
        </div>
    </section>

  );
}

export default AppSkills;

