import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "@/components/Icons/SunIcon";
import { MoonIcon } from "@/components/Icons/MoonIcon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialThemeColor = theme === "dark" ? "#000000" : "#ffffff";
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', initialThemeColor);
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      import('highlight.js/styles/github-dark.css');
    } else {
      import('highlight.js/styles/github.css');
    }
  }, [theme]);

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
        onValueChange={(isSelected) => {
          const newTheme = isSelected ? "dark" : "light";
          setTheme(newTheme);
          const themeColor = newTheme === "dark" ? "#181818" : "#ffffff";
          document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
        }}
      />
    </div>
  );
};
