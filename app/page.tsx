import AppHero from '@/components/Home/Hero/Hero';
import AppAbout from '@/components/Home/About/About';
import AppSkills from '@/components/Home/Skills/Skills';
import AppHomeRecent from '@/components/Home/Recent/Recent';
import AppSocial from '@/components/Home/Social/Social';

export default function Home() {
  return (
    <>
      <AppHero />
      <AppAbout />
      <AppSkills />
      <AppHomeRecent />
      <AppSocial />
    </>
  );
}
