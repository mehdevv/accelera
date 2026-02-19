const testimonials = [
    {
        initials: 'KM',
        name: 'Karim Mansour',
        role: 'CEO · NovaCorp Agency',
        text: '"Accelera built our entire client automation system in 3 weeks. What used to take 20 hours a week now runs completely on autopilot."',
        delay: 'r2',
    },
    {
        initials: 'SL',
        name: 'Sophie Laurent',
        role: 'Founder · Helix Digital',
        text: '"The AI chat system increased our lead conversion by 340% in the first month. The ROI was immediate. Best investment we\'ve made as an agency."',
        delay: 'r3',
    },
    {
        initials: 'RA',
        name: 'Rayan Achouri',
        role: 'COO · Zephyr Growth',
        text: '"We went from managing 50 clients manually to onboarding 200+ with the same team. The automation infrastructure is our secret weapon."',
        delay: 'r4',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="section-inner">
                <div className="section-center reveal">
                    <span className="eyebrow">Testimonials</span>
                    <div className="s-title">Results speak<br /><span>for themselves</span></div>
                </div>

                <div className="testi-grid">
                    {testimonials.map((t, i) => (
                        <div className={`testi-card reveal ${t.delay}`} key={i}>
                            <div className="testi-stars">★★★★★</div>
                            <p className="testi-text">{t.text}</p>
                            <div className="testi-author">
                                <div className="testi-av">{t.initials}</div>
                                <div>
                                    <div className="testi-name">{t.name}</div>
                                    <div className="testi-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
