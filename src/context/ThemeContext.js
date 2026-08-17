"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isVenomMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [isVenomMode, setIsVenomMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme_mode");
    if (savedTheme === "venom") {
      setIsVenomMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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

export function useTheme() {
  return useContext(ThemeContext);
}
