import AppHero from '../components/Hero/Hero.js';
import AppAbout from '../components/About/About.js';

export default function Home({ projects }) {
  return (
    <>
      <AppHero />
      <AppAbout />
    </>
  );
}
