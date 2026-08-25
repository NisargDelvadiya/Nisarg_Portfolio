"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Root Layout Global Error Boundary
 * 
 * In Next.js App Router, global-error.js captures unhandled exceptions in the root layout.
 * It renders its own <html> and <body> elements with fallback UI, diagnostic info, and retry functionality.
 */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log exception safely without crashing
    try {
      console.error("Critical Root Exception caught by global-error.js:", error);
    } catch {
      // Ignore logging failures
    }
  }, [error]);

  const handleReload = () => {
    try {
      if (typeof reset === "function") {
        reset();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch {
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <title>Application Error | Mahin Gunjal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          padding: "24px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          backgroundColor: "#050508",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "#0d0d14",
            border: "3px solid #a31515",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(163, 21, 21, 0.3)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(163, 21, 21, 0.2)",
              border: "1px solid #a31515",
              color: "#ff6b6b",
              fontWeight: 800,
              fontSize: "12px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            CRITICAL APPLICATION ERROR
          </div>

          <h1
            style={{
              fontSize: "36px",
              fontWeight: 900,
              margin: "0 0 16px 0",
              letterSpacing: "-1px",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            System Recovery Mode
          </h1>

          <p
            style={{
              color: "#a1a1aa",
              fontSize: "15px",
              lineHeight: "1.6",
              margin: "0 0 24px 0",
            }}
          >
            An unexpected error occurred during core initialization. Our automatic error recovery system has caught this exception to protect your session.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={handleReload}
              style={{
                padding: "12px 24px",
                backgroundColor: "#fbbf24",
                color: "#000000",
                fontWeight: 900,
                fontSize: "13px",
                border: "2px solid #000000",
                borderRadius: "14px",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              🔄 Reload Application
            </button>

            <Link
              href="/"
              style={{
                padding: "12px 24px",
                backgroundColor: "#a31515",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "13px",
                border: "2px solid #ffffff",
                borderRadius: "14px",
                textDecoration: "none",
                display: "inline-block",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              🏠 Return to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
