"use client";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from "next/image";

export default function AboutPhotos() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <Image
                width={1136}
                height={639}
                alt="NextUI hero Image"
                src="/images/about/code.jpeg"
                className='shadow-lg rounded-xl'
            />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <Image
                width={1136}
                height={639}
                alt="NextUI hero Image"
                src="/images/about/hobby.jpeg"
                className='shadow-lg rounded-xl'
            />
            </AnimationOnScroll>
        </div>
    );
}