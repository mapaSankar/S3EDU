/**
 * S3EDU - Core Application Engine with Foreign Languages and AI Study Coach
 */

// Categorized Curriculums & Goal Competencies
const CATEGORIES_DATA = {
  technology: {
    name: "Technology",
    icon: "💻",
    goals: {
      webdev: {
        title: "Full-Stack Web Developer",
        icon: "🌐",
        desc: "Design responsive frontends and engineer reliable backend microservices.",
        skills: [
          { name: "Frontend Foundations", desc: "HTML5, CSS3, Flexbox/Grid, and Responsive layouts." },
          { name: "JavaScript & DOM Architecture", desc: "ES6+, Async/Await, Fetch API, and state patterns." },
          { name: "Frontend Framework (React)", desc: "Components, Props/State, Hooks, Context, and Routing." },
          { name: "Backend APIs & Microservices", desc: "Node.js, Express.js, RESTful endpoints, and JWT authentication." },
          { name: "Databases & Deployment", desc: "PostgreSQL, MongoDB, Docker containerization, and cloud hosting." }
        ],
        tutorials: [
          { id: "tech_tut1", title: "Modern JavaScript & Async Patterns", desc: "Master asynchronous code and event loops with real examples.", link: "https://javascript.info" },
          { id: "tech_tut2", title: "React Fundamentals & State Architecture", desc: "Build declarative user interfaces with React hooks.", link: "https://react.dev" },
          { id: "tech_tut3", title: "Building REST APIs with Express & Node", desc: "Handle routing, middleware, controllers, and tokens.", link: "https://expressjs.com" }
        ],
        exercises: [
          { id: "tech_ex1", title: "Interactive Task Board with LocalStorage", desc: "Build a persistent kanban card manager in vanilla JS." },
          { id: "tech_ex2", title: "Live Product Filter & Search Bar", desc: "Implement debounced search queries and multi-tag filtering." },
          { id: "tech_ex3", title: "Secure User Auth & JWT Middleware", desc: "Implement bcrypt password hashing and token verification." }
        ],
        projects: [
          { id: "tech_proj1", title: "Personal Portfolio & Headless Blog", desc: "Build and deploy a responsive portfolio with dynamic markdown content." },
          { id: "tech_proj2", title: "Full-Stack Collaborative Workspace App", desc: "Create a real-time team collaboration platform with database persistence." }
        ]
      },
      ai: {
        title: "AI & Data Scientist",
        icon: "🤖",
        desc: "Extract insights from raw datasets, train ML algorithms, and deploy modern AI solutions.",
        skills: [
          { name: "Python for Data Science", desc: "NumPy, Pandas, vectorized data wrangling, and cleaning." },
          { name: "Exploratory Data Analysis", desc: "Statistical inferences, hypothesis testing, and Seaborn visualization." },
          { name: "Machine Learning Models", desc: "Scikit-Learn, Regression, Decision Trees, and Clustering." },
          { name: "Deep Learning Foundations", desc: "PyTorch/TensorFlow, Neural Networks, Backprop, and Computer Vision." },
          { name: "Generative AI & LLMs", desc: "Prompt Engineering, Hugging Face pipelines, and LangChain RAG." }
        ],
        tutorials: [
          { id: "ai_tut1", title: "Data Wrangling with Pandas", desc: "Clean and transform large structured datasets.", link: "https://pandas.pydata.org/docs/" },
          { id: "ai_tut2", title: "Scikit-Learn Model Pipelines", desc: "Feature scaling, cross-validation, and hyperparameter tuning.", link: "https://scikit-learn.org" },
          { id: "ai_tut3", title: "LangChain & Vector Databases", desc: "Build question-answering systems using local and hosted LLMs.", link: "https://python.langchain.com" }
        ],
        exercises: [
          { id: "ai_ex1", title: "Housing Price Prediction Model", desc: "Train linear regression and evaluate with RMSE & R2 metrics." },
          { id: "ai_ex2", title: "Customer Churn Classifier", desc: "Build and evaluate a Random Forest with ROC-AUC analysis." },
          { id: "ai_ex3", title: "Document Summarizer with HuggingFace", desc: "Summarize text articles using open-source pre-trained transformers." }
        ],
        projects: [
          { id: "ai_proj1", title: "End-to-End Stock Market Trend Analyzer", desc: "Predict stock volatility and plot technical indicators." },
          { id: "ai_proj2", title: "Private Document Q&A Knowledge Assistant", desc: "RAG application that answers questions based on uploaded PDFs." }
        ]
      },
      cloud: {
        title: "DevOps & Cloud Engineer",
        icon: "☁",
        desc: "Automate build, deployment, continuous integration, and cloud infrastructure.",
        skills: [
          { name: "Linux & Shell Scripting", desc: "Bash commands, file security, systemd, and cron automation." },
          { name: "Containerization (Docker)", desc: "Dockerfiles, multi-stage builds, and Docker Compose orchestration." },
          { name: "Kubernetes & Clusters", desc: "Deployments, Pods, Services, and Ingress controllers." },
          { name: "CI/CD Workflows", desc: "Automated test and deployment pipelines with GitHub Actions." },
          { name: "Infrastructure as Code", desc: "Terraform configurations for AWS/Cloud resource provisioning." }
        ],
        tutorials: [
          { id: "cld_tut1", title: "Linux SysAdmin Primer", desc: "Core commands, process management, and SSH hardening.", link: "https://linuxjourney.com" },
          { id: "cld_tut2", title: "Docker Container Mastery", desc: "Creating secure, small-footprint production containers.", link: "https://docs.docker.com" },
          { id: "cld_tut3", title: "Automated CI/CD with GitHub Actions", desc: "Automate builds and continuous deployment on push.", link: "https://docs.github.com/actions" }
        ],
        exercises: [
          { id: "cld_ex1", title: "Multi-Service Compose Stack", desc: "Link a web app, redis cache, and postgres DB in one compose file." },
          { id: "cld_ex2", title: "Kubernetes Rolling Deployment", desc: "Deploy a resilient app on Minikube with health probes." },
          { id: "cld_ex3", title: "Terraform Cloud Resource Script", desc: "Provision and teardown an AWS S3 bucket and VPC with code." }
        ],
        projects: [
          { id: "cld_proj1", title: "Zero-Downtime Microservices Pipeline", desc: "End-to-end automated deployment pipeline for microservice backends." },
          { id: "cld_proj2", title: "Cloud Metrics & Prometheus Alerting", desc: "Configure monitoring dashboards with automated alerts." }
        ]
      }
    }
  },

  languages: {
    name: "Foreign Languages",
    icon: "🌍",
    goals: {
      japanese: {
        title: "Professional Japanese & JLPT Fluency",
        icon: "🗾",
        desc: "Master Japanese from Hiragana/Katakana to JLPT N3/N2 business communication and Keigo.",
        skills: [
          { name: "Writing Scripts & Phonetics", desc: "Mastering Hiragana, Katakana, and basic pronunciation pitch accent rules." },
          { name: "Grammar & Essential Kanji (N5-N4)", desc: "Particles (は/が/を/に), verb conjugations (Te-form, potential), and 300+ core Kanji." },
          { name: "Intermediate Comprehension (N3)", desc: "Complex sentence clauses, relative phrases, reading native articles, and listening." },
          { name: "Business Japanese & Keigo", desc: "Sonkeigo (respectful), Kenjougo (humble), and corporate email/meeting etiquette." },
          { name: "Immersive Fluency & Translation", desc: "Shadowing native audio, translating texts, and conversational mock interviews." }
        ],
        tutorials: [
          { id: "lang_jp_tut1", title: "Tae Kim's Guide to Japanese Grammar", desc: "A comprehensive, logical breakdown of fundamental and intermediate Japanese grammar.", link: "https://guidetojapanese.org" },
          { id: "lang_jp_tut2", title: "WaniKani Kanji Spaced Repetition", desc: "Learn Kanji through mnemonics and scientific SRS intervals.", link: "https://www.wanikani.com" },
          { id: "lang_jp_tut3", title: "NHK News Web Easy Reading Practice", desc: "Read real Japanese current events simplified with furigana.", link: "https://www3.nhk.or.jp/news/easy/" }
        ],
        exercises: [
          { id: "lang_jp_ex1", title: "Daily 20-Kanji Recall & Stroke Quiz", desc: "Write radicals, On'yomi, and Kun'yomi readings from memory." },
          { id: "lang_jp_ex2", title: "Audio Shadowing Drill (15 mins)", desc: "Repeat native podcast audio simultaneously with only a 0.5s delay." },
          { id: "lang_jp_ex3", title: "Business Email Conversion Exercise", desc: "Rewrite 5 standard casual requests into formal Sonkeigo and Kenjougo." }
        ],
        projects: [
          { id: "lang_jp_proj1", title: "Bilingual Presentation & Cultural Guide", desc: "Record a 5-minute spoken presentation in Japanese describing your hometown or technical project." },
          { id: "lang_jp_proj2", title: "Authentic Media Subtitling & Translation", desc: "Translate and subtitle a 10-minute Japanese interview or tech lecture with localized cultural notes." }
        ]
      },
      german: {
        title: "German for Tech & European Careers",
        icon: "🇩🇪",
        desc: "Build professional German fluency from A1 foundations to Goethe B2/C1 workplace proficiency.",
        skills: [
          { name: "A1-A2 Grammar Foundations", desc: "Noun genders (der/die/das), plural forms, word order, and basic conversational tenses." },
          { name: "Four German Cases Mastery", desc: "Nominative, Accusative, Dative, and Genitive declensions with prepositions." },
          { name: "Intermediate B1 Workplace Fluency", desc: "Subordinate clauses (weil, dass, obwohl), passive voice, and Konjunktiv II." },
          { name: "Advanced Professional German (B2)", desc: "Technical vocabulary, negotiation skills, official correspondence, and debate." },
          { name: "Goethe-Zertifikat Exam Prep", desc: "Timed reading comprehension, structured essay writing, and oral defense." }
        ],
        tutorials: [
          { id: "lang_de_tut1", title: "Deutsche Welle Nicos Weg Course", desc: "Interactive video-based story course spanning levels A1 through B1.", link: "https://learngerman.dw.com" },
          { id: "lang_de_tut2", title: "German Grammar Explanations (Lingolia)", desc: "Deep dive into adjective endings, case declensions, and modal verbs.", link: "https://deutsch.lingolia.com" },
          { id: "lang_de_tut3", title: "Slow German Podcasts with Annik Rubens", desc: "Clear conversational audio covering German history, lifestyle, and culture.", link: "https://slowgerman.com" }
        ],
        exercises: [
          { id: "lang_de_ex1", title: "Case Declension Matrix Challenge", desc: "Fill in 25 blanks requiring correct adjective and article case endings." },
          { id: "lang_de_ex2", title: "Konjunktiv II Hypothetical Scenarios", desc: "Draft 10 polite workplace requests using 'würde' and 'hätte/wäre'." },
          { id: "lang_de_ex3", title: "Formal Letter to German Authorities (Behörde)", desc: "Write an official inquiry regarding visa registration adhering to DIN 5008 norms." }
        ],
        projects: [
          { id: "lang_de_proj1", title: "German Tech Resume & Cover Letter Portfolio", desc: "Craft an authentic Lebenslauf and Anschreiben tailored for German enterprises." },
          { id: "lang_de_proj2", title: "Live Mock Job Interview Simulation", desc: "Record a 15-minute mock interview answering technical and behavioral questions in German." }
        ]
      },
      spanish: {
        title: "Spanish for Global Business & Translation",
        icon: "🇪🇸",
        desc: "Reach DELE B2/C1 fluency for international commerce, diplomacy, and multilingual business.",
        skills: [
          { name: "Foundational Syntax & Ser vs Estar", desc: "Gender agreements, regular/irregular verb conjugations, and preterite vs imperfect." },
          { name: "Subjunctive Mood Mastery", desc: "Present and imperfect subjunctive for expressing doubt, emotion, and hypothesis." },
          { name: "Idiomatic Latin & Peninsular Expressions", desc: "Dialectical awareness, conversational cadence, and listening comprehension." },
          { name: "Commercial & Legal Spanish", desc: "Contracts, business negotiations, market reports, and trade documentation." },
          { name: "Professional Bilingual Translation", desc: "Localization strategies, register adaptation, and conference interpretation." }
        ],
        tutorials: [
          { id: "lang_es_tut1", title: "SpanishDict Grammar & Verb Conjugator", desc: "Interactive drills for tricky verb tenses and irregular stems.", link: "https://www.spanishdict.com" },
          { id: "lang_es_tut2", title: "Radio Ambulante (NPR Latin American Stories)", desc: "Rich audio journalism from across the Spanish-speaking world with transcripts.", link: "https://radioambulante.org" },
          { id: "lang_es_tut3", title: "Instituto Cervantes DELE Exam Preparation", desc: "Official exam structure, sample papers, and assessment rubrics.", link: "https://cervantes.es" }
        ],
        exercises: [
          { id: "lang_es_ex1", title: "Por vs Para & Subjunctive Drill", desc: "Complete 30 context-based sentences requiring correct aspect selection." },
          { id: "lang_es_ex2", title: "10-Minute Rapid News Transcription", desc: "Listen to an El País audio segment and transcribe it with 95%+ accuracy." },
          { id: "lang_es_ex3", title: "B2 Argumentative Essay Drafting", desc: "Write a 350-word formal essay analyzing renewable energy trends." }
        ],
        projects: [
          { id: "lang_es_proj1", title: "Multilingual Business Proposal & Deck", desc: "Prepare a complete commercial slide deck and contract executive summary in Spanish." },
          { id: "lang_es_proj2", title: "Audio Podcast Episode Production", desc: "Record and edit a 10-minute solo or guest podcast episode discussing international news." }
        ]
      }
    }
  },

  business: {
    name: "Business & Management",
    icon: "📈",
    goals: {
      marketing: {
        title: "Digital Marketing & Growth Lead",
        icon: "🎯",
        desc: "Drive organic traffic, lead generation, social strategy, and conversion optimization.",
        skills: [
          { name: "SEO & Content Strategy", desc: "Keyword research, technical SEO audits, and content creation." },
          { name: "Performance Marketing & PPC", desc: "Google Ads, Meta Ads Manager, audience segmentation, and CAC/LTV math." },
          { name: "Analytics & Conversion (CRO)", desc: "Google Analytics 4, heatmaps, A/B testing, and landing page optimization." },
          { name: "Email Automation & CRM", desc: "HubSpot/Klaviyo drip sequences, customer lifecycle, and retention." },
          { name: "Growth Hacking & Viral Loops", desc: "Product-led growth, referral mechanisms, and viral hooks." }
        ],
        tutorials: [
          { id: "biz_tut1", title: "Complete Technical & Content SEO Guide", desc: "Audit high-ranking content and structural SEO factors.", link: "https://moz.com/beginners-guide-to-seo" },
          { id: "biz_tut2", title: "Google Analytics 4 (GA4) Certification", desc: "Set up events, funnels, and conversion tracking.", link: "https://skillshop.exceedlms.com" },
          { id: "biz_tut3", title: "High-ROI Paid Advertising Masterclass", desc: "Design campaign funnels with low acquisition costs.", link: "https://hubspot.com" }
        ],
        exercises: [
          { id: "biz_ex1", title: "Competitor Keyword Gap Analysis", desc: "Analyze three rival domains and pinpoint 10 high-value ranking keywords." },
          { id: "biz_ex2", title: "A/B Testing Landing Page Experiment", desc: "Create two headline variants and evaluate click-through conversions." },
          { id: "biz_ex3", title: "Lead Nurture Drip Sequence", desc: "Write a 5-step automated email campaign for newly onboarded leads." }
        ],
        projects: [
          { id: "biz_proj1", title: "Full Go-To-Market Growth Playbook", desc: "Develop an omni-channel acquisition and conversion strategy for a SaaS product." },
          { id: "biz_proj2", title: "Live Ad Campaign & Budget Optimizer", desc: "Run a simulated or live advertising campaign with full ROI reporting." }
        ]
      },
      product: {
        title: "Product Manager",
        icon: "🧭",
        desc: "Define product vision, align cross-functional teams, and ship impactful user experiences.",
        skills: [
          { name: "User Research & Discovery", desc: "Customer interviews, persona creation, and problem validation." },
          { name: "Roadmapping & Prioritization", desc: "RICE, MoSCoW, user journey maps, and sprint milestone planning." },
          { name: "Product Requirements (PRD)", desc: "User stories, acceptance criteria, technical specs, and wireframing." },
          { name: "Product Analytics & KPIs", desc: "Churn, retention cohorts, North Star metric, and Mixpanel tracking." },
          { name: "Agile & Cross-Team Leadership", desc: "Scrum ceremonies, backlog grooming, and stakeholder alignment." }
        ],
        tutorials: [
          { id: "pm_tut1", title: "Product Discovery and User Problem Framing", desc: "Conduct unbiased customer interviews and extract actionable pain points.", link: "https://svpg.com" },
          { id: "pm_tut2", title: "Writing Clear Product Requirement Docs", desc: "Structure PRDs that developers and designers love.", link: "https://atlassian.com" },
          { id: "pm_tut3", title: "Cohort Analysis & Retention Metrics", desc: "Measure feature adoption and customer retention over time.", link: "https://mixpanel.com" }
        ],
        exercises: [
          { id: "pm_ex1", title: "Draft a PRD for an Instant Checkout Feature", desc: "Outline user stories, edge cases, and non-functional requirements." },
          { id: "pm_ex2", title: "RICE Prioritization Matrix", desc: "Score 6 competing feature requests based on Reach, Impact, Confidence, and Effort." },
          { id: "pm_ex3", title: "User Journey & Friction Audit", desc: "Map the onboarding flow of a top mobile app and identify drop-off barriers." }
        ],
        projects: [
          { id: "pm_proj1", title: "0-to-1 Product Pitch Deck & Prototype", desc: "Create a complete product proposition with interactive Figma wireframes." },
          { id: "pm_proj2", title: "Feature Launch & Post-Mortem Analysis", desc: "Simulate a live product release including rollout strategy and KPI tracking." }
        ]
      },
      finance: {
        title: "Business & Financial Analyst",
        icon: "📊",
        desc: "Analyze company metrics, forecast revenue trajectories, and guide strategic investment.",
        skills: [
          { name: "Financial Modeling in Excel", desc: "Three-statement modeling, DCF, pivot tables, and lookup functions." },
          { name: "Business Intelligence & SQL", desc: "Querying financial data, aggregates, joins, and PowerBI dashboards." },
          { name: "Cost-Benefit & Feasibility Studies", desc: "ROI, IRR, NPV calculations, and scenario analysis." },
          { name: "Corporate Financial Reporting", desc: "Balance sheets, cash flow evaluations, and variance reporting." },
          { name: "Strategic Business Forecasting", desc: "Trend forecasting, break-even projections, and executive pitches." }
        ],
        tutorials: [
          { id: "fin_tut1", title: "Financial Modeling & Three-Statement Architecture", desc: "Connect Income Statements, Balance Sheets, and Cash Flows.", link: "https://corporatefinanceinstitute.com" },
          { id: "fin_tut2", title: "SQL for Financial & Business Analysts", desc: "Write complex joins and aggregations on transaction datasets.", link: "https://mode.com/sql-tutorial" },
          { id: "fin_tut3", title: "Interactive Dashboards with PowerBI", desc: "Visualize key operating metrics for C-level executives.", link: "https://powerbi.microsoft.com" }
        ],
        exercises: [
          { id: "fin_ex1", title: "Discounted Cash Flow (DCF) Calculation", desc: "Calculate enterprise valuation for a sample company given free cash flows." },
          { id: "fin_ex2", title: "SQL Revenue & Margin Query", desc: "Write a SQL query to identify the top 5 most profitable product categories." },
          { id: "fin_ex3", title: "Budget Variance Analysis", desc: "Analyze projected vs actual company expenditures and document variances." }
        ],
        projects: [
          { id: "fin_proj1", title: "5-Year SaaS Financial Forecast Model", desc: "Build an interactive dynamic financial model in Excel with sensitivity toggles." },
          { id: "fin_proj2", title: "Executive Business Performance Dashboard", desc: "Build an end-to-end PowerBI/Tableau dashboard analyzing company profitability." }
        ]
      }
    }
  },

  teaching: {
    name: "Teaching & Education",
    icon: "🎓",
    goals: {
      online_educator: {
        title: "Online STEM Educator & Course Creator",
        icon: "🧑‍🏫",
        desc: "Design engaging digital curricula, recorded lectures, and interactive STEM learning materials.",
        skills: [
          { name: "Instructional Design (ADDIE Framework)", desc: "Learning objectives, modular syllabus creation, and pedagogy." },
          { name: "Multimedia Course Production", desc: "Screen recording, slide animations, micro-lectures, and clear audio delivery." },
          { name: "Formative & Summative Assessments", desc: "Rubrics, quiz design, gamified evaluations, and feedback loops." },
          { name: "LMS & Educational Technology", desc: "Moodle, Canvas, Google Classroom, and interactive polling tools." },
          { name: "Student Engagement & Retention", desc: "Active learning methods, doubt resolution, and flipped classroom models." }
        ],
        tutorials: [
          { id: "teach_tut1", title: "Principles of Effective Instructional Design", desc: "Apply Bloom's Taxonomy and the ADDIE framework to lesson plans.", link: "https://instructionaldesign.org" },
          { id: "teach_tut2", title: "High-Engagement Digital Lecture Recording", desc: "Lighting, audio, and visual presentation best practices.", link: "https://edutopia.org" },
          { id: "teach_tut3", title: "Mastering Learning Management Systems (LMS)", desc: "Build structured courses on Canvas and Moodle.", link: "https://moodle.org" }
        ],
        exercises: [
          { id: "teach_ex1", title: "Draft a 4-Week Modular Course Syllabus", desc: "Design weekly outcomes, assignments, and prerequisites for a chosen subject." },
          { id: "teach_ex2", title: "Construct a Conceptual Diagnostic Quiz", desc: "Write 10 multiple-choice questions targeting common student misconceptions." },
          { id: "teach_ex3", title: "Flipped Classroom Lesson Activity", desc: "Create an active 45-minute workshop plan based on pre-recorded video prep." }
        ],
        projects: [
          { id: "teach_proj1", title: "Complete Micro-Course Video Series", desc: "Record and publish a 3-part educational video series with downloadable worksheets." },
          { id: "teach_proj2", title: "Interactive Digital Workbook & Grading Rubric", desc: "Build a comprehensive curriculum package with automated grading guides." }
        ]
      },
      trainer: {
        title: "Corporate Trainer & L&D Specialist",
        icon: "👔",
        desc: "Upskill enterprise workforces, design leadership programs, and evaluate business training ROI.",
        skills: [
          { name: "Training Needs Assessment (TNA)", desc: "Competency gap analysis, surveys, and stakeholder interviews." },
          { name: "Adult Learning Theories (Andragogy)", desc: "Experiential learning cycles, role-play workshops, and facilitation." },
          { name: "Workshop Facilitation & Presentation", desc: "Engaging delivery, breakout rooms, and executive communication." },
          { name: "Training Impact & ROI (Kirkpatrick)", desc: "Reaction, Learning, Behavior, and Results evaluation models." },
          { name: "Digital Learning Content Authoring", desc: "Articulate 360, SCORM packages, and bite-sized corporate microlearning." }
        ],
        tutorials: [
          { id: "trn_tut1", title: "Conducting a Training Needs Assessment", desc: "Discover what skills employees lack to drive company goals.", link: "https://td.org" },
          { id: "trn_tut2", title: "Adult Learning Principles in Practice", desc: "Malcolm Knowles' andragogy model for modern professionals.", link: "https://mindtools.com" },
          { id: "trn_tut3", title: "Kirkpatrick 4-Level Training Evaluation", desc: "Measure whether company training actually changed behavior and ROI.", link: "https://kirkpatrickpartners.com" }
        ],
        exercises: [
          { id: "trn_ex1", title: "Workplace Skill Gap Survey Design", desc: "Draft a 10-point assessment to determine software training requirements." },
          { id: "trn_ex2", title: "Half-Day Interactive Workshop Outline", desc: "Plan timed breakout sessions, exercises, and debrief discussions." },
          { id: "trn_ex3", title: "Level 3 Behavior Evaluation Metric", desc: "Design a 60-day post-training manager check-in template." }
        ],
        projects: [
          { id: "trn_proj1", title: "Enterprise New-Hire Onboarding Academy", desc: "Design a 2-week end-to-end onboarding curriculum for incoming team members." },
          { id: "trn_proj2", title: "Leadership Soft-Skills Masterclass", desc: "Develop an interactive presentation deck and facilitator manual on conflict resolution." }
        ]
      }
    }
  },

  design: {
    name: "Design & Creative Arts",
    icon: "🎨",
    goals: {
      uiux: {
        title: "UI/UX Product Designer",
        icon: "✨",
        desc: "Design intuitive interfaces, interactive wireframes, design systems, and user journeys.",
        skills: [
          { name: "Design Thinking & UX Research", desc: "User personas, empathy maps, journey flows, and usability audits." },
          { name: "Figma & Rapid Prototyping", desc: "Auto-layout, reusable components, interactive states, and responsive variants." },
          { name: "Design Systems & Foundations", desc: "Typography scales, color tokens, atomic design, and accessibility (WCAG)." },
          { name: "Interactive Micro-interactions", desc: "Smart animation, transitions, hover states, and gesture patterns." },
          { name: "Developer Handoff & Testing", desc: "Design specs, Figma inspect, usability testing, and prototype testing." }
        ],
        tutorials: [
          { id: "ux_tut1", title: "Figma Auto-Layout & Design Tokens", desc: "Build responsive, scalable UI components from scratch.", link: "https://figma.com/resources" },
          { id: "ux_tut2", title: "UX Research Methods & Usability Testing", desc: "Conduct heuristic evaluations and test clickable prototypes.", link: "https://nngroup.com" },
          { id: "ux_tut3", title: "Design Accessibility Standards (WCAG 2.1)", desc: "Ensure readable contrast ratios and inclusive user experiences.", link: "https://w3.org/WAI" }
        ],
        exercises: [
          { id: "ux_ex1", title: "Design a Responsive Navigation Bar & Drawer", desc: "Create a navbar that switches seamlessly from desktop to mobile." },
          { id: "ux_ex2", title: "Heuristic Audit of a Popular App", desc: "Identify 5 usability flaws using Nielsen's 10 usability heuristics." },
          { id: "ux_ex3", title: "Build an Accessible Form System", desc: "Design input fields with focused, disabled, error, and active states." }
        ],
        projects: [
          { id: "ux_proj1", title: "Complete Mobile Banking App Redesign", desc: "Conduct research, wireframing, high-fidelity UI, and clickable prototype." },
          { id: "ux_proj2", title: "Comprehensive Multi-Brand Design System", desc: "Build a full tokenized design library in Figma with buttons, modals, and typography." }
        ]
      },
      graphic: {
        title: "Brand Identity & Graphic Designer",
        icon: "✒️",
        desc: "Build memorable visual brand identities, vector illustrations, and marketing collateral.",
        skills: [
          { name: "Visual Composition & Typography", desc: "Kerning, hierarchy, grids, alignment, and color harmony theories." },
          { name: "Vector Art (Adobe Illustrator)", desc: "Pen tool mastery, logo construction grids, and scalable vector assets." },
          { name: "Photo Editing (Adobe Photoshop)", desc: "Non-destructive masking, color correction, mockups, and manipulation." },
          { name: "Brand Guidelines Architecture", desc: "Logo variations, brand books, typography rules, and usage restrictions." },
          { name: "Print & Digital Asset Preparation", desc: "CMYK/RGB color profiles, bleed marks, vector exports, and digital banners." }
        ],
        tutorials: [
          { id: "gd_tut1", title: "Vector Pen Tool & Geometric Logo Construction", desc: "Create precise, balanced vector shapes and monograms.", link: "https://helpx.adobe.com/illustrator" },
          { id: "gd_tut2", title: "Typography and Editorial Grids", desc: "Establish visual hierarchy across print and digital media.", link: "https://canva.com/learn" },
          { id: "gd_tut3", title: "Crafting Comprehensive Brand Style Guides", desc: "Assemble professional brand books for commercial clients.", link: "https://behance.net" }
        ],
        exercises: [
          { id: "gd_ex1", title: "Geometric Monogram Logo Challenge", desc: "Design a logo combining two letters inside a golden-ratio grid." },
          { id: "gd_ex2", title: "Social Media Banner Advertising Suite", desc: "Design 3 promotional banners adhering to consistent brand guidelines." },
          { id: "gd_ex3", title: "Packaging Die-Line Layout", desc: "Create a foldable product box label with bleed and trim lines." }
        ],
        projects: [
          { id: "gd_proj1", title: "Complete Coffee Brand Identity", desc: "Design logo, color palette, packaging bags, and brand guide book." },
          { id: "gd_proj2", title: "Annual Tech Conference Visual Package", desc: "Create digital posters, attendee badges, social banners, and stage backdrops." }
        ]
      }
    }
  }
};

