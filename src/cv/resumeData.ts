export type CareerItem = {
  role: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}
export type EducationItem = { course: string; institution: string; period: string; details: string }
export type ResumeData = {
  name: string; title: string; city: string; email: string; phone: string
  linkedin: string; github: string; summary: string
  experiences: CareerItem[]; education: EducationItem[]; courses: string[]; skills: string[]
}

// Conteúdo inicial público: informações conferidas no CV anterior e no histórico do projeto.
// Depois da primeira publicação no Firestore, as alterações passam a ser feitas pelo painel /admin.
export const initialResume: ResumeData = {
  name: 'Fabio Leonardo de Moraes',
  title: 'Desenvolvedor Full Stack | React, TypeScript, Python e Kotlin',
  city: 'São Paulo, SP',
  email: 'fabioldemoraes@gmail.com',
  phone: '(11) 94040-7303',
  linkedin: 'https://www.linkedin.com/in/fabioleonardomoraes',
  github: 'https://github.com/Fabio-Leo19',
  summary: 'Desenvolvedor com experiência em aplicações web, automação de processos, integrações com APIs, bancos de dados e desenvolvimento Android. Tenho também experiência em suporte técnico e infraestrutura, o que ajuda a enxergar o produto além do código.',
  experiences: [
    {
      role: 'Programador Júnior', company: 'Green Retail Solutions', location: 'São Paulo, SP', period: 'Abr/2026 – Atual',
      responsibilities: [
        'Desenvolvimento e manutenção de aplicações web com React e TypeScript.',
        'Construção de automações em Python para processamento de documentos e integração de pedidos.',
        'Integração de serviços, APIs e bancos de dados em projetos internos.',
      ],
    },
    {
      role: 'Assistente de T.I', company: 'Salutem Móveis Hospitalares', location: 'São Paulo, SP', period: 'Ago/2025 – Jan/2026',
      responsibilities: [
        'Suporte técnico a usuários e atendimento a incidentes de infraestrutura.',
        'Diagnóstico de falhas em equipamentos, rede e sistemas internos.',
        'Manutenção preventiva e corretiva com registro de chamados.',
      ],
    },
    {
      role: 'Auxiliar de T.I', company: 'Orcose Contabilidade', location: 'São Paulo, SP', period: 'Abr/2024 – Dez/2024',
      responsibilities: [
        'Suporte a usuários, manutenção de computadores e impressoras.',
        'Automação de processos e monitoramento de infraestrutura com Zabbix.',
        'Apoio a sistemas internos e rotinas de TI.',
      ],
    },
  ],
  education: [{course: 'Análise e Desenvolvimento de Sistemas', institution: 'Anhanguera', period: 'Concluído em Dez/2025', details: ''}],
  courses: ['JavaScript Avançado — IFMG (2024)', 'Modelagem de Dados — Fundação Bradesco (2024)', 'Web Designer — IFMG (2018)'],
  skills: ['React', 'TypeScript', 'JavaScript', 'Python', 'Java', 'Kotlin', 'Spring Boot', 'SQL', 'Firebase', 'Azure', 'Git', 'Power Automate'],
}

const short = (value: unknown, max = 500): string => typeof value === 'string' ? value.slice(0,max).trim() : ''
const lines = (value: unknown, limit = 24) => Array.isArray(value) ? value.slice(0,limit).map(x=>short(x,500)).filter(Boolean) : []
export function normalizeResume(raw: unknown): ResumeData {
  if (!raw || typeof raw !== 'object') return initialResume
  const d = raw as Record<string,unknown>
  const experiences = Array.isArray(d.experiences) ? d.experiences.slice(0,16).map(x=>{
    const v=(x||{}) as Record<string,unknown>
    return {role:short(v.role,150),company:short(v.company,150),period:short(v.period,100),location:short(v.location,100),responsibilities:lines(v.responsibilities,15)}
  }).filter(x=>x.role&&x.company) : initialResume.experiences
  const education = Array.isArray(d.education) ? d.education.slice(0,16).map(x=>{
    const v=(x||{}) as Record<string,unknown>
    return {course:short(v.course,150),institution:short(v.institution,150),period:short(v.period,100),details:short(v.details,350)}
  }).filter(x=>x.course&&x.institution) : initialResume.education
  const field=(name:keyof ResumeData)=>short(d[name],name==='summary'?1800:250)
  return {
    name:field('name')||initialResume.name,title:field('title'),city:field('city'),email:field('email'),phone:field('phone'),
    linkedin:field('linkedin'),github:field('github'),summary:field('summary'),
    experiences,education,courses:lines(d.courses),skills:lines(d.skills),
  }
}
