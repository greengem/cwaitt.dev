import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { IconBrandGithub, IconBrandReact, IconBrandNextjs, IconBrandVue, IconBrandAngular, IconBrandTailwind, IconBrandPython, IconBrandPhp, IconBrandBootstrap, IconBrandThreejs} from '@tabler/icons-react';

export default function AppHero() {
  return (
<section id='hero'>
  <div className="max-w-screen-xl mx-auto h-screen">
    <div className="container h-full text-center">
      <p className="notice mt-20 mb-20">
        This website is currently <strong>under construction</strong>
      </p>
      <h1 className='tracking-tight font-bold text-6xl md:text-7xl lg:text-8xl mb-10'>
        Hello, I&apos;m <span className="from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">Chris Waitt</span>
      </h1>
      <h2 className="text-2xl md:text-3xl mb-1">
        Turning Ideas into Stunning Web Interfaces
      </h2>
      <p className="text-lg md:text-xl mb-20">
        Front-End Developer | UI/UX Enthusiast
      </p>
      <div className="flex justify-center items-center w-full mb-20">
        <Link as={NextLink} href="/projects" className="mr-3">
          <Button color="default" size="lg">
            View My Work
          </Button>
        </Link>
        <Link as={NextLink} href="https://github.com/greengem" isExternal>
          <Button color='default' size="lg" variant="bordered">
            <IconBrandGithub /> Github
          </Button>
        </Link>
      </div>
      <div className="grid gap-y-7 grid-cols-5 max-w-screen-md mx-auto justify-items-center">
        <IconBrandReact className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandNextjs className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandVue className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandAngular className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandTailwind className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandThreejs className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandBootstrap className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandPython className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandPhp className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
        <IconBrandGithub className="transition ease-in-out duration-300 hover:text-secondary" stroke={1} width={48} height={48} />
      </div>
    </div>
  </div>
</section>

  );
}
