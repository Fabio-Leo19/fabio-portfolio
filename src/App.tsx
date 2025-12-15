/**
 * Main Application Component
 */

import { Navbar, Footer, ContactBubble } from './components/layout';
import { Hero } from './components/sections';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CallToAction } from './components/CallToAction';

export default function App() {
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
