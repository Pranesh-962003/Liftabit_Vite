import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960 && menuOpen) closeMenu()
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [menuOpen])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape' && menuOpen) closeMenu() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  function openMenu() {
    setMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  function toggleMenu() {
    menuOpen ? closeMenu() : openMenu()
  }

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <Link to="/" className="nav-logo-wrap">
          <img src="/logo2.svg" alt="Liftabit" className="nav-logo-img" />
        </Link>

        <ul className="nav-links" id="navLinks">
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
          <li><NavLink to="/why-us" className={({ isActive }) => isActive ? 'active' : ''}>Why Us</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
          <li><NavLink to="/contact" className="nav-cta">Get Started</NavLink></li>
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} id="mobileNav" role="navigation" aria-label="Mobile navigation">
        <div className="mobile-nav-inner">
          <Link to="/about" className="mobile-link" onClick={closeMenu}>About</Link>
          <Link to="/services" className="mobile-link" onClick={closeMenu}>Services</Link>
          <Link to="/why-us" className="mobile-link" onClick={closeMenu}>Why Us</Link>
          <Link to="/blog" className="mobile-link" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" className="mobile-cta" onClick={closeMenu}>Get Started</Link>
        </div>
      </div>

      <div className={`nav-overlay${menuOpen ? ' show' : ''}`} id="navOverlay" onClick={closeMenu}></div>
    </>
  )
}

