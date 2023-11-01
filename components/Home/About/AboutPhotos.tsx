"use client";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Image} from "@nextui-org/image";
import NextImage from "next/image";

export default function AboutPhotos() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <AnimationOnScroll animateIn="animate__fadeInUp">
            <Image
                as={NextImage}
                shadow='lg'
                isZoomed
                width={1136}
                height={639}
                alt="NextUI hero Image"
                src="/images/about/code.jpeg"
            />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
            <Image
                as={NextImage}
                shadow='lg'
                isZoomed
                width={1136}
                height={639}
                alt="NextUI hero Image"
                src="/images/about/hobby.jpeg"
            />
            </AnimationOnScroll>
        </div>
    );
}