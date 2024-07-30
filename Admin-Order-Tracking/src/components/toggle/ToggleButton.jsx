import {
  useTheme,
  useThemeUpdate,
} from "../../hooks/customContextHook/ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa";

const ToggleButton = () => {
  const themeData = useTheme();
  const toggleTheme = useThemeUpdate();

  function handleToggle() {
    toggleTheme();
  }
  return (
    <>
      <button onClick={handleToggle} className="text-xl p-2 border rounded-md">
        {themeData ? <FaSun /> : <FaMoon />}
      </button>
    </>
  );
};

export default ToggleButton;
