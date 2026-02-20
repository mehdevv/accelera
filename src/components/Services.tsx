import { useLang } from '../i18n';

export default function Services() {
    const { t } = useLang();

    const services = [
        { icon: '🌐', titleKey: 'services.s2.title', descKey: 'services.s2.desc', delay: 'r2' },
        { icon: '🤖', titleKey: 'services.s3.title', descKey: 'services.s3.desc', delay: 'r3' },
        { icon: '📊', titleKey: 'services.s4.title', descKey: 'services.s4.desc', delay: 'r4' },
    ];

    return (
        <section className="services">
            <div className="section-inner">
                <div className="section-center reveal">
                    <span className="eyebrow">{t('services.eyebrow')}</span>
                    <div className="s-title">{t('services.title1')}<br /><span>{t('services.title2')}</span></div>
                    <p className="s-sub">{t('services.sub')}</p>
                </div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <div className={`glass-card reveal ${s.delay}`} key={i}>
                            <div className="card-icon">{s.icon}</div>
                            <div className="card-title">{t(s.titleKey)}</div>
                            <p className="card-desc">{t(s.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
