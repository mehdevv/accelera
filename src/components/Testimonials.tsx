import { useLang } from '../i18n';

export default function Testimonials() {
    const { t } = useLang();

    const testimonials = [
        {
            initials: 'KM',
            name: 'Karim Mansour',
            roleKey: 'testi.t1.role',
            textKey: 'testi.t1.text',
            delay: 'r2',
        },
        {
            initials: 'SL',
            name: 'Sophie Laurent',
            roleKey: 'testi.t2.role',
            textKey: 'testi.t2.text',
            delay: 'r3',
        },
        {
            initials: 'RA',
            name: 'Rayan Achouri',
            roleKey: 'testi.t3.role',
            textKey: 'testi.t3.text',
            delay: 'r4',
        },
    ];

    return (
        <section className="testimonials">
            <div className="section-inner">
                <div className="section-center reveal">
                    <span className="eyebrow">{t('testi.eyebrow')}</span>
                    <div className="s-title">{t('testi.title1')}<br /><span>{t('testi.title2')}</span></div>
                </div>

                <div className="testi-grid">
                    {testimonials.map((item, i) => (
                        <div className={`testi-card reveal ${item.delay}`} key={i}>
                            <div className="testi-stars">★★★★★</div>
                            <p className="testi-text">{t(item.textKey)}</p>
                            <div className="testi-author">
                                <div className="testi-av">{item.initials}</div>
                                <div>
                                    <div className="testi-name">{item.name}</div>
                                    <div className="testi-role">{t(item.roleKey)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
