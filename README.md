# Fabio Leonardo — Portfolio

Finalmente finalizei meu **primeiro portfólio pessoal**.  
Esse projeto foi muito mais do que “um site bonito”: foi onde eu organizei minha identidade profissional, juntei meus projetos em um lugar só e transformei aprendizado em algo real.

Eu quis um visual **cyberpunk/neon**, com animações e detalhes que passam a sensação de “terminal/dev mode”, mas sem perder o que importa: **clareza, performance e responsividade**.

🔗 **Live:** https://fabioportfoliodev.netlify.app/

---

## Por que esse projeto existe?

Eu criei esse portfólio para:

- Apresentar quem eu sou e no que eu atuo hoje
- Mostrar minha stack e meu foco (Full Stack + Mobile Android)
- Centralizar meus projetos (com links e status)
- Ter um lugar profissional para enviar em vagas e networking

Esse portfólio é uma “foto do meu momento” como dev — e eu pretendo ir evoluindo com o tempo, adicionando projetos e melhorando o código.

---

## O que tem no site

- **Home (Hero)** com apresentação e CTA
- **Sobre mim** com resumo profissional
- **Serviços / áreas de atuação**
- **Experiência profissional**
- **Projetos recentes** (cards com stack, status e links)
- **Skills & tecnologias**
- **Contato** com botão flutuante (Email, WhatsApp, GitHub, LinkedIn)

---

## Tecnologias utilizadas

- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **Motion** (motion.dev)
- **Lucide Icons**
- Componentes UI baseados em **shadcn/ui**

---

## Como rodar o projeto localmente

> Pré-requisitos: Node.js (recomendo LTS) e npm.

```
# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev
```
Build de produção:
```
npm run build
npm run preview
```
Estrutura do projeto (resumo)

• src/components/layout → Navbar, Footer, ContactBubble (parte fixa do site)

• src/components/sections → seções principais (Hero, About, Projects, etc.)

• src/components/shared → componentes reutilizáveis (ex.: ImageWithFallback)

• src/constants → menu, animações e configurações

• src/styles → estilos globais

Como eu publico as atualizações?

Eu edito no VS Code, versiono no GitHub e o Netlify publica automaticamente:
```
git add .
git commit -m "Atualiza portfolio"
git push
```
