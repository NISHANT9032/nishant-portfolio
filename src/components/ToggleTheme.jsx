import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-5 right-5 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full shadow"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ToggleTheme;
