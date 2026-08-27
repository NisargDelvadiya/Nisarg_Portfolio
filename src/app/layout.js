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
  manifest: '/manifest.webmanifest',
  applicationName: "Nisarg's Macfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "Nisarg's Macfolio",
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

        {/* PWA & Mobile Web App Meta */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nisarg's Macfolio" />
        <meta name="format-detection" content="telephone=no" />

        {/* Direct MacBook Laptop Favicons & Icons */}
        <link rel="icon" type="image/png" href="/macbook.png?v=macbook_live" />
        <link rel="shortcut icon" type="image/png" href="/macbook.png?v=macbook_live" />
        <link rel="apple-touch-icon" href="/macbook.png?v=macbook_live" />

        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical desktop background for instant paint */}
        <link rel="preload" as="image" href="/images/wallpaper.png" fetchPriority="high" />

        {/* PWA Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(function(err) {
                    console.warn('[PWA] ServiceWorker registration notice:', err);
                  });
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

              // Continuous suppressor to prevent Google from shifting the desktop layout, translating the title, or showing banner
              if (typeof window !== 'undefined') {
                const originalTitle = "Nisarg's Macfolio | Next.js Developer Portfolio";

                const suppressGoogleArtifacts = () => {
                  // Prevent document title translation
                  if (document.title && document.title !== originalTitle) {
                    document.title = originalTitle;
                  }

                  const titleEl = document.querySelector('title');
                  if (titleEl && !titleEl.classList.contains('notranslate')) {
                    titleEl.setAttribute('translate', 'no');
                    titleEl.classList.add('notranslate');
                  }

                  // Prevent body top shifting
                  if (document.body && document.body.style.top && document.body.style.top !== '0px') {
                    document.body.style.top = '0px';
                  }
                  if (document.documentElement && document.documentElement.style.top && document.documentElement.style.top !== '0px') {
                    document.documentElement.style.top = '0px';
                  }

                  // Hide banner frames
                  const banner = document.querySelector('.goog-te-banner-frame, iframe.skiptranslate, iframe.goog-te-banner-frame');
                  if (banner) {
                    banner.style.setProperty('display', 'none', 'important');
                    banner.style.setProperty('visibility', 'hidden', 'important');
                    banner.style.setProperty('height', '0px', 'important');
                  }
                };

                setInterval(suppressGoogleArtifacts, 100);
                window.addEventListener('load', suppressGoogleArtifacts);
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
