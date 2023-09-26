export default function HomeSection({ children, id = 'default-section' }) {
    return (
        <section id={id} className="pb-10 md:pb-15 pt-10 md:pt-15">
            {children}
        </section>
    );
}
