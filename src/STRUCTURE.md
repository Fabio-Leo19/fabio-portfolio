# 📂 Estrutura de Pastas do Projeto

## 🎯 Visão Geral

Este documento descreve a organização completa do código do portfolio, seguindo as melhores práticas de desenvolvimento React + TypeScript.

## 📁 Estrutura Detalhada

```
/
│
├── 📄 App.tsx                          # Componente raiz da aplicação
├── 📄 README.md                        # Documentação principal
├── 📄 STRUCTURE.md                     # Este arquivo
│
├── 📁 components/                      # Todos os componentes React
│   │
│   ├── 📁 layout/                      # Componentes de estrutura/layout
│   │   ├── Navbar.tsx                  # Barra de navegação fixa
│   │   ├── Footer.tsx                  # Rodapé da página
│   │   └── ContactBubble.tsx           # Botão flutuante de contato
│   │
│   ├── 📁 sections/                    # Seções principais da página
│   │   ├── Hero.tsx                    # Seção inicial (home)
│   │   ├── About.tsx                   # Sobre mim (TODO: mover para sections)
│   │   ├── Services.tsx                # Áreas de serviço (TODO: mover)
│   │   ├── Experience.tsx              # Experiência profissional (TODO: mover)
│   │   ├── Projects.tsx                # Portfolio de projetos (TODO: mover)
│   │   ├── Skills.tsx                  # Habilidades técnicas (TODO: mover)
│   │   └── CallToAction.tsx            # CTA e contato (TODO: mover)
│   │
│   ├── 📁 shared/                      # Componentes compartilhados
│   │   └── ImageWithFallback.tsx       # Imagem com fallback automático
│   │
│   └── 📁 ui/                          # Biblioteca de componentes UI
│       ├── button.tsx                  # Botão reutilizável
│       ├── card.tsx                    # Card genérico
│       ├── dialog.tsx                  # Modal/Dialog
│       └── ... (40+ componentes)       # Outros componentes UI
│
├── 📁 constants/                       # Constantes e configurações
│   ├── animations.ts                   # Variantes de animação Motion
│   └── menu.ts                         # Itens do menu de navegação
│
├── 📁 types/                           # Definições de tipos TypeScript
│   └── index.ts                        # Todos os tipos do projeto
│
└── 📁 styles/                          # Estilos CSS
    └── globals.css                     # Estilos globais + Tailwind
```

## 🗂️ Organização por Categoria

### Layout Components (`/components/layout/`)

Componentes estruturais que aparecem em todas as páginas:

| Arquivo | Responsabilidade | Usado em |
|---------|-----------------|----------|
| `Navbar.tsx` | Navegação principal com menu mobile | Topo de todas as páginas |
| `Footer.tsx` | Rodapé com links e copyright | Fim de todas as páginas |
| `ContactBubble.tsx` | Modal de contato flutuante | Overlay global |

### Section Components (`/components/sections/`)

Seções específicas da landing page:

| Arquivo | Seção | ID da Seção |
|---------|-------|-------------|
| `Hero.tsx` | Apresentação inicial | `#home` |
| `About.tsx` | Perfil e resumo | `#sobre` |
| `Services.tsx` | Áreas de atuação | `#servicos` |
| `Experience.tsx` | Timeline profissional | `#experiencia` |
| `Projects.tsx` | Portfolio de projetos | `#projetos` |
| `Skills.tsx` | Stack tecnológico | `#skills` |
| `CallToAction.tsx` | CTA e contato | `#contato` |

### Shared Components (`/components/shared/`)

Componentes utilitários reutilizáveis:

| Arquivo | Função |
|---------|--------|
| `ImageWithFallback.tsx` | Imagem com tratamento de erro e loading |

### UI Components (`/components/ui/`)

Biblioteca de componentes visuais reutilizáveis baseados em shadcn/ui.

**Principais componentes:**
- Buttons, Cards, Dialogs
- Forms (Input, Select, Checkbox, etc.)
- Navigation (Tabs, Menu, Breadcrumb)
- Feedback (Alert, Toast, Progress)
- Layout (Separator, Divider, Grid)

## 📋 Constants (`/constants/`)

