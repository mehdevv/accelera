import { useEffect, useState } from 'react';
import { useLang } from '../i18n';

const END_DATE = new Date('2026-03-20T23:59:59').getTime();

function pad(n: number) {
    return n.toString().padStart(2, '0');
}

export default function NavRamadanPromo() {
    const { t } = useLang();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        const tick = () => {
            const diff = Math.max(END_DATE - Date.now(), 0);
            setTimeLeft({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                mins: Math.floor((diff % 3600000) / 60000),
                secs: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="nav-ramadan-promo">
            <div className="nav-ramadan-badge">
                <span className="nav-ramadan-discount">-80%</span>
                <span className="nav-ramadan-label">{t('ramadan.offer')}</span>
            </div>
            <div className="nav-ramadan-timer">
                <span>{pad(timeLeft.days)}</span>
                <span className="nav-timer-sep">:</span>
                <span>{pad(timeLeft.hours)}</span>
                <span className="nav-timer-sep">:</span>
                <span>{pad(timeLeft.mins)}</span>
                <span className="nav-timer-sep">:</span>
                <span>{pad(timeLeft.secs)}</span>
            </div>
        </div>
    );
}
