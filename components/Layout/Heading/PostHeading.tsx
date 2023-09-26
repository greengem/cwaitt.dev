export default function PostHeading({ title }) {
    return (
        <h1 className='
            tracking-tight 
            font-semibold 
            text-4xl 
            md:text-5xl 
            lg:text-6xl 
            mb-1 
            md:mb-3 
        '>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">
                {title}
            </span>
        </h1>
    );
}
