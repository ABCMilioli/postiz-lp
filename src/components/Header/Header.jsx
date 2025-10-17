import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isChannelsOpen, setIsChannelsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            {/* <div className="logo-icon">
              <span className="logo-gradient">P</span>
            </div> */}
            <span className="logo-text">Postiz</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
            <li className="nav-item">
                <a href="#platforms" className="nav-link">Canais</a>
              </li>
              {/* <li className="nav-item dropdown">
                <button 
                  className="nav-link"
                  onClick={() => setIsChannelsOpen(!isChannelsOpen)}
                >
                  Canais <FaChevronDown size={12} />
                </button>
              </li> */}
              <li className="nav-item">
                <a href="#features" className="nav-link">Recursos</a>
              </li>
              {/* <li className="nav-item">
                <a href="#pricing" className="nav-link">Preços</a>
              </li> */}
              <li className="nav-item">
                <a href="#faq" className="nav-link">FAQ</a>
              </li>
            </ul>

            <div className="nav-buttons">
              {/* <button className="btn btn-ghost">Entrar</button> */}
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = import.meta.env.VITE_CTA_URL}
              >
                Começar agora!
              </button>
            </div>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

