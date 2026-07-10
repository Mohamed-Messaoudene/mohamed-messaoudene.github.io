import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiMui,
  SiMongodb,
  SiPassport,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiInertia,
  SiReactquery,
  SiPhp,
  SiBootstrap,
  SiJavascript,
  SiOpenstreetmap,
  SiHtml5,
  SiI18Next,
  SiRedux,
  SiReacthookform,
  SiZod,
  SiGraphql,
  SiJsonwebtokens,
  SiStripe,
  SiPaypal,
  SiRedis,
  SiSequelize,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiFigma
} from "react-icons/si";

import { MdCloud } from "react-icons/md";

import {
  Language as LanguageIcon,
  Tune as TuneIcon,
  Dns as DnsIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Bolt as BoltIcon,
  Security as SecurityIcon,
  DevicesRounded as DevicesRoundedIcon,
} from "@mui/icons-material";

// `core: true` renders as a solid filled chip — the skills you'd lead
// with in an interview. Everything else renders outlined: still fully
// visible, just visually secondary. No percentages — nobody can
// defend "why 85% and not 80%" under questioning, so we don't claim it.
export const skillCategories = [
  {
    title: "Frontend",
    icon: LanguageIcon,
    color: "#3f51b5",
    skills: [
      { name: "React", icon: SiReact, core: true },
      { name: "TypeScript", icon: SiTypescript, core: true },
      { name: "Tailwind CSS", icon: SiTailwindcss, core: true },
      { name: "Material UI", icon: SiMui, core: false },
      { name: "JavaScript (ES6+)", icon: SiJavascript, core: false },
      { name: "HTML5 / CSS3", icon: SiHtml5, core: false },
      { name: "Responsive Design", icon: DevicesRoundedIcon, core: false },
      { name: "i18n / RTL", icon: SiI18Next, core: false },
    ],
  },
  {
    title: "State & Data",
    icon: TuneIcon,
    color: "#9c27b0",
    skills: [
      { name: "React Query", icon: SiReactquery, core: true },
      { name: "Redux Toolkit", icon: SiRedux, core: true },
      { name: "Zustand", icon: BoltIcon, core: false },
      { name: "React Hook Form", icon: SiReacthookform, core: false },
      { name: "Zod", icon: SiZod, core: false },
    ],
  },
  {
    title: "Backend",
    icon: DnsIcon,
    color: "#4caf50",
    skills: [
      { name: "Laravel", icon: SiLaravel, core: true },
      { name: "Node.js", icon: SiNodedotjs, core: true },
      { name: "Express", icon: SiExpress, core: false },
      { name: "GraphQL", icon: SiGraphql, core: false },
      { name: "JWT / OAuth 2.0", icon: SiJsonwebtokens, core: false },
      { name: "RBAC", icon: SecurityIcon, core: false },
      { name: "Stripe", icon: SiStripe, core: false },
      { name: "PayPal", icon: SiPaypal, core: false },
    ],
  },
  {
    title: "Databases",
    icon: StorageIcon,
    color: "#ff9800",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, core: true },
      { name: "MySQL", icon: SiMysql, core: true },
      { name: "MongoDB", icon: SiMongodb, core: false },
      { name: "Redis", icon: SiRedis, core: false },
      { name: "Sequelize / ORMs", icon: SiSequelize, core: false },
    ],
  },
  {
    title: "Tools",
    icon: BuildIcon,
    color: "#607d8b",
    skills: [
      { name: "Git", icon: SiGit, core: true },
      { name: "GitHub", icon: SiGithub, core: true },
      { name: "Docker", icon: SiDocker, core: false },
      { name: "Linux", icon: SiLinux, core: false },
      { name: "Figma", icon: SiFigma, core: false },
    ],
  },
];

