"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Braces,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Focus,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { MotionReveal } from "./MotionReveal";
import { Navbar } from "./Navbar";
import { SectionHeading } from "./SectionHeading";
import {
  about,
  activities,
  certificates,
  profile,
  projects,
  skillGroups,
} from "../data/portfolio";

const detailIcons: Record<string, LucideIcon> = {
  GraduationCap,
  Focus,
  Sparkles,
  Users,
};

const socialIcons: Record<string, LucideIcon> = {
  Github: Code2,
  Linkedin: BriefcaseBusiness,
  MessageCircle,
  Facebook: Users,
};

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability-pill">
            <span className="status-dot" />
            {profile.availability}
          </div>
          <p className="hero-kicker">{profile.role}</p>
          <h1>
            Designing systems
            <span>that feel human.</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <ArrowDown size={17} />
            </a>
            <a className="button button-secondary" href={profile.resumeUrl} download>
              Download résumé <ArrowDownToLine size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-card" role="img" aria-label={`Profile placeholder for ${profile.name}`}>
            <div className="portrait-grid" />
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-core">
              <span>{profile.initials}</span>
            </div>
            <div className="portrait-note note-top">CS / 2026</div>
            <div className="portrait-note note-bottom">
              <span className="status-dot" /> BASED IN BKK
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-meta"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        <div><span>BASED IN</span><strong>{profile.location}</strong></div>
        <div><span>CURRENTLY EXPLORING</span><strong>AI × Human Experience</strong></div>
        <div><span>STATUS</span><strong className="status-text">Ready to build</strong></div>
        <a href="#about" aria-label="Scroll to about section"><ArrowDown size={18} /></a>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading index="01" eyebrow="About me" title="A thoughtful builder with a curious mind." />
      </MotionReveal>
      <div className="about-grid">
        <MotionReveal className="about-statement">
          <span className="statement-mark">“</span>
          <p>{about.lead}</p>
        </MotionReveal>
        <MotionReveal className="about-content" delay={0.08}>
          <div className="about-copy">
            {about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="detail-grid">
            {about.details.map((detail) => {
              const Icon = detailIcons[detail.icon] || Sparkles;
              return (
                <article className="detail-card" key={detail.label}>
                  <Icon size={19} />
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </article>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="Tools I use to move ideas forward."
          description="A flexible toolkit grounded in strong fundamentals—always expanding with each problem I solve."
        />
      </MotionReveal>
      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <MotionReveal key={group.title} delay={(groupIndex % 3) * 0.06}>
            <article className="skill-group">
              <header>
                <span>{group.index}</span>
                <Code2 size={19} />
              </header>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}><CheckCircle2 size={14} />{skill}</li>
                ))}
              </ul>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ tone, index }: { tone: string; index: number }) {
  return (
    <div className={`project-visual visual-${tone}`} aria-hidden="true">
      <div className="visual-noise" />
      {index === 0 ? (
        <div className="product-window study-window">
          <div className="window-rail"><span /><span /><span /></div>
          <div className="study-layout">
            <div className="study-sidebar"><i /><i /><i /><i /></div>
            <div className="study-main">
              <div className="study-title" />
              <div className="study-stats"><i /><i /><i /></div>
              <div className="study-chart"><span /></div>
            </div>
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
          <div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="signal-line" />
          <strong>+24.8%</strong>
        </div>
      )}
      <span className="visual-index">0{index + 1}</span>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Projects built with purpose."
          description="A selection of work where engineering decisions support a clear, useful experience."
        />
      </MotionReveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <MotionReveal
            key={project.title}
            className={project.featured ? "project-featured" : ""}
            delay={(index % 2) * 0.08}
          >
            <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.24 }}>
              <ProjectVisual tone={project.tone} index={index} />
              <div className="project-body">
                <div className="project-number">PROJECT / {project.number}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} />GitHub</a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">Live demo<ArrowUpRight size={16} /></a>
                  ) : <span>Case study soon</span>}
                </div>
              </div>
            </motion.article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading index="04" eyebrow="Learning" title="Proof of progress, not the finish line." />
      </MotionReveal>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <MotionReveal key={certificate.title} delay={index * 0.06}>
            <motion.article className="certificate-card" whileHover={{ scale: 1.015 }}>
              <div className={`certificate-art visual-${certificate.tone}`}>
                <span className="certificate-code">{certificate.code}</span>
                <Award size={44} strokeWidth={1.2} />
                <div className="certificate-lines"><i /><i /><i /></div>
              </div>
              <div className="certificate-body">
                <div><span>{certificate.issuer}</span><span>{certificate.date}</span></div>
                <h3>{certificate.title}</h3>
                <button type="button" aria-label={`View ${certificate.title}`}>
                  View credential <ExternalLink size={15} />
                </button>
              </div>
            </motion.article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section id="activities" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading
          index="05"
          eyebrow="Beyond the screen"
          title="Learning happens everywhere."
          description="Teams, communities, and time-boxed challenges are where technical skills become real-world skills."
        />
      </MotionReveal>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <MotionReveal key={activity.title} delay={index * 0.05}>
            <article className="activity-row">
              <span className="activity-index">0{index + 1}</span>
              <div className="activity-meta"><strong>{activity.type}</strong><span>{activity.date}</span></div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <ArrowUpRight size={20} />
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <MotionReveal>
        <div className="contact-panel">
          <div className="contact-grid" />
          <div className="contact-topline"><span>06 / CONTACT</span><span className="status-text">Available for a conversation</span></div>
          <div className="contact-main">
            <p>Have an idea, an opportunity, or just want to say hello?</p>
            <h2>Let&apos;s make<br /><span>something meaningful.</span></h2>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail size={20} />{profile.email}<ArrowRight size={20} />
            </a>
          </div>
          <div className="social-grid">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon] || ExternalLink;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <Icon size={18} /><span>{social.label}</span><ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-shell footer">
      <div><span className="brand-mark small">{profile.initials}</span><p>Designed &amp; built with intention.</p></div>
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <a href="#top">Back to top <ArrowUp size={15} /></a>
    </footer>
  );
}

export function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Braces className="sr-only" aria-hidden="true" />
    </>
  );
}
