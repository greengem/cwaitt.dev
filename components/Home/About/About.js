import Container from '../../../components/Layout/Container'
import HomeSection from '../../../components/Layout/Section/HomeSection'
import {Image} from "@nextui-org/image";
import NextImage from "next/image";
import AppAboutText from './AboutText.js';

export default function AppAbout() {
  return (
    <HomeSection id='about'>
      <Container>
          <h1 className='custom-heading from-[#5EA2EF] to-[#0072F5]'>Behind the Code</h1>
          <AppAboutText />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
              <Image
                as={NextImage}
                shadow='lg'
                width={1136}
                height={639}
                className='shadow-xl'
                alt="NextUI hero Image"
                src="https://picsum.photos/id/3/1136/639"
              />
              <Image
                as={NextImage}
                shadow='lg'
                width={1136}
                height={639}
                alt="NextUI hero Image"
                src="https://picsum.photos/id/2/1136/639"
              />
          </div>
      </Container>
    </HomeSection>
  );
}
