import Container from '@/components/Layout/Container'
import HomeSection from '@/components/Layout/Section/HomeSection'
import AboutHeading from '@/components/Home/About/AboutHeading';
import AboutText from '@/components/Home/About/AboutText';
import AboutPhotos from '@/components/Home/About/AboutPhotos';

export default function AppAbout() {
  return (
    <HomeSection id='about'>
      <Container>
          <AboutHeading />
          <AboutText />
          <AboutPhotos />
      </Container>
    </HomeSection>
  );
}
