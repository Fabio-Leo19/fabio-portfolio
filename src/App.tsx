/**
 * Main Application Component
 */

import { lazy, Suspense } from 'react';
import { Navbar, Footer, ContactBubble } from './components/layout';
import { Hero } from './components/sections';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CallToAction } from './components/CallToAction';

const CvPage = lazy(() => import('./cv/CvPage'));
const AdminPage = lazy(() => import('./cv/AdminPage'));

export default function App() {
  const route = window.location.pathname.replace(/\/+$/, '') || '/';
  if (route === '/curriculo' || route === '/admin') {
    return <Suspense fallback={<div className="min-h-screen bg-[#050505] text-[#00ff9f] p-8">Carregando…</div>}>
      {route === '/curriculo' ? <CvPage /> : <AdminPage />}
    </Suspense>;
  }
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <ContactBubble />
    </div>
  );
}
