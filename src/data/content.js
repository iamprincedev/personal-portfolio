export const profile = {
  name: "Prince Kumar",
  role: "Full Stack Developer",
  email: "prince200221@gmail.com",
  phone: "+91 8678073094",
  github: "https://www.github.com/iamprincedev",
  linkedin: "https://www.linkedin.com/in/prince-kumar-84328b23a",
  leetcode: "https://leetcode.com/heyy_prince",
  leetcodeHandle: "heyy_prince",
  tagline:
    "I build backend systems that don\u2019t fall over \u2014 clean auth, solid schemas, APIs that actually hold up.",
};

export const stats = [
  { label: "status", value: "open_to_work" },
  { label: "stack", value: "MERN + Java" },
  { label: "grad_year", value: "2026" },
  { label: "rank", value: "AIR 60, AINCAT 2026" },
];

export const skills = [
  {
    group: "Languages",
    items: ["Java", "JavaScript", "Python", "C", "C++"],
  },
  {
    group: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "SCSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "PHP", "REST APIs"],
  },
  {
    group: "Data",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    group: "Auth & Tooling",
    items: ["JWT", "RBAC", "Git", "Postman", "Multer", "ImageKit"],
  },
  {
    group: "Core CS",
    items: ["DSA", "OOP", "DBMS", "System Design basics"],
  },
];

export const projects = [
  {
    id: "interview-ai",
    tag: "MERN / AI",
    name: "Interview-AI",
    method: "POST",
    endpoint: "/api/resume/compare",
    description:
      "A resume comparison tool \u2014 upload two versions (or your resume against a target job description) and it flags what\u2019s weak, what\u2019s missing, and what to fix, instead of just spitting out a generic score.",
    highlights: [
      "Side-by-side resume comparison with section-level diffing",
      "Highlights weak or missing areas with specific improvement notes",
      "MERN stack, session-based analysis flow",
      "Currently in active development",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "in_progress",
    repo: "https://github.com/iamprincedev/interview-ai",
  },
  {
    id: "tunify",
    tag: "backend",
    name: "Tunify",
    method: "GET",
    endpoint: "/api/tunify/tracks",
    description:
      "A music-streaming backend built solo, with role-based access for artists and listeners. The part I\u2019m proudest of: authentication and file handling that actually hold up \u2014 hashed passwords, signed cookies, and cloud media that doesn\u2019t choke on upload.",
    highlights: [
      "JWT auth with bcrypt hashing and secure, httpOnly cookie sessions",
      "Role-based access control separating Artist / Listener / Admin",
      "Music & album upload pipeline via Multer + ImageKit cloud storage",
      "Mongoose schemas for Users, Music and Albums with real validation",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "ImageKit"],
    status: "shipped",
    repo: "https://github.com/iamprincedev/tunify-backend",
  },
  {
    id: "pixora",
    tag: "full stack",
    name: "Pixora",
    method: "GET",
    endpoint: "/api/feed",
    description:
      "A full-stack social media platform for creating and sharing posts \u2014 built to get comfortable with feed logic and data modeling at a slightly bigger scale than a typical CRUD app.",
    highlights: [
      "Post creation, retrieval and feed management via REST APIs",
      "MongoDB schemas for users, posts and interactions",
      "React frontend consuming a custom Express API",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "shipped",
    repo: "https://github.com/iamprincedev/pixora",
  },
  {
    id: "starkify",
    tag: "frontend",
    name: "Starkify",
    method: "GET",
    endpoint: "/ui/components",
    description:
      "A responsive React front end built to practice component architecture and UI polish \u2014 dynamic data rendering against mock APIs, styled with Tailwind.",
    highlights: [
      "Responsive UI built with React + Tailwind CSS",
      "Mock API integration for dynamic data rendering and testing",
      "Focus on clean, reusable component structure",
    ],
    stack: ["React", "Tailwind CSS", "Mock API"],
    status: "shipped",
    repo: "https://github.com/iamprincedev/starkify",
  },
  {
    id: "calmchor",
    tag: "mobile",
    name: "CalmChor",
    method: "GET",
    endpoint: "/api/quiz/session",
    description:
      "An Android quiz app that pulls a fresh set of 10 random questions per session and shows a clean right/wrong breakdown once you submit \u2014 built to be fast and distraction-free.",
    highlights: [
      "Firebase Auth + Realtime Database for session and score storage",
      "Randomized question sets per session via REST calls",
      "Post-submission result screen with answer review",
    ],
    stack: ["Java", "Android Studio", "Firebase", "REST API"],
    status: "shipped",
    repo: "https://github.com/iamprincedev/calmchor",
  },
  {
    id: "prince-store",
    tag: "e-commerce",
    name: "Prince Store",
    method: "GET",
    endpoint: "/store/products",
    description:
      "A PHP-based e-commerce storefront \u2014 product catalog, cart and checkout flow, and a lightweight admin panel for managing inventory, built without a framework to get the fundamentals of server-side rendering and session handling right.",
    highlights: [
      "Product catalog with cart and checkout flow",
      "Admin panel for managing products and inventory",
      "Session-based cart handling in core PHP",
    ],
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    status: "shipped",
    repo: "https://github.com/iamprincedev/myWeb",
  },
];

export const timeline = [
  {
    year: "2024 \u2013 2026",
    title: "Master of Computer Applications",
    org: "Anugrah Narayan College, Patna \u00b7 Patliputra University",
    note: "Graduating 2026",
  },
  {
    year: "2026",
    title: "AIR 60 \u2014 AINCAT",
    org: "Naukri Campus",
    note: "All-India rank, national coding assessment",
  },
  {
    year: "2021 \u2013 2024",
    title: "Bachelor of Computer Applications",
    org: "CIMAGE Group of Institutions, Patna",
    note: "First Class with Distinction",
  },
  {
    year: "2023",
    title: "Certification \u2014 C & C++ Programming",
    org: "IIT Bombay Spoken Tutorial",
    note: null,
  },
];