export const projects = [
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 1,

    slug: "islamic-values-forum",

    title: "Islamic Values Forum",

    subtitle: "Official landing page for a national Islamic values conference.",

    shortDescription:
      "A modern multilingual landing page presenting the forum's objectives, speakers, workshops, agenda, sponsors and registration experience.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Frontend Team",

    client: "GamifierSA",

    image: "/qiam islamic.png",

    platform: "Landing Page",

    industry: "Events",

    gallery: [],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Inertia.js",
        icon: SiInertia,
        color: "#9553E9",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
      },
    ],

    demoUrl: "https://islamicvaluesforum.org/",

    githubUrl: null,

    color: "#2E8B57",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "The Islamic Values Forum website serves as the official online presence of the conference, providing visitors with detailed information about the event, speakers, workshops, agenda, sponsors, and registration. The application focuses on delivering a clear, accessible, and responsive experience while maintaining a modern visual identity.",

    problem: [
      "The event required an official digital platform to present all conference information.",
      "Visitors needed a simple registration journey.",
      "The website had to remain fully responsive across all devices.",
      "The design needed to reflect the event's cultural identity while remaining modern.",
    ],

    solution: [
      "Developed a responsive landing page using React and Tailwind CSS.",
      "Implemented reusable UI components for easy maintenance.",
      "Integrated Laravel backend APIs using Inertia.js.",
      "Optimized performance and accessibility across modern browsers.",
    ],

    role: {
      title: "Frontend Developer",

      description:
        "Responsible for implementing the complete frontend experience, translating UI designs into reusable components, integrating backend data, and ensuring responsiveness and accessibility.",

      responsibilities: [
        "Developed reusable React components",
        "Integrated backend APIs",
        "Built responsive layouts",
        "Implemented interactive UI sections",
        "Optimized performance",
        "Collaborated with backend developers",
      ],
    },

    features: [
      "Event overview",
      "Workshop information",
      "Speaker profiles",
      "Conference agenda",
      "Sponsor showcase",
      "Registration flow",
      "Responsive design",
      "Modern landing page",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 2,

    slug: "near-clinic",

    title: "NearClinic",

    subtitle:
      "Healthcare platform for discovering clinics and booking appointments.",

    shortDescription:
      "A multilingual healthcare platform enabling patients to discover clinics, book appointments and manage healthcare services.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Frontend Team",

    client: "GamifierSA",

    image: "/clinic.jpg",

    platform: "Web Platform",

    industry: "Healthcare",

    gallery: [],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "React Query",
        icon: SiReactquery,
        color: "#FF4154",
      },
    ],

    demoUrl: "https://near-clinics.com/",

    githubUrl: null,

    color: "#3B82F6",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "NearClinic is a healthcare platform that enables patients to search for nearby clinics, explore healthcare providers, and book appointments online. It also provides dashboards for clinic owners to manage appointments and clinic information with complete Arabic and English support.",

    problem: [
      "Patients relied on manual appointment booking.",
      "Finding nearby clinics was time-consuming.",
      "Clinic owners lacked a centralized management platform.",
      "The platform required multilingual support.",
    ],

    solution: [
      "Built a responsive multilingual frontend.",
      "Integrated advanced search and filtering.",
      "Implemented appointment booking workflows.",
      "Connected frontend to REST APIs using React Query.",
    ],

    role: {
      title: "Frontend Developer",

      description:
        "Responsible for building the user interface, integrating APIs, implementing responsive layouts, and delivering a multilingual healthcare experience.",

      responsibilities: [
        "Developed reusable React components",
        "Integrated REST APIs",
        "Implemented responsive layouts",
        "Optimized application performance",
        "Implemented multilingual support",
        "Collaborated with backend developers",
      ],
    },

    features: [
      "Clinic search",
      "Advanced filtering",
      "Appointment booking",
      "Clinic profiles",
      "Doctor schedules",
      "Patient dashboard",
      "Clinic dashboard",
      "Arabic & English localization",
      "Responsive UI",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 3,

    slug: "montasib-platform",

    title: "Montasib",

    subtitle: "Enterprise B2B/B2C marketplace for the Saudi Arabian market.",

    shortDescription:
      "A multilingual marketplace connecting suppliers and buyers through product discovery, tenders, and price comparison.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Frontend Team",

    client: "GamifierSA",

    image: "/montasib.jpg",

    platform: "Marketplace",

    industry: "E-Commerce",

    gallery: [],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "React Query",
        icon: SiReactquery,
        color: "#FF4154",
      },
    ],

    demoUrl: "https://montasib.com/",

    githubUrl: null,

    color: "#F59E0B",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "Montasib is a large-scale marketplace designed for businesses and consumers in Saudi Arabia. The platform enables users to compare products, participate in tenders, discover suppliers, and manage procurement through a responsive multilingual interface.",

    problem: [
      "Businesses needed a centralized procurement platform.",
      "Users required efficient product comparison tools.",
      "The marketplace needed to support Arabic and English.",
      "Large datasets required fast and efficient loading.",
    ],

    solution: [
      "Developed a responsive React frontend.",
      "Integrated React Query for efficient server-state management.",
      "Implemented multilingual support.",
      "Built reusable UI components for scalability.",
    ],

    role: {
      title: "Frontend Developer",

      description:
        "Responsible for implementing responsive user interfaces, integrating backend APIs, optimizing performance, and contributing to a scalable multilingual marketplace.",

      responsibilities: [
        "Developed reusable UI components",
        "Integrated REST APIs",
        "Implemented multilingual support",
        "Built responsive layouts",
        "Optimized performance",
        "Collaborated with backend developers",
      ],
    },

    features: [
      "Product marketplace",
      "Supplier directory",
      "Tender management",
      "Product comparison",
      "Advanced search",
      "Responsive interface",
      "Arabic & English localization",
      "Performance optimization",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 4,

    slug: "sharefiring-platform",

    title: "ShareFiring",

    subtitle:
      "Freelance platform featuring a modern landing page and an administration dashboard.",

    shortDescription:
      "A responsive landing page and management dashboard built for a freelance platform, allowing administrators to manage users, content and platform operations.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Full-Stack Team",

    client: "ShareFiring",

    image: "/sharefirng landing page.png",

    platform: "Web Platform",

    industry: "Freelancing",

    gallery: [],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Inertia.js",
        icon: SiInertia,
        color: "#9553E9",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],

    demoUrl: "https://sharefiring.com/",

    githubUrl: null,

    color: "#1E90FF",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "ShareFiring is a freelancing platform consisting of a public-facing landing page and an administrative dashboard. The platform enables administrators to manage users, platform content and system resources through a clean and responsive interface.",

    problem: [
      "The platform required a professional online presence.",
      "Administrators needed a centralized dashboard.",
      "The interface had to be fully responsive.",
      "Frontend and backend integration needed to remain maintainable.",
    ],

    solution: [
      "Built a modern landing page.",
      "Developed responsive dashboard interfaces.",
      "Integrated Laravel APIs using Inertia.js.",
      "Created reusable UI components for scalability.",
    ],

    role: {
      title: "Full-Stack Developer",

      description:
        "Designed and implemented both the landing page and dashboard, integrated backend functionality, and ensured responsive and maintainable user interfaces.",

      responsibilities: [
        "Developed dashboard pages",
        "Built reusable React components",
        "Integrated Laravel backend",
        "Implemented responsive layouts",
        "Managed CRUD operations",
        "Optimized UI performance",
      ],
    },

    features: [
      "Landing page",
      "Admin dashboard",
      "User management",
      "Content management",
      "Responsive UI",
      "Authentication",
      "CRUD operations",
      "Modern interface",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 5,

    slug: "social-media-app",

    title: "Social Media App",

    subtitle:
      "Full-stack social networking platform with authentication and real-time interactions.",

    shortDescription:
      "A social networking application allowing users to create posts, interact with others through comments and likes, and build their own social network.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Completed",

    duration: "2024",

    team: "Personal Project",

    client: "Personal",

    image: "/social medea app.jpg",

    platform: "Web Application",

    industry: "Social Networking",

    gallery: [],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
    ],

    demoUrl: "https://social-media-j5ch.onrender.com/",

    githubUrl: "https://github.com/Mohamed-Messaoudene/social-media-app",

    color: "#FF6B6B",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "A complete full-stack social networking platform that enables users to create posts, upload content, comment, like posts, follow other users, and manage personal profiles using a secure authentication system.",

    problem: [
      "Learn full-stack application architecture.",
      "Implement authentication and authorization.",
      "Practice relational database design.",
      "Build scalable REST APIs.",
    ],

    solution: [
      "Built REST APIs using Express.js.",
      "Designed PostgreSQL database models.",
      "Implemented secure authentication.",
      "Developed responsive React interfaces.",
    ],

    role: {
      title: "Full-Stack Developer",

      description:
        "Designed, developed and deployed the entire application including frontend, backend, database architecture and authentication.",

      responsibilities: [
        "Designed database schema",
        "Built REST APIs",
        "Implemented authentication",
        "Developed React frontend",
        "Managed PostgreSQL database",
        "Deployed the application",
      ],
    },

    features: [
      "User authentication",
      "Create posts",
      "Like & comment",
      "Follow users",
      "User profiles",
      "News feed",
      "Responsive design",
      "REST API",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 6,

    slug: "authentication-system",

    title: "Authentication System",

    subtitle:
      "Complete authentication platform supporting multiple authentication strategies.",

    shortDescription:
      "A secure authentication system implementing local authentication alongside OAuth providers including Google, GitHub and Facebook using Passport.js.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Completed",

    duration: "2024",

    team: "Personal Project",

    client: "Personal",

    image: "/authentification.jpg",

    platform: "Web Application",

    industry: "Security",

    gallery: [],

    technologies: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
      },
      {
        name: "Passport.js",
        icon: SiPassport,
        color: "#34E27A",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
    ],

    demoUrl: null,

    githubUrl:
      "https://github.com/Mohamed-Messaoudene/passport-authentication-app",

    color: "#4ECDC4",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "A complete authentication platform built to explore different authentication strategies including local authentication, session-based authentication, and OAuth integrations with Google, GitHub and Facebook using Passport.js.",

    problem: [
      "Applications often require multiple authentication methods.",
      "Secure session management is essential.",
      "OAuth integrations can be complex.",
      "Authentication flows should remain reusable.",
    ],

    solution: [
      "Implemented Passport.js authentication strategies.",
      "Integrated Google, GitHub and Facebook OAuth.",
      "Configured secure session management.",
      "Built reusable authentication components.",
    ],

    role: {
      title: "Full-Stack Developer",

      description:
        "Designed and implemented the authentication architecture, backend APIs, frontend interfaces and OAuth integrations while ensuring secure user authentication.",

      responsibilities: [
        "Implemented Passport.js strategies",
        "Integrated OAuth providers",
        "Built authentication APIs",
        "Configured session management",
        "Developed frontend authentication pages",
        "Tested authentication flows",
      ],
    },

    features: [
      "Local authentication",
      "Google OAuth",
      "GitHub OAuth",
      "Facebook OAuth",
      "Session management",
      "Protected routes",
      "Role-based authentication",
      "Responsive interface",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 7,

    slug: "weather-forecasting-app",

    title: "Weather Forecasting App",

    subtitle:
      "Modern weather application with location detection and multi-day forecasts.",

    shortDescription:
      "A responsive weather application providing real-time weather conditions, location detection and five-day forecasts using external weather APIs.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Completed",

    duration: "2024",

    team: "Personal Project",

    client: "Personal",

    image: "/weather.jpg",

    platform: "Web Application",

    industry: "Weather",

    gallery: [],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
      {
        name: "OpenWeather API",
        icon: MdCloud,
        color: "#EB6E4B",
      },
      {
        name: "OpenCage API",
        icon: SiOpenstreetmap,
        color: "#7EBC6F",
      },
    ],

    demoUrl: "https://weathergeo.netlify.app/",

    githubUrl: "https://github.com/Mohamed-Messaoudene/react-weather-app",

    color: "#45B8AC",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "A modern weather application that provides current weather conditions and five-day forecasts. Users can search by city or use their current location to receive accurate weather information through third-party APIs.",

    problem: [
      "Users need quick access to accurate weather information.",
      "Searching locations manually can be inconvenient.",
      "Weather information should be presented clearly on all devices.",
      "API responses require efficient state management.",
    ],

    solution: [
      "Integrated OpenWeather API for forecasts.",
      "Implemented geolocation using OpenCage API.",
      "Built a responsive Material UI interface.",
      "Optimized API requests and loading states.",
    ],

    role: {
      title: "Frontend Developer",

      description:
        "Designed and developed the complete frontend application, integrated external APIs, and focused on delivering a responsive and intuitive weather experience.",

      responsibilities: [
        "Integrated weather APIs",
        "Implemented geolocation",
        "Built responsive UI",
        "Managed application state",
        "Handled API errors",
        "Optimized user experience",
      ],
    },

    features: [
      "Current weather",
      "5-day forecast",
      "City search",
      "Location detection",
      "Responsive design",
      "Weather icons",
      "API integration",
      "Loading states",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 8,

    slug: "social-media-laravel",

    title: "Social Media App",

    subtitle:
      "Full-stack social networking application built with Laravel and React.",

    shortDescription:
      "A Laravel-powered social networking platform allowing users to create posts, interact with others and manage personal profiles through a modern React interface.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Completed",

    duration: "2024",

    team: "Personal Project",

    client: "Personal",

    image: "/social medea laravel.jpg",

    platform: "Web Application",

    industry: "Social Networking",

    gallery: [],

    technologies: [
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Inertia.js",
        icon: SiInertia,
        color: "#9553E9",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
    ],

    demoUrl: null,

    githubUrl:
      "https://github.com/Mohamed-Messaoudene/social-media-app-with-laravel",

    color: "#9370DB",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "A social networking platform built with Laravel, Inertia.js and React that enables users to publish posts, interact through comments and likes, manage profiles and experience a seamless SPA architecture.",

    problem: [
      "Explore Laravel with Inertia.js architecture.",
      "Build a modern SPA without REST overhead.",
      "Implement authentication and social interactions.",
      "Practice scalable Laravel application structure.",
    ],

    solution: [
      "Built Laravel backend with Inertia.js.",
      "Developed React frontend components.",
      "Implemented authentication and authorization.",
      "Designed reusable application architecture.",
    ],

    role: {
      title: "Full-Stack Developer",

      description:
        "Developed the complete application including backend logic, database design, authentication, frontend interfaces and deployment configuration.",

      responsibilities: [
        "Developed Laravel backend",
        "Built React frontend",
        "Implemented authentication",
        "Designed MySQL database",
        "Created reusable components",
        "Integrated Inertia.js",
      ],
    },

    features: [
      "Authentication",
      "Posts",
      "Comments",
      "Likes",
      "User profiles",
      "SPA architecture",
      "Responsive interface",
      "Dashboard",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 9,

    slug: "stock-management-system",

    title: "Stock Management System",

    subtitle: "Inventory management system for products, users and invoices.",

    shortDescription:
      "A PHP-based inventory management application enabling businesses to efficiently manage products, stock levels, users and invoices.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Completed",

    duration: "2023",

    team: "Academic Project",

    client: "Academic",

    image: "/stock management.webp",

    platform: "Management System",

    industry: "Business",

    gallery: [],

    technologies: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
    ],

    demoUrl: null,

    githubUrl: "https://github.com/Mohamed-Messaoudene/stock-managment",

    color: "#F4A460",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "A stock management system developed to simplify inventory operations by managing products, users, stock movements and invoices through an intuitive administrative interface.",

    problem: [
      "Businesses require accurate inventory tracking.",
      "Manual stock management is time-consuming.",
      "Invoice generation should be centralized.",
      "Administrators need efficient product management.",
    ],

    solution: [
      "Developed a complete PHP MVC application.",
      "Implemented CRUD operations for inventory.",
      "Designed a relational MySQL database.",
      "Built responsive Bootstrap interfaces.",
    ],

    role: {
      title: "Full-Stack Developer",

      description:
        "Designed and developed the complete inventory management system, including database design, backend business logic and responsive administrative interfaces.",

      responsibilities: [
        "Designed database schema",
        "Developed PHP backend",
        "Implemented CRUD operations",
        "Managed inventory workflow",
        "Built Bootstrap UI",
        "Implemented invoice management",
      ],
    },

    features: [
      "Product management",
      "Inventory tracking",
      "User management",
      "Invoice management",
      "Authentication",
      "Reporting",
      "Responsive dashboard",
      "CRUD operations",
    ],
  },
];
export const heroText = `Building scalable, production-ready digital products like 
Dashboards, SaaS platforms, business systems & landing pages — 
crafted with React, TypeScript, Laravel & modern web technologies.`;

 /**
 * Single source of truth for the timeline, ordered chronologically
 * (oldest -> newest). To add a future role, just push a new object
 * with type: "experience" at the end of this array — the timeline,
 * colors, and animations all extend automatically.
 */
