export default function PageSection({ children, id = 'default-section' }) {
    return (
        <section id={id} className="pt-20">
            {children}
        </section>
    );
}
