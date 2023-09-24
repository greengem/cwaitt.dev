'use client'
import Container from '../../../components/Layout/Container'
import HeroSection from '../../../components/Layout/Section/HeroSection'
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { IconBrandGithub, IconBrandReact, IconBrandNextjs, IconBrandVue, IconBrandAngular, IconBrandTailwind, IconBrandPython, IconBrandPhp, IconBrandBootstrap, IconBrandThreejs} from '@tabler/icons-react';

export default function AppHero() {
  return (
    <HeroSection>
      <Container>
          <p className="notice mb-5 text-xs">
            <strong>Notice:</strong> This website is currently <strong>under construction</strong>
          </p>
          <h1 className='tracking-tight font-bold text-6xl md:text-7xl lg:text-8xl mb-10'>
            Hello, I&apos;m <span className="from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">Chris Waitt</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-5">
            Turning Ideas into Stunning Web Interfaces
          </h2>
          <p className="text-lg md:text-xl mb-20">
          Front-End Expertise with a Passion for UI/UX
          </p>
          <div className="mb-40">
            <Link as={NextLink} href="/projects" className="mr-3 block">
              <Button color="secondary" size="lg" variant="ghost">
                View My Work
              </Button>
            </Link>
          </div>
          <p className="text-xs uppercase mb-5">Merging form with function for seamless user experiences.</p>
          <div className="grid gap-y-6 grid-cols-5 max-w-screen-sm mx-auto justify-items-center">
            <IconBrandReact className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandNextjs className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandVue className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandAngular className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandTailwind className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandThreejs className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandBootstrap className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandPython className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandPhp className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
            <IconBrandGithub className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={32} height={32} />
          </div>
      </Container>
    </HeroSection>
  );
}
