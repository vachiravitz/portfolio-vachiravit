"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  AtSign,
  Award,
  Braces,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Camera,
  CheckCircle2,
  Code2,
  ExternalLink,
  Focus,
  GraduationCap,
  Mail,
  MapPin,
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
  workExperience,
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
  Twitter: AtSign,
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
            {profile.headlineLine1}
            <span>{profile.headlineLine2}</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <ArrowDown size={17} />
            </a>
            <a className="button button-secondary" href={profile.resumeUrl} download>
              Download resume <ArrowDownToLine size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-card">
            {profile.photo ? (
              <img className="profile-photo" src={profile.photo} alt={`${profile.name} profile`} />
            ) : (
              <>
                <div className="portrait-grid" />
                <div className="portrait-orbit orbit-one" />
                <div className="portrait-orbit orbit-two" />
                <div className="portrait-core" role="img" aria-label={`Profile placeholder for ${profile.name}`}>
                  <span>{profile.initials}</span>
                </div>
              </>
            )}
            <div className="portrait-note note-top">CS / PORTFOLIO</div>
            <div className="portrait-note note-bottom">
              <span className="status-dot" /> {profile.location.toUpperCase()}
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
        <div><span>CURRENTLY EXPLORING</span><strong>{profile.currentFocus}</strong></div>
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
        <SectionHeading index="01" eyebrow="About me / เกี่ยวกับฉัน" title="A thoughtful builder with a curious mind." />
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
          <div className="education-list">
            {about.education.map((education) => (
              <article className="education-card" key={`${education.school}-${education.degree}`}>
                <GraduationCap size={21} />
                <div>
                  <span>EDUCATION / การศึกษา</span>
                  <h3>{education.degree}</h3>
                  <strong>{education.school}</strong>
                  <small>{education.period}</small>
                  <p>{education.description}</p>
                </div>
              </article>
            ))}
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
          index="02"
          eyebrow="Projects / ผลงาน"
          title="Projects built with purpose."
          description="Coursework and personal projects, with the tools, responsibilities, and outcomes made clear."
        />
      </MotionReveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <MotionReveal key={project.title} className={project.featured ? "project-featured" : ""} delay={(index % 2) * 0.08}>
            <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.24 }}>
              {project.image ? (
                <div className={`project-visual visual-${project.tone}`}>
                  <img className="content-image" src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
                  <span className="visual-index">0{index + 1}</span>
                </div>
              ) : <ProjectVisual tone={project.tone} index={index} />}
              <div className="project-body">
                <div className="project-number">PROJECT / {project.number} · {project.course}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-facts">
                  <div><span>MY CONTRIBUTION</span><p>{project.responsibility}</p></div>
                  <div><span>RESULT / OUTCOME</span><p>{project.outcome}</p></div>
                </div>
                <ul className="tag-list">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} />GitHub</a> : null}
                  {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo<ArrowUpRight size={16} /></a> : null}
                  {project.figma ? <a href={project.figma} target="_blank" rel="noreferrer">Figma<ExternalLink size={15} /></a> : null}
                </div>
              </div>
            </motion.article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading
          index="03"
          eyebrow="Technical skills / ทักษะ"
          title="Tools I use to move ideas forward."
          description="Proficiency levels are self-assessed and can be updated as skills grow."
        />
      </MotionReveal>
      <div className="skills-legend"><span>FOUNDATION</span><span>WORKING KNOWLEDGE</span><span>CONFIDENT</span></div>
      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <MotionReveal key={group.title} delay={(groupIndex % 3) * 0.06}>
            <article className="skill-group">
              <header><span>{group.index}</span><Code2 size={19} /></header>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="skill-topline"><span>{skill.name}</span><strong>{skill.level}%</strong></div>
                    <div className="skill-track"><i style={{ width: `${skill.level}%` }} /></div>
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

