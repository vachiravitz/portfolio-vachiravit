export type SkillItem = {
  name: string;
  icon?: string;
};

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

export const skillGroups: { title: string; skills: SkillItem[] }[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: devicon("python") },
      { name: "Dart", icon: devicon("dart") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "C#", icon: devicon("csharp") },
      { name: "Java", icon: devicon("java") },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Visual Studio", icon: devicon("visualstudio") },
      { name: "VS Code", icon: devicon("vscode") },
      { name: "Android Studio", icon: devicon("androidstudio") },
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github") },
      { name: "Figma", icon: devicon("figma") },
    ],
  },
  {
    title: "Web & Mobile",
    skills: [
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
      { name: "HTML5", icon: devicon("html5") },
      { name: "React", icon: devicon("react") },
      { name: "CSS3", icon: devicon("css3") },
      { name: ".NET", icon: devicon("dotnetcore") },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "MySQL", icon: devicon("mysql") },
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "SQLite", icon: devicon("sqlite") },
    ],
  },  
  {
    title: "Soft Skills",
    skills: [
      { name: "Adaptability" },
      { name: "Creativity" },
      { name: "Time Management" },
      { name: "Problem Solving" },
      { name: "Positive Energy" },
    ],
  },

  {
    title: "Additional Skills",
    skills: [
      { name: "Thai" },
      { name: "English  B2.1" },
      { name: "Typing 98 WPM" },
    ],
  },
];
