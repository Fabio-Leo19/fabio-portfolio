# 🗂️ Organização do Código (estrutura do projeto)

Este documento explica como eu organizei o código do meu portfólio. A ideia principal foi manter uma estrutura clara, fácil de navegar e simples de evoluir, sem deixar o projeto virar uma “bagunça” conforme eu adiciono novas seções e componentes.

> Observação: aqui eu uso “boas práticas de organização” para front-end (React). Não é “Clean Architecture” no sentido clássico de backend.

---

## ✅ Estrutura implementada

### 📦 Barrel Exports (index.ts)

Para evitar imports longos e repetitivos, eu criei arquivos `index.ts` dentro das pastas principais. Assim, os imports ficam mais limpos e consistentes.

```ts
// Antes (import longo)
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ContactBubble } from './components/layout/ContactBubble';

// Depois (import mais limpo)
import { Navbar, Footer, ContactBubble } from './components/layout'; 
```
#📂 Estrutura do projeto

A estrutura abaixo representa como o projeto está organizado:
```
/
├── App.tsx                          # Componente raiz (onde monto as seções)
├── README.md                        # Documentação e instruções do projeto
├── STRUCTURE.md                     # Visão geral da estrutura
├── ORGANIZATION.md                  # Este documento
│
├── components/
│   ├── layout/                      # Componentes fixos do site (estrutura)
│   │   ├── index.ts                 # Barrel export
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ContactBubble.tsx
│   │
│   ├── sections/                    # Seções da página (conteúdo)
│   │   ├── index.ts                 # Barrel export
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── CallToAction.tsx
│   │
│   ├── shared/                      # Componentes reutilizáveis
│   │   ├── index.ts                 # Barrel export
│   │   └── ImageWithFallback.tsx
│   │
│   └── ui/                          # Biblioteca de UI (componentes prontos)
│       └── ... (vários componentes)
│
├── constants/                       # Constantes e configurações
│   ├── index.ts                     # Barrel export
│   ├── animations.ts                # Animações (motion)
│   └── menu.ts                      # Itens do menu
│
├── types/                           # Tipos TypeScript (interfaces e contratos)
│   └── index.ts
│
└── styles/
    └── globals.css                  # CSS global
```
🎯 Critérios que eu usei para organizar
1) Separação por responsabilidade

Eu separo o que é estrutura, o que é conteúdo e o que é reutilizável:

components/layout/: itens que aparecem em todo o site (Navbar, Footer, ContactBubble).

components/sections/: cada seção da página (Hero, About, Projects etc.).

components/shared/: componentes que podem ser usados em mais de um lugar (por exemplo, ImageWithFallback).

components/ui/: componentes prontos de UI (mantidos separados para não misturar com o código “do projeto”).

2) Reuso de constantes (evitar repetição)

Itens como animações e menu ficam centralizados em constants/, para não repetir objetos e configs em vários arquivos.

Exemplo:
```
import { FADE_IN_UP } from '../../constants/animations';
```
3) Tipagem com TypeScript

Eu mantenho interfaces e tipos em types/ para deixar o projeto mais seguro e evitar dados soltos sem padrão.

Exemplo:
```
export interface MenuItem {
  name: string;
  href: string;
}

export interface ContactInfo {
  icon: any;        // pode ser refinado depois (ex.: LucideIcon)
  label: string;
  value: string;
  href: string;
}
```
🚀 Como usar essa estrutura
Imports mais organizados
```
import { Navbar, Footer, ContactBubble } from './components/layout';
import { Hero } from './components/sections';
import { ImageWithFallback } from './components/shared';
import { FADE_IN_UP } from './constants';
```
Adicionando um novo componente (layout)

1 - Criar o componente em components/layout/

2 - Exportar no components/layout/index.ts

3 - Usar no App.tsx

Exemplo:
```
// components/layout/NewComponent.tsx
export function NewComponent() {
  return <div />;
}

// components/layout/index.ts
export { NewComponent } from './NewComponent';
```
📌 Convenções que eu sigo

• Componentes: PascalCase (ex.: ContactBubble, Hero)

• Funções e variáveis: camelCase (ex.: handleClose, isOpen)

• Constantes: UPPER_SNAKE_CASE quando fizer sentido (ex.: MENU_ITEMS)

✅ Resumo

Essa organização deixa o projeto mais previsível: eu sei exatamente onde procurar cada coisa e consigo evoluir o portfólio com menos esforço. Além disso, os imports ficam mais limpos, as configurações ficam centralizadas e o código tende a ficar mais fácil de manter.
```
::contentReference[oaicite:0]{index=0}
```
