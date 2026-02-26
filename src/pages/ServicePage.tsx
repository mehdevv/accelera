import { useEffect, useState, Fragment } from 'react';
import { useLang } from '../i18n';

export default function ServicePage() {
    const { t } = useLang();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // scroll to top on load
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const stats = [
        { num: 'sp.hero.stat1.num', label: 'sp.hero.stat1.label' },
        { num: 'sp.hero.stat2.num', label: 'sp.hero.stat2.label' },
        { num: 'sp.hero.stat3.num', label: 'sp.hero.stat3.label' },
        { num: 'sp.hero.stat4.num', label: 'sp.hero.stat4.label' },
    ];

    const audience = [
        { icon: '📣', key: 'sp.audience.1' },
        { icon: '🌱', key: 'sp.audience.2' },
        { icon: '📸', key: 'sp.audience.3' },
        { icon: '📬', key: 'sp.audience.4' },
        { icon: '🎯', key: 'sp.audience.5' },
        { icon: '🚀', key: 'sp.audience.6' },
    ];

    const problemFlow = [
        { key: 'sp.problem.flow.1', icon: '📢' },
        { key: 'sp.problem.flow.2', icon: '💬' },
        { key: 'sp.problem.flow.3', icon: '⏳' },
        { key: 'sp.problem.flow.4', icon: '🤷‍♂️' },
        { key: 'sp.problem.flow.5', icon: '❌', negative: true },
    ];

    const problems = [
        { icon: '🌀', title: 'sp.problem.c1.title', desc: 'sp.problem.c1.desc' },
        { icon: '🧩', title: 'sp.problem.c2.title', desc: 'sp.problem.c2.desc' },
        { icon: '⏳', title: 'sp.problem.c3.title', desc: 'sp.problem.c3.desc' },
        { icon: '📉', title: 'sp.problem.c4.title', desc: 'sp.problem.c4.desc' },
    ];

    const steps = [
        { num: 'sp.system.s1.num', icon: 'sp.system.s1.icon', title: 'sp.system.s1.title', desc: 'sp.system.s1.desc' },
        { num: 'sp.system.s2.num', icon: 'sp.system.s2.icon', title: 'sp.system.s2.title', desc: 'sp.system.s2.desc' },
        { num: 'sp.system.s3.num', icon: 'sp.system.s3.icon', title: 'sp.system.s3.title', desc: 'sp.system.s3.desc' },
        { num: 'sp.system.s4.num', icon: 'sp.system.s4.icon', title: 'sp.system.s4.title', desc: 'sp.system.s4.desc' },
    ];

    const systemFlow = [
        { key: 'sp.system.flow.1', icon: '📢' },
        { key: 'sp.system.flow.2', icon: '🌐' },
        { key: 'sp.system.flow.3', icon: '🎯' },
        { key: 'sp.system.flow.4', icon: '📱' },
        { key: 'sp.system.flow.5', icon: '🤝', positive: true },
    ];

    const benefits = [
        { icon: '⚡', title: 'sp.benefits.b1.title', desc: 'sp.benefits.b1.desc' },
        { icon: '🎯', title: 'sp.benefits.b2.title', desc: 'sp.benefits.b2.desc' },
        { icon: '📈', title: 'sp.benefits.b3.title', desc: 'sp.benefits.b3.desc' },
        { icon: '💸', title: 'sp.benefits.b4.title', desc: 'sp.benefits.b4.desc' },
        { icon: '🌙', title: 'sp.benefits.b5.title', desc: 'sp.benefits.b5.desc' },
        { icon: '🏆', title: 'sp.benefits.b6.title', desc: 'sp.benefits.b6.desc' },
    ];

    const beforeMetrics = [
        { l: 'sp.proof.m1', v: 'sp.proof.b.v1' },
        { l: 'sp.proof.m2', v: 'sp.proof.b.v2' },
        { l: 'sp.proof.m3', v: 'sp.proof.b.v3' },
        { l: 'sp.proof.m4', v: 'sp.proof.b.v4' },
        { l: 'sp.proof.m5', v: 'sp.proof.b.v5' },
    ];

    const afterMetrics = [
        { l: 'sp.proof.m1', v: 'sp.proof.a.v1' },
        { l: 'sp.proof.m2', v: 'sp.proof.a.v2' },
        { l: 'sp.proof.m3', v: 'sp.proof.a.v3' },
        { l: 'sp.proof.m4', v: 'sp.proof.a.v4' },
        { l: 'sp.proof.m5', v: 'sp.proof.a.v5' },
    ];

    const offerItems = ['sp.offer.i1', 'sp.offer.i2', 'sp.offer.i3', 'sp.offer.i4', 'sp.offer.i5', 'sp.offer.i6', 'sp.offer.i7', 'sp.offer.i8'];

    const faqs = [
        { q: 'sp.faq.q1', a: 'sp.faq.a1' },
        { q: 'sp.faq.q2', a: 'sp.faq.a2' },
        { q: 'sp.faq.q3', a: 'sp.faq.a3' },
        { q: 'sp.faq.q4', a: 'sp.faq.a4' },
        { q: 'sp.faq.q5', a: 'sp.faq.a5' },
        { q: 'sp.faq.q6', a: 'sp.faq.a6' },
    ];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="sp">
            {/* HERO */}
            <section className="sp-hero" id="sp-hero">
                <div className="sp-hero-glow" />
                <div className="sp-container">
                    <div className="sp-hero-header reveal">
                        <img src="/logo.png" alt="Labeeb Academy" className="sp-hero-logo" />
                        <div className="sp-social-proof">
                            <img src="/experts.png" alt="Experts" />
                        </div>
                    </div>

                    <h1 className="sp-h1 reveal r2">
                        {t('sp.hero.title1')}<br />
                        <span className="sp-h1-highlight">{t('sp.hero.title2')}</span><br />
                        {t('sp.hero.title3')}
                    </h1>

                    <p className="sp-hero-sub reveal r3">{t('sp.hero.sub')}</p>

                    <div className="sp-video-container reveal r4">
                        <iframe
                            className="sp-video-iframe"
                            src="https://www.youtube.com/embed/wIVDytr3SUE?autoplay=1&mute=0&loop=1&playlist=wIVDytr3SUE&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                            title="Labeeb Academy Explainer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="sp-hero-actions reveal r5" style={{ marginTop: '48px', justifyContent: 'center' }}>
                        <a href="https://wa.me/213542452129" target="_blank" rel="noopener noreferrer" className="sp-btn-primary">
                            <img src="/whatsapp-white-icon.png" alt="WhatsApp" />
                            {t('sp.hero.cta')}
                        </a>
                        <button className="sp-btn-secondary" onClick={() => scrollTo('sp-system')}>
                            {t('sp.hero.cta2')}
                        </button>
                    </div>

                    <div className="sp-hero-stats reveal r6">
                        {stats.map((s, i) => (
                            <div className="sp-stat-item" key={i}>
                                <span className="sp-stat-num">{t(s.num)}</span>
                                <span className="sp-stat-label">{t(s.label)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUDIENCE */}
            <section className="sp-audience" id="sp-audience">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.audience.tag')}</span>
                        <h2>{t('sp.audience.title')}</h2>
                    </div>
                    <div className="sp-audience-grid reveal r2">
                        {audience.map((item, i) => (
                            <div className="sp-audience-item" key={i}>
                                <div className="sp-audience-icon">{item.icon}</div>
                                <div className="sp-audience-text">{t(item.key)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROBLEM */}
            <section className="sp-problem" id="sp-problem">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.problem.tag')}</span>
                        <h2>{t('sp.problem.title')}</h2>
                        <p className="sp-section-desc">{t('sp.problem.desc')}</p>
                    </div>
                    <div className="sp-flow-visual reveal r2">
                        {problemFlow.map((step, i) => (
                            <Fragment key={i}>
                                <div className={`sp-flow-step ${step.negative ? 'negative' : ''}`}>
                                    <span className="sp-flow-step-icon">{step.icon}</span>
                                    <span className="sp-flow-step-text">{t(step.key)}</span>
                                </div>
                                {i < problemFlow.length - 1 && (
                                    <div className="sp-flow-arrow">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                    <div className="sp-problems-grid reveal r3">
                        {problems.map((p, i) => (
                            <div className="sp-problem-card" key={i}>
                                <div className="sp-problem-icon">{p.icon}</div>
                                <div>
                                    <div className="sp-problem-title">{t(p.title)}</div>
                                    <div className="sp-problem-text">{t(p.desc)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="sp-problem-bottom reveal r4">
                        <strong>{t('sp.problem.bottom')}</strong>{t('sp.problem.bottom2')}
                    </div>
                </div>
            </section>

            {/* SYSTEM */}
            <section className="sp-system" id="sp-system">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.system.tag')}</span>
                        <h2>{t('sp.system.title')}</h2>
                        <p className="sp-section-desc">{t('sp.system.desc')}</p>
                    </div>
                    <div className="sp-steps-grid reveal r2">
                        {steps.map((s, i) => (
                            <div className="sp-step-card" key={i}>
                                <span className="sp-step-num">{t(s.num)}</span>
                                <span className="sp-step-icon">{t(s.icon)}</span>
                                <div className="sp-step-title">{t(s.title)}</div>
                                <div className="sp-step-desc">{t(s.desc)}</div>
                            </div>
                        ))}
                    </div>
                    <div className="sp-new-flow reveal r3">
                        <div className="sp-flow-label">{t('sp.system.flow.label')}</div>
                        <div className="sp-flow-visual">
                            {systemFlow.map((step, i) => (
                                <Fragment key={i}>
                                    <div className={`sp-flow-step ${step.positive ? 'positive' : ''}`}>
                                        <span className="sp-flow-step-icon">{step.icon}</span>
                                        <span className="sp-flow-step-text">{t(step.key)}</span>
                                    </div>
                                    {i < systemFlow.length - 1 && (
                                        <div className="sp-flow-arrow">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="sp-benefits" id="sp-benefits">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.benefits.tag')}</span>
                        <h2>{t('sp.benefits.title')}</h2>
                    </div>
                    <div className="sp-benefits-grid reveal r2">
                        {benefits.map((b, i) => (
                            <div className="sp-benefit-card" key={i}>
                                <span className="sp-benefit-icon">{b.icon}</span>
                                <div className="sp-benefit-title">{t(b.title)}</div>
                                <div className="sp-benefit-desc">{t(b.desc)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROOF */}
            <section className="sp-proof" id="sp-proof">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.proof.tag')}</span>
                        <h2>{t('sp.proof.title')}</h2>
                        <p className="sp-section-desc">{t('sp.proof.desc')}</p>
                    </div>
                    <div className="sp-proof-grid reveal r2">
                        <div className="sp-proof-card sp-before">
                            <span className="sp-proof-label">{t('sp.proof.before')}</span>
                            {beforeMetrics.map((m, i) => (
                                <div className="sp-metric-row" key={i}>
                                    <span>{t(m.l)}</span>
                                    <span className="sp-metric-val">{t(m.v)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="sp-proof-card sp-after">
                            <span className="sp-proof-label">{t('sp.proof.after')}</span>
                            {afterMetrics.map((m, i) => (
                                <div className="sp-metric-row" key={i}>
                                    <span>{t(m.l)}</span>
                                    <span className="sp-metric-val">{t(m.v)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sp-proof-highlight reveal r3">
                        <span className="sp-highlight-num">{t('sp.proof.highlight.num')}</span>
                        <span className="sp-highlight-desc">{t('sp.proof.highlight.desc')}</span>
                    </div>
                </div>
            </section>

            {/* COMPARISON */}
            <section className="sp-comparison" id="sp-comparison">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.comp.tag')}</span>
                        <h2>{t('sp.comp.title')}</h2>
                    </div>
                    <div className="sp-comparison-grid reveal r2">
                        <div className="sp-comp-card">
                            <div className="sp-comp-title sp-comp-title-dim">{t('sp.comp.c1.title')}</div>
                            {['sp.comp.c1.i1', 'sp.comp.c1.i2', 'sp.comp.c1.i3', 'sp.comp.c1.i4'].map((k, i) => (
                                <div className="sp-comp-item" key={i}><span className="sp-x-icon">✗</span> {t(k)}</div>
                            ))}
                        </div>
                        <div className="sp-comp-card sp-comp-featured">
                            <div className="sp-featured-tag">{t('sp.comp.c2.tag')}</div>
                            <div className="sp-comp-title sp-comp-title-blue">{t('sp.comp.c2.title')}</div>
                            {['sp.comp.c2.i1', 'sp.comp.c2.i2', 'sp.comp.c2.i3', 'sp.comp.c2.i4', 'sp.comp.c2.i5'].map((k, i) => (
                                <div className="sp-comp-item" key={i}><span className="sp-check-icon">✓</span> {t(k)}</div>
                            ))}
                        </div>
                        <div className="sp-comp-card">
                            <div className="sp-comp-title sp-comp-title-dim">{t('sp.comp.c3.title')}</div>
                            {['sp.comp.c3.i1', 'sp.comp.c3.i2', 'sp.comp.c3.i3', 'sp.comp.c3.i4'].map((k, i) => (
                                <div className="sp-comp-item" key={i}><span className="sp-x-icon">✗</span> {t(k)}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OFFER */}
            <section className="sp-offer" id="sp-offer">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.offer.tag')}</span>
                        <h2>{t('sp.offer.title')}</h2>
                    </div>
                    <div className="sp-offer-grid reveal r2">
                        <div className="sp-offer-items">
                            {offerItems.map((key, i) => (
                                <div className="sp-offer-item" key={i}>
                                    <div className="sp-offer-check">✓</div>
                                    <div className="sp-offer-item-text">{t(key)}</div>
                                </div>
                            ))}
                        </div>
                        <div className="sp-ramadan-card">
                            <div className="sp-ramadan-badge-card">{t('sp.offer.ramadan.badge')}</div>
                            <div className="sp-ramadan-title">{t('sp.offer.ramadan.title')}</div>
                            <div className="sp-ramadan-sub">{t('sp.offer.ramadan.sub')}</div>
                            <span className="sp-discount-display">{t('sp.offer.ramadan.discount')}</span>
                            <span className="sp-discount-label">{t('sp.offer.ramadan.label')}</span>
                            <div className="sp-limited-badge">{t('sp.offer.ramadan.limited')}</div>
                            <a href="https://wa.me/213542452129" target="_blank" rel="noopener noreferrer" className="sp-btn-primary sp-btn-full">
                                <img src="/whatsapp-white-icon.png" alt="WhatsApp" />
                                {t('sp.offer.ramadan.cta')}
                            </a>
                            <div className="sp-ramadan-note">{t('sp.offer.ramadan.note')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="sp-faq" id="sp-faq">
                <div className="sp-container">
                    <div className="sp-section-header reveal">
                        <span className="sp-section-tag">{t('sp.faq.tag')}</span>
                        <h2>{t('sp.faq.title')}</h2>
                    </div>
                    <div className="sp-faq-list reveal r2">
                        {faqs.map((f, i) => (
                            <div className={`sp-faq-item ${openFaq === i ? 'sp-faq-open' : ''}`} key={i}>
                                <div className="sp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {t(f.q)}
                                    <span className="sp-faq-toggle">{openFaq === i ? '−' : '+'}</span>
                                </div>
                                <div className="sp-faq-a">{t(f.a)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="sp-cta-final" id="sp-cta-final">
                <div className="sp-container">
                    <div className="reveal">
                        <span className="sp-section-tag" style={{ display: 'block', textAlign: 'center', marginBottom: 16 }}>
                            {t('sp.cta.tag')}
                        </span>
                        <h2 className="sp-cta-final-title">
                            {t('sp.cta.title1')}<br />
                            <span className="sp-h1-highlight">{t('sp.cta.title2')}</span>
                        </h2>
                        <p className="sp-cta-final-sub">{t('sp.cta.sub')}</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                            <a href="https://wa.me/213542452129" target="_blank" rel="noopener noreferrer" className="sp-btn-primary sp-btn-lg">
                                <img src="/whatsapp-white-icon.png" alt="WhatsApp" />
                                {t('sp.cta.btn')}
                            </a>
                        </div>
                        <div className="sp-cta-note">{t('sp.cta.note')}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
