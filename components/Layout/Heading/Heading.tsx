export default function Heading({ title, className = "" }) {
  return (
    <h3
      className={`
            tracking-tight 
            font-semibold 
            text-4xl 
            md:text-5xl 
            lg:text-6xl 
            mb-5 
            md:mb-10
            lg:mb-10
            ${className}
        `}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">
        {title}
      </span>
    </h3>
  );
}
