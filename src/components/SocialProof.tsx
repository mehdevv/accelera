const names = ['NovaCorp', 'Zephyr', 'Axiom', 'QuantumLabs', 'Helix', 'Vortex'];

export default function SocialProof() {
    return (
        <section className="social">
            <p className="reveal">Trusted by growing agencies worldwide</p>
            <div className="logos reveal r2">
                {names.map((name) => (
                    <span className="logo-name" key={name}>{name}</span>
                ))}
            </div>
        </section>
    );
}
