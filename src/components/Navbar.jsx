import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
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
    <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <nav className={`fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-[6%] h-20 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg h-16' : 'bg-transparent'}`}>
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Sole Store" className="h-10 w-auto object-contain" />
        </div>

        <ul className={`fixed inset-0 bg-white z-[1100] flex flex-col p-8 transition-transform duration-500 lg:static lg:bg-transparent lg:flex-row lg:items-center lg:gap-8 lg:p-0 lg:translate-x-0 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <li className="flex items-center justify-between mb-12 lg:hidden">
            <img src={logo} alt="Sole Store" className="h-8" />
            <button type="button" className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5" onClick={() => setMenuOpen(false)}>
              <span className="w-6 h-0.5 bg-brand-black rotate-45 translate-y-2 transition-all" />
              <span className="w-6 h-0.5 bg-brand-black -rotate-45 -translate-y-0.5 transition-all" />
            </button>
          </li>

          {links.map(({ to, label, icon }) => (
            <li key={to} onClick={() => setMenuOpen(false)} className="mb-6 lg:mb-0">
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `group flex items-center gap-3 text-lg font-medium lg:text-sm lg:uppercase lg:tracking-wider transition-colors ${isActive ? 'text-gold' : 'text-brand-black hover:text-gold'}`}
              >
                <NavIcon name={icon} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-brand-black text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-brand-black transition-colors" onClick={() => navigate('/products')}>
            Cart ({cartCount})
          </button>

          <button
            className="flex flex-col gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-brand-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-brand-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-brand-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && <div className="fixed inset-0 bg-black/50 z-[1050] backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
