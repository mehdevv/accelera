import { useEffect, useState } from 'react';
import { useLang } from '../i18n';

// Last day of Ramadan 2026
const END_DATE = new Date('2026-03-20T23:59:59').getTime();

function pad(n: number) {
    return n.toString().padStart(2, '0');
}

export default function RamadanPromo() {
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
        <div className="ramadan-promo">
            <div className="ramadan-pricing">
                <span className="ramadan-old-price">75,000 DA</span>
                <span className="ramadan-arrow">→</span>
                <span className="ramadan-new-price">15,000 DA</span>
            </div>
            <div className="ramadan-badge">
                <span className="ramadan-crescent">☪</span>
                <span className="ramadan-discount">-80%</span>
                <span className="ramadan-label">{t('ramadan.offer')}</span>
                <span className="ramadan-scope">{t('ramadan.scope')}</span>
            </div>
            <div className="ramadan-timer">
                <div className="timer-block">
                    <span className="timer-num">{pad(timeLeft.days)}</span>
                    <span className="timer-label">{t('ramadan.days')}</span>
                </div>
                <span className="timer-sep">:</span>
                <div className="timer-block">
                    <span className="timer-num">{pad(timeLeft.hours)}</span>
                    <span className="timer-label">{t('ramadan.hours')}</span>
                </div>
                <span className="timer-sep">:</span>
                <div className="timer-block">
                    <span className="timer-num">{pad(timeLeft.mins)}</span>
                    <span className="timer-label">{t('ramadan.mins')}</span>
                </div>
                <span className="timer-sep">:</span>
                <div className="timer-block">
                    <span className="timer-num">{pad(timeLeft.secs)}</span>
                    <span className="timer-label">{t('ramadan.secs')}</span>
                </div>
            </div>
        </div>
    );
}
