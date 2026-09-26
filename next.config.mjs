/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable gzip / brotli compression for static and rendered assets
  compress: true,
  // Disable X-Powered-By header to prevent information disclosure
  poweredByHeader: false,
  reactStrictMode: true,

  // Image optimization formats and responsive breakpoints
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 days
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mahingunjal.com",
      },
    ],
  },

  // Security Headers Configuration
  async headers() {
    const isDev = process.env.NODE_ENV === "development";

    // Content Security Policy
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://translate.google.com https://translate.googleapis.com https://va.vercel-scripts.com https://vitals.vercel-insights.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://translate.googleapis.com;
      font-src 'self' https://fonts.gstatic.com data:;
      img-src 'self' data: blob: https://translate.google.com https://translate.googleapis.com https://www.google.com https://*.gstatic.com https://*.googleusercontent.com https://mahingunjal.com;
      media-src 'self' blob: data: https://mahingunjal.com;
      connect-src 'self' https://translate.googleapis.com https://translate.google.com https://va.vercel-scripts.com https://vitals.vercel-insights.com;
      frame-src 'self' https://translate.google.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'self';
      ${isDev ? "" : "upgrade-insecure-requests;"}
    `
      .replace(/\s{2,}/g, " ")
      .trim();

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        source: "/Assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
