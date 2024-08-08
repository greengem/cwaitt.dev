import Container from "@/components/Layout/Container";
import HeroSection from "@/components/Layout/Section/HeroSection";
import HeroHeading from "@/components/Home/Hero/HeroHeading";
import HeroSubtitle from "@/components/Home/Hero/HeroSubtitle";
import HeroCta from "@/components/Home/Hero/HeroCta";

export default function AppHero() {
  return (
    <HeroSection>
      <Container>
        <HeroHeading />
        <HeroSubtitle />
        <HeroCta />
      </Container>
    </HeroSection>
  );
}
