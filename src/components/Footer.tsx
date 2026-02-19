const footerLinks = {
    Services: [
        'Software Solutions',
        'Website Creation',
        'AI Automation',
        'CRM & Follow-up',
        'Lead Generation',
    ],
    Company: ['About', 'Portfolio', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'GDPR'],
};

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div>
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Accelera" />
                        Accelera
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 260 }}>
                        The agency growth platform. Software, automation, and AI for digital agencies.
                    </p>
                </div>
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div className="footer-col" key={title}>
                        <h5>{title}</h5>
                        <ul>
                            {links.map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footer-bottom">
                <span>© 2025 Accelera. All rights reserved.</span>
                <span>Built with care · Algeria 🇩🇿</span>
            </div>
        </footer>
    );
}
