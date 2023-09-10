import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from 'react';
import { useRouter } from 'next/router';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Gem } from 'react-bootstrap-icons';
import { ThemeSwitcher } from "../DarkModeToggle/DarkModeToggle";

function AppNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand><Link color="foreground" href="/" as={NextLink}><Gem className='me-2' /></Link></NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive={router.pathname === '/'}>
          <Link href="/" as={NextLink} color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={router.pathname.startsWith('/projects')}>
          <Link href="/projects" as={NextLink} color="foreground">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={router.pathname.startsWith('/tech-stack')}>
          <Link href="/tech-stack" as={NextLink} color="foreground">
            Tech Stack
          </Link>
        </NavbarItem>
          <ThemeSwitcher />
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem><Link href="/" as={NextLink} color="foreground" className="w-full" size="lg">Home</Link></NavbarMenuItem>
          <NavbarMenuItem><Link href="/projects" as={NextLink} color="foreground" className="w-full" size="lg">Projects</Link></NavbarMenuItem>
          <NavbarMenuItem><Link href="/tech-stack" as={NextLink} color="foreground" className="w-full" size="lg">Tech Stack</Link></NavbarMenuItem>
      </NavbarMenu>
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
    </Navbar>
  );
}

export default AppNavbar;
