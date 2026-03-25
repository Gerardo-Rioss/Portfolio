import { useState } from 'react'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)
  const [imgErrors, setImgErrors] = useState({})

  const handleImgError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }))
  }

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Proyectos</span>
          <h2 className={styles.title}>Trabajo Destacado</h2>
          <p className={styles.subtitle}>
            Soluciones construidas con distintas tecnologías, desde APIs REST hasta
            dashboards de datos y aplicaciones web completas.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={styles.card}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* IMAGE PREVIEW */}
              <div
                className={styles.imageWrap}
                style={{ '--project-color': p.color }}
              >
                {p.image && !imgErrors[p.id] ? (
                  <img
                    src={p.image}
                    alt={`Preview de ${p.title}`}
                    className={styles.previewImg}
                    onError={() => handleImgError(p.id)}
                  />
                ) : (
                  <div className={styles.imageFallback} style={{ background: `${p.color}22` }}>
                    <span className={styles.fallbackEmoji}>{p.emoji}</span>
                  </div>
                )}
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayText}>Vista previa</span>
                </div>
                <span className={styles.yearBadge}>{p.year}</span>
              </div>

              {/* CARD BODY */}
              <div className={styles.cardBody}>
                <div className={styles.accentLine} style={{ background: p.color }} />

                <div className={styles.cardContent}>
                  <div className={styles.titleRow}>
                    <div>
                      <h3 className={styles.projectTitle}>{p.title}</h3>
                      <p className={styles.projectSubtitle}>{p.subtitle}</p>
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubBtn}
                      title="Ver en GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  </div>

                  <div className={styles.tags}>
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className={styles.tag}
                        style={{ '--tag-accent': p.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className={styles.description}>{p.description}</p>

                  {/* Expandable highlights */}
                  <div
                    id={`project-highlights-${p.id}`}
                    className={`${styles.highlights} ${active === p.id ? styles.highlightsVisible : ''}`}
                    aria-hidden={active !== p.id}
                  >
                    <p className={styles.highlightsTitle}>Características clave</p>
                    <ul className={styles.highlightsList}>
                      {p.highlights.map((h, idx) => (
                        <li key={idx} className={styles.highlightItem}>
                          <span className={styles.checkmark} style={{ color: p.color }}>✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      className={styles.expandBtn}
                      style={{ color: p.color }}
                      onClick={() => setActive(active === p.id ? null : p.id)}
                      aria-expanded={active === p.id}
                      aria-controls={`project-highlights-${p.id}`}
                      aria-label={active === p.id ? `Ocultar características de ${p.title}` : `Mostrar características de ${p.title}`}
                    >
                      {active === p.id ? '↑ Ver menos' : '↓ Ver más'}
                    </button>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                    >
                      <GitHubIcon />
                      Ver código
                      <ExternalIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
