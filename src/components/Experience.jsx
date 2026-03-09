import { experience, certifications } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Trayectoria</span>
          <h2 className={styles.title}>Experiencia & Formación</h2>
        </div>

        <div className={styles.layout}>
          {/* Timeline */}
          <div className={styles.timeline}>
            <h3 className={styles.colTitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              Experiencia Profesional
            </h3>

            {experience.map((job, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.period}>{job.period}</div>
                  <h4 className={styles.jobRole}>{job.role}</h4>
                  <p className={styles.jobCompany}>{job.area} — {job.company}</p>
                  <ul className={styles.bullets}>
                    {job.bullets.map((b, j) => (
                      <li key={j} className={styles.bullet}>
                        <span className={styles.bulletDot} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className={styles.certsCol}>
            <h3 className={styles.colTitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Certificaciones
            </h3>

            <div className={styles.certsList}>
              {certifications.map((cert, i) => (
                <div key={i} className={styles.certCard} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className={styles.certIcon}>{cert.icon}</span>
                  <div className={styles.certInfo}>
                    <p className={styles.certName}>{cert.name}</p>
                    <p className={styles.certMeta}>{cert.org} · {cert.year}</p>
                  </div>
                  <span className={styles.certBadge}>{cert.year}</span>
                </div>
              ))}
            </div>

            {/* Education box */}
            <div className={styles.eduBox}>
              <h3 className={styles.colTitle} style={{ marginBottom: '16px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                Educación
              </h3>
              {[
                { title: 'Analista de Sistemas', place: 'UEP N° 87', year: '2012' },
                { title: 'Analista de Programador', place: 'UEP N° 87 · Título intermedio', year: '2009' },
                { title: 'Bachiller', place: 'Esc. Gral. José M. Paz N° 76', year: '2004' },
              ].map((e, i) => (
                <div key={i} className={styles.eduItem}>
                  <div>
                    <p className={styles.eduTitle}>{e.title}</p>
                    <p className={styles.eduPlace}>{e.place}</p>
                  </div>
                  <span className={styles.eduYear}>{e.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
