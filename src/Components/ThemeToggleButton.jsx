import { useContext } from 'react';

import { Sun, Moon } from 'lucide-react'; // or use emojis or SVG
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title="Toggle Theme"
    >
      {dark ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-gray-900 w-5 h-5" />}
    </button>
  );
};

export default ThemeToggleButton;
