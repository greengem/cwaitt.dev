import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from 'react';
import { useRouter } from 'next/router';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button } from "@nextui-org/react";
import { Gem, ChevronDown, ArrowLeftRight } from 'react-bootstrap-icons';
import { ThemeSwitcher } from "../DarkModeToggle/DarkModeToggle";

function AppNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const icons = {
    arrowlr: <ArrowLeftRight />,
    chevron: <ChevronDown />,
  }

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
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                endContent={icons.chevron}
              >
                Tools
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Convert special characters to HTML entities."
              href="/tools/escape"
              startContent={icons.arrowlr}
            >
              Text Escaper
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
          
          
        </NavbarContent>
        <ThemeSwitcher />
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
