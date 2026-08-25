import './globals.css'

export const metadata = {
  title: "Nisarg's Macfolio",
  description:
    "Hi, I'm Nisarg — a Next.js Developer crafting fast, responsive, and SEO-optimized web applications. From concept to deployment, I build secure, seamless, scalable and high-impact digital experiences from server architecture to premium UI/UX.",
  authors: [{ name: 'Nisarg', url: 'https://nisargjayeshdelvadiya.com/' }],
  creator: 'Nisarg',
  keywords: [
    'Nisarg',
    'Nisarg Delvadiya',
    'Next.js Developer',
    'React Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'Portfolio',
    'Macfolio',
    'macOS Portfolio',
    'Web Developer',
    'UI/UX Design',
    'Server Architecture',
    'Scalable Web Applications',
    'SEO Optimized',
    'GSAP Animations',
    'Tailwind CSS',
    'JavaScript',
    'TypeScript',
  ],
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png?v=laptop_v3', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg?v=laptop_v3', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=laptop_v3' },
    ],
    shortcut: '/favicon.ico?v=laptop_v3',
    apple: [
      { url: '/apple-touch-icon.png?v=laptop_v3', sizes: '180x180' },
    ],
  },
  manifest: '/favicon/site.webmanifest?v=laptop_v3',
  appleWebApp: {
    title: "Nisarg's Portfolio",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0c0822',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Favicon links with MacBook Laptop icon */}
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png?v=laptop_v3" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg?v=laptop_v3" />
        <link rel="shortcut icon" href="/favicon.ico?v=laptop_v3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=laptop_v3" />
        <meta name="apple-mobile-web-app-title" content="Nisarg's Portfolio" />
        <link rel="manifest" href="/favicon/site.webmanifest?v=laptop_v3" />

        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical desktop background for instant paint */}
        <link rel="preload" as="image" href="/images/wallpaper.png" fetchPriority="high" />

        {/* Clean ServiceWorker cache cleanup */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="dark antialiased select-none">{children}</body>
    </html>
  )
}
