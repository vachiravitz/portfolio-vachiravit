"use client";

import { ArrowBigDown, ArrowUpRight, AtSign, BriefcaseBusiness, Code2, ExternalLink, Mail, MapPin , Phone, type LucideIcon } from "lucide-react";
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
          <div className="contact-topline"><span>07 / CONTACT</span><span className="status-text">Available for a contract</span></div>
          <div className="contact-main">
          <div className="contact-intro" style={{ alignSelf: 'flex-start' }}>
            <p>If you are interested in the front-end role, please feel free to get in touch. Thank you for reading this far.</p>
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
            <div className="contact-channel">
              <span className="contact-channel-icon"><MapPin size={21} /></span>
              <span><small>Location</small><strong>Pathum Tani, Thailand</strong></span>
              <span className="font-bold text-sm" style={{ marginLeft: 'auto' }}>TH</span>
            </div>
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
