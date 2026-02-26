import { useLang } from '../i18n';

export default function LangToggle() {
    const { lang, toggle } = useLang();

    return (
        <div className="standalone-lang-toggle">
            <button
                className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                onClick={() => lang !== 'ar' && toggle()}
            >
                AR
            </button>
            <div className="lang-divider" />
            <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => lang !== 'en' && toggle()}
            >
                EN
            </button>
        </div>
    );
}
