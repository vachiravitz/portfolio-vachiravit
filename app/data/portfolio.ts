export const profile = {
  name: "YOUR NAME",
  initials: "YN",
  role: "Computer Science Student & Creative Developer",
  intro:
    "I turn complex ideas into clear, useful digital experiences—combining thoughtful engineering with a sharp eye for product and detail.",
  email: "hello@yourname.dev",
  location: "Bangkok, Thailand",
  availability: "Open to internships & collaborations",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "Linkedin" },
    { label: "Discord", href: "https://discord.com/", icon: "MessageCircle" },
    { label: "Facebook", href: "https://facebook.com/", icon: "Facebook" },
  ],
};

export const about = {
  lead: "Curious by nature. Systematic by training. Human-first by choice.",
  body: [
    "I’m a Computer Science student interested in the space where technology, design, and real human needs meet. I enjoy breaking down ambiguous problems, learning fast, and building solutions that feel simple on the surface.",
    "My goal is to grow into a software engineer who can contribute across the product lifecycle—from understanding the problem to shipping a polished, reliable experience.",
  ],
  details: [
    { label: "Education", value: "B.Sc. in Computer Science", icon: "GraduationCap" },
    { label: "Focus", value: "Frontend & full-stack products", icon: "Focus" },
    { label: "Interests", value: "UX, AI, creative technology", icon: "Sparkles" },
    { label: "Soft skills", value: "Collaboration, ownership, adaptability", icon: "Users" },
  ],
};

export const skillGroups = [
  { title: "Programming", index: "01", skills: ["JavaScript", "TypeScript", "Python", "Java"] },
  { title: "Frontend", index: "02", skills: ["React", "Next.js", "Tailwind CSS", "HTML / CSS"] },
  { title: "Backend", index: "03", skills: ["Node.js", "Express", "REST APIs", "Authentication"] },
  { title: "Database", index: "04", skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
  { title: "Tools", index: "05", skills: ["Git", "GitHub", "Figma", "Postman"] },
  { title: "Other", index: "06", skills: ["Responsive Design", "Data Structures", "Agile", "Cloud Basics"] },
];

export const projects = [
  {
    number: "01",
    title: "Pulse — Study Companion",
    description:
      "A focused learning workspace that brings tasks, study sessions, and progress insights into one calm experience.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://example.com/",
    tone: "blue",
    featured: true,
  },
  {
    number: "02",
    title: "Local Lens",
    description:
      "A community discovery platform for finding independent places through thoughtful, locally curated lists.",
    tags: ["Next.js", "Map API", "Tailwind"],
    github: "https://github.com/",
    demo: "https://example.com/",
    tone: "violet",
  },
  {
    number: "03",
    title: "Signal Analytics",
    description:
      "A visual dashboard that translates noisy operational data into concise, actionable product insights.",
    tags: ["React", "Python", "REST API"],
    github: "https://github.com/",
    demo: null,
    tone: "slate",
  },
];

export const certificates = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2025", code: "RWD", tone: "blue" },
  { title: "Foundations of UX Design", issuer: "Google", date: "2025", code: "UX", tone: "violet" },
  { title: "Cloud Practitioner Essentials", issuer: "AWS", date: "2024", code: "AWS", tone: "slate" },
];

export const activities = [
  {
    type: "Hackathon",
    date: "FEB 2026",
    title: "University Innovation Sprint",
    description: "Built and pitched an accessible campus navigation prototype with a four-person team in 36 hours.",
  },
  {
    type: "Volunteer",
    date: "NOV 2025",
    title: "Code for Community",
    description: "Helped secondary school students learn the basics of creative coding through hands-on workshops.",
  },
  {
    type: "Workshop",
    date: "AUG 2025",
    title: "Designing with AI",
    description: "Explored practical human-in-the-loop workflows for prototyping responsible AI experiences.",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Activities", href: "#activities" },
];
