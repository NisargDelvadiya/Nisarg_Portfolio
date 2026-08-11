import React from "react";

/**
 * @component MagicButton
 * @description Theme-matched customized button component with glowing purple gradient border,
 * glassmorphism dark navy background, shine sweep hover effect, and tactile click response.
 *
 * @param {Object} props
 * @param {string} props.title - Button label text
 * @param {React.ReactNode} [props.icon] - Optional icon component (e.g. FaDownload, FaLocationArrow)
 * @param {"left"|"right"} [props.position] - Icon placement position
 * @param {Function} [props.handleClick] - Optional click event handler callback
 * @param {string} [props.otherClasses] - Additional Tailwind classes for inner container
 * @param {string} [props.containerClassName] - Additional Tailwind classes for button wrapper
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = "",
  containerClassName = "md:mt-10",
}) => {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      className={`group relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-purple transition-all duration-200 ease-out active:scale-95 cursor-pointer ${containerClassName}`}
      onClick={handleClick}
    >
      {/* Outer glowing border gradient */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple/40 via-violet-500/60 to-purple/40 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]"
      />

      {/* Inner customized button content */}
      <span
        className={`relative inline-flex h-full w-full items-center justify-center rounded-[11px]
             bg-[#0B0E23] px-7 text-sm font-semibold text-white backdrop-blur-xl gap-2.5
             border border-white/10 group-hover:border-purple/60 group-hover:bg-[#13162D]
             transition-all duration-300 ease-out
             group-hover:shadow-[0_0_20px_rgba(203,172,249,0.35)]
             active:scale-[0.98]
             ${otherClasses}`}
      >
        {position === "left" && (
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:scale-110 group-hover:-translate-x-0.5"
          >
            {icon}
          </span>
        )}
        <span className="tracking-wide whitespace-nowrap">{title}</span>
        {position === "right" && (
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:scale-110 group-hover:translate-x-0.5"
          >
            {icon}
          </span>
        )}
      </span>

      {/* Subtle shine sweep effect on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
      >
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>
    </button>
  );
};

export default MagicButton;
