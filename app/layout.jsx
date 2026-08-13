import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nisarg's Portfolio",
  description:
    "Hi, I'm Nisarg — a Next.js Developer crafting fast, responsive, and SEO-optimized web applications. From concept to deployment, I build secure, seamless, scalable and high-impact digital experiences from server architecture to premium UI/UX.",
  authors: [{ name: "Nisarg" }],
  keywords: ["Nisarg", "Portfolio", "Next.js Developer", "JavaScript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png?v=20260805"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon/favicon.svg?v=20260805"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=20260805" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png?v=20260805"
        />
        <meta name="apple-mobile-web-app-title" content="Nisarg_Portfolio" />
        <link rel="manifest" href="/favicon/site.webmanifest?v=20260805" />
      </head>
      <body className={inter.className}>
        {/* WCAG 2.4.1 Skip to Main Content link for keyboard & screen-reader accessibility */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:px-6 focus:py-3 focus:bg-purple focus:text-black focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieConsent />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
