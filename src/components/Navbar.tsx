import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                <li><a href="#">Services</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <button className="nav-cta">Book a Demo</button>
        </nav>
    );
}
