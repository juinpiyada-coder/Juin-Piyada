export const portfolioData = {
  personal: {
    name: "Juin Piyada",
    kanjiName: "樹陰", // Stylized kanji (Juin)
    title: "Software Developer & Backend Developer",
    location: "Kolkata, West Bengal, India",
    email: "juinpiyada1@gmail.com",
    phone: "+91 8240345541",
    github: "https://github.com/juinpiyada",
    linkedin: "https://www.linkedin.com/in/juinpiyada/",
    resumeUrl: "/Juin_Piyada_Resume.pdf",
    avatar: "/juinpiyada.png",
    tagline: "Building scalable web applications, robust REST APIs, and database-driven backend architectures.",
    summary: "Software Developer and Backend Developer specializing in scalable web applications, REST APIs, backend services, and database-driven systems. Hands-on experience across Node.js, Express.js, React.js, PHP, PostgreSQL, MySQL, and Prisma, leveraging AI-assisted and agentic workflows into dependable software."
  },

  metrics: [
    { label: "Production Platforms", value: "3+", suffix: "", description: "High-traffic systems deployed & maintained" },
    { label: "APIs & Microservices", value: "35+", suffix: "", description: "Engineered with Node.js, Express & PHP" },
    { label: "Academic Degree", value: "BCA", suffix: " '25", description: "Swami Vivekananda Institute of Modern Science" },
    { label: "Database Architectures", value: "100%", suffix: " ACID", description: "PostgreSQL, MySQL, SQL & Prisma" }
  ],

  philosophy: [
    {
      kanji: "和",
      concept: "Wa (Harmony)",
      english: "Harmonious Systems",
      desc: "Balancing client-side elegance with server-side resilience. Every interface, API contract, and database query is crafted to work in seamless equilibrium."
    },
    {
      kanji: "静",
      concept: "Shizuka (Serenity)",
      english: "Clean Code & Reliability",
      desc: "Minimizing cognitive load through declarative architectures, predictable state management, and robust error-handling pipelines."
    },
    {
      kanji: "匠",
      concept: "Takumi (Craftsmanship)",
      english: "Uncompromising Detail",
      desc: "Devotion to engineering mastery—from microsecond API response optimizations to AI-assisted workflows that elevate speed and reliability."
    }
  ],

  experience: [
    {
      role: "Backend Developer",
      company: "KhanaOS",
      location: "Kolkata, India",
      period: "May 2026 – Present",
      type: "Full-time Backend",
      highlights: [
        "Develop high-throughput Node.js REST APIs and backend services using Prisma ORM and PostgreSQL.",
        "Design scalable database schemas, business logic, secure API integrations, and backend workflows.",
        "Perform end-to-end API testing, system debugging, error handling, optimization, and production support.",
        "Leverage AI-assisted and agentic workflows for rapid coding, testing, debugging, and comprehensive code analysis."
      ],
      technologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "REST APIs", "AI Agents", "System Design", "Git"]
    },
    {
      role: "Full Stack Developer",
      company: "Aimtech Dynamics",
      location: "Kolkata, India",
      period: "Jun 2025 – Present",
      type: "Full Stack Engineering",
      highlights: [
        "Develop responsive web applications using React.js, Node.js, PHP, PostgreSQL, and MySQL.",
        "Build secure REST APIs, database solutions, responsive UI, and seamless frontend-backend integrations.",
        "Implement end-to-end application workflows, UI/UX, database schema design, and system integration.",
        "Perform functional, API, integration, and performance testing with production debugging.",
        "Apply AI-assisted and agentic coding workflows for swift implementation, testing, documentation, and analysis."
      ],
      technologies: ["React.js", "Node.js", "PHP", "PostgreSQL", "MySQL", "Vite", "UI/UX", "API Testing"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications & Software Systems",
      institution: "Swami Vivekananda Institute of Modern Science",
      location: "Kolkata, West Bengal, India",
      year: "Aug 2022 – Jul 2025",
      period: "2022 – 2025",
      gpa: "BCA Graduate",
      achievements: [
        "Specialized in Software Engineering, Database Systems, Web Development, and Core Programming (C, Python, Java/JS).",
        "Built full-stack web and database management projects adhering to modern engineering standards."
      ]
    }
  ],

  certifications: [
    {
      title: "DevOps Engineer Learning Plan",
      issuer: "AWS",
      year: "Certified"
    },
    {
      title: "WordPress Website Development",
      issuer: "Coursera",
      year: "Certified"
    },
    {
      title: "AI for All",
      issuer: "NVIDIA",
      year: "Certified"
    },
    {
      title: "Cybersecurity Awareness",
      issuer: "HP LIFE",
      year: "Certified"
    }
  ],

  projects: [
    {
      id: "campusone",
      title: "CampusOne – School ERP",
      subtitle: "Full-Stack School Management ERP Platform",
      category: "Full Stack ERP Application",
      period: "2025 – 2026",
      featured: true,
      kanji: "学園",
      accent: "#B8764B",
      overview: "A comprehensive full-stack school ERP platform engineered using React.js, Node.js, Express.js, and PostgreSQL featuring role-based workflows, REST APIs, database management, responsive UI, testing, and system integration.",
      roleDetails: "Lead Full-Stack & Backend Developer — Designed PostgreSQL schemas, built secure role-based access control (RBAC) across Administrators, Teachers, and Students, developed Node.js/Express.js REST APIs, and delivered high-performance responsive UI.",
      techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "REST APIs", "JWT", "Tailwind CSS", "Git"],
      keyFeatures: [
        "Role-Based Access Control (RBAC) for Admins, Teachers, Students & Parents",
        "Optimized relational database schema in PostgreSQL with indexed queries",
        "High-performance REST API endpoints for attendance, grades, and fee collection",
        "Responsive, modern UI dashboard with real-time academic workflows"
      ],
      metrics: {
        roles: "Multi-Role RBAC",
        db: "PostgreSQL Relational DB",
        api: "Sub-50ms REST APIs"
      },
      codeSnippet: `// Node.js & Express School ERP Role Guard
export const requireSchoolRole = (roles = []) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: "Forbidden: You do not have permissions to access this academic module."
      });
    }
    next();
  };
};`
    },

    {
      id: "helping-learn",
      title: "Helping Learn – LMS",
      subtitle: "Full-Stack E-Learning & Course Platform",
      category: "Full Stack Web Application",
      period: "2025",
      featured: true,
      kanji: "学習",
      accent: "#5E725F",
      overview: "An e-learning platform featuring an intuitive responsive UI, backend services, REST APIs, database integration, student-instructor application workflows, testing, and debugging.",
      roleDetails: "Backend & Full-Stack Developer — Built backend services in Node.js and Express.js, structured database relations, implemented course enrollment logic, progress tracking, and student-teacher feedback channels.",
      techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Prisma", "Vite", "Tailwind CSS"],
      keyFeatures: [
        "Dynamic course curriculum builder and interactive learning modules",
        "Student enrollment tracking with real-time completion analytics",
        "Secure REST APIs with robust token verification and rate limiting",
        "Fully responsive interface optimized for desktop, tablet, and mobile"
      ],
      metrics: {
        platform: "Responsive Web LMS",
        db: "Relational DB",
        testing: "End-to-End API Tested"
      },
      codeSnippet: `// Course Enrollment Transaction Logic
export async function enrollStudentInCourse(req, res) {
  const { courseId } = req.body;
  const studentId = req.user.id;
  
  try {
    const enrollment = await prisma.$transaction(async (tx) => {
      const activeCourse = await tx.course.findUnique({ where: { id: courseId } });
      if (!activeCourse) throw new Error("Course not found");
      
      return await tx.enrollment.create({
        data: { courseId, studentId, enrolledAt: new Date() }
      });
    });
    return res.status(201).json({ status: true, data: enrollment });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
}`
    },

    {
      id: "diamond-pest-control",
      title: "Diamond Pest Control",
      subtitle: "Enterprise Business Management & Operations Platform",
      category: "Full Stack Application",
      period: "2025",
      featured: true,
      kanji: "管理",
      accent: "#2D3A4B",
      overview: "A business management system engineered using React, Flutter, PHP APIs, and MySQL featuring responsive web frontend, mobile application, backend database integration, testing, and production support.",
      roleDetails: "Backend & Systems Developer — Built PHP REST APIs and MySQL database schemas, implemented service booking workflows, client tracking, and mobile-to-backend API integrations.",
      techStack: ["PHP", "MySQL", "React", "Flutter", "REST APIs", "PHP API Development", "Git"],
      keyFeatures: [
        "End-to-end service appointment scheduling and technician dispatch system",
        "Clean PHP REST API architecture with MySQL relational database integration",
        "Cross-platform synchronization between React web portal and Flutter mobile app",
        "Automated client invoicing, status alerts, and service history logs"
      ],
      metrics: {
        api: "PHP RESTful APIs",
        mobile: "Flutter + React Web",
        db: "MySQL Database"
      },
      codeSnippet: `<?php
// PHP REST API Controller - Service Booking Endpoint
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $clientId = filter_var($input['client_id'], FILTER_VALIDATE_INT);
    $serviceType = htmlspecialchars(strip_tags($input['service_type']));

    $stmt = $pdo->prepare("INSERT INTO service_bookings (client_id, service_type, created_at) VALUES (:client_id, :service_type, NOW())");
    $result = $stmt->execute([':client_id' => $clientId, ':service_type' => $serviceType]);

    echo json_encode(['status' => (bool)$result, 'booking_id' => $pdo->lastInsertId()]);
    exit;
}`
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 94, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Modern functional components, hooks, state architecture, component lifecycle" },
      { name: "Vite", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", description: "Lightning-fast build tooling, HMR, bundling, modern ESM pipelines" },
      { name: "Responsive Web Design", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Mobile-first layouts, flexbox, CSS grid, adaptive breakpoints" },
      { name: "UI/UX", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "Intuitive user flows, wireframing, clean aesthetics, accessibility" },
      { name: "HTML5 & CSS3", level: 96, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Semantic markup, CSS animations, custom properties, modern styling" }
    ],
    backend: [
      { name: "Node.js", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "REST architectures, asynchronous I/O, middleware pipelines, backend workflows" },
      { name: "Express.js", level: 94, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "API routing, authentication, request validation, robust error handling" },
      { name: "PHP", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", description: "PHP API development, PDO prepared statements, secure backend business logic" },
      { name: "REST APIs", level: 96, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", description: "Contract design, endpoint serialization, token security, error status codes" },
      { name: "API Integration", level: 94, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", description: "Third-party services, webhooks, frontend-to-backend data synchronization" }
    ],
    databasesCloud: [
      { name: "PostgreSQL", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Relational schemas, foreign keys, index optimization, complex queries" },
      { name: "MySQL", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Database design, schema normalization, transactional integrity" },
      { name: "Prisma ORM", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", description: "Type-safe database queries, schema migrations, relation modeling" },
      { name: "Database Design", level: 94, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", description: "Schema modeling, data constraints, performance tuning, normalization" },
      { name: "Git & GitHub", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Version control, branching, pull requests, automated collaboration" }
    ],
    languages: [
      { name: "JavaScript", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Python", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "SQL", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML5 / CSS3", level: 96, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ],
    aiAgentic: [
      { name: "AI Agents", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "AI-assisted development, prompt engineering, agentic coding workflows" },
      { name: "LLM Integration", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", description: "Integrating intelligent LLM endpoints and automated workflows" }
    ]
  },

  honors: [
    {
      title: "AWS DevOps Engineer Learning Plan",
      organization: "Amazon Web Services (AWS)",
      year: "Certified",
      description: "Comprehensive training and certification covering cloud deployment workflows, CI/CD, and DevOps best practices."
    },
    {
      title: "NVIDIA AI for All & Coursera WordPress",
      organization: "NVIDIA & Coursera",
      year: "Certified",
      description: "Foundational AI architectures, prompt principles, plus professional web and content management systems."
    },
    {
      title: "HP LIFE Cybersecurity Awareness",
      organization: "HP LIFE Foundation",
      year: "Certified",
      description: "Data protection, secure authentication, API security, and defenses against digital vulnerabilities."
    }
  ]
};
