import { getTwoRecentProjects } from '@/lib/api';
import AppHero from '@/components/Home/Hero/Hero';
import AppAbout from '@/components/Home/About/About';
import AppSkills from '@/components/Home/Skills/Skills';
import AppHomeRecent from '@/components/Home/Recent/Recent';
import AppSocial from '@/components/Home/Social/Social';
import {Divider} from "@nextui-org/divider";

export default async function Home() {
  const twoProjects = await getTwoRecentProjects();
  return (
    <>
      <AppHero />
      <AppAbout />
      <Divider />
      <AppSkills />
      <Divider />
      <AppHomeRecent twoProjects={twoProjects} />
      <Divider />
      <AppSocial />
    </>
  );
}
