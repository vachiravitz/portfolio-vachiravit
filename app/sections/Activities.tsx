"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, Camera, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { activities } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

type Activity = (typeof activities)[number];
type ActivityWithModal = Extract<Activity, { modal: unknown }>;

function hasActivityModal(activity: Activity): activity is ActivityWithModal {
  return "modal" in activity && Boolean(activity.modal);
}

export function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityWithModal | null>(null);

  useEffect(() => {
    if (!selectedActivity) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedActivity(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedActivity]);

  return (
    <section id="activities" className="section-shell content-section">
      <MotionReveal>
        <SectionHeading
          index="04"
          eyebrow="Activities & contributions / กิจกรรม"
          title="Learning happens everywhere."
          description="Competitions, clubs, volunteer work, seminars, and the result of each activity."
        />
      </MotionReveal>

      <div className="activity-grid">
        {activities.map((activity, index) => {
          const cardContent = (
            <>
              <div className={`activity-visual visual-${index % 2 === 0 ? "blue" : "violet"}`}>
                {activity.image ? <img className="content-image" src={activity.image} alt={activity.title} loading="lazy" /> : <><Camera size={28} /><span>ADD ACTIVITY PHOTO</span></>}
              </div>
              <div className="activity-body">
                <div className="activity-meta"><strong>{activity.type}</strong><span>{activity.date}</span></div>
                <h3>{activity.title}</h3>
                <span className="activity-org"><Building2 size={14} />{activity.organization}</span>
                <p>{activity.description}</p>
                <div className="activity-detail"><span>RESULT</span><strong>{activity.result}</strong></div>
              </div>
            </>
          );
          const opensModal = hasActivityModal(activity);

          return (
            <MotionReveal key={`${activity.title}-${index}`} delay={index * 0.06}>
              {opensModal ? (
                <button
                  type="button"
                  className="activity-card activity-card-button"
                  onClick={() => setSelectedActivity(activity)}
                  aria-haspopup="dialog"
                >
                  {cardContent}
                </button>
              ) : (
                <article className="activity-card">{cardContent}</article>
              )}
            </MotionReveal>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedActivity ? (
          <motion.div
            className="activity-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setSelectedActivity(null)}
          >
            <motion.article
              className="activity-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="activity-modal-title"
              initial={{ opacity: 0, y: 24, scale: .985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: .985 }}
              transition={{ duration: .22 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <header className="activity-modal-header">
                <div>
                  <h2 id="activity-modal-title">{selectedActivity.title}</h2>
                  <p>{selectedActivity.date} · {selectedActivity.modal.subtitle} · {selectedActivity.organization}</p>
                  <ul>{selectedActivity.modal.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
                <button type="button" onClick={() => setSelectedActivity(null)} aria-label="Close activity details"><X size={19} /></button>
              </header>

              <div className="activity-modal-media">
                <img src={selectedActivity.image} alt={`${selectedActivity.title} project preview`} />
              </div>

              {selectedActivity.modal.gallery.length > 1 ? (
                <div className="activity-modal-thumbnails">
                  {selectedActivity.modal.gallery.map((image, index) => <img key={image} src={image} alt={`${selectedActivity.title} preview ${index + 1}`} />)}
                </div>
              ) : null}

              <div className="activity-modal-content">
                <p className="activity-modal-summary">{selectedActivity.modal.summary}</p>

                <section>
                  <span>THE PROBLEM</span>
                  <p>{selectedActivity.modal.problem}</p>
                </section>

                <div className="activity-modal-stats">
                  {selectedActivity.modal.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><small>{stat.label}</small></div>)}
                </div>

                <section>
                  <span>WHAT IT DOES</span>
                  <ul className="activity-modal-features">
                    {selectedActivity.modal.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </section>

                <section>
                  <span>BUILT WITH</span>
                  <div className="activity-modal-tech">
                    {selectedActivity.modal.builtWith.map((group) => (
                      <div key={group.label}><strong>{group.label}</strong><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
                    ))}
                  </div>
                </section>

                <section>
                  <span>SCOPE & LIMITATIONS</span>
                  {selectedActivity.modal.limitations.map((item) => <p key={item}>{item}</p>)}
                </section>

                {selectedActivity.modal.sourceUrl ? (
                  <a className="activity-modal-source" href={selectedActivity.modal.sourceUrl} target="_blank" rel="noreferrer">
                    View source <ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
