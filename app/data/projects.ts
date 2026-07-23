// ผลงานและโปรเจกต์
// รูปภาพ: public/images/projects
// เอกสาร PDF: public/documents/projects
// ทุกข้อมูลของหน้า Case Study อยู่ใน details ของโปรเจกต์นั้น
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
      role: "Frontend & Tester ",
      roleDescription: "UI components & Test execution & bug tracking",
      features: [
        { number: "01", title: "Speech to Text", description: "Transcribes recorded customer calls into text for further analysis." },
        { number: "02", title: "Conversation Analysis", description: "Uses AI to understand important details and patterns in each conversation." },
        { number: "03", title: "Structured Insights", description: "Extracts products, issues, solutions, and employee performance signals." },
      ],
      gallery: [
        { image: "/images/projects/giewbu-cover2.jpg", caption: "Automated Insights & CRM Linking: Displays real-time call data, AI scores (CSAT/QA), and active customer warranties instantly.", wide: false, fit: "contain" },
        { image: "/images/projects/giewbu-award.jpg", caption: "Best AI Prototype for Real-World Impact Award at IT Empowering Day 2026.", wide: false, fit: "cover" },
    
      ],
      collaborators: [], // ตัวอย่าง: ["Name One", "Name Two"]
      recognition: {
        title: "Best AI Prototype for Real-World Impact Award",
        organization: "Bangkok University",
      },
    },
  },
  {
    number: "02",
    slug: "findty",
    title: "Findty",
    course: "Web Application Development",
    description: "A community discovery platform for finding independent places through locally curated lists.",
    responsibility: "Built reusable UI components, integrated a map API, and created responsive search and place-detail experiences.",
    outcome: "Completed the end-to-end user flow from discovery to saved place collections.",
    tags: ["Next.js", "Map API", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com/",
    figma: "https://figma.com/",
    documentation: "/images/projects/FindTy.pdf",
    image: "/images/projects/findty1.jpg",
    tone: "violet",
    featured: false,
    details: {
      highlight: "",
      overviewLabel: "OVERVIEW",
      headline: "Helping people discover small places with big stories.",
      overview: [
        "Findty brings independent cafés, shops, and community spaces together through thoughtfully curated collections.",
        "The experience focuses on simple discovery, useful location details, and saving places for later.",
      ],
      role: "Frontend Developer",
      roleDescription: "Interface Design & Map Experience",
      features: [
        { number: "01", title: "Local Discovery", description: "Browse curated independent places by area and category." },
        { number: "02", title: "Map Experience", description: "Explore locations through an interactive and responsive map." },
        { number: "03", title: "Saved Collections", description: "Keep interesting places together for future visits." },
      ],
      gallery: [
        { image: "", caption: "Discovery and search interface.", wide: false, fit: "contain" },
        { image: "", caption: "Map and place-detail experience.", wide: false, fit: "contain" },
      ],
      collaborators: [],
      recognition: { title: "", organization: "" },
    },
  },
  {
    number: "03",
    slug: "signal-analytics",
    title: "Signal Analytics",
    course: "Data Visualization",
    description: "A dashboard that translates noisy operational data into concise, actionable product insights.",
    responsibility: "Prepared the dataset, designed the information hierarchy, and developed interactive charts and filters.",
    outcome: "Presented the dashboard as a final course project with clear data-driven recommendations.",
    tags: ["React", "Python", "REST API"],
    github: "https://github.com/",
    demo: "",
    figma: "",
    documentation: "", // ตัวอย่าง: "/documents/projects/signal-analytics.pdf"
    image: "",
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
      role: "Data & Frontend Developer",
      roleDescription: "Data Preparation, Visualization & Interaction",
      features: [
        { number: "01", title: "Data Preparation", description: "Cleans and structures source data for consistent reporting." },
        { number: "02", title: "Interactive Charts", description: "Presents trends and comparisons through focused visualizations." },
        { number: "03", title: "Actionable Findings", description: "Connects important signals with clear recommendations." },
      ],
      gallery: [
        { image: "", caption: "Dashboard overview and key metrics.", wide: false, fit: "contain" },
        { image: "", caption: "Interactive charts, filters, and detailed analysis.", wide: false, fit: "contain" },
      ],
      collaborators: [],
      recognition: { title: "", organization: "" },
    },
  },
];

export type Project = (typeof projects)[number];
