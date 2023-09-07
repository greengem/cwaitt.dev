// Internal dependencies
import AppHero from '../components/Hero/Hero.js';
import AppAbout from '../components/About/About.js';

/**
 * Home Page Component
 * 
 * This is the landing page of the application.
 * It consists of a hero section (AppHero) and an about section (AppAbout).
 *
 * @returns JSX.Element
 */
export default function Home() {
  return (
    <>
      <AppHero />
      <AppAbout />
    </>
  );
}
