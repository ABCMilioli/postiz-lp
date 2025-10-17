import React from 'react'
import './LegalPage.css'

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1 className="legal-title">Política de Privacidade</h1>
          <p className="legal-updated">Última atualização: 16 de Outubro de 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introdução</h2>
            <p>
              Bem-vindo à Postiz. Esta Política de Privacidade explica como coletamos, usamos, 
              divulgamos e protegemos suas informações quando você usa nossa plataforma de 
              gerenciamento de redes sociais.
            </p>
            <p>
              Ao usar o Postiz, você concorda com a coleta e uso de informações de acordo com 
              esta política. Se você não concordar com algum aspecto desta política, por favor, 
              não use nossos serviços.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Informações que Coletamos</h2>
            
            <h3>2.1 Informações Fornecidas por Você</h3>
            <ul>
              <li><strong>Dados de Cadastro:</strong> Nome, e-mail, senha, telefone</li>
              <li><strong>Dados de Perfil:</strong> Foto, biografia, preferências</li>
              <li><strong>Dados de Pagamento:</strong> Informações de cobrança (processadas por terceiros seguros)</li>
              <li><strong>Conteúdo:</strong> Posts, imagens, vídeos que você cria ou agenda</li>
            </ul>

            <h3>2.2 Informações Coletadas Automaticamente</h3>
            <ul>
              <li><strong>Dados de Uso:</strong> Como você interage com nossa plataforma</li>
              <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional</li>
              <li><strong>Cookies:</strong> Usamos cookies para melhorar sua experiência</li>
              <li><strong>Analytics:</strong> Dados de comportamento e desempenho</li>
            </ul>

            <h3>2.3 Informações de Redes Sociais</h3>
            <p>
              Quando você conecta suas contas de redes sociais ao Postiz, coletamos informações 
              necessárias para fornecer nossos serviços, incluindo tokens de acesso, dados de perfil 
              público e métricas de desempenho.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Como Usamos Suas Informações</h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul>
              <li>Fornecer, operar e manter nossa plataforma</li>
              <li>Processar suas transações e gerenciar sua conta</li>
              <li>Agendar e publicar conteúdo em suas redes sociais</li>
              <li>Enviar notificações importantes e atualizações</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Melhorar e personalizar sua experiência</li>
              <li>Analisar como nossos serviços são usados</li>
              <li>Detectar e prevenir fraudes e abusos</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Compartilhamento de Informações</h2>
            
            <h3>4.1 Não Vendemos Seus Dados</h3>
            <p>
              Nós <strong>nunca</strong> vendemos, alugamos ou comercializamos suas informações 
              pessoais para terceiros.
            </p>

            <h3>4.2 Compartilhamento Necessário</h3>
            <p>Podemos compartilhar suas informações com:</p>
            <ul>
              <li><strong>Plataformas de Redes Sociais:</strong> Para publicar conteúdo conforme suas instruções</li>
              <li><strong>Processadores de Pagamento:</strong> Para processar transações (ex: Stripe)</li>
              <li><strong>Provedores de Serviços:</strong> Que nos ajudam a operar a plataforma</li>
              <li><strong>Requisitos Legais:</strong> Quando exigido por lei ou ordem judicial</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
              informações contra acesso não autorizado, alteração, divulgação ou destruição:
            </p>
            <ul>
              <li>Criptografia SSL/TLS para transmissão de dados</li>
              <li>Criptografia de dados em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Auditorias regulares de segurança</li>
              <li>Treinamento de equipe em proteção de dados</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Seus Direitos</h2>
            <p>Você tem os seguintes direitos sobre seus dados pessoais:</p>
            <ul>
              <li><strong>Acesso:</strong> Solicitar uma cópia dos seus dados</li>
              <li><strong>Correção:</strong> Corrigir dados incorretos ou incompletos</li>
              <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Objeção:</strong> Opor-se ao processamento de seus dados</li>
              <li><strong>Restrição:</strong> Solicitar restrição do processamento</li>
              <li><strong>Retirar Consentimento:</strong> A qualquer momento</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato conosco em: 
              <strong> privacy@postiz.com</strong>
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Retenção de Dados</h2>
            <p>
              Retemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
              propósitos descritos nesta política, a menos que um período de retenção mais longo 
              seja exigido ou permitido por lei.
            </p>
            <p>
              Quando você cancela sua conta, excluímos ou anonimizamos suas informações pessoais 
              dentro de 30 dias, exceto quando devemos retê-las por requisitos legais.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Cookies e Tecnologias Similares</h2>
            <p>Usamos cookies e tecnologias similares para:</p>
            <ul>
              <li>Manter você conectado</li>
              <li>Lembrar suas preferências</li>
              <li>Entender como você usa nossa plataforma</li>
              <li>Melhorar nossos serviços</li>
            </ul>
            <p>
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar 
              a funcionalidade da plataforma.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Transferências Internacionais</h2>
            <p>
              Seus dados podem ser transferidos e mantidos em servidores localizados fora do 
              seu país, onde as leis de proteção de dados podem ser diferentes. Tomamos medidas 
              para garantir que seus dados sejam tratados com segurança e de acordo com esta 
              política.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Privacidade de Crianças</h2>
            <p>
              Nossos serviços não são destinados a menores de 13 anos. Não coletamos 
              intencionalmente informações de crianças. Se você é pai/mãe e descobre que 
              seu filho nos forneceu informações pessoais, entre em contato conosco.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você 
              sobre mudanças significativas por e-mail ou através de um aviso em nossa plataforma. 
              A data da "Última atualização" no topo desta página indica quando ela foi revisada 
              pela última vez.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre nossas práticas 
              de dados, entre em contato:
            </p>
            <div className="contact-info">
              <p><strong>E-mail:</strong> privacy@postiz.com</p>
              <p><strong>E-mail de Suporte:</strong> support@postiz.com</p>
              <p><strong>Discord:</strong> discord.gg/postiz</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>13. LGPD - Lei Geral de Proteção de Dados</h2>
            <p>
              Para usuários brasileiros, cumprimos integralmente a LGPD (Lei nº 13.709/2018). 
              Você tem todos os direitos garantidos por esta lei, incluindo o direito de 
              solicitar informações sobre o tratamento de seus dados pessoais.
            </p>
            <p><strong>Encarregado de Dados (DPO):</strong> dpo@postiz.com</p>
          </section>

          <section className="legal-section">
            <h2>14. GDPR - Regulamento Geral de Proteção de Dados</h2>
            <p>
              Para usuários da União Europeia, cumprimos o GDPR. Você tem direitos específicos 
              sob este regulamento, incluindo o direito ao esquecimento e o direito à 
              portabilidade de dados.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy



