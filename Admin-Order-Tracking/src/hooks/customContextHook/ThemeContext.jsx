import React, { useState, useContext } from "react";

// created customContext
const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext();

// created customConte hooks
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeContextUpdate);
}

// Main Custom Component
const ThemeProvider = ({ children }) => {
  const [darkTheme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme((prev) => !prev);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeContextUpdate.Provider value={toggleTheme}>
          {children}
        </ThemeContextUpdate.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
