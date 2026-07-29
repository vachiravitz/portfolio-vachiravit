"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { profile } from "../data";

export function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability-pill"><span className="status-dot" />{profile.availability}</div>
          <p className="hero-kicker">{profile.role}</p>
          <h1 className="hero-name" aria-label={profile.name}>
            <span className="hero-first-name">{profile.firstName}</span>
            <span className="hero-last-name">{profile.lastName}</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <ArrowDown size={17} /></a>
            <a className="button button-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              View resume <FileText size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="portrait-wrap"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
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
                <div className="portrait-core" role="img" aria-label={`Profile placeholder for ${profile.name}`}><span>{profile.initials}</span></div>
              </>
            )}
            {/* <div className="portrait-note note-bottom"><span className="status-dot" /> {profile.location.toUpperCase()}</div> */}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-meta"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        <div><span>BASED IN</span><strong>{profile.location}</strong></div>
        <div><span>CURRENTLY EXPLORING</span><strong className="status-text">{profile.currentFocus}</strong></div>
        <div><span>STATUS</span><strong className="status-text">Ready to contract</strong></div>
        <a href="#about" aria-label="Scroll to about section"><ArrowDown size={18} /></a>
      </motion.div>
    </section>
  );
}
