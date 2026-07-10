// export const projects = [
//   {
//     id: 1,
//     title: "Islamic Values Forum – Landing Page",
//     description:
//       "A  landing page for a national Islamic values forum, presenting event objectives, agenda, speakers, workshops, registration flow, and sponsors. Designed for clarity, accessibility, and cultural relevance.",
//     image: "/qiam islamic.png",
//     technologies: [
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "Inertia.js",
//       "Laravel",
//     ],
//     githubUrl: null,
//     demoUrl: "https://islamicvaluesforum.org/",
//     color: "#2E8B57",
//   },

//   {
//     id: 2,
//     title: "NearClinic Platform (Frontend)",
//     description:
//       "A healthcare platform enabling patients to search and book clinics by location and services. Includes clinic detail pages, booking flow, and a dashboard for clinic owners to manage schedules and appointments, with full EN/AR support.",
//     image: "/clinic.jpg",
//     technologies: [
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "React Query",
//       "i18n",
//     ],
//     githubUrl: null,
//     demoUrl: "https://near-clinics.com/",
//     color: "#3B82F6",
//   },

//   {
//     id: 3,
//     title: "Montasib Platform (Frontend)",
//     description:
//       "A sophisticated B2B/B2C e-commerce platform for the Saudi market. Supports trade across sectors with price comparison, tender management, and a fully responsive multilingual (EN/AR) interface.",
//     image: "/montasib.jpg",
//     technologies: [
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "React Query",
//       "i18n",
//     ],
//     githubUrl: null,
//     demoUrl: "https://montasib.com/",
//     color: "#F59E0B",
//   },
//   {
//     id: 4,
//     title: "ShareFiring Landing Page & Dashboard",
//     description:
//       "A freelance project delivering a modern landing page and an interactive dashboard for managing content and users. Built with React, Tailwind CSS, Inertia.js, Laravel, and MySQL.",
//     image: "/sharefirng landing page.png",
//     technologies: ["React", "Tailwind CSS", "Inertia.js", "Laravel", "MySQL"],
//     githubUrl: null,
//     demoUrl: "https://sharefiring.com/",
//     color: "#1E90FF",
//   },
//   {
//     id: 5,
//     title: "Social Media App",
//     description:
//       "A full-stack social networking app with post sharing, comments, likes, and following/unfollowing user profiles.",
//     image: "/social medea app.jpg",
//     technologies: ["Node.js", "PostgreSQL", "React", "Material-UI"],
//     githubUrl: "https://github.com/Mohamed-Messaoudene/social-media-app",
//     demoUrl: "https://social-media-j5ch.onrender.com/",
//     color: "#FF6B6B",
//   },
//   {
//     id: 6,
//     title: "Authentication System",
//     description:
//       "An authentication system using Passport.js with OAuth2 (Google, GitHub, Facebook), session-based, and local strategies.",
//     image: "/authentification.jpg",
//     technologies: [
//       "Node.js",
//       "Express",
//       "Passport.js",
//       "MongoDB",
//       "React",
//       "Material-UI",
//     ],
//     githubUrl:
//       "https://github.com/Mohamed-Messaoudene/passport-authentication-app",
//     demoUrl: "",
//     color: "#4ECDC4",
//   },
//   {
//     id: 7,
//     title: "Weather Forecasting App",
//     description:
//       "A weather app with city search, location detection, and 5-day forecasts, using OpenWeather API and OpenCageData API.",
//     image: "/weather.jpg",
//     technologies: [
//       "React",
//       "Material-UI",
//       "OpenWeather API",
//       "OpenCageData API",
//     ],
//     githubUrl: "https://github.com/Mohamed-Messaoudene/react-weather-app",
//     demoUrl: "https://weathergeo.netlify.app/",
//     color: "#45B8AC",
//   },
//   {
//     id: 8,
//     title: "Social Media App with Laravel",
//     description:
//       "A social networking app built with Laravel and Inertia.js, including post sharing, comments, likes, and profile management.",
//     image: "/social medea laravel.jpg",
//     technologies: ["Laravel", "Inertia", "MySQL", "React", "Material-UI"],
//     githubUrl:
//       "https://github.com/Mohamed-Messaoudene/social-media-app-with-laravel",
//     demoUrl: null,
//     color: "#9370DB",
//   },
//   {
//     id: 9,
//     title: "Stock Management System",
//     description:
//       "A PHP-based system for managing products, users, and invoices, with a Bootstrap interface and MySQL backend.",
//     image: "/stock management.webp",
//     technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
//     githubUrl: "https://github.com/Mohamed-Messaoudene/stock-managment",
//     demoUrl: null,
//     color: "#F4A460",
//   },
// ];

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
} from "react-icons/si";

export const projects = [
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
    
    gallery: [
      "/projects/NearClinic/nearclinic1.png",
      "/projects/NearClinic/nearclinic2.png",
      "/projects/NearClinic/nearclinic3.png",
      "/projects/NearClinic/nearclinic4.png",
      "/projects/NearClinic/nearclinic5.png",
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
    ],

    demoUrl: "https://near-clinics.com/",

    githubUrl: "null",

    color: "#3B82F6",

    // =====================================================
    // Overview
    // =====================================================

    longDescription:
      "NearClinic is a healthcare platform that simplifies the process of finding nearby clinics, exploring medical services, and booking appointments online. The project includes patient-facing experiences, clinic profiles, appointment scheduling, and management dashboards for clinic owners, while providing full Arabic and English support.",

    problem: [
      "Patients relied on phone calls and manual appointment booking.",
      "Finding nearby clinics with suitable services was time-consuming.",
      "Clinic owners needed an efficient way to manage appointments.",
      "The platform had to support both Arabic and English users.",
    ],

    solution: [
      "Built a responsive multilingual frontend.",
      "Integrated advanced clinic search and filtering.",
      "Implemented a complete appointment booking workflow.",
      "Connected the application to REST APIs using React Query for efficient data management.",
    ],
    role: {
      title: "Frontend Developer",
      description:
        "Responsible for designing and implementing the complete user interface while collaborating with backend developers to integrate APIs and deliver a responsive multilingual experience.",

      responsibilities: [
        "Developed reusable React components",
        "Integrated REST APIs",
        "Implemented responsive layouts",
        "Optimized application performance",
        "Implemented multilingual support (EN/AR)",
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

    //     features: [
    //   {
    //     title: "Clinic Search",
    //     description:
    //       "Search clinics by location, specialty and available services.",
    //   },
    //   {
    //     title: "Appointment Booking",
    //     description:
    //       "Book appointments through a simple multi-step workflow.",
    //   },
    //   {
    //     title: "Patient Dashboard",
    //     description:
    //       "Manage appointments, profiles and booking history.",
    //   },
    //   {
    //     title: "Clinic Dashboard",
    //     description:
    //       "Manage schedules, appointments and clinic information.",
    //   },
    //   {
    //     title: "Responsive Design",
    //     description:
    //       "Optimized experience across desktop, tablet and mobile devices.",
    //   },
    //   {
    //     title: "Arabic & English",
    //     description:
    //       "Complete multilingual experience with RTL support.",
    //   },
    // ]
  },
];
export const heroText = `Building scalable, production-ready digital products like 
Dashboards, SaaS platforms, business systems & landing pages — 
crafted with React, TypeScript, Laravel & modern web technologies.`;

export /**
 * Single source of truth for the timeline, ordered chronologically
 * (oldest -> newest). To add a future role, just push a new object
 * with type: "experience" at the end of this array — the timeline,
 * colors, and animations all extend automatically.
 */
const timelineData = [
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
