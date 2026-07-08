export const profile = {
  name: "Tornov Dutta",
  email: "tornovdutta@outlook.com",
  resume: "/TornovDutta.pdf",
  phone: "+91 74396 76474",
  location: "Kolkata, West Bengal, India",
  socials: {
    github: "https://github.com/TornovDutta",
    linkedin: "https://www.linkedin.com/in/tornov-dutta/",
    leetcode: "https://leetcode.com/u/TornovDutta/",
    codeforces: "https://codeforces.com/profile/tornovdutta",
  },
};

export const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "Open-Source Contributor",
  "Problem Solver",
];

export const facts = [
  { text: "Kolkata, West Bengal, India" },
  { text: "BCA — CGPA 8.6 / 10.0" },
  { text: "300+ LeetCode problems solved" },
  { text: "Active open-source contributor" },
];

export const skills = [
  { title: "Languages", items: ["Java", "Python", "C++", "JavaScript", "TypeScript"] },
  { title: "Frontend", items: ["React.js", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend", items: ["Spring Boot", "FastAPI", "Hibernate", "Microservices"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "DevOps & Tools", items: ["GitHub", "Docker", "AWS", "DigitalOcean", "Playwright"] },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    org: "Stadia",
    date: "Apr 2026 – Jun 2026",
    points: [
      "Full Stack Development: Developed production-ready features using React.js, FastAPI, and MongoDB for client-facing applications.",
      "Backend & APIs: Built scalable REST APIs, optimized MongoDB queries, and integrated frontend services with backend systems.",
      "Testing & Deployment: Automated end-to-end testing using Playwright and deployed applications on DigitalOcean using GitHub workflows.",
      "Collaboration: Worked in Agile teams, participated in code reviews, bug fixing, and feature implementation while maintaining clean, production-quality code."
    ],
  },
  {
    role: "Open Source Contributor",
    org: "GirlScript Summer of Code",
    date: "Oct 2024 – Nov 2024",
    points: [
      "Open Source: Contributed to open-source projects by fixing bugs, developing React components, and collaborating through GitHub.",
      "Achievements: Merged 5+ pull requests, participated in code reviews, and earned the Explorer Badge and Git Explorer Level 1 Badge.",
    ],
  },
];

export const projects = [
  {
    name: "AI-Powered Study Resource Generator",
    desc: "A scalable backend application using Spring Boot to generate AI-powered study notes, practice papers, and quizzes. Features secure authentication via Spring Security and OAuth2, optimized content retrieval using semantic search, and automated recurring tasks.",
    tags: ["Java 17", "Spring Boot", "Spring Security", "Spring AI", "PostgreSQL", "JPA/Hibernate", "OAuth2", "Docker"],
    links: { code: "https://github.com/TornovDutta/AI-Powered-Study-Resource-Generator", live: "http://ec2-16-192-78-60.eu-north-1.compute.amazonaws.com:8080/api/v1/swagger-ui/index.html" },
  },
  {
    name: "VibeWall Anonymous Confession Platform",
    desc: "A scalable anonymous discussion backend with secure REST API architecture. Features JWT authentication, NVIDIA NIM (Llama 3.1) AI moderation pipeline, AES-GCM 256-bit encryption, and BCrypt password hashing.",
    tags: ["Spring Boot", "Java 17", "MongoDB", "Redis", "JWT", "Docker", "NVIDIA NIM API"],
    links: { code: "https://github.com/TornovDutta/VibeWall", live: "https://vibewall.me/" },
  }
];

export const achievements = [
  { big: "300+", text: "LeetCode problems solved · Knight Badge" },
  { big: "5+", text: "Merged PRs during Hacktoberfest 2024 — official badge" },
  { big: "2×", text: "Hackathons — Hack4Bengal & Smart India Hackathon (SIH)" },
  { big: "8.6", text: "Cumulative CGPA · BCA, Eminent College" },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    org: "Vellore Institute of Technology (VIT)",
    gpa: "2026 - 2028",
  },
  {
    degree: "Bachelor of Computer Applications",
    org: "Eminent College of Management and Technology",
    gpa: "CGPA: 8.6/10.0 (2023 - 2026)",
  }
];

export const navLinks = ["About", "Skills", "Experience", "Projects", "Profiles", "Contact"];
