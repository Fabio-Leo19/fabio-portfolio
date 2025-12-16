# 🚀 Guia Rápido — Portfólio (Fabio Leonardo)

Este arquivo é um “atalho” para eu (e qualquer pessoa que baixar o projeto) encontrar rápido onde editar cada parte do site, sem ficar procurando arquivo por arquivo.

---

## 📍 Onde editar cada coisa

| Preciso mexer em... | Arquivo |
|---|---|
| Navbar / menu (layout do topo) | `src/components/layout/Navbar.tsx` |
| Itens do menu (links/IDs) | `src/constants/menu.ts` |
| Seção inicial (Hero) | `src/components/sections/Hero.tsx` |
| Rodapé (Footer) | `src/components/layout/Footer.tsx` |
| Botão/bolha de contato | `src/components/layout/ContactBubble.tsx` |
| Seção “Sobre” | `src/components/sections/About.tsx` |
| Seção “Projetos” | `src/components/sections/Projects.tsx` |
| Seção “Skills” | `src/components/sections/Skills.tsx` |
| Animações (motion) | `src/constants/animations.ts` |
| Tipos TypeScript | `src/types/index.ts` |
| Estilos globais | `src/styles/globals.css` |

---

## ⚡ Tarefas comuns

### 1) Adicionar um item no menu

📌 Arquivo: `src/constants/menu.ts`

```ts
export const MENU_ITEMS = [
  // ... itens existentes
  { name: 'NOVO', href: '#novo' }, // adicione aqui
];
```
2) Alterar cores do tema

📌 Arquivo: src/styles/globals.css

Procure pelas variáveis e troque os valores:
```
:root {
  --color-neon-green: #00ff9f;
  --color-purple: #8a2be2;
  --color-purple-light: #b300ff;
}
```
3) Adicionar / atualizar um projeto

📌 Arquivo: src/components/sections/Projects.tsx

Procure a lista de projetos e adicione um novo objeto:
```
const projects = [
  // ... projetos existentes
  {
    title: 'Novo Projeto',
    description: 'Descrição do projeto...',
    stack: ['Tech1', 'Tech2'],
    status: 'LIVE',
    github: 'https://github.com/seu-usuario/seu-repo',
    highlight: 'Destaque principal',
  },
];
```
4) Atualizar contatos (Email / WhatsApp / GitHub / LinkedIn)

📌 Arquivo: src/components/layout/ContactBubble.tsx
```
const CONTACTS = [
  {
    label: 'Email',
    value: 'seu@email.com',
    href: 'mailto:seu@email.com',
  },
  // ... outros contatos
];
```

5) Adicionar uma nova skill

📌 Arquivo: src/components/sections/Skills.tsx

Procure por categories e adicione um novo bloco:
```
{
  category: 'Nova Categoria',
  icon: IconName,
  skills: ['Skill1', 'Skill2', 'Skill3'],
}
```

6) Atualizar links sociais

📌 Arquivo: src/components/sections/CallToAction.tsx
```
const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/seu-usuario',
    label: 'GitHub',
  },
  // ... outros links
];
```

🎨 Estética (cyberpunk)

Algumas classes úteis que eu uso no layout:
```

<div className="neon-green">Texto com glow verde</div>
<div className="neon-purple">Texto com glow roxo</div>
<div className="clip-corner">Canto cortado</div>
<div className="pulse-glow">Efeito pulsando</div>
<div className="animate-[glitch_0.3s_infinite]">Glitch</div>
```
Gradientes prontos (Tailwind):
```
bg-gradient-to-r from-[#00ff9f] to-[#00ffcc]
bg-gradient-to-r from-[#8a2be2] to-[#b300ff]
bg-gradient-to-br from-[#8a2be2] via-[#b300ff] to-[#00ff9f]
```

🔧 Imports úteis (referência rápida)

// Animações
```
import { FADE_IN_UP, SCALE_IN } from './constants/animations';
```
// Menu
```
import { MENU_ITEMS } from './constants/menu';
```
// Tipos
```
import type { MenuItem, Project } from './types';
```
// Layout
```
import { Navbar, Footer, ContactBubble } from './components/layout';
```
// Seções
```
import { Hero } from './components/sections';
```
// Shared
```
import { ImageWithFallback } from './components/shared';
```
// Ícones
```
import { Github, Mail, Terminal } from 'lucide-react';
```
// Motion
```
import { motion } from 'motion/react';
```

📱 Responsividade (Tailwind)
```
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
2xl: 1536px  (4K)
```
Exemplo rápido (mobile first):
```
className="text-sm md:text-base lg:text-lg"
```

🧭 Seções e IDs

| Seção       | ID             | Componente         |
| ----------- | -------------- | ------------------ |
| Home        | `#home`        | `Hero.tsx`         |
| Sobre       | `#sobre`       | `About.tsx`        |
| Serviços    | `#servicos`    | `Services.tsx`     |
| Experiência | `#experiencia` | `Experience.tsx`   |
| Projetos    | `#projetos`    | `Projects.tsx`     |
| Skills      | `#skills`      | `Skills.tsx`       |
| Contato     | `#contato`     | `CallToAction.tsx` |

🐛 Debug rápido (quando algo não funciona)
Animação não aparece

Confirme se motion foi importado

Use viewport={{ once: true }} quando for animação ao rolar

import { motion } from 'motion/react';
```
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
/>
```

Imagem não carrega

Use o ImageWithFallback:

import { ImageWithFallback } from './components/shared';
```
<ImageWithFallback
  src="url-da-imagem"
  alt="Descrição"
  className="w-full h-full"
/>
```

Link do menu não rola para a seção

O href do menu precisa bater com o id da seção.
```
<section id="projetos" />
// e no menu:
{ name: 'Projetos', href: '#projetos' }
```

Se você acabou de baixar o projeto e algo não estiver funcionando, o primeiro passo é rodar:
```
npm i
npm run dev
```

💚 Projeto organizado = manutenção mais tranquila.