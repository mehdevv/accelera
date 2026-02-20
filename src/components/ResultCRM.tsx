import { useEffect, useRef } from 'react';
import { useLang } from '../i18n';

export default function ResultCRM() {
    const { t } = useLang();
    const barRef = useRef<HTMLDivElement>(null);

    const bars = [
        { labelKey: 'crm.bar1', valKey: 'crm.bar1.val', width: '90%' },
        { labelKey: 'crm.bar2', valKey: 'crm.bar2.val', width: '62%' },
        { labelKey: 'crm.bar3', valKey: 'crm.bar3.val', width: '38%' },
        { labelKey: 'crm.bar4', valKey: 'crm.bar4.val', width: '22%' },
        { labelKey: 'crm.bar5', valKey: 'crm.bar5.val', width: '17%' },
    ];

    useEffect(() => {
        const el = barRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        el.querySelectorAll<HTMLElement>('.bar-fill').forEach((b) => {
                            const w = b.style.width;
                            b.style.width = '0';
                            requestAnimationFrame(() => { b.style.width = w; });
                        });
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="results" style={{ background: 'var(--bg)' }}>
            <div className="section-inner">
                <div className="results-layout flip">
                    <div className="reveal">
                        <span className="eyebrow">{t('crm.eyebrow')}</span>
                        <div className="s-title">{t('crm.title1')}<br /><span>{t('crm.title2')}</span></div>
                        <p className="s-sub" style={{ marginBottom: 0 }}>{t('crm.sub')}</p>
                        <ul className="result-list">
                            <li><div className="li-dot">✓</div>{t('crm.li1')}</li>
                            <li><div className="li-dot">✓</div>{t('crm.li2')}</li>
                            <li><div className="li-dot">✓</div>{t('crm.li3')}</li>
                            <li><div className="li-dot">✓</div>{t('crm.li4')}</li>
                        </ul>
                    </div>
                    <div className="result-visual reveal r2">
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text3)', letterSpacing: 1, textTransform: 'uppercase' as const, marginBottom: 16 }}>
                            {t('crm.pipeline')}
                        </div>
                        <div className="bar-section" ref={barRef}>
                            {bars.map((bar, i) => (
                                <div className="bar-row" key={i}>
                                    <div className="bar-meta">
                                        <span>{t(bar.labelKey)}</span>
                                        <span style={{ color: 'var(--blue)', fontWeight: 700 }}>{t(bar.valKey)}</span>
                                    </div>
                                    <div className="bar-track">
                                        <div className="bar-fill" style={{ width: bar.width }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: 20, padding: 16, background: 'var(--blue-pale)', borderRadius: 10, border: '1px solid var(--border2)' }}>
                            <div style={{ fontSize: 13, color: 'var(--text2)', fontWeight: 500 }}>{t('crm.compare')}</div>
                            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--blue)', letterSpacing: -1, marginTop: 4 }}>
                                +32% <span style={{ fontSize: 15, color: 'var(--text3)', fontWeight: 400 }}>{t('crm.pipeline.val')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
