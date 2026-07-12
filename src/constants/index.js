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
  SiFigma,
  SiAxios,
  SiReactrouter,
} from "react-icons/si";
import HubRoundedIcon from "@mui/icons-material/HubRounded";

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

    subtitle:
      "Official event platform for attendee registration, workshop management, and conference information.",

    shortDescription:
      "A full-stack multilingual event platform featuring attendee registration, workshop enrollment, dynamic content management, and an administrative dashboard built for a national Islamic conference.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Full-Stack Team",

    client: "GamifierSA",

    image: "/projects/IslamicEvent/qiam islamic.png",

    platform: "Landing Page",

    industry: "Events",

    gallery: [
      "/projects/IslamicEvent/qiam islamic.png",
      "/projects/IslamicEvent/moltaqa1.png",
      "/projects/IslamicEvent/moltaqa2.png",
    ],

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
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
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
        name: "REST API",
        icon: HubRoundedIcon,
        color: "#56cfc3",
      },
    ],

    demoUrl: "https://islamicvaluesforum.org/",

    githubUrl: null,

    color: "#2E8B57",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "The Islamic Values Forum platform is the official digital experience for a national conference focused on promoting Islamic values and community engagement. Beyond presenting event information, the platform streamlines the complete attendee journey—from discovering the forum and exploring speakers, workshops, and schedules to registering online through a guided multi-step process. Administrators can efficiently manage registrations, workshops, participants, and dynamic website content from a centralized dashboard. Built with Laravel, Inertia.js, React, and MySQL, the application delivers the responsiveness of a modern single-page application while leveraging Laravel's robust backend architecture.",

    problem: [
      "The event relied heavily on manual registration and participant management processes.",
      "Organizers needed a centralized platform to publish event information and manage attendees.",
      "Participants required a simple and intuitive online registration experience.",
      "Workshop enrollment needed to be integrated into the registration workflow.",
      "Content such as speakers, schedules, and workshops had to be easily manageable without modifying the source code.",
    ],

    solution: [
      "Developed a modern landing page showcasing the event, speakers, workshops, agenda, and sponsors.",
      "Implemented a secure multi-step attendee registration workflow with server-side validation.",
      "Built workshop enrollment functionality directly into the registration process.",
      "Created an administrative dashboard for managing participants, registrations, workshops, and event content.",
      "Integrated Laravel, Inertia.js, React, and MySQL to deliver a responsive single-page experience while maintaining a scalable backend architecture.",
    ],

    role: {
      title: "Full-Stack Developer",

      description:
        "Designed and developed the complete application, including the frontend, backend, database architecture, registration workflows, administrative dashboard, and business logic while ensuring responsiveness, security, and maintainability.",

      responsibilities: [
        "Designed the overall system architecture",
        "Developed the React frontend and integrated it with the Laravel backend using Inertia.js.",
        "Built Laravel backend logic and APIs",
        "Designed the MySQL database schema",
        "Implemented attendee registration workflows",
        "Developed workshop enrollment functionality",
        "Built the administrative dashboard",
        "Implemented server-side validation and secure form handling",
        "Integrated dynamic content management",
        "Optimized responsiveness and application performance",
      ],
    },

    features: [
      "Modern event landing page",
      "Multi-step attendee registration",
      "Workshop enrollment",
      "Speaker profiles",
      "Conference agenda",
      "Sponsor showcase",
      "Administrative dashboard",
      "Participant management",
      "Registration tracking",
      "Dynamic content management",
      "Responsive design",
      "Multilingual support",
      "Server-side Validation",
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
      "A multilingual healthcare platform connecting patients with clinics through online appointment booking and management.",

    shortDescription:
      "A production-ready healthcare platform featuring clinic discovery, appointment booking, multilingual support, role-based dashboards, and complete clinic management for patients, clinic owners, and administrators.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Frontend Team",

    client: "GamifierSA",

    image: "/projects/NearClinic/clinic.jpg",

    platform: "Web Platform",

    industry: "Healthcare",

    gallery: [
      "/projects/NearClinic/clinic.jpg",
      "/projects/NearClinic/nearclinic1.png",
      "/projects/NearClinic/nearclinic2.png",
      "/projects/NearClinic/nearclinic3.png",
      "/projects/NearClinic/nearclinic4.png",
      "/projects/NearClinic/nearclinic5.png",
      "/projects/NearClinic/nearclinic6.png",
      "/projects/NearClinic/nearclinic7.png",
      "/projects/NearClinic/nearclinic8.png",
    ],

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
      {
        name: "Axios",
        icon: SiAxios,
        color: "#5A29E4",
      },
      {
        name: "React Router",
        icon: SiReactrouter,
        color: "#CA4245",
      },
      {
        name: "React Hook Form",
        icon: SiReacthookform,
        color: "#EC5990",
      },
      {
        name: "i18next",
        icon: SiI18Next,
        color: "#26A69A",
      },
    ],

    demoUrl: "https://near-clinics.com/",

    githubUrl: null,

    color: "#3B82F6",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "NearClinic is a comprehensive healthcare platform that simplifies the process of finding healthcare providers and booking medical appointments online. The platform supports three different user roles—patients, clinic owners, and super administrators—each with dedicated dashboards and workflows. Patients can search nearby clinics, explore doctors and services, schedule appointments, and manage their bookings. Clinic owners can manage clinics, doctors, services, working hours, appointments, and patients from a centralized dashboard, while administrators oversee users and clinic approvals across the platform. As a Frontend Developer, I built responsive user interfaces, integrated REST APIs, implemented authentication flows, client-side caching, multilingual support, RTL layouts, and dark/light themes to deliver a fast, scalable, and user-friendly healthcare experience.",

    problem: [
      "Patients struggled to find nearby clinics and book appointments efficiently.",
      "Clinic owners relied on fragmented tools to manage doctors, services, schedules, and patient appointments.",
      "The platform required separate workflows for patients, clinic owners, and administrators while maintaining a consistent user experience.",
      "The application needed full Arabic and English localization with RTL support.",
      "Frequent API requests and dynamic healthcare data required efficient client-side caching and state management.",
    ],

    solution: [
      "Built a responsive React application supporting patients, clinic owners, and super administrators.",
      "Integrated REST APIs using Axios with React Query for data fetching, caching, synchronization, and error handling.",
      "Implemented secure authentication and protected route flows for multiple user roles.",
      "Developed multilingual support using i18next with seamless RTL/LTR switching.",
      "Implemented dark and light themes while maintaining a consistent design system across the platform.",
      "Created reusable frontend components and responsive layouts optimized for desktop, tablet, and mobile devices.",
    ],

    role: {
      title: "Frontend Developer",

      description:
        "Responsible for developing the complete frontend application, integrating backend REST APIs, implementing authentication and booking workflows, optimizing client-side performance with React Query, and delivering a fully responsive multilingual healthcare experience supporting multiple user roles.",

      responsibilities: [
        "Developed reusable React and TypeScript components",
        "Integrated REST APIs using Axios",
        "Implemented React Query caching and server-state management",
        "Handled API loading, success, and error states",
        "Built authentication and authorization flows",
        "Implemented appointment booking workflows",
        "Developed responsive layouts for all screen sizes",
        "Implemented Arabic & English localization using i18next",
        "Built RTL/LTR language support",
        "Implemented dark and light themes",
        "Collaborated closely with backend developers",
        "Optimized frontend performance and user experience",
      ],
    },

    features: [
      "Patient authentication",
      "Clinic owner authentication",
      "Super administrator dashboard",
      "Clinic discovery",
      "Google Maps integration",
      "Advanced clinic search & filtering",
      "Clinic profiles",
      "Doctor management",
      "Medical services management",
      "Doctor schedules",
      "Clinic availability management",
      "Multi-step appointment booking",
      "Appointment management",
      "Patient management",
      "Clinic registration",
      "User management",
      "Clinic administration",
      "Responsive design",
      "Arabic & English localization",
      "RTL/LTR support",
      "Dark & light themes",
    ],
  },
  {
    // =====================================================
    // Basic Information
    // =====================================================

    id: 3,

    slug: "montasib-platform",

    title: "Montasib",

    subtitle:
      "Enterprise B2B/B2C marketplace connecting businesses, suppliers, and customers across Saudi Arabia.",

    shortDescription:
      "A multilingual marketplace platform enabling businesses and consumers to discover products, publish listings, manage services, communicate in real time, organize events, and streamline commercial transactions.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Frontend Team",

    client: "GamifierSA",

    image: "/projects/Montassib/montasib.jpg",

    platform: "Marketplace",

    industry: "E-Commerce",

    gallery: [
      "/projects/Montassib/montasib.jpg",
      "/projects/Montassib/montassib1.png",
      "/projects/Montassib/montassib2.png",
      "/projects/Montassib/montassib3.png",
      "/projects/Montassib/montassib4.png",
      "/projects/Montassib/montassib5.png",
      "/projects/Montassib/montassib6.png",
      "/projects/Montassib/montassib7.png",
    ],

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
      {
        name: "REST APIs",
        icon: SiAxios,
        color: "#5A29E4",
      },
      {
        name: "React Hook Form",
        icon: SiReacthookform,
        color: "#EC5990",
      },
      {
        name: "Zod",
        icon: SiZod,
        color: "#3E67B1",
      },
      {
        name: "i18next",
        icon: SiI18Next,
        color: "#26A69A",
      },
    ],

    demoUrl: "https://montasib.com/",

    githubUrl: null,

    color: "#F59E0B",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "Montasib is a large-scale multilingual B2B/B2C marketplace developed for the Saudi Arabian market. The platform brings together suppliers, businesses, and customers through product listings, service directories, event management, real-time messaging, procurement workflows, and commercial networking. Built as a modern React application, it delivers a responsive user experience while integrating seamlessly with backend REST APIs to provide fast, scalable, and reliable business operations.",

    problem: [
      "Businesses lacked a centralized platform for discovering suppliers, services, and commercial opportunities.",
      "Users needed an efficient marketplace supporting products, services, events, and business networking in one place.",
      "The application had to provide a complete Arabic and English experience with full RTL support.",
      "Large amounts of marketplace data required efficient client-side caching and optimized loading.",
      "Multiple business workflows required intuitive and responsive user experiences across desktop and mobile devices.",
    ],

    solution: [
      "Developed a scalable React and TypeScript frontend using reusable and maintainable component architecture.",
      "Integrated REST APIs with React Query for server-state management, caching, background synchronization, and optimized data fetching.",
      "Implemented multilingual support using i18next with complete RTL compatibility for Arabic users.",
      "Built responsive interfaces with Tailwind CSS following mobile-first design principles.",
      "Implemented complex authentication flows, form validation, and user interactions using React Hook Form and Zod.",
      "Delivered consistent UI patterns, error handling, loading states, and smooth navigation across the entire platform.",
    ],

    role: {
      title: "Frontend Developer",

      description:
        "Responsible for developing production-ready frontend features across multiple business modules, integrating backend APIs, implementing multilingual support, optimizing application performance, and delivering responsive user experiences for a large-scale enterprise marketplace.",

      responsibilities: [
        "Developed reusable React and TypeScript components",
        "Integrated REST APIs using Axios and React Query",
        "Implemented client-side caching and server-state management",
        "Handled API loading, success, and error states",
        "Built authentication and user onboarding flows",
        "Implemented multilingual support using i18next",
        "Developed full RTL compatibility for Arabic",
        "Created responsive layouts with Tailwind CSS",
        "Implemented complex forms using React Hook Form and Zod",
        "Optimized frontend performance and user experience",
        "Collaborated closely with backend developers during feature integration",
        "Converted Figma designs into production-ready interfaces",
      ],
    },

    features: [
      "Product marketplace",
      "Supply & demand listings",
      "Business service directory",
      "Business event management",
      "Event booking system",
      "Supplier profiles",
      "Marketplace listing management",
      "Real-time messaging",
      "Notifications center",
      "User dashboard",
      "Profile management",
      "Advanced search and filtering",
      "Responsive interface",
      "Arabic & English localization",
      "RTL support",
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
      "AI-powered knowledge management platform for organizations and enterprise teams.",

    shortDescription:
      "A modern enterprise platform combining a responsive marketing website with an administrative dashboard to help organizations centralize, organize, and share institutional knowledge.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Production",

    duration: "2025",

    team: "Frontend Team",

    client: "ShareFiring",

    image: "/projects/Sahrefiring/sharefiring1.png",

    platform: "Web Platform",

    industry: "Knowledge Management",

    gallery: [
      "/projects/Sahrefiring/sharefiring1.png",
      "/projects/Sahrefiring/sharefiring2.png",
      "/projects/Sahrefiring/sharefiring3.png",
    ],
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
      "ShareFiring is an enterprise knowledge management platform designed to help organizations centralize, organize, and share institutional knowledge. The platform combines a modern marketing website that presents the product and its capabilities with an administrative dashboard for managing users, organizational content, and platform resources. As a Frontend Developer, I contributed to building responsive interfaces, integrating frontend functionality with the Laravel backend through Inertia.js, and delivering a consistent user experience across both the public website and the administration portal.",

    problem: [
      "Organizations needed a centralized platform to preserve and organize institutional knowledge.",
      "The product required a professional marketing website to clearly communicate its value proposition.",
      "Administrators needed an intuitive dashboard to manage users and platform resources efficiently.",
      "The application had to deliver a responsive and consistent user experience across desktop and mobile devices.",
    ],

    solution: [
      "Developed responsive React interfaces for both the landing page and administrative dashboard.",
      "Integrated frontend pages with Laravel backend endpoints using Inertia.js.",
      "Built reusable UI components with Material UI to improve consistency and maintainability.",
      "Implemented responsive layouts, interactive forms, and frontend validation to deliver a smooth user experience.",
    ],

    role: {
      title: "Frontend Developer",

      description:
        "Contributed to the frontend development of both the marketing website and the administrative dashboard. Worked with React, Material UI, and Inertia.js to build responsive interfaces, integrate backend data, implement application flows, and deliver a polished user experience while collaborating closely with backend developers.",

      responsibilities: [
        "Developed the responsive landing page",
        "Built administrative dashboard interfaces",
        "Developed reusable React components",
        "Integrated Laravel backend using Inertia.js",
        "Implemented frontend forms and validation",
        "Handled authentication and protected frontend routes",
        "Implemented CRUD interfaces",
        "Built responsive layouts for desktop, tablet, and mobile",
        "Improved UI consistency using Material UI components",
        "Collaborated with backend developers to integrate APIs and business logic",
      ],
    },

    features: [
      "Responsive marketing website",
      "Administrative dashboard",
      "Authentication flows",
      "User management interface",
      "Content management interface",
      "Knowledge resource management",
      "Contact and lead request forms",
      "CRUD management screens",
      "Responsive design",
      "Material UI component system",
      "Laravel + Inertia.js integration",
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
      "Full-stack practice project built to explore modern web application architecture and backend development.",

    shortDescription:
      "A full-stack social networking application developed as a hands-on learning project to practice React, Express.js, PostgreSQL, authentication, REST APIs, and MVC architecture.",

    // =====================================================
    // Hero
    // =====================================================

    status: "Learning Project",

    duration: "2024",

    team: "Personal Project",

    client: "Self",

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
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#000000",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Sequelize",
        icon: SiSequelize,
        color: "#52B0E7",
      },
    ],

    demoUrl: null,

    githubUrl: "https://github.com/Mohamed-Messaoudene/social-media-app",

    color: "#FF6B6B",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "This project was built as a practical full-stack learning experience to understand how modern web applications are designed and developed from scratch. Rather than focusing on solving a business problem, the goal was to gain hands-on experience with frontend and backend development, database design, authentication, REST APIs, and application architecture. The application allows users to create accounts, publish posts, interact through likes and comments, manage profiles, and communicate with a backend powered by Express.js and PostgreSQL using the Sequelize ORM.",

    problem: [
      "Gain practical experience building a complete full-stack application.",
      "Understand how frontend and backend communicate through REST APIs.",
      "Practice designing relational databases using PostgreSQL and Sequelize ORM.",
      "Learn authentication, authorization, and protected routes.",
      "Apply the MVC architecture in a real-world backend project.",
      "Build reusable React components and responsive user interfaces.",
    ],

    solution: [
      "Developed a complete Express.js backend following the MVC architecture.",
      "Designed a normalized PostgreSQL database using Sequelize ORM.",
      "Implemented secure user authentication and authorization.",
      "Created RESTful APIs for posts, users, comments, and social interactions.",
      "Built a responsive React frontend using Material UI.",
      "Connected the frontend to backend APIs using Axios with proper error handling and state management.",
    ],

    role: {
      title: "Full-Stack Developer",

      description:
        "Designed and developed the entire application independently as a practical learning project, covering frontend development, backend architecture, database design, authentication, and API integration.",

      responsibilities: [
        "Designed the PostgreSQL database schema",
        "Implemented Sequelize ORM models and relationships",
        "Built RESTful APIs with Express.js",
        "Applied the MVC architecture",
        "Implemented user authentication and authorization",
        "Created reusable React components",
        "Built responsive Material UI interfaces",
        "Integrated frontend with backend APIs",
        "Handled API requests, validation, and error states",
        "Tested and debugged the complete application",
      ],
    },

    features: [
      "User registration & authentication",
      "Secure login and protected routes",
      "User profiles",
      "Create, edit and delete posts",
      "Like and comment system",
      "Personalized news feed",
      "RESTful API architecture",
      "PostgreSQL database with Sequelize ORM",
      "Responsive Material UI interface",
      "MVC backend architecture",
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
    "Practice project exploring multiple authentication strategies with Passport.js.",

  shortDescription:
    "A full-stack authentication application built to practice local authentication, session management, and OAuth login with Google, GitHub, and Facebook using Passport.js.",

  // =====================================================
  // Hero
  // =====================================================

  status: "Learning Project",

  duration: "2024",

  team: "Personal Project",

  client: "Self",

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
      name: "Express.js",
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
    "This project was built as a practical learning experience focused entirely on authentication and authorization. The objective was to understand how different authentication strategies are implemented in modern web applications using Passport.js. The application includes user registration, login, OAuth authentication with Google, GitHub, and Facebook, secure session management, and protected routes. After successful authentication, users are redirected to a simple welcome page, allowing the project to focus exclusively on implementing and understanding authentication workflows rather than application features.",

  problem: [
    "Learn how authentication works in modern web applications.",
    "Understand the differences between local authentication and OAuth providers.",
    "Practice implementing secure session-based authentication.",
    "Explore Passport.js strategies for multiple authentication providers.",
    "Build reusable authentication flows that can be integrated into larger applications.",
  ],

  solution: [
    "Implemented local username/password authentication using Passport.js.",
    "Integrated OAuth authentication with Google, GitHub, and Facebook.",
    "Configured secure session management with Express.",
    "Protected authenticated routes using Passport middleware.",
    "Built React authentication pages with validation and error handling.",
    "Created a simple authenticated dashboard to verify successful login flows.",
  ],

  role: {
    title: "Full-Stack Developer",

    description:
      "Designed and developed the complete authentication system independently as a practical learning project, focusing on implementing secure authentication strategies, OAuth integrations, session management, and frontend authentication flows.",

    responsibilities: [
      "Implemented Passport.js authentication strategies",
      "Built local username/password authentication",
      "Integrated Google OAuth",
      "Integrated GitHub OAuth",
      "Integrated Facebook OAuth",
      "Configured Express session management",
      "Protected application routes",
      "Developed React login and registration pages",
      "Handled authentication errors and validation",
      "Tested and validated complete authentication workflows",
    ],
  },

  features: [
    "User registration",
    "Local email/password authentication",
    "Google OAuth login",
    "GitHub OAuth login",
    "Facebook OAuth login",
    "Secure session management",
    "Protected routes",
    "Persistent user sessions",
    "Responsive authentication pages",
    "Authenticated welcome page",
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
    "Full-stack practice project built with Laravel, Inertia.js and React to explore modern Laravel application architecture.",

  shortDescription:
    "A full-stack social networking application developed as a hands-on learning project to practice Laravel, Inertia.js, React, MySQL, authentication, Eloquent ORM, and full-stack SPA development.",

  // =====================================================
  // Hero
  // =====================================================

  status: "Learning Project",

  duration: "2024",

  team: "Personal Project",

  client: "Self",

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
    "This project was built as a practical learning experience to explore Laravel's full-stack development workflow using Inertia.js and React. The objective was to understand how Laravel can power modern single-page applications without building a separate REST API. Throughout the project, I implemented user authentication, post management, comments, likes, user profiles, and database relationships while gaining hands-on experience with Laravel's ecosystem, including Eloquent ORM, migrations, validation, middleware, routing, and authentication.",

  problem: [
    "Gain practical experience with the Laravel framework and its ecosystem.",
    "Understand the Laravel + Inertia.js + React architecture for building modern SPAs.",
    "Learn database modeling and relationships using Eloquent ORM.",
    "Practice authentication, authorization, validation, and middleware.",
    "Explore Laravel routing, controllers, migrations, and business logic organization.",
    "Build a complete full-stack application using Laravel as the backend foundation.",
  ],

  solution: [
    "Built the backend using Laravel with a clean MVC architecture.",
    "Developed a React frontend powered by Inertia.js for seamless page navigation.",
    "Designed a relational MySQL database using Eloquent models and relationships.",
    "Implemented authentication, authorization, request validation, and protected routes.",
    "Created reusable frontend components with Material UI.",
    "Integrated frontend and backend without a traditional REST API using Inertia.js.",
  ],

  role: {
    title: "Full-Stack Developer",

    description:
      "Designed and developed the complete application independently as a practical Laravel learning project, covering backend development, database design, frontend implementation, authentication, and Laravel best practices.",

    responsibilities: [
      "Designed the MySQL database schema",
      "Created Laravel migrations and seeders",
      "Built Eloquent models and relationships",
      "Developed Laravel controllers and business logic",
      "Implemented authentication and authorization",
      "Applied request validation and middleware",
      "Configured application routing with Laravel",
      "Integrated React with Laravel using Inertia.js",
      "Built reusable Material UI components",
      "Implemented CRUD operations and social interactions",
    ],
  },

  features: [
    "User registration & authentication",
    "Secure login and protected pages",
    "User profiles",
    "Create, edit and delete posts",
    "Like and comment system",
    "News feed",
    "Laravel MVC architecture",
    "Eloquent ORM relationships",
    "Inertia.js SPA architecture",
    "Responsive Material UI interface",
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
