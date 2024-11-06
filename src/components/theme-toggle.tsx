"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative  flex w-[16px] items-center justify-center p-2 md:w-[20px] "
    >
      <Moon
        size={16}
        className="absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"
      />
      <Sun
        size={16}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};

export { ThemeToggle };
