import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from 'react';
import { useRouter } from 'next/router';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Gem } from 'react-bootstrap-icons';
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { ThemeSwitcher } from "../DarkModeToggle/DarkModeToggle";

function AppNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
      <NavbarBrand><Link color="foreground" href="/"><Gem className='me-2' /></Link> <p className="font-bold text-inherit"><Link color="foreground" href="/">CHRIS WAITT</Link></p></NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive={router.pathname === '/'}>
          <Link href="/" as={NextLink} color="danger">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={router.pathname.startsWith('/projects')}>
          <Link href="/projects" as={NextLink} color="danger">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={router.pathname.startsWith('/tech-stack')}>
          <Link href="/tech-stack" as={NextLink} color="danger">
            Tech
          </Link>
        </NavbarItem>
          <ThemeSwitcher />
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem><Link href="/" color="danger" className="w-full" size="lg">Home</Link></NavbarMenuItem>
          <NavbarMenuItem><Link href="/projects" color="danger" className="w-full" size="lg">Projects</Link></NavbarMenuItem>
          <NavbarMenuItem><Link href="/tech-stack" color="danger" className="w-full" size="lg">Tech Stack</Link></NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default AppNavbar;
