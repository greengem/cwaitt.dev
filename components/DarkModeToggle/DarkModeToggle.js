'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        size="md"
        className="ms-2"
        color="secondary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        isSelected={theme === "dark"}
        onValueChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
      />
    </div>
  );
};
