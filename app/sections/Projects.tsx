"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Workflow } from "lucide-react";
import { projects } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

function ProjectVisual({ tone, index }: { tone: string; index: number }) {
  return (
    <div className={`project-visual visual-${tone}`} aria-hidden="true">
      <div className="visual-noise" />
      {index === 0 ? (
        <div className="product-window study-window">
          <div className="window-rail"><span /><span /><span /></div>
          <div className="study-layout">
            <div className="study-sidebar"><i /><i /><i /><i /></div>
            <div className="study-main"><div className="study-title" /><div className="study-stats"><i /><i /><i /></div><div className="study-chart"><span /></div></div>
          </div>
        </div>
      ) : index === 1 ? (
        <div className="map-composition">
          <div className="map-route" />
          <span className="map-pin pin-a" /><span className="map-pin pin-b" /><span className="map-pin pin-c" />
          <div className="map-card"><MapPin size={15} /><span>Small places,<br />big stories.</span></div>
        </div>
      ) : (
        <div className="analytics-composition">
          <div className="analytics-head"><Workflow size={20} /><span>LIVE SIGNALS</span></div>
          <div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="signal-line" /><strong>+24.8%</strong>
        </div>
      )}
      <span className="visual-index">0{index + 1}</span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-shell content-section">
      <MotionReveal><SectionHeading index="03" eyebrow="Projects" title="Projects built with purpose." description="A quick look at selected work. Open each project to see my role, process, and result." /></MotionReveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <MotionReveal key={project.title} className={project.featured ? "project-featured" : ""} delay={(index % 2) * 0.08}>
            <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.24 }}>
              {project.image ? (
                <div className={`project-visual visual-${project.tone}`}><img className="content-image" src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" /><span className="visual-index">0{index + 1}</span></div>
              ) : <ProjectVisual tone={project.tone} index={index} />}
              <div className="project-body">
                <div className="project-number">
                  <span>PROJECT / {project.number}</span>
                  <strong>· {project.course}</strong>
                </div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a className="project-details-link" href={`/projects/${project.slug}`}>
                  Read project details <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
