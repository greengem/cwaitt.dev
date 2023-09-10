import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import {Bezier2, CodeSlash, Tools, Server} from 'react-bootstrap-icons';

function AppSkills() {
  return (
    <section id='skills' className="py-20">
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10 '>
            <h1 className='custom-heading from-[#6FEE8D] to-[#17c964]'>Skills</h1>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
                    <Card isBlurred shadow="sm" className='p-4'>
                        <CardHeader className='text-xl font-semibold tracking-tight '><Bezier2 className='mr-2' /> Designer</CardHeader>
                        <CardBody className='text-default-700 tracking-tight '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardBody>
                    </Card>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
                    <Card isBlurred shadow="sm" className='p-4'>
                        <CardHeader className='text-xl font-semibold tracking-tight '><CodeSlash className='mr-2' />Frontend Developer</CardHeader>
                        <CardBody className='text-default-700 tracking-tight '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardBody>
                    </Card>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
                    <Card isBlurred shadow="sm" className='p-4'>
                        <CardHeader className='text-xl font-semibold tracking-tight '><Server className='mr-2' />Backend Developer</CardHeader>
                        <CardBody className='text-default-700 tracking-tight '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardBody>
                    </Card>
                </div>
            </div>
            <div className='text-center mt-10'>
                <Button size='lg' className='bg-gradient-to-tr from-[#6FEE8D] to-[#17c964]  text-white shadow-lg'><Tools />Tech Stack</Button>
            </div>
        </div>
    </section>

  );
}

export default AppSkills;

