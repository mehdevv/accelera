import { useLang } from '../i18n';

export default function FloatingWhatsApp() {
    const { t } = useLang();
    return (
        <a
            href="https://wa.me/213542452129"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            title={t('nav.cta')}
        >
            <img src="/whatsapp-white-icon.png" alt="WhatsApp" />
            <span>{t('nav.cta')}</span>
        </a>
    );
}
