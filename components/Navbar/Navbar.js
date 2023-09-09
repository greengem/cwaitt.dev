import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from 'react';
import { useRouter } from 'next/router';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Gem } from 'react-bootstrap-icons';
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";

function AppNavbar({ isDarkMode, setIsDarkMode }) {
  const router = useRouter();

  return (
    <Navbar>
      <NavbarBrand><Gem className='me-1' /> <p className="font-bold text-inherit">CHRIS WAITT</p></NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={router.pathname === '/'}>
          <Link href="/" as={NextLink}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={router.pathname.startsWith('/projects')}>
          <Link href="/projects" as={NextLink}>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={router.pathname.startsWith('/tech-stack')}>
          <Link href="/tech-stack" as={NextLink}>
            Tech
          </Link>
        </NavbarItem>
        <Switch
          isSelected={isDarkMode}
          color="secondary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
          onValueChange={(isSelected) => setIsDarkMode(isSelected)}
        ></Switch>
      </NavbarContent>
    </Navbar>
  );
}

export default AppNavbar;
