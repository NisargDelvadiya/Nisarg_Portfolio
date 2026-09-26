import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PWARegistration from "@/components/PWARegistration";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#AA0505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("https://nisargjayeshdelvadiya.com"),
  title: {
    default: "Nisarg Jayesh Delvadiya — Full-Stack Web Developer & Engineer",
    template: "%s | Nisarg Jayesh Delvadiya",
  },
  description:
    "Official Portfolio of Nisarg Jayesh Delvadiya — Full-Stack Engineer and Co-Founder at Duo Brothers, specializing in Next.js, Sarvam AI, React, Node.js, GSAP animations, UI/UX architecture, and modern web applications.",
  applicationName: "Nisarg Jayesh Delvadiya Portfolio",
  authors: [{ name: "Nisarg Jayesh Delvadiya", url: "https://nisargjayeshdelvadiya.com" }],
  generator: "Next.js",
  keywords: [
    "Nisarg Delvadiya",
    "Nisarg Jayesh Delvadiya",
    "Nisarg",
    "Full-Stack Engineer",
    "Next.js Developer",
    "Sarvam AI",
    "React.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Duo Brothers",
    "Bookified",
    "Node.js",
    "GSAP Animations",
    "Tailwind CSS",
    "UI UX Architecture",
    "Portfolio",
    "Vadodara",
    "Gujarat",
    "India",
    "Bharat",
  ],
  creator: "Nisarg Jayesh Delvadiya",
  publisher: "Nisarg Jayesh Delvadiya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nisarg Jayesh Delvadiya — Full-Stack Web Developer & Engineer",
    description:
      "Explore the official portfolio of Nisarg Jayesh Delvadiya. Showcasing Bookified, freelance web solutions with Duo Brothers, Next.js, Sarvam AI, and cutting-edge UI/UX design.",
    url: "https://nisargjayeshdelvadiya.com",
    siteName: "Nisarg Jayesh Delvadiya Portfolio",
    images: [
      {
        url: "/Assets/Mahin.jpeg",
        width: 1200,
        height: 630,
        alt: "Nisarg Jayesh Delvadiya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisarg Jayesh Delvadiya — Full-Stack Web Developer & Engineer",
    description:
      "Explore the official portfolio of Nisarg Jayesh Delvadiya. Next.js, Sarvam AI, React, and Duo Brothers full-stack web engineering.",
    images: ["/Assets/Mahin.jpeg"],
    creator: "@NisargDelvadiya",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png?v=20260925", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg?v=20260925", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico?v=20260925",
    apple: [
      { url: "/favicon/apple-touch-icon.png?v=20260925", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest?v=20260925",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nisarg Jayesh Delvadiya Portfolio",
  },
};

/** Structured JSON-LD Schema for Rich Search Results */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nisargjayeshdelvadiya.com/#person",
      "name": "Nisarg Jayesh Delvadiya",
      "jobTitle": "Full-Stack Web Developer & Engineer",
      "url": "https://nisargjayeshdelvadiya.com",
      "image": "https://nisargjayeshdelvadiya.com/Assets/Iron_Man.png",
      "description":
        "Full-Stack Engineer and Co-Founder of Duo Brothers specializing in Next.js, Sarvam AI, React, Node.js, and high-performance modern web applications.",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Manipal University Jaipur",
      },
      "knowsAbout": [
        "Sarvam AI",
        "Next.js",
        "React.js",
        "Full-Stack Web Development",
        "Node.js",
        "GSAP Animations",
        "MongoDB & Mongoose",
        "Tailwind CSS",
        "UI/UX Architecture",
        "Leadership",
        "Communication",
        "Networking",
      ],
      "sameAs": [
        "https://github.com/NisargDelvadiya",
        "https://thenisargcritic.blogspot.com",
        "https://www.linkedin.com/in/nisarg-delvadiya",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nisargjayeshdelvadiya.com/#website",
      "url": "https://nisargjayeshdelvadiya.com",
      "name": "Nisarg Jayesh Delvadiya Portfolio",
      "description": "Official Web Development & Engineering Portfolio of Nisarg Jayesh Delvadiya",
      "publisher": {
        "@id": "https://nisargjayeshdelvadiya.com/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://nisargjayeshdelvadiya.com/#profilepage",
      "url": "https://nisargjayeshdelvadiya.com",
      "name": "Nisarg Jayesh Delvadiya Portfolio Profile",
      "mainEntity": {
        "@id": "https://nisargjayeshdelvadiya.com/#person",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png?v=20260925" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg?v=20260925" />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=20260925" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=20260925" />
        <meta name="theme-color" content="#AA0505" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nisarg Portfolio" />
        <link rel="manifest" href="/favicon/site.webmanifest?v=20260925" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden transition-colors duration-300 bg-white dark:bg-[#0a0a0a]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:px-5 focus:py-2.5 focus:bg-[#AA0505] focus:text-white focus:font-black focus:rounded-xl focus:shadow-2xl focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <PWARegistration />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