### `animations.ts`
Variantes de animação Motion reutilizáveis:
- `FADE_IN_UP` - Fade com slide para cima
- `FADE_IN_DOWN` - Fade com slide para baixo
- `FADE_IN` - Fade simples
- `SCALE_IN` - Escala com fade
- `SLIDE_IN_LEFT` - Slide da esquerda
- `SLIDE_IN_RIGHT` - Slide da direita

### `menu.ts`
Itens do menu de navegação centralizados.

## 🏷️ Types (`/types/`)

### `index.ts`
Todos os tipos TypeScript do projeto:

**Principais interfaces:**
- `MenuItem` - Item do menu
- `Skill` - Habilidade técnica
- `SkillCategory` - Categoria de skills
- `Project` - Projeto do portfolio
- `ExperienceItem` - Item de experiência
- `ContactInfo` - Informação de contato
- `Stat` - Estatística
- `ServiceArea` - Área de serviço

## 🎨 Styles (`/styles/`)

### `globals.css`
- Imports do Tailwind CSS v4
- Custom CSS properties (cores, fontes)
- Classes utilitárias cyberpunk (neon, glitch, clip-corner)
- Animações customizadas
- Estilos base para tipografia

## 🔄 Fluxo de Dados

```
App.tsx
  ├─> Navbar (layout)
  ├─> Main Content
  │   ├─> Hero (section)
  │   ├─> About (section)
  │   ├─> Services (section)
  │   ├─> Experience (section)
  │   ├─> Projects (section)
  │   ├─> Skills (section)
  │   └─> CallToAction (section)
  ���─> Footer (layout)
  └─> ContactBubble (layout)
```

## 🚀 Próximos Passos de Organização

### TODO: Migrar componentes restantes

Mover os seguintes arquivos de `/components/` para `/components/sections/`:

- [ ] `About.tsx` → `sections/About.tsx`
- [ ] `Services.tsx` → `sections/Services.tsx`
- [ ] `Experience.tsx` → `sections/Experience.tsx`
- [ ] `Projects.tsx` → `sections/Projects.tsx`
- [ ] `Skills.tsx` → `sections/Skills.tsx`
- [ ] `CallToAction.tsx` → `sections/CallToAction.tsx`

### TODO: Extrair constantes

Criar arquivos de constantes para:

- [ ] `constants/skills.ts` - Lista de habilidades
- [ ] `constants/projects.ts` - Dados dos projetos
- [ ] `constants/experience.ts` - Timeline de experiência
- [ ] `constants/contacts.ts` - Informações de contato

### TODO: Criar utils

- [ ] `utils/scroll.ts` - Funções de scroll suave
- [ ] `utils/animations.ts` - Helpers de animação

## 📝 Convenções de Nomenclatura

### Arquivos
- **Componentes**: PascalCase (`Hero.tsx`, `ContactBubble.tsx`)
- **Constantes**: camelCase (`animations.ts`, `menu.ts`)
- **Types**: camelCase (`index.ts`)

### Funções/Componentes
- **Componentes**: PascalCase (`function Hero()`)
- **Handlers**: camelCase com prefixo `handle` (`handleScroll`)
- **Constantes**: UPPER_SNAKE_CASE (`MENU_ITEMS`, `FADE_IN`)

### CSS Classes
- Tailwind: lowercase com hífens
- Custom: kebab-case (`neon-green`, `clip-corner`)

## 🎯 Princípios de Organização

1. **Separação de Responsabilidades**: Cada componente tem uma única função bem definida
2. **Colocation**: Código relacionado fica próximo
3. **Reusabilidade**: Componentes genéricos em `/shared` ou `/ui`
4. **Escalabilidade**: Estrutura fácil de expandir
5. **Manutenibilidade**: Código fácil de encontrar e modificar
6. **Type Safety**: TypeScript para prevenção de erros
7. **Clean Code**: Código limpo e bem documentado

---

Eu preferi uma estrutura bem direta, fácil de entender e fácil de manter. Se no futuro eu quiser evoluir (ex.: separar os dados de projects/skills em arquivos próprios), dá pra fazer sem quebrar a organização atual.
