import React from 'react'
import { 
  FaCalendarAlt, FaRobot, FaPalette, 
  FaUsers, FaBolt, FaChartLine 
} from 'react-icons/fa'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: FaCalendarAlt,
      title: 'Agendamento Inteligente',
      description: 'Agende, analise e interaja com sua audiência. Publique em múltiplos canais simultaneamente.',
      color: '#7c3aed'
    },
    {
      icon: FaRobot,
      title: 'Assistente de IA',
      description: 'Melhore seu processo de criação com Agente de IA que executa todas as tarefas por você.',
      color: '#3b82f6'
    },
    {
      icon: FaPalette,
      title: 'Design com IA',
      description: 'Use ferramentas de design para criar visuais impressionantes e gerar imagens com IA.',
      color: '#ec4899'
    },
    {
      icon: FaUsers,
      title: 'Colaboração em Equipe',
      description: 'Gerencie seus canais de mídia social com facilidade. Colabore com sua equipe e delegue tarefas.',
      color: '#f97316'
    },
    {
      icon: FaBolt,
      title: 'Ações Automáticas',
      description: 'Auto-post, auto-like, auto-comentário quando você atingir marcos específicos para máximo engajamento.',
      color: '#10b981'
    },
    {
      icon: FaChartLine,
      title: 'Analytics Completo',
      description: 'Aprenda com seus dados e melhore sua estratégia. Rastreie performance e otimize seu conteúdo.',
      color: '#8b5cf6'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Todas as ferramentas necessárias em um só lugar
          </h2>
          <p className="section-subtitle">
            Recursos poderosos para impulsionar seu crescimento nas redes sociais
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <feature.icon />
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