// Application State
let appState = {
  name: "",
  level: "Beginner",
  hours: 2,
  categoryKey: "technology",
  goalKey: "webdev",
  months: 3,
  completedTasks: {},
  geminiApiKey: ""
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initDailyHoursSlider();
  renderCategoryPills();
  renderGoalSelectionCards();
  loadSavedState();

  document.getElementById("resetBtn").addEventListener("click", resetApp);
});

// START ONBOARDING FROM WELCOME PAGE
function startOnboarding() {
  document.getElementById("welcomeSection").style.display = "none";
  document.getElementById("wizardSection").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Daily study commitment slider
function initDailyHoursSlider() {
  const slider = document.getElementById("dailyHours");
  const display = document.getElementById("hoursVal");
  slider.addEventListener("input", (e) => {
    display.textContent = e.target.value;
    appState.hours = parseInt(e.target.value, 10);
  });
}

// Category Pills Renderer (Step 2)
function renderCategoryPills() {
  const container = document.getElementById("categoryTabs");
  container.innerHTML = "";

  Object.entries(CATEGORIES_DATA).forEach(([catKey, cat]) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = `cat-pill ${catKey === appState.categoryKey ? "active" : ""}`;
    pill.innerHTML = `<span>${cat.icon}</span> <span>${cat.name}</span>`;
    pill.onclick = () => selectCategory(catKey);
    container.appendChild(pill);
  });
}

