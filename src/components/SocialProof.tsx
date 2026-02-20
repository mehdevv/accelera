import { useLang } from '../i18n';

const names = ['NovaCorp', 'Zephyr', 'Axiom', 'QuantumLabs', 'Helix', 'Vortex'];

export default function SocialProof() {
    const { t } = useLang();

    return (
        <section className="social">
            <p className="reveal">{t('social.text')}</p>
            <div className="logos reveal r2">
                {names.map((name) => (
                    <span className="logo-name" key={name}>{name}</span>
                ))}
            </div>
        </section>
    );
}
