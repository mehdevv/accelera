import { useLang } from '../i18n';
import RamadanPromo from './RamadanPromo';

export default function CTA() {
    const { t } = useLang();

    return (
        <section className="cta-section">
            <div className="cta-inner reveal">
                <h2>{t('cta.title1')}<br />{t('cta.title2')}</h2>
                <p>{t('cta.sub')}</p>
                <RamadanPromo />
                <a href="https://wa.me/213542452129" target="_blank" rel="noopener noreferrer" className="btn-white">
                    <img src="/whatsapp-white-icon.png" alt="WhatsApp" className="btn-wa-icon cta-wa-icon" />
                    {t('cta.btn')}
                </a>
            </div>
        </section>
    );
}
