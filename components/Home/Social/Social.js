import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import {Github, Linkedin, Twitter} from 'react-bootstrap-icons';

function AppSocial() {
    return (
        <section id='social' className='py-20'>
<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10 '>
<h1 className='custom-heading from-[#FF72E1] to-[#F54C7A]'>Socials</h1>
<p className='mb-5 text-lg p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div className='flex flex-wrap'>
    <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
        <Card shadow="sm" className='p-4'>
            <CardHeader className='text-xl font-semibold tracking-tight '><Linkedin className='mr-2' />Linkedin</CardHeader>
            <CardBody className='text-default-700 tracking-tight '>@chriswaitt</CardBody>
        </Card>
    </div>
    <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
        <Card shadow="sm" className='p-4'>
            <CardHeader className='text-xl font-semibold tracking-tight '><Github className='mr-2' />Github</CardHeader>
            <CardBody className='text-default-700 tracking-tight '>@greengem</CardBody>
        </Card>
    </div>
    <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
        <Card shadow="sm" className='p-4'>
            <CardHeader className='text-xl font-semibold tracking-tight'><Twitter className='mr-2' />Twitter</CardHeader>
            <CardBody className='text-default-700 tracking-tight '>@chriswaitt</CardBody>
        </Card>
    </div>
    <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
        <Card shadow="sm" className='p-4'>
            <CardHeader className='text-xl font-semibold tracking-tight'><Twitter className='mr-2' />Twitter</CardHeader>
            <CardBody className='text-default-700 tracking-tight '>@chriswaitt</CardBody>
        </Card>
    </div>
</div>
</div>
        </section>

  );
}

export default AppSocial;
