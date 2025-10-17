import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h3 className="newsletter-title">📬 Assine nossa Newsletter</h3>
          <p className="newsletter-subtitle">
            Receba atualizações, dicas e novidades diretamente no seu e-mail
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              <FaPaperPlane /> Inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter


