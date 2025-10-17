# 🔧 Configuração do Projeto

## Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para gerenciar configurações importantes.

### Arquivo `.env`

O arquivo `.env` contém as variáveis de ambiente que serão usadas durante o desenvolvimento e produção. Este arquivo **não** é versionado no Git por questões de segurança.

### Configuração dos Botões CTA

Todos os botões "Começar agora" da landing page redirecionam para uma única URL configurada através da variável de ambiente:

```env
VITE_CTA_URL=https://app.postiz.com/auth/sign-up
```

#### Como Configurar

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` e ajuste a URL conforme necessário:
   ```env
   VITE_CTA_URL=https://sua-url-aqui.com
   ```

3. Reinicie o servidor de desenvolvimento para que as mudanças tenham efeito:
   ```bash
   npm run dev
   ```

#### Locais dos Botões CTA

Os botões configurados com esta variável estão localizados em:

- **Header** (`src/components/Header/Header.jsx`) - Botão "Começar agora!"
- **Hero Section** (`src/components/Hero/Hero.jsx`) - Botão "Comece agora!"
- **CTA Section** (`src/components/CTA/CTA.jsx`) - Botão "Começar Agora"

### Notas Importantes

- ⚠️ **Sempre reinicie o servidor** após alterar variáveis de ambiente
- 🔒 O arquivo `.env` está no `.gitignore` e não será commitado
- 📝 Use o arquivo `.env.example` como template para outros desenvolvedores
- 🚀 No Vite, todas as variáveis de ambiente devem começar com `VITE_` para serem expostas ao cliente

## Outras Configurações

### Vite Config

As configurações do Vite estão em `vite.config.js`.

### Package.json

Scripts disponíveis:
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run preview` - Preview do build de produção

---

**Dúvidas?** Consulte a documentação do [Vite](https://vitejs.dev/guide/env-and-mode.html) sobre variáveis de ambiente.

