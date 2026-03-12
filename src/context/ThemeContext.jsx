import React, { createContext, useContext } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const darkMode = useDarkMode();
  return (
    <ThemeContext.Provider value={darkMode}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
