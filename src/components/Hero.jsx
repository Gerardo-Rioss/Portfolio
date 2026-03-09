import { personal } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />
      {/* Glow blob */}
      <div className={styles.blob} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.left}>
          {personal.available && (
            <div className={styles.badge}>
              <span className={styles.dot} />
              Disponible para nuevos proyectos
            </div>
          )}

          <h1 className={styles.name}>
            <span className={styles.nameFirst}>Gerardo</span>
            <span className={styles.nameLast}>Rios</span>
          </h1>

          <p className={styles.role}>{personal.role}</p>

          <p className={styles.bio}>{personal.bio}</p>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary}>
              Ver proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Contactame
            </a>
          </div>

          <div className={styles.socials}>
            <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.socialLink} title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href={personal.github} target="_blank" rel="noopener" className={styles.socialLink} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href={`mailto:${personal.email}`} className={styles.socialLink} title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href={personal.web} target="_blank" rel="noopener" className={styles.socialLink} title="Portfolio">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoWrap}>
            <div className={styles.photoRing} />
            <img src="/foto.png" alt="Gerardo Rios" className={styles.photo} />
            <div className={styles.photoAccent} />
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNum}>+13</span>
              <span className={styles.statLabel}>años de experiencia</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>6</span>
              <span className={styles.statLabel}>proyectos destacados</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>4</span>
              <span className={styles.statLabel}>certificaciones</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>tecnologías activas</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
