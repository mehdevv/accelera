import { useEffect, useRef } from 'react';

const bars = [
    { label: 'Prospecting', value: '142 leads', width: '90%' },
    { label: 'Qualified', value: '89 leads', width: '62%' },
    { label: 'Proposal Sent', value: '54 leads', width: '38%' },
    { label: 'Negotiation', value: '31 leads', width: '22%' },
    { label: 'Closed Won', value: '24 clients', width: '17%' },
];

export default function ResultCRM() {
    const barRef = useRef<HTMLDivElement>(null);

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
                        <span className="eyebrow">CRM & Pipeline</span>
                        <div className="s-title">Every client,<br /><span>fully tracked</span></div>
                        <p className="s-sub" style={{ marginBottom: 0 }}>
                            Stop losing deals to forgotten follow-ups. See exactly where every lead stands and what happens next — automatically.
                        </p>
                        <ul className="result-list">
                            <li><div className="li-dot">✓</div>Visual CRM pipeline across all stages</li>
                            <li><div className="li-dot">✓</div>Auto-reminders and task assignment</li>
                            <li><div className="li-dot">✓</div>Client-facing portals and status updates</li>
                            <li><div className="li-dot">✓</div>Integrates with Notion, HubSpot, Sheets & more</li>
                        </ul>
                    </div>
                    <div className="result-visual reveal r2">
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text3)', letterSpacing: 1, textTransform: 'uppercase' as const, marginBottom: 16 }}>
                            Pipeline Health
                        </div>
                        <div className="bar-section" ref={barRef}>
                            {bars.map((bar, i) => (
                                <div className="bar-row" key={i}>
                                    <div className="bar-meta">
                                        <span>{bar.label}</span>
                                        <span style={{ color: 'var(--blue)', fontWeight: 700 }}>{bar.value}</span>
                                    </div>
                                    <div className="bar-track">
                                        <div className="bar-fill" style={{ width: bar.width }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: 20, padding: 16, background: 'var(--blue-pale)', borderRadius: 10, border: '1px solid var(--border2)' }}>
                            <div style={{ fontSize: 13, color: 'var(--text2)', fontWeight: 500 }}>This month vs last month</div>
                            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--blue)', letterSpacing: -1, marginTop: 4 }}>
                                +32% <span style={{ fontSize: 15, color: 'var(--text3)', fontWeight: 400 }}>pipeline value</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
