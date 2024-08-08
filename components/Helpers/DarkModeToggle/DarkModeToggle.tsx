"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunIcon } from "@/components/Icons/SunIcon";
import { MoonIcon } from "@/components/Icons/MoonIcon";
import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  if (!isMounted) return null;

  return (
    <Switch
      isSelected={isDarkMode}
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={toggleTheme}
      aria-label="Toggle dark mode"
    />
  );
}
