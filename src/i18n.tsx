import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Lang = 'en' | 'ar';

interface LangContextType {
    lang: Lang;
    toggle: () => void;
    t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
    lang: 'ar',
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

    // ─── SERVICE PAGE ───
    'sp.hero.badge': { en: '🚀 Limited Ramadan Offer', ar: '🚀 عرض رمضان المحدود' },
    'sp.hero.title1': { en: 'We build your system to', ar: 'نطوّرلك طريقة' },
    'sp.hero.title2': { en: 'attract & close clients', ar: 'تجيب وتغلق الكليان' },
    'sp.hero.title3': { en: 'smartly, without chaos', ar: 'بذكاء وبلا فوضى' },
    'sp.hero.sub': {
        en: 'We build you a professional sales page that converts visits to qualified clients — same budget, bigger results.',
        ar: 'نركبولك صفحة مبيعات احترافية تحوّل الزيارات لكليان مؤهلين — بنفس الميزانية ونتائج أكبر.',
    },
    'sp.hero.cta': { en: '🎯 Book a free call', ar: '🎯 احجز مكالمة مجانية' },
    'sp.hero.cta2': { en: 'How does the system work?', ar: 'كيفاش يخدم السيستام؟' },
    'sp.hero.stat1.num': { en: '+80%', ar: '+80%' },
    'sp.hero.stat1.label': { en: 'Revenue increase', ar: 'زيادة في الأرباح' },
    'sp.hero.stat2.num': { en: '40%', ar: '40%' },
    'sp.hero.stat2.label': { en: 'Closing Rate', ar: 'Closing Rate' },
    'sp.hero.stat3.num': { en: '24/7', ar: '24/7' },
    'sp.hero.stat3.label': { en: 'Works non-stop', ar: 'يخدم بلا توقف' },
    'sp.hero.stat4.num': { en: '0 da', ar: '0 da' },
    'sp.hero.stat4.label': { en: 'Monthly costs', ar: 'مصاريف شهرية' },

    'sp.audience.tag': { en: '// Who is this for', ar: '// موجهلو' },
    'sp.audience.title': { en: 'This offer is for you if...', ar: 'هذا العرض لكم إذا كنتو...' },
    'sp.audience.1': { en: 'You run Meta Ads', ar: 'تديرو Meta Ads' },
    'sp.audience.2': { en: 'You work with organic content', ar: 'تخدمو أورغانيك' },
    'sp.audience.3': { en: 'You send people to Instagram / Messenger', ar: 'تبعثو الناس للـ Instagram / Messenger' },
    'sp.audience.4': { en: 'You struggle with DMs', ar: 'تتعبو في les DM' },
    'sp.audience.5': { en: 'You waste time with unqualified leads', ar: 'تضيعو الوقت مع ناس غير مؤهلين' },
    'sp.audience.6': { en: 'You want to earn more without increasing budget', ar: 'تحبو تربحو أكثر بلا زيادة في الميزانية' },

    'sp.problem.tag': { en: '// The Problem', ar: '// المشكل' },
    'sp.problem.title': { en: 'Where are agencies going wrong?', ar: 'وين رايحة الوكالات غلط؟' },
    'sp.problem.desc': { en: 'Most agencies work in a way that costs them time and money and lowers their closing rate.', ar: 'أغلب الوكالات يخدمو بطريقة تكلفهم وقت ومال وتخفض نسبة الغلق تاعهم.' },
    'sp.problem.flow': { en: 'Ad → DM → Long conversation → Objections → Maybe closes... maybe not ❌', ar: 'إعلان → DM → هدرة طويلة → شرح + اعتراضات → يمكن يتغلق... يمكن لا ❌' },
    'sp.problem.c1.title': { en: 'Message chaos', ar: 'فوضى في الرسائل' },
    'sp.problem.c1.desc': { en: 'DMs without a system, everything overlaps and you lose track.', ar: 'DMs بلا نظام، كل شي يتداخل وما تعرفش وين راك.' },
    'sp.problem.c2.title': { en: 'Unqualified leads', ar: 'ناس غير مؤهلين' },
    'sp.problem.c2.desc': { en: 'You explain from scratch to everyone who messages you, even if they\'re not interested.', ar: 'تبدا تشرح من الصفر لكل واحد يراسلك حتى إذا ماشي مهتم.' },
    'sp.problem.c3.title': { en: 'Wasted time', ar: 'تضياع الوقت' },
    'sp.problem.c3.desc': { en: 'Hours spent on messages that bring nothing. Low return on every word.', ar: 'ساعات في رسائل ما تجيب والو. مردودية ضعيفة على كل كلمة.' },
    'sp.problem.c4.title': { en: 'High CAC & Low Closing', ar: 'CAC عالي & Closing ضعيف' },
    'sp.problem.c4.desc': { en: '15% to 20% closing rate while you could exceed 35% with the right approach.', ar: '15% إلى 20% closing rate بينما يمكن تتجاوز 35% بالطريقة الصحيحة.' },
    'sp.problem.bottom': { en: 'The problem is NOT the traffic.', ar: 'المشكل ماشي في الترافيك.' },
    'sp.problem.bottom2': { en: ' The problem is HOW you convert visits to clients.', ar: ' المشكل في الطريقة لي تتحول بيها الزيارات إلى كليان.' },

