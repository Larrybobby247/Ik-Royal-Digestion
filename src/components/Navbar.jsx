import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#rooms', label: 'Suites' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#testimonials', label: 'Reviews' },
    { href: '/#contact', label: 'Contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('/#', '')
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 lg:px-12 ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12  group-hover:scale-110 transition-transform">
            <img src={Logo} alt="GbogboAyé Logo" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display text-xl font-semibold text-ivory tracking-wide">GbogboAyé</h1>
            <p className="text-xs text-emerald-light font-body tracking-widest uppercase">Exclusive Rooms</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+2348165747490" className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
            <i className="fas fa-phone-alt text-sm"></i>
            <span className="text-sm font-medium">+234 816 574 7490</span>
          </a>
          <Link to="/booking" className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg">
            Book Now
          </Link>
          <button
            id="mobile-menu-btn"
            className="lg:hidden text-ivory text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full glass-dark py-6 px-6 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-ivory/80 hover:text-gold py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
