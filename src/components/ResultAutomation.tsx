import { useLang } from '../i18n';

export default function ResultAutomation() {
    const { t } = useLang();

    return (
        <section className="results">
            <div className="section-inner">
                <div className="results-layout">
                    <div className="reveal">
                        <span className="eyebrow">{t('auto.eyebrow')}</span>
                        <div className="s-title">{t('auto.title1')}<br /><span>{t('auto.title2')}</span></div>
                        <p className="s-sub" style={{ marginBottom: 0 }}>{t('auto.sub')}</p>
                        <ul className="result-list">
                            <li><div className="li-dot">✓</div>{t('auto.li1')}</li>
                            <li><div className="li-dot">✓</div>{t('auto.li2')}</li>
                            <li><div className="li-dot">✓</div>{t('auto.li3')}</li>
                            <li><div className="li-dot">✓</div>{t('auto.li4')}</li>
                        </ul>
                    </div>
                    <div className="result-visual reveal r2">
                        <div className="mini-stat">
                            <span className="mini-stat-num">340%</span>
                            <span className="mini-stat-label">{t('auto.stat.label')}</span>
                        </div>
                        <div className="flow-list">
                            <div className="flow-item">
                                <div className="flow-num">1</div>
                                <div className="flow-content">
                                    <div className="flow-title">{t('auto.flow1.title')}</div>
                                    <div className="flow-desc">{t('auto.flow1.desc')}</div>
                                    <span className="flow-badge">{t('auto.flow1.badge')}</span>
                                </div>
                            </div>
                            <div className="flow-item">
                                <div className="flow-num">2</div>
                                <div className="flow-content">
                                    <div className="flow-title">{t('auto.flow2.title')}</div>
                                    <div className="flow-desc">{t('auto.flow2.desc')}</div>
                                    <span className="flow-badge">{t('auto.flow2.badge')}</span>
                                </div>
                            </div>
                            <div className="flow-item">
                                <div className="flow-num">3</div>
                                <div className="flow-content">
                                    <div className="flow-title">{t('auto.flow3.title')}</div>
                                    <div className="flow-desc">{t('auto.flow3.desc')}</div>
                                    <span className="flow-badge">{t('auto.flow3.badge')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