    'sp.system.tag': { en: '// The Solution', ar: '// الحل' },
    'sp.system.title': { en: 'How does the system work?', ar: 'كيفاش يخدم السيستام؟' },
    'sp.system.desc': { en: '4 structured steps that convert regular visits to clients ready to make a decision.', ar: '4 مراحل مترتبة تحوّل الزيارات العادية لكليان جاهزين يدّو القرار.' },
    'sp.system.s1.num': { en: '01 / TRAFFIC', ar: '01 / TRAFFIC' },
    'sp.system.s1.icon': { en: '📡', ar: '📡' },
    'sp.system.s1.title': { en: 'Traffic', ar: 'الترافيك' },
    'sp.system.s1.desc': { en: 'Meta Ads or organic — same method you already use.', ar: 'Meta Ads ولا أورغانيك — نفس الطريقة لي تخدم بيها.' },
    'sp.system.s2.num': { en: '02 / FUNNEL', ar: '02 / FUNNEL' },
    'sp.system.s2.icon': { en: '🌐', ar: '🌐' },
    'sp.system.s2.title': { en: 'Sales Page', ar: 'صفحة المبيعات' },
    'sp.system.s2.desc': { en: 'Professional page with strong headline, offer explanation, benefits, proof, FAQ and clear CTA.', ar: 'صفحة احترافية بعنوان قوي، شرح العرض، فوائد، إثباتات، FAQ وCTA واضح.' },
    'sp.system.s3.num': { en: '03 / QUALIFY', ar: '03 / QUALIFY' },
    'sp.system.s3.icon': { en: '🎯', ar: '🎯' },
    'sp.system.s3.title': { en: 'Smart Qualification', ar: 'تأهيل ذكي' },
    'sp.system.s3.desc': { en: 'Only serious leads who read and are convinced reach the final step.', ar: 'غير الجادين اللي قرأو وقتنعو يوصلو للمرحلة الأخيرة.' },
    'sp.system.s4.num': { en: '04 / CLOSE', ar: '04 / CLOSE' },
    'sp.system.s4.icon': { en: '🤝', ar: '🤝' },
    'sp.system.s4.title': { en: 'Quick Close', ar: 'الغلق السريع' },
    'sp.system.s4.desc': { en: 'Shorter calls, less talking, higher closing rate — the client comes convinced.', ar: 'مكالمات أقصر، هدرة أقل، نسبة غلق أعلى — العميل جاي مقتنع.' },
    'sp.system.flow.label': { en: 'The new way — a client who understands and is convinced', ar: 'الطريقة الجديدة — يوصلك عميل فاهم ومقتنع' },
    'sp.system.flow.1': { en: 'Ad', ar: 'إعلان' },
    'sp.system.flow.2': { en: 'Sales Page', ar: 'صفحة مبيعات' },
    'sp.system.flow.3': { en: 'Qualified & convinced client', ar: 'عميل مؤهل ومقتنع' },
    'sp.system.flow.4': { en: 'WhatsApp / Call', ar: 'واتساب / مكالمة' },
    'sp.system.flow.5': { en: '✅ Quick Close', ar: '✅ غلق سريع' },

