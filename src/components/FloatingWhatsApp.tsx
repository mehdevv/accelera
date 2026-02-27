import { useLang } from '../i18n';
import WhatsAppButton from './WhatsAppButton';

export default function FloatingWhatsApp() {
    const { t } = useLang();
    return (
        <WhatsAppButton
            location="floating"
            className="floating-whatsapp"
        >
            <img src="/whatsapp-white-icon.png" alt="WhatsApp" />
            <span>{t('nav.cta')}</span>
        </WhatsAppButton>
    );
}
