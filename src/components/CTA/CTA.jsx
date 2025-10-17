import React from 'react'
import { FaRocket } from 'react-icons/fa'
import './CTA.css'

const CTA = ({ secondary }) => {
  return (
    <section className={`cta ${secondary ? 'cta-secondary' : ''}`}>
      <div className="container">
        <div className="cta-content">
          <div className="cta-bg-decoration"></div>
          
          <div className="cta-text">
            <h2 className="cta-title">
              Pronto para começar?
            </h2>
            <p className="cta-subtitle">
              Eleve seu planejamento de redes sociais e alcance novos patamares de eficiência com o Postiz.
            </p>
          </div>

          <div className="cta-buttons">
            <button 
              className="btn btn-cta-primary"
              onClick={() => window.location.href = import.meta.env.VITE_CTA_URL}
            >
              <FaRocket /> Começar Agora
            </button>
            {/* <button className="btn btn-cta-secondary">
              Falar com Vendas
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

