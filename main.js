// ============================================
// SARV ACADEMY - MAIN APPLICATION
// Bilingual (English & Persian) Tutoring Academy
// ============================================

// Comprehensive translation object with full English & Persian (Nastalig) text
const translations = {
  en: {
    // Navigation
    navSubjects: "Subjects",
    navPricing: "Pricing",
    navHow: "How It Works",
    navAbout: "About",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navContact: "Contact",
    navCta: "Book Free Consultation",

    // Hero Section
    heroEyebrow: "Halifax, Nova Scotia · English & Persian",
    heroTitle: "Strong foundations.<br>Confident learners.",
    heroLead: "One-on-one and small-group tutoring in math, physics, and everyday schoolwork — taught in English and Persian, for newcomer and Canadian families building their next chapter in Halifax.",
    heroBtnPrimary: "Book a Free Consultation",
    heroBtnGhost: "Contact Us",
    heroTrust1: "Bilingual instruction",
    heroTrust2: "In-person & online",
    heroTrust3: "Individual learning plans",
    archBadgeSmall: "Every subject, one layer at a time",
    archBadgeMain: "Built on a strong foundation",

    // Why Choose Us
    whyEyebrow: "Why families choose us",
    whyTitle: "Tutoring built around your child, not a script",
    whyLead: "Every student learns differently — especially students navigating a new school system in a new language. We start by understanding how your child thinks, then build a plan around it.",
    why1Title: "Personalized, one-on-one tutoring",
    why1Body: "Sessions shaped around your child's pace, goals, and the way they actually understand new ideas.",
    why2Title: "An experienced, hands-on educator",
    why2Body: "Advanced training in mathematics and engineering, paired with real-world teaching experience and personalized guidance.",
    why3Title: "Truly bilingual support",
    why3Body: "Explanations delivered in English and Persian — so no concept is lost in translation.",
    why4Title: "Flexible scheduling",
    why4Body: "Sessions during the week, evenings, and weekends — in-person in Halifax or online from anywhere.",
    why5Title: "Individual learning plan",
    why5Body: "Every student starts with an assessment so session time is spent on real gaps, not review.",
    why6Title: "Focus on real results",
    why6Body: "Progress is tracked and shared with parents so growth in confidence and grades is visible.",

    // Subjects
    subjEyebrow: "Subjects",
    subjTitle: "Where to start",
    subjLead: "Each subject below is taught from elementary through university level. As Sarv grows, more subjects will be added.",
    mathTag: "Elementary to University",
    mathTitle: "Mathematics",
    mathDesc: "Elementary arithmetic through calculus, linear algebra, statistics, precalculus, IB, AP, and university-level and engineering mathematics.",
    physicsTag: "Middle School to University",
    physicsTitle: "Physics",
    physicsDesc: "Middle and high school physics, as well as university and engineering physics for students in technical programs.",
    hwTag: "All levels",
    hwTitle: "Homework Help",
    hwDesc: "Daily assignments, projects, exam prep, study skills, and learning strategies across all subjects.",
    pianoTag: "Coming Soon",
    pianoTitle: "Piano Lessons",
    pianoDesc: "Beginner to advanced levels, performance prep, RCM exam prep, and music theory. Join the waitlist for priority enrollment.",
    learnMore: "Learn More",
    joinWaitlist: "Join Waitlist",

    // Pricing
    priceEyebrow: "Pricing",
    priceTitle: "Clear and simple",
    priceLead: "Exact costs vary by subject and level — at your free consultation, we share the precise rate before any commitment.",
    price1Title: "Single Session",
    price1Note: "Pay per session",
    price1Sub: "No commitment required",
    price1F1: "60-minute private session",
    price1F2: "In English, Persian, or both",
    price1F3: "Ideal for exam prep or trial session",
    price2Badge: "Most Popular",
    price2Title: "Weekly Package",
    price2Note: "Best value",
    price2Sub: "Monthly payment, cancel anytime",
    price2F1: "Weekly private sessions",
    price2F2: "Includes tailored learning plan",
    price2F3: "Monthly progress report for parents",
    price3Title: "Small Group",
    price3Note: "Lower cost per person",
    price3Sub: "2–3 students at the same level",
    price3F1: "Weekly group sessions",
    price3F2: "Great for siblings or classmates",
    price3F3: "Each student's progress tracked individually",
    priceCta: "Book Free Consultation",

    // How It Works
    howEyebrow: "Process",
    howTitle: "Four steps to your child's first session",
    howLead: "No long contracts or confusion — a clear path from first message to weekly progress.",
    step1Title: "Get in touch",
    step1Body: "Send a message or fill out the form with your child's grade and main challenge.",
    step2Title: "Free consultation",
    step2Body: "We discuss your goals and assess your child's strengths and gaps — at no cost and with no obligation.",
    step3Title: "Custom plan",
    step3Body: "We design a learning plan tailored to your child's level, pace, and language preference.",
    step4Title: "Weekly tutoring",
    step4Body: "Regular sessions with progress tracking and parent updates, so you're always informed of your child's growth.",

    // Founder
    founderPhotoCaption: "Founder & Lead Tutor",
    founderEyebrow: "Meet the Founder",
    founderTitle: "Teaching rooted in engineering thinking",
    founderP1: "Sarv Academy is built on a simple belief: true understanding of a concept from the ground up matters more than memorizing steps. This approach comes directly from the founder's background in engineering and research — where every solution is only as strong as the thinking behind it.",
    founderP2: "Educated in both Iran and Canada, the founder understands firsthand what a student needs to adapt to a new school system, language, and learning style — and brings that insight to every session.",
    cred1: "M.Sc., University of Tehran",
    cred2: "M.Sc. Engineering, Western University",
    cred3: "Geotechnical Engineering",
    tl1Title: "University of Tehran",
    tl1Body: "M.Sc. in Advanced Mathematical Foundations and Engineering",
    tl2Title: "Western University, Canada",
    tl2Body: "M.Sc. in Applied Research and Analytical Thinking",
    tl3Title: "Halifax, Nova Scotia",
    tl3Body: "Teaching, mentoring, and building Sarv Academy for local families",

    // Trust & Results
    trustEyebrow: "Why families trust us",
    trustTitle: "What actually changes for your child",
    trustLead: "Grades matter, but they're a result. Here's what we actually build session by session.",
    trust1Title: "Real confidence",
    trust1Body: "When students understand *why* a method works, they stop avoiding that subject.",
    trust2Title: "Better grades",
    trust2Body: "Regular teaching closes learning gaps early, before they become exam problems.",
    trust3Title: "Stronger study habits",
    trust3Body: "Students leave every session with practical strategies for organizing their own learning.",
    trust4Title: "Personal attention",
    trust4Body: "No crowded classrooms and no waiting for others — all time is spent on your child.",
    trust5Title: "Clear communication",
    trust5Body: "Parents get regular updates on progress with no surprises on report cards.",
    trust6Title: "Critical thinking",
    trust6Body: "We teach students to reason through unfamiliar problems — a skill that goes far beyond any test.",

    // Testimonials
    testiEyebrow: "Family feedback",
    testiTitle: "What families say",
    testiLead: "Sample testimonials — will be replaced with real family stories before launch.",
    testi1Quote: "\"My daughter went from avoiding math homework to asking for more practice. The bilingual explanations made a huge difference for us as a newcomer family.\"",
    testi1Who: "Parent of Grade 7 student",
    testi1Where: "Halifax, Nova Scotia",
    testi2Quote: "\"Finally a tutor who explains *why* each formula works, not just the steps. My son's confidence in physics completely changed.\"",
    testi2Who: "Parent of Grade 11 student",
    testi2Where: "Halifax, Nova Scotia",
    testi3Quote: "\"As a first-year university student, I needed help in calculus that actually built understanding, not shortcuts. The patient, consistent sessions were genuinely helpful.\"",
    testi3Who: "First-year university student",
    testi3Where: "Halifax, Nova Scotia",

    // FAQ
    faqEyebrow: "Common questions",
    faqTitle: "Frequently asked questions",
    faqLead: "Can't find your answer? Contact us and we'll respond directly.",
    faqQ0: "Is tutoring online or in-person?",
    faqA0: "Both. We offer in-person sessions throughout Halifax and live online tutoring for families anywhere, with the same personalized approach.",
    faqQ1: "Do you teach adults and university students?",
    faqA1: "Yes. We work with elementary, middle, and high school students, as well as university students and adults returning to education.",
    faqQ2: "Can sessions be bilingual (English & Persian)?",
    faqA2: "Yes. Sessions can be entirely in English, entirely in Persian, or a mix of both — whatever works best for your child's learning.",
    faqQ3: "What grades and levels do you teach?",
    faqA3: "From elementary through university level, including IB and AP courses in math and physics.",
    faqQ4: "How long is each tutoring session?",
    faqA4: "Most sessions are 60 minutes, but shorter or longer sessions can be arranged depending on the subject and student's age.",
    faqQ5: "How much does tutoring cost?",
    faqA5: "Cost varies by subject, level, and session type (private or small group). See the Pricing section or find the exact rate at your free consultation.",
    faqQ6: "Is the first consultation really free?",
    faqA6: "Yes. The initial consultation is at no cost and with no obligation — just an opportunity to understand your child's needs.",
    faqQ7: "How is the individual learning plan created?",
    faqA7: "We do a short assessment of your child's current level, then design a plan matching their goals, pace, and language preference.",
    faqQ8: "Are you familiar with the Canadian curriculum?",
    faqA8: "Yes. We're familiar with the Nova Scotia curriculum and help newcomer families understand how it differs from their child's previous education system.",
    faqQ9: "Do you offer small group classes?",
    faqA9: "Yes. Small groups for students who prefer learning alongside a peer are available at a lower cost per session.",
    faqQ10: "How do you update me on my child's progress?",
    faqA10: "You receive regular updates after sessions, plus periodic reviews of overall progress against your goals.",
    faqQ11: "What subjects do you currently offer?",
    faqA11: "Math, physics, and general homework help; piano lessons coming soon, with more subjects added as the academy grows.",
    faqQ12: "Can I switch between online and in-person?",
    faqA12: "Yes, many families choose a mix depending on their week — just let us know in advance.",
    faqQ13: "How soon can we start?",
    faqA13: "Most students begin within a week of their free consultation, depending on availability.",
    faqQ14: "What if my child needs exam prep?",
    faqA14: "We design focused exam prep programs that include both content review and practical exam strategies.",

    // CTA
    ctaTitle: "Let's find the right plan for your child",
    ctaLead: "Book a free, no-obligation consultation so we can figure out a starting point together.",

    // Contact
    contactEyebrow: "Get in touch",
    contactTitle: "Book your free consultation",
    contactLead: "Tell us a bit about your child and what you're working on — we'll respond within one business day.",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelWhatsapp: "WhatsApp",
    labelLocation: "Location",
    locationValue: "Halifax, Nova Scotia — in-person & online",
    waLinkText: "Send a direct message",
    formName: "Parent / Student name",
    formNamePh: "Your name",
    formGrade: "Grade level",
    formGradePh: "E.g., Grade 9",
    formEmail: "Email",
    formPhone: "Phone",
    formSubject: "Subject needed",
    optMath: "Mathematics",
    optPhysics: "Physics",
    optHomework: "Homework Help",
    optPiano: "Piano (Waitlist)",
    optUnsure: "Not sure yet",
    formMessage: "Message",
    formMessagePh: "Tell us what your child needs help with and whether you prefer English, Persian, or both.",
    formSubmit: "Request Free Consultation",
    formNote: "Thank you — this is a design preview and the form is not yet live. We'll be in touch soon.",

    // Legal
    footerTagline: "Bilingual, personalized tutoring for Iranian and Canadian families in Halifax, Nova Scotia — building confident, independent learners.",
    footerQuickLinks: "Quick Links",
    footerServices: "Services",
    footerConnect: "Connect",
    footerMath: "Mathematics",
    footerPhysics: "Physics",
    footerHomework: "Homework Help",
    footerPiano: "Piano (Coming Soon)",
    footerContact: "Contact Us",
    footerCopyright: "© 2026 Sarv Academy. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms",
    waAria: "Chat with us on WhatsApp",
    legalHeading: "Terms of Service"
  },

  fa: {
    // Navigation
    navSubjects: "درس‌ها",
    navPricing: "قیمت‌ها",
    navHow: "نحوه کار",
    navAbout: "درباره ما",
    navTestimonials: "نظرات",
    navFaq: "سوالات متکرر",
    navContact: "تماس",
    navCta: "رزرو مشاوره رایگان",

    // Hero Section
    heroEyebrow: "هالیفکس، نوا اسکوتیا · انگلیسی و فارسی",
    heroTitle: "بنیادهای محکم.<br>یادگیرندگان مطمئن.",
    heroLead: "تدریس خصوصی و گروهی در ریاضی، فیزیک و درس‌های مدرسه — به انگلیسی و فارسی، برای خانواده‌های ایرانی و کانادایی در هالیفکس.",
    heroBtnPrimary: "رزرو مشاوره رایگان",
    heroBtnGhost: "تماس با ما",
    heroTrust1: "تدریس دوزبانه",
    heroTrust2: "حضوری و آنلاین",
    heroTrust3: "برنامه‌های یادگیری فردی",
    archBadgeSmall: "هر درسی، یک لایه در یک بار",
    archBadgeMain: "ساخته شده بر اساس بنیاد محکم",

    // Why Choose Us
    whyEyebrow: "چرا خانواده‌ها ما را انتخاب می‌کنند",
    whyTitle: "تدریسی طراحی‌شده برای فرزند شما، نه برای برنامه",
    whyLead: "هر دانش‌آموز متفاوت یاد می‌گیرد — به‌خصوص کسانی که سیستم آموزشی و زبان جدید را تجربه می‌کنند. ما از درک نحوه تفکر فرزند شما شروع می‌کنیم.",
    why1Title: "تدریس خصوصی فردی‌شده",
    why1Body: "جلسات متناسب با سرعت، اهداف و نحوه درک فرزند شما از ایده‌های جدید.",
    why2Title: "مدرسی با تجربه و عملی",
    why2Body: "آموزش پیشرفته در ریاضیات و مهندسی، همراه با تجربه واقعی تدریس و راهنمایی فردی.",
    why3Title: "پشتیبانی واقعاً دوزبانه",
    why3Body: "توضیحات به فارسی و انگلیسی ارائه می‌شود — تا هیچ مفهومی در ترجمه گم نشود.",
    why4Title: "برنامه‌ریزی منعطف",
    why4Body: "جلسات در روزهای هفته، عصرها و آخر هفته — حضوری در هالیفکس یا آنلاین از هر جا.",
    why5Title: "برنامه یادگیری فردی",
    why5Body: "هر دانش‌آموز با یک ارزیابی شروع می‌کند تا زمان جلسات صرف رفع خلأهای واقعی شود.",
    why6Title: "تمرکز بر نتیجه واقعی",
    why6Body: "پیشرفت پیگیری و با والدین به اشتراک گذاشته می‌شود تا رشد اعتماد به نفس و نمرات مشخص باشد.",

    // Subjects
    subjEyebrow: "درس‌ها",
    subjTitle: "از کجا شروع کنیم",
    subjLead: "هر یک از درس‌های زیر از مقطع ابتدایی تا دانشگاه تدریس می‌شود و با رشد آکادمی، درس‌های بیشتری اضافه خواهد شد.",
    mathTag: "ابتدایی تا دانشگاه",
    mathTitle: "ریاضی",
    mathDesc: "ریاضی ابتدایی تا حسابان، جبر خطی، آمار، پیش‌دانشگاهی، IB، AP و ریاضیات دانشگاهی و مهندسی.",
    physicsTag: "متوسطه تا دانشگاه",
    physicsTitle: "فیزیک",
    physicsDesc: "فیزیک دوره متوسطه و دبیرستان، همچنین فیزیک دانشگاهی و مهندسی برای دانشجویان رشته‌های فنی.",
    hwTag: "همه مقاطع",
    hwTitle: "کمک به تکالیف",
    hwDesc: "تکالیف روزانه، پروژه‌ها، آمادگی برای امتحانات، مهارت‌های مطالعه و راهبردهای یادگیری در همه درس‌ها.",
    pianoTag: "به‌زودی",
    pianoTitle: "کلاس‌های پیانو",
    pianoDesc: "از سطح مبتدی تا پیشرفته، آمادگی برای اجرا، آزمون‌های RCM و تئوری موسیقی. برای اولویت ثبت‌نام، به لیست انتظار بپیوندید.",
    learnMore: "بیشتر بدانید",
    joinWaitlist: "پیوستن به لیست انتظار",

    // Pricing
    priceEyebrow: "هزینه‌ها",
    priceTitle: "شفاف و ساده",
    priceLead: "هزینه دقیق بسته به درس و سطح متفاوت است — در مشاوره رایگان شما، قبل از هر تعهدی، هزینه دقیق را اعلام می‌کنیم.",
    price1Title: "جلسه تکی",
    price1Note: "پرداخت جلسه‌ای",
    price1Sub: "بدون نیاز به تعهد",
    price1F1: "جلسه ۶۰ دقیقه‌ای خصوصی",
    price1F2: "به انگلیسی، فارسی یا هر دو",
    price1F3: "مناسب آمادگی امتحان یا جلسه آزمایشی",
    price2Badge: "محبوب‌ترین",
    price2Title: "بسته هفتگی",
    price2Note: "بهترین ارزش",
    price2Sub: "پرداخت ماهانه، قابل لغو در هر زمان",
    price2F1: "جلسات خصوصی هفتگی",
    price2F2: "شامل برنامه یادگیری اختصاصی",
    price2F3: "گزارش پیشرفت ماهانه برای والدین",
    price3Title: "گروه کوچک",
    price3Note: "هزینه کمتر برای هر نفر",
    price3Sub: "۲ تا ۳ دانش‌آموز هم‌سطح",
    price3F1: "جلسات هفتگی مشترک",
    price3F2: "مناسب خواهر و برادر یا هم‌کلاسی‌ها",
    price3F3: "پیشرفت هر نفر جداگانه پیگیری می‌شود",
    priceCta: "رزرو مشاوره رایگان",

    // How It Works
    howEyebrow: "روند کار",
    howTitle: "چهار قدم تا اولین جلسه فرزند شما",
    howLead: "بدون قرارداد طولانی یا ابهام — مسیری روشن از اولین پیام تا پیشرفت هفتگی.",
    step1Title: "تماس با ما",
    step1Body: "پیامی بفرستید یا فرم را با مقطع تحصیلی فرزندتان و مشکل اصلی او پر کنید.",
    step2Title: "مشاوره رایگان",
    step2Body: "درباره اهداف شما صحبت می‌کنیم و نقاط قوت و ضعف فرزندتان را ارزیابی می‌کنیم — بدون هزینه و بدون تعهد.",
    step3Title: "برنامه اختصاصی",
    step3Body: "برنامه یادگیری را متناسب با سطح، سرعت و زبان مورد نظر فرزندتان طراحی می‌کنیم.",
    step4Title: "تدریس هفتگی",
    step4Body: "جلسات منظم با پیگیری و گزارش پیشرفت، تا همیشه از وضعیت فرزندتان مطلع باشید.",

    // Founder
    founderPhotoCaption: "بنیان‌گذار و مدرس اصلی",
    founderEyebrow: "با بنیان‌گذار آشنا شوید",
    founderTitle: "آموزشی بر پایه تفکر مهندسی",
    founderP1: "آکادمی سرو بر یک باور ساده بنا شده: درک درست یک مفهوم از ریشه، مهم‌تر از حفظ کردن مراحل آن است. این رویکرد مستقیماً از پیشینه بنیان‌گذار در مهندسی و پژوهش می‌آید — جایی که هر راه‌حل به اندازه استدلال پشت آن قوی است.",
    founderP2: "بنیان‌گذار که در ایران و کانادا تحصیل کرده، به‌خوبی می‌داند دانش‌آموز برای سازگاری با یک سیستم آموزشی، زبان و شیوه یادگیری جدید چه چیزی نیاز دارد — و همین درک را در هر جلسه به کار می‌گیرد.",
    cred1: "کارشناسی ارشد، دانشگاه تهران",
    cred2: "کارشناسی ارشد مهندسی، دانشگاه وسترن",
    cred3: "مهندسی ژئوتکنیک",
    tl1Title: "دانشگاه تهران",
    tl1Body: "کارشناسی ارشد، پایه‌های پیشرفته ریاضی و مهندسی",
    tl2Title: "دانشگاه وسترن، کانادا",
    tl2Body: "کارشناسی ارشد، پژوهش کاربردی و تفکر تحلیلی",
    tl3Title: "هالیفکس، نوا اسکوشا",
    tl3Body: "تدریس، راهنمایی و ساخت آکادمی سرو برای خانواده‌های محلی",

    // Trust & Results
    trustEyebrow: "چرا والدین به ما اعتماد می‌کنند",
    trustTitle: "چه چیزی برای فرزند شما تغییر می‌کند",
    trustLead: "نمرات مهم‌اند، اما نتیجه‌اند. این‌ها چیزهایی است که واقعاً جلسه به جلسه می‌سازیم.",
    trust1Title: "اعتماد به نفس واقعی",
    trust1Body: "دانش‌آموزان وقتی دلیل درستی یک روش را بفهمند، دیگر از آن درس فرار نمی‌کنند.",
    trust2Title: "نمرات بهتر",
    trust2Body: "تدریس منظم خلأهای یادگیری را زود رفع می‌کند، پیش از آنکه در زمان امتحان مشکل‌ساز شوند.",
    trust3Title: "عادات مطالعه قوی‌تر",
    trust3Body: "دانش‌آموزان از هر جلسه با راهبردهای عملی برای سازمان‌دهی یادگیری خود بیرون می‌آیند.",
    trust4Title: "توجه فردی",
    trust4Body: "بدون کلاس شلوغ و بدون انتظار برای بقیه کلاس — تمام وقت صرف فرزند شماست.",
    trust5Title: "ارتباط شفاف",
    trust5Body: "والدین به‌طور منظم از پیشرفت مطلع می‌شوند، بدون هیچ غافلگیری در کارنامه.",
    trust6Title: "تفکر انتقادی",
    trust6Body: "به دانش‌آموزان یاد می‌دهیم با مسائل ناآشنا استدلال کنند، مهارتی فراتر از هر امتحان.",

    // Testimonials
    testiEyebrow: "نظرات خانواده‌ها",
    testiTitle: "خانواده‌ها چه می‌گویند",
    testiLead: "نظرات نمونه — پیش از راه‌اندازی با تجربه‌های واقعی خانواده‌ها جایگزین خواهد شد.",
    testi1Quote: "«دخترم از فرار کردن از تکلیف ریاضی به درخواست تمرین بیشتر رسید. توضیحات دوزبانه برای ما به‌عنوان یک خانواده تازه‌وارد فرق بزرگی ایجاد کرد.»",
    testi1Who: "والد دانش‌آموز پایه هفتم",
    testi1Where: "هالیفکس، نوا اسکوشا",
    testi2Quote: "«بالاخره معلمی که دلیل هر فرمول را توضیح می‌دهد، نه فقط مراحل آن. اعتماد به نفس پسرم در فیزیک کاملاً تغییر کرد.»",
    testi2Who: "والد دانش‌آموز پایه یازدهم",
    testi2Where: "هالیفکس، نوا اسکوشا",
    testi3Quote: "«به‌عنوان دانشجو، به کمکی در حسابان نیاز داشتم که واقعاً درک ایجاد کند، نه میان‌بر. جلسات صبورانه، منظم و واقعاً مفید بود.»",
    testi3Who: "دانشجوی سال اول دانشگاه",
    testi3Where: "هالیفکس، نوا اسکوشا",

    // FAQ
    faqEyebrow: "سوالات متداول",
    faqTitle: "سوالات پرتکرار",
    faqLead: "پاسخ خود را پیدا نکردید؟ با ما تماس بگیرید تا مستقیم پاسخ دهیم.",
    faqQ0: "آموزش آنلاین است یا حضوری؟",
    faqA0: "هر دو. جلسات حضوری در سراسر هالیفکس و همچنین تدریس آنلاین زنده برای خانواده‌ها در هر نقطه ارائه می‌شود، با همان رویکرد شخصی‌سازی‌شده.",
    faqQ1: "آیا به بزرگسالان و دانشجویان دانشگاه هم آموزش می‌دهید؟",
    faqA1: "بله. با دانش‌آموزان ابتدایی، متوسطه و دبیرستان، و همچنین دانشجویان و بزرگسالانی که به تحصیل بازگشته‌اند کار می‌کنیم.",
    faqQ2: "آیا جلسات می‌توانند دوزبانه (فارسی و انگلیسی) باشند؟",
    faqA2: "بله. جلسات می‌توانند کاملاً به انگلیسی، کاملاً به فارسی یا ترکیبی از هر دو باشند، بسته به آنچه برای یادگیری فرزند شما بهتر است.",
    faqQ3: "چه مقاطع و سطوحی را آموزش می‌دهید؟",
    faqA3: "از مقطع ابتدایی تا سطح دانشگاه، از جمله دوره‌های IB و AP در ریاضی و فیزیک.",
    faqQ4: "هر جلسه تدریس چقدر طول می‌کشد؟",
    faqA4: "بیشتر جلسات ۶۰ دقیقه است، اما بسته به درس و سن دانش‌آموز، جلسات کوتاه‌تر یا طولانی‌تر نیز قابل تنظیم است.",
    faqQ5: "هزینه تدریس چقدر است؟",
    faqA5: "هزینه بسته به درس، سطح و نوع جلسه (خصوصی یا گروه کوچک) متفاوت است. بخش «هزینه‌ها» را ببینید یا در مشاوره رایگان قیمت دقیق را اعلام می‌کنیم.",
    faqQ6: "آیا مشاوره اول واقعاً رایگان است؟",
    faqA6: "بله. مشاوره اولیه بدون هیچ هزینه و تعهدی است — فقط فرصتی برای شناخت نیازهای فرزند شماست.",
    faqQ7: "برنامه یادگیری فردی چگونه ساخته می‌شود؟",
    faqA7: "با یک ارزیابی کوتاه سطح فعلی فرزندتان را می‌سنجیم، سپس برنامه‌ای متناسب با اهداف، سرعت و زبان مورد نظر او طراحی می‌کنیم.",
    faqQ8: "آیا با برنامه درسی کانادا آشنایی دارید؟",
    faqA8: "بله. با برنامه درسی نوا اسکوشا آشنا هستیم و به خانواده‌های تازه‌وارد کمک می‌کنیم تفاوت آن را با نظام آموزشی قبلی فرزندشان درک کنند.",
    faqQ9: "آیا کلاس گروهی کوچک هم دارید؟",
    faqA9: "بله. گروه‌های کوچک برای دانش‌آموزانی که ترجیح می‌دهند همراه یک هم‌سطح یاد بگیرند با هزینه کمتر در هر جلسه ارائه می‌شود.",
    faqQ10: "پیشرفت فرزندم را چگونه به من اطلاع می‌دهید؟",
    faqA10: "پس از جلسات به‌طور منظم گزارش دریافت می‌کنید، همراه با بررسی دوره‌ای پیشرفت کلی نسبت به اهداف تعیین‌شده.",
    faqQ11: "در حال حاضر چه دروسی ارائه می‌دهید؟",
    faqA11: "ریاضی، فیزیک و کمک به تکالیف عمومی؛ کلاس‌های پیانو به‌زودی آغاز می‌شود و با رشد آکادمی، درس‌های بیشتری اضافه خواهد شد.",
    faqQ12: "آیا می‌توانم بین آنلاین و حضوری جابه‌جا شوم؟",
    faqA12: "بله، بسیاری از خانواده‌ها بسته به هفته خود ترکیبی از هر دو را انتخاب می‌کنند — فقط از قبل به ما اطلاع دهید.",
    faqQ13: "چقدر زود می‌توانیم شروع کنیم؟",
    faqA13: "بیشتر دانش‌آموزان ظرف یک هفته پس از مشاوره رایگان، بسته به زمان‌بندی موجود، شروع می‌کنند.",
    faqQ14: "اگر فرزندم به آمادگی امتحان نیاز داشته باشد چه؟",
    faqA14: "برنامه‌های متمرکز آمادگی امتحان طراحی می‌کنیم که هم مرور محتوا و هم راهبردهای عملی امتحان را شامل می‌شود.",

    // CTA
    ctaTitle: "بیایید برنامه مناسب فرزند شما را پیدا کنیم",
    ctaLead: "یک مشاوره رایگان و بدون تعهد رزرو کنید تا با هم نقطه شروع را تعیین کنیم.",

    // Contact
    contactEyebrow: "در تماس باشید",
    contactTitle: "مشاوره رایگان خود را رزرو کنید",
    contactLead: "کمی درباره فرزندتان و آنچه روی آن کار می‌کند به ما بگویید — ظرف یک روز کاری پاسخ می‌دهیم.",
    labelEmail: "ایمیل",
    labelPhone: "تلفن",
    labelWhatsapp: "واتس‌اپ",
    labelLocation: "موقعیت",
    locationValue: "هالیفکس، نوا اسکوشا — حضوری و آنلاین",
    waLinkText: "پیام مستقیم بفرستید",
    formName: "نام والد / دانش‌آموز",
    formNamePh: "نام شما",
    formGrade: "مقطع تحصیلی",
    formGradePh: "مثلاً پایه نهم",
    formEmail: "ایمیل",
    formPhone: "تلفن",
    formSubject: "درس مورد نظر",
    optMath: "ریاضی",
    optPhysics: "فیزیک",
    optHomework: "کمک به تکالیف",
    optPiano: "پیانو (لیست انتظار)",
    optUnsure: "هنوز مطمئن نیستم",
    formMessage: "پیام",
    formMessagePh: "بگویید فرزندتان به چه کمکی نیاز دارد و آیا انگلیسی، فارسی یا هر دو را ترجیح می‌دهید.",
    formSubmit: "درخواست مشاوره رایگان",
    formNote: "متشکریم — این یک پیش‌نمایش طراحی است و فرم هنوز فعال نیست. به‌زودی با شما در تماس خواهیم بود.",

    // Legal
    footerTagline: "تدریس دوزبانه و فردی برای خانواده‌های ایرانی و کانادایی در هالیفکس، نوا اسکوشا — پرورش یادگیرندگان مطمئن و مستقل.",
    footerQuickLinks: "پیوندهای سریع",
    footerServices: "خدمات",
    footerConnect: "ارتباط",
    footerMath: "ریاضی",
    footerPhysics: "فیزیک",
    footerHomework: "کمک درسی",
    footerPiano: "پیانو (به زودی)",
    footerContact: "تماس با ما",
    footerCopyright: "© 2026 Sarv Academy. تمام حقوق محفوظ است.",
    footerPrivacy: "حریم خصوصی",
    footerTerms: "شرایط",
    waAria: "با ما از طریق WhatsApp چت کنید",
    legalHeading: "شرایط خدمات"
  }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

function getCurrentLanguage() {
  const saved = localStorage.getItem('sarvLang');
  return saved || 'en';
}

function setLanguage(lang) {
  localStorage.setItem('sarvLang', lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'fa' ? 'rtl' : 'ltr';
  
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  applyTranslations(lang);
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function applyTranslations(lang) {
  const strings = translations[lang] || translations.en;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key]) {
      el.textContent = strings[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (strings[key]) {
      el.innerHTML = strings[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (strings[key]) {
      el.setAttribute('aria-label', strings[key]);
    }
  });
  
  // Merge page-specific translations if available
  if (window.PAGE_I18N && window.PAGE_I18N[lang]) {
    const pageStrings = window.PAGE_I18N[lang];
    Object.keys(pageStrings).forEach(key => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
        el.textContent = pageStrings[key];
      });
      document.querySelectorAll(`[data-i18n-html="${key}"]`).forEach(el => {
        el.innerHTML = pageStrings[key];
      });
    });
  }
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobilePanel = document.getElementById('mobilePanel');
  
  if (!menuBtn || !mobilePanel) return;
  
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isOpen);
    mobilePanel.classList.toggle('open', !isOpen);
  });
  
  mobilePanel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      mobilePanel.classList.remove('open');
    });
  });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ============================================
