const services = [
    { icon: '⚙️', title: 'Software Solutions', desc: 'Custom platforms and internal tools engineered for performance, scale, and conversion from day one.', delay: 'r2' },
    { icon: '🌐', title: 'Website Creation', desc: 'High-converting websites and landing pages built with modern frameworks and obsessive attention to detail.', delay: 'r3' },
    { icon: '🤖', title: 'AI Automation Systems', desc: 'Intelligent workflows powered by AI that automate repetitive tasks and scale your operations autonomously.', delay: 'r4' },
    { icon: '📊', title: 'CRM & Follow-up Tools', desc: 'End-to-end client relationship systems with automated sequences, reminders, and pipeline management.', delay: 'r2' },
    { icon: '🎯', title: 'Lead Generation', desc: 'Multi-channel outbound engines with AI qualification and routing that fill your pipeline on autopilot.', delay: 'r3' },
    { icon: '📈', title: 'Analytics Dashboards', desc: 'Real-time business intelligence dashboards giving you full visibility into performance and ROI.', delay: 'r4' },
];

export default function Services() {
    return (
        <section className="services">
            <div className="section-inner">
                <div className="section-center reveal">
                    <span className="eyebrow">What we do</span>
                    <div className="s-title">Six services.<br /><span>Infinite leverage.</span></div>
                    <p className="s-sub">Every offering engineered to multiply your output — individually powerful, unstoppable together.</p>
                </div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <div className={`glass-card reveal ${s.delay}`} key={i}>
                            <div className="card-icon">{s.icon}</div>
                            <div className="card-title">{s.title}</div>
                            <p className="card-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
