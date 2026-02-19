export default function ResultAutomation() {
    return (
        <section className="results">
            <div className="section-inner">
                <div className="results-layout">
                    <div className="reveal">
                        <span className="eyebrow">AI Automation</span>
                        <div className="s-title">Stop doing things<br /><span>machines do better</span></div>
                        <p className="s-sub" style={{ marginBottom: 0 }}>
                            Your team spends hours on tasks that can run on autopilot. We build the systems that work while you sleep.
                        </p>
                        <ul className="result-list">
                            <li><div className="li-dot">✓</div>Automated lead qualification and routing</li>
                            <li><div className="li-dot">✓</div>Multi-channel follow-up sequences (email, SMS, WhatsApp)</li>
                            <li><div className="li-dot">✓</div>AI chat assistants that book calls 24/7</li>
                            <li><div className="li-dot">✓</div>Automated reporting and client updates</li>
                        </ul>
                    </div>
                    <div className="result-visual reveal r2">
                        <div className="mini-stat">
                            <span className="mini-stat-num">340%</span>
                            <span className="mini-stat-label">Average increase in lead conversion after automation</span>
                        </div>
                        <div className="flow-list">
                            <div className="flow-item">
                                <div className="flow-num">1</div>
                                <div className="flow-content">
                                    <div className="flow-title">Lead captures on your site</div>
                                    <div className="flow-desc">A visitor fills a form or chats with your AI assistant</div>
                                    <span className="flow-badge">Instant trigger</span>
                                </div>
                            </div>
                            <div className="flow-item">
                                <div className="flow-num">2</div>
                                <div className="flow-content">
                                    <div className="flow-title">AI qualifies & scores the lead</div>
                                    <div className="flow-desc">Budget, timeline, fit — scored and routed automatically</div>
                                    <span className="flow-badge">Under 30 seconds</span>
                                </div>
                            </div>
                            <div className="flow-item">
                                <div className="flow-num">3</div>
                                <div className="flow-content">
                                    <div className="flow-title">Sequence starts, deal closes</div>
                                    <div className="flow-desc">Personalised follow-ups run until the lead books or opts out</div>
                                    <span className="flow-badge">Zero manual effort</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