    'sp.benefits.tag': { en: '// Benefits', ar: '// الفوائد' },
    'sp.benefits.title': { en: 'What you gain from this system', ar: 'واش تكسب من هذا السيستام' },
    'sp.benefits.b1.title': { en: 'Ready clients', ar: 'كليان جاهزين' },
    'sp.benefits.b1.desc': { en: 'The client reaches you after reading and being convinced — no explaining from scratch.', ar: 'العميل وصلك بعد ما قرا وقتنع — ما تبداش تشرح من الصفر.' },
    'sp.benefits.b2.title': { en: 'Automatic qualification', ar: 'تأهيل تلقائي' },
    'sp.benefits.b2.desc': { en: 'Only serious leads reach you — stop wasting time with uninterested people.', ar: 'بس الجادين يوصلوك — توقف على تضيع الوقت مع ناس ماشي مهتمين.' },
    'sp.benefits.b3.title': { en: 'Higher Closing Rate', ar: 'Closing Rate أعلى' },
    'sp.benefits.b3.desc': { en: 'From 15-20% to 35-40% with the same traffic and same budget.', ar: 'من 15-20% لـ 35-40% بنفس الترافيك ونفس الميزانية.' },
    'sp.benefits.b4.title': { en: 'More revenue, no extra cost', ar: 'أرباح أكثر بلا زيادة' },
    'sp.benefits.b4.desc': { en: 'Same ad brings +80% income — without spending an extra dollar.', ar: 'نفس الإعلان يجيبلك +80% في الدخل — بلا ما تزيد دولار.' },
    'sp.benefits.b5.title': { en: 'Works 24/7', ar: 'يخدم 24/7' },
    'sp.benefits.b5.desc': { en: 'The page works even while you sleep — you don\'t depend on anyone.', ar: 'الصفحة تشتغل حتى وانت نايم — ما تسطاش على حد.' },
    'sp.benefits.b6.title': { en: 'Strong Authority', ar: 'Authority قوية' },
    'sp.benefits.b6.desc': { en: 'A professional page builds trust & differentiates you from competitors.', ar: 'صفحة احترافية تبني ثقة وتفرق بيك وبين المنافسين.' },

    'sp.proof.tag': { en: '// The Numbers', ar: '// الأرقام' },
    'sp.proof.title': { en: 'The difference in real numbers', ar: 'الفرق في الأرقام الحقيقية' },
    'sp.proof.desc': { en: 'Same $50 in ads — completely different results', ar: 'نفس 50$ في الإعلانات — نتائج مختلفة تماماً' },
    'sp.proof.before': { en: '❌ BEFORE — Without the system', ar: '❌ BEFORE — قبل السيستام' },
    'sp.proof.after': { en: '✅ AFTER — With the system', ar: '✅ AFTER — مع السيستام' },
    'sp.proof.m1': { en: 'Ad Budget', ar: 'ميزانية الإعلان' },
    'sp.proof.m2': { en: 'Closing Rate', ar: 'Closing Rate' },
    'sp.proof.m3': { en: 'Number of Clients', ar: 'عدد الكليان' },
    'sp.proof.m4': { en: 'Revenue (at 2000 da/client)', ar: 'الدخل (بـ 2000 da/كليان)' },
    'sp.proof.m5': { en: 'Closing Time', ar: 'وقت الغلق' },
    'sp.proof.b.v1': { en: '50$', ar: '50$' },
    'sp.proof.b.v2': { en: '20%', ar: '20%' },
    'sp.proof.b.v3': { en: '6 clients', ar: '6 كليان' },
    'sp.proof.b.v4': { en: '12,000 da', ar: '12,000 da' },
    'sp.proof.b.v5': { en: 'Very long', ar: 'طويل جداً' },
    'sp.proof.a.v1': { en: '50$', ar: '50$' },
    'sp.proof.a.v2': { en: '35–40%', ar: '35–40%' },
    'sp.proof.a.v3': { en: '8–10 clients', ar: '8–10 كليان' },
    'sp.proof.a.v4': { en: '16,000–20,000 da', ar: '16,000–20,000 da' },
    'sp.proof.a.v5': { en: 'Much shorter', ar: 'أقصر بكثير' },
    'sp.proof.highlight.num': { en: '+8,000 da', ar: '+8,000 da' },
    'sp.proof.highlight.desc': { en: 'Approx. 80% increase in revenue — without spending an extra dollar on ads', ar: 'زيادة تقريبية 80% في الأرباح — بلا ما تزيد دولار واحد في الإعلانات' },

