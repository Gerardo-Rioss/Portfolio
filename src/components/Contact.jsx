import { personal } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  const links = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: '#2E7CF6',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 16"/>
        </svg>
      ),
      label: 'Teléfono',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: '#27AE60',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/gerardrioss/',
      href: personal.linkedin,
      color: '#0A66C2',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/gerardrioss',
      href: personal.github,
      color: '#E6EDF3',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      label: 'Portfolio',
      value: 'rios-gerardo.netlify.app',
      href: personal.web,
      color: '#F5A623',
    },
  ]

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.label}>Contacto</span>
            <h2 className={styles.title}>¿Trabajamos juntos?</h2>
            <p className={styles.text}>
              Estoy disponible para nuevas oportunidades como desarrollador frontend,
              analista funcional o proyectos freelance. No dudes en escribirme.
            </p>

            <div className={styles.available}>
              <span className={styles.dot} />
              <span>Disponible para incorporación inmediata</span>
            </div>

            <a href={`mailto:${personal.email}`} className={styles.mailBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Enviar mensaje
            </a>
          </div>

          <div className={styles.right}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <span
                  className={styles.iconWrap}
                  style={{ background: `${link.color}18`, color: link.color }}
                >
                  {link.icon}
                </span>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>{link.label}</span>
                  <span className={styles.contactValue}>{link.value}</span>
                </div>
                <svg
                  className={styles.arrow}
                  width="16" height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
