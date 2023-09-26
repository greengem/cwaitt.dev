import HomeSection from '@/components/Layout/Section/HomeSection'
import Container from '@/components/Layout/Container'
import Heading from '@/components/Layout/Heading/Heading';
import AboutText from '@/components/Home/About/AboutText';
import AboutPhotos from '@/components/Home/About/AboutPhotos';

export default function AppAbout() {
  return (
    <HomeSection id='about'>
      <Container>
          <Heading title="Behind the Code" />
          <AboutText />
          <AboutPhotos />
      </Container>
    </HomeSection>
  );
}
