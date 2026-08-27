import './globals.css'

export const metadata = {
  metadataBase: new URL('https://nisargjayeshdelvadiya.com'),
  title: {
    default: "Nisarg's Macfolio | Next.js Developer Portfolio",
    template: "%s | Nisarg's Macfolio",
  },
  description:
    "Hi, I'm Nisarg — a Next.js Developer crafting fast, responsive, and SEO-optimized web applications. From concept to deployment, I build secure, seamless, scalable and high-impact digital experiences from server architecture to premium UI/UX.",
  authors: [{ name: 'Nisarg Delvadiya', url: 'https://nisargjayeshdelvadiya.com/' }],
  creator: 'Nisarg Delvadiya',
  publisher: 'Nisarg Delvadiya',
  keywords: [
    'Nisarg',
    'Nisarg Delvadiya',
    'Nisarg Jayesh Delvadiya',
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
  alternates: {
    canonical: 'https://nisargjayeshdelvadiya.com',
  },
  openGraph: {
    title: "Nisarg's Macfolio | Next.js Developer Portfolio",
    description:
      "Explore Nisarg's interactive macOS portfolio featuring modern web apps, full-stack projects, interactive terminals, and design showcases.",
    url: 'https://nisargjayeshdelvadiya.com',
    siteName: "Nisarg's Macfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/wallpaper.png',
        width: 1920,
        height: 1080,
        alt: "Nisarg's Macfolio Desktop Experience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nisarg's Macfolio | Next.js Developer Portfolio",
    description:
      "Explore Nisarg's interactive macOS portfolio featuring modern web apps, full-stack projects, and design showcases.",
    images: ['/images/wallpaper.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/macbook.png?v=macbook_live',
    shortcut: '/macbook.png?v=macbook_live',
    apple: '/macbook.png?v=macbook_live',
  },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nisarg Delvadiya',
  url: 'https://nisargjayeshdelvadiya.com',
  jobTitle: 'Next.js & Full-Stack Developer',
  email: 'nisarg.delvadiya1@zohomail.in',
  sameAs: [
    'https://github.com/NisargDelvadiya',
    'https://www.linkedin.com/in/nisargjayeshdelvadiya/',
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'GSAP',
    'Node.js',
    'MongoDB',
    'Full Stack Web Development',
    'UI/UX Design',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Direct MacBook Laptop Favicons */}
        <link rel="icon" type="image/png" href="/macbook.png?v=macbook_live" />
        <link rel="shortcut icon" type="image/png" href="/macbook.png?v=macbook_live" />
        <link rel="apple-touch-icon" href="/macbook.png?v=macbook_live" />
        <meta name="apple-mobile-web-app-title" content="Nisarg's Portfolio" />

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

        {/* Google Translate Init Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                try {
                  new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,as,bn,doi,gu,hi,kn,ks,gom,mai,ml,mni-Mtei,mr,ne,or,pa,sa,sat,ta,te',
                    autoDisplay: false,
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                  }, 'google_translate_element');
                } catch(e) {
                  console.warn('[Google Translate] Init error:', e);
                }
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
      </head>
      <body className="dark antialiased select-none">
        <div id="google_translate_element" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
