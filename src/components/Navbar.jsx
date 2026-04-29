import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../image/logo2.png'

function NavIcon({ name }) {
  const icons = {
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-7h6v7" />
      </>
    ),
    about: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6" />
        <path d="M12 7h.01" />
      </>
    ),
    service: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.6 2.6-3-3 2.6-2.6Z" />
      </>
    ),
    products: (
      <>
        <path d="M6 8h12l-1 13H7L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </>
    ),
    contact: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  }

  return (
    <svg className={styles.navIcon} viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home', icon: 'home' },
    { to: '/about', label: 'About', icon: 'about' },
    { to: '/service', label: 'Service', icon: 'service' },
    { to: '/products', label: 'Products', icon: 'products' },
    { to: '/contact', label: 'Contact Us', icon: 'contact' },
  ]

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <img src={logo} alt="Sole Store" className={styles.logoImg} />
        </div>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li className={styles.drawerHeader}>
            <img src={logo} alt="Sole Store" className={styles.drawerLogo} />
            <button type="button" className={styles.closeBtn} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </li>

          {links.map(({ to, label, icon }) => (
            <li key={to} onClick={() => setMenuOpen(false)}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                <NavIcon name={icon} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button className={styles.cartBtn} onClick={() => navigate('/products')}>
          Cart ({cartCount})
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && <button className={styles.backdrop} aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