    'sp.comp.tag': { en: '// Comparison', ar: '// المقارنة' },
    'sp.comp.title': { en: 'Why is it better than alternatives?', ar: 'علاش خير من البدائل؟' },
    'sp.comp.c1.title': { en: '❌ WhatsApp / Instagram Automation', ar: '❌ أتمتة واتساب / انستغرام' },
    'sp.comp.c1.i1': { en: 'Still disorganized conversations', ar: 'تبقى هدرة بلا تنظيم' },
    'sp.comp.c1.i2': { en: 'Message chaos', ar: 'فوضى في الرسائل' },
    'sp.comp.c1.i3': { en: 'Doesn\'t build authority', ar: 'ما تبنيش authority' },
    'sp.comp.c1.i4': { en: 'Doesn\'t explain the offer well', ar: 'ما تشرحش العرض مليح' },
    'sp.comp.c2.title': { en: 'Conversion Funnel System', ar: 'سيستام البنية التحويلية' },
    'sp.comp.c2.tag': { en: '✅ Our System', ar: '✅ سيستامنا' },
    'sp.comp.c2.i1': { en: 'Simple & organized', ar: 'بسيط ومنظم' },
    'sp.comp.c2.i2': { en: 'Built once', ar: 'يتدار مرة وحدة' },
    'sp.comp.c2.i3': { en: 'No monthly costs', ar: 'بلا مصاريف شهرية' },
    'sp.comp.c2.i4': { en: 'Works 24/7', ar: 'يخدم 24/7' },
    'sp.comp.c2.i5': { en: 'Convinces before you talk', ar: 'يقنع قبل ما تهدر' },
    'sp.comp.c3.title': { en: '❌ AI Automation', ar: '❌ AI Automation' },
    'sp.comp.c3.i1': { en: 'Expensive', ar: 'غالية' },
    'sp.comp.c3.i2': { en: 'Monthly subscription', ar: 'Abonnement شهري' },
    'sp.comp.c3.i3': { en: 'Complex to set up', ar: 'معقدة في الإعداد' },
    'sp.comp.c3.i4': { en: 'Not necessary for many', ar: 'ماشي ضرورية للكثير' },

    'sp.offer.tag': { en: '// The Offer', ar: '// العرض' },
    'sp.offer.title': { en: 'What\'s included?', ar: 'واش يشمل العرض؟' },
    'sp.offer.i1': { en: 'Complete conversion sales page', ar: 'صفحة مبيعات تحويلية كاملة' },
    'sp.offer.i2': { en: 'Restructure your offer convincingly', ar: 'إعادة هيكلة عرضك بطريقة تقنع' },
    'sp.offer.i3': { en: 'Build strong Authority', ar: 'بناء Authority قوية' },
    'sp.offer.i4': { en: 'Handle objections on the page', ar: 'معالجة الاعتراضات في الصفحة' },
    'sp.offer.i5': { en: 'Automatic client qualification', ar: 'تأهيل العملاء أوتوماتيكياً' },
    'sp.offer.i6': { en: 'Direct WhatsApp / Call link', ar: 'ربط مباشر مع واتساب / مكالمة' },
    'sp.offer.i7': { en: 'Full ad integration', ar: 'دمج كامل مع الإعلانات' },
    'sp.offer.i8': { en: 'Ongoing strategic support', ar: 'دعم استراتيجي مستمر' },
    'sp.offer.ramadan.badge': { en: '🌙 Ramadan Offer', ar: '🌙 عرض رمضان' },
    'sp.offer.ramadan.title': { en: 'Exceptional Discount', ar: 'تخفيض استثنائي' },
    'sp.offer.ramadan.sub': { en: 'For a limited number of agencies only', ar: 'لعدد محدود من الوكالات فقط' },
    'sp.offer.ramadan.discount': { en: '-80%', ar: '-80%' },
    'sp.offer.ramadan.label': { en: 'Discount on original price', ar: 'تخفيض على السعر الأصلي' },
    'sp.offer.ramadan.limited': { en: '⚠ LIMITED PLACES', ar: '⚠ PLACES LIMITÉES' },
    'sp.offer.ramadan.cta': { en: 'Reserve your spot now', ar: 'احجز مكانك الآن' },
    'sp.offer.ramadan.note': { en: 'But not for everyone — only for serious agencies', ar: 'بصح ماشي لأي واحد — غير للوكالات الجادة' },

