# 🚀 Guia Rápido - Portfolio Fabio Leonardo

## 📍 Navegação Rápida

### Onde encontrar cada coisa?

| Preciso de... | Vá para... |
|---------------|------------|
| Editar navbar/menu | `/components/layout/Navbar.tsx` |
| Mudar itens do menu | `/constants/menu.ts` |
| Editar seção inicial | `/components/sections/Hero.tsx` |
| Editar rodapé | `/components/layout/Footer.tsx` |
| Editar botão de contato | `/components/layout/ContactBubble.tsx` |
| Editar sobre mim | `/components/About.tsx` |
| Editar projetos | `/components/Projects.tsx` |
| Editar skills | `/components/Skills.tsx` |
| Adicionar animação | `/constants/animations.ts` |
| Adicionar tipo | `/types/index.ts` |
| Estilos globais | `/styles/globals.css` |

## ⚡ Tarefas Comuns

### 1. Adicionar Item ao Menu

**Arquivo:** `/constants/menu.ts`

```typescript
export const MENU_ITEMS: MenuItem[] = [
  // ... itens existentes
  { name: 'NOVO', href: '#novo' }, // ← adicione aqui
];
```

### 2. Mudar Cores do Tema

**Arquivo:** `/styles/globals.css`

```css
:root {
  --color-neon-green: #00ff9f;  /* ← mudar aqui */
  --color-purple: #8a2be2;       /* ← mudar aqui */
  --color-purple-light: #b300ff; /* ← mudar aqui */
}
```

### 3. Adicionar Novo Projeto

**Arquivo:** `/components/Projects.tsx`

```typescript
const projects = [
  // ... projetos existentes
  {
    title: 'Novo Projeto',
    description: 'Descrição do projeto...',
    stack: ['Tech1', 'Tech2'],
    status: 'LIVE',
    github: '#',
    highlight: 'Destaque principal',
  },
];
```

### 4. Atualizar Informações de Contato

**Arquivo:** `/components/layout/ContactBubble.tsx`

```typescript
const CONTACTS: ContactInfo[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'seu@email.com',        // ← mudar aqui
    href: 'mailto:seu@email.com',  // ← mudar aqui
  },
  // ... outros contatos
];
```

### 5. Adicionar Nova Skill

**Arquivo:** `/components/Skills.tsx`

Procure por `categories` e adicione:

```typescript
{
  category: 'Nova Categoria',
  icon: IconName,
  skills: ['Skill1', 'Skill2', 'Skill3'],
}
```

### 6. Mudar Links Sociais

**Arquivo:** `/components/CallToAction.tsx`

```typescript
const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/seu-usuario',  // ← mudar aqui
    label: 'GitHub' 
  },
  // ... outros links
];
```

## 🎨 Customizar Estética Cyberpunk

### Efeitos Disponíveis

```html
<!-- Neon Glow -->
<div className="neon-green">Texto com glow verde</div>
<div className="neon-purple">Texto com glow roxo</div>

<!-- Clip Corner -->
<div className="clip-corner">Canto cortado</div>

<!-- Pulse Glow -->
<div className="pulse-glow">Pulsando</div>

<!-- Glitch Effect -->
<div className="animate-[glitch_0.3s_infinite]">Glitch</div>
```

### Gradientes Prontos

```css
/* Verde neon */
bg-gradient-to-r from-[#00ff9f] to-[#00ffcc]

/* Roxo */
bg-gradient-to-r from-[#8a2be2] to-[#b300ff]

/* Mix */
bg-gradient-to-br from-[#8a2be2] via-[#b300ff] to-[#00ff9f]
```

## 🔧 Imports Úteis

```typescript
// Animações
import { FADE_IN_UP, SCALE_IN } from './constants/animations';

// Menu
import { MENU_ITEMS } from './constants/menu';

// Tipos
import type { MenuItem, Project } from './types';

// Componentes de Layout
import { Navbar, Footer, ContactBubble } from './components/layout';

// Componentes de Seção
import { Hero } from './components/sections';

// Utilitários
import { ImageWithFallback } from './components/shared';

// Ícones (Lucide)
import { Github, Mail, Terminal } from 'lucide-react';

// Animação (Motion)
import { motion } from 'motion/react';
```

## 📱 Breakpoints Responsivos

```typescript
// Mobile First
className="text-sm md:text-base lg:text-lg"

// Breakpoints Tailwind
sm:  640px   // Mobile landscape
md:  768px   // Tablet
lg:  1024px  // Desktop
xl:  1280px  // Large desktop
2xl: 1536px  // 4K
```

## 🎯 Seções e IDs

| Seção | ID | Componente |
|-------|-----|-----------|
| Home | `#home` | `Hero.tsx` |
| Sobre | `#sobre` | `About.tsx` |
| Serviços | `#servicos` | `Services.tsx` |
| Experiência | `#experiencia` | `Experience.tsx` |
| Projetos | `#projetos` | `Projects.tsx` |
| Skills | `#skills` | `Skills.tsx` |
| Contato | `#contato` | `CallToAction.tsx` |

## 🐛 Debug Rápido

### Problema: Animação não funciona

```typescript
// ✅ Certifique-se de importar motion
import { motion } from 'motion/react';

// ✅ Use viewport once
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}  // ← importante
>
```

### Problema: Imagem não carrega

```typescript
// ✅ Use ImageWithFallback
import { ImageWithFallback } from './components/shared';

<ImageWithFallback
  src="url-da-imagem"
  alt="Descrição"
  className="w-full h-full"
/>
```

### Problema: Link não rola suavemente

```typescript
// ✅ Verifique se a seção tem o ID correto
<section id="projetos"> // ← deve corresponder ao href

// ✅ Verifique se está usando o handler correto
onClick={(e) => handleScroll(e, '#projetos')}
```

## 💡 Dicas Pro

1. **Sempre use constantes** ao invés de valores hardcoded
2. **Extraia componentes repetidos** em subcomponentes
3. **Use TypeScript** para prevenir erros
4. **Teste em mobile** regularmente
5. **Mantenha animações leves** para performance

## 📚 Recursos

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Motion (Framer Motion) Docs](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 🆘 Ajuda Rápida

**Problema com imports?**
→ Verifique os barrel exports em `/components/*/index.ts`

**Componente não aparece?**
→ Certifique-se que está importado em `App.tsx`

**Estilos não aplicam?**
→ Verifique se `/styles/globals.css` está importado

**TypeScript reclama?**
→ Adicione tipos em `/types/index.ts`

---

**💚 Código organizado, manutenção facilitada!**
