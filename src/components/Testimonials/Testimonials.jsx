import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Criadora de Conteúdo',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Esta plataforma é muito fácil de usar, o que torna o gerenciamento das minhas postagens simples. Economiza horas toda semana!'
    },
    {
      name: 'João Santos',
      role: 'Gerente de Marketing',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Adorei como tudo se integra facilmente. Para iniciantes no software e clientes, isso será muito útil para gerenciar suas mídias sociais.'
    },
    {
      name: 'Ana Costa',
      role: 'Agência Digital',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Postiz mudou como gerenciamos nossa presença nas redes sociais. As ferramentas de IA para criação de conteúdo são incríveis!'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Empresário',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Interface amigável e planos de preços razoáveis, especialmente para pequenas empresas e usuários individuais.'
    },
    {
      name: 'Carla Mendes',
      role: 'Social Media Manager',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Facilita nosso trabalho diário e economiza tempo e esforço significativamente. Altamente recomendado!'
    },
    {
      name: 'Ricardo Lima',
      role: 'Fotógrafo',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'Gosto de como há muitos recursos disponíveis para maximizar tudo para minhas plataformas de mídia social.'
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mural de Amor ❤️</h2>
          <p className="section-subtitle">
            Veja o que nossos usuários dizem sobre nós
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-quote">
                <FaQuoteLeft />
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

