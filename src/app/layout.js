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
    icon: '/macbook.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
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