// FAQ BUILDER
// ============================================

function buildFaqList(containerId, faqItems) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const faqList = document.createElement('div');
  faqList.className = 'faq-list';
  
  faqItems.forEach((item, index) => {
    if (!item[0] || !item[1]) return;
    
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item reveal';
    
    faqItem.innerHTML = `
      <button class="faq-trigger" aria-expanded="false" aria-controls="faqAnswer${index}">
        <span>${item[0]}</span>
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <div id="faqAnswer${index}" class="faq-answer" hidden>
        <p>${item[1]}</p>
      </div>
    `;
    
    const trigger = faqItem.querySelector('.faq-trigger');
    const answer = faqItem.querySelector('.faq-answer');
    
    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isOpen);
      answer.hidden = isOpen;
    });
    
    faqList.appendChild(faqItem);
  });
  
  container.appendChild(faqList);
}

// ============================================
// WHATSAPP LINK
// ============================================

function initWhatsAppLink() {
  const waLink = document.querySelector('.js-whatsapp-link');
  if (waLink) {
    waLink.href = 'https://wa.me/19025550173?text=Hi%20Sarv%20Academy';
  }
}

// ============================================
// INITIALIZATION
// ============================================

function initSarvSite() {
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
  
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
  
  initMobileMenu();
  initScrollReveal();
  initWhatsAppLink();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSarvSite);
} else {
  initSarvSite();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initSarvSite, setLanguage, getCurrentLanguage, buildFaqList };
}
