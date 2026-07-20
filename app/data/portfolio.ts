/*
 * ================================================================
 * แก้ข้อมูล Portfolio ทั้งหมดได้ที่ไฟล์นี้ไฟล์เดียว
 * เปลี่ยนเฉพาะข้อความระหว่างเครื่องหมาย "..." และตัวเลข level
 * หากยังไม่มีลิงก์หรือรูป ให้ใส่ค่าว่าง ""
 * คู่มือฉบับเต็มอยู่ที่ CONTENT_GUIDE.md ในโฟลเดอร์หลัก
 * ================================================================
 */

export const profile = {
  // ข้อมูลหน้าหลัก (Home)
  name: "YOUR NAME",
  initials: "YN",
  role: "Computer Science Student & Creative Developer",
  headlineLine1: "Designing systems",
  headlineLine2: "that feel human.",
  intro:
    "I turn complex ideas into clear, useful digital experiences—combining thoughtful engineering with a sharp eye for product and detail.",
  email: "hello@yourname.dev",
  phone: "",
  location: "Bangkok, Thailand",
  availability: "Open to internships & collaborations",
  currentFocus: "AI × Human Experience",
  resumeUrl: "/resume.pdf",
  // ใส่รูปที่ public/profile.png แล้วเปลี่ยนเป็น "/profile.png"
  photo: "",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "Linkedin" },
    { label: "Twitter / X", href: "https://x.com/your-username", icon: "Twitter" },
  ],
};

export const about = {
  lead: "Curious by nature. Systematic by training. Human-first by choice.",
  body: [
    "I’m a Computer Science student interested in the space where technology, design, and real human needs meet. I enjoy breaking down ambiguous problems, learning fast, and building solutions that feel simple on the surface.",
    "My goal is to grow into a software engineer who can contribute across the product lifecycle—from understanding the problem to shipping a polished, reliable experience.",
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science",
      school: "YOUR UNIVERSITY",
      period: "2023 — Present",
      description: "Relevant coursework: Web Development, Data Structures, Database Systems, Software Engineering and Human–Computer Interaction.",
    },
  ],
  details: [
    { label: "Career focus", value: "Frontend & full-stack products", icon: "Focus" },
    { label: "Interests", value: "UX, AI, creative technology", icon: "Sparkles" },
    { label: "Soft skills", value: "Collaboration, ownership, adaptability", icon: "Users" },
  ],
};

// level เป็นตัวเลข 0–100 ใช้แสดงระดับความเชี่ยวชาญ
export const skillGroups = [
  {
    title: "Programming Languages",
    index: "01",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 78 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    index: "02",
    skills: [
      { name: "React", level: 84 },
      { name: "Next.js", level: 74 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend & APIs",
    index: "03",
    skills: [
      { name: "Node.js / Express", level: 76 },
      { name: "REST APIs", level: 80 },
      { name: "Authentication", level: 68 },
    ],
  },
  {
    title: "Databases",
    index: "04",
    skills: [
      { name: "PostgreSQL / MySQL", level: 75 },
      { name: "MongoDB", level: 66 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    title: "Tools & Software",
    index: "05",
    skills: [
      { name: "Git / GitHub", level: 83 },
      { name: "Figma", level: 78 },
      { name: "Postman", level: 76 },
    ],
  },
  {
    title: "Other Technologies",
    index: "06",
    skills: [
      { name: "Responsive Design", level: 86 },
      { name: "Data Structures", level: 72 },
      { name: "Agile / Scrum", level: 68 },
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "Pulse — Study Companion",
    course: "Software Engineering Project",
    description:
      "A focused learning workspace that brings tasks, study sessions, and progress insights into one calm experience.",
    responsibility:
      "Designed the interface, developed the React frontend, connected REST APIs, and implemented the study-session analytics dashboard.",
    outcome: "Delivered a working MVP and improved task-completion flow based on usability feedback.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://example.com/",
    figma: "",
    // ตัวอย่าง: "/images/projects/pulse.jpg"
    image: "",
    tone: "blue",
    featured: true,
  },
  {
    number: "02",
    title: "Local Lens",
    course: "Web Application Development",
    description:
      "A community discovery platform for finding independent places through thoughtful, locally curated lists.",
    responsibility:
      "Built reusable UI components, integrated a map API, and created responsive search and place-detail experiences.",
    outcome: "Completed the end-to-end user flow from discovery to saved place collections.",
    tags: ["Next.js", "Map API", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com/",
    figma: "https://figma.com/",
    image: "",
    tone: "violet",
  },
  {
    number: "03",
    title: "Signal Analytics",
    course: "Data Visualization",
    description:
      "A visual dashboard that translates noisy operational data into concise, actionable product insights.",
    responsibility:
      "Prepared the dataset, designed the information hierarchy, and developed interactive charts and filters.",
    outcome: "Presented the dashboard as a final course project with clear data-driven recommendations.",
    tags: ["React", "Python", "REST API"],
    github: "https://github.com/",
    demo: "",
    figma: "",
    image: "",
    tone: "slate",
  },
];

// ถ้ายังไม่มีประสบการณ์งาน ให้ใช้ฝึกงาน งานพาร์ตไทม์ งานฟรีแลนซ์ หรือโปรเจกต์ทีมแทนได้
export const workExperience = [
  {
    role: "Frontend Developer Intern",
    company: "YOUR COMPANY",
    location: "Bangkok / Hybrid",
    period: "Jun 2025 — Aug 2025",
    summary: "Worked with a product team to improve customer-facing web experiences.",
    responsibilities: [
      "Developed responsive React components from product designs.",
      "Integrated REST APIs and handled loading, empty, and error states.",
      "Collaborated through Git, code reviews, and weekly sprint planning.",
    ],
    technologies: ["React", "JavaScript", "Git", "Figma"],
  },
];

export const activities = [
  {
    type: "Hackathon",
    date: "15–16 FEB 2026",
    title: "University Innovation Sprint",
    organization: "YOUR UNIVERSITY",
    role: "Frontend Developer / Team of 4",
    description: "Built and pitched an accessible campus navigation prototype within 36 hours.",
    result: "Finalist — Top 10 teams",
    image: "",
  },
  {
    type: "Technology Club",
    date: "NOV 2025",
    title: "Code for Community",
    organization: "Computer Science Club",
    role: "Workshop Volunteer",
    description: "Helped secondary-school students learn creative coding through hands-on activities.",
    result: "Supported 40+ participants",
    image: "",
  },
  {
    type: "Seminar",
    date: "22 AUG 2025",
    title: "Designing with AI",
    organization: "Tech Community Thailand",
    role: "Participant",
    description: "Explored human-in-the-loop workflows and responsible approaches to AI product design.",
    result: "Completed practical prototyping workshop",
    image: "",
  },
];

export const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2025",
    code: "RWD",
    tone: "blue",
    credentialUrl: "https://www.freecodecamp.org/",
    image: "",
  },
  {
    title: "Foundations of UX Design",
    issuer: "Google",
    date: "2025",
    code: "UX",
    tone: "violet",
    credentialUrl: "https://www.coursera.org/",
    image: "",
  },
  {
    title: "Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "2024",
    code: "AWS",
    tone: "slate",
    credentialUrl: "https://aws.amazon.com/training/",
    image: "",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "Certificates", href: "#certificates" },
];
