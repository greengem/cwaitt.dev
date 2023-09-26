import HomeSection from '@/components/Layout/Section/HomeSection'
import Container from '@/components/Layout/Container'
import Heading from '@/components/Layout/Heading/Heading';
import SocialHeading from '@/components/Home/Social/SocialHeading';
import SocialText from '@/components/Home/Social/SocialText';
import SocialCards from '@/components/Home/Social/SocialCards';

export default function AppSocial() {
    return (
        <HomeSection id='social'>
            <Container>
                <Heading title="Let's Collaborate" />
                <SocialText />
                <SocialCards />
            </Container>
        </HomeSection>
    );
}