function selectCategory(catKey) {
  appState.categoryKey = catKey;
  const availableGoals = Object.keys(CATEGORIES_DATA[catKey].goals);
  appState.goalKey = availableGoals[0];

  renderCategoryPills();
  renderGoalSelectionCards();
}

// Goals Card Renderer (Step 2)
function renderGoalSelectionCards() {
  const currentCategory = CATEGORIES_DATA[appState.categoryKey];
  document.getElementById("goalsHeadingLabel").textContent = `Available Goals in ${currentCategory.name}:`;

  const container = document.getElementById("goalsGrid");
  container.innerHTML = "";

  Object.entries(currentCategory.goals).forEach(([key, goal]) => {
    const card = document.createElement("div");
    card.className = `goal-card ${key === appState.goalKey ? "selected" : ""}`;
    card.onclick = () => selectGoal(key);
    card.innerHTML = `
      <div class="goal-icon">${goal.icon}</div>
      <h3>${goal.title}</h3>
      <p>${goal.desc}</p>
    `;
    container.appendChild(card);
  });
}

function selectGoal(key) {
  appState.goalKey = key;
  renderGoalSelectionCards();
}

// Wizard Step Navigation
function nextStep(stepNumber) {
  if (stepNumber === 2) {
    const nameInput = document.getElementById("userName").value.trim();
    if (!nameInput) {
      alert("Please enter your name before proceeding.");
      return;
    }
    appState.name = nameInput;
    appState.level = document.getElementById("userLevel").value;
    document.getElementById("userGreeting").textContent = `Welcome, ${appState.name}`;
  }

  if (stepNumber === 3) {
    renderSkillsOverview();
  }

  showPanel(stepNumber);
}

