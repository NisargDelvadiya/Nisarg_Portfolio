const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Blogs",
    icon: "safari.png",
    canOpen: false,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "notes",
    name: "Legal Notes",
    icon: "apple-notes.svg",
    canOpen: true,
  },
  {
    id: "translate",
    name: "Translate",
    icon: "translate.svg",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML5"],
  },
  {
    category: "Styling & Motion",
    items: ["Tailwind CSS", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Java"],
  },
  {
    category: "Database & ODM",
    items: ["MongoDB", "Mongoose ODM"],
  },
  {
    category: "Tools & AI",
    items: ["Google Antigravity", "Sarvam AI", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#24292e",
    link: "https://github.com/NisargDelvadiya",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "https://www.linkedin.com/in/nisargjayeshdelvadiya/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
  {
    id: 5,
    img: "/images/gal5.png",
  },
];

const ALL_LANGUAGES = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "doi", name: "Dogri", nativeName: "डोगरी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ks", name: "Kashmiri", nativeName: "کٲشُر" },
  { code: "gom", name: "Konkani", nativeName: "कोंकणी" },
  { code: "mai", name: "Maithili", nativeName: "मैथिली" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "mni-Mtei", name: "Manipuri (Meiteilon)", nativeName: "ꯃꯩꯇꯩꯂꯣꯟ" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "sa", name: "Sanskrit", nativeName: "संस्कृतम्" },
  { code: "sat", name: "Santali", nativeName: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
];

export {
  navLinks,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  ALL_LANGUAGES,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 51,
      name: "Mahin's Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10",
      children: [
        {
          id: 1,
          name: "Mahin Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-16",
          description: [
            "The Mahin Gunjal portfolio is a high-performance, interactive web application designed to showcase the work of a Web Designer and VFX Artist.",
            "The platform features an engaging dual-layer mask reveal hero section that responds to desktop cursor movements, seamlessly transitioning a masked Spider-Man suit to reveal the artist's portrait underneath.",
            "A core highlight is the robust dual-theme engine, which allows users to toggle between a classic Spider-Man Red mode and a high-contrast Venom Symbiote Dark mode. These themes dynamically alter color palettes, luminescent glows, and image filters across the entire site.",
            "The application also incorporates GSAP physics-based animations, including scroll-triggered dropping web lines and continuous hanging pendulum loops.",
          ],
        },
        {
          id: 2,
          name: "mahin-portfolio-spidey.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mahin-portfolio-spidey.vercel.app",
          position: "top-10 right-28",
        },
      ],
    },
    {
      id: 52,
      name: "Artezen",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-60",
      children: [
        {
          id: 1,
          name: "Artezen Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-16",
          description: [
            "Artezen is a state-of-the-art, performance-driven digital marketing agency web application engineered for maximum visual impact and high conversion efficiency.",
            "Built on a cutting-edge technology stack featuring Next.js 16 (App Router), React 19, Tailwind CSS, and Framer Motion, the platform boasts a striking visual identity.",
            "Its sleek dark mode glassmorphic UI is grounded in deep obsidian, highlighted by dynamic flame-orange gradient accents and fluid micro-animations.",
            "A WebGL-animated Aurora background immediately engages users, setting a sophisticated tone for the agency's digital presence.",
          ],
        },
        {
          id: 2,
          name: "artezen.co",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.artezen.co",
          position: "top-10 right-28",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "aboutme.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-10",
      description: [
        "Hey! I'm Nisarg Delvadiya 👋, a full-stack web developer who enjoys building sleek, interactive web applications that actually work well.",
        "I specialize in JavaScript, React, Next.js, and Node.js—and I love making things feel smooth, fast, and delightful to interact with.",
        "I'm passionate about clean UI, modern UX, responsive design, and writing high-performance code.",
        "Outside of development work, you'll find me exploring new technologies, refining design details, and building creative digital experiences.",
      ],
    },
    {
      id: 2,
      name: "education.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-48",
      description: [
        "🎓 Education Details",
        "• Degree: B.Tech - Information Technology (2024 – 2028)",
        "• University: Manipal University Jaipur",
      ],
    },
    {
      id: 3,
      name: "Terms and Conditions.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      fileUrl: "/files/terms-and-conditions.pdf",
      position: "top-10 left-86",
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-10 left-10",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  pdf: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  notes: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  translate: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };