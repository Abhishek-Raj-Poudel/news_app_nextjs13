import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

//Darkmode in tailwind tutorial quick 5 min
function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-8 w-8 cursor-pointer text-gray-900"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
