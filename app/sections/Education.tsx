"use client";

import { education } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell content-section education-only">
      <MotionReveal>
        <SectionHeading
          index="01"
          eyebrow="Education"
          title="Education"
          description="Academic background and milestones."
        />
      </MotionReveal>

      <MotionReveal className="education-section" delay={0.08}>
        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-card" key={`${item.school}-${item.degree}`}>
              <span className="education-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="education-content">
                <h3>{item.school}</h3>
                <p className="education-degree">{item.degree}</p>
                <p>{item.faculty}</p>
                {item.highlights.map((highlight) => <p key={highlight}>{highlight}</p>)}
              </div>
              <div className="education-gpa" aria-label={item.gpa}>
                <span>GPA</span>
                <strong>{item.gpa.replace(/^GPA:\s*/, "")}</strong>
              </div>
            </article>
          ))}
        </div>
      </MotionReveal>
    </section>
  );
}
