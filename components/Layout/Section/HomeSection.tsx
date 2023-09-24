export default function HomeSection({ children, id = 'default-section' }) {
    return (
        <section id={id} className="py-10">
            {children}
        </section>
    );
}
