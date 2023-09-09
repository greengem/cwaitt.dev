// Internal dependencies
import AppHero from '../components/Home/Hero/Hero.js';
import AppAbout from '../components/Home/About/About.js';
import AppSkills from '@/components/Home/Skills/Skills.js';

export default function Home() {
  return (
    <>
      <AppHero />
      <AppAbout />
      <AppSkills />
    </>
  );
}
