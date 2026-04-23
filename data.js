// =============================================
//  PORTFOLIO DATA — Menuka Dewsith
// =============================================

const SKILLS_DATA = [
  {
    category: "Languages",
    icon: "fa-solid fa-code",
    items: ["JavaScript", "Python", "SQL"]
  },
  {
    category: "Frontend",
    icon: "fa-solid fa-palette",
    items: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: "fa-solid fa-server",
    items: ["Node.js", "Express.js"]
  },
  {
    category: "Database",
    icon: "fa-solid fa-database",
    items: ["PostgreSQL", "MySQL"]
  },
  {
    category: "Tools & DevOps",
    icon: "fa-solid fa-screwdriver-wrench",
    items: ["Git", "GitHub", "Docker", "Figma"]
  }
];

const PROJECTS_DATA = [
  {
    id: "01",
    title: "Developer Growth OS",
    description: "A system designed to track developer productivity, learning patterns, and coding consistency.",
    features: [
      "Tracks daily coding activity and GitHub commits",
      "Visual dashboard with analytics",
      "Helps developers stay consistent and improve over time"
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    demo: "#",
    github: "#"
  },
  {
    id: "02",
    title: "Learning Intelligence Tracker",
    description: "An application that helps users track what they learn daily and identify patterns in their learning process.",
    features: [
      "Daily learning logs",
      "Progress tracking and insights",
      "Structured data storage with PostgreSQL"
    ],
    stack: ["React", "Express", "PostgreSQL"],
    demo: "#",
    github: "#"
  },
  {
    id: "03",
    title: "Job Application Tracker",
    description: "A tool to manage and track job applications efficiently with CRUD operations and relational database design.",
    features: [
      "Track applied jobs, status, and notes",
      "Organized dashboard for job search",
      "CRUD operations with relational database"
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    demo: "#",
    github: "#"
  },
  {
    id: "04",
    title: "Real-Time Chat Application",
    description: "A real-time messaging application with user authentication and instant communication via WebSockets.",
    features: [
      "Instant messaging using WebSockets",
      "User authentication system",
      "Responsive UI"
    ],
    stack: ["React", "Node.js", "Socket.io"],
    demo: "#",
    github: "#"
  }
];

const PROCESS_DATA = [
  { num: "01", text: "I design clean frontend-backend architectures before writing a single line of code." },
  { num: "02", text: "I use PostgreSQL with proper relational database design — normalized schemas, meaningful relationships." },
  { num: "03", text: "I write modular, maintainable, and scalable code that future me (and teammates) can actually read." },
  { num: "04", text: "I prioritize performance, structure, and clarity in every project — not just shipping fast." }
];

const COURSES_DATA = [
  { icon: "fa-solid fa-diagram-project", name: "Data Structures & Algorithms" },
  { icon: "fa-solid fa-database", name: "Database Management Systems" },
  { icon: "fa-solid fa-gears", name: "Software Engineering" },
  { icon: "fa-solid fa-globe", name: "Web Development" }
];

const BLOG_DATA = [
  {
    num: "01",
    title: "How I Designed a PostgreSQL Database for a Real Project",
    description: "A deep dive into the decisions, trade-offs, and lessons learned while designing production-grade relational schemas from scratch.",
    link: "#"
  },
  {
    num: "02",
    title: "What I Learned Building My First Full-Stack App",
    description: "Honest reflections on the journey from idea to deployed app — the wins, the bugs, and the things nobody tells you upfront.",
    link: "#"
  },
  {
    num: "03",
    title: "Common Mistakes I Made as a CS Student",
    description: "A candid look at the pitfalls I fell into early on and how I corrected my approach to learning and building.",
    link: "#"
  }
];

const CONTACT_DATA = [
  { icon: "fa-solid fa-envelope", label: "your-email@example.com", href: "mailto:your-email@example.com" },
  { icon: "fab fa-github", label: "github.com/yourusername", href: "https://github.com/yourusername" },
  { icon: "fab fa-linkedin", label: "linkedin.com/in/yourprofile", href: "https://linkedin.com/in/yourprofile" }
];
