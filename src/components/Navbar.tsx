import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { lang, toggle, t } = useLang();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 150);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={`nav-trigger ${scrolled ? 'active' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
            />
            <nav
                className={`${scrolled ? 'scrolled compact' : ''} ${isHovered ? 'visible' : ''}`}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/" className="nav-logo">
                    <img src="/logo.png" alt="Accelera" />
                    Accelera
                </Link>
                <ul className="nav-links">
                    <li><Link to="/services">{t('nav.services')}</Link></li>
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
        </>
    );
}

