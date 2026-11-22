(() => {
  'use strict';

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer =
    window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  const palettes = {
    aurora: {
      nameEn: 'Aurora Gold',
      nameAr: 'ذهبي أورورا',
      a: [224, 179, 84],
      b: [56, 189, 248],
      c: [167, 139, 250],
    },
    matrix: {
      nameEn: 'Matrix Emerald',
      nameAr: 'ماتريكس أخضر',
      a: [16, 185, 129],
      b: [34, 211, 238],
      c: [110, 231, 183],
    },
    synth: {
      nameEn: 'Cyber Violet',
      nameAr: 'سايبر بنفسجي',
      a: [192, 132, 252],
      b: [244, 114, 182],
      c: [56, 189, 248],
    },
    ember: {
      nameEn: 'Sunset Ember',
      nameAr: 'وهج برتقالي',
      a: [251, 146, 60],
      b: [244, 63, 94],
      c: [250, 204, 21],
    },
  };

  const translations = {
    en: {
      pageTitle: 'Gerges Sabry — Full-Stack Software Engineer',
      navHome: 'Home',
      navLab: 'Code Lab',
      navAbout: 'About',
      navServices: 'Services',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navEstimator: 'Estimate',
      navExperience: 'Experience',
      navContact: 'Contact',
      brandSub: 'FULL-STACK ENGINEER',
      langBtn: 'عربي',
      themeLight: 'Light',
      themeDark: 'Dark',
      vibeLabel: 'VIBE',
      availability: 'Available for Full-Stack Roles & Select Projects',
      heroGreeting: 'Hi, I am',
      heroName: 'Gerges Sabry',
      roles: [
        '"Full-Stack Software Engineer"',
        '"ERP & POS Systems Architect"',
        '"Next.js & PostgreSQL Specialist"',
      ],
      heroLead:
        'I engineer production-grade web applications, multi-branch ERP & POS systems, double-entry financial backends, and razor-sharp bilingual user interfaces.',
      ctaProjects: 'Explore Featured Work',
      ctaCv: 'Download CV',
      ctaLab: 'Open Code Lab',
      metric1Label: 'API Route Modules Shipped',
      metric2Label: 'Versioned SQL Migrations',
      metric3Label: 'Granular RBAC Permissions',
      metric4Label: 'Years Shipping Web Apps',

      labEyebrow: 'Interactive Code Workspace',
      labTitle: 'Play With Live Code & Mini-Terminal',
      labDesc: 'Switch between production snippets, copy code, click quick commands, or type directly into the terminal below.',
      labRunBtn: '▶ Run Script',
      labCopyBtn: 'Copy',
      labCmdPlaceholder: 'Type a command (try: help, joke, matrix, confetti, hire)...',
      copiedCode: 'Code snippet copied to clipboard!',

      aboutEyebrow: 'About Me',
      aboutTitle: 'Engineering reliable software from PostgreSQL schema to pixel-sharp UI',
      aboutP1:
        'I am Gerges Sabry, a Full-Stack Software Engineer based in Cairo, Egypt, currently building full-stack web solutions at ART-Vision. I specialize in turning complex operational workflows into fast, secure, maintainable web applications.',
      aboutP2:
        'My work spans Next.js App Router, React 19, TypeScript, Node.js, and PostgreSQL — with deep hands-on focus on atomic financial & inventory transactions, role-based access control, automated Playwright testing, and responsive Arabic (RTL) / English (LTR) interfaces.',
      factRoleLabel: 'Role',
      factRoleVal: 'Full-Stack Software Engineer',
      factCompanyLabel: 'Company',
      factCompanyVal: 'ART-Vision',
      factLocationLabel: 'Location',
      factLocationVal: 'Cairo, Egypt',
      factLanguagesLabel: 'Languages',
      factLanguagesVal: 'Arabic (Native), English',
      factEmailLabel: 'Email',
      factPhoneLabel: 'Phone',
      factStatusLabel: 'Availability',
      factStatusVal: 'Open to Full-Time & Freelance',
      factGithubLabel: 'GitHub',

      servicesEyebrow: 'Capabilities',
      servicesTitle: 'What I Build & Deliver',
      servicesDesc: 'End-to-end architecture, security, performance, and interface craft across the full web stack.',
      srv1Title: 'Full-Stack Web Applications',
      srv1Desc: 'Production Next.js, React, and TypeScript applications engineered for speed, maintainability, and clean server/client boundaries.',
      srv2Title: 'ERP, POS & Business Systems',
      srv2Desc: 'Multi-branch retail POS, restaurant kitchen ops, warehouse transfers, supplier purchasing, and online order fulfillment workflows.',
      srv3Title: 'PostgreSQL & API Architecture',
      srv3Desc: 'Normalized relational schemas, versioned SQL migrations, atomic transactions, row locking, and strict server-side validation.',
      srv4Title: 'UI/UX & Bilingual Design Systems',
      srv4Desc: 'Accessible, responsive interfaces (320px to 1920px+) with seamless Dark/Light themes and Arabic (RTL) / English (LTR) support.',
      srv5Title: 'Security & Access Control',
      srv5Desc: 'Server-enforced RBAC, signed HttpOnly sessions, scrypt credential hashing, CSRF protection, encrypted backups, and audit logs.',
      srv6Title: 'Performance & Automated QA',
      srv6Desc: 'Core Web Vitals tuning, unit/integration suites on isolated PostgreSQL databases, and real-browser Playwright E2E verification.',

      skillsEyebrow: 'Technical Stack',
      skillsTitle: 'Tools & Technologies I Ship With',
      skillsDesc: 'A practical, battle-tested stack focused on type safety, transactional reliability, and modern web UX.',
      skGroup1: 'Frontend & UI Engineering',
      skGroup2: 'Backend, Databases & APIs',
      skGroup3: 'Testing, Security & DevOps',
      skGroup4: 'CMS, Growth & Digital Craft',

      projectsEyebrow: 'Selected Work',
      projectsTitle: 'Featured Engineering & Web Projects',
      projectsDesc: 'From enterprise transactional ERP/POS platforms to e-commerce stores and corporate brand websites.',
      flagshipBadge: 'Flagship Full-Stack System',
      flagshipTitle: 'Nexus ERP POS — Enterprise Commerce & Accounting Suite',
      flagshipTabOverview: 'Overview',
      flagshipTabArch: 'Architecture',
      flagshipTabSec: 'Security & QA',
      flagshipOverview:
        'A full-stack server-backed business management system covering Retail POS, Cash Shifts, Multi-Warehouse Inventory & Transfers, Purchasing, Restaurant Kitchen Ops, Online Orders & Delivery, Customer Portal, and Double-Entry Financial Accounting.',
      flagshipArch:
        'Powered by Next.js 15 App Router, React 19, TypeScript, and PostgreSQL with 90+ API routes, 36 SQL migrations, balanced posted-journal triggers, advisory row locking for concurrent sales/stock, and a unified Server-Sent Events (SSE) real-time bus.',
      flagshipSec:
        'Hardened with 84 RBAC permissions, permanent vs temporary permission isolation, scrypt password hashing, SameSite=Strict HttpOnly sessions, Ed25519 licensing, AES-256-GCM backups, and 244+ automated unit, security, integration & Playwright E2E tests.',
      flagshipStat1: 'API Routes',
      flagshipStat2: 'Migrations',
      flagshipStat3: 'RBAC Rules',
      flagshipStat4: 'Tests Passing',
      flagshipGithub: 'View Source on GitHub',
      flagshipContact: 'Request a Demo',

      filterAll: 'All Projects',
      filterSystems: 'Full-Stack Systems',
      filterEcommerce: 'E-Commerce',
      filterBrands: 'Web & Brands',
      searchProjectsPh: 'Search projects or tech…',
      projectsEmpty: 'No projects match your search yet — try another keyword.',
      zoomLabel: 'Preview',
      openPreview: 'Full Preview',
      viewRepo: 'GitHub Repo',

      projDashCat: 'Full-Stack · Next.js',
      projDashTitle: 'Dash — Operations Dashboard',
      projDashDesc: 'Modern TypeScript and Next.js App Router analytics & management dashboard built with modular UI components.',
      projArtCat: 'Corporate · Agency',
      projArtTitle: 'ART-Vision Digital Agency',
      projArtDesc: 'Corporate agency platform with bold visual hierarchy, product showcase, customer accounts, and lead capture.',
      projJobviaCat: 'EdTech · Bilingual Platform',
      projJobviaTitle: 'JobviaCourse — Learning Platform',
      projJobviaDesc: 'Online courses marketplace featuring Arabic/English language switching, course explorer, instructor cards, and student dashboard.',
      projWisdomCat: 'E-Commerce · Storefront',
      projWisdomTitle: 'Wisdomteller — Books & Media Store',
      projWisdomDesc: 'Editorial dark-theme books and media e-commerce platform with search, user authentication, and cart checkout.',
      projBoomCat: 'E-Commerce · Multi-Category',
      projBoomTitle: 'BoomLabels — Retail & Furniture Store',
      projBoomDesc: 'Multi-category online retail storefront with structured category navigation, product comparison, wishlist, and cart.',
      projSpaCat: 'Hospitality · Booking',
      projSpaTitle: 'Blue Loutous — Specialty Spa',
      projSpaDesc: 'Luxury skincare and specialty spa web platform featuring tiered beauty & wedding packages and appointment booking.',
      projHonorCat: 'E-Commerce · Retail',
      projHonorTitle: 'HonorRanks — Kids Fashion Store',
      projHonorDesc: 'Clean editorial children fashion and toys online store with category collections, wishlist, and responsive merchandising.',

      estEyebrow: 'Interactive Blueprint',
      estTitle: 'Configure Your Project & Estimate Scope',
      estDesc: 'Pick your project type and features below to preview the recommended architecture, timeline, and auto-fill your brief.',
      estStep1: '01 // Choose Project Type',
      estStep2: '02 // Toggle Key Capabilities',
      estType1Title: 'Brand / Landing Site',
      estType1Sub: 'Fast editorial site & lead capture',
      estType2Title: 'E-Commerce Storefront',
      estType2Sub: 'Catalog, cart, checkout & orders',
      estType3Title: 'Full-Stack Web App',
      estType3Sub: 'Next.js, PostgreSQL & live APIs',
      estType4Title: 'Custom ERP / POS System',
      estType4Sub: 'Multi-branch ops & accounting',
      estAddonBilingual: 'Bilingual AR / EN (RTL)',
      estAddonRbac: 'Admin Dashboard & RBAC',
      estAddonAccounting: 'Accounting / Payments',
      estAddonQa: 'Playwright Automated QA',
      estAddonFast: 'Priority Fast-Track',
      estOutBadge: 'LIVE ARCHITECTURE BLUEPRINT',
      estOutTimelineLabel: 'Estimated Delivery',
      estOutTierLabel: 'System Tier',
      estOutComplexLabel: 'Engineering Complexity',
      estOutStackLabel: 'Recommended Stack',
      estApplyBtn: 'Send This Brief to Contact Form →',
      estAppliedToast: 'Project brief loaded into the contact form! ✨',

      expEyebrow: 'Career & Education',
      expTitle: 'Experience & Academic Background',
      expColWork: 'Work Experience',
      expColEdu: 'Education',
      exp1Role: 'Full-Stack & Web Developer',
      exp1Date: 'Jan 2023 – Present',
      exp1Org: 'ART-Vision',
      exp1Desc:
        'Architecting and developing full-stack web applications, custom business systems, e-commerce platforms, and responsive client websites with modern JavaScript, TypeScript, React, Next.js, and WordPress.',
      exp2Role: 'Social Media & Digital Marketing Specialist',
      exp2Date: 'Jan 2019 – Dec 2020',
      exp2Org: 'Iron Gym',
      exp2Desc:
        'Planned and executed digital campaigns, brand content strategy, and audience engagement initiatives to strengthen online visibility and community growth.',
      edu1Title: 'Faculty of Commerce — Business Administration',
      edu1Date: 'Business & Management',
      edu1Org: 'Ain Shams University',
      edu1Desc:
        'Focused on Business Administration, accounting fundamentals, and commercial operations — a strong foundation that directly informs the financial accuracy and ERP/POS workflows I engineer today.',

      revEyebrow: 'Client Feedback',
      revTitle: 'What Partners & Clients Say',
      rev1Quote:
        'Exceptional web developer who combines strong engineering fundamentals with a sharp eye for visual design. Every deliverable is fast, responsive, and crafted with attention to user experience.',
      rev1Name: 'Mariam Mohamed',
      rev1Role: 'Chairman',
      rev2Quote:
        'Working with Gerges across multiple web projects consistently exceeded expectations. His full-stack command of React and Node.js, problem-solving mindset, and clean maintainable code make him a reliable partner.',
      rev2Name: 'Sogod Mhane',
      rev2Role: 'Executive Director',
      rev3Quote:
        'A true professional who builds robust, database-backed web applications and communicates complex technical decisions clearly. Collaborating with Gerges is smooth from planning through delivery.',
      rev3Name: 'Ahmed Zakaria',
      rev3Role: 'Managing Director',

      contactEyebrow: 'Get in Touch',
      contactTitle: 'Let’s Build Something Reliable Together',
      contactDesc: 'Have a full-stack project, ERP/POS system, or engineering role in mind? Send a message directly below.',
      labelName: 'Your Name',
      phName: 'e.g. Ahmed Hassan',
      labelEmail: 'Your Email',
      phEmail: 'you@example.com',
      labelSubject: 'Subject',
      phSubject: 'Project inquiry or role discussion',
      labelMessage: 'Message',
      phMessage: 'Tell me about your project, timeline, or goals...',
      submitBtn: 'Send Message',
      sendingBtn: 'Sending...',
      sendOk: 'Message sent successfully! Thank you — I will get back to you shortly.',
      sendFail: 'Could not send your message. Please try again or email support@gergessabry.xyz directly.',
      sendNetErr: 'Network error. Please check your connection and try again.',
      infoEmailTitle: 'Email',
      infoPhoneTitle: 'Phone / WhatsApp',
      infoAddressTitle: 'Location',
      infoAddressVal: 'Cairo, Egypt (11511)',
      infoSocialTitle: 'Connect Online',
      footerCopy: '© 2026 Gerges Sabry. Engineered with clean code.',
      backToTop: 'Back to top ↑',
      cmdPlaceholder: 'Type a command or jump to a section…',
      cmdEmpty: 'No matching commands found.',
      copiedEmail: 'Email copied to clipboard!',
      copiedPhone: 'Phone number copied to clipboard!',
      fxOnToast: 'Interactive FX enabled ✨',
      fxOffToast: 'Visual FX minimized',
      kudosToast: 'Thanks for the kudos! 🎉',
    },
    ar: {
      pageTitle: 'جرجس صبري — مهندس برمجيات Full-Stack',
      navHome: 'الرئيسية',
      navLab: 'معمل الكود',
      navAbout: 'نبذة عني',
      navServices: 'الخدمات',
      navSkills: 'المهارات',
      navProjects: 'الأعمال',
      navEstimator: 'تقدير مشروع',
      navExperience: 'الخبرات',
      navContact: 'تواصل معي',
      brandSub: 'مهندس برمجيات FULL-STACK',
      langBtn: 'EN',
      themeLight: 'فاتح',
      themeDark: 'داكن',
      vibeLabel: 'الألوان',
      availability: 'متاح لفرص عمل Full-Stack ومشاريع مختارة',
      heroGreeting: 'أهلاً، أنا',
      heroName: 'جرجس صبري',
      roles: [
        '"مهندس برمجيات Full-Stack"',
        '"معماري أنظمة ERP وPOS"',
        '"متخصص Next.js وPostgreSQL"',
      ],
      heroLead:
        'أصمّم وأطوّر تطبيقات ويب إنتاجية متكاملة، وأنظمة ERP ونقاط بيع (POS) متعددة الفروع، ومحركات محاسبة مالية بالقيد المزدوج، وواجهات حديثة متجاوبة بالعربية والإنجليزية.',
      ctaProjects: 'استعرض أبرز الأعمال',
      ctaCv: 'تحميل السيرة الذاتية CV',
      ctaLab: 'افتح معمل الكود',
      metric1Label: 'وحدة API إنتاجية',
      metric2Label: 'ترحيل قاعدة بيانات SQL',
      metric3Label: 'صلاحية دقيقة (RBAC)',
      metric4Label: 'سنوات خبرة تطوير ويب',

      labEyebrow: 'بيئة كود تفاعلية',
      labTitle: 'جرّب الكود والترمينال التفاعلي بنفسك',
      labDesc: 'تنقّل بين ملفات الكود الحقيقية، انسخ أي ملف، أو اكتب أوامر مباشرة في الترمينال بالأسفل (مثل joke أو matrix أو confetti).',
      labRunBtn: '▶ تشغيل السكريبت',
      labCopyBtn: 'نسخ',
      labCmdPlaceholder: 'اكتب أمراً (جرّب: help, joke, matrix, confetti, hire)...',
      copiedCode: 'تم نسخ الكود بنجاح!',

      aboutEyebrow: 'نبذة عني',
      aboutTitle: 'هندسة برمجيات موثوقة من تصميم قواعد بيانات PostgreSQL حتى أدق تفاصيل الواجهة',
      aboutP1:
        'أنا جرجس صبري، مهندس برمجيات Full-Stack من القاهرة، مصر، أعمل حالياً في تطوير حلول الويب المتكاملة لدى ART-Vision. أتخصص في تحويل عمليات الأعمال المعقدة إلى تطبيقات ويب سريعة وآمنة وسهلة الصيانة.',
      aboutP2:
        'تشمل خبرتي Next.js App Router وReact 19 وTypeScript وNode.js وPostgreSQL، مع تركيز عملي على سلامة المعاملات المالية والمخزنية، أنظمة الصلاحيات والأمان، الاختبارات الآلية بـ Playwright، وتجربة المستخدم المتجاوبة باللغتين العربية (RTL) والإنجليزية (LTR).',
      factRoleLabel: 'المسمى الوظيفي',
      factRoleVal: 'مهندس برمجيات Full-Stack',
      factCompanyLabel: 'الشركة',
      factCompanyVal: 'ART-Vision',
      factLocationLabel: 'الموقع',
      factLocationVal: 'القاهرة، مصر',
      factLanguagesLabel: 'اللغات',
      factLanguagesVal: 'العربية (لغة أم)، الإنجليزية',
      factEmailLabel: 'البريد الإلكتروني',
      factPhoneLabel: 'الهاتف',
      factStatusLabel: 'التوفر',
      factStatusVal: 'متاح للعمل بدوام كامل ومشاريع حرة',
      factGithubLabel: 'حساب GitHub',

      servicesEyebrow: 'القدرات الهندسية',
      servicesTitle: 'ما أقدمه وأبنيه',
      servicesDesc: 'هندسة متكاملة تشمل البنية التحتية والأمان والأداء وتجربة المستخدم الاحترافية.',
      srv1Title: 'تطبيقات ويب Full-Stack متكاملة',
      srv1Desc: 'تطوير تطبيقات إنتاجية باستخدام Next.js وReact وTypeScript بأداء عالٍ وفصل نظيف بين الخادم والواجهة.',
      srv2Title: 'أنظمة ERP ونقاط البيع (POS)',
      srv2Desc: 'أنظمة كاشير وتجزئة ومطاعم متعددة الفروع، إدارة مخازن وتحويلات، مشتريات، وطلبات أونلاين وتوصيل.',
      srv3Title: 'هندسة قواعد بيانات PostgreSQL وAPIs',
      srv3Desc: 'تصميم قواعد بيانات علائقية محكمة، ترحيلات SQL منظمة، معاملات ذرية، وأقفال تزامن وتحقق صارم على الخادم.',
      srv4Title: 'تصميم واجهات ونظم تصميم ثنائية اللغة',
      srv4Desc: 'واجهات متجاوبة لكل الشاشات (320px حتى 1920px+) تدعم الوضع الداكن والفاتح والعربية والإنجليزية بسلاسة.',
      srv5Title: 'الأمان وإدارة الصلاحيات (RBAC)',
      srv5Desc: 'صلاحيات دقيقة محققة على الخادم، جلسات موقّعة آمنة، تشفير كلمات المرور والنسخ الاحتياطي، وسجلات تدقيق غير قابلة للتعديل.',
      srv6Title: 'تحسين الأداء والاختبار الآلي (QA)',
      srv6Desc: 'تحسين سرعة التحميل، واختبارات وحدة وتكامل ومتصفح فعلي (Playwright) لضمان خلو الأنظمة من الأخطاء.',

      skillsEyebrow: 'المهارات التقنية',
      skillsTitle: 'الأدوات والتقنيات التي أعمل بها',
      skillsDesc: 'مجموعة تقنية عملية ومختبرة تركز على أمان الأنواع، استقرار البيانات، وتجربة المستخدم الحديثة.',
      skGroup1: 'الواجهات الأمامية وتجربة المستخدم',
      skGroup2: 'الخوادم وقواعد البيانات وواجهات API',
      skGroup3: 'الاختبار والأمان وأدوات التطوير',
      skGroup4: 'إدارة المحتوى والتسويق الرقمي',

      projectsEyebrow: 'معرض الأعمال',
      projectsTitle: 'أبرز الأنظمة ومشاريع الويب',
      projectsDesc: 'من أنظمة ERP/POS المحاسبية والمخزنية المتكاملة إلى المتاجر الإلكترونية ومواقع الشركات.',
      flagshipBadge: 'المشروع الرئيسي · Full-Stack ERP',
      flagshipTitle: 'Nexus ERP POS — منظومة إدارة التجارة والمحاسبة المتكاملة',
      flagshipTabOverview: 'نظرة عامة',
      flagshipTabArch: 'البنية الهندسية',
      flagshipTabSec: 'الأمان والاختبارات',
      flagshipOverview:
        'نظام إدارة أعمال متكامل مدعوم بخادم وقاعدة بيانات PostgreSQL يشمل: كاشير التجزئة، الورديات والنقدية، المخازن والتحويلات، المشتريات، المطاعم والمطبخ، طلبات الأونلاين والتوصيل، بوابة العملاء، والمحاسبة بالقيد المزدوج.',
      flagshipArch:
        'مبني بـ Next.js 15 App Router وReact 19 وTypeScript وPostgreSQL مع أكثر من 90 مسار API، و36 ترحيل SQL، وتريجرز اتزان القيود اليومية، وأقفال تزامن للمبيعات والمخزون، وقناة بث لحظي موحدة عبر SSE.',
      flagshipSec:
        'مؤمّن بـ 84 صلاحية RBAC مع عزل المنح المؤقتة، وتجزئة كلمات المرور بـ scrypt، وجلسات HttpOnly SameSite=Strict، وتراخيص Ed25519، ونسخ احتياطي مشفر AES-256-GCM، وأكثر من 244 اختبار وحدة وأمان وتكامل وPlaywright.',
      flagshipStat1: 'مسار API',
      flagshipStat2: 'ترحيل SQL',
      flagshipStat3: 'صلاحية RBAC',
      flagshipStat4: 'اختبار ناجح',
      flagshipGithub: 'عرض الكود على GitHub',
      flagshipContact: 'اطلب عرضاً تجريبياً',

      filterAll: 'كل المشاريع',
      filterSystems: 'أنظمة Full-Stack',
      filterEcommerce: 'متاجر إلكترونية',
      filterBrands: 'مواقع وشركات',
      searchProjectsPh: 'ابحث في المشاريع أو التقنيات…',
      projectsEmpty: 'لا توجد مشاريع مطابقة لبحثك — جرّب كلمة أخرى.',
      zoomLabel: 'معاينة',
      openPreview: 'معاينة كاملة',
      viewRepo: 'مستودع GitHub',

      projDashCat: 'Full-Stack · Next.js',
      projDashTitle: 'Dash — لوحة تحكم وتحليلات',
      projDashDesc: 'لوحة تحكم حديثة للعمليات والتحليلات مبنية باستخدام Next.js App Router وTypeScript ومكونات معيارية.',
      projArtCat: 'شركات · وكالة رقمية',
      projArtTitle: 'ART-Vision — موقع الوكالة الرقمية',
      projArtDesc: 'منصة شركة ووكالة رقمية بهوية بصرية قوية، عرض للمنتجات والخدمات، وحسابات عملاء ونماذج تواصل.',
      projJobviaCat: 'تعليم إلكتروني · ثنائي اللغة',
      projJobviaTitle: 'JobviaCourse — منصة الدورات التدريبية',
      projJobviaDesc: 'منصة تعليم إلكتروني تدعم التبديل بين العربية والإنجليزية، استعراض الدورات، لوحة الطالب، وتجربة تعلم تفاعلية.',
      projWisdomCat: 'متجر إلكتروني · كتب وميديا',
      projWisdomTitle: 'Wisdomteller — متجر الكتب والميديا',
      projWisdomDesc: 'متجر إلكتروني داكن وأنيق للكتب والمحتوى مع بحث فوري، تسجيل دخول المستخدمين، وسلة مشتريات متكاملة.',
      projBoomCat: 'متجر إلكتروني · متعدد الأقسام',
      projBoomTitle: 'BoomLabels — متجر الأثاث والتجزئة',
      projBoomDesc: 'متجر متعدد الفئات مع قائمة تصنيفات منظمة، مقارنة المنتجات، المفضلة، وسلة تسوق متجاوبة.',
      projSpaCat: 'خدمات · حجوزات',
      projSpaTitle: 'Blue Loutous — سبا وعناية بالبشرة',
      projSpaDesc: 'موقع راقٍ لمركز سبا وعناية بالبشرة يعرض باقات التجميل والعرائس ونظام حجز المواعيد أونلاين.',
      projHonorCat: 'متجر إلكتروني · أزياء أطفال',
      projHonorTitle: 'HonorRanks — متجر أزياء وألعاب الأطفال',
      projHonorDesc: 'متجر عصري لملابس وألعاب الأطفال بتصميم نظيف، تصفح حسب الفئات، قائمة مفضلة، وتجربة شراء سلسة.',

      estEyebrow: 'مخطط مشروع تفاعلي',
      estTitle: 'صمّم مواصفات مشروعك واعرف خطة التنفيذ فوراً',
      estDesc: 'اختر نوع المشروع والمميزات المطلوبة لمشاهدة التقنيات المقترحة والمدة التقديرية وتعبئة نموذج التواصل تلقائياً.',
      estStep1: '01 // اختر نوع المشروع',
      estStep2: '02 // أضف المميزات المطلوبة',
      estType1Title: 'موقع شركة / صفحة هبوط',
      estType1Sub: 'تصميم سريع وهوية بصرية قوية',
      estType2Title: 'متجر إلكتروني متكامل',
      estType2Sub: 'منتجات، سلة مشتريات وطلبات',
      estType3Title: 'تطبيق ويب Full-Stack',
      estType3Sub: 'Next.js وPostgreSQL وAPIs حية',
      estType4Title: 'نظام ERP / كاشير POS مخصص',
      estType4Sub: 'فروع، مخازن ومحاسبة مالية',
      estAddonBilingual: 'ثنائي اللغة (عربي RTL / إنجليزي)',
      estAddonRbac: 'لوحة تحكم وصلاحيات RBAC',
      estAddonAccounting: 'محاسبة مالية / دفع أونلاين',
      estAddonQa: 'اختبارات آلية Playwright',
      estAddonFast: 'تسليم سريع (أولوية)',
      estOutBadge: 'مخطط هندسي مباشر',
      estOutTimelineLabel: 'المدة التقديرية',
      estOutTierLabel: 'مستوى النظام',
      estOutComplexLabel: 'درجة التعقيد الهندسي',
      estOutStackLabel: 'التقنيات المقترحة',
      estApplyBtn: 'انقل هذا الملخص لنموذج التواصل ←',
      estAppliedToast: 'تم تجهيز ملخص مشروعك داخل نموذج التواصل بنجاح! ✨',

      expEyebrow: 'المسيرة المهنية والتعليم',
      expTitle: 'الخبرات العملية والخلفية الأكاديمية',
      expColWork: 'الخبرات العملية',
      expColEdu: 'التعليم',
      exp1Role: 'مطور ويب وFull-Stack',
      exp1Date: 'يناير 2023 – حتى الآن',
      exp1Org: 'ART-Vision',
      exp1Desc:
        'تصميم وتطوير تطبيقات ويب Full-Stack، أنظمة أعمال مخصصة، متاجر إلكترونية، ومواقع شركات متجاوبة باستخدام TypeScript وReact وNext.js وWordPress.',
      exp2Role: 'أخصائي تسويق رقمي وسوشيال ميديا',
      exp2Date: 'يناير 2019 – ديسمبر 2020',
      exp2Org: 'Iron Gym',
      exp2Desc:
        'تخطيط وتنفيذ الحملات الرقمية واستراتيجية المحتوى لتعزيز الحضور الرقمي للعلامة التجارية وزيادة تفاعل الجمهور.',
      edu1Title: 'كلية التجارة — قسم إدارة الأعمال',
      edu1Date: 'إدارة أعمال ومحاسبة',
      edu1Org: 'جامعة عين شمس',
      edu1Desc:
        'دراسة إدارة الأعمال وأساسيات المحاسبة والعمليات التجارية، وهو ما يمنحني فهماً عميقاً لبناء أنظمة ERP ونقاط البيع والمحاسبة بدقة عملية.',

      revEyebrow: 'آراء العملاء',
      revTitle: 'ماذا يقول الشركاء والعملاء',
      rev1Quote:
        'مطور ويب متميز يجمع بين القوة البرمجية والحس البصري الدقيق. كل موقع يسلمه يتميز بالسرعة والتجاوب الكامل وتجربة مستخدم راقية.',
      rev1Name: 'مريم محمد',
      rev1Role: 'رئيس مجلس الإدارة',
      rev2Quote:
        'العمل مع جرجس في عدة مشاريع ويب فاق التوقعات دائماً. إتقانه للواجهات والخوادم باستخدام React وNode.js وقدرته على حل المشكلات تجعله شريكاً يعتمد عليه.',
      rev2Name: 'سجود مهني',
      rev2Role: 'المدير التنفيذي',
      rev3Quote:
        'محترف حقيقي في بناء تطبيقات الويب المرتبطة بقواعد البيانات وتبسيط القرارات التقنية المعقدة للعميل. التعاون معه سلس من البداية حتى التسليم.',
      rev3Name: 'أحمد زكريا',
      rev3Role: 'المدير العام',

      contactEyebrow: 'تواصل معي',
      contactTitle: 'لنبنِ معاً مشروعاً قوياً وموثوقاً',
      contactDesc: 'هل لديك مشروع Full-Stack أو نظام ERP/POS أو فرصة عمل؟ أرسل رسالتك مباشرة من النموذج أدناه.',
      labelName: 'الاسم',
      phName: 'مثال: أحمد حسن',
      labelEmail: 'البريد الإلكتروني',
      phEmail: 'you@example.com',
      labelSubject: 'الموضوع',
      phSubject: 'استفسار عن مشروع أو فرصة عمل',
      labelMessage: 'الرسالة',
      phMessage: 'اكتب تفاصيل مشروعك أو استفسارك هنا...',
      submitBtn: 'إرسال الرسالة',
      sendingBtn: 'جارٍ الإرسال…',
      sendOk: 'تم إرسال رسالتك بنجاح! شكراً لتواصلك وسأرد عليك في أقرب وقت.',
      sendFail: 'تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى أو المراسلة مباشرة على support@gergessabry.xyz.',
      sendNetErr: 'تعذر الاتصال بالشبكة. تحقق من الإنترنت ثم حاول مجدداً.',
      infoEmailTitle: 'البريد الإلكتروني',
      infoPhoneTitle: 'الهاتف / واتساب',
      infoAddressTitle: 'الموقع',
      infoAddressVal: 'القاهرة، مصر (11511)',
      infoSocialTitle: 'حساباتي الرسمية',
      footerCopy: '© 2026 جرجس صبري. جميع الحقوق محفوظة.',
      backToTop: 'العودة للأعلى ↑',
      cmdPlaceholder: 'ابحث عن قسم أو أمر سريع…',
      cmdEmpty: 'لا توجد أوامر مطابقة.',
      copiedEmail: 'تم نسخ البريد الإلكتروني!',
      copiedPhone: 'تم نسخ رقم الهاتف!',
      fxOnToast: 'تم تفعيل المؤثرات التفاعلية ✨',
      fxOffToast: 'تم تقليل المؤثرات البصرية',
      kudosToast: 'شكراً لتشجيعك! 🎉',
    },
  };

  let currentLang = 'en';
  let currentTheme = 'dark';
  let currentPalette = 'aurora';
  let fxEnabled = !prefersReducedMotion;
  let kudosCount = 42;

  try {
    const savedLang = localStorage.getItem('gs-lang');
    if (savedLang === 'ar' || savedLang === 'en') currentLang = savedLang;
    const savedTheme = localStorage.getItem('gs-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') currentTheme = savedTheme;
    const savedPalette = localStorage.getItem('gs-palette');
    if (savedPalette && Object.prototype.hasOwnProperty.call(palettes, savedPalette)) {
      currentPalette = savedPalette;
    }
    const savedFx = localStorage.getItem('gs-fx');
    if (savedFx === 'off') fxEnabled = false;
    const savedKudos = Number(localStorage.getItem('gs-kudos'));
    if (Number.isFinite(savedKudos) && savedKudos >= 42) kudosCount = savedKudos;
  } catch {}

  /* ========================================================================
     Toast & Clipboard Helper
     ======================================================================== */
  const toastEl = document.getElementById('toast');
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('is-open');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 2600);
  }

  async function copyText(text, successMsg) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMsg);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast(successMsg); } catch {}
      ta.remove();
    }
  }

  /* ========================================================================
     Live Cairo Local Clock (Africa/Cairo)
     ======================================================================== */
  const clockEl = document.getElementById('cairo-clock');
  function updateClock() {
    if (!clockEl) return;
    try {
      const time = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(new Date());
      clockEl.textContent = `Cairo · ${time}`;
    } catch {
      clockEl.textContent = 'Cairo · UTC+2';
    }
  }
  updateClock();
  setInterval(updateClock, 30_000);

  /* ========================================================================
     V4 Interactive Physics Constellation Canvas + Click Ripples + Confetti Sparks
     ======================================================================== */
  const canvas = document.getElementById('neural-canvas');
  let canvasRunning = false;
  let canvasRaf = 0;
  let ripples = [];
  let sparks = [];

  function rgbStr(rgb, alpha) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
  }

  function spawnRippleAndSparks(x, y, count = 14, burstSpeed = 4.2) {
    if (!fxEnabled || prefersReducedMotion) return;
    const pal = palettes[currentPalette] || palettes.aurora;
    ripples.push({ x, y, r: 6, maxR: 96, alpha: 0.72, color: pal.b });
    const colors = [pal.a, pal.b, pal.c];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
      const speed = (0.45 + Math.random() * 0.85) * burstSpeed;
      sparks.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.6,
        r: Math.random() * 2.4 + 1.4,
        alpha: 1,
        decay: 0.018 + Math.random() * 0.016,
        color: colors[i % colors.length],
      });
    }
    if (sparks.length > 180) sparks = sparks.slice(-180);
  }

  function launchConfetti(originX, originY) {
    const x = originX ?? window.innerWidth * 0.5;
    const y = originY ?? window.innerHeight * 0.45;
    spawnRippleAndSparks(x, y, 36, 7.2);
  }

  function initNeuralCanvas() {
    if (!canvas || prefersReducedMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let nodes = [];
    let tick = 0;
    const pointer = { x: -9999, y: -9999 };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 640 ? 28 : w < 1024 ? 46 : 70;
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.68,
        vy: (Math.random() - 0.5) * 0.68,
        r: Math.random() * 1.9 + 1.2,
        phase: Math.random() * Math.PI * 2,
        kind: i % 3,
      }));
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener(
      'pointermove',
      e => { pointer.x = e.clientX; pointer.y = e.clientY; },
      { passive: true }
    );
    window.addEventListener('pointerleave', () => { pointer.x = -9999; pointer.y = -9999; });
    window.addEventListener(
      'pointerdown',
      e => {
        if (!fxEnabled) return;
        spawnRippleAndSparks(e.clientX, e.clientY, 12, 3.8);
      },
      { passive: true }
    );

    function frame() {
      if (!canvasRunning || !fxEnabled || document.hidden) {
        canvasRaf = 0;
        return;
      }
      tick += 0.025;
      ctx.clearRect(0, 0, w, h);
      const isLight = currentTheme === 'light';
      const pal = palettes[currentPalette] || palettes.aurora;
      const maxDist = w < 640 ? 115 : 156;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        // Magnetic gentle orbit & glowing link toward pointer
        const dxp = pointer.x - a.x;
        const dyp = pointer.y - a.y;
        const distP = Math.hypot(dxp, dyp);
        if (distP < 200 && distP > 1) {
          if (distP > 46) {
            a.x += (dxp / distP) * 0.32;
            a.y += (dyp / distP) * 0.32;
          }
          const alpha = (1 - distP / 200) * (isLight ? 0.34 : 0.52);
          ctx.strokeStyle = rgbStr(a.kind === 0 ? pal.a : pal.b, alpha);
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }

        // Connect neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.16 : 0.24);
            ctx.strokeStyle = rgbStr(pal.b, alpha * 0.72);
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Pulsing node + soft glow halo
        const pulse = 0.72 + Math.sin(tick * 2 + a.phase) * 0.28;
        const col = a.kind === 0 ? pal.a : a.kind === 1 ? pal.b : pal.c;
        ctx.fillStyle = rgbStr(col, (isLight ? 0.45 : 0.85) * pulse);
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r * (0.9 + pulse * 0.25), 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw expanding click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 3.6;
        rp.alpha *= 0.92;
        if (rp.alpha < 0.02 || rp.r > rp.maxR) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = rgbStr(rp.color, rp.alpha);
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw spark / confetti particles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vy += 0.08;
        sp.vx *= 0.985;
        sp.alpha -= sp.decay;
        if (sp.alpha <= 0.02) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = rgbStr(sp.color, sp.alpha);
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
        ctx.fill();
      }

      canvasRaf = requestAnimationFrame(frame);
    }

    canvasRunning = true;
    if (fxEnabled) canvasRaf = requestAnimationFrame(frame);

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && fxEnabled && !canvasRaf) {
        canvasRaf = requestAnimationFrame(frame);
      }
    });

    window.__startNeuralCanvas = () => {
      if (!canvasRaf && fxEnabled) canvasRaf = requestAnimationFrame(frame);
    };
  }

  /* ========================================================================
     Live Accent Vibe Palette Engine
     ======================================================================== */
  function applyPalette(paletteName, notify = false) {
    if (!Object.prototype.hasOwnProperty.call(palettes, paletteName)) return;
    currentPalette = paletteName;
    document.documentElement.dataset.palette = paletteName;
    try { localStorage.setItem('gs-palette', paletteName); } catch {}
    document.querySelectorAll('[data-set-palette]').forEach(btn => {
      const active = btn.getAttribute('data-set-palette') === paletteName;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    if (notify) {
      const p = palettes[paletteName];
      showToast(currentLang === 'ar' ? `تم التبديل إلى نمط: ${p.nameAr} ✨` : `Theme Vibe: ${p.nameEn} ✨`);
    }
  }

  document.querySelectorAll('[data-set-palette]').forEach(btn => {
    btn.addEventListener('click', e => {
      const next = btn.getAttribute('data-set-palette') || 'aurora';
      applyPalette(next, true);
      spawnRippleAndSparks(e.clientX, e.clientY, 18, 4.8);
    });
  });

  /* ========================================================================
     FX Toggle (Navbar Button)
     ======================================================================== */
  const fxBtn = document.getElementById('fx-toggle');
  function applyFx(enabled) {
    fxEnabled = enabled && !prefersReducedMotion;
    document.documentElement.classList.toggle('fx-off', !fxEnabled);
    fxBtn?.classList.toggle('fx-active', fxEnabled);
    fxBtn?.setAttribute('aria-pressed', String(fxEnabled));
    try { localStorage.setItem('gs-fx', fxEnabled ? 'on' : 'off'); } catch {}
    if (fxEnabled && typeof window.__startNeuralCanvas === 'function') {
      window.__startNeuralCanvas();
    }
  }
  fxBtn?.addEventListener('click', () => {
    applyFx(!fxEnabled);
    showToast(fxEnabled ? translations[currentLang].fxOnToast : translations[currentLang].fxOffToast);
  });

  /* ========================================================================
     Hero Hacker Text Scramble (Click-to-Decode Fun Easter Egg!)
     ======================================================================== */
  const scrambleEl = document.getElementById('hero-scramble');
  let scrambleTimer = null;
  function runScramble(el) {
    if (!el || prefersReducedMotion || !fxEnabled) return;
    const finalText = translations[currentLang].heroName;
    const glyphs = currentLang === 'ar' ? 'أبجدهوزحطيكلمنسعفصقرشتثخذضظغ01<>' : '01<>/{}*#abcdefghijklmnopqrstuvwxyz';
    let iteration = 0;
    if (scrambleTimer) clearInterval(scrambleTimer);
    scrambleTimer = setInterval(() => {
      el.textContent = finalText
        .split('')
        .map((ch, idx) => {
          if (ch === ' ') return ' ';
          if (idx < iteration) return finalText[idx];
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join('');
      iteration += 0.5;
      if (iteration >= finalText.length) {
        clearInterval(scrambleTimer);
        el.textContent = finalText;
      }
    }, 30);
  }
  scrambleEl?.addEventListener('click', e => {
    runScramble(scrambleEl);
    spawnRippleAndSparks(e.clientX, e.clientY, 22, 5.2);
  });

  /* ========================================================================
     Hero Typewriter Role Cycler
     ======================================================================== */
  const typewriterEl = document.getElementById('typewriter-text');
  let twTimer = null;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function restartTypewriter() {
    if (twTimer) clearTimeout(twTimer);
    if (!typewriterEl) return;
    const roles = translations[currentLang].roles;
    if (prefersReducedMotion) {
      typewriterEl.textContent = roles[0];
      return;
    }
    roleIndex = 0;
    charIndex = 0;
    deleting = false;
    tickTypewriter();
  }

  function tickTypewriter() {
    if (!typewriterEl) return;
    const roles = translations[currentLang].roles;
    const target = roles[roleIndex % roles.length];
    if (!deleting) {
      charIndex++;
      typewriterEl.textContent = target.slice(0, charIndex);
      if (charIndex >= target.length) {
        deleting = true;
        twTimer = setTimeout(tickTypewriter, 1950);
        return;
      }
      twTimer = setTimeout(tickTypewriter, 48);
    } else {
      charIndex--;
      typewriterEl.textContent = target.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        twTimer = setTimeout(tickTypewriter, 280);
        return;
      }
      twTimer = setTimeout(tickTypewriter, 24);
    }
  }

  /* ========================================================================
     V4 Interactive VS Code Code Lab + Playable Mini-Shell + Copy Snippet
     ======================================================================== */
  const ideCodeEl = document.getElementById('ide-code');
  const ideConsoleEl = document.getElementById('ide-console-body');
  const ideStatusLang = document.getElementById('ide-status-lang');
  const ideRunBtn = document.getElementById('ide-run-btn');
  const ideCopyBtn = document.getElementById('ide-copy-btn');
  const ideCmdInput = document.getElementById('ide-cmd-input');
  let activeIdeFile = 'architecture.ts';
  let runTimers = [];
  let jokeIdx = 0;

  const devJokes = {
    en: [
      'Why do programmers prefer dark mode? Because light attracts bugs!',
      'A SQL query walks into a bar, sees two tables, and asks: "Can I JOIN you?"',
      'There are 10 types of people: those who understand binary, and those who do not.',
      'PostgreSQL ACID rule #1: Never trust a client-side balance check.',
    ],
    ar: [
      'ليه المبرمجين بيحبوا الـ Dark Mode؟ عشان النور بيجيب Bugs! 🐛',
      'استعلام SQL دخل مطعم لقى جدولين سألهم: ينفع أعمل JOIN معاكم؟ 😄',
      'أهم قاعدة في قواعد البيانات: متثقش أبداً في حسابات الواجهة بدون Transaction على الخادم!',
      'في 10 أنواع من الناس: اللي بيفهموا النظام الثنائي (Binary)، واللي لأ! 😉',
    ],
  };

  const ideFiles = {
    'architecture.ts': {
      lang: 'TypeScript 5.8 · UTF-8',
      raw: `// Nexus ERP POS — Production Full-Stack Request Boundary
export async function executeCheckout(req: Request) {
  const actor = await requirePermission('sales.create');
  return transaction(async (client) => {
    await lockInventoryRows(client, items); // FOR UPDATE
    const sale = await postBalancedJournal(client, actor);
    publishRealtime('sale:completed', { branchId: sale.branchId });
    return { status: 201, saleNumber: sale.saleNumber };
  });
}`,
      code: [
        `<span class="syn-com">// Nexus ERP POS — Production Full-Stack Request Boundary</span>`,
        `<span class="syn-kw">export async function</span> <span class="syn-fn">executeCheckout</span>(req: <span class="syn-type">Request</span>) {`,
        `  <span class="syn-kw">const</span> actor = <span class="syn-kw">await</span> <span class="syn-fn">requirePermission</span>(<span class="syn-str">'sales.create'</span>);`,
        `  <span class="syn-kw">return</span> <span class="syn-fn">transaction</span>(<span class="syn-kw">async</span> (client) =&gt; {`,
        `    <span class="syn-kw">await</span> <span class="syn-fn">lockInventoryRows</span>(client, items); <span class="syn-com">// FOR UPDATE</span>`,
        `    <span class="syn-kw">const</span> sale = <span class="syn-kw">await</span> <span class="syn-fn">postBalancedJournal</span>(client, actor);`,
        `    <span class="syn-fn">publishRealtime</span>(<span class="syn-str">'sale:completed'</span>, { branchId: sale.branchId });`,
        `    <span class="syn-kw">return</span> { status: <span class="syn-num">201</span>, saleNumber: sale.saleNumber };`,
        `  });`,
        `}`,
      ],
      logs: [
        `<span class="ide-log-cyan">$ npx tsx --test tests/*.test.ts</span>`,
        `<span class="ide-log-ok">✓</span> 244/244 unit, RBAC &amp; PostgreSQL boundary tests passed (2.7s)`,
        `<span class="ide-log-gold">✓</span> Atomic transaction + SSE realtime broadcast verified.`,
      ],
    },
    'nexus-erp.sql': {
      lang: 'PostgreSQL 18 · ACID Trigger',
      raw: `-- Migration 036: Enforced Double-Entry Balanced Journal Trigger
CREATE CONSTRAINT TRIGGER trg_journal_balanced
  AFTER INSERT OR UPDATE ON journal_entries
  DEFERRABLE INITIALLY DEFERRED
  FOR EACH ROW EXECUTE FUNCTION enforce_balanced_posted_journal();

SELECT sum(debit) = sum(credit) AS balanced
  FROM journal_lines WHERE journal_entry_id = NEW.id;`,
      code: [
        `<span class="syn-com">-- Migration 036: Enforced Double-Entry Balanced Journal Trigger</span>`,
        `<span class="syn-kw">CREATE CONSTRAINT TRIGGER</span> trg_journal_balanced`,
        `  <span class="syn-kw">AFTER INSERT OR UPDATE ON</span> journal_entries`,
        `  <span class="syn-kw">DEFERRABLE INITIALLY DEFERRED</span>`,
        `  <span class="syn-kw">FOR EACH ROW EXECUTE FUNCTION</span> <span class="syn-fn">enforce_balanced_posted_journal</span>();`,
        ``,
        `<span class="syn-com">-- Immutable Append-Only Audit Trail</span>`,
        `<span class="syn-kw">SELECT</span> sum(debit) = sum(credit) <span class="syn-kw">AS</span> balanced`,
        `  <span class="syn-kw">FROM</span> journal_lines <span class="syn-kw">WHERE</span> journal_entry_id = NEW.id;`,
      ],
      logs: [
        `<span class="ide-log-cyan">$ npm run test:reports</span>`,
        `<span class="ide-log-ok">✓</span> Trial Balance, P&amp;L, Balance Sheet &amp; AR/AP Aging reconciled (14/14)`,
        `<span class="ide-log-gold">✓</span> Zero unbalanced journal entries allowed at DB layer.`,
      ],
    },
    'skills.json': {
      lang: 'JSON · Stack Manifest',
      raw: `{
  "engineer": "Gerges Sabry",
  "frontend": ["Next.js 15", "React 19", "TypeScript", "RTL/LTR UX"],
  "backend": ["Node.js", "PostgreSQL", "REST APIs", "SSE"],
  "security": ["84-Rule RBAC", "scrypt", "AES-256-GCM", "Ed25519"],
  "qa": ["Playwright E2E", "Isolated PG Suites", "Docker"]
}`,
      code: [
        `{`,
        `  <span class="syn-fn">"engineer"</span>: <span class="syn-str">"Gerges Sabry"</span>,`,
        `  <span class="syn-fn">"frontend"</span>: [<span class="syn-str">"Next.js 15"</span>, <span class="syn-str">"React 19"</span>, <span class="syn-str">"TypeScript"</span>, <span class="syn-str">"RTL/LTR UX"</span>],`,
        `  <span class="syn-fn">"backend"</span>: [<span class="syn-str">"Node.js"</span>, <span class="syn-str">"PostgreSQL"</span>, <span class="syn-str">"REST APIs"</span>, <span class="syn-str">"SSE"</span>],`,
        `  <span class="syn-fn">"security"</span>: [<span class="syn-str">"84-Rule RBAC"</span>, <span class="syn-str">"scrypt"</span>, <span class="syn-str">"AES-256-GCM"</span>, <span class="syn-str">"Ed25519"</span>],`,
        `  <span class="syn-fn">"qa"</span>: [<span class="syn-str">"Playwright E2E"</span>, <span class="syn-str">"Isolated PG Suites"</span>, <span class="syn-str">"Docker"</span>]`,
        `}`,
      ],
      logs: [
        `<span class="ide-log-cyan">$ npm run typecheck &amp;&amp; npm run build</span>`,
        `<span class="ide-log-ok">✓</span> TypeScript: 0 errors · Next.js production bundle: 74 routes compiled.`,
        `<span class="ide-log-gold">✓</span> Playwright audit: 196/196 views · 0px overflow (320px–1920px).`,
      ],
    },
    'hire-me.sh': {
      lang: 'Shell · Interactive CLI',
      raw: `#!/usr/bin/env bash
echo "Initializing collaboration with Gerges Sabry..."
LOCATION="Cairo, Egypt (Remote & Onsite)"
EMAIL="support@gergessabry.xyz"
PHONE="+20 1200871167"
FLAGSHIP="github.com/GergessabryKahool/nexus-erp-pos"
echo "Status: OPEN FOR FULL-STACK ROLES & PROJECTS"`,
      code: [
        `<span class="syn-com">#!/usr/bin/env bash</span>`,
        `<span class="syn-fn">echo</span> <span class="syn-str">"Initializing collaboration with Gerges Sabry..."</span>`,
        `LOCATION=<span class="syn-str">"Cairo, Egypt (Remote &amp; Onsite)"</span>`,
        `EMAIL=<span class="syn-str">"support@gergessabry.xyz"</span>`,
        `PHONE=<span class="syn-str">"+20 1200871167"</span>`,
        `FLAGSHIP=<span class="syn-str">"github.com/GergessabryKahool/nexus-erp-pos"</span>`,
        `<span class="syn-fn">echo</span> <span class="syn-str">"Status: OPEN FOR FULL-STACK ROLES &amp; PROJECTS"</span>`,
      ],
      logs: [
        `<span class="ide-log-cyan">$ ./hire-me.sh</span>`,
        `<span class="ide-log-ok">✓</span> Availability verified: Open to Full-Stack roles &amp; custom ERP/Web builds`,
        `<span class="ide-log-gold">✓</span> Direct contact: support@gergessabry.xyz · WhatsApp +20 1200871167`,
      ],
    },
  };

  function printConsoleLines(lines) {
    if (!ideConsoleEl) return;
    runTimers.forEach(t => clearTimeout(t));
    runTimers = [];
    ideConsoleEl.innerHTML = '';
    lines.forEach((line, idx) => {
      const delay = prefersReducedMotion ? 0 : idx * 170;
      const timer = setTimeout(() => {
        const row = document.createElement('div');
        row.innerHTML = line;
        ideConsoleEl.appendChild(row);
      }, delay);
      runTimers.push(timer);
    });
  }

  function renderIdeFile(fileName, autoRun = false) {
    const file = ideFiles[fileName];
    if (!file || !ideCodeEl) return;
    activeIdeFile = fileName;
    ideCodeEl.innerHTML = file.code
      .map((line, i) => `<div><span class="ln">${String(i + 1).padStart(2, ' ')}</span>${line || '&nbsp;'}</div>`)
      .join('');
    if (ideStatusLang) ideStatusLang.textContent = file.lang;
    document.querySelectorAll('.ide-file-btn').forEach(btn => {
      const active = btn.getAttribute('data-ide-file') === fileName;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    if (autoRun) printConsoleLines(file.logs);
  }

  function runIdeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') {
      if (ideConsoleEl) ideConsoleEl.innerHTML = '';
      return;
    }
    if (cmd === 'help') {
      printConsoleLines([
        `<span class="ide-log-cyan">$ help</span>`,
        `<span class="ide-log-ok">Commands:</span> whoami · projects · joke · matrix · synth · ember · aurora · confetti · hire · clear`,
      ]);
      return;
    }
    if (cmd === 'whoami') {
      printConsoleLines([
        `<span class="ide-log-cyan">$ whoami</span>`,
        `<span class="ide-log-ok">✓</span> Gerges Sabry · Full-Stack Software Engineer @ ART-Vision (Cairo, Egypt)`,
        `<span class="ide-log-gold">→</span> Next.js 15 · React 19 · TypeScript · Node.js · PostgreSQL · Playwright`,
      ]);
      return;
    }
    if (cmd === 'projects') {
      printConsoleLines([
        `<span class="ide-log-cyan">$ ls ./featured-projects</span>`,
        `<span class="ide-log-ok">★</span> nexus-erp-pos/  (90+ APIs · 36 SQL migrations · 84 RBAC rules)`,
        `<span class="ide-log-gold">•</span> Dash/ · ART-Vision/ · JobviaCourse/ · Wisdomteller/ · BoomLabels/`,
      ]);
      return;
    }
    if (cmd === 'joke') {
      const pool = devJokes[currentLang] || devJokes.en;
      const joke = pool[jokeIdx % pool.length];
      jokeIdx++;
      printConsoleLines([
        `<span class="ide-log-cyan">$ joke --dev</span>`,
        `<span class="ide-log-gold">😄</span> ${joke}`,
      ]);
      return;
    }
    if (cmd === 'confetti' || cmd === 'party') {
      launchConfetti();
      printConsoleLines([
        `<span class="ide-log-cyan">$ ${cmd}</span>`,
        `<span class="ide-log-ok">🎉</span> Boom! Particle celebration launched across the viewport.`,
      ]);
      return;
    }
    if (['aurora', 'matrix', 'synth', 'ember'].includes(cmd) || cmd.startsWith('theme ')) {
      const targetPal = cmd.startsWith('theme ') ? cmd.replace('theme ', '').trim() : cmd;
      if (Object.prototype.hasOwnProperty.call(palettes, targetPal)) {
        applyPalette(targetPal, true);
        launchConfetti();
        printConsoleLines([
          `<span class="ide-log-cyan">$ theme ${targetPal}</span>`,
          `<span class="ide-log-ok">✓</span> Palette switched live to <strong>${palettes[targetPal].nameEn}</strong>.`,
        ]);
        return;
      }
    }
    if (cmd === 'hire' || cmd === 'contact') {
      printConsoleLines([
        `<span class="ide-log-cyan">$ ./hire-me.sh --redirect</span>`,
        `<span class="ide-log-ok">✓</span> Opening contact form &amp; pre-filling subject...`,
      ]);
      const subjectInput = document.getElementById('subject');
      if (subjectInput && !subjectInput.value) {
        subjectInput.value = currentLang === 'ar' ? 'فرصة عمل / مشروع جديد من الموقع' : 'New Project / Role Inquiry via Code Lab';
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      return;
    }
    printConsoleLines([
      `<span class="ide-log-cyan">$ ${rawCmd.replace(/</g, '&lt;')}</span>`,
      `<span class="ide-log-gold">!</span> Unknown command. Type <strong>help</strong> to see all interactive commands.`,
    ]);
  }

  document.querySelectorAll('.ide-file-btn').forEach(btn => {
    btn.addEventListener('click', () => renderIdeFile(btn.getAttribute('data-ide-file') || 'architecture.ts', true));
  });
  ideRunBtn?.addEventListener('click', () => {
    const file = ideFiles[activeIdeFile];
    if (file) printConsoleLines(file.logs);
  });
  ideCopyBtn?.addEventListener('click', () => {
    const file = ideFiles[activeIdeFile];
    if (file) void copyText(file.raw, translations[currentLang].copiedCode);
  });
  document.querySelectorAll('.ide-chip').forEach(chip => {
    chip.addEventListener('click', () => runIdeCommand(chip.getAttribute('data-ide-cmd') || 'help'));
  });
  ideCmdInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = ideCmdInput.value;
      ideCmdInput.value = '';
      runIdeCommand(val);
    }
  });
  renderIdeFile('architecture.ts', true);

  /* ========================================================================
     V4 Interactive Project Scope & Timeline Estimator
     ======================================================================== */
  const estConfig = {
    landing: {
      daysMin: 5,
      daysMax: 10,
      complexity: 32,
      tierEn: 'Starter / Brand',
      tierAr: 'تعريفي / سريع',
      stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'SEO'],
      labelEn: 'Brand / Landing Website',
      labelAr: 'موقع شركة / صفحة هبوط',
    },
    ecommerce: {
      daysMin: 14,
      daysMax: 24,
      complexity: 58,
      tierEn: 'Growth Storefront',
      tierAr: 'متجر إلكتروني متكامل',
      stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Checkout API'],
      labelEn: 'E-Commerce Storefront',
      labelAr: 'متجر إلكتروني متكامل',
    },
    webapp: {
      daysMin: 21,
      daysMax: 35,
      complexity: 74,
      tierEn: 'Production SaaS / App',
      tierAr: 'تطبيق ويب متكامل',
      stack: ['Next.js 15', 'React 19', 'Node.js', 'PostgreSQL', 'REST / SSE'],
      labelEn: 'Full-Stack Web Application',
      labelAr: 'تطبيق ويب Full-Stack',
    },
    erp: {
      daysMin: 35,
      daysMax: 60,
      complexity: 92,
      tierEn: 'Enterprise Suite',
      tierAr: 'منظومة مؤسسية ERP/POS',
      stack: ['Next.js 15', 'PostgreSQL ACID', 'Double-Entry Ledger', '84 RBAC', 'Docker'],
      labelEn: 'Custom ERP / POS System',
      labelAr: 'نظام ERP / كاشير POS مخصص',
    },
  };

  let estType = 'webapp';
  const estAddons = new Set(['bilingual', 'rbac']);

  function updateEstimator() {
    const base = estConfig[estType] || estConfig.webapp;
    let minD = base.daysMin;
    let maxD = base.daysMax;
    let score = base.complexity;
    const stack = [...base.stack];

    if (estAddons.has('bilingual')) { minD += 2; maxD += 4; score += 5; stack.push('RTL / LTR'); }
    if (estAddons.has('rbac')) { minD += 3; maxD += 5; score += 8; if (!stack.includes('84 RBAC')) stack.push('RBAC Auth'); }
    if (estAddons.has('accounting')) { minD += 5; maxD += 10; score += 10; if (!stack.includes('Double-Entry Ledger')) stack.push('Financial Ledger'); }
    if (estAddons.has('qa')) { minD += 3; maxD += 5; score += 6; stack.push('Playwright E2E'); }
    if (estAddons.has('fast')) { minD = Math.max(4, Math.round(minD * 0.78)); maxD = Math.max(7, Math.round(maxD * 0.78)); }

    score = Math.min(100, score);
    const ar = currentLang === 'ar';
    const minW = Math.max(1, Math.round(minD / 7));
    const maxW = Math.max(minW + 1, Math.round(maxD / 7));

    const timelineEl = document.getElementById('est-out-timeline');
    const tierEl = document.getElementById('est-out-tier');
    const pctEl = document.getElementById('est-out-pct');
    const fillEl = document.getElementById('est-meter-fill');
    const stackEl = document.getElementById('est-stack-pills');

    if (timelineEl) {
      timelineEl.textContent = minD < 14
        ? (ar ? `${minD}–${maxD} أيام` : `${minD}–${maxD} Days`)
        : (ar ? `${minW}–${maxW} أسابيع` : `${minW}–${maxW} Weeks`);
    }
    if (tierEl) tierEl.textContent = ar ? base.tierAr : base.tierEn;
    if (pctEl) pctEl.textContent = `${score}%`;
    if (fillEl) fillEl.style.width = `${score}%`;
    if (stackEl) {
      stackEl.innerHTML = Array.from(new Set(stack))
        .map(item => `<span class="tech-pill">${item}</span>`)
        .join('');
    }
  }

  document.querySelectorAll('.est-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      estType = btn.getAttribute('data-est-type') || 'webapp';
      document.querySelectorAll('.est-type-btn').forEach(b => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      updateEstimator();
    });
  });

  document.querySelectorAll('.est-addon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-est-addon');
      if (!key) return;
      if (estAddons.has(key)) estAddons.delete(key);
      else estAddons.add(key);
      const active = estAddons.has(key);
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
      updateEstimator();
    });
  });

  document.getElementById('est-apply-btn')?.addEventListener('click', e => {
    const base = estConfig[estType] || estConfig.webapp;
    const ar = currentLang === 'ar';
    const addonLabels = Array.from(estAddons).map(k => {
      const el = document.querySelector(`.est-addon-btn[data-est-addon="${k}"]`);
      return el ? el.textContent.trim() : k;
    });
    const timelineText = document.getElementById('est-out-timeline')?.textContent || '';
    const subjectInput = document.getElementById('subject');
    const msgInput = document.getElementById('msg');
    if (subjectInput) {
      subjectInput.value = ar
        ? `طلب تنفيذ مشروع: ${base.labelAr}`
        : `Project Inquiry: ${base.labelEn}`;
    }
    if (msgInput) {
      msgInput.value = ar
        ? `مرحباً جرجس،\nأرغب في مناقشة مشروع (${base.labelAr}).\nالمميزات المطلوبة: ${addonLabels.join('، ') || 'الباقة الأساسية'}.\nالمدة التقديرية المقترحة: ${timelineText}.\n\nتفاصيل إضافية:`
        : `Hi Gerges,\nI would like to discuss building a ${base.labelEn}.\nSelected capabilities: ${addonLabels.join(', ') || 'Core scope'}.\nEstimated timeline: ${timelineText}.\n\nAdditional details:`;
    }
    launchConfetti(e.clientX, e.clientY);
    showToast(translations[currentLang].estAppliedToast);
    document.getElementById('contact')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    setTimeout(() => document.getElementById('name')?.focus(), 450);
  });

  /* ========================================================================
     Floating Playful Kudos / Applause Button
     ======================================================================== */
  const kudosBtn = document.getElementById('dock-kudos');
  const kudosBadge = document.getElementById('kudos-badge');
  if (kudosBadge) kudosBadge.textContent = String(kudosCount);

  function triggerKudos(clientX, clientY) {
    kudosCount++;
    if (kudosBadge) kudosBadge.textContent = String(kudosCount);
    try { localStorage.setItem('gs-kudos', String(kudosCount)); } catch {}
    const rect = kudosBtn?.getBoundingClientRect();
    const x = clientX || (rect ? rect.left + rect.width / 2 : window.innerWidth - 40);
    const y = clientY || (rect ? rect.top : window.innerHeight - 140);
    launchConfetti(x, y);
    const pop = document.createElement('span');
    pop.className = 'kudos-pop';
    pop.textContent = '+1 ✨';
    pop.style.left = `${x}px`;
    pop.style.top = `${y - 14}px`;
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 950);
    showToast(translations[currentLang].kudosToast);
  }
  kudosBtn?.addEventListener('click', e => triggerKudos(e.clientX, e.clientY));

  /* ========================================================================
     Theme & Language Engine
     ======================================================================== */
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('gs-theme', theme); } catch {}
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');
    const themeLabel = document.getElementById('theme-label');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
      moonIcon.style.display = theme === 'light' ? 'block' : 'none';
    }
    if (themeLabel) {
      const t = translations[currentLang];
      themeLabel.textContent = theme === 'dark' ? t.themeLight : t.themeDark;
    }
  }

  function applyLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.pageTitle;
    try { localStorage.setItem('gs-lang', lang); } catch {}

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && Object.prototype.hasOwnProperty.call(t, key) && typeof t[key] === 'string') {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && Object.prototype.hasOwnProperty.call(t, key)) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    document.querySelectorAll('[data-rail-i18n]').forEach(el => {
      const key = el.getAttribute('data-rail-i18n');
      if (key && Object.prototype.hasOwnProperty.call(t, key)) {
        el.setAttribute('data-rail-label', t[key]);
        el.setAttribute('aria-label', t[key]);
      }
    });

    const themeLabel = document.getElementById('theme-label');
    if (themeLabel) {
      themeLabel.textContent = currentTheme === 'dark' ? t.themeLight : t.themeDark;
    }

    updateEstimator();
    restartTypewriter();
    renderCmdList(cmdInput?.value || '');
  }

  /* ========================================================================
     Scroll Progress Bar, Sticky Header & Back-to-Top Dock
     ======================================================================== */
  const header = document.getElementById('site-header');
  const progressBar = document.getElementById('scroll-progress');
  const backTopBtn = document.getElementById('dock-top');

  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 12);
    backTopBtn?.classList.toggle('is-visible', y > 420);
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;
      progressBar.style.transform = `scaleX(${ratio})`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  /* ========================================================================
     Spring Cursor Ring, Aura, Card Spotlight, Magnetic Buttons & 3D Tilt
     ======================================================================== */
  if (finePointer && !prefersReducedMotion) {
    const aura = document.getElementById('cursor-aura');
    const ring = document.getElementById('cursor-ring');
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let pointerActive = false;

    function animateCursor() {
      if (pointerActive && fxEnabled && !document.hidden) {
        ringX += (targetX - ringX) * 0.2;
        ringY += (targetY - ringY) * 0.2;
        if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
        if (aura) aura.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate3d(-50%, -50%, 0)`;
      }
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    window.addEventListener(
      'pointermove',
      e => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!pointerActive) {
          pointerActive = true;
          ringX = targetX;
          ringY = targetY;
          if (aura) aura.style.opacity = '1';
          if (ring) ring.style.opacity = '1';
        }
      },
      { passive: true }
    );

    document.addEventListener('pointerover', e => {
      if (ring && e.target instanceof Element && e.target.closest('a, button, input, textarea')) {
        ring.classList.add('is-hover');
      }
    });
    document.addEventListener('pointerout', e => {
      if (ring && e.target instanceof Element && e.target.closest('a, button, input, textarea')) {
        ring.classList.remove('is-hover');
      }
    });

    // Card Spotlight Glow + Tactile 3D Micro-Tilt on Service & Project Cards
    document.querySelectorAll('.glow-card').forEach(card => {
      const tiltable = card.classList.contains('service-card') || card.classList.contains('project-card');
      card.addEventListener(
        'pointermove',
        e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mx', `${Math.round(x)}px`);
          card.style.setProperty('--my', `${Math.round(y)}px`);
          if (tiltable && fxEnabled) {
            const rx = -((y / rect.height) - 0.5) * 6;
            const ry = ((x / rect.width) - 0.5) * 6;
            card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-5px)`;
          }
        },
        { passive: true }
      );
      if (tiltable) {
        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
        });
      }
    });

    // Magnetic Buttons
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener(
        'pointermove',
        e => {
          if (!fxEnabled) return;
          const rect = btn.getBoundingClientRect();
          const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
          const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
          btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${(dy - 2).toFixed(1)}px, 0)`;
        },
        { passive: true }
      );
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });

    // 3D Tilt on Hero Portrait Stage
    const tiltWrap = document.getElementById('hero-tilt');
    if (tiltWrap) {
      tiltWrap.addEventListener(
        'pointermove',
        e => {
          if (!fxEnabled) return;
          const rect = tiltWrap.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          tiltWrap.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) scale(1.015)`;
        },
        { passive: true }
      );
      tiltWrap.addEventListener('pointerleave', () => {
        tiltWrap.style.transform = '';
      });
    }
  }

  /* ========================================================================
     Staggered Scroll Reveals & Count-Up KPIs
     ======================================================================== */
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const revObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute('data-delay') || 0);
            if (delay) entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            revObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    revealEls.forEach(el => revObserver.observe(el));
  }

  const countEls = Array.from(document.querySelectorAll('[data-count]'));
  function runCountUp(el) {
    const target = Number(el.getAttribute('data-count') || 0);
    const suffix = el.getAttribute('data-suffix') || '';
    if (prefersReducedMotion || !target) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const step = now => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = `${target}${suffix}`;
    };
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && countEls.length) {
    const countObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCountUp(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    countEls.forEach(el => countObserver.observe(el));
  }

  /* ========================================================================
     Flagship Nexus ERP POS Detail Tabs
     ======================================================================== */
  document.querySelectorAll('.flagship-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const targetId = tabBtn.getAttribute('data-tab-target');
      document.querySelectorAll('.flagship-tab').forEach(b => {
        const active = b === tabBtn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      document.querySelectorAll('.flagship-panel').forEach(panel => {
        panel.hidden = panel.id !== targetId;
      });
    });
  });

  /* ========================================================================
     Mobile Drawer & Active Section Highlighting (Navbar + Section Rail)
     ======================================================================== */
  const menuBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  function setDrawer(open) {
    if (!menuBtn || !drawer) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuBtn?.addEventListener('click', () => setDrawer(!drawer?.classList.contains('is-open')));
  drawer?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setDrawer(false)));

  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const railDots = Array.from(document.querySelectorAll('.section-rail a[href^="#"]'));
  const trackedIds = Array.from(new Set([
    ...navLinks.map(a => a.getAttribute('href')),
    ...railDots.map(a => a.getAttribute('href')),
  ].filter(Boolean)));
  const sections = trackedIds.map(sel => document.querySelector(sel)).filter(Boolean);

  function setActiveSection(id) {
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    railDots.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
  }

  if ('IntersectionObserver' in window && sections.length) {
    const secObserver = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActiveSection(id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach(sec => secObserver.observe(sec));
  }
  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY < 100) setActiveSection('home');
    },
    { passive: true }
  );

  /* ========================================================================
     Portfolio Filter + Live Search + Upgraded Lightbox
     ======================================================================== */
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  const projectSearchInput = document.getElementById('project-search');
  const projectsEmptyEl = document.getElementById('projects-empty');
  let activeFilter = 'all';

  function applyProjectFilters() {
    const q = (projectSearchInput?.value || '').trim().toLowerCase();
    let visibleCount = 0;
    projectCards.forEach(card => {
      const cat = card.getAttribute('data-category') || '';
      const text = (card.textContent || '').toLowerCase();
      const matchCat = activeFilter === 'all' || cat === activeFilter;
      const matchQuery = !q || text.includes(q);
      const show = matchCat && matchQuery;
      card.hidden = !show;
      if (show) visibleCount++;
    });
    if (projectsEmptyEl) projectsEmptyEl.hidden = visibleCount > 0;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.getAttribute('data-filter') || 'all';
      filterBtns.forEach(b => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      applyProjectFilters();
    });
  });

  projectSearchInput?.addEventListener('input', applyProjectFilters);

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  const previewItems = Array.from(document.querySelectorAll('.project-card .project-thumb-btn[data-preview-src]'));
  let activePreviewIdx = 0;
  let lastTrigger = null;

  function renderLightboxAt(index) {
    if (!previewItems.length || !lightboxImg || !lightboxTitle || !lightboxDesc) return;
    activePreviewIdx = (index + previewItems.length) % previewItems.length;
    const item = previewItems[activePreviewIdx];
    const card = item.closest('.project-card');
    lightboxImg.src = item.getAttribute('data-preview-src') || '';
    lightboxImg.alt = card?.querySelector('h3')?.textContent || 'Project Preview';
    lightboxTitle.textContent = card?.querySelector('h3')?.textContent || '';
    lightboxDesc.textContent = card?.querySelector('p')?.textContent || '';
    if (lightboxCounter) lightboxCounter.textContent = `${activePreviewIdx + 1} / ${previewItems.length}`;
  }

  function openLightbox(trigger) {
    if (!lightbox) return;
    lastTrigger = trigger;
    const src = trigger.getAttribute('data-preview-src');
    const idx = previewItems.findIndex(el => el.getAttribute('data-preview-src') === src);
    renderLightboxAt(idx >= 0 ? idx : 0);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    lastTrigger = null;
  }

  document.querySelectorAll('[data-preview-src]').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(btn));
  });
  lightboxPrev?.addEventListener('click', () => renderLightboxAt(activePreviewIdx - 1));
  lightboxNext?.addEventListener('click', () => renderLightboxAt(activePreviewIdx + 1));
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  /* ========================================================================
     Command Palette (Ctrl+K / Cmd+K)
     ======================================================================== */
  const cmdBackdrop = document.getElementById('cmd-backdrop');
  const cmdInput = document.getElementById('cmd-input');
  const cmdList = document.getElementById('cmd-list');
  const cmdTrigger = document.getElementById('cmd-trigger');
  let cmdSelectedIdx = 0;
  let visibleCommands = [];

  function getCommands() {
    const ar = currentLang === 'ar';
    return [
      { label: ar ? 'الانتقال إلى: معمل الكود التفاعلي (IDE)' : 'Jump to: Interactive Code Lab (IDE)', hint: '#code-lab', run: () => { location.hash = '#code-lab'; } },
      { label: ar ? 'الانتقال إلى: حاسبة وتخطيط المشروع' : 'Jump to: Interactive Project Estimator', hint: '#estimator', run: () => { location.hash = '#estimator'; } },
      { label: ar ? 'الانتقال إلى: مشروع Nexus ERP POS' : 'Jump to: Nexus ERP POS Flagship', hint: '#projects', run: () => { location.hash = '#projects'; } },
      { label: ar ? 'إطلاق احتفالية ألعاب نارية 🎉' : 'Launch Confetti Spark Celebration 🎉', hint: 'FUN', run: () => launchConfetti() },
      { label: ar ? 'تبديل الألوان: ماتريكس أخضر (Matrix)' : 'Switch Color Vibe: Matrix Emerald', hint: 'VIBE', run: () => applyPalette('matrix', true) },
      { label: ar ? 'تبديل الألوان: سايبر بنفسجي (Synth)' : 'Switch Color Vibe: Cyber Violet', hint: 'VIBE', run: () => applyPalette('synth', true) },
      { label: ar ? 'تبديل الألوان: وهج برتقالي (Ember)' : 'Switch Color Vibe: Sunset Ember', hint: 'VIBE', run: () => applyPalette('ember', true) },
      { label: ar ? 'تبديل الألوان: ذهبي أورورا (Aurora)' : 'Switch Color Vibe: Aurora Gold', hint: 'VIBE', run: () => applyPalette('aurora', true) },
      { label: ar ? 'تشغيل سكريبت hire-me.sh داخل المعمل' : 'Run hire-me.sh inside Code Lab', hint: 'RUN', run: () => { location.hash = '#code-lab'; renderIdeFile('hire-me.sh', true); } },
      { label: ar ? 'تبديل اللغة (عربي / English)' : 'Switch Language (EN / Arabic RTL)', hint: 'LANG', run: () => applyLang(currentLang === 'en' ? 'ar' : 'en') },
      { label: ar ? 'تبديل المظهر (داكن / فاتح)' : 'Toggle Theme (Dark / Light)', hint: 'THEME', run: () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark') },
      { label: ar ? 'تشغيل / إيقاف المؤثرات البصرية (FX)' : 'Toggle Visual Effects (FX)', hint: 'FX', run: () => applyFx(!fxEnabled) },
      { label: ar ? 'نسخ البريد الإلكتروني (support@gergessabry.xyz)' : 'Copy Email (support@gergessabry.xyz)', hint: 'COPY', run: () => copyText('support@gergessabry.xyz', translations[currentLang].copiedEmail) },
      { label: ar ? 'فتح مستودع Nexus ERP POS على GitHub' : 'Open Nexus ERP POS on GitHub', hint: 'GITHUB', run: () => window.open('https://github.com/GergessabryKahool/nexus-erp-pos', '_blank', 'noopener,noreferrer') },
      { label: ar ? 'تحميل السيرة الذاتية (CV)' : 'Open / Download CV', hint: 'CV', run: () => window.open('https://drive.google.com/file/d/1H2krislh80V8bNEhWDnDR8QcskormqxM/view?usp=drivesdk', '_blank', 'noopener,noreferrer') },
    ];
  }

  function renderCmdList(query) {
    if (!cmdList) return;
    const q = query.trim().toLowerCase();
    visibleCommands = getCommands().filter(c => `${c.label} ${c.hint}`.toLowerCase().includes(q));
    cmdSelectedIdx = 0;
    if (!visibleCommands.length) {
      cmdList.innerHTML = `<div class="cmd-empty">${translations[currentLang].cmdEmpty}</div>`;
      return;
    }
    cmdList.innerHTML = '';
    visibleCommands.forEach((cmd, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `cmd-item${idx === 0 ? ' is-selected' : ''}`;
      btn.innerHTML = `<span>${cmd.label}</span><small>${cmd.hint}</small>`;
      btn.addEventListener('click', () => { closeCmd(); cmd.run(); });
      cmdList.appendChild(btn);
    });
  }

  function updateCmdSelection(nextIdx) {
    if (!cmdList || !visibleCommands.length) return;
    cmdSelectedIdx = (nextIdx + visibleCommands.length) % visibleCommands.length;
    cmdList.querySelectorAll('.cmd-item').forEach((el, i) => {
      el.classList.toggle('is-selected', i === cmdSelectedIdx);
      if (i === cmdSelectedIdx) el.scrollIntoView({ block: 'nearest' });
    });
  }

  function openCmd() {
    if (!cmdBackdrop || !cmdInput) return;
    cmdInput.value = '';
    renderCmdList('');
    cmdBackdrop.classList.add('is-open');
    cmdBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    cmdInput.focus();
  }

  function closeCmd() {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.remove('is-open');
    cmdBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cmdTrigger?.addEventListener('click', openCmd);
  cmdBackdrop?.addEventListener('click', e => { if (e.target === cmdBackdrop) closeCmd(); });
  cmdInput?.addEventListener('input', e => renderCmdList(e.target.value));
  cmdInput?.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); updateCmdSelection(cmdSelectedIdx + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); updateCmdSelection(cmdSelectedIdx - 1); }
    else if (e.key === 'Enter' && visibleCommands[cmdSelectedIdx]) {
      e.preventDefault();
      const chosen = visibleCommands[cmdSelectedIdx];
      closeCmd();
      chosen.run();
    }
  });

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdBackdrop?.classList.contains('is-open')) closeCmd();
      else openCmd();
      return;
    }
    if (e.key === 'Escape') {
      if (cmdBackdrop?.classList.contains('is-open')) closeCmd();
      if (lightbox?.classList.contains('is-open')) closeLightbox();
      if (drawer?.classList.contains('is-open')) setDrawer(false);
    } else if (lightbox?.classList.contains('is-open')) {
      if (e.key === 'ArrowRight') renderLightboxAt(activePreviewIdx + 1);
      else if (e.key === 'ArrowLeft') renderLightboxAt(activePreviewIdx - 1);
    }
  });

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-copy') || '';
      const kind = btn.getAttribute('data-copy-kind');
      const msg = kind === 'phone' ? translations[currentLang].copiedPhone : translations[currentLang].copiedEmail;
      void copyText(value, msg);
    });
  });

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'ar' : 'en');
  });

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Boot all systems
  applyPalette(currentPalette, false);
  applyTheme(currentTheme);
  applyLang(currentLang);
  applyFx(fxEnabled);
  initNeuralCanvas();

  /* ========================================================================
     Single, Bug-Free Formspree Contact Form Handler
     ======================================================================== */
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit');

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form || !submitBtn || submitBtn.disabled) return;
    const t = translations[currentLang];
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = t.sendingBtn;
    if (statusEl) {
      statusEl.className = 'form-status';
      statusEl.textContent = '';
    }

    try {
      const formData = new FormData(form);
      const subject = formData.get('subject');
      if (typeof subject === 'string' && subject.trim()) formData.set('_subject', subject.trim());
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        if (statusEl) {
          statusEl.className = 'form-status is-success';
          statusEl.setAttribute('role', 'status');
          statusEl.textContent = t.sendOk;
        }
        launchConfetti();
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        if (statusEl) {
          statusEl.className = 'form-status is-error';
          statusEl.setAttribute('role', 'alert');
          statusEl.textContent = data?.error ? `${t.sendFail} (${data.error})` : t.sendFail;
        }
      }
    } catch {
      if (statusEl) {
        statusEl.className = 'form-status is-error';
        statusEl.setAttribute('role', 'alert');
        statusEl.textContent = t.sendNetErr;
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText || t.submitBtn;
    }
  });
})();
