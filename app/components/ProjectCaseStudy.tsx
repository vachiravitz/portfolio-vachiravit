import { ArrowDownToLine, ArrowLeft, ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import type { Project } from "../data/projects";
import { profile } from "../data/profile";

function ProjectImage({ src, alt, label, large = false, fit = "contain" }: { src: string; alt: string; label: string; large?: boolean; fit?: string }) {
  if (src) {
    return <img className={`case-image case-image-${fit}${large ? " case-image-main" : ""}`} src={src} alt={alt} loading={large ? "eager" : "lazy"} />;
  }

  return (
    <div className="case-image-placeholder" role="img" aria-label={`${alt} placeholder`}>
      <span>{label}</span>
      <strong>{profile.initials}</strong>
    </div>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const hasRecognition = Boolean(project.details.recognition.title);
  const hasCollaborators = project.details.collaborators.length > 0;
  const [titleLead, ...titleRest] = project.title.split(" ");

  return (
    <main className={`case-study case-tone-${project.tone}`}>
      <div className="case-intro">
        <header className="case-header">
          <a className="case-brand" href="/">{profile.initials}<span>{profile.name}</span></a>
          <a className="case-back-top" href="/#projects"><ArrowLeft size={17} />All projects</a>
        </header>

        <section className="case-hero">
          <p className="case-kicker">PROJECT {project.number} / CASE STUDY</p>
          <div className="case-title-row">
            <h1>
              <span>{titleLead}</span>
              {titleRest.length ? <em>{titleRest.join(" ")}</em> : null}
            </h1>
            <p>{project.description}</p>
          </div>
        </section>
      </div>

      <section className="case-overview">
        <div className="case-cover">
          <ProjectImage src={project.image} alt={`${project.title} main interface`} label="MAIN PROJECT VISUAL" large />
        </div>
        <div className="case-overview-copy">
          {project.details.highlight ? <span className="case-highlight">{project.details.highlight}</span> : null}
          <span className="case-eyebrow">{project.details.overviewLabel}</span>
          <h2>{project.details.headline}</h2>
          {project.details.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <div className="case-role">
            <span>MY ROLE</span>
            <div><strong>{project.details.role}</strong><small>{project.details.roleDescription}</small></div>
          </div>

          <ul className="case-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>

          <div className="case-external-links">
            {project.documentation ? <a href={project.documentation} download><ArrowDownToLine size={16} />Download PDF documentation</a> : null}
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo<ArrowUpRight size={16} /></a> : null}
            {project.figma ? <a href={project.figma} target="_blank" rel="noreferrer">Figma<ExternalLink size={15} /></a> : null}
          </div>
        </div>
      </section>

      {project.details.features.length ? (
        <section className="case-features" aria-label="Project features">
          {project.details.features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>
      ) : null}

      <div className="case-closing">
      {project.details.gallery.length ? (
        <section className="case-gallery">
          <div className="case-gallery-heading"><span>PROJECT GALLERY</span><p>A closer look at the interface, project outcome, and award milestone.</p></div>
          <div className="case-gallery-grid">
            {project.details.gallery.map((item, index) => (
              <figure key={`${item.caption}-${index}`} className={`${item.wide ? "case-gallery-wide " : ""}case-gallery-item-${index + 1}`}>
                <div className="case-gallery-visual"><ProjectImage src={item.image} alt={item.caption} label={`PROJECT IMAGE ${String(index + 1).padStart(2, "0")}`} fit={item.fit} /></div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {(hasCollaborators || hasRecognition || project.documentation) ? (
        <section className={`case-final-grid${project.details.gallery.length ? " case-final-after-gallery" : ""}`}>
          {hasCollaborators ? (
            <div className="case-final-block"><span>TEAM COLLABORATORS</span><ul>{project.details.collaborators.map((name) => <li key={name}>{name}</li>)}</ul></div>
          ) : null}
          {hasRecognition ? (
            <div className="case-final-block"><span>RECOGNITION</span><strong>{project.details.recognition.title}</strong><small>{project.details.recognition.organization}</small></div>
          ) : null}
          {project.documentation ? (
            <a className="case-documentation" href={project.documentation} download>
              <span><FileText size={20} />Download project documentation</span><ArrowDownToLine size={19} />
            </a>
          ) : null}
        </section>
      ) : null}

      <footer className="case-footer">
        <a href="/#projects"><ArrowLeft size={17} />Back to all projects</a>
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </footer>
      </div>
    </main>
  );
}
