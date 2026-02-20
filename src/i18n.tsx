import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Lang = 'en' | 'ar';

interface LangContextType {
    lang: Lang;
    toggle: () => void;
    t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
    lang: 'en',
    toggle: () => { },
    t: (key: string) => key,
});

export const useLang = () => useContext(LangContext);

const translations: Record<string, Record<Lang, string>> = {
    // ─── NAVBAR ───
    'nav.services': { en: 'Services', ar: 'الخدمات' },
    'nav.solutions': { en: 'Solutions', ar: 'الحلول' },
    'nav.portfolio': { en: 'Portfolio', ar: 'الأعمال' },
    'nav.pricing': { en: 'Pricing', ar: 'الأسعار' },
    'nav.blog': { en: 'Blog', ar: 'المدونة' },
    'nav.cta': { en: 'whatsapp', ar: 'واتساب' },

    // ─── HERO ───
    'hero.title': { en: 'Accelerate your agency with', ar: 'سرّع وكالتك مع' },
    'hero.sub': {
        en: 'Software solutions, stunning websites, and AI-driven automation that transform how agencies operate — and grow.',
        ar: 'حلول برمجية، مواقع مذهلة، وأتمتة مدعومة بالذكاء الاصطناعي تغيّر طريقة عمل الوكالات — ونموها.',
    },
    'hero.btn': { en: 'Get Your Website', ar: 'احصل على موقعك' },
    'hero.note': { en: 'No commitment · Free discovery call', ar: 'بدون التزام · مكالمة استكشافية مجانية' },
    'hero.stat1': { en: 'Projects Delivered', ar: 'مشروع منجز' },
    'hero.stat2': { en: 'Client Retention', ar: 'نسبة الاحتفاظ' },
    'hero.stat3': { en: 'Average Growth', ar: 'متوسط النمو' },
    'hero.stat4': { en: 'Avg. Delivery', ar: 'متوسط التسليم' },

    // ─── SERVICES ───
    'services.eyebrow': { en: 'What we do', ar: 'ماذا نقدم' },
    'services.title1': { en: 'Three services.', ar: 'ثلاث خدمات.' },
    'services.title2': { en: 'Infinite leverage.', ar: 'تأثير لا محدود.' },
    'services.sub': {
        en: 'Every offering engineered to multiply your output — individually powerful, unstoppable together.',
        ar: 'كل خدمة مصممة لمضاعفة إنتاجيتك — قوية بمفردها، لا تُقهر معاً.',
    },
    'services.s1.title': { en: 'Software Solutions', ar: 'حلول برمجية' },
    'services.s1.desc': {
        en: 'Custom platforms and internal tools engineered for performance, scale, and conversion from day one.',
        ar: 'منصات مخصصة وأدوات داخلية مصممة للأداء والتوسع والتحويل من اليوم الأول.',
    },
    'services.s2.title': { en: 'Website Creation', ar: 'إنشاء المواقع' },
    'services.s2.desc': {
        en: 'High-converting websites and landing pages built with modern frameworks and obsessive attention to detail.',
        ar: 'مواقع وصفحات هبوط عالية التحويل مبنية بأحدث التقنيات واهتمام دقيق بالتفاصيل.',
    },
    'services.s3.title': { en: 'AI Automation Systems', ar: 'أنظمة أتمتة بالذكاء الاصطناعي' },
    'services.s3.desc': {
        en: 'Intelligent workflows powered by AI that automate repetitive tasks and scale your operations autonomously.',
        ar: 'أنظمة ذكية مدعومة بالذكاء الاصطناعي تؤتمت المهام المتكررة وتوسع عملياتك تلقائياً.',
    },
    'services.s4.title': { en: 'CRM & Follow-up Tools', ar: 'أدوات CRM والمتابعة' },
    'services.s4.desc': {
        en: 'End-to-end client relationship systems with automated sequences, reminders, and pipeline management.',
        ar: 'أنظمة إدارة علاقات العملاء الشاملة مع تسلسلات آلية وتذكيرات وإدارة خطوط المبيعات.',
    },
    'services.s5.title': { en: 'Lead Generation', ar: 'توليد العملاء' },
    'services.s5.desc': {
        en: 'Multi-channel outbound engines with AI qualification and routing that fill your pipeline on autopilot.',
        ar: 'محركات استقطاب متعددة القنوات مع تأهيل وتوجيه بالذكاء الاصطناعي تملأ خط مبيعاتك تلقائياً.',
    },
    'services.s6.title': { en: 'Analytics Dashboards', ar: 'لوحات التحليلات' },
    'services.s6.desc': {
        en: 'Real-time business intelligence dashboards giving you full visibility into performance and ROI.',
        ar: 'لوحات ذكاء الأعمال الحية تمنحك رؤية كاملة للأداء والعائد على الاستثمار.',
    },

    // ─── RESULT AUTOMATION ───
    'auto.eyebrow': { en: 'AI Automation', ar: 'أتمتة بالذكاء الاصطناعي' },
    'auto.title1': { en: 'Stop doing things', ar: 'توقف عن فعل ما' },
    'auto.title2': { en: 'machines do better', ar: 'تفعله الآلات أفضل' },
    'auto.sub': {
        en: 'Your team spends hours on tasks that can run on autopilot. We build the systems that work while you sleep.',
        ar: 'فريقك يقضي ساعات على مهام يمكن أن تعمل تلقائياً. نحن نبني الأنظمة التي تعمل وأنت نائم.',
    },
    'auto.li1': { en: 'Automated lead qualification and routing', ar: 'تأهيل وتوجيه العملاء المحتملين تلقائياً' },
    'auto.li2': { en: 'Multi-channel follow-up sequences (email, SMS, WhatsApp)', ar: 'تسلسلات متابعة متعددة القنوات (بريد، رسائل، واتساب)' },
    'auto.li3': { en: 'AI chat assistants that book calls 24/7', ar: 'مساعدات محادثة ذكية تحجز المكالمات على مدار الساعة' },
    'auto.li4': { en: 'Automated reporting and client updates', ar: 'تقارير آلية وتحديثات العملاء' },
    'auto.stat.label': { en: 'Average increase in lead conversion after automation', ar: 'متوسط الزيادة في تحويل العملاء بعد الأتمتة' },
    'auto.flow1.title': { en: 'Lead captures on your site', ar: 'عميل محتمل يزور موقعك' },
    'auto.flow1.desc': { en: 'A visitor fills a form or chats with your AI assistant', ar: 'زائر يملأ نموذجاً أو يتحدث مع مساعدك الذكي' },
    'auto.flow1.badge': { en: 'Instant trigger', ar: 'تفعيل فوري' },
    'auto.flow2.title': { en: 'AI qualifies & scores the lead', ar: 'الذكاء الاصطناعي يؤهل ويقيّم العميل' },
    'auto.flow2.desc': { en: 'Budget, timeline, fit — scored and routed automatically', ar: 'الميزانية، الجدول، التوافق — يتم التقييم والتوجيه تلقائياً' },
    'auto.flow2.badge': { en: 'Under 30 seconds', ar: 'أقل من 30 ثانية' },
    'auto.flow3.title': { en: 'Sequence starts, deal closes', ar: 'التسلسل يبدأ، الصفقة تُغلق' },
    'auto.flow3.desc': { en: 'Personalised follow-ups run until the lead books or opts out', ar: 'متابعات مخصصة تعمل حتى يحجز العميل أو ينسحب' },
    'auto.flow3.badge': { en: 'Zero manual effort', ar: 'بدون جهد يدوي' },

    // ─── RESULT CRM ───
    'crm.eyebrow': { en: 'CRM & Pipeline', ar: 'إدارة العملاء والمبيعات' },
    'crm.title1': { en: 'Every client,', ar: 'كل عميل،' },
    'crm.title2': { en: 'fully tracked', ar: 'متابع بالكامل' },
    'crm.sub': {
        en: 'Stop losing deals to forgotten follow-ups. See exactly where every lead stands and what happens next — automatically.',
        ar: 'توقف عن خسارة الصفقات بسبب المتابعات المنسية. اعرف أين يقف كل عميل وما سيحدث لاحقاً — تلقائياً.',
    },
    'crm.li1': { en: 'Visual CRM pipeline across all stages', ar: 'خط مبيعات مرئي عبر جميع المراحل' },
    'crm.li2': { en: 'Auto-reminders and task assignment', ar: 'تذكيرات آلية وتوزيع المهام' },
    'crm.li3': { en: 'Client-facing portals and status updates', ar: 'بوابات للعملاء وتحديثات الحالة' },
    'crm.li4': { en: 'Integrates with Notion, HubSpot, Sheets & more', ar: 'يتكامل مع Notion و HubSpot و Sheets والمزيد' },
    'crm.pipeline': { en: 'Pipeline Health', ar: 'صحة خط المبيعات' },
    'crm.bar1': { en: 'Prospecting', ar: 'التنقيب' },
    'crm.bar2': { en: 'Qualified', ar: 'مؤهل' },
    'crm.bar3': { en: 'Proposal Sent', ar: 'عرض مُرسل' },
    'crm.bar4': { en: 'Negotiation', ar: 'تفاوض' },
    'crm.bar5': { en: 'Closed Won', ar: 'صفقة رابحة' },
    'crm.bar1.val': { en: '142 leads', ar: '142 عميل' },
    'crm.bar2.val': { en: '89 leads', ar: '89 عميل' },
    'crm.bar3.val': { en: '54 leads', ar: '54 عميل' },
    'crm.bar4.val': { en: '31 leads', ar: '31 عميل' },
    'crm.bar5.val': { en: '24 clients', ar: '24 عميل' },
    'crm.compare': { en: 'This month vs last month', ar: 'هذا الشهر مقارنة بالشهر الماضي' },
    'crm.pipeline.val': { en: 'pipeline value', ar: 'قيمة خط المبيعات' },

    // ─── SOCIAL PROOF ───
    'social.text': { en: 'Trusted by growing agencies worldwide', ar: 'موثوق من وكالات متنامية حول العالم' },

    // ─── TESTIMONIALS ───
    'testi.eyebrow': { en: 'Testimonials', ar: 'آراء العملاء' },
    'testi.title1': { en: 'Results speak', ar: 'النتائج تتحدث' },
    'testi.title2': { en: 'for themselves', ar: 'عن نفسها' },
    'testi.t1.text': {
        en: '"Accelera built our entire client automation system in 3 weeks. What used to take 20 hours a week now runs completely on autopilot."',
        ar: '"بنت Accelera نظام أتمتة العملاء بالكامل في 3 أسابيع. ما كان يستغرق 20 ساعة أسبوعياً أصبح يعمل تلقائياً بالكامل."',
    },
    'testi.t1.role': { en: 'CEO · NovaCorp Agency', ar: 'المدير التنفيذي · وكالة NovaCorp' },
    'testi.t2.text': {
        en: '"The AI chat system increased our lead conversion by 340% in the first month. The ROI was immediate. Best investment we\'ve made as an agency."',
        ar: '"نظام المحادثة الذكي زاد تحويل العملاء بنسبة 340% في الشهر الأول. العائد كان فورياً. أفضل استثمار قمنا به كوكالة."',
    },
    'testi.t2.role': { en: 'Founder · Helix Digital', ar: 'المؤسس · Helix Digital' },
    'testi.t3.text': {
        en: '"We went from managing 50 clients manually to onboarding 200+ with the same team. The automation infrastructure is our secret weapon."',
        ar: '"انتقلنا من إدارة 50 عميل يدوياً إلى استقبال 200+ عميل بنفس الفريق. بنية الأتمتة هي سلاحنا السري."',
    },
    'testi.t3.role': { en: 'COO · Zephyr Growth', ar: 'المدير التشغيلي · Zephyr Growth' },

    // ─── CTA ───
    'cta.title1': { en: 'Launch fast.', ar: 'انطلق بسرعة.' },
    'cta.title2': { en: 'Scale forever.', ar: 'توسّع للأبد.' },
    'cta.sub': {
        en: 'Join 200+ agencies that chose Accelera to build their digital infrastructure and automate their growth.',
        ar: 'انضم إلى أكثر من 200 وكالة اختارت Accelera لبناء بنيتها الرقمية وأتمتة نموها.',
    },
    'cta.btn': { en: 'Get Your Website', ar: 'احصل على موقعك' },

    // ─── FOOTER ───
    'footer.tagline': {
        en: 'The agency growth platform. Software, automation, and AI for digital agencies.',
        ar: 'منصة نمو الوكالات. برمجيات، أتمتة، وذكاء اصطناعي للوكالات الرقمية.',
    },
    'footer.col1': { en: 'Services', ar: 'الخدمات' },
    'footer.col2': { en: 'Company', ar: 'الشركة' },
    'footer.col3': { en: 'Legal', ar: 'قانوني' },
    'footer.s1': { en: 'Website Creation', ar: 'إنشاء المواقع' },
    'footer.s2': { en: 'AI Automation', ar: 'أتمتة ذكية' },
    'footer.s3': { en: 'CRM & Follow-up', ar: 'CRM والمتابعة' },
    'footer.c1': { en: 'About', ar: 'عن الشركة' },
    'footer.c2': { en: 'Portfolio', ar: 'الأعمال' },
    'footer.c3': { en: 'Blog', ar: 'المدونة' },
    'footer.c4': { en: 'Careers', ar: 'الوظائف' },
    'footer.c5': { en: 'Contact', ar: 'تواصل معنا' },
    'footer.l1': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    'footer.l2': { en: 'Terms of Service', ar: 'شروط الخدمة' },
    'footer.l3': { en: 'GDPR', ar: 'اللائحة العامة لحماية البيانات' },
    'footer.copy': { en: '© 2025 Accelera. All rights reserved.', ar: '© 2025 Accelera. جميع الحقوق محفوظة.' },
    'footer.credit': { en: 'Built with care · Algeria 🇩🇿', ar: 'صُنع بعناية · الجزائر 🇩🇿' },

    // ─── RAMADAN PROMO ───
    'ramadan.offer': { en: 'Ramadan Offer', ar: 'عرض رمضان' },
    'ramadan.scope': { en: 'On all website creation packages', ar: 'على جميع باقات إنشاء المواقع' },
    'ramadan.days': { en: 'Days', ar: 'يوم' },
    'ramadan.hours': { en: 'Hours', ar: 'ساعة' },
    'ramadan.mins': { en: 'Min', ar: 'دقيقة' },
    'ramadan.secs': { en: 'Sec', ar: 'ثانية' },
};

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');

    const toggle = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

    const t = (key: string): string => {
        return translations[key]?.[lang] ?? key;
    };

    // Set dir and lang on <html>
    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LangContext.Provider value={{ lang, toggle, t }}>
            {children}
        </LangContext.Provider>
    );
}
