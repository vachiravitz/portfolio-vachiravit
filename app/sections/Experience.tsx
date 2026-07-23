"use client";

import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { workExperience } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell content-section">
      <MotionReveal><SectionHeading index="05" eyebrow="Work experience / ประสบการณ์" title="Experience that shaped how I work." description="Internships, part-time work, freelance work, or substantial team projects can all live here." /></MotionReveal>
      <div className="experience-list">
        {workExperience.map((experience, index) => (
          <MotionReveal key={`${experience.company}-${experience.role}`} delay={index * 0.06}>
            <article className="experience-card">
              <div className="experience-side"><span>0{index + 1}</span><BriefcaseBusiness size={21} /></div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div><span>{experience.company}</span><h3>{experience.role}</h3></div>
                  <div className="experience-meta"><span><CalendarDays size={14} />{experience.period}</span><span><MapPin size={14} />{experience.location}</span></div>
                </div>
                <p>{experience.summary}</p>
                <ul className="responsibility-list">{experience.responsibilities.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul>
                <ul className="tag-list">{experience.technologies.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

