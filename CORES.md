# 🎨 Guia de Cores - Tema Escuro

## Paleta de Cores Aplicada

### 🔥 Cores Principais

- **Laranja**: `#F76F1A` - Cor primária para destaques
- **Rosa/Magenta**: `#DC2A74` - Cor secundária para gradientes
- **Preto**: `#000000` - Background principal (100% preto)
- **Branco**: `#ffffff` - Textos principais

### 🌈 Gradientes

```css
--gradient-main: linear-gradient(135deg, #F76F1A 0%, #DC2A74 100%);
--gradient-secondary: linear-gradient(135deg, #DC2A74 0%, #F76F1A 100%);
```

**Uso dos gradientes:**
- ✅ Botões principais (CTAs)
- ✅ Logo e ícones especiais
- ✅ Underlies de títulos
- ✅ Seções de destaque (CTA sections)
- ✅ Scrollbar
- ✅ Borders animados

### 📝 Textos

| Elemento | Cor | Uso |
|----------|-----|-----|
| Títulos principais | `#ffffff` | H1, H2, H3 |
| Subtítulos | `#cccccc` | Descrições, subtextos |
| Textos secundários | `#999999` | Notas, rodapé, placeholders |

### 🎯 Elementos de Interface

#### Backgrounds
- **Principal**: `#000000` (body, seções)
- **Cards**: `rgba(255, 255, 255, 0.03)` - Transparência sutil com blur
- **Inputs**: `rgba(255, 255, 255, 0.05)` - Levemente mais opaco

#### Borders
- **Padrão**: `rgba(247, 111, 26, 0.2)` - Laranja com 20% opacidade
- **Hover**: `rgba(247, 111, 26, 0.3)` - Laranja com 30% opacidade
- **Ativo**: `#F76F1A` - Laranja sólido

#### Sombras (Glow Effect)
```css
--shadow-sm: 0 1px 2px 0 rgba(247, 111, 26, 0.15);
--shadow-md: 0 4px 6px -1px rgba(247, 111, 26, 0.25);
--shadow-lg: 0 10px 15px -3px rgba(247, 111, 26, 0.35);
--shadow-xl: 0 20px 25px -5px rgba(247, 111, 26, 0.45);
--shadow-glow: 0 0 30px rgba(247, 111, 26, 0.5);
```

## 🔧 Aplicação por Componente

### Header
- Background: `rgba(0, 0, 0, 0.8)` com blur
- Textos: `#ffffff`
- Hover links: `#F76F1A`
- Border (scroll): `rgba(247, 111, 26, 0.2)`

### Hero Section
- Background: `#000000`
- Títulos: `#ffffff`
- Subtítulos: `#cccccc`
- Gradient nos destaques
- Cards mockup: `rgba(255, 255, 255, 0.05)` com blur

### Newsletter
- Background: `#000000`
- Border superior/inferior: `rgba(247, 111, 26, 0.1)`
- Input: `rgba(255, 255, 255, 0.05)`
- Botão: Gradiente laranja/rosa

### Cards (WhoIsFor, Features, Platforms)
- Background: `rgba(255, 255, 255, 0.03)`
- Border: `rgba(247, 111, 26, 0.2)`
- Backdrop filter: `blur(10px)`
- Hover: Border sólido na cor específica

### Testimonials
- Background cards: `rgba(255, 255, 255, 0.03)`
- Quote icon: `#F76F1A` (50% opacidade)
- Estrelas: `#fbbf24` (dourado)
- Border divisor: `rgba(247, 111, 26, 0.2)`

### FAQ
- Background items: `rgba(255, 255, 255, 0.03)`
- Ícone seta: `#F76F1A`
- Hover: Border `#F76F1A`

### CTA
- Background: Gradiente `#F76F1A` → `#DC2A74`
- Botão primário: `#ffffff` com texto `#000000`
- Botão secundário: Outline `#ffffff`

### Footer
- Background: `#000000`
- Border superior: `rgba(247, 111, 26, 0.2)`
- Links: `#cccccc`
- Hover links: `#F76F1A`
- Ícone coração: `#DC2A74`

## 🎨 Efeitos Visuais

### Backdrop Blur
Aplicado em cards para efeito glassmorphism:
```css
backdrop-filter: blur(10px);
```

### Glow Effect
Cards e elementos interativos têm brilho laranja no hover:
```css
box-shadow: 0 0 30px rgba(247, 111, 26, 0.5);
```

### Transparências
- Cards principais: 3% branco
- Inputs: 5% branco
- Social icons background: 5% branco

## 🔄 Transições

Todas as cores animam suavemente:
```css
transition: all 0.3s ease;
```

## 📱 Consistência

✅ Todas as seções usam a mesma paleta
✅ Gradientes consistentes em toda aplicação
✅ Opacidades padronizadas
✅ Efeitos de hover uniformes
✅ Sombras com a cor laranja principal

---

**Resultado**: Site 100% preto com acentos em gradiente laranja/rosa e textos brancos, criando um visual moderno e impactante! 🔥



