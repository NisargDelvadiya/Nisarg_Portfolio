'use client'

import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper'

/**
 * macOS Resume Application Window
 * Interactive, responsive Curriculum Vitae with PDF download action.
 */
const Resume = ({ controls, isMaximized }) => {
  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1e1e22] text-gray-900 dark:text-white rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 select-none transition-colors duration-200 ${
        isMaximized ? 'w-full h-[calc(100vh-140px)]' : 'w-[720px] max-w-[94vw]'
      }`}
    >
      {/* Window Header */}
      <div id="window-header" className="bg-gray-100 dark:bg-[#28282e] border-b border-gray-200 dark:border-white/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        {controls}

        <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm flex-1 text-center truncate px-2">
          Resume.pdf
        </h2>

        {/* Download PDF Button */}
        <a
          href="/files/resume.pdf"
          download="Nisarg_Resume.pdf"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          title="Download PDF"
          aria-label="Download Nisarg's Resume PDF"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>

      {/* Scrollable Resume Content */}
      <main
        className={`bg-gray-50 dark:bg-black text-gray-800 dark:text-white p-4 sm:p-8 md:p-10 font-sans overflow-y-auto overscroll-contain space-y-5 sm:space-y-6 select-text cursor-auto transition-colors duration-200 ${
          isMaximized ? 'w-full h-[calc(100vh-170px)]' : 'w-full max-h-[70vh] sm:max-h-[75vh]'
        }`}
      >
        {/* Top Header info */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-xs sm:text-sm text-gray-600 dark:text-gray-300 gap-3 sm:gap-2 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-medium text-gray-700 dark:text-gray-200">Gujarat, India</p>
            <a href="mailto:nisarg.delvadiya1@zohomail.in" className="text-gray-700 dark:text-gray-300 hover:underline block truncate">
              nisarg.delvadiya1@zohomail.in
            </a>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Nisarg Delvadiya
          </h1>

          <div className="space-y-1 sm:text-right">
            <div>
              <a
                href="https://www.linkedin.com/in/nisargjayeshdelvadiya/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-[#60a5fa] hover:underline block truncate"
              >
                linkedin.com/in/nisargjayeshdelvadiya
              </a>
            </div>
            <div>
              <a
                href="https://github.com/NisargDelvadiya"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-[#60a5fa] hover:underline block truncate"
              >
                github.com/NisargDelvadiya
              </a>
            </div>
          </div>
        </div>

        {/* Short bio */}
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 pt-1 leading-relaxed">
          I'm Nisarg, a full-stack developer who turns design ideas into pixel-perfect and responsive websites and applications that wow users.
        </p>

        {/* Work Experience */}
        <section className="space-y-3 sm:space-y-4" aria-label="Work Experience">
          <div className="border-b border-gray-300 dark:border-gray-800 pb-1">
            <h2 className="text-blue-600 dark:text-[#3b82f6] font-bold text-xs sm:text-sm md:text-base">Work Experience</h2>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-gray-900 dark:text-white gap-0.5 sm:gap-2">
              <span>Full-Stack Developer</span>
              <span className="font-normal text-gray-600 dark:text-gray-300">Freelance & Open Source</span>
              <span className="font-normal text-gray-500 dark:text-gray-400">Jan 2024–Present</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 italic text-[11px] sm:text-xs">Remote</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-1 sm:pl-2">
              <li>Crafted mobile-responsive web applications that seamlessly adapt to all devices and browsers, boosting user retention.</li>
              <li>Built interactive macOS-styled web applications, high-performance SPAs, and robust REST APIs using React and Node.js.</li>
            </ul>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm pt-2">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-gray-900 dark:text-white gap-0.5 sm:gap-2">
              <span>Frontend Developer & UI Engineer</span>
              <span className="font-normal text-gray-600 dark:text-gray-300">Web Studio Projects</span>
              <span className="font-normal text-gray-500 dark:text-gray-400">2023–2024</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 italic text-[11px] sm:text-xs">Remote</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-1 sm:pl-2">
              <li>Created engaging user interfaces with modern glassmorphic aesthetics, smooth GSAP micro-animations, and fluid transitions.</li>
              <li>Engineered interactive web components, optimized load performance, and ensured cross-browser responsiveness.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-3" aria-label="Education">
          <div className="border-b border-gray-300 dark:border-gray-800 pb-1">
            <h2 className="text-blue-600 dark:text-[#3b82f6] font-bold text-xs sm:text-sm md:text-base">Education</h2>
          </div>

          <div className="space-y-1 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-gray-900 dark:text-white gap-0.5 sm:gap-2">
              <span>B.Tech - Information Technology</span>
              <span className="font-normal text-gray-600 dark:text-gray-300">Manipal University Jaipur</span>
              <span className="font-normal text-gray-500 dark:text-gray-400">2024–2028</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-3" aria-label="Skills">
          <div className="border-b border-gray-300 dark:border-gray-800 pb-1">
            <h2 className="text-blue-600 dark:text-[#3b82f6] font-bold text-xs sm:text-sm md:text-base">Skills & Technologies</h2>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm">
            <p>
              <strong className="text-gray-900 dark:text-white">Core & Frontend:</strong>{' '}
              <span className="text-gray-700 dark:text-gray-300">React.js, Next.js, JavaScript (ES6+), HTML5, Tailwind CSS, GSAP</span>
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">Backend & Database:</strong>{' '}
              <span className="text-gray-700 dark:text-gray-300">Node.js, Java, MongoDB, Mongoose ODM</span>
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">AI & Tools:</strong>{' '}
              <span className="text-gray-700 dark:text-gray-300">Google Antigravity, Sarvam AI, GitHub</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default WindowWrapper(Resume, 'resume')
