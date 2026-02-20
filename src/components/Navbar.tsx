import { useEffect, useState } from 'react';
import { useLang } from '../i18n';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { lang, toggle, t } = useLang();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <a href="#" className="nav-logo">
                <img src="/logo.png" alt="Accelera" />
                Accelera
            </a>
            <ul className="nav-links">
                <li><a href="#">{t('nav.services')}</a></li>
                <li><a href="#">{t('nav.solutions')}</a></li>
                <li><a href="#">{t('nav.portfolio')}</a></li>
                <li><a href="#">{t('nav.pricing')}</a></li>
                <li><a href="#">{t('nav.blog')}</a></li>
            </ul>
            <div className="nav-right">
                <button className="lang-toggle" onClick={toggle} title={lang === 'en' ? 'العربية' : 'English'}>
                    {lang === 'en' ? 'AR' : 'EN'}
                </button>
                <a href="https://wa.me/213542452129" target="_blank" rel="noopener noreferrer" className="nav-cta">
                    <img src="/whatsapp-white-icon.png" alt="WhatsApp" className="nav-wa-icon" />
                    {t('nav.cta')}
                </a>
            </div>
        </nav>
    );
}
