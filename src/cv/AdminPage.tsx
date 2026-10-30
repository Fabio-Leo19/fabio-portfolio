import { useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { adminUid, configured, portfolioAuth, portfolioDb, provider } from './firebaseClient'
import { normalizeResume, type ResumeData, type CareerItem, type EducationItem } from './resumeData'
import { useResume } from './useResume'

const inputClass='w-full bg-black/60 border border-[#8a2be2]/40 text-white p-3 focus:outline-none focus:border-[#00ff9f] rounded'
const buttonClass='px-4 py-2 border border-[#8a2be2] hover:border-[#00ff9f] text-white rounded transition'
const labelClass='block text-sm text-gray-400 mb-2'
const blankJob:CareerItem={role:'',company:'',period:'',location:'',responsibilities:[]}
const blankEdu:EducationItem={course:'',institution:'',period:'',details:''}
const css=`.portfolio-admin{min-height:100vh;background:#050505;color:white;font-family:Arial,sans-serif;padding:20px}.portfolio-admin .panel{max-width:1000px;margin:28px auto;padding:25px;border:1px solid #8a2be266;background:#080808}.portfolio-admin h1{font-size:27px;color:#00ff9f}.portfolio-admin h2{font-size:21px;margin:28px 0 12px;color:#00ff9f}.portfolio-admin h3{font-size:17px;margin:0 0 12px}.portfolio-admin button:disabled{opacity:.5;cursor:not-allowed}`

export default function AdminPage(){
  const {resume,loading,error}=useResume()
  const [edited,setEdited]=useState<ResumeData|null>(null)
  const [user,setUser]=useState<User|null>(null)
  const [authLoading,setAuthLoading]=useState(true)
  const [saving,setSaving]=useState(false)
  const [message,setMessage]=useState('')
  useEffect(()=>{if(!portfolioAuth){setAuthLoading(false);return}return onAuthStateChanged(portfolioAuth,u=>{setUser(u);setAuthLoading(false)})},[])
  useEffect(()=>{if(!loading && edited===null)setEdited(resume)},[loading,resume,edited])
  const permitted=Boolean(user&&adminUid&&user.uid===adminUid)
  const change=(field:keyof ResumeData,value:string)=>setEdited(old=>old?{...old,[field]:value}:old)
  const changeJob=(index:number,field:keyof CareerItem,value:string)=>setEdited(old=>old?{...old,experiences:old.experiences.map((it,i)=>i!==index?it:{...it,[field]:field==='responsibilities'?value.split('\n'):value})}:old)
  const changeEdu=(index:number,field:keyof EducationItem,value:string)=>setEdited(old=>old?{...old,education:old.education.map((it,i)=>i!==index?it:{...it,[field]:value})}:old)
  async function save(){
    if(!permitted||!portfolioDb||!edited)return
    setSaving(true);setMessage('')
    try{const value=normalizeResume(edited)
      if(!value.name||!value.email)throw Error('Preencha nome e e-mail.')
      const bytes=new TextEncoder().encode(JSON.stringify(value)).length
      if(bytes>150000)throw Error('Currículo grande demais; reduza o texto.')
      await setDoc(doc(portfolioDb,'publicContent','resume'),value)
      setEdited(value);setMessage('Currículo publicado. O site já pode exibir as alterações.')
    }catch(err){setMessage(err instanceof Error?err.message:'Não foi possível salvar. Confira as regras do Firestore.')}finally{setSaving(false)}
  }
  const section=(title:string)=><h2>{title}</h2>
  const field=(title:string,key:keyof ResumeData,large=false)=><label className={labelClass}>{title}{large?<textarea rows={4} className={inputClass} value={String(edited?.[key]||'')} onChange={e=>change(key,e.target.value)}/>:<input className={inputClass} value={String(edited?.[key]||'')} onChange={e=>change(key,e.target.value)}/>}</label>
  return <div className="portfolio-admin"><style>{css}</style><div className="panel">
    <a href="/" className="text-[#00ff9f]">← Portfólio</a><h1>Editor de currículo</h1><p className="text-gray-400">Atualize experiências e formação sem mexer no código ou no arquivo PDF.</p>
    {!configured?<p className="mt-5 text-yellow-300">Firebase ainda não configurado. Consulte o guia INSTALACAO_E_FIREBASE.md que acompanha o pacote.</p>:
      authLoading?<p>Verificando acesso…</p>:
      !user?<div className="mt-6"><button className={buttonClass} onClick={async()=>{try{if(portfolioAuth)await signInWithPopup(portfolioAuth,provider)}catch(err){setMessage(err instanceof Error?err.message:'Não foi possível entrar')}}}>Entrar com Google</button></div>:
      !permitted?<div className="mt-6"><p className="text-red-400">Esta conta não está autorizada como administradora.</p><p className="text-gray-500 text-sm break-all">UID da conta conectada: {user.uid}</p><button className={buttonClass} onClick={()=>portfolioAuth&&void signOut(portfolioAuth)}>Sair</button></div>:
      loading||!edited?<p>Carregando currículo…</p>:
      <div className="mt-5 space-y-5">
        <div className="flex flex-wrap justify-between items-center gap-3"><span className="text-gray-400">Conectado: {user.email}</span><button className={buttonClass} onClick={()=>portfolioAuth&&void signOut(portfolioAuth)}>Sair</button></div>
        {error&&<p className="text-yellow-300">{error}</p>}
        {section('Dados pessoais')}
        <div className="grid md:grid-cols-2 gap-3">{field('Nome','name')}{field('Título','title')}{field('Cidade','city')}{field('E-mail','email')}{field('Telefone','phone')}{field('LinkedIn','linkedin')}{field('GitHub','github')}</div>
        {field('Resumo profissional','summary',true)}
        {section('Experiências profissionais')}
        {edited.experiences.map((job,i)=><div className="border border-[#8a2be2]/30 p-4 space-y-2" key={i}>
          <h3>Experiência {i+1}</h3><div className="grid md:grid-cols-2 gap-3">{(['role','company','period','location'] as const).map(k=><label className={labelClass} key={k}>{({role:'Cargo',company:'Empresa',period:'Período',location:'Local'})[k]}<input className={inputClass} value={job[k]} onChange={e=>changeJob(i,k,e.target.value)}/></label>)}</div>
          <label className={labelClass}>Atividades (uma por linha)<textarea rows={4} className={inputClass} value={job.responsibilities.join('\n')} onChange={e=>changeJob(i,'responsibilities',e.target.value)}/></label>
          <div className="flex flex-wrap gap-2"><button className={buttonClass} onClick={()=>setEdited(s=>s?{...s,experiences:s.experiences.filter((_,j)=>j!==i)}:s)}>Excluir</button>{i>0&&<button className={buttonClass} onClick={()=>setEdited(s=>{if(!s)return s;const a=[...s.experiences];[a[i-1],a[i]]=[a[i],a[i-1]];return {...s,experiences:a}})}>Subir</button>}</div>
        </div>)}
        <button className={buttonClass} onClick={()=>setEdited(s=>s?{...s,experiences:[...s.experiences,{...blankJob}]}:s)}>+ Adicionar experiência</button>
        {section('Formação acadêmica')}
        {edited.education.map((edu,i)=><div className="border border-[#8a2be2]/30 p-4 space-y-2" key={i}><h3>Formação {i+1}</h3>
          <div className="grid md:grid-cols-2 gap-3">{(['course','institution','period','details'] as const).map(k=><label className={labelClass} key={k}>{({course:'Curso',institution:'Instituição',period:'Período ou conclusão',details:'Detalhes'})[k]}<input className={inputClass} value={edu[k]} onChange={e=>changeEdu(i,k,e.target.value)}/></label>)}</div>
          <button className={buttonClass} onClick={()=>setEdited(s=>s?{...s,education:s.education.filter((_,j)=>j!==i)}:s)}>Excluir formação</button>
        </div>)}
        <button className={buttonClass} onClick={()=>setEdited(s=>s?{...s,education:[...s.education,{...blankEdu}]}:s)}>+ Adicionar formação</button>
        {section('Outros dados')}
        <label className={labelClass}>Cursos (um por linha)<textarea className={inputClass} rows={5} value={edited.courses.join('\n')} onChange={e=>setEdited(s=>s?{...s,courses:e.target.value.split('\n')}:s)}/></label>
        <label className={labelClass}>Competências (uma por linha)<textarea className={inputClass} rows={5} value={edited.skills.join('\n')} onChange={e=>setEdited(s=>s?{...s,skills:e.target.value.split('\n')}:s)}/></label>
        <div className="flex flex-wrap gap-3 sticky bottom-2 bg-black/90 border border-[#8a2be2]/50 p-4"><button disabled={saving} className="px-5 py-2 bg-[#00ff9f] text-black font-bold rounded" onClick={()=>void save()}>{saving?'Salvando…':'Salvar e publicar'}</button><a href="/curriculo" target="_blank" rel="noreferrer" className={buttonClass}>Visualizar currículo</a>{message&&<p role="status" className="text-[#00ff9f]">{message}</p>}</div>
      </div>}
    {message&&!permitted&&<p role="status" className="mt-4 text-yellow-300">{message}</p>}
  </div></div>
}
