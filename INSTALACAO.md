# 📋 Guia de Instalação - Postiz Landing Page

## 🎉 Novidades

✅ **Páginas Legais Adicionadas:**
- Política de Privacidade (`/privacy`)
- Termos de Serviço (`/terms`)
- React Router para navegação
- Links funcionais no Footer

---

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** 16 ou superior ([Download](https://nodejs.org/))
- **npm** ou **yarn** (vem com Node.js)

### Passo a Passo

#### 1️⃣ Abra o terminal no diretório do projeto

```bash
cd C:\Users\Robson\Documents\LandPagePostiz
```

#### 2️⃣ Instale as dependências

```bash
npm install
```

Aguarde a instalação de todas as dependências. Isso pode levar alguns minutos.

#### 3️⃣ Inicie o servidor de desenvolvimento

```bash
npm run dev
```

#### 4️⃣ Abra no navegador

O Vite abrirá automaticamente o navegador em:
```
http://localhost:3000
```

Se não abrir automaticamente, copie e cole o endereço no seu navegador.

## ✅ Verificação

Se tudo estiver correto, você verá:

- ✅ Terminal mostrando: `VITE v5.x.x  ready in XXXms`
- ✅ Navegador abrindo com a landing page
- ✅ Página totalmente responsiva e animada

## 🎨 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção na pasta `dist/` |
| `npm run preview` | Preview da build de produção |

## 🔧 Personalização Rápida

### Alterar Cores

Edite: `src/index.css`

```css
:root {
  --primary-purple: #7c3aed;  /* Sua cor aqui */
  --primary-blue: #3b82f6;    /* Sua cor aqui */
  /* ... */
}
```

### Alterar Textos

Edite os componentes em: `src/components/`

### Adicionar/Remover Seções

Edite: `src/App.jsx`

## 🐛 Problemas Comuns

### Erro: "Cannot find module"
**Solução:** Execute `npm install` novamente

### Porta 3000 já está em uso
**Solução:** O Vite escolherá automaticamente outra porta (3001, 3002, etc.)

### Página em branco
**Solução:** 
1. Verifique o console do navegador (F12)
2. Execute `npm install` novamente
3. Limpe o cache: `npm run build -- --force`

## 📦 Deploy

### Netlify / Vercel

1. Execute: `npm run build`
2. Faça upload da pasta `dist/`
3. Configure build command: `npm run build`
4. Configure publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Faça commit da pasta dist
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

## 💡 Dicas

- Use **npm run dev** para desenvolvimento
- Hot reload está ativo (mudanças aparecem instantaneamente)
- Abra DevTools (F12) para inspecionar elementos
- Use responsividade do navegador (F12 > Toggle Device Toolbar)

## 📞 Suporte

Se encontrar problemas:

1. Verifique se Node.js está instalado: `node --version`
2. Verifique se npm está instalado: `npm --version`
3. Delete `node_modules` e `package-lock.json`, depois execute `npm install`

---

Desenvolvido com ❤️ | Qualquer dúvida, consulte o README.md