function Experience() {
  return (
    <section id="experience" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading
          index="04"
          eyebrow="Work experience / ประสบการณ์"
          title="Experience that shaped how I work."
          description="Internships, part-time work, freelance work, or substantial team projects can all live here."
        />
      </MotionReveal>
      <div className="experience-list">
        {workExperience.map((experience, index) => (
          <MotionReveal key={`${experience.company}-${experience.role}`} delay={index * 0.06}>
            <article className="experience-card">
              <div className="experience-side">
                <span>0{index + 1}</span>
                <BriefcaseBusiness size={21} />
              </div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div><span>{experience.company}</span><h3>{experience.role}</h3></div>
                  <div className="experience-meta"><span><CalendarDays size={14} />{experience.period}</span><span><MapPin size={14} />{experience.location}</span></div>
                </div>
                <p>{experience.summary}</p>
                <ul className="responsibility-list">
                  {experience.responsibilities.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}
                </ul>
                <ul className="tag-list">{experience.technologies.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </div>
            </article>
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
          eyebrow="Activities & contributions / กิจกรรม"
          title="Learning happens everywhere."
          description="Competitions, clubs, volunteer work, seminars, and the impact or role in each activity."
        />
      </MotionReveal>
      <div className="activity-grid">
        {activities.map((activity, index) => (
          <MotionReveal key={activity.title} delay={index * 0.06}>
            <article className="activity-card">
              <div className={`activity-visual visual-${index % 2 === 0 ? "blue" : "violet"}`}>
                {activity.image ? <img className="content-image" src={activity.image} alt={activity.title} loading="lazy" /> : <><Camera size={28} /><span>ADD ACTIVITY PHOTO</span></>}
              </div>
              <div className="activity-body">
                <div className="activity-meta"><strong>{activity.type}</strong><span>{activity.date}</span></div>
                <h3>{activity.title}</h3>
                <span className="activity-org"><Building2 size={14} />{activity.organization}</span>
                <p>{activity.description}</p>
                <div className="activity-detail"><span>ROLE</span><strong>{activity.role}</strong></div>
                <div className="activity-detail"><span>RESULT</span><strong>{activity.result}</strong></div>
              </div>
            </article>
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
        <SectionHeading index="06" eyebrow="Certifications / ใบรับรอง" title="Proof of progress, not the finish line." />
      </MotionReveal>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <MotionReveal key={certificate.title} delay={index * 0.06}>
            <motion.article className="certificate-card" whileHover={{ scale: 1.015 }}>
              <div className={`certificate-art visual-${certificate.tone}`}>
                {certificate.image ? <img className="content-image" src={certificate.image} alt={certificate.title} loading="lazy" /> : <><span className="certificate-code">{certificate.code}</span><Award size={44} strokeWidth={1.2} /><div className="certificate-lines"><i /><i /><i /></div></>}
              </div>
              <div className="certificate-body">
                <div><span>{certificate.issuer}</span><span>{certificate.date}</span></div>
                <h3>{certificate.title}</h3>
                {certificate.credentialUrl ? (
                  <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">View credential <ExternalLink size={15} /></a>
                ) : <span className="credential-missing">Credential link coming soon</span>}
              </div>
            </motion.article>
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
          <div className="contact-topline"><span>07 / CONTACT</span><span className="status-text">Available for a conversation</span></div>
          <div className="contact-main">
            <p>Have an idea, an opportunity, or just want to say hello?</p>
            <h2>Let&apos;s make<br /><span>something meaningful.</span></h2>
            <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20} />{profile.email}<ArrowRight size={20} /></a>
            {profile.phone ? <a className="contact-phone" href={`tel:${profile.phone}`}>{profile.phone}</a> : null}
          </div>
          <div className="social-grid">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon] || ExternalLink;
              return <a key={social.label} href={social.href} target="_blank" rel="noreferrer"><Icon size={18} /><span>{social.label}</span><ArrowUpRight size={16} /></a>;
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
        <Projects />
        <Skills />
        <Experience />
        <Activities />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Braces className="sr-only" aria-hidden="true" />
    </>
  );
}
