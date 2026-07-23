"use client";

import { ArrowUpRight, AtSign, BriefcaseBusiness, Code2, ExternalLink, Mail, Phone, type LucideIcon } from "lucide-react";
import { profile } from "../data";
import { MotionReveal } from "../components/MotionReveal";

const socialIcons: Record<string, LucideIcon> = {
  Github: Code2,
  Linkedin: BriefcaseBusiness,
  Twitter: AtSign,
};

export function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <MotionReveal>
        <div className="contact-panel">
          <div className="contact-grid" />
          <div className="contact-topline"><span>07 / CONTACT</span><span className="status-text">Available for a conversation</span></div>
          <div className="contact-main">
            <div className="contact-intro">
              <p>Have an opportunity, a project, or just want to say hello?</p>
              <h2>Let&apos;s connect.</h2>
            </div>
            <div className="contact-direct-grid">
              <a className="contact-channel" href={`mailto:${profile.email}`}>
                <span className="contact-channel-icon"><Mail size={21} /></span>
                <span><small>Email</small><strong>{profile.email}</strong></span>
                <ArrowUpRight size={19} />
              </a>
              {profile.phone ? (
                <a className="contact-channel" href={`tel:${profile.phone}`}>
                  <span className="contact-channel-icon"><Phone size={21} /></span>
                  <span><small>Phone</small><strong>{profile.phone}</strong></span>
                  <ArrowUpRight size={19} />
                </a>
              ) : null}
            </div>
          </div>
          <div className="social-grid">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon] || ExternalLink;
              return <a key={social.label} href={social.href} target="_blank" rel="noreferrer"><Icon size={19} /><span><strong>{social.label}</strong><small>View profile</small></span><ArrowUpRight size={16} /></a>;
            })}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
