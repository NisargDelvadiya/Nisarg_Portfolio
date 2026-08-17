import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahin's Portfolio",
  description:
    "I’m Mahin Gunjal, a passionate Web Designer and VFX Artist pursuing my Bachelor’s degree at ITM SLS Baroda University. I specialize in creating modern, responsive, and visually engaging websites that combine clean UI/UX design with interactive digital experiences. With a strong interest in web design, frontend development, UI/UX, creative design, and digital experiences, I enjoy transforming ideas into high-quality websites that are both functional and visually impactful. Alongside my web design journey, I am currently pursuing a VFX course at ZICA (Zee Institute of Creative Art), developing skills in visual effects, motion graphics, compositing, video editing, 3D design, and digital storytelling. My goal is to combine web development, creative design, and VFX to build immersive digital experiences. I’m passionate about exploring new creative technologies and delivering work that blends technology, design, animation, and visual storytelling.",
  authors: [{ name: "Mahin" }],
  keywords: ["Mahin", "Portfolio", "Web Designer", "VFX Artist", "JavaScript"],
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
  manifest: "/favicon/site.webmanifest?v=20260817",
  appleWebApp: {
    title: "Mahin_Portfolio",
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
        <meta name="apple-mobile-web-app-title" content="Mahin_Portfolio" />
        <link rel="manifest" href="/favicon/site.webmanifest?v=20260817" />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
