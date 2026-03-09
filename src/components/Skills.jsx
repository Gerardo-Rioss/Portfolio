import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Tecnologías</span>
          <h2 className={styles.title}>Mi Stack Técnico</h2>
          <p className={styles.subtitle}>
            Herramientas y tecnologías que uso para construir soluciones completas,
            desde el frontend hasta el análisis de datos.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={styles.card}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.category}>{group.category}</h3>
              </div>
              <div className={styles.tags}>
                {group.items.map(item => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
