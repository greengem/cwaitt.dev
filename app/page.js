import AppHero from '../components/Home/Hero/Hero.js';
import AppAbout from '../components/Home/About/About.js';
import AppSkills from '../components/Home/Skills/Skills.js';
import AppHomeRecent from '../components/Home/Recent/Recent.js';
import AppSocial from '../components/Home/Social/Social.js';
import { fetchLatestProjects } from 'lib/contentful';

async function getData() {
  const projects = await fetchLatestProjects(2);
  return projects;
}

export default async function Home() {
  const projects = await getData();

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
