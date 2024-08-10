import React, { useContext } from "react";
import { useTheme } from "./ContextTheme";
import cx from "classname";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cx(
        "relative w-16 h-8 flex items-center rounded-full justify-between transition-colors duration-300 bg-gray-700",
        {
          "!bg-gray-300": theme === "light",
        }
      )}
    >
      <span
        className={cx(
          "w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-8",
          {
            "!translate-x-1": theme === "light",
          }
        )}
      />
    </button>
  );
};

export default ThemeToggleButton;