export const timelineData = [
  {
    type: "education",
    title: "ICT Engineer",
    org: "National Higher School of Telecommunications and ICT",
    location: "Oran, Algeria",
    duration: "Graduated: June 2025",
    color: "#607d8b",
    description:
      "Engineering degree covering the full foundation of modern software and communication systems.",
    tags: [
      "Software Engineering",
      "Web Development",
      "Database Systems",
      "Computer Networks",
      "Telecommunications",
    ],
  },
  {
    type: "experience",
    title: "Frontend Developer (Contract)",
    org: "GamifierSA",
    location: "Saudi Arabia (Remote)",
    duration: "April 2025 — May 2026",
    color: "#3f51b5",
    contributions: [
      "Delivered multiple production-ready projects — landing pages, dashboards, and full-featured platforms — including NearClinic and Montasib, serving Arabic and English-speaking users across Saudi Arabia",
      "Converted Figma designs into pixel-perfect, fully responsive UIs with smooth animations using Tailwind CSS and Material-UI",
      "Optimized API performance through React Query caching and request batching, improving load times and perceived speed across key user flows",
      "Developed reusable component libraries and consistent state management patterns adopted across the team, reducing development time on new features",
      "Participated in code reviews, bug fixing, performance improvements, and deployment preparation for production releases",
    ],
  },

  // 👇 Future roles go here, same shape as the GamifierSA entry above:
  // {
  //   type: "experience",
  //   title: "...",
  //   org: "...",
  //   location: "...",
  //   duration: "...",
  //   color: "#00897b",
  //   contributions: ["..."],
  // },
];
