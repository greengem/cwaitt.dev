import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../Icons/SunIcon"; // Ensure the correct path
import { MoonIcon } from "../Icons/MoonIcon"; // Ensure the correct path

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Switch
        size="sm"
        className="ms-2"
        color="danger"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        isSelected={theme === "dark"}
        onValueChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
      />
    </div>
  );
};
