import { draftMode } from 'next/headers';
import { getTwoRecentProjects } from '@/lib/api';
import AppHero from '@/components/Home/Hero/Hero';
import AppAbout from '@/components/Home/About/About';
import AppSkills from '@/components/Home/Skills/Skills';
import AppHomeRecent from '@/components/Home/Recent/Recent';
import AppSocial from '@/components/Home/Social/Social';

export default async function Home() {
  const { isEnabled } = draftMode();
  const twoProjects = await getTwoRecentProjects(isEnabled);
  return (
    <>
      <AppHero />
      <AppAbout />
      <AppSkills />
      <AppHomeRecent projects={twoProjects} />
      <AppSocial />
    </>
  );
}
