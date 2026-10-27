import { useTheme } from "@/hooks";
import { RiMoonLine, RiSunLine } from "@remixicon/react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <span
      onClick={toggleTheme}
      className="text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      {theme === "light" ? <RiMoonLine size={16} /> : <RiSunLine size={16} />}
    </span>
  );
}

export default ThemeToggle;
