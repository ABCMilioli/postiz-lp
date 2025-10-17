import React from 'react'
import { 
  FaInstagram, FaYoutube, FaLinkedin, FaFacebook, 
  FaTiktok, FaTwitter, FaReddit, FaPinterest,
  FaDiscord, FaSlack, FaTelegram, FaDribbble
} from 'react-icons/fa'
import './Platforms.css'

const Platforms = () => {
  const platforms = [
    { name: 'Instagram', Icon: FaInstagram, color: '#E4405F' },
    { name: 'YouTube', Icon: FaYoutube, color: '#FF0000' },
    { name: 'LinkedIn', Icon: FaLinkedin, color: '#0A66C2' },
    { name: 'Facebook', Icon: FaFacebook, color: '#1877F2' },
    { name: 'TikTok', Icon: FaTiktok, color: '#c6c6c6' },
    { name: 'Twitter', Icon: FaTwitter, color: '#1DA1F2' },
    { name: 'Reddit', Icon: FaReddit, color: '#FF4500' },
    { name: 'Pinterest', Icon: FaPinterest, color: '#E60023' },
    { name: 'Discord', Icon: FaDiscord, color: '#5865F2' },
    { name: 'Slack', Icon: FaSlack, color: '#4A154B' },
    { name: 'Telegram', Icon: FaTelegram, color: '#0088cc' },
    { name: 'Dribbble', Icon: FaDribbble, color: '#EA4C89' }
  ]

  return (
    <section className="platforms" id="platforms">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Ampla lista de canais de redes sociais
          </h2>
          <p className="section-subtitle">
            Conecte e gerencie todas as suas plataformas favoritas em um só lugar
          </p>
        </div>

        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="platform-item"
              style={{ 
                '--platform-color': platform.color,
                animationDelay: `${index * 0.05}s`
              }}
            >
              <div className="platform-icon">
                <platform.Icon />
              </div>
              <span className="platform-name">{platform.name}</span>
            </div>
          ))}
        </div>

        <div className="platforms-footer">
          <p>E muito mais plataformas sendo adicionadas constantemente! 🚀</p>
        </div>
      </div>
    </section>
  )
}

export default Platforms



