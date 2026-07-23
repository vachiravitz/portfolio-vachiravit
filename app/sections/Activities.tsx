"use client";

import { Building2, Camera } from "lucide-react";
import { activities } from "../data";
import { MotionReveal } from "../components/MotionReveal";
import { SectionHeading } from "../components/SectionHeading";

export function Activities() {
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
        {activities.map((activity, index) => (
          <MotionReveal key={`${activity.title}-${index}`} delay={index * 0.06}>
            <article className="activity-card">
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
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
