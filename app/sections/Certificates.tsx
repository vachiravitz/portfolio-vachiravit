"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

export function Certificates() {
  return (
    <section id="certificates" className="section-shell content-section">
      <MotionReveal><SectionHeading index="06" eyebrow="Certifications " title="Proof of progress, not the finish line." /></MotionReveal>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => {
          const cardContent = (
            <>
              <div className={`certificate-art visual-${certificate.tone}`}>
                {certificate.image ? <img className="content-image" src={certificate.image} alt={certificate.title} loading="lazy" /> : <><span className="certificate-code">{certificate.code}</span><Award size={44} strokeWidth={1.2} /><div className="certificate-lines"><i /><i /><i /></div></>}
              </div>
              <div className="certificate-body">
                <div><span>{certificate.issuer}</span><span>{certificate.date}</span></div><h3>{certificate.title}</h3>
                {certificate.credentialUrl ? <span className="certificate-action">View Certificate <ExternalLink size={15} /></span> : <span className="credential-missing">Certificate coming soon</span>}
              </div>
            </>
          );

          return (
            <MotionReveal key={certificate.title} delay={index * 0.06}>
              {certificate.credentialUrl ? (
                <motion.a
                  className="certificate-card certificate-card-link"
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View certificate: ${certificate.title}`}
                  whileHover={{ scale: 1.015 }}
                >
                  {cardContent}
                </motion.a>
              ) : (
                <motion.article className="certificate-card" whileHover={{ scale: 1.015 }}>
                  {cardContent}
                </motion.article>
              )}
            </MotionReveal>
          );
        })}
      </div>
    </section>
  );
}
