import { useEffect, useRef } from 'react';
import { useLang } from '../i18n';
import RamadanPromo from './RamadanPromo';

function countUp(el: HTMLElement, target: number, suffix: string) {
    const dur = 1800;
    const start = performance.now();
    const update = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * ease) + suffix;
        if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

export default function Hero() {
    const { t } = useLang();
    const stripRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoWrapRef = useRef<HTMLDivElement>(null);

    const stats = [
        { count: 200, suffix: '+', label: t('hero.stat1') },
        { count: 98, suffix: '%', label: t('hero.stat2') },
        { count: 10, suffix: 'x', label: t('hero.stat3') },
        { count: 48, suffix: 'h', label: t('hero.stat4') },
    ];

    // Count-up observer
    useEffect(() => {
        const strip = stripRef.current;
        if (!strip) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        strip.querySelectorAll<HTMLElement>('.strip-num').forEach((n) => {
                            countUp(n, +(n.dataset.count || 0), n.dataset.suffix || '');
                        });
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.5 }
        );
        obs.observe(strip);
        return () => obs.disconnect();
    }, []);

    // Auto-play video when fully visible
    useEffect(() => {
        const video = videoRef.current;
        const wrap = videoWrapRef.current;
        if (!video || !wrap) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        video.currentTime = 0;
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.8 }
        );
        obs.observe(wrap);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="hero">
            <div style={{ height: 48 }}></div>

            <h1>
                {t('hero.title')} <img src="/logo.png" alt="Accelera" style={{ height: '0.85em', display: 'inline-block', verticalAlign: 'baseline', filter: 'brightness(0) saturate(100%) invert(27%) sepia(87%) saturate(2000%) hue-rotate(217deg) brightness(88%) contrast(95%)' }} />
            </h1>

            <p className="hero-sub">{t('hero.sub')}</p>

            <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 32 }}>
                <a href="https://wa.me/213542452129" target="_blank" rel="noopener noreferrer" className="hero-btn">
                    <img src="/whatsapp-white-icon.png" alt="WhatsApp" className="btn-wa-icon" />
                    {t('hero.btn')}
                </a>
                <a href="/services" className="hero-offer-btn">
                    {t('hero.offer')}
                </a>
            </div>
            <RamadanPromo />

            {/* Auto-play video when visible */}
            <div className="hero-video-wrap" ref={videoWrapRef}>
                <div className="hero-video-container">
                    <video
                        ref={videoRef}
                        src="/video-scroll.mp4"
                        muted
                        playsInline
                        preload="auto"
                        className="hero-video"
                    />
                </div>
            </div>

            <div className="hero-strip" ref={stripRef}>
                {stats.map((s, i) => (
                    <div className="strip-item" key={i}>
                        <span className="strip-num" data-count={s.count} data-suffix={s.suffix}>
                            {s.count}{s.suffix}
                        </span>
                        <span className="strip-label">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
