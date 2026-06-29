export const profile = {
  name: "Tornov Dutta",
  email: "tornovdutta@gmail.com",
  resume: "/TornovDutta-Resume.pdf",
  phone: "+91 74396 76474",
  location: "Kolkata, West Bengal, India",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    leetcode: "https://leetcode.com/",
  },
};

export const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "Open-Source Contributor",
  "Problem Solver",
];

export const facts = [
  { icon: "📍", text: "Kolkata, West Bengal, India" },
  { icon: "🎓", text: "BCA — GPA 8.5 / 10.0" },
  { icon: "🧩", text: "300+ LeetCode problems · Knight Badge" },
  { icon: "🌱", text: "Open-source contributor" },
];

export const skills = [
  { title: "Languages", items: ["Java", "Python", "Golang"] },
  { title: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Spring Boot", "FastAPI", "Hibernate", "Microservices"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "H2"] },
  { title: "DevOps & Tools", items: ["Git", "GitHub", "Docker", "AWS", "Kafka", "GitHub Actions"] },
];

export const experience = [
  {
    role: "Open-Source Contributor",
    org: "GirlScript Summer of Code",
    date: "Oct 2024 – Nov 2024",
    points: [
      "Contributed to multiple open-source projects, fixing 10+ major bugs and improving overall code efficiency by 15%.",
      "Engineered and optimized frontend features using JavaScript & React, collaborating via Git/GitHub.",
      "Merged 5+ PRs across repositories — earned the Explorer Badge and Git Explorer – Level 1 Badge.",
      "Participated in feature discussions, code reviews, and issue resolution to enhance project quality.",
    ],
  },
];

export const projects = [
  {
    icon: "🧱",
    name: "VibeWall",
    desc: "A secure, anonymous confession & discussion platform for students. AI-powered content moderation screens every post, with server-side AES-256-GCM encryption, rotating JWT auth, Redis-cached feeds, and auto-expiring posts via MongoDB TTL indexes. Built on a clean, layered MVC architecture.",
    tags: ["Java 17", "Spring Boot", "MongoDB", "Redis", "JWT", "AES-256", "NVIDIA NIM", "Docker"],
    links: { code: "https://github.com/TornovDutta/VibeWall", live: "https://vibewall-ui.netlify.app" },
  },
  {
    icon: "📚",
    name: "AI-Powered Study Resource Generator",
    desc: "A backend that generates study notes, MCQ tests, and daily practice papers — and intelligently avoids redundant AI calls using semantic search. It checks PostgreSQL, then Pinecone vector similarity (0.85+ cosine) before generating, so even differently-worded requests reuse existing content. Includes scheduled email delivery and GitHub OAuth2.",
    tags: ["Spring Boot 3.5", "Java 17", "Pinecone", "NVIDIA NIM", "PostgreSQL", "Docker"],
    links: { code: "https://github.com/TornovDutta/AI-Powered-Study-Resource-Generator" },
  },
  {
    icon: "🎯",
    name: "Smart Resume Evaluation & Notification System",
    desc: "A recruitment platform where job seekers upload resumes and recruiters evaluate candidates via automated ATS scoring (Ollama LLaMA 3.2). Features top-K candidate ranking, dashboard filtering, and one-click automated selection/rejection emails to shortlisted candidates — no manual composition needed.",
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Hibernate", "Ollama", "Spring Security"],
    links: { code: "https://github.com/TornovDutta/Smart-Resume-Evaluation-and-Notification-System" },
  },
  {
    icon: "📣",
    name: "CampusWhisper",
    desc: "A responsive anonymous social platform with 8+ core features — posting, comments, reactions, notifications, and reporting. Modular dark-themed UI across 12+ screens, reducing repetitive frontend code by 30%.",
    tags: ["React 19", "Vite", "Tailwind", "Zustand", "Axios", "REST"],
    links: { code: "https://github.com/" },
  },
  {
    icon: "⚡",
    name: "FastAPI Blog API",
    desc: "A clean CRUD Blog API with 5+ REST endpoints for full post lifecycle. Relational schema with 100% validated request handling, automatic table creation, and a lightweight, scalable 4-module architecture.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "Uvicorn"],
    links: { code: "https://github.com/" },
  },
  {
    icon: "🤖",
    name: "AI GPT",
    desc: "A full-stack AI chatbot with real-time chat, user/assistant history, and REST-based response generation. Deployed across Vercel (frontend) and AWS EC2 (backend) with 5+ core chat functionalities.",
    tags: ["React", "Spring Boot", "Java", "Vercel", "AWS EC2"],
    links: { code: "https://github.com/", live: "#" },
  },
];

export const achievements = [
  { big: "300+", text: "LeetCode problems solved · Knight Badge & streaks" },
  { big: "5+", text: "Merged PRs during Hacktoberfest 2024 — official badge" },
  { big: "2×", text: "Hackathons — Hack4Bengal & Intercollege SIH" },
  { big: "8.5", text: "Cumulative GPA · BCA, Eminent College" },
];

export const education = {
  degree: "Bachelor of Computer Applications",
  org: "Eminent College of Management and Technology — Kolkata, West Bengal",
  gpa: "8.5 / 10.0",
};

export const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];
