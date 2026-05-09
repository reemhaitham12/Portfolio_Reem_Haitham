export const content = {
  en: {
    navbar: {
      logo: "RH",
      links: [
        { id: 'hero', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'education', name: 'Education' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'experience', name: 'Experience' },
        { id: 'services', name: 'Services' },
        { id: 'testimonials', name: 'Testimonials' },
        { id: 'achievements', name: 'Achievements' }
      ],
      contactBtn: "Contact"
    },
    hero: {
      name: "Reem Haitham",
      title: "Front-End Developer",
      subheading: "I help create user-centered digital solutions that improve performance and deliver real impact.",
      shortLine: "Focused on clean code, scalability, and modern user experiences.",
      buttons: {
        viewProjects: "View Projects",
        contact: "Contact",
        downloadCV: "Download CV"
      }
    },
    about: {
      title: "About Me",
      heading: "Hello,\nI'm Reem Haitham 👋",
      paragraphs: [
        "I help create high-performance, user-centered web applications that deliver real impact. I focus on building scalable solutions with clean, maintainable code and modern UI practices.",
        "I have experience building e-commerce platforms, tourism websites, and AI-based applications. I also have one year of teaching experience, where I mentored 25+ students in Scratch and Basic Web Development."
      ],
      features: [
        { title: "High Performance", desc: "Fast, optimized, and efficient applications", icon: "🚀" },
        { title: "Scalable Solutions", desc: "Built to grow with users and business needs", icon: "📈" },
        { title: "Clean Code", desc: "Maintainable and well-structured codebase", icon: "📜" },
        { title: "User-Centered Design", desc: "Focused on usability and experience", icon: "🎨" }
      ]
    },
    education: {
      title: "Education & Certifications",
      academic: {
        title: "Education",
        items: [
          {
            degree: "Bachelor of Computer Science and Information Technology",
            university: "Ahram Canadian University",
            duration: "2020 – 2024",
            grade: "Good",
            icon: "🎓"
          }
        ]
      },
      certifications: {
        title: "Certifications & Training",
        items: [
          {
            title: "Front-End Web Development Intern",
            org: "Information Technology Institute (ITI)",
            duration: "Aug 2021 – Sep 2021",
            icon: "./src/assets/logo.jpg",
            link: "#" // ITI Certificate Link
          },
          {
            title: "Front-End Development Training",
            org: "Route",
            duration: "Mar 2024 – Sep 2024",
            icon: "./src/assets/route.png",
            link: "" // Route Certificate Link
          }
        ]
      }
    },
    skills: {
      title: "Technical Skills",
      categories: [
        { id: "frontend", name: "Front-End", icon: "💻" },
        { id: "backend", name: "Back-End & Database", icon: "⚙️" },
        { id: "tools", name: "Tools & Concepts", icon: "🛠️" },
        { id: "soft", name: "Soft Skills", icon: "🤝" }
      ],
      items: [
        { name: "HTML5", category: "frontend", desc: "Semantic page structure", icon: "html5" },
        { name: "CSS3", category: "frontend", desc: "Responsive UI styling", icon: "css3" },
        { name: "JavaScript", category: "frontend", desc: "Interactive web features", icon: "javascript" },
        { name: "React.js", category: "frontend", desc: "Reusable UI components", icon: "react" },
        { name: "Next.js", category: "frontend", desc: "Fast, SEO-friendly apps", icon: "nextjs" },
        { name: "Bootstrap", category: "frontend", desc: "Ready responsive layouts", icon: "bootstrap" },
        { name: "Tailwind CSS", category: "frontend", desc: "Utility-first styling", icon: "tailwindcss" },
        { name: "jQuery", category: "frontend", desc: "Simplified DOM handling", icon: "jquery" },
        { name: "Node.js", category: "backend", desc: "Scalable backend APIs", icon: "nodejs" },
        { name: "MySQL", category: "backend", desc: "Relational database management", icon: "mysql" },
        { name: "SQL Server", category: "backend", desc: "Enterprise database solutions", icon: "sqlserver" },
        { name: "Git", category: "tools", desc: "Version control system", icon: "git" },
        { name: "GitHub", category: "tools", desc: "Code collaboration platform", icon: "github" },
        { name: "REST APIs", category: "tools", desc: "Backend integration", icon: "api" },
        { name: "Responsive Design", category: "tools", desc: "Multi-device compatibility", icon: "responsive" },
        { name: "OOP", category: "tools", desc: "Structured code approach", icon: "oop" },
        { name: "Data Structures", category: "tools", desc: "Efficient data handling", icon: "ds" },
        { name: "Design Patterns", category: "tools", desc: "Scalable code practices", icon: "patterns" },
        { name: "Communication", category: "soft", desc: "Clear idea sharing", icon: "communication" },
        { name: "Teamwork", category: "soft", desc: "Effective collaboration", icon: "teamwork" },
        { name: "Problem Solving", category: "soft", desc: "Smart solutions", icon: "problem-solving" },
        { name: "Adaptability", category: "soft", desc: "Fast learning", icon: "adaptability" },
        { name: "Time Management", category: "soft", desc: "Task efficiency", icon: "time-management" }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          id: 1,
          icon: "🛒",
          image: "./src/assets/FreshCart.png",
          title: "Fresh Cart E-Commerce",
          source: "Internship Project",
          role: "Front-End Developer",
          description: {
            challenge: "The main challenge was building a dynamic and responsive e-commerce interface that provides smooth navigation between products while maintaining high performance. Managing product display, user interaction, and state efficiently was also a key challenge, especially with cart functionality and routing.",
            action: "I developed the application using React, utilizing reusable components, hooks, and routing to create a scalable architecture. I implemented dynamic product listing, interactive UI elements, and optimized rendering performance. I also ensured a fully responsive design across different devices.",
            result: [
              "Improved page load performance by approximately 30% through optimized component rendering",
              "Built a responsive layout supporting 100% of device sizes (mobile, tablet, desktop)",
              "Enhanced user interaction with smooth navigation and dynamic updates, improving usability by around 40%",
              "Reduced code redundancy by 25% using reusable components"
            ]
          },
          features: ["Responsive design", "Cart state management", "Dynamic UI components", "Product filtering"],
          techIcons: ["React", "JavaScript", "CSS", "TailwindCSS"],
          links: {
            demo: "https://fresh-cart-ecommarce.vercel.app/",
            github: "#"
          }
        },
        // {
        //   id: 2,
        //   icon: "🪴",
        //   title: "Planka – AI Plant Disease Detection",
        //   source: "Graduation Project",
        //   role: "Front-End Developer",
        //   description: {
        //     challenge: "Farmers needed an accessible tool to diagnose plant diseases rapidly without relying solely on experts.",
        //     action: "Developed the user interface to interact with an AI backend, ensuring intuitive photo uploads and clear results displaying.",
        //     result: "Provided an easy-to-use interface that enabled users to receive instant diagnosis and insights."
        //   },
        //   features: ["API integration", "Image upload handling", "Real-time analysis display", "Responsive design"],
        //   techIcons: ["React", "API", "Auth"],
        //   links: {
        //     demo: "#",
        //     github: "#"
        //   }
        // },
        {
          id: 3,
          icon: "🏛️",
          image: "./src/assets/Kemet.png",
          title: "Tourism Kemet Website",
          source: "Real Client Project",
          role: "Front-End Developer",
          description: {
            challenge: "One of the main challenges was designing a visually appealing layout where some images extend beyond the card boundaries while maintaining a clean and balanced UI. Ensuring responsiveness and consistent layout behavior across different screen sizes was also challenging.",
            action: "I developed the website using HTML, CSS, JavaScript, and Bootstrap, focusing on responsive design and clean UI structure. I handled complex image positioning using CSS techniques such as positioning and overflow control, ensuring visual consistency without breaking layout integrity.",
            result: [
              "Achieved full responsiveness across 100% of screen sizes",
              "Improved visual engagement by approximately 35% through modern UI design and layout",
              "Maintained layout stability while implementing advanced image positioning techniques",
              "Delivered a smooth and user-friendly browsing experience with optimized structure and navigation"
            ]
          },
          features: ["Semantic HTML", "Custom CSS animations", "Responsive layouts", "Interactive components"],
          techIcons: ["HTML5", "CSS3", "JS", "Bootstrap"],
          links: {
            demo: "https://reemhaitham12.github.io/tourism_Kemet_Website/",
            github: "#"
          }
        }
      ]
    },
    experience: {
      title: "Work Experience",
      items: [
        {
          id: 1,
          role: "Full Stack Developer",
          company: "Digilians",
          logo: "./src/assets/digilians.png",
          duration: "2026",
          challenge: "Improve application performance, scalability, and user engagement.",
          actions: [
            "Built scalable web applications using React and Node.js",
            "Integrated secure REST APIs",
            "Implemented authentication, routing, and state management",
            "Optimized application performance"
          ],
          results: [
            "Increased user engagement by 25%",
            "Reduced page load time by 30%",
            "Improved user retention by 15%"
          ]
        },
        {
          id: 2,
          role: "Coding Instructor",
          company: "Be School",
          logo: "./src/assets/beSchool.png",
          duration: "2024 – 2025",
          challenge: "Help students understand programming concepts and build practical skills.",
          actions: [
            "Delivered 30+ sessions in HTML, CSS, JavaScript, and React",
            "Mentored 25+ students through hands-on projects",
            "Simplified technical concepts for beginners"
          ],
          results: [
            "Improved students’ coding skills",
            "Helped students build real-world projects",
            "Increased engagement and understanding"
          ]
        },
        {
          id: 3,
          role: "Front-End Developer Trainee",
          company: "Route",
          logo: "./src/assets/route.png",
          duration: "2024",
          challenge: "Build high-performance applications and improve user experience for real users.",
          actions: [
            "Developed applications using React and Next.js",
            "Built responsive interfaces for real-world users",
            "Refactored code for better maintainability",
            "Applied modern front-end best practices"
          ],
          results: [
            "Served 1000+ daily users with 99% uptime",
            "Reduced bugs by 25%",
            "Improved performance and user retention by 15%"
          ]
        }
      ]
    },
    cta: {
      heading: "Ready to start your project?",
      buttonText: "View Pricing Plans"
    },
    pricing: {
      badge: "Transparent Pricing",
      title: "Choose Your Plan",
      subtitle: "No hidden fees. Every plan is scoped to deliver real value — from a simple landing page to a full enterprise system.",
      infoBox: "All plans include source code delivery, clean architecture, and a post-launch review session. Prices are estimates — final cost depends on project scope.",
      backButton: "Back to Portfolio",
      plans: [
        {
          id: "basic",
          label: "Starter",
          icon: "🚀",
          name: "Basic",
          price: "$25–50",
          period: "/ project",
          desc: "For small landing pages",
          features: [
            { text: "Up to 3–6 Pages", enabled: true },
            { text: "Responsive Design", enabled: true },
            { text: "Contact Form", enabled: true },
            { text: "Database Integration", enabled: false },
            { text: "Admin Dashboard", enabled: false },
            { text: "API Development", enabled: false }
          ],
          buttonText: "Get Started"
        },
        {
          id: "balance",
          label: "Popular",
          icon: "⚖️",
          name: "Balance",
          price: "$499",
          period: "/ project",
          desc: "Ideal for business websites",
          features: [
            { text: "Up to 10 Pages", enabled: true },
            { text: "Everything in Basic", enabled: true },
            { text: "Database Integration", enabled: true },
            { text: "User Authentication", enabled: true },
            { text: "API Development", enabled: true }
          ],
          buttonText: "Get Started",
          highlight: true
        },
        {
          id: "pro",
          label: "Best Value",
          icon: "⚡",
          name: "PRO",
          price: "$1,299",
          period: "/ project",
          desc: "Full-stack web application",
          features: [
            { text: "Everything in Balance", enabled: true },
            { text: "Unlimited Pages", enabled: true },
            { text: "RESTful API Development", enabled: true },
            { text: "Admin Dashboard", enabled: true },
            { text: "Payment Gateway (Stripe)", enabled: true }
          ],
          buttonText: "Get Started"
        },
        {
          id: "custom",
          label: "Enterprise",
          icon: "⚙️",
          name: "Custom",
          price: "Let's Talk",
          period: "",
          desc: "Tailored solutions for complex enterprise projects.",
          features: [
            { text: "Everything in PRO", enabled: true },
            { text: "Custom Architecture", enabled: true },
            { text: "Redis Caching", enabled: true },
            { text: "Priority Support", enabled: true },
            { text: "Dedicated Maintenance", enabled: true }
          ],
          buttonText: "Contact Me"
        }
      ]
    },
    services: {
      title: "Services",
      items: [
        { id: 1, icon: "💻", title: "Front-End Development", desc: "Building structured, dynamic, and interactive user interfaces using React." },
        { id: 2, icon: "🎨", title: "UI Implementation", desc: "Translating design mockups to pixel-perfect code." },
        { id: 3, icon: "📱", title: "Responsive Web Design", desc: "Ensuring applications look amazing across all device sizes." },
        { id: 4, icon: "👩‍🏫", title: "Front-End Mentoring", desc: "Guiding and teaching modern web development practices." }
      ]
    },
    testimonials: {
      title: "Testimonials",
      items: [
        {
          id: 1,
          feedback: "Reem is an exceptional developer who consistently delivers high-quality code and beautiful user interfaces.",
          name: "Ahmed Manager",
          role: "Project Manager at Digilians"
        },
        {
          id: 2,
          feedback: "A dedicated mentor and an excellent coder. Her ability to explain complex React concepts is outstanding.",
          name: "Sara Student",
          role: "Student at Be School"
        }
      ]
    },
    achievements: {
      title: "Achievements",
      items: [
        { id: 1, icon: "👥", count: "1000+", label: "Daily Users" },
        { id: 2, icon: "📊", count: "+25%", label: "User Engagement" },
        { id: 3, icon: "⚡", count: "-30%", label: "Load Time" },
        { id: 4, icon: "🎓", count: "30+", label: "Training Sessions" },
        { id: 5, icon: "💻", count: "25+", label: "Students Trained" }
      ]
    },
    contact: {
      title: "Contact Me",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message"
      },
      info: {
        social: [
          { name: "LinkedIn", link: "https://www.linkedin.com/in/reem-haitham/", icon: "fa-brands fa-linkedin" },
          { name: "GitHub", link: "https://github.com/reemhaitham12", icon: "fa-brands fa-github" },
          { name: "WhatsApp", link: "https://wa.me/201220978902", icon: "fa-brands fa-whatsapp" }, // Replace with your real number
          { name: "Gmail", link: "https://mail.google.com/mail/?view=cm&fs=1&to=reemhaitham69@gmail.com", icon: "fa-solid fa-envelope" },
          { name: "Upwork", link: "https://www.upwork.com/freelancers/~01b66eae565272c6c5", icon: "fa-brands fa-upwork" },
          { name: "Khamsat", link: "https://khamsat.com/user/reem_haitham", icon: "fa-solid fa-5" },
          { name: "Mostaql", link: "https://mostaql.com/u/Reem_Haitham", icon: "fa-solid fa-m" }
        ]
      }
    },
    footer: {
      logo: "RH",
      copyright: "© 2026 Reem Haitham Ahmed Helmy. All rights reserved.",
      backToTop: "Back to Top",
      leftHeading: "DON'T BE SHY!",
      leftText: "Feel free to get in touch. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      rightHeading: "WHO AM I?",
      rightText: "I'm a Front-End Developer, passionate and dedicated. I have the skills to develop user-friendly, scalable applications that make your project a success."
    }
  },
  ar: {
    navbar: {
      logo: "RH",
      links: [
        { id: 'hero', name: 'الرئيسية' },
        { id: 'about', name: 'من أنا' },
        { id: 'education', name: 'التعليم' },
        { id: 'skills', name: 'المهارات' },
        { id: 'projects', name: 'المشاريع' },
        { id: 'experience', name: 'الخبرات' },
        { id: 'services', name: 'الخدمات' },
        { id: 'testimonials', name: 'آراء العملاء' },
        { id: 'achievements', name: 'الإنجازات' }
      ],
      contactBtn: "تواصل معي"
    },
    hero: {
      name: "ريم هيثم",
      title: "مطور واجهات أمامية",
      subheading: "أساعد في إنشاء حلول رقمية تتمحور حول المستخدم تعمل على تحسين الأداء وتقديم تأثير حقيقي.",
      shortLine: "التركيز على الكود النظيف، وقابلية التوسع، وتجارب المستخدم الحديثة.",
      buttons: {
        viewProjects: "تصفح المشاريع",
        contact: "تواصل معي",
        downloadCV: "تحميل السيرة الذاتية"
      }
    },
    about: {
      title: "من أنا",
      heading: "أهلاً،\nأنا ريم هيثم 👋",
      paragraphs: [
        "أساعد في إنشاء تطبيقات ويب عالية الأداء تركز على المستخدم وتقدم تأثيراً حقيقياً. أركز على بناء حلول قابلة للتوسع مع كود نظيف وقابل للصيانة وممارسات واجهة مستخدم حديثة.",
        "لدي خبرة في بناء منصات التجارة الإلكترونية، ومواقع السياحة، والتطبيقات القائمة على الذكاء الاصطناعي. لدي أيضاً عام واحد من الخبرة في التدريس، حيث قمت بتوجيه أكثر من 25 طالباً."
      ],
      features: [
        { title: "أداء عالٍ", desc: "تطبيقات سريعة ومحسنة وفعالة", icon: "🚀" },
        { title: "حلول قابلة للتطوير", desc: "بنيت لتنمو مع المستخدمين واحتياجات العمل", icon: "📈" },
        { title: "كود نظيف", desc: "قاعدة كود قابلة للصيانة ومنظمة جيداً", icon: "📜" },
        { title: "تصميم يركز على المستخدم", desc: "يركز على سهولة الاستخدام والخبرة", icon: "🎨" }
      ]
    },
    education: {
      title: "التعليم والشهادات",
      academic: {
        title: "التعليم",
        items: [
          {
            degree: "بكالوريوس علوم الحاسب وتكنولوجيا المعلومات",
            university: "جامعة الأهرام الكندية",
            duration: "2020 – 2024",
            grade: "جيد",
            icon: "🎓"
          }
        ]
      },
      certifications: {
        title: "الشهادات والتدريب",
        items: [
          {
            title: "متدرب تطوير واجهات أمامية (Intern)",
            org: "معهد تكنولوجيا المعلومات (ITI)",
            duration: "أغسطس 2021 – سبتمبر 2021",
            icon: "./src/assets/logo.jpg",
            link: "#"
          },
          {
            title: "تدريب مطور واجهات أمامية",
            org: "Route",
            duration: "مارس 2024 – سبتمبر 2024",
            icon: "./src/assets/route.png",
            link: ""
          }
        ]
      }
    },
    skills: {
      title: "المهارات التقنية",
      categories: [
        { id: "frontend", name: "واجهات أمامية", icon: "💻" },
        { id: "backend", name: "الواجهات الخلفية", icon: "⚙️" },
        { id: "tools", name: "أدوات ومفاهيم", icon: "🛠️" },
        { id: "soft", name: "مهارات شخصية", icon: "🤝" }
      ],
      items: [
        { name: "HTML5", category: "frontend", desc: "هيكل صفحة دلالي", icon: "html5" },
        { name: "CSS3", category: "frontend", desc: "تنسيق واجهة مستخدم متجاوب", icon: "css3" },
        { name: "JavaScript", category: "frontend", desc: "ميزات ويب تفاعلية", icon: "javascript" },
        { name: "React.js", category: "frontend", desc: "مكونات واجهة مستخدم قابلة لإعادة الاستخدام", icon: "react" },
        { name: "Next.js", category: "frontend", desc: "تطبيقات سريعة وصديقة لمحركات البحث", icon: "nextjs" },
        { name: "Bootstrap", category: "frontend", desc: "تخطيطات جاهزة متجاوبة", icon: "bootstrap" },
        { name: "Tailwind CSS", category: "frontend", desc: "تنسيق يعتمد على الأدوات المساعدة", icon: "tailwindcss" },
        { name: "jQuery", category: "frontend", desc: "معالجة مبسطة للـ DOM", icon: "jquery" },
        { name: "Node.js", category: "backend", desc: "واجهات برمجة تطبيقات خلفية قابلة للتطوير", icon: "nodejs" },
        { name: "MySQL", category: "backend", desc: "إدارة قواعد البيانات العلاقاتية", icon: "mysql" },
        { name: "SQL Server", category: "backend", desc: "حلول قواعد بيانات المؤسسات", icon: "sqlserver" },
        { name: "Git", category: "tools", desc: "نظام التحكم في الإصدار", icon: "git" },
        { name: "GitHub", category: "tools", desc: "منصة تعاون الكود", icon: "github" },
        { name: "REST APIs", category: "tools", desc: "تكامل الواجهة الخلفية", icon: "api" },
        { name: "Responsive Design", category: "tools", desc: "التوافق مع أجهزة متعددة", icon: "responsive" },
        { name: "OOP", category: "tools", desc: "نهج كود منظم", icon: "oop" },
        { name: "Data Structures", category: "tools", desc: "معالجة بيانات فعالة", icon: "ds" },
        { name: "Design Patterns", category: "tools", desc: "ممارسات كود قابلة للتطوير", icon: "patterns" },
        { name: "Communication", category: "soft", desc: "مشاركة أفكار واضحة", icon: "communication" },
        { name: "Teamwork", category: "soft", desc: "تعاون فعال", icon: "teamwork" },
        { name: "Problem Solving", category: "soft", desc: "حلول ذكية", icon: "problem-solving" },
        { name: "Adaptability", category: "soft", desc: "تعلم سريع", icon: "adaptability" },
        { name: "Time Management", category: "soft", desc: "كفاءة المهمة", icon: "time-management" }
      ]
    },
    projects: {
      title: "أبرز المشاريع",
      items: [
        {
          id: 1,
          icon: "🛒",
          image: "./src/assets/FreshCart.png",
          title: "متجر Fresh Cart",
          source: "مشروع شخصي",
          role: "مطور واجهات أمامية",
          description: {
            challenge: "كان التحدي الرئيسي هو بناء واجهة تجارة إلكترونية ديناميكية ومتجاوبة توفر تنقلاً سلسًا بين المنتجات مع الحفاظ على الأداء العالي. كما كانت إدارة عرض المنتجات وتفاعل المستخدم والحالة بكفاءة تحديًا رئيسيًا، لا سيما مع وظائف السلة والتوجيه (routing).",
            action: "قمت بتطوير التطبيق باستخدام React، مستفيداً من المكونات القابلة لإعادة الاستخدام، والـ hooks، والتوجيه لإنشاء بنية قابلة للتوسع. ونفذت قائمة منتجات ديناميكية، وعناصر واجهة مستخدم تفاعلية، وحسّنت أداء العرض. كما ضمنت تصميمًا متجاوبًا بالكامل عبر الأجهزة المختلفة.",
            result: [
              "تحسين أداء تحميل الصفحة بنسبة 30% تقريبًا من خلال العرض المحسن للمكونات",
              "بناء تخطيط متجاوب يدعم 100% من أحجام الأجهزة (هواتف، أجهزة لوحية، أجهزة حاسوب)",
              "تحسين تفاعل المستخدم مع التنقل السلس والتحديثات الديناميكية، مما أدى إلى تحسين قابلية الاستخدام بنسبة 40% تقريبًا",
              "تقليل التكرار في الكود بنسبة 25% باستخدام مكونات قابلة لإعادة الاستخدام"
            ]
          },
          features: ["تصميم متجاوب", "إدارة حالة السلة", "مكونات واجهة ديناميكية", "تصفية المنتجات"],
          techIcons: ["React", "JavaScript", "CSS", "TailwindCSS"],
          links: {
            demo: "https://fresh-cart-ecommarce.vercel.app/",
            github: "#"
          }
        },
        // {
        //   id: 2,
        //   icon: "🪴",
        //   title: "Planka – تشخيص أمراض النبات",
        //   source: "مشروع تخرج",
        //   role: "مطور واجهات أمامية",
        //   description: {
        //     challenge: "يحتاج المزارعون إلى أداة يسهل الوصول إليها لتشخيص أمراض النباتات بسرعة دون الاعتماد على الخبراء فقط.",
        //     action: "تطوير واجهة المستخدم للتفاعل مع خلفية ذكاء اصطناعي، لضمان تحميل الصور بسهولة وعرض النتائج بوضوح.",
        //     result: "توفير واجهة سهلة الاستخدام تتيح للمستخدمين الحصول على تشخيصات ورؤى فورية."
        //   },
        //   features: ["ربط واجهات برمجة التطبيقات (API)", "معالجة رفع الصور", "عرض نتائج التحليل لحظياً", "تصميم متجاوب"],
        //   techIcons: ["React", "API", "Auth"],
        //   links: {
        //     demo: "#",
        //     github: "#"
        //   }
        // },
        {
          id: 3,
          icon: "🏛️",
          image: "./src/assets/Kemet.png",
          title: "موقع Tourism Kemet",
          source: "مشروع تدريب",
          role: "مطور واجهة مستخدم",
          description: {
            challenge: "كان أحد التحديات الرئيسية هو تصميم تخطيط جذاب بصريًا حيث تمتد بعض الصور خارج حدود البطاقات مع الحفاظ على واجهة مستخدم نظيفة ومتوازنة. إضافة إلى ضمان الاستجابة وسلوك التخطيط المتسق عبر أحجام الشاشات المختلفة.",
            action: "قمت بتطوير الموقع باستخدام HTML و CSS و JavaScript و Bootstrap، مع التركيز على التصميم المتجاوب وهيكل الواجهة النظيف. لقد تعاملت مع تموضع الصور المعقد باستخدام تقنيات CSS مثل الـ positioning والتحكم في الـ overflow، مما يضمن الاتساق البصري دون كسر سلامة التخطيط.",
            result: [
              "تحقيق استجابة كاملة عبر 100% من أحجام الشاشات",
              "تحسين التفاعل البصري بنسبة 35% تقريبًا من خلال تصميم واجهة مستخدم وتخطيط حديث",
              "الحفاظ على استقرار التخطيط أثناء تنفيذ تقنيات تموضع الصور المتقدمة",
              "تقديم تجربة تصفح سلسة وسهلة الاستخدام مع بنية وتنقل محسنين"
            ]
          },
          features: ["HTML الدلالي (Semantic HTML)", "متحركات CSS مخصصة", "تخطيطات متجاوبة", "مكونات تفاعلية"],
          techIcons: ["HTML5", "CSS3", "JS", "Bootstrap"],
          links: {
            demo: "https://reemhaitham12.github.io/tourism_Kemet_Website/",
            github: "#"
          }
        }
      ]
    },
    experience: {
      title: "الخبرات العملية",
      items: [
        {
          id: 1,
          role: "مطور تطبيقات كاملة (Full Stack Developer)",
          company: "Digilians",
          logo: "./src/assets/digilians.png",
          duration: "2026",
          challenge: "تحسين أداء التطبيق، وقابليته للتوسع، وتفاعل المستخدمين.",
          actions: [
            "بناء تطبيقات ويب قابلة للتوسع باستخدام React و Node.js",
            "دمج واجهات برمجية (REST APIs) آمنة",
            "تنفيذ أنظمة المصادقة، التوجيه، وإدارة الحالة",
            "تحسين أداء التطبيقات بشكل عام"
          ],
          results: [
            "زيادة تفاعل المستخدمين بنسبة 25%",
            "تقليل وقت تحميل الصفحات بنسبة 30%",
            "تحسين معدل الاحتفاظ بالمستخدمين بنسبة 15%"
          ]
        },
        {
          id: 2,
          role: "مدرب برمجة",
          company: "Be School",
          logo: "./src/assets/beSchool.png",
          duration: "2024 – 2025",
          challenge: "مساعدة الطلاب على فهم مفاهيم البرمجة وبناء مهارات عملية.",
          actions: [
            "تقديم أكثر من 30 جلسة تدريبية في HTML, CSS, JavaScript, و React",
            "توجيه أكثر من 25 طالباً من خلال مشاريع عملية",
            "تبسيط المفاهيم التقنية للمبتدئين"
          ],
          results: [
            "تحسين مهارات البرمجة لدى الطلاب",
            "مساعدة الطلاب على بناء مشاريع حقيقية",
            "زيادة التفاعل والفهم لدى الطلاب"
          ]
        },
        {
          id: 3,
          role: "متدرب تطوير واجهات أمامية",
          company: "Route",
          logo: "./src/assets/route.png",
          duration: "2024",
          challenge: "بناء تطبيقات عالية الأداء وتحسين تجربة المستخدم للمستخدمين الحقيقيين.",
          actions: [
            "تطوير تطبيقات باستخدام React و Next.js",
            "بناء واجهات متجاوبة للمستخدمين في العالم الحقيقي",
            "إعادة صياغة الكود لتحسين قابلية الصيانة",
            "تطبيق أفضل الممارسات الحديثة في تطوير الواجهات الأمامية"
          ],
          results: [
            "خدمة أكثر من 1000 مستخدم يومياً مع وقت تشغيل بنسبة 99%",
            "تقليل الأخطاء (Bugs) بنسبة 25%",
            "تحسين الأداء ومعدل الاحتفاظ بالمستخدمين بنسبة 15%"
          ]
        },
      ]
    },
    cta: {
      heading: "هل أنت مستعد لبدء مشروعك؟",
      buttonText: "عرض خطط الأسعار"
    },
    pricing: {
      badge: "أسعار شفافة",
      title: "اختر خطتك",
      subtitle: "لا توجد رسوم خفية. كل خطة مصممة لتقديم قيمة حقيقية - من صفحة هبوط بسيطة إلى نظام مؤسسي كامل.",
      infoBox: "تشمل جميع الخطط تسليم الكود المصدري، وبنية نظيفة، وجلسة مراجعة بعد الإطلاق. الأسعار تقديرية - تعتمد التكلفة النهائية على نطاق المشروع.",
      backButton: "العودة إلى المعرض",
      plans: [
        {
          id: "basic",
          label: "بداية",
          icon: "🚀",
          name: "أساسي",
          price: "25–50 $",
          period: "/ للمشروع",
          desc: "لصفحات الهبوط الصغيرة",
          features: [
            { text: "حتى 3-6 صفحات", enabled: true },
            { text: "تصميم متجاوب", enabled: true },
            { text: "نموذج اتصال", enabled: true },
            { text: "تكامل قاعدة البيانات", enabled: false },
            { text: "لوحة تحكم المسؤول", enabled: false },
            { text: "تطوير API", enabled: false }
          ],
          buttonText: "ابدأ الآن"
        },
        {
          id: "balance",
          label: "الأكثر شعبية",
          icon: "⚖️",
          name: "متوازن",
          price: "499 $",
          period: "/ للمشروع",
          desc: "مثالي لمواقع الشركات",
          features: [
            { text: "حتى 10 صفحات", enabled: true },
            { text: "كل ما في الخطة الأساسية", enabled: true },
            { text: "تكامل قاعدة البيانات", enabled: true },
            { text: "توثيق المستخدمين", enabled: true },
            { text: "تطوير API", enabled: true }
          ],
          buttonText: "ابدأ الآن",
          highlight: true
        },
        {
          id: "pro",
          label: "أفضل قيمة",
          icon: "⚡",
          name: "احترافي",
          price: "1,299 $",
          period: "/ للمشروع",
          desc: "تطبيق ويب متكامل (Full-stack)",
          features: [
            { text: "كل ما في الخطة المتوازنة", enabled: true },
            { text: "صفحات غير محدودة", enabled: true },
            { text: "تطوير API (RESTful)", enabled: true },
            { text: "لوحة تحكم المسؤول", enabled: true },
            { text: "بوابة دفع (Stripe)", enabled: true }
          ],
          buttonText: "ابدأ الآن"
        },
        {
          id: "custom",
          label: "مؤسسات",
          icon: "⚙️",
          name: "مخصص",
          price: "دعنا نتحدث",
          period: "",
          desc: "حلول مخصصة لمشاريع المؤسسات المعقدة.",
          features: [
            { text: "كل ما في الخطة الاحترافية", enabled: true },
            { text: "بنية مخصصة", enabled: true },
            { text: "تخزين مؤقت (Redis)", enabled: true },
            { text: "دعم ذو أولوية", enabled: true },
            { text: "صيانة مخصصة", enabled: true }
          ],
          buttonText: "تواصل معي"
        }
      ]
    },
    services: {
      title: "الخدمات",
      items: [
        { id: 1, icon: "💻", title: "تطوير الواجهات الأمامية", desc: "بناء واجهات مستخدم مهيكلة وديناميكية وتفاعلية باستخدام React." },
        { id: 2, icon: "🎨", title: "تنفيذ واجهة المستخدم", desc: "تحويل التصاميم ببراعة إلى كود دقيق وتفاعلي." },
        { id: 3, icon: "📱", title: "تصميم ويب متجاوب", desc: "تأكيد أن التطبيقات تبدو مذهلة عبر جميع أحجام الأجهزة." },
        { id: 4, icon: "👩‍🏫", title: "التوجيه والتدريب", desc: "إرشاد وتدريس الممارسات الحديثة في تطوير الواجهات." }
      ]
    },
    testimonials: {
      title: "آراء العملاء",
      items: [
        {
          id: 1,
          feedback: "ريم مطورة استثنائية تقدم باستمرار كودًا عالي الجودة وواجهات مستخدم جميلة.",
          name: "أحمد - مدير مشروع",
          role: "مدير مشاريع في Digilians"
        },
        {
          id: 2,
          feedback: "مرشدة متفانية ومبرمجة ممتازة. قدرتها على شرح مفاهيم React المعقدة متميزة.",
          name: "سارة - طالبة",
          role: "طالبة في Be School"
        }
      ]
    },
    achievements: {
      title: "الإنجازات",
      items: [
        { id: 1, icon: "📊", count: "25%", label: "تحسين تفاعل المستخدمين" },
        { id: 2, icon: "⚡", count: "30%", label: "تسريع وقت التحميل" },
        { id: 3, icon: "👥", count: "1000+", label: "مستخدم يومي نشط" },
        { id: 4, icon: "🎓", count: "30+", label: "جلسة تدريبية" },
        { id: 5, icon: "💻", count: "25+", label: "طالب تم تدريبهم" }
      ]
    },
    contact: {
      title: "تواصل معي",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة"
      },
      info: {
        social: [
          { name: "LinkedIn", link: "https://www.linkedin.com/in/reem-haitham/", icon: "fa-brands fa-linkedin" },
          { name: "GitHub", link: "https://github.com/reemhaitham12", icon: "fa-brands fa-github" },
          { name: "WhatsApp", link: "https://wa.me/201220978902", icon: "fa-brands fa-whatsapp" }, // Replace with your real number
          { name: "Gmail", link: "https://mail.google.com/mail/?view=cm&fs=1&to=reemhaitham69@gmail.com", icon: "fa-solid fa-envelope" },
          { name: "Upwork", link: "https://www.upwork.com/freelancers/~01b66eae565272c6c5", icon: "fa-brands fa-upwork" },
          { name: "Khamsat", link: "https://khamsat.com/user/reem_haitham", icon: "fa-solid fa-5" },
          { name: "Mostaql", link: "https://mostaql.com/u/Reem_Haitham", icon: "fa-solid fa-m" }
        ]
      }
    },
    footer: {
      logo: "RH",
      copyright: "© 2026 ريم هيثم جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
      leftHeading: "لا تتردد!",
      leftText: "لا تتردد في التواصل معي. أنا دائمًا منفتح لمناقشة المشاريع الجديدة، الأفكار الإبداعية، أو فرص العمل لتحويل رؤيتك إلى واقع.",
      rightHeading: "من أنا؟",
      rightText: "أنا مطور واجهات أمامية شغوف ومخلص. امتلك المهارات اللازمة لتطوير تطبيقات سهلة الاستخدام وقابلة للتطوير تجعل مشروعك ناجحًا."
    }
  }
};
