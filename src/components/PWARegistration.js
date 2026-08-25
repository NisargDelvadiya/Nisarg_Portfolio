"use client";

import { useEffect } from "react";

/**
 * PWARegistration Component
 * 
 * Automatically registers the Progressive Web App (PWA) Service Worker located at `/sw.js`
 * upon window load with defensive exception handling.
 * 
 * @returns {null} Invisible background worker component
 */
export default function PWARegistration() {
  useEffect(() => {
    try {
      if (
        typeof window !== "undefined" &&
        "serviceWorker" in navigator &&
        window.location.protocol.startsWith("http")
      ) {
        const handleLoad = () => {
          try {
            navigator.serviceWorker
              .register("/sw.js")
              .then((registration) => {
                if (process.env.NODE_ENV === "development") {
                  console.log(
                    "PWA ServiceWorker registered with scope:",
                    registration.scope
                  );
                }
              })
              .catch((error) => {
                console.warn("PWA ServiceWorker registration issue:", error);
              });
          } catch (err) {
            console.warn("PWA ServiceWorker execution error:", err);
          }
        };

        if (document.readyState === "complete") {
          handleLoad();
        } else {
          window.addEventListener("load", handleLoad);
          return () => window.removeEventListener("load", handleLoad);
        }
      }
    } catch (err) {
      console.warn("PWARegistration: Initialization error:", err);
    }
  }, []);

  return null;
}
