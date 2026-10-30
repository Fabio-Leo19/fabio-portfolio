import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const config = {
  apiKey: import.meta.env.VITE_PORTFOLIO_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_PORTFOLIO_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PORTFOLIO_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_PORTFOLIO_FIREBASE_APP_ID,
}
export const configured = Object.values(config).every(x=>typeof x==='string' && x.trim())
const app = configured ? (getApps().find(x=>x.name==='portfolio') || initializeApp(config,'portfolio')) : null
export const portfolioAuth = app ? getAuth(app) : null
export const portfolioDb = app ? getFirestore(app) : null
export const provider = new GoogleAuthProvider()
// Este valor na interface é apenas conveniência. A segurança REAL deve estar nas regras Firestore.
export const adminUid = import.meta.env.VITE_PORTFOLIO_ADMIN_UID || ''
