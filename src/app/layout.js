import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import PWARegistration from "@/components/PWARegistration";
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
  themeColor: "#a31515",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("https://mahingunjal.com"),
  title: {
    default: "Mahin Gunjal — Web Designer & VFX Artist",
    template: "%s | Mahin Gunjal",
  },
  description:
    "Official Portfolio of Mahin Gunjal — Web Designer, Frontend Developer, and VFX Artist specializing in modern UI/UX, GSAP animations, 3D design, motion graphics, and digital storytelling.",
  applicationName: "Mahin Gunjal Portfolio",
  authors: [{ name: "Mahin Gunjal", url: "https://mahingunjal.com" }],
  generator: "Next.js",
  keywords: [
    "Mahin Gunjal",
    "Mahin",
    "Web Designer",
    "VFX Artist",
    "Frontend Developer",
    "UI UX Designer",
    "3D Designer",
    "Motion Graphics",
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP Animations",
    "Portfolio",
    "Vadodara",
    "Gujarat",
    "India",
  ],
  creator: "Mahin Gunjal",
  publisher: "Mahin Gunjal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahin Gunjal — Web Designer & VFX Artist",
    description:
      "Explore the creative portfolio of Mahin Gunjal. Featuring modern web design, interactive GSAP animations, VFX projects, and 3D modeling.",
    url: "https://mahingunjal.com",
    siteName: "Mahin Gunjal Portfolio",
    images: [
      {
        url: "/Assets/Mahin.jpeg",
        width: 1200,
        height: 630,
        alt: "Mahin Gunjal — Web Designer & VFX Artist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahin Gunjal — Web Designer & VFX Artist",
    description:
      "Explore the creative portfolio of Mahin Gunjal. Featuring modern web design, interactive GSAP animations, VFX projects, and 3D modeling.",
    images: ["/Assets/Mahin.jpeg"],
    creator: "@mahingunjal",
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
      { url: "/Assets/favicon/favicon-96x96.png?v=20260817", sizes: "96x96", type: "image/png" },
      { url: "/Assets/favicon/favicon.svg?v=20260817", type: "image/svg+xml" },
    ],
    shortcut: "/Assets/favicon/favicon.ico?v=20260817",
    apple: [
      { url: "/Assets/favicon/apple-touch-icon.png?v=20260817", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mahin Gunjal",
  },
};

/** Structured JSON-LD Schema for Rich Search Results */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mahingunjal.com/#person",
      "name": "Mahin Gunjal",
      "jobTitle": "Web Designer & VFX Artist",
      "url": "https://mahingunjal.com",
      "image": "https://mahingunjal.com/Assets/Mahin.jpeg",
      "description":
        "Passionate Web Designer and VFX Artist specializing in modern UI/UX design, interactive web experiences, and visual effects.",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "ITM SLS Baroda University",
      },
      "knowsAbout": [
        "Web Design",
        "Frontend Development",
        "VFX & Motion Graphics",
        "UI/UX Design",
        "3D Modeling",
        "React",
        "Next.js",
        "GSAP",
        "Blender",
        "Adobe Creative Suite",
      ],
      "sameAs": [
        "https://github.com/NisargDelvadiya",
        "https://www.linkedin.com/in/mahin-gunjal-1a133528b",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mahingunjal.com/#website",
      "url": "https://mahingunjal.com",
      "name": "Mahin Gunjal Portfolio",
      "description": "Official Web Designer & VFX Artist Portfolio of Mahin Gunjal",
      "publisher": {
        "@id": "https://mahingunjal.com/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mahingunjal.com/#profilepage",
      "url": "https://mahingunjal.com",
      "name": "Mahin Gunjal Portfolio Profile",
      "mainEntity": {
        "@id": "https://mahingunjal.com/#person",
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
        <link rel="icon" type="image/png" href="/Assets/favicon/favicon-96x96.png?v=20260817" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/Assets/favicon/favicon.svg?v=20260817" />
        <link rel="shortcut icon" href="/Assets/favicon/favicon.ico?v=20260817" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Assets/favicon/apple-touch-icon.png?v=20260817" />
        <meta name="theme-color" content="#a31515" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mahin Gunjal" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative transition-colors duration-300">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:px-5 focus:py-2.5 focus:bg-[#a31515] focus:text-white focus:font-black focus:rounded-xl focus:shadow-2xl focus:outline-none"
          >
            Skip to main content
          </a>
          {children}
          <PWARegistration />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
