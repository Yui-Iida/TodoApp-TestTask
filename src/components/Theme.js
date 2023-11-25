import { useState } from "react";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <p
      className="flex justify-end mt-8 text-xl cursor-pointer lg:text-2xl dark:text-gray-300"
      onClick={toggleTheme}
    >
      {darkMode ? "☀️" : "☽"}
    </p>
  );
}
