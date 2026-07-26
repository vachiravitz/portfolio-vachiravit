"use client";

import { skillGroups } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell content-section">
      <MotionReveal><SectionHeading index="02" eyebrow="Skills" title="My Skill & Tools." description="A focused toolkit for building, designing, and working effectively with others." /></MotionReveal>
      <div className="skills-grid reference-skills">
        {skillGroups.map((group, index) => (
          <MotionReveal key={group.title} className={`skill-position skill-position-${index + 1}`} delay={index * 0.06}>
            <article className="skill-group">
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
              </header>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className={skill.icon ? "" : "skill-text-only"}>
                    {skill.icon ? (
                      <span className="skill-icon" aria-hidden="true">
                        <img src={skill.icon} alt="" loading="lazy" />
                      </span>
                    ) : null}
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
