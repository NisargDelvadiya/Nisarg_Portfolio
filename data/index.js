/**
 * @file data/index.js
 * @description Centralized data configuration file for Nisarg Delvadiya's Developer Portfolio.
 * Contains navigation items, tech stack arrays, bento grid configurations, project showcases, and work experience entries.
 */

/**
 * Main navigation bar items used across the portfolio.
 * @type {Array<{name: string, link: string}>}
 */
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
];

/**
 * Tech stack lists displayed in Card 3 of the Bento Grid.
 * Split into two balanced columns for staggered vertical presentation.
 */
export const leftLists = ["Next.js", "MongoDB", "JavaScript"];
export const rightLists = ["Tailwind CSS", "HTML5", "GitHub"];

/**
 * Bento Grid configuration items defining the layout, titles, descriptions, and media assets for each card.
 * @type {Array<{
 *   id: number,
 *   title: string,
 *   description: string,
 *   className: string,
 *   imgClassName: string,
 *   titleClassName: string,
 *   img: string,
 *   spareImg: string
 * }>}
 */
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start md:justify-start",
    img: "/bg/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Manipal University Jaipur",
    description: "B.Tech - Information Technology (2024 – 2028)",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full object-cover !object-bottom opacity-85 filter brightness-105 saturate-105",
    titleClassName: "justify-start",
    img: "/about/MUJ.jpg",
    spareImg: "",
  },
  {
    id: 5,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-65 blur-[1px]",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/bg/b5.svg",
    spareImg: "/bg/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

/**
 * Featured Projects showcased in the Recent Projects section.
 * Includes project titles, descriptions, preview images, tech stack icons, live links, and repository links.
 * @type {Array<{
 *   id: number,
 *   title: string,
 *   des: string,
 *   img: string,
 *   iconLists: string[],
 *   link: string,
 *   github: string
 * }>}
 */
export const projects = [
  {
    id: 1,
    title: "MyTodo - Same Masks Same Tasks",
    des: "MyTodo is a hyper-secure, full-stack task manager featuring true End-to-End Encryption (E2EE) and a bold Neo-Brutalist design, engineered to turn your chaotic daily chores into a beautifully organized command center.",
    img: "/projects/p1.jpg",
    iconLists: [
      "nextjs",
      "mongodb",
      "javascript",
      "tailwind",
      "html",
      "github",
    ],
    link: "https://www.mytodo.co.in",
    github: "https://github.com/nisargdelvadiya/MyTodo",
  },
  {
    id: 2,
    title: "LogDiary - Your Cozy Corner of the Internet",
    des: "LogDiary is a cozy, secure, and fully responsive digital diary built with Next.js, featuring a premium glassmorphism UI and multi-provider OAuth.",
    img: "/projects/p2.jpg",
    iconLists: [
      "nextjs",
      "mongodb",
      "javascript",
      "tailwind",
      "html",
      "github",
    ],
    link: "https://log-diary-200.vercel.app",
    github: "https://github.com/NisargDelvadiya/LogDiary.git",
  },
];

/**
 * Work Experience entries displayed in the Experience section.
 * Includes role titles, descriptions, grid column sizing, and vector thumbnail paths.
 * @type {Array<{
 *   id: number,
 *   title: string,
 *   desc: string,
 *   className: string,
 *   thumbnail: string
 * }>}
 */
export const workExperience = [
  {
    id: 1,
    title: "Web Dev Intern",
    desc: "Assisted in the development of responsive web applications using Next.js, enhancing performance and UI interactivity.",
    className: "md:col-span-2",
    thumbnail: "/work_experience/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Dev Projects",
    desc: "Architected and developed custom web applications for clients, from initial wireframing to cloud deployment.",
    className: "md:col-span-2",
    thumbnail: "/work_experience/exp3.svg",
  },
];
