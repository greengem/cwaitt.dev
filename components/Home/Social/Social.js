import React from 'react';
import { Card, CardHeader, CardBody, Link, Image, Button } from "@nextui-org/react";
import { Github, Linkedin, Twitter, Instagram } from 'react-bootstrap-icons';
import NextLink from "next/link";

function AppSocial() {

    const socialCards = [
        {
            icon: Linkedin,
            title: "Linkedin",
            link: "https://www.linkedin.com/in/chriswaitt/",
            username: "@chriswaitt",
        },
        {
            icon: Github,
            title: "Github",
            link: "https://github.com/greengem",
            username: "@greengem",
        },
        {
            icon: Twitter,
            title: "Twitter",
            link: "#",
            username: "@chriswaitt",
        },
        {
            icon: Instagram,
            title: "Instagram",
            link: "#",
            username: "@chriswaitt",
        },
    ];

    return (
        <section id='social' className='py-20'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10 '>
                <h1 className='custom-heading from-[#FF72E1] to-[#F54C7A]'>Let's Collaborate</h1>
                <p className='mb-20 p-1'><strong>Connecting Beyond Code:</strong> In today's digital age, our journeys are more than just the code we write or the projects we build. It's about the shared experiences, the challenges conquered, and the knowledge gained. My social media channels provide a glimpse into my everyday life as a developer, the inspirations I stumble upon, and the conversations I engage in. Whether you're a fellow developer looking to exchange ideas, a recruiter hoping to catch a snapshot of my expertise, or just curious about my adventures in the tech realm, these platforms offer a window. Dive in, let's connect, and together, let's push the boundaries of what's possible in the world of technology.</p>
                <div className='flex flex-wrap'>
                    {socialCards.map((card, index) => (
                        <div key={index} className='w-full md:w-1/2 lg:w-1/4 p-2'>
                            <Card shadow="sm">
                                <CardHeader className="flex gap-3">
                                    <card.icon height='40' width='40' />
                                    <div className="flex flex-col">
                                        <p className="text-md">{card.title}</p>
                                        <p className="text-small text-default-500">
                                            {card.link
                                                ? <Link color='danger' isExternal as={NextLink} href={card.link}>{card.username}</Link>
                                                : card.username
                                            }
                                        </p>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AppSocial;