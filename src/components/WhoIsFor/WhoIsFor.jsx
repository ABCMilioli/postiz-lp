import React from 'react'
import { FaUser, FaBriefcase, FaUsers } from 'react-icons/fa'
import './WhoIsFor.css'

const WhoIsFor = () => {
  const audience = [
    {
      icon: FaUser,
      title: 'Criadores de Conteúdo',
      description: 'Criação e agendamento simplificado para crescimento consistente da sua marca pessoal.',
      color: '#7c3aed'
    },
    {
      icon: FaBriefcase,
      title: 'Empresas',
      description: 'Expanda o alcance da marca e aumente o impacto do marketing com agendamento personalizado.',
      color: '#3b82f6'
    },
    {
      icon: FaUsers,
      title: 'Agências',
      description: 'Gerencie facilmente várias contas de clientes para maior produtividade e melhores resultados.',
      color: '#ec4899'
    }
  ]

  return (
    <section className="who-is-for" id="audience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Para quem é o Postiz?</h2>
          <p className="section-subtitle">
            Soluções personalizadas para cada tipo de profissional
          </p>
        </div>

        <div className="audience-grid">
          {audience.map((item, index) => (
            <div 
              key={index} 
              className="audience-card"
              style={{ '--card-color': item.color }}
            >
              <div className="audience-icon">
                <item.icon />
              </div>
              <h3 className="audience-title">{item.title}</h3>
              <p className="audience-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoIsFor

