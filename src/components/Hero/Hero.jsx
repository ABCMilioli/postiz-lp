import React from 'react'
import { 
  FaInstagram, FaYoutube, FaLinkedin, FaFacebook, 
  FaTiktok, FaTwitter, FaReddit, FaPinterest 
} from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const socialIcons = [
    { Icon: FaInstagram, color: '#E4405F' },
    { Icon: FaYoutube, color: '#FF0000' },
    { Icon: FaLinkedin, color: '#0A66C2' },
    { Icon: FaFacebook, color: '#1877F2' },
    { Icon: FaTiktok, color: '#c6c6c6' },
    { Icon: FaTwitter, color: '#1DA1F2' },
    { Icon: FaReddit, color: '#FF4500' },
    { Icon: FaPinterest, color: '#E60023' }
  ]

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-doodle hero-doodle-left"></div>
        <div className="hero-doodle hero-doodle-right"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-icon">🚀</span>
            <span>Mais de 15.000 usuários confiantes</span>
          </div>

          <h1 className="hero-title animate-fade-in">
            Sua ferramenta definitiva para
            <span className="title-gradient"> gerenciar redes sociais</span>
          </h1>

          <p className="hero-subtitle animate-fade-in">
            Tudo o que você precisa para gerenciar seus posts, construir audiência e expandir seu negócio em um só lugar.
          </p>

          <div className="hero-social-icons animate-fade-in">
            {socialIcons.map(({ Icon, color }, index) => (
              <div 
                key={index} 
                className="social-icon"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--icon-color': color 
                }}
              >
                <Icon />
              </div>
            ))}
          </div>

          <div className="hero-cta animate-fade-in">
            <button className="btn btn-hero-primary">
              Comece agora!
            </button>
            {/* <button className="btn btn-hero-secondary">
              Ver demonstração
            </button> */}
          </div>

          {/* <p className="hero-note animate-fade-in">
            Sem cartão de crédito • Cancele a qualquer momento • Suporte 24/7
          </p> */}
        </div>

        {/* <div className="hero-image animate-fade-in">
          <div className="hero-mockup">
            <div className="mockup-gradient"></div>
            <div className="mockup-card mockup-card-1">
              <div className="card-header">
                <div className="card-dot"></div>
                <div className="card-dot"></div>
                <div className="card-dot"></div>
              </div>
              <div className="card-content">
                <div className="card-line"></div>
                <div className="card-line short"></div>
                <div className="card-line medium"></div>
              </div>
            </div>
            <div className="mockup-card mockup-card-2">
              <div className="card-header">
                <div className="card-dot"></div>
                <div className="card-dot"></div>
                <div className="card-dot"></div>
              </div>
              <div className="card-content">
                <div className="card-line"></div>
                <div className="card-line medium"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero


