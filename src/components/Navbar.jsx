import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.getElementById(href.replace('#', '')))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActive(visible.target.id)
        }
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    setActive(href.replace('#', ''))
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo} onClick={() => handleNav('#hero')}>
        <span className={styles.logoMark}>GR</span>
        <span className={styles.logoText}>Gerardo Rios</span>
      </a>

      <ul id="primary-navigation" className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.link} ${active === href.replace('#', '') ? styles.activeLink : ''}`}
              onClick={() => handleNav(href)}
              aria-current={active === href.replace('#', '') ? 'location' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggle}
          aria-label="Cambiar tema"
          title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <a href="#contact" className={styles.ctaBtn} onClick={() => handleNav('#contact')}>Contactame</a>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`}/>
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`}/>
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`}/>
        </button>
      </div>
    </nav>
  )
}
