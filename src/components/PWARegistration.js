"use client";

import { useEffect } from "react";

/**
 * PWARegistration Component
 * 
 * Automatically registers the Progressive Web App (PWA) Service Worker located at `/sw.js`
 * upon window load for offline caching, asset caching, and standalone install capabilities.
 * 
 * @returns {null} Invisible background worker component
 */
export default function PWARegistration() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("PWA ServiceWorker registered successfully with scope:", registration.scope);
          })
          .catch((error) => {
            console.log("PWA ServiceWorker registration failed:", error);
          });
      });
    }
  }, []);

  return null;
}
