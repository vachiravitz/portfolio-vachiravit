// ผลงานและโปรเจกต์
// รูปภาพ: public/images/projects
// เอกสาร PDF: public/documents/projects
// ทุกข้อมูลของหน้า Case Study อยู่ใน details ของโปรเจกต์นั้น
// สีของหน้า Project เลือกด้วย tone: "blue", "violet" หรือ "slate"
// แก้ชุดสีของแต่ละ tone ได้ที่ app/case-study.css
export const projects = [
  {
    number: "01",
    slug: "giewbu-ai-project",
    title: "GIEWBU AI Project",
    course: "Award-winning AI Project",
    description: "An AI-powered system that turns call center conversations into structured, actionable insights.",
    responsibility: "Developed backend logic and API integrations for speech-to-text and conversation analysis.",
    outcome: "Best AI Prototype for Real-World Impact Award at Bangkok University.",
    tags: ["TypeScript", "Python", "JavaScript", "SQL"],
    github: "https://github.com/",
    demo: "",
    figma: "",
    documentation: "/images/projects/giewbu.pdf",
    image: "/images/projects/giewbu-cover.jpg", // รูปหน้าปกใน public/images/projects
    video: "",
    tone: "blue",
    featured: true,
    details: {
      highlight: "AWARD-WINNING AI PROJECT",
      overviewLabel: "OVERVIEW",
      headline: "Turning call center conversations into structured insights.",
      overview: [
        "GIEWBU AI transcribes an end-to-end AI voice analytics system utilizing Speech-to-Text and Llama 3 to transform unstructured calls into structured insights, while managing data seamlessly via Google Drive",
        "System identifies products, reported problems, suggested solutions, and employee performance signals from each conversation.",
      ],
      role: "Frontend & Tester & Document",
      roleDescription: "UI components & Test execution & bug tracking ",
      features: [
        { number: "01", title: "Speech to Text", description: "Transcribes recorded customer calls into text for further analysis." },
        { number: "02", title: "Conversation Analysis", description: "Uses AI to understand important details and patterns in each conversation." },
        { number: "03", title: "Structured Insights", description: "Extracts products, issues, solutions, and employee performance signals." },
      ],
      gallery: [
        { image: "/images/projects/giewbu-cover2.jpg", caption: "Automated Insights & CRM Linking: Displays real-time call data, AI scores (CSAT/QA), and active customer warranties instantly.", wide: false, fit: "contain" },
        { image: "/images/projects/giewbu-award.jpg", caption: "Best AI Prototype for Real-World Impact Award at IT Empowering Day 2026.", wide: false, fit: "cover" },
    
      ],
      collaborators: ['เขมเดช เหนียวแน่น', 'เอื้ออวัช เตชะวีรพงศ์', 'กัญญ์วรา บ่นหา', 'จีระเดช มักเจริญ'], // ตัวอย่าง: ["Name One", "Name Two"]
      recognition: {
        title: "Best AI Prototype for Real-World Impact Award",
        organization: "Bangkok University",
      },
    },
  },
  {
    number: "02",
    slug: "findty",
    title: "Findty Mobile App",
    course: "Web Application Development",
    description: "FindTy is a mobile application that helps online gamers discover and connect with gaming parties in real-time.",
    responsibility: "Built reusable UI components, integrated a map API, and created responsive search and place-detail experiences.",
    outcome: "Completed the end-to-end user flow from discovery to saved place collections.",
    tags: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/vachiravitz/findty_v3.git",
    demo: "",
    figma: "",
    documentation: "/images/projects/Findty.pdf",
    image: "/images/projects/findty1.jpg",
    video: "https://www.youtube-nocookie.com/embed/f78LjvoEWTc?autoplay=1&mute=1&loop=1&playlist=f78LjvoEWTc&controls=1&rel=0&playsinline=1",
    tone: "violet",
    featured: false,
    details: {
      highlight: "",
      overviewLabel: "OVERVIEW",
      headline: "Findty app for gamer to help them find freind",
      overview: [
        "FindTy is a Flutter and Firebase mobile application designed to help gamers instantly find and connect with gaming parties. Key features include adaptive room creation, real-time chat, and a comprehensive user rating system",
      ],
      role: "Full Stack",
      roleDescription: "Design & Connect database",
      features: [
        { number: "01", title: "Party System", description: "Discover, create, and join gaming rooms to connect with teammates in real-time." },
        { number: "02", title: "Real-time Chat", description: "Communicate with members inside the game room instantly without refreshing the screen." },
        { number: "03", title: "Review & Profile", description: "Manage personal profiles and rate gaming experiences with fellow players." },
      ],
      gallery: [
        { image: "/images/projects/findty3.jpg", caption: "Discovery and search interface.", wide: false, fit: "contain" },
        { image: "/images/projects/findty2.jpg", caption: "Map and place-detail experience.", wide: false, fit: "contain" },
      ],
      collaborators: ['เขมเดช เหนียวแน่น', 'เอื้ออวัช เตชะวีรพงศ์', 'กัญญ์วรา บ่นหา'],
      recognition: { title: "", organization: "" },
    },
  },
  {
    number: "03",
    slug: "phishing",
    title: "Phishing Website Detection",
    course: "Data Visualization",
    description: "A dashboard that translates noisy operational data into concise, actionable product insights.",
    responsibility: "Prepared the dataset, designed the information hierarchy, and developed interactive charts and filters.",
    outcome: "Presented the dashboard as a final course project with clear data-driven recommendations.",
    tags: ["Data Mining", "Machine Learning", "Weka", "Random Forest", "PhiUSiiL"],
    github: "https://github.com/",
    demo: "",
    figma: "",
    documentation: "/images/projects/DataMining.pdf", // ตัวอย่าง: "/documents/projects/signal-analytics.pdf"
    image: "/images/projects/datamine1.jpg",
    video: "",
    tone: "slate",
    featured: false,
    details: {
      highlight: "",
      overviewLabel: "OVERVIEW",
      headline: "Turning operational data into decisions people can act on.",
      overview: [
        "Signal Analytics organizes complex operational data into a clear dashboard for faster understanding.",
        "Interactive charts and filters help users move from an overview to the details behind each signal.",
      ],
      role: "Document Editor",
      roleDescription: "Managed report structure, authored the introduction and results discussion.",
      features: [
        { number: "01", title: "Report Structuring", description: "Organized the project report structure according to the designated template." },
        { number: "02", title: "Content Authoring", description: "Authored critical sections including the introduction, results discussion, conclusions, and recommendations." },
        { number: "03", title: "Bibliography Management", description: "Compiled and formatted the comprehensive bibliography for the research sources." },
      ],
      gallery: [
        { image: "/images/projects/datamine2.jpg", caption: "Dashboard overview and key metrics.", wide: false, fit: "contain" },
        { image: "/images/projects/datamine3.jpg", caption: "Interactive charts, filters, and detailed analysis.", wide: false, fit: "contain" },
      ],
      collaborators: ['เขมเดช เหนียวแน่น', 'เอื้ออวัช เตชะวีรพงศ์', 'กัญญ์วรา บ่นหา'],
      recognition: { title: "", organization: "" },
    },
  },
];

export type Project = (typeof projects)[number];
