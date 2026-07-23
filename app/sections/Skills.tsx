"use client";

import { skillGroups } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell content-section">
      <MotionReveal><SectionHeading index="03" eyebrow="Skills / ทักษะ" title="Tools I use to move ideas forward." description="Technical, design, and soft skills presented together in one clear overview." /></MotionReveal>
      <div className="skills-grid reference-skills">
        {skillGroups.map((group, index) => (
          <MotionReveal key={group.title} className={`skill-position skill-position-${index + 1}`} delay={index * 0.06}>
            <article className="skill-group">
              <h3>{group.title}</h3>
              <ul className="skill-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