    'sp.faq.tag': { en: '// FAQ', ar: '// FAQ' },
    'sp.faq.title': { en: 'Frequently Asked Questions', ar: 'أسئلة شائعة' },
    'sp.faq.q1': { en: 'Do I need a large ad budget?', ar: 'واش نحتاج ميزانية إعلانات كبيرة؟' },
    'sp.faq.a1': { en: 'No. The system works with any budget. Even $50/day is enough to see a clear difference in closing.', ar: 'لا. السيستام يخدم مع أي ميزانية. حتى 50$ في اليوم كافيين تشوف فرق واضح في الغلق.' },
    'sp.faq.q2': { en: 'How long until the page is built?', ar: 'قداش يدوز وقت حتى تتركب الصفحة؟' },
    'sp.faq.a2': { en: 'Between 5 and 10 business days depending on the complexity of your offer. We go into details during the strategy call.', ar: 'بين 5 و10 أيام عمل حسب تعقيد العرض تاعك. ندخلو في التفاصيل في مكالمة الاستراتيجية.' },
    'sp.faq.q3': { en: 'Does it work with our niche?', ar: 'واش يخدم مع نيش تاعنا؟' },
    'sp.faq.a3': { en: 'Yes. If you sell a service and your agency works with Meta Ads or organic, the system adapts to your niche.', ar: 'نعم. إذا تبيعو خدمة ووكالتكم تشتغل على Meta Ads أو أورغانيك، السيستام يتكيّف مع نيشكم.' },
    'sp.faq.q4': { en: 'Are there monthly costs?', ar: 'واش فيه مصاريف شهرية؟' },
    'sp.faq.a4': { en: 'No. The system is built once without subscription. The page keeps working with no extra costs.', ar: 'لا. السيستام يتبنى مرة واحدة وبلا abonnement. الصفحة تبقى تخدمكم بلا تكاليف إضافية.' },
    'sp.faq.q5': { en: 'How do we handle ads?', ar: 'كيفاش نتعاملو مع الإعلانات؟' },
    'sp.faq.a5': { en: 'We link the page directly to your current ads. You don\'t change your ad strategy — just direct people to the page instead of DMs.', ar: 'نربطو الصفحة مباشرة بإعلاناتكم الحالية. ما تبدّلوش طريقة الإعلان — غير توجيه الناس للصفحة عوض DM.' },
    'sp.faq.q6': { en: 'Do you only make a web page?', ar: 'واش تعملو غير صفحة ويب؟' },
    'sp.faq.a6': { en: 'No. We build a complete system: the page + offer structuring + client qualification + strategic support.', ar: 'لا. حنا نبنيو سيستام كامل: الصفحة + هيكلة العرض + تأهيل العملاء + الدعم الاستراتيجي.' },

    'sp.cta.tag': { en: '// Conclusion', ar: '// الخلاصة' },
    'sp.cta.title1': { en: 'Same traffic. Same budget.', ar: 'نفس الترافيك. نفس الـ Budget.' },
    'sp.cta.title2': { en: 'Much bigger results.', ar: 'نتائج أكبر بكثير.' },
    'sp.cta.sub': { en: 'We don\'t just build a site — we build a system that makes your ads bring you more clients.', ar: 'حنا ما نبنيوش غير site — نبنيو سيستام يخلي إعلانك يجيبلك كليان أكثر.' },
    'sp.cta.btn': { en: '🚀 Book a free call now', ar: '🚀 احجز مكالمة مجانية الآن' },
    'sp.cta.note': { en: '⚡ 30-minute call — no commitment — limited spots', ar: '⚡ مكالمة 30 دقيقة — بلا التزام — محدودة المقاعد' },
};

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('ar');

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
