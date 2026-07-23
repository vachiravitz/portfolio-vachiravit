"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

export function Certificates() {
  return (
    <section id="certificates" className="section-shell content-section">
      <MotionReveal><SectionHeading index="06" eyebrow="Certifications / ใบรับรอง" title="Proof of progress, not the finish line." /></MotionReveal>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <MotionReveal key={certificate.title} delay={index * 0.06}>
            <motion.article className="certificate-card" whileHover={{ scale: 1.015 }}>
              <div className={`certificate-art visual-${certificate.tone}`}>
                {certificate.image ? <img className="content-image" src={certificate.image} alt={certificate.title} loading="lazy" /> : <><span className="certificate-code">{certificate.code}</span><Award size={44} strokeWidth={1.2} /><div className="certificate-lines"><i /><i /><i /></div></>}
              </div>
              <div className="certificate-body">
                <div><span>{certificate.issuer}</span><span>{certificate.date}</span></div><h3>{certificate.title}</h3>
                {certificate.credentialUrl ? <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">View credential <ExternalLink size={15} /></a> : <span className="credential-missing">Credential link coming soon</span>}
              </div>
            </motion.article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
