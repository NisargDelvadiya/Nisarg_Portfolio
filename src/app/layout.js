import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import PWARegistration from "@/components/PWARegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#a31515",
};

export const metadata = {
  title: "Mahin Gunjal — Web Designer & VFX Artist",
  description:
    "I’m Mahin Gunjal, a passionate Web Designer and VFX Artist pursuing my Bachelor’s degree at ITM SLS Vadodara University. I specialize in creating modern, responsive, and visually engaging websites that combine clean UI/UX design with interactive digital experiences. Alongside my web design journey, I am currently pursuing a VFX course at ZICA, developing skills in visual effects, motion graphics, compositing, video editing, 3D design, and digital storytelling.",
  authors: [{ name: "Mahin Gunjal" }],
  keywords: ["Mahin Gunjal", "Portfolio", "Web Designer", "VFX Artist", "JavaScript", "React", "Next.js"],
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png?v=20260817", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg?v=20260817", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico?v=20260817",
    apple: [
      { url: "/favicon/apple-touch-icon.png?v=20260817", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mahin Gunjal",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png?v=20260817" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg?v=20260817" />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=20260817" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=20260817" />
        <meta name="theme-color" content="#a31515" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mahin Gunjal" />
        <link rel="manifest" href="/manifest.json" />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
