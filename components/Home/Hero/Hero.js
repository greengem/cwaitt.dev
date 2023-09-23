'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { IconBrandGithub, IconBrandReact, IconBrandNextjs, IconBrandVue, IconBrandAngular, IconBrandTailwind, IconBrandPython, IconBrandPhp, IconBrandBootstrap, IconBrandThreejs} from '@tabler/icons-react';
import Star from "./Star";

export default function AppHero() {
  const numStars = 100;
  const { theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const renderStars = () => {
    if (theme === 'dark' && hasMounted) {
      return Array.from({ length: numStars }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: Math.random() * 1.5 }}
        >
          <Star delay={Math.random()} />
        </motion.div>
      ));
    }
    return null;
  };

  return (
    <section id='hero' className="pt-40 h-screen overflow-x-hidden">
        {renderStars()}

      <div className="max-w-screen-xl mx-auto">
        <div className="container h-full text-center">
          <p className="notice mb-3">
            <strong>Notice:</strong> This website is currently <strong>under construction</strong>
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
          <div className="mb-20">
            <Link as={NextLink} href="/projects" className="mr-3 block">
              <Button color="secondary" size="lg" variant="ghost">
                View My Work
              </Button>
            </Link>
          </div>
          <p className="text-xs uppercase mb-2">- All the latest tech -</p>
          <div className="grid gap-y-7 grid-cols-5 max-w-screen-sm mx-auto justify-items-center">
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
        </div>
      </div>
    </section>

  );
}
