export default function HomeSection({ children, id = 'default-section' }) {
    return (
        <section id={id} className="pb-10 pt-40">
            {children}
        </section>
    );
}
