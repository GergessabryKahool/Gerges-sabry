(() => {
  'use strict';

  const translations = {
    en: {
      pageTitle: 'Gerges Sabry — Full-Stack Software Engineer',
      navHome: 'Home',
      navAbout: 'About',
      navServices: 'Services',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navExperience: 'Experience',
      navReviews: 'Reviews',
      navContact: 'Contact',
      brandSub: 'FULL-STACK ENGINEER',
      langBtn: 'عربي',
      themeLight: 'Light',
      themeDark: 'Dark',
      availability: 'Available for Full-Stack Roles & Select Projects',
      heroGreeting: 'Hi, I am',
      heroName: 'Gerges Sabry',
      heroRole: 'Full-Stack Software Engineer — Next.js, TypeScript & PostgreSQL',
      heroLead:
        'I design and ship production-grade web applications, multi-branch ERP & POS systems, double-entry financial backends, and responsive bilingual user interfaces.',
      ctaProjects: 'Explore Featured Work',
      ctaCv: 'Download CV',
      ctaContact: 'Contact Me',
      portraitRole: 'Full-Stack Software Engineer',
      portraitLocation: 'Cairo, Egypt · ART-Vision',
      metric1Label: 'API Route Modules Shipped',
      metric2Label: 'Versioned SQL Migrations',
      metric3Label: 'Granular RBAC Permissions',
      metric4Label: 'Years Shipping Web Apps',

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
      flagshipDesc:
        'A full-stack server-backed business management system covering Retail POS, Cash Shifts, Multi-Warehouse Inventory & Transfers, Purchasing, Restaurant Kitchen Ops, Online Orders & Delivery, Customer Portal, and Double-Entry Financial Accounting (Trial Balance, P&L, Balance Sheet, AR/AP Aging, General Ledger).',
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
    },
    ar: {
      pageTitle: 'جرجس صبري — مهندس برمجيات Full-Stack',
      navHome: 'الرئيسية',
      navAbout: 'نبذة عني',
      navServices: 'الخدمات',
      navSkills: 'المهارات',
      navProjects: 'الأعمال',
      navExperience: 'الخبرات',
      navReviews: 'آراء العملاء',
      navContact: 'تواصل معي',
      brandSub: 'مهندس برمجيات FULL-STACK',
      langBtn: 'EN',
      themeLight: 'فاتح',
      themeDark: 'داكن',
      availability: 'متاح لفرص عمل Full-Stack ومشاريع مختارة',
      heroGreeting: 'أهلاً، أنا',
      heroName: 'جرجس صبري',
      heroRole: 'مهندس برمجيات Full-Stack — Next.js وTypeScript وPostgreSQL',
      heroLead:
        'أصمّم وأطوّر تطبيقات ويب إنتاجية متكاملة، وأنظمة ERP ونقاط بيع (POS) متعددة الفروع، ومحركات محاسبة مالية بالقيد المزدوج، وواجهات حديثة متجاوبة بالعربية والإنجليزية.',
      ctaProjects: 'استعرض أبرز الأعمال',
      ctaCv: 'تحميل السيرة الذاتية CV',
      ctaContact: 'تواصل معي',
      portraitRole: 'مهندس برمجيات Full-Stack',
      portraitLocation: 'القاهرة، مصر · ART-Vision',
      metric1Label: 'وحدة API إنتاجية',
      metric2Label: 'ترحيل قاعدة بيانات SQL',
      metric3Label: 'صلاحية دقيقة (RBAC)',
      metric4Label: 'سنوات خبرة تطوير ويب',

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
      flagshipDesc:
        'نظام إدارة أعمال متكامل مدعوم بخادم وقاعدة بيانات PostgreSQL يشمل: كاشير التجزئة، الورديات والنقدية، المخازن والتحويلات، المشتريات، المطاعم والمطبخ، طلبات الأونلاين والتوصيل، بوابة العملاء، والمحاسبة بالقيد المزدوج (ميزان المراجعة، الأرباح والخسائر، المركز المالي، أعمار الديون، ودفتر الأستاذ).',
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
    },
  };

  let currentLang = 'en';
  let currentTheme = 'dark';

  try {
    const savedLang = localStorage.getItem('gs-lang');
    if (savedLang === 'ar' || savedLang === 'en') currentLang = savedLang;
    const savedTheme = localStorage.getItem('gs-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') currentTheme = savedTheme;
  } catch {
    // ignore storage errors
  }

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
      if (key && Object.prototype.hasOwnProperty.call(t, key)) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && Object.prototype.hasOwnProperty.call(t, key)) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    const themeLabel = document.getElementById('theme-label');
    if (themeLabel) {
      themeLabel.textContent = currentTheme === 'dark' ? t.themeLight : t.themeDark;
    }
  }

  // Initialize theme and language immediately
  applyTheme(currentTheme);
  applyLang(currentLang);

  // Header Controls
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'ar' : 'en');
  });

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Sticky Header Shadow
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile Navigation Drawer
  const menuBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  function setDrawer(open) {
    if (!menuBtn || !drawer) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuBtn?.addEventListener('click', () => {
    const isOpen = drawer?.classList.contains('is-open');
    setDrawer(!isOpen);
  });

  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setDrawer(false));
  });

  // Active Navigation Section Highlighting
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href') || ''))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach(sec => observer.observe(sec));
  }

  // Portfolio Category Filter
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const projectCards = Array.from(document.querySelectorAll('.project-card'));

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';
      filterBtns.forEach(b => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        card.hidden = filter !== 'all' && cat !== filter;
      });
    });
  });

  // Accessible Lightbox Modal
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  let lastTrigger = null;

  function openLightbox(trigger) {
    if (!lightbox || !lightboxImg || !lightboxTitle || !lightboxDesc) return;
    lastTrigger = trigger;
    const card = trigger.closest('.project-card');
    const src = trigger.getAttribute('data-preview-src') || '';
    const titleEl = card?.querySelector('h3');
    const descEl = card?.querySelector('p');
    lightboxImg.src = src;
    lightboxImg.alt = titleEl?.textContent || 'Project Preview';
    lightboxTitle.textContent = titleEl?.textContent || '';
    lightboxDesc.textContent = descEl?.textContent || '';
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
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
    lastTrigger = null;
  }

  document.querySelectorAll('[data-preview-src]').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(btn));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (lightbox?.classList.contains('is-open')) closeLightbox();
      if (drawer?.classList.contains('is-open')) setDrawer(false);
    }
  });

  // Single, Bug-Free Formspree Contact Form Handler
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
      if (typeof subject === 'string' && subject.trim()) {
        formData.set('_subject', subject.trim());
      }
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
