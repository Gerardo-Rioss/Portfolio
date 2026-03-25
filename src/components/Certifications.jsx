import { certifications } from '../data/portfolio'
import styles from './Certifications.module.css'

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Formación</span>
          <h2 className={styles.title}>Certificaciones</h2>
          <p className={styles.subtitle}>
            Aprendizaje continuo en tecnologías clave para frontend, backend y análisis de datos.
          </p>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <article key={`${cert.name}-${cert.year}`} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              <span className={styles.icon}>{cert.icon}</span>
              <div className={styles.info}>
                <p className={styles.name}>{cert.name}</p>
                <p className={styles.meta}>{cert.org}</p>
              </div>
              <span className={styles.badge}>{cert.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
