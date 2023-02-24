import { createContext, useState } from "react";
import React from "react";
export const themeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState({
    status: false
  });

  function handleTheme(newtheme) {
    setIsDarkMode({
      ...isDarkMode,
      status: newtheme
    });
  }

  return (
    <themeContext.Provider value={{ isDarkMode, handleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
