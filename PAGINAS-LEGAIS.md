# 📄 Páginas Legais - Postiz

## ✅ Páginas Criadas

### 1. **Política de Privacidade** (`/privacy`)
Página completa com informações sobre:
- Coleta de dados
- Uso de informações
- Compartilhamento de dados
- Segurança
- Direitos do usuário
- LGPD e GDPR compliance
- Cookies e rastreamento
- Contato e DPO

**Rota:** `http://localhost:3000/privacy`

### 2. **Termos de Serviço** (`/terms`)
Página completa com:
- Aceitação dos termos
- Descrição do serviço
- Elegibilidade
- Planos e pagamentos
- Uso aceitável
- Propriedade intelectual
- Limitação de responsabilidade
- Resolução de disputas
- Lei aplicável

**Rota:** `http://localhost:3000/terms`

## 🎨 Design

Ambas as páginas seguem o **mesmo design escuro** da landing page:
- ✅ Background preto 100%
- ✅ Gradientes laranja/rosa (#F76F1A → #DC2A74)
- ✅ Textos brancos e cinzas
- ✅ Cards com glassmorphism
- ✅ Efeitos de hover e animações
- ✅ Totalmente responsivo

## 📂 Estrutura de Arquivos

```
src/
├── pages/
│   ├── Home.jsx              # Página inicial
│   ├── PrivacyPolicy.jsx     # Política de Privacidade
│   ├── TermsOfService.jsx    # Termos de Serviço
│   └── LegalPage.css         # Estilos compartilhados
├── components/
│   ├── ScrollToTop.jsx       # Scroll para topo ao mudar rota
│   ├── Header/               # Header com link para home
│   └── Footer/               # Footer com links para páginas legais
└── App.jsx                    # Router principal
```

## 🔗 Navegação

### Links no Footer
Os links foram adicionados na seção **"Empresa"** do Footer:
- ✅ Termos de Serviço → `/terms`
- ✅ Política de Privacidade → `/privacy`

### Header
- ✅ Logo clicável que retorna para a home (`/`)

### Scroll Automático
- ✅ Ao navegar entre páginas, scroll volta automaticamente para o topo

## 🛠️ Tecnologias

### React Router DOM v6
Usado para navegação entre páginas:
- `BrowserRouter` - Router principal
- `Routes` e `Route` - Definição de rotas
- `Link` - Links internos sem reload
- `useLocation` - Hook para scroll automático

### Componentes
```jsx
// Navegação simples
<Link to="/privacy">Política de Privacidade</Link>
<Link to="/terms">Termos de Serviço</Link>
<Link to="/">Home</Link>
```

## 📝 Conteúdo

### Seções da Política de Privacidade (14 seções)
1. Introdução
2. Informações que Coletamos
3. Como Usamos Suas Informações
4. Compartilhamento de Informações
5. Segurança dos Dados
6. Seus Direitos
7. Retenção de Dados
8. Cookies e Tecnologias Similares
9. Transferências Internacionais
10. Privacidade de Crianças
11. Alterações nesta Política
12. Contato
13. LGPD - Lei Geral de Proteção de Dados
14. GDPR - Regulamento Geral de Proteção de Dados

### Seções dos Termos de Serviço (17 seções)
1. Aceitação dos Termos
2. Descrição do Serviço
3. Elegibilidade
4. Registro e Conta
5. Planos e Pagamentos
6. Uso Aceitável
7. Propriedade Intelectual
8. Integrações com Redes Sociais
9. Privacidade e Proteção de Dados
10. Limitação de Responsabilidade
11. Indenização
12. Suspensão e Término
13. Modificações dos Termos
14. Resolução de Disputas
15. Disposições Gerais
16. Contato
17. Reconhecimento

## 🎯 Compliance Legal

### LGPD (Lei Geral de Proteção de Dados)
✅ Seção específica para usuários brasileiros
✅ Informações sobre DPO (Data Protection Officer)
✅ Direitos dos titulares de dados

### GDPR (General Data Protection Regulation)
✅ Seção específica para usuários da UE
✅ Direito ao esquecimento
✅ Portabilidade de dados

### Informações de Contato
- **E-mail Legal:** legal@postiz.com
- **E-mail de Privacidade:** privacy@postiz.com
- **E-mail de Suporte:** support@postiz.com
- **DPO:** dpo@postiz.com
- **Discord:** discord.gg/postiz

## 🎨 Personalização

### Alterar Data de Atualização
```jsx
// Em PrivacyPolicy.jsx ou TermsOfService.jsx
<p className="legal-updated">
  Última atualização: 16 de Outubro de 2025
</p>
```

### Adicionar Nova Seção
```jsx
<section className="legal-section">
  <h2>Título da Seção</h2>
  <p>Conteúdo...</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</section>
```

### Alterar Cores
```css
/* src/pages/LegalPage.css */
.legal-section {
  border: 1px solid rgba(247, 111, 26, 0.1); /* Alterar cor da borda */
}
```

## 🚀 Uso

### Desenvolvimento
```bash
npm install
npm run dev
```

### Rotas Disponíveis
- **Home:** `http://localhost:3000/`
- **Privacidade:** `http://localhost:3000/privacy`
- **Termos:** `http://localhost:3000/terms`

### Build para Produção
```bash
npm run build
```

## ✨ Recursos

✅ **SEO Friendly** - Títulos e meta tags apropriados
✅ **Responsivo** - Funciona em todos os dispositivos
✅ **Acessível** - Links semânticos e estrutura clara
✅ **Navegação Suave** - Transições sem reload
✅ **Scroll Automático** - Volta ao topo ao mudar página
✅ **Links Ativos** - React Router gerencia navegação
✅ **Glassmorphism** - Efeito moderno em cards
✅ **Animações** - Fade-in suave ao carregar

## 📱 Responsividade

As páginas se adaptam perfeitamente a:
- 📱 **Mobile** (< 768px)
- 📟 **Tablet** (768px - 1024px)
- 💻 **Desktop** (> 1024px)

## 🔒 Segurança

As páginas legais incluem informações sobre:
- Criptografia SSL/TLS
- Proteção de dados
- Conformidade com leis internacionais
- Políticas de privacidade transparentes

---

**Nota:** Lembre-se de revisar e personalizar o conteúdo legal de acordo com suas necessidades específicas e consultar um advogado para garantir compliance total! ⚖️


