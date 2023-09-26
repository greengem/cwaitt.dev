export default function HeroSection({ children }) {
    return (
        <section id="hero" className="pt-20 pb-40 text-center relative">
            <div className="hero-overlay"></div>
            {children}
        </section>
    );
}
