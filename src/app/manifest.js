export default function manifest() {
  return {
    name: "Nisarg's Macfolio | Next.js Developer Portfolio",
    short_name: "Macfolio",
    description:
      "Interactive macOS desktop portfolio web application crafted by Nisarg Delvadiya featuring full-stack projects, design showcases, and native macOS desktop aesthetics.",
    start_url: '/',
    id: '/',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    background_color: '#0c0822',
    theme_color: '#0c0822',
    orientation: 'any',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['portfolio', 'developer', 'productivity', 'utilities'],
    icons: [
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/macbook.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/macbook.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any',
      },
    ],
    screenshots: [
      {
        src: '/images/wallpaper.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide',
        label: "Nisarg's Macfolio Desktop Experience",
      },
    ],
  }
}
