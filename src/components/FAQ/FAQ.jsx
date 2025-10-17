import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quais canais o Postiz suporta?',
      answer: 'O Postiz suporta Facebook, Instagram, TikTok, YouTube, Reddit, LinkedIn, Dribbble, Twitter, Pinterest, Discord, Slack, Telegram e muitos outros canais populares de redes sociais.'
    },
    {
      question: 'Quais métodos de pagamento são aceitos?',
      answer: 'Aceitamos Visa, MasterCard, Discover e JCB através do Stripe. Se você deseja pagar com outro método, entre em contato com nosso suporte.'
    },
    {
      question: 'Posso confiar no Postiz?',
      answer: 'Sim! O Postiz é orgulhosamente open-source. Acreditamos em uma cultura ética e transparente. Você pode verificar todo o código ou usá-lo para uso pessoal.'
    },
    {
      question: 'Qual é a política de cancelamento?',
      answer: 'Se você experimentou o produto e não gostou, entre em contato conosco nos primeiros três dias e emitiremos um reembolso total! Você pode cancelar seus planos mensais e anuais a qualquer momento no painel.'
    },
    {
      question: 'Existe um período de teste gratuito?',
      answer: 'Sim! Oferecemos 7 dias de teste gratuito sem necessidade de cartão de crédito. Você pode experimentar todos os recursos antes de tomar uma decisão.'
    },
    {
      question: 'Como funciona o suporte ao cliente?',
      answer: 'Oferecemos suporte 24/7 via chat, e-mail e Discord. Nossa equipe está sempre pronta para ajudá-lo com qualquer dúvida ou problema.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Encontre respostas para as dúvidas mais comuns
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

