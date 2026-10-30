import { useResume } from './useResume'

const css = `
.cv-page{background:#e6e9ee;color:#18202d;min-height:100vh;padding:30px;font:15px/1.5 Arial,sans-serif}
.cv-bar{max-width:850px;margin:0 auto 16px;display:flex;gap:12px;align-items:center;justify-content:space-between}
.cv-bar button,.cv-bar a{background:#112132;color:white;border:0;border-radius:7px;padding:10px 18px;text-decoration:none;cursor:pointer}
.cv-paper{max-width:850px;margin:0 auto;background:#fff;padding:44px 54px;box-shadow:0 8px 32px #0002}
.cv-paper h1{font-size:27px;margin:0;color:#0b233d}.cv-paper .subtitle{color:#2361a1;font-weight:600;margin:4px 0}
.cv-paper h2{font-size:14px;text-transform:uppercase;letter-spacing:1.6px;color:#1a477a;border-bottom:1px solid #cbd5e1;padding-bottom:5px;margin:24px 0 10px}
.cv-paper h3{font-size:15px;margin:12px 0 2px;color:#18202d}
.cv-paper p{margin:5px 0}.cv-paper ul{padding-left:18px;margin:6px 0 12px}.cv-paper li{margin-bottom:3px}
.cv-meta{font-size:13px;color:#536175}.cv-grid{display:flex;flex-wrap:wrap;gap:6px 18px}
@media(max-width:700px){.cv-page{padding:10px}.cv-paper{padding:22px}.cv-bar{padding:8px}}
@media print{@page{size:A4;margin:13mm}.cv-page{background:white;padding:0}.cv-bar{display:none}.cv-paper{max-width:none;padding:0;box-shadow:none}.cv-paper section,.cv-job{break-inside:avoid}.cv-paper h2{break-after:avoid}}
`
export default function CvPage(){
  const {resume,loading,error}=useResume()
  return <div className="cv-page"><style>{css}</style>
    <div className="cv-bar"><a href="/">← Voltar ao portfólio</a><span>{loading?'Carregando currículo…':error?'Versão inicial do currículo':''}</span><button type="button" onClick={()=>window.print()}>Salvar / imprimir em PDF</button></div>
    <article className="cv-paper">
      <h1>{resume.name}</h1><p className="subtitle">{resume.title}</p>
      <p className="cv-meta cv-grid"><span>{resume.city}</span><span>{resume.phone}</span><span>{resume.email}</span></p>
      <p className="cv-meta cv-grid"><span>{resume.linkedin}</span><span>{resume.github}</span></p>
      <section><h2>Perfil profissional</h2><p>{resume.summary}</p></section>
      <section><h2>Experiência profissional</h2>{resume.experiences.map((item,i)=><div className="cv-job" key={i}><h3>{item.role} — {item.company}</h3><p className="cv-meta">{item.period} · {item.location}</p><ul>{item.responsibilities.map((r,j)=><li key={j}>{r}</li>)}</ul></div>)}</section>
      <section><h2>Formação acadêmica</h2>{resume.education.map((item,i)=><div className="cv-job" key={i}><h3>{item.course}</h3><p>{item.institution} · {item.period}</p>{item.details&&<p>{item.details}</p>}</div>)}</section>
      {resume.courses.length>0&&<section><h2>Cursos</h2><ul>{resume.courses.map((item,i)=><li key={i}>{item}</li>)}</ul></section>}
      {resume.skills.length>0&&<section><h2>Competências técnicas</h2><p>{resume.skills.join(' · ')}</p></section>}
    </article>
  </div>
}
