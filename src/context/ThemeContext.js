"use client";

import React, {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  useEffect,
} from "react";

/**
 * @typedef {Object} ThemeContextType
 * @property {boolean} isVenomMode - Whether the Venom Symbiote (Dark/Purple) mode is currently active.
 * @property {() => void} toggleTheme - Toggle between Spider-Man Red (Light) and Venom Symbiote (Dark) theme.
 */

const ThemeContext = createContext({
  isVenomMode: false,
  toggleTheme: () => {},
});

// Defensive snapshot getter for browser client
const getClientSnapshot = () => {
  try {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme_mode");
      if (savedTheme === "venom") return true;
      if (savedTheme === "spidey") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  } catch {
    // Safe fallback
  }
  return false;
};

// Safe snapshot for SSR server rendering
const getServerSnapshot = () => false;

// Event subscription for theme updates across tabs and within the window
const subscribe = (callback) => {
  try {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", callback);
      window.addEventListener("theme-change", callback);
      return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener("theme-change", callback);
      };
    }
  } catch {
    // Fallback
  }
  return () => {};
};

/**
 * ThemeProvider component that wraps the entire portfolio application.
 * Manages theme state (Spider-Man Light vs. Venom Dark) using useSyncExternalStore
 * for React 19 concurrency and zero cascading renders.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements wrapped by the theme provider.
 * @returns {JSX.Element}
 */
export function ThemeProvider({ children }) {
  const isVenomMode = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  // Synchronize HTML document classes defensively
  useEffect(() => {
    try {
      if (typeof document !== "undefined") {
        if (isVenomMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    } catch (err) {
      console.warn("ThemeProvider: Class synchronization error:", err);
    }
  }, [isVenomMode]);

  /**
   * Toggles active theme state and dispatches event to sync all consumers.
   */
  const toggleTheme = useCallback(() => {
    try {
      if (typeof window !== "undefined") {
        const nextMode = !getClientSnapshot();
        if (nextMode) {
          window.localStorage.setItem("theme_mode", "venom");
          document.documentElement.classList.add("dark");
        } else {
          window.localStorage.setItem("theme_mode", "spidey");
          document.documentElement.classList.remove("dark");
        }
        window.dispatchEvent(new Event("theme-change"));
      }
    } catch (err) {
      console.warn("ThemeProvider: Failed to save theme:", err);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isVenomMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom React hook to consume the ThemeContext safely
 * @returns {ThemeContextType}
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      isVenomMode: false,
      toggleTheme: () => {},
    };
  }
  return context;
}
