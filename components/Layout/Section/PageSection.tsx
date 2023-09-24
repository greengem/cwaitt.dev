export default function HomeSection({ children, id = 'default-section' }) {
    return (
        <section id={id} className="pt-20">
            {children}
        </section>
    );
}
