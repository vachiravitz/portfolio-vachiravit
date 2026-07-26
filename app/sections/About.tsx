// "use client";

// import { Focus, Sparkles, Users, type LucideIcon } from "lucide-react";
// import { about, education } from "../data";
// import { MotionReveal } from "../components/MotionReveal";
// import { SectionHeading } from "../components/SectionHeading";

// const detailIcons: Record<string, LucideIcon> = { Focus, Sparkles, Users };

// export function About() {
//   return (
//     <section id="about" className="section-shell content-section">
//       <MotionReveal><SectionHeading index="01" eyebrow="About me / เกี่ยวกับฉัน" title="A thoughtful builder with a curious mind." /></MotionReveal>
//       <div className="about-grid">
//         <MotionReveal className="about-statement"><span className="statement-mark">“</span><p>{about.lead}</p></MotionReveal>
//         <MotionReveal className="about-content" delay={0.08}>
//           <div className="about-copy">{about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
//           <div className="detail-grid">
//             {about.details.map((detail) => {
//               const Icon = detailIcons[detail.icon] || Sparkles;
//               return <article className="detail-card" key={detail.label}><Icon size={19} /><span>{detail.label}</span><strong>{detail.value}</strong></article>;
//             })}
//           </div>
//         </MotionReveal>
//       </div>

//       <MotionReveal className="education-section" delay={0.08}>
//         <div className="education-heading"><span>Education</span><p>Academic background and milestones.</p></div>
//         <div className="education-list">
//           {education.map((item, index) => (
//             <article className="education-card" key={`${item.school}-${item.degree}`}>
//               <span className="education-number">{String(index + 1).padStart(2, "0")}</span>
//               <div className="education-content">
//                 <span className="education-period">{item.period}</span>
//                 <h3>{item.school}</h3>
//                 <p className="education-degree">{item.degree}</p>
//                 <p>{item.faculty}</p>
//                 {item.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}
//                 <strong>{item.gpa}</strong>
//               </div>
//             </article>
//           ))}
//         </div>
//       </MotionReveal>
//     </section>
//   );
// }
