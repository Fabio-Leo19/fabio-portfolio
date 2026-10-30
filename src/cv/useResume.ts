import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { configured, portfolioDb } from './firebaseClient'
import { initialResume, normalizeResume, type ResumeData } from './resumeData'

export function useResume() {
  const [resume,setResume] = useState<ResumeData>(initialResume)
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(configured)
  useEffect(()=>{
    if (!portfolioDb) {setLoading(false);return}
    const unsubscribe = onSnapshot(doc(portfolioDb,'publicContent','resume'),snapshot=>{
      setResume(snapshot.exists()?normalizeResume(snapshot.data()):initialResume)
      setError('');setLoading(false)
    },()=>{
      setError('Não foi possível carregar os dados online. Exibindo a versão inicial do currículo.')
      setLoading(false)
    })
    return unsubscribe
  },[])
  return {resume,loading,error}
}
