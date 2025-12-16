# Meu Portfolio

Portfolio profissional com estética cyberpunk/hacker desenvolvido em React + TypeScript + Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS
- **Motion (Framer Motion)** - Animações
- **Lucide React** - Ícones
- **Vite** - Build tool

## 📁 Estrutura do Projeto

```
/
├── components/
│   ├── layout/              # Componentes de layout
│   │   ├── Navbar.tsx       # Navegação principal
│   │   ├── Footer.tsx       # Rodapé
│   │   └── ContactBubble.tsx # Botão flutuante de contato
│   │
│   ├── sections/            # Seções da página
│   │   ├── Hero.tsx         # Seção hero/início
│   │   ├── About.tsx        # Sobre mim
│   │   ├── Services.tsx     # Serviços
│   │   ├── Experience.tsx   # Experiência profissional
│   │   ├── Projects.tsx     # Projetos
│   │   ├── Skills.tsx       # Habilidades técnicas
│   │   └── CallToAction.tsx # Call to action / Contato
│   │
│   ├── shared/              # Componentes compartilhados
│   │   └── ImageWithFallback.tsx # Imagem com fallback
│   │
│   └── ui/                  # Componentes UI reutilizáveis
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
├── constants/               # Constantes e configurações
│   ├── animations.ts        # Variantes de animação
│   └── menu.ts             # Itens do menu de navegação
│
├── types/                   # Definições TypeScript
│   └── index.ts            # Tipos centralizados
│
├── styles/                  # Estilos globais
│   └── globals.css         # CSS global + Tailwind
│
├── App.tsx                 # Componente raiz
└── README.md              # Este arquivo
```

## 🎨 Design System

### Cores Principais

- **Background**: `#050505` (Preto profundo)
- **Primary Neon**: `#00ff9f` (Verde neon)
- **Secondary Purple**: `#8a2be2` (Roxo)
- **Accent Purple**: `#b300ff` (Roxo claro)

### Fontes

- **Headings**: Orbitron (estilo futurista)
- **Body**: Space Mono (estilo monospace)

### Efeitos

- Glitch animations
- Neon glow
- Scanlines
- Grid backgrounds
- Clip corners
- Pulse effects

## 🛠️ Boas Práticas Implementadas

### Organização de Código

- ✅ **Separação de responsabilidades** - Componentes divididos por função (layout, sections, shared)
- ✅ **Constantes centralizadas** - Configurações em arquivos dedicados
- ✅ **Tipos TypeScript** - Tipagem forte para maior segurança
- ✅ **Clean Code** - Código limpo e bem documentado
- ✅ **Componentização** - Componentes pequenos e reutilizáveis
- ✅ **DRY Principle** - Sem repetição de código

### Performance

- ✅ **Lazy loading** - Componentes carregados sob demanda
- ✅ **Animations otimizadas** - Usando GPU acceleration
- ✅ **Image fallbacks** - Tratamento de erros de imagem
- ✅ **Viewport once** - Animações executadas uma única vez

### Acessibilidade

- ✅ **Semantic HTML** - Tags semânticas
- ✅ **ARIA labels** - Labels para screen readers
- ✅ **Keyboard navigation** - Navegação por teclado
- ✅ **Focus indicators** - Indicadores visuais de foco

## 📱 Responsividade

O site é totalmente responsivo e testado em:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)
- 🖥️ 4K (2560px+)

## 🎯 Seções

1. **Home/Hero** - Apresentação inicial com animações
2. **Sobre** - Perfil profissional e estatísticas
3. **Serviços** - Áreas de atuação
4. **Experiência** - Timeline profissional
5. **Projetos** - Portfolio de projetos (CashHawk, ModernCloset)
6. **Skills** - Stack tecnológico organizado por categoria
7. **Contato** - Call to action e links sociais

## 🔧 Componentes Principais

### Layout Components

- **Navbar**: Navegação fixa com menu mobile
- **Footer**: Rodapé com informações e links
- **ContactBubble**: Modal de contato flutuante

### Section Components

- **Hero**: Seção inicial com efeito glitch
- **About**: Perfil com barras de progresso animadas
- **Projects**: Grid de projetos com hover effects
- **Skills**: Cards organizados por categoria

## 🎭 Animações

Todas as animações usam Motion (Framer Motion) com:

- Fade in/out
- Slide transitions
- Scale effects
- Stagger animations
- Scroll-triggered animations
- Hover interactions

## 📝 Manutenção

### Adicionar novo item ao menu

Edite `/constants/menu.ts`:

```typescript
export const MENU_ITEMS: MenuItem[] = [
  { name: 'NOVO', href: '#novo' },
  // ...
];
```

### Adicionar novo projeto

Edite o componente em `/components/Projects.tsx`

### Atualizar animações

Modifique `/constants/animations.ts` para reutilizar em múltiplos componentes

## 🚀 Deploy

O projeto está pronto para deploy em:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📄 Licença

© 2024 Fabio Leonardo de Moraes. Todos os direitos reservados.

---

**Desenvolvido com** ❤️ **e código limpo**
