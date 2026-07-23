// กิจกรรม รูปภาพวางไว้ใน public/images/activities
export const activities = [
  {
    type: "Personal Project",
    date: "7 June 2023",
    title: "FiveM Server",
    organization: "Bangkok University",
    role: "",
    description: "A custom multiplayer server project focused on gameplay systems, scripts, and community experience.",
    result: "View case details",
    image: "/images/activities/activity1.jpg",
    modal: {
      subtitle: "Custom multiplayer server development",
      tags: ["FiveM", "Lua", "MySQL"],
      summary: "A custom FiveM server project focused on building reliable multiplayer systems, gameplay scripts, and a smooth community experience.",
      problem: "The project explores how custom systems and server-side scripts can make a multiplayer environment more stable, useful, and engaging for its players.",
      stats: [
        { value: "FiveM", label: "Platform" },
        { value: "Lua", label: "Scripting" },
        { value: "MySQL", label: "Database" },
      ],
      features: [
        "Custom gameplay systems and server-side scripts",
        "Player data and persistent database integration",
        "Community-focused flows and quality-of-life features",
        "Testing, debugging, and performance improvements",
      ],
      builtWith: [
        { label: "Server", items: ["FiveM"] },
        { label: "Scripting", items: ["Lua"] },
        { label: "Data", items: ["MySQL"] },
      ],
      limitations: [
        "Project details, metrics, and additional screenshots can be updated in the activity data.",
      ],
      gallery: ["/images/activities/activity1.jpg"],
      sourceUrl: "",
    },
  },
  {
    type: "Cyber Fortress Challenge & Career Expo",
    date: "10 Feb 2026",
    title: "Career Expo",
    organization: "Computer Science",
    role: "",
    description: "Explore the various booths and learn about their operations, including the Cyber ​​activities.",
    result: "Supported 40+ participants",
    image: "/images/activities/activity2.jpg",
  },
  {
    type: "Programing Quiz",
    date: "7 June 2023",
    title: "University Innovation Sprint",
    organization: "Bangkok University",
    role: "",
    description: "Competitive with all student in teachnology of innovation major ",
    result: "2nd Place",
    image: "/images/activities/activity1.jpg",
  },
  
];
