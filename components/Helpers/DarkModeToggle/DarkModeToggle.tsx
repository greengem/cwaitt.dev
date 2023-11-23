"use client";
import React from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "@/components/Icons/SunIcon";
import { MoonIcon } from "@/components/Icons/MoonIcon";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (    
      <Switch
        isSelected={isDarkMode}
        size="md"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <MoonIcon className={className} />
          ) : (
            <SunIcon className={className} />
          )
        }
        onChange={() => {
          setTheme(isDarkMode ? "light" : "dark");
        }}
      >
      </Switch>
  );
}
