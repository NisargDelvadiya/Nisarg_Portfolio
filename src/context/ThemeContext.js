"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * @typedef {Object} ThemeContextType
 * @property {boolean} isVenomMode - Whether the Venom Symbiote (Dark/Purple) mode is currently active.
 * @property {() => void} toggleTheme - Toggle between Spider-Man Red (Light) and Venom Symbiote (Dark) theme.
 */

const ThemeContext = createContext({
  isVenomMode: false,
  toggleTheme: () => {},
});

/**
 * ThemeProvider component that wraps the entire portfolio application.
 * Manages theme state (Spider-Man Light vs. Venom Dark) and persists preference to localStorage.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements wrapped by the theme provider.
 * @returns {JSX.Element}
 */
export function ThemeProvider({ children }) {
  const [isVenomMode, setIsVenomMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme_mode");
    if (savedTheme === "venom") {
      setIsVenomMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  /**
   * Toggles active theme state, updates HTML document class list, and saves to localStorage.
   */
  const toggleTheme = () => {
    setIsVenomMode((prev) => {
      const nextState = !prev;
      if (nextState) {
        localStorage.setItem("theme_mode", "venom");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme_mode", "spidey");
        document.documentElement.classList.remove("dark");
      }
      return nextState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isVenomMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom React hook to consume the ThemeContext
 * @returns {ThemeContextType}
 */
export function useTheme() {
  return useContext(ThemeContext);
}