function prevStep(stepNumber) {
  showPanel(stepNumber);
}

function showPanel(stepNumber) {
  document.querySelectorAll(".wizard-panel").forEach((panel) => {
    panel.classList.remove("active");
  });
  document.getElementById(`step${stepNumber}`).classList.add("active");

  document.querySelectorAll(".step-node").forEach((node) => {
    const step = parseInt(node.getAttribute("data-step"), 10);
    node.classList.remove("active", "completed");
    if (step === stepNumber) {
      node.classList.add("active");
    } else if (step < stepNumber) {
      node.classList.add("completed");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Helper: Get Current Selected Goal Object
function getCurrentGoalObject() {
  const category = CATEGORIES_DATA[appState.categoryKey] || CATEGORIES_DATA.technology;
  return category.goals[appState.goalKey] || Object.values(category.goals)[0];
}

// Render Step 3 Skills
function renderSkillsOverview() {
  const currentGoal = getCurrentGoalObject();
  document.getElementById("selectedGoalName").textContent = currentGoal.title;

  const container = document.getElementById("skillsOverviewList");
  container.innerHTML = "";

  currentGoal.skills.forEach((skill, idx) => {
    const card = document.createElement("div");
    card.className = "skill-item-card";
    card.innerHTML = `
      <h4>Phase ${idx + 1}: ${skill.name}</h4>
      <p>${skill.desc}</p>
    `;
    container.appendChild(card);
  });
}

// Step 4: Generate Roadmap & Display Dashboard
function generateRoadmap() {
  const selectedDuration = document.querySelector('input[name="timelineDuration"]:checked');
  appState.months = parseInt(selectedDuration ? selectedDuration.value : "3", 10);

  saveState();
  renderDashboard();

  document.getElementById("welcomeSection").style.display = "none";
  document.getElementById("wizardSection").style.display = "none";
  document.getElementById("dashboardSection").style.display = "block";
  document.getElementById("resetBtn").style.display = "inline-flex";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render Dashboard View
function renderDashboard() {
  const currentGoal = getCurrentGoalObject();
  const currentCategory = CATEGORIES_DATA[appState.categoryKey];

  // Header Metrics
  document.getElementById("dashGoalTitle").textContent = `${currentGoal.icon} ${currentGoal.title}`;
  document.getElementById("dashCategoryBadge").textContent = currentCategory.name;
  document.getElementById("dashLevelBadge").textContent = `${appState.level} Track`;
  document.getElementById("dashTimelineText").textContent = `${appState.months} Month(s) Duration`;

  const totalHours = appState.months * 30 * appState.hours;
  document.getElementById("dashTotalHours").textContent = `~${totalHours} total study hours planned (${appState.hours}h/day)`;

  // Render Visual Timeline Schedule
  renderTimelineMilestones(currentGoal);

  // Render Learning Content (Tutorials, Exercises, Projects)
  renderWorkspaceContent(currentGoal);

  // Recalculate Progress
  updateProgressMetrics();
}

// Timeline Chart Breakdown
function renderTimelineMilestones(goal) {
  const container = document.getElementById("timelineChart");
  container.innerHTML = "";

  const totalSkills = goal.skills.length;
  const daysTotal = appState.months * 30;
  const daysPerSkill = Math.floor(daysTotal / totalSkills);

  goal.skills.forEach((skill, idx) => {
    const startDay = idx * daysPerSkill + 1;
    const endDay = (idx + 1) * daysPerSkill;

    const milestone = document.createElement("div");
    milestone.className = "timeline-milestone";
    milestone.innerHTML = `
      <span class="period-tag">Days ${startDay} - ${endDay}</span>
      <h4>${skill.name}</h4>
      <p>${skill.desc}</p>
    `;
    container.appendChild(milestone);
  });
}

// Workspace Content Tabs
function renderWorkspaceContent(goal) {
  // Tutorials
  const tutContainer = document.getElementById("tutorialsList");
  tutContainer.innerHTML = goal.tutorials.map(tut => `
    <div class="content-item ${appState.completedTasks[tut.id] ? "completed" : ""}" id="item-${tut.id}">
      <input type="checkbox" ${appState.completedTasks[tut.id] ? "checked" : ""} onchange="toggleTask('${tut.id}')" />
      <div class="item-info">
        <h4>${tut.title}</h4>
        <p>${tut.desc}</p>
        <a href="${tut.link}" target="_blank" rel="noopener">Open Tutorial / Resource &rarr;</a>
      </div>
    </div>
  `).join("");

  // Exercises
  const exContainer = document.getElementById("exercisesList");
  exContainer.innerHTML = goal.exercises.map(ex => `
    <div class="content-item ${appState.completedTasks[ex.id] ? "completed" : ""}" id="item-${ex.id}">
      <input type="checkbox" ${appState.completedTasks[ex.id] ? "checked" : ""} onchange="toggleTask('${ex.id}')" />
      <div class="item-info">
        <h4>${ex.title}</h4>
        <p>${ex.desc}</p>
      </div>
    </div>
  `).join("");

  // Projects
  const projContainer = document.getElementById("projectsList");
  projContainer.innerHTML = goal.projects.map(proj => `
    <div class="content-item ${appState.completedTasks[proj.id] ? "completed" : ""}" id="item-${proj.id}">
      <input type="checkbox" ${appState.completedTasks[proj.id] ? "checked" : ""} onchange="toggleTask('${proj.id}')" />
      <div class="item-info">
        <h4>${proj.title}</h4>
        <p>${proj.desc}</p>
      </div>
    </div>
  `).join("");
}

// Switch between workspace tabs
function switchTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

  if (tabName === "tutorials") {
    document.querySelector("button[onclick=\"switchTab('tutorials')\"]").classList.add("active");
    document.getElementById("tutorialsTab").classList.add("active");
  } else if (tabName === "exercises") {
    document.querySelector("button[onclick=\"switchTab('exercises')\"]").classList.add("active");
    document.getElementById("exercisesTab").classList.add("active");
  } else if (tabName === "projects") {
    document.querySelector("button[onclick=\"switchTab('projects')\"]").classList.add("active");
    document.getElementById("projectsTab").classList.add("active");
  }
}

// Progress Toggle & Calculation
function toggleTask(taskId) {
  if (appState.completedTasks[taskId]) {
    delete appState.completedTasks[taskId];
  } else {
    appState.completedTasks[taskId] = true;
  }

  const elem = document.getElementById(`item-${taskId}`);
  if (elem) {
    elem.classList.toggle("completed", !!appState.completedTasks[taskId]);
  }

  saveState();
  updateProgressMetrics();
}

function updateProgressMetrics() {
  const currentGoal = getCurrentGoalObject();
  const totalTasks = currentGoal.tutorials.length + currentGoal.exercises.length + currentGoal.projects.length;
  
  const currentCompleted = Object.keys(appState.completedTasks).filter(key => {
    return (
      currentGoal.tutorials.some(t => t.id === key) ||
      currentGoal.exercises.some(e => e.id === key) ||
      currentGoal.projects.some(p => p.id === key)
    );
  }).length;

  const percentage = totalTasks > 0 ? Math.round((currentCompleted / totalTasks) * 100) : 0;
  
  document.getElementById("totalProgressFill").style.width = `${percentage}%`;
  document.getElementById("progressPercentage").textContent = `${percentage}% Completed (${currentCompleted}/${totalTasks} items)`;
}

// Persistence (LocalStorage)
function saveState() {
  localStorage.setItem("s3edu_state", JSON.stringify(appState));
}

function loadSavedState() {
  const saved = localStorage.getItem("s3edu_state");
  if (saved) {
    try {
      appState = JSON.parse(saved);
      if (appState.name) {
        document.getElementById("userName").value = appState.name;
        document.getElementById("userGreeting").textContent = `Welcome, ${appState.name}`;
      }
      if (appState.hours) {
        document.getElementById("dailyHours").value = appState.hours;
        document.getElementById("hoursVal").textContent = appState.hours;
      }
      if (appState.level) {
        document.getElementById("userLevel").value = appState.level;
      }

      // If user had already generated their roadmap previously, skip to Dashboard
      document.getElementById("welcomeSection").style.display = "none";
      document.getElementById("wizardSection").style.display = "none";
      document.getElementById("dashboardSection").style.display = "block";
      document.getElementById("resetBtn").style.display = "inline-flex";
      renderDashboard();
    } catch (e) {
      console.error("Could not parse saved state:", e);
    }
  }
}

function resetApp() {
  if (confirm("Are you sure you want to reset your goal and start over?")) {
    localStorage.removeItem("s3edu_state");
    location.reload();
  }
}

/* =========================================================
   AI STUDY COACH CHAT ENGINE
   ========================================================= */

function toggleChatWindow() {
  const modal = document.getElementById("chatbotModal");
  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "flex";
    document.getElementById("chatInput").focus();
  } else {
    modal.style.display = "none";
  }
}

function sendQuickPrompt(promptText) {
  document.getElementById("chatInput").value = promptText;
  handleChatSubmit(new Event("submit"));
}

function promptApiKey() {
  const key = prompt("Enter your Google Gemini API Key (optional - leave blank to use the built-in intelligent study counselor):", appState.geminiApiKey || "");
  if (key !== null) {
    appState.geminiApiKey = key.trim();
    saveState();
    alert(appState.geminiApiKey ? "Gemini API Key saved successfully!" : "Using built-in intelligent offline study advisor.");
  }
}

async function handleChatSubmit(e) {
  e.preventDefault();
  const inputElem = document.getElementById("chatInput");
  const userText = inputElem.value.trim();
  if (!userText) return;

  appendChatMessage("user", userText);
  inputElem.value = "";

  const indicator = document.getElementById("chatTypingIndicator");
  indicator.style.display = "flex";

  const chatContainer = document.getElementById("chatMessages");
  chatContainer.scrollTop = chatContainer.scrollHeight;

  try {
    let aiResponse = "";
    if (appState.geminiApiKey) {
      aiResponse = await fetchGeminiAIResponse(userText);
    } else {
      aiResponse = await generateSmartStudyAdvice(userText);
    }
    indicator.style.display = "none";
    appendChatMessage("bot", aiResponse);
  } catch (err) {
    indicator.style.display = "none";
    appendChatMessage("bot", "I ran into an issue connecting to the AI brain. Remember: Close extra browser tabs, put your phone in another room for 25 minutes, and start with your first small 5-minute task.");
  }
}

function appendChatMessage(sender, text) {
  const chatContainer = document.getElementById("chatMessages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-msg ${sender}`;

  const avatar = sender === "bot" ? "🤖" : "👤";
  const formattedText = text.replace(/\n/g, "<br>");

  msgDiv.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-bubble">${formattedText}</div>
  `;
  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Built-in intelligent study psychologist & habit engine
function generateSmartStudyAdvice(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const q = query.toLowerCase();
      const currentGoal = getCurrentGoalObject();
      const userName = appState.name ? appState.name : "Learner";

      if (q.includes("phone") || q.includes("social media") || q.includes("instagram") || q.includes("reels") || q.includes("distract")) {
        resolve(
          `Hey ${userName}, digital dopamine loops are the #1 killer of study momentum. Here is your **3-Step Environment Protocol**:\n\n` +
          `1. **Physical Distance**: Place your smartphone in another room or inside a closed drawer before you sit down.\n` +
          `2. **Greyscale Display**: Turn your smartphone screen to black & white in Accessibility settings. It makes apps 80% less appealing.\n` +
          `3. **25-Minute Sprint**: Don't commit to studying for 4 hours. Commit to just 25 minutes of uninterrupted focus on your **${currentGoal.title}** plan.`
        );
      } else if (q.includes("vocab") || q.includes("kanji") || q.includes("words") || q.includes("memoriz") || q.includes("forget")) {
        resolve(
          `Forgetting words is completely natural, ${userName}. The human brain discards raw lists unless reinforced with **Spaced Repetition & Context**:\n\n` +
          `1. **Never Learn Isolated Words**: Learn full short sentences instead of single words (e.g., learn a complete phrase, not just one vocabulary term).\n` +
          `2. **Spaced Repetition (SRS)**: Review new words at Day 1, Day 3, Day 7, and Day 14 intervals.\n` +
          `3. **Immediate Application**: Write 3 original sentences using your 5 newest terms today!`
        );
      } else if (q.includes("procrastinat") || q.includes("lazy") || q.includes("unmotivated") || q.includes("start")) {
        resolve(
          `Procrastination is rarely about laziness, ${userName}—it's an emotional resistance to feeling overwhelmed.\n\n` +
          `Apply the **5-Minute Rule** right now:\n` +
          `• Tell yourself: "I will only sit down and open the first tutorial for exactly 5 minutes. If I still want to stop, I can stop."\n` +
          `• 90% of friction is in the start. Once you begin, cognitive inertia takes over!`
        );
      } else if (q.includes("burnout") || q.includes("stress") || q.includes("tired") || q.includes("exhaust")) {
        resolve(
          `Your brain is giving you a warning light, ${userName}. Pushing through chronic fatigue leads to fake, low-retention study.\n\n` +
          `• **Today's Action**: Step away from screens for a 20-minute walk, drink a glass of water, and rest.\n` +
          `• Remember: You planned **${appState.hours} hours/day** for ${currentGoal.title}. It is 100% fine to do just 20 focused minutes today instead of forcing hours of low-yield struggle.`
        );
      } else if (q.includes("sleep") || q.includes("night") || q.includes("morning") || q.includes("routine")) {
        resolve(
          `A broken sleep cycle directly destroys memory consolidation and language recall.\n\n` +
          `• **Hard Screen Cutoff**: No phone or laptop within 45 minutes of bed.\n` +
          `• **Anchor Wake-up**: Go to sleep and wake up at consistent hours.\n` +
          `• Tackle your most complex milestone (**${currentGoal.skills[0].name}**) during your highest-energy window.`
        );
      } else {
        resolve(
          `I hear you, ${userName}. When everyday problems interfere with your study routine, remember why you chose **${currentGoal.title}**.\n\n` +
          `1. Write down the single biggest obstacle on a piece of paper.\n` +
          `2. Pick just **ONE** micro-exercise from your dashboard workspace and complete only that.\n` +
          `3. Consistent imperfect effort beats occasional perfection every single time.`
        );
      }
    }, 700);
  });
}

// Live Gemini API Call (if API key is supplied)
async function fetchGeminiAIResponse(userText) {
  const currentGoal = getCurrentGoalObject();
  const systemPrompt = `You are the empathetic, direct, and practical AI Study and Life Coach on S3EDU. The learner is working towards becoming proficient in ${currentGoal.title}. Their planned daily study commitment is ${appState.hours} hours/day. They are struggling with a real-life problem spoiling their studies (e.g. procrastination, vocabulary memorization anxiety, phone addiction, burnout, or time management). Give a concise, supportive, and actionable 3-step solution to help them get back on track right now. Keep formatting clean with bullet points and bold text.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${appState.geminiApiKey}`;
  
  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: `${systemPrompt}\n\nLearner problem: ${userText}` }]
      }
    ]
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Failed to communicate with Gemini API");
  }

  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}