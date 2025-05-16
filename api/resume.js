export default function handler(req, res) {
    const resumes = [
        {
            id: "ivan-ivanov",
            name: "Ivan Ivanov",
            title: "Full Stack Developer",
            location: "Kyiv, Ukraine",
            email: "ivan@example.com",
            phone: "+380123456789",
            website: "https://ivan.dev",
            linkedin: "https://linkedin.com/in/ivanivanov",
            github: "https://github.com/ivanivanov",
            portfolio: "https://portfolio.ivan.dev",
            skills: {
                programming: ["JavaScript", "TypeScript", "Python"],
                frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
                backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
                devops: ["Docker", "GitHub Actions", "Vercel", "Netlify"],
                testing: ["Jest", "Cypress", "Playwright"]
            },
            experience: [
                {
                    company: "TechCorp",
                    role: "Senior Frontend Developer",
                    period: "2022 - Present",
                    description:
                        "Leading frontend team and building scalable, accessible interfaces with React.",
                    achievements: [
                        "Increased performance by 40%",
                        "Mentored 5 junior devs",
                        "Introduced CI/CD process"
                    ]
                }
            ],
            education: [
                {
                    institution: "Kyiv Polytechnic Institute",
                    degree: "B.Sc. in Computer Science",
                    period: "2016 - 2020",
                    gpa: "4.5/5.0"
                }
            ],
            certifications: [
                { name: "AWS Certified Developer", year: 2023 },
                { name: "Scrum Master Certified", year: 2021 }
            ],
            projects: [
                {
                    name: "Open Portfolio",
                    url: "https://github.com/ivanivanov/open-portfolio",
                    description: "Next.js open-source portfolio template"
                }
            ],
            languages: ["English (C1)", "Ukrainian (Native)", "German (A2)"],
            softSkills: ["Teamwork", "Problem Solving", "Communication"]
        },

        {
            id: "olena-petrova",
            name: "Olena Petrova",
            title: "UX/UI Designer",
            location: "Lviv, Ukraine",
            email: "olena@example.com",
            website: "https://olena.design",
            linkedin: "https://linkedin.com/in/olenapetrova",
            dribbble: "https://dribbble.com/olenapetrova",
            skills: {
                design: ["Figma", "Sketch", "Adobe XD", "Illustrator"],
                research: ["User Interviews", "A/B Testing"],
                tools: ["Notion", "Zeplin", "Maze"]
            },
            experience: [
                {
                    company: "DesignPro",
                    role: "UX Designer",
                    period: "2021 - Present",
                    description: "Designing interfaces, prototyping, and improving UX",
                    achievements: ["Reduced churn by 20%", "Led product redesign"]
                }
            ],
            education: [
                {
                    institution: "Lviv National Academy of Arts",
                    degree: "B.A. in Graphic Design",
                    period: "2015 - 2019"
                }
            ],
            certifications: [{ name: "Google UX Design Certificate", year: 2022 }],
            projects: [
                {
                    name: "Travel App UX Case",
                    url: "https://olena.design/case-travel-app",
                    description: "Redesign of a travel booking app"
                }
            ],
            languages: ["Ukrainian (Native)", "English (B2)"],
            softSkills: ["Empathy", "Creativity", "Attention to Detail"]
        },

        {
            id: "dmytro-vasylchuk",
            name: "Dmytro Vasylchuk",
            title: "Data Analyst",
            location: "Odesa, Ukraine",
            email: "dmytro@example.com",
            linkedin: "https://linkedin.com/in/dmytrovasylchuk",
            skills: {
                tools: ["Excel", "SQL", "Power BI", "Tableau"],
                languages: ["Python", "R"],
                libraries: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
            },
            experience: [
                {
                    company: "InsightLab",
                    role: "Junior Data Analyst",
                    period: "2021 - Present",
                    description: "Collecting and analyzing sales data for insights"
                }
            ],
            education: [
                {
                    institution: "Odesa Mechnikov University",
                    degree: "B.Sc. in Statistics",
                    period: "2016 - 2020"
                }
            ],
            certifications: [{ name: "Data Analyst with Python – DataCamp", year: 2022 }],
            projects: [
                {
                    name: "Sales Dashboard",
                    url: "",
                    description: "Power BI dashboard for monthly performance"
                }
            ],
            languages: ["Ukrainian", "English (B1)"],
            softSkills: ["Analytical Thinking", "Accuracy", "Presentation"]
        },

        {
            id: "serhii-bondarenko",
            name: "Serhii Bondarenko",
            title: "DevOps Engineer",
            location: "Dnipro, Ukraine",
            email: "serhii@example.com",
            github: "https://github.com/serhiib",
            skills: {
                devops: ["Docker", "Kubernetes", "Jenkins", "Terraform", "GitLab CI"],
                cloud: ["AWS", "GCP"],
                scripting: ["Bash", "Python"]
            },
            experience: [
                {
                    company: "CloudNet",
                    role: "DevOps Engineer",
                    period: "2020 - Present",
                    description: "Managing CI/CD pipelines and infrastructure as code"
                }
            ],
            education: [
                {
                    institution: "Dnipro Technical University",
                    degree: "M.Sc. in Computer Systems",
                    period: "2015 - 2020"
                }
            ],
            certifications: [
                { name: "Certified Kubernetes Administrator", year: 2023 }
            ],
            projects: [
                {
                    name: "Infra as Code Template",
                    url: "https://github.com/serhiib/iac-template",
                    description: "Terraform modules for scalable infrastructure"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Reliability", "Team Collaboration", "Documentation"]
        },

        {
            id: "maria-koval",
            name: "Maria Koval",
            title: "Product Manager",
            location: "Vinnytsia, Ukraine",
            email: "maria@example.com",
            linkedin: "https://linkedin.com/in/mariakoval",
            skills: {
                product: ["Agile", "Scrum", "Jira", "Notion"],
                analytics: ["Mixpanel", "Google Analytics", "User Testing"]
            },
            experience: [
                {
                    company: "AppX",
                    role: "Product Manager",
                    period: "2021 - Present",
                    description:
                        "Managing cross-functional product teams and defining roadmaps"
                }
            ],
            education: [
                {
                    institution: "Kyiv School of Economics",
                    degree: "M.Sc. in Business Analytics",
                    period: "2017 - 2019"
                }
            ],
            certifications: [
                { name: "Certified Scrum Product Owner (CSPO)", year: 2022 }
            ],
            projects: [
                {
                    name: "User Onboarding Revamp",
                    description: "Improved user retention through redesign"
                }
            ],
            languages: ["Ukrainian", "English (C1)", "Polish (A2)"],
            softSkills: ["Leadership", "Communication", "Strategic Thinking"]
        },

        {
            id: "andrii-shevchenko",
            name: "Andrii Shevchenko",
            title: "Mobile Developer",
            location: "Kharkiv, Ukraine",
            email: "andrii@example.com",
            github: "https://github.com/andriis",
            skills: {
                platforms: ["Flutter", "React Native", "Android"],
                languages: ["Dart", "JavaScript", "Java"]
            },
            experience: [
                {
                    company: "Mobisoft",
                    role: "Flutter Developer",
                    period: "2022 - Present",
                    description: "Building cross-platform apps using Flutter"
                }
            ],
            education: [
                {
                    institution: "Kharkiv National University",
                    degree: "B.Sc. in Software Engineering",
                    period: "2017 - 2021"
                }
            ],
            certifications: [
                { name: "Flutter & Dart – Udemy", year: 2021 }
            ],
            projects: [
                {
                    name: "Health Tracker App",
                    description: "Flutter-based app for daily health logging"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Adaptability", "Creativity", "UI Sensibility"]
        },

        {
            id: "oksana-hrushko",
            name: "Oksana Hrushko",
            title: "QA Engineer",
            location: "Chernihiv, Ukraine",
            email: "oksana@example.com",
            linkedin: "https://linkedin.com/in/oksanaqa",
            skills: {
                testing: ["Manual Testing", "Regression", "TestRail", "Postman"],
                automation: ["Selenium", "Java", "JUnit", "TestNG"]
            },
            experience: [
                {
                    company: "QA Solutions",
                    role: "QA Engineer",
                    period: "2019 - Present",
                    description: "Writing test cases and automating regression suites"
                }
            ],
            education: [
                {
                    institution: "Chernihiv Tech University",
                    degree: "B.Sc. in Information Systems",
                    period: "2014 - 2018"
                }
            ],
            certifications: [
                { name: "ISTQB Foundation Level", year: 2020 }
            ],
            projects: [
                {
                    name: "E-Commerce QA Automation",
                    description: "End-to-end testing for online store"
                }
            ],
            languages: ["Ukrainian", "English (B1)"],
            softSkills: ["Detail-Oriented", "Persistence", "Team Communication"]
        },

        {
            id: "taras-danchenko",
            name: "Taras Danchenko",
            title: "Machine Learning Engineer",
            location: "Kyiv, Ukraine",
            email: "taras@example.com",
            linkedin: "https://linkedin.com/in/tarasdanchenko",
            github: "https://github.com/tarasml",
            skills: {
                languages: ["Python", "C++"],
                tools: ["TensorFlow", "PyTorch", "scikit-learn", "Jupyter", "Pandas"],
                cloud: ["AWS SageMaker", "GCP AI Platform"]
            },
            experience: [
                {
                    company: "AI Ukraine",
                    role: "ML Engineer",
                    period: "2021 - Present",
                    description: "Developed machine learning models for fraud detection and NLP"
                }
            ],
            education: [
                {
                    institution: "Taras Shevchenko National University",
                    degree: "M.Sc. in Applied Mathematics",
                    period: "2015 - 2020"
                }
            ],
            certifications: [
                { name: "Deep Learning Specialization – Coursera", year: 2022 }
            ],
            projects: [
                {
                    name: "UkrLang NLP Toolkit",
                    description: "Custom NLP tools for Ukrainian language processing"
                }
            ],
            languages: ["Ukrainian", "English (C1)"],
            softSkills: ["Analytical Thinking", "Self-Learning", "Focus"]
        },

        {
            id: "iryna-zadorozhna",
            name: "Iryna Zadorozhna",
            title: "Front-End Developer",
            location: "Ternopil, Ukraine",
            email: "iryna@example.com",
            github: "https://github.com/irynaz",
            website: "https://irynaz.dev",
            skills: {
                frontend: ["HTML5", "CSS3", "JavaScript", "Vue.js", "React"],
                ui: ["SASS", "Bootstrap", "Tailwind", "Figma"]
            },
            experience: [
                {
                    company: "WebTern",
                    role: "Frontend Developer",
                    period: "2020 - Present",
                    description: "Built responsive websites and SPAs using Vue and React"
                }
            ],
            education: [
                {
                    institution: "Ternopil National Technical University",
                    degree: "B.Sc. in Web Technologies",
                    period: "2016 - 2020"
                }
            ],
            certifications: [
                { name: "Frontend Developer – Meta (Coursera)", year: 2023 }
            ],
            projects: [
                {
                    name: "My Portfolio",
                    url: "https://irynaz.dev",
                    description: "Personal developer portfolio"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Creativity", "Teamwork", "Responsibility"]
        },

        {
            id: "artem-sydorenko",
            name: "Artem Sydorenko",
            title: "Cybersecurity Analyst",
            location: "Zaporizhzhia, Ukraine",
            email: "artem@example.com",
            linkedin: "https://linkedin.com/in/artemsec",
            skills: {
                security: ["Wireshark", "Nmap", "Burp Suite", "Kali Linux"],
                compliance: ["ISO 27001", "GDPR", "SOC2"],
                scripting: ["Python", "Bash"]
            },
            experience: [
                {
                    company: "CyberGuard",
                    role: "Security Analyst",
                    period: "2020 - Present",
                    description: "Performed threat modeling, vulnerability scanning, and incident response"
                }
            ],
            education: [
                {
                    institution: "Zaporizhzhia Polytechnic",
                    degree: "B.Sc. in Information Security",
                    period: "2015 - 2019"
                }
            ],
            certifications: [
                { name: "CompTIA Security+", year: 2021 },
                { name: "CEH (Certified Ethical Hacker)", year: 2022 }
            ],
            projects: [
                {
                    name: "Internal PenTest Toolkit",
                    description: "Automated scripts for vulnerability analysis"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Critical Thinking", "Confidentiality", "Alertness"]
        },

        {
            id: "yana-kryvchuk",
            name: "Yana Kryvchuk",
            title: "Digital Marketing Specialist",
            location: "Uzhhorod, Ukraine",
            email: "yana@example.com",
            linkedin: "https://linkedin.com/in/yanamarketing",
            skills: {
                marketing: ["SEO", "PPC", "Email Marketing", "Content Strategy"],
                tools: ["Google Ads", "SEMrush", "Ahrefs", "Mailchimp"]
            },
            experience: [
                {
                    company: "MarketWise",
                    role: "Digital Marketing Manager",
                    period: "2021 - Present",
                    description: "Executed multichannel marketing campaigns for tech startups"
                }
            ],
            education: [
                {
                    institution: "Uzhhorod National University",
                    degree: "B.A. in Marketing",
                    period: "2014 - 2018"
                }
            ],
            certifications: [
                { name: "Google Ads Certification", year: 2022 },
                { name: "HubSpot Inbound", year: 2023 }
            ],
            projects: [
                {
                    name: "Startup Launch Funnel",
                    description: "Generated 25,000+ leads through targeted campaign"
                }
            ],
            languages: ["Ukrainian", "English (C1)", "Hungarian (A2)"],
            softSkills: ["Creativity", "Data Analysis", "Strategic Planning"]
        },

        {
            id: "bogdan-melnyk",
            name: "Bogdan Melnyk",
            title: "Game Developer",
            location: "Ivano-Frankivsk, Ukraine",
            email: "bogdan@example.com",
            github: "https://github.com/bogdandev",
            website: "https://bogdangames.dev",
            skills: {
                gameEngines: ["Unity", "Unreal Engine"],
                languages: ["C#", "C++", "Lua"],
                tools: ["Blender", "Photoshop", "Git"]
            },
            experience: [
                {
                    company: "PixelStorm Games",
                    role: "Unity Developer",
                    period: "2019 - Present",
                    description: "Developed 2D/3D games for mobile and desktop platforms"
                }
            ],
            education: [
                {
                    institution: "Ivano-Frankivsk National Technical University",
                    degree: "B.Sc. in Game Design",
                    period: "2015 - 2019"
                }
            ],
            certifications: [
                { name: "Unity Certified Developer", year: 2022 }
            ],
            projects: [
                {
                    name: "Castle Siege",
                    description: "Strategy game developed with Unity and C#"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Creativity", "Attention to Detail", "Passion for Games"]
        },




        {
            id: "sofia-levchuk",
            name: "Sofia Levchuk",
            title: "Business Analyst",
            location: "Kyiv, Ukraine",
            email: "sofia@example.com",
            linkedin: "https://linkedin.com/in/sofialevchuk",
            skills: {
                analysis: ["Business Requirements", "User Stories", "Use Cases", "Data Flow Diagrams"],
                tools: ["Jira", "Confluence", "Balsamiq", "Tableau", "SQL"],
                methods: ["Agile", "Scrum", "UML", "BPMN"]
            },
            experience: [
                {
                    company: "FinTech UA",
                    role: "Business Analyst",
                    period: "2021 - Present",
                    description: "Gathering and documenting business requirements for banking products"
                }
            ],
            education: [
                {
                    institution: "KNEU",
                    degree: "M.Sc. in Business Analytics",
                    period: "2016 - 2021"
                }
            ],
            certifications: [
                { name: "CBAP – IIBA", year: 2023 }
            ],
            projects: [
                {
                    name: "Loan App Flow Optimization",
                    description: "Reduced customer drop-off by 25% through UX and requirement refinement"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Communication", "Detail Orientation", "Problem Solving"]
        },

        {
            id: "oleksandr-tkachuk",
            name: "Oleksandr Tkachuk",
            title: "Backend Developer",
            location: "Rivne, Ukraine",
            email: "oleksandr@example.com",
            github: "https://github.com/oleksandrdev",
            skills: {
                backend: ["Node.js", "Express", "NestJS", "GraphQL", "MySQL", "MongoDB"],
                devops: ["Docker", "PM2", "NGINX", "GitHub Actions"]
            },
            experience: [
                {
                    company: "CodeRiver",
                    role: "Backend Developer",
                    period: "2020 - Present",
                    description: "Building scalable APIs and backend services for fintech apps"
                }
            ],
            education: [
                {
                    institution: "National University of Water and Environmental Engineering",
                    degree: "B.Sc. in Computer Engineering",
                    period: "2015 - 2019"
                }
            ],
            certifications: [
                { name: "Node.js Microservices – Udemy", year: 2022 }
            ],
            projects: [
                {
                    name: "Banking API Platform",
                    description: "Built secure and scalable REST API with token-based authentication"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Reliability", "Focus", "Teamwork"]
        },

        {
            id: "viktoriia-marchenko",
            name: "Viktoriia Marchenko",
            title: "Content Manager / Copywriter",
            location: "Mykolaiv, Ukraine",
            email: "viktoriia@example.com",
            portfolio: "https://viktoriiawrites.com",
            skills: {
                writing: ["SEO Copywriting", "UX Writing", "Technical Writing", "Content Strategy"],
                tools: ["Grammarly", "Surfer SEO", "Google Docs", "WordPress"]
            },
            experience: [
                {
                    company: "WriteFlow",
                    role: "Senior Copywriter",
                    period: "2019 - Present",
                    description: "Creating high-converting web and blog content for SaaS clients"
                }
            ],
            education: [
                {
                    institution: "Mykolaiv State University",
                    degree: "B.A. in Journalism",
                    period: "2014 - 2018"
                }
            ],
            certifications: [
                { name: "SEO Content Mastery – Coursera", year: 2022 }
            ],
            projects: [
                {
                    name: "30+ SaaS Blog Articles",
                    description: "Ranked on first page for multiple keywords"
                }
            ],
            languages: ["Ukrainian", "English (C1)", "Russian (Native)"],
            softSkills: ["Creativity", "Editing", "Time Management"]
        },

        {
            id: "ilia-honcharenko",
            name: "Ilia Honcharenko",
            title: "AR/VR Developer",
            location: "Kherson, Ukraine",
            email: "ilia@example.com",
            github: "https://github.com/iliaxr",
            skills: {
                arvr: ["Unity", "ARKit", "ARCore", "Unreal Engine"],
                languages: ["C#", "C++", "ShaderLab"],
                tools: ["Oculus SDK", "Vuforia", "Blender"]
            },
            experience: [
                {
                    company: "XRTech",
                    role: "AR/VR Developer",
                    period: "2021 - Present",
                    description: "Developed AR applications for retail and education with Unity"
                }
            ],
            education: [
                {
                    institution: "Kherson State University",
                    degree: "B.Sc. in Computer Graphics",
                    period: "2015 - 2019"
                }
            ],
            certifications: [
                { name: "Unity XR Development – Udemy", year: 2023 }
            ],
            projects: [
                {
                    name: "AR Museum Guide",
                    description: "Mobile AR app for historical exhibit navigation"
                }
            ],
            languages: ["Ukrainian", "English (B2)"],
            softSkills: ["Creativity", "Innovation", "User Focus"]
        },

        {
            id: "anastasiia-taran",
            name: "Anastasiia Taran",
            title: "HR Generalist",
            location: "Poltava, Ukraine",
            email: "anastasiia@example.com",
            linkedin: "https://linkedin.com/in/anastasiiahr",
            skills: {
                hr: ["Recruiting", "Onboarding", "Employee Relations", "HRIS"],
                tools: ["BambooHR", "Workable", "LinkedIn Recruiter"]
            },
            experience: [
                {
                    company: "PeopleFirst",
                    role: "HR Generalist",
                    period: "2019 - Present",
                    description: "Managed full-cycle recruitment and employee satisfaction programs"
                }
            ],
            education: [
                {
                    institution: "Poltava University of Economics and Trade",
                    degree: "M.A. in Human Resources",
                    period: "2013 - 2018"
                }
            ],
            certifications: [
                { name: "HR Management Certificate – HRCI", year: 2022 }
            ],
            projects: [
                {
                    name: "Employee Wellbeing Program",
                    description: "Improved retention and satisfaction rates by 15%"
                }
            ],
            languages: ["Ukrainian", "English (B2)", "Russian"],
            softSkills: ["Empathy", "Negotiation", "Organizational Skills"]
        }
    ];

    res.status(200).json(resumes);
}
