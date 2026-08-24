'use client'

import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

const Resume = ({ controls, isMaximized }) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#1e1e22] text-gray-900 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 transition-colors duration-200">
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#28282e] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between">
        {controls}

        <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm flex-1 text-center">Resume.pdf</p>

        {/* Download PDF Button */}
        <a
          href="/files/resume.pdf"
          download="Nisarg_Resume.pdf"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          title="Download PDF"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>

      {/* Scrollable Resume Content */}
      <div
        className={`bg-gray-50 dark:bg-black text-gray-800 dark:text-white p-8 md:p-10 font-sans overflow-y-auto space-y-6 select-text cursor-auto transition-colors duration-200 ${
          isMaximized ? 'w-full h-[calc(100vh-170px)]' : 'w-[720px] max-w-[92vw] max-h-[75vh]'
        }`}
      >
        {/* Top Header info */}
        <div className="flex justify-between items-start text-xs md:text-sm text-gray-600 dark:text-gray-300">
          <div className="space-y-1">
            <p>Gujarat, India</p>
            <a href="mailto:nisargdelvadiya@gmail.com" className="text-gray-700 dark:text-gray-300 hover:underline">
              nisargdelvadiya@gmail.com
            </a>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
            Nisarg Delvadiya
          </h1>

          <div className="space-y-1 text-right">
            <div>
              <a
                href="https://www.linkedin.com/in/nisargjayeshdelvadiya/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-[#60a5fa] hover:underline"
              >
                linkedin.com/in/nisargjayeshdelvadiya
              </a>
            </div>
            <div>
              <a
                href="https://github.com/NisargDelvadiya"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-[#60a5fa] hover:underline"
              >
                github.com/NisargDelvadiya
              </a>
            </div>
          </div>
        </div>

        {/* Short bio */}
        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 pt-2 leading-relaxed">
          I'm Nisarg, a full-stack developer who turns design ideas into pixel-perfect and responsive websites and applications that wow users.
        </p>

        {/* Work Experience */}
        <div className="space-y-4">
          <div className="border-b border-gray-300 dark:border-gray-800 pb-1">
            <h2 className="text-blue-600 dark:text-[#3b82f6] font-bold text-sm md:text-base">Work Experience</h2>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            <div className="flex justify-between font-bold text-gray-900 dark:text-white">
              <span>Full-Stack Developer</span>
              <span>Freelance & Open Source</span>
              <span className="font-normal text-gray-500 dark:text-gray-400">Jan 2024–Present</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 italic text-xs">Remote</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-2">
              <li>Crafted mobile-responsive web applications that seamlessly adapt to all devices and browsers, boosting user retention.</li>
              <li>Built interactive macOS-styled web applications, high-performance SPAs, and robust REST APIs using React and Node.js.</li>
            </ul>
          </div>

          <div className="space-y-2 text-xs md:text-sm pt-2">
            <div className="flex justify-between font-bold text-gray-900 dark:text-white">
              <span>Frontend Developer & UI Engineer</span>
              <span>Web Studio Projects</span>
              <span className="font-normal text-gray-500 dark:text-gray-400">2023–2024</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 italic text-xs">Remote</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-2">
              <li>Developed dynamic web interfaces while keeping in mind all modern UI/UX practices from high-fidelity Figma designs.</li>
              <li>Utilized Tailwind CSS and GSAP for micro-animations, fast load times, and fluid page transitions.</li>
            </ul>
          </div>
        </div>

        {/* Education and Certifications */}
        <div className="space-y-3 pt-2">
          <div className="border-b border-gray-300 dark:border-gray-800 pb-1">
            <h2 className="text-blue-600 dark:text-[#3b82f6] font-bold text-sm md:text-base">Education and Certifications</h2>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            <div className="flex justify-between text-gray-900 dark:text-white font-medium">
              <span>• B.Tech - Information Technology | Manipal University Jaipur</span>
              <span className="text-gray-500 dark:text-gray-400">2024–2028</span>
            </div>
            <div className="flex justify-between text-gray-900 dark:text-white font-medium">
              <span>• Full-Stack & Modern Web Development</span>
              <span className="text-gray-500 dark:text-gray-400">Certification</span>
            </div>
          </div>
        </div>

        {/* Technologies & Skills */}
        <div className="space-y-3 pt-2">
          <div className="border-b border-gray-300 dark:border-gray-800 pb-1">
            <h2 className="text-blue-600 dark:text-[#3b82f6] font-bold text-sm md:text-base">Technologies and Languages</h2>
          </div>

          <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
            <p><span className="font-semibold text-gray-900 dark:text-white">Frontend & UI:</span> React.js, Next.js, JavaScript, HTML5, Tailwind CSS, GSAP</p>
            <p><span className="font-semibold text-gray-900 dark:text-white">Backend & Database:</span> Node.js, Java, MongoDB, Mongoose ODM</p>
            <p><span className="font-semibold text-gray-900 dark:text-white">Tools & Ecosystem:</span> Google Antigravity, Sarvam AI, GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WindowWrapper(Resume, 'resume')
