import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../image/logo2.png'
export default function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/service', label: 'Service' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact ous' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <img src={logo} alt="" className={styles.logoImg} />
      
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to} onClick={() => setMenuOpen(false)}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? styles.active : ''}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className={styles.cartBtn} onClick={() => navigate('/products')}>
        🛒 Cart ({cartCount})
      </button>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  )
}
