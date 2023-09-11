// pages/index.js

// Internal dependencies
import AppHero from '../components/Home/Hero/Hero.js';
import AppAbout from '../components/Home/About/About.js';
import AppSkills from '@/components/Home/Skills/Skills.js';
import AppHomeRecent from '@/components/Home/Recent/Recent.js'; // Ensure path is correct
import AppSocial from '@/components/Home/Social/Social.js';
import { fetchLatestProjects } from 'lib/contentful'; // Ensure path is correct

function Home({ projects }) {
  return (
    <>
      <AppHero />
      <AppAbout />
      <AppSkills />
      <AppHomeRecent projects={projects} />
      <AppSocial />
    </>
  );
}

export async function getStaticProps() {
  const projects = await fetchLatestProjects(2);

  return {
    props: {
      projects,
    },
    revalidate: 60, // Optional: Set how often Next.js should re-run this function (in seconds)
  };
}

export default Home;
