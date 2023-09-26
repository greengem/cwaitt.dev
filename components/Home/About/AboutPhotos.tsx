import {Image} from "@nextui-org/image";
import NextImage from "next/image";

export default function AboutPhotos() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            <Image
                as={NextImage}
                shadow='lg'
                isZoomed
                width={1136}
                height={639}
                className='shadow-xl'
                alt="NextUI hero Image"
                src="/images/about/code.jpeg"
            />
            <Image
                as={NextImage}
                shadow='lg'
                isZoomed
                width={1136}
                height={639}
                alt="NextUI hero Image"
                src="/images/about/hobby.jpeg"
            />
        </div>
    );
}