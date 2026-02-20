import { useLang } from '../i18n';

export default function Footer() {
    const { t } = useLang();

    const footerLinks = {
        [t('footer.col1')]: [t('footer.s1'), t('footer.s2'), t('footer.s3')],
        [t('footer.col2')]: [t('footer.c1'), t('footer.c2'), t('footer.c3'), t('footer.c4'), t('footer.c5')],
        [t('footer.col3')]: [t('footer.l1'), t('footer.l2'), t('footer.l3')],
    };

    return (
        <footer>
            <div className="footer-top">
                <div>
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Accelera" />
                        Accelera
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 260 }}>
                        {t('footer.tagline')}
                    </p>
                </div>
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div className="footer-col" key={title}>
                        <h5>{title}</h5>
                        <ul>
                            {links.map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footer-bottom">
                <span>{t('footer.copy')}</span>
                <span>{t('footer.credit')}</span>
            </div>
        </footer>
    );
}
