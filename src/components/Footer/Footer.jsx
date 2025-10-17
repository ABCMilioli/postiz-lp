import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaGithub, FaTwitter, FaLinkedin, FaDiscord,
  FaHeart
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    ferramentas: [
      { name: 'API', href: '#' },
      { name: 'Integrações', href: '#' },
      { name: 'Recursos Gratuitos', href: '#' },
      { name: 'Automações', href: '#' }
    ],
    recursos: [
      { name: 'Blog', href: '#' },
      { name: 'Documentação', href: '#' },
      { name: 'Canais', href: '#' },
      { name: 'Roadmap', href: '#' },
      { name: 'Discord', href: '#' }
    ],
    empresa: [
      { name: 'Termos de Serviço', href: '/terms' },
      { name: 'Política de Privacidade', href: '/privacy' }
    ]
  }

  const socialLinks = [
    { Icon: FaGithub, href: '#', label: 'GitHub' },
    { Icon: FaTwitter, href: '#', label: 'Twitter' },
    { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { Icon: FaDiscord, href: '#', label: 'Discord' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              {/* <div className="logo-icon">
                <span className="logo-gradient">P</span>
              </div> */}
              <span className="logo-text">Postiz</span>
            </Link>
            <p className="footer-description">
              Ferramenta open-source de agendamento de redes sociais
            </p>
            {/* <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.Icon />
                </a>
              ))}
            </div> */}
          </div>

          <div className="footer-links">
            {/* <div className="footer-column">
              <h4 className="footer-title">Ferramentas</h4>
              <ul className="footer-list">
                {footerLinks.ferramentas.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* <div className="footer-column">
              <h4 className="footer-title">Recursos</h4>
              <ul className="footer-list">
                {footerLinks.recursos.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="footer-column">
              <h4 className="footer-title">Empresa</h4>
              <ul className="footer-list">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Postiz. Todos os direitos reservados.
          </p>
          <p className="footer-love">
            Feito com <FaHeart className="heart-icon" /> por desenvolvedores apaixonados
          </p>
          {/* <p className="footer-opensource">
            Orgulhosamente open-source ❤️
          </p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
