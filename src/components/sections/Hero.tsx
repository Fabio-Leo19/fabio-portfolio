import { motion } from 'motion/react';
import { Download, ArrowRight, Terminal } from 'lucide-react';
import { ImageWithFallback } from '../shared/ImageWithFallback';
import { FADE_IN_UP, FADE_IN_DOWN, SCALE_IN } from '../../constants/animations';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projetos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <BackgroundLayer />

      {/* System Status */}
      <SystemStatus />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Developer Badge */}
          <DeveloperBadge />

          {/* Main Title */}
          <WelcomeTitle />

          {/* Name & Role */}
          <NameSection />

          {/* Description */}
          <Description />

          {/* CTA Buttons */}
          <CTAButtons
            onProjectsClick={scrollToProjects}
            cvHref="/CV%20FABIO%20LEONARDO.pdf"
          />

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}

function BackgroundLayer() {
  return (
    <div className="absolute inset-0 z-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjU0ODM4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Digital Neural Network"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#050505]/70 to-[#050505]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 49.5%, #8a2be2 50%, transparent 50.5%),
              linear-gradient(0deg, transparent 49.5%, #8a2be2 50%, transparent 50.5%)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  );
}

function SystemStatus() {
  return (
    <div className="absolute top-20 right-10 text-[#b300ff] font-['Space_Mono'] text-xs opacity-60 hidden md:block">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 bg-[#00ff9f] rounded-full pulse-glow" />
        <span>&gt; SYSTEM_ONLINE</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#b300ff] rounded-full pulse-glow" />
        <span>&gt; ACCESS_GRANTED</span>
      </div>
    </div>
  );
}

function DeveloperBadge() {
  return (
    <motion.div
      {...FADE_IN_DOWN}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-[#b300ff]/50 bg-[#b300ff]/10 clip-corner"
    >
      <Terminal className="w-4 h-4 text-[#b300ff]" />
      <span className="font-['Space_Mono'] text-xs text-[#b300ff]">
        WARNING: DEVELOPER MODE ACTIVE
      </span>
    </motion.div>
  );
}

function WelcomeTitle() {
  return (
    <motion.div
      {...SCALE_IN}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative mb-6"
    >
      <h1 className="font-['Orbitron'] font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#00ff9f] relative whitespace-nowrap">
        <span className="relative inline-block">
          SEJA BEM-VINDO
          {/* Glitch layers */}
          <span
            className="absolute top-0 left-0 text-[#b300ff] opacity-70 animate-[glitch_0.3s_infinite]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
          >
            SEJA BEM-VINDO
          </span>
          <span
            className="absolute top-0 left-0 text-[#00ff9f] opacity-70 animate-[glitch_0.4s_infinite_reverse]"
            style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
          >
            SEJA BEM-VINDO
          </span>
        </span>
      </h1>

      {/* Neon glow */}
      <div className="absolute inset-0 blur-2xl opacity-50 pointer-events-none">
        <h1 className="font-['Orbitron'] font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#00ff9f] whitespace-nowrap">
          SEJA BEM-VINDO
        </h1>
      </div>
    </motion.div>
  );
}

function NameSection() {
  return (
    <motion.div
      {...FADE_IN_UP}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-4"
    >
      <h2 className="font-['Orbitron'] text-2xl md:text-4xl text-white mb-2">
        Fabio Leonardo de Moraes
      </h2>
      <div className="h-[1px] w-48 mx-auto bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent mb-4" />
      <p className="font-['Space_Mono'] text-base md:text-lg text-gray-400">
        Desenvolvedor{' '}
        <span className="text-[#00ff9f]">Full Stack</span> e{' '}
        <span className="text-[#00ff9f]">Mobile Android</span>
        <br />
        <span className="text-[#8a2be2]">Java • Kotlin • Spring Boot • React</span>
      </p>
    </motion.div>
  );
}

function Description() {
  return (
    <motion.p
      {...FADE_IN_UP}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="font-['Space_Mono'] text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-8"
    >
      Transformo ideias em aplicações robustas e escaláveis.
      <br />
      Foco em soluções backend de alta performance e apps mobile nativos.
    </motion.p>
  );
}

interface CTAButtonsProps {
  onProjectsClick: () => void;
  cvHref: string;
}

function CTAButtons({ onProjectsClick, cvHref }: CTAButtonsProps) {
  return (
    <motion.div
      {...FADE_IN_UP}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <button
        onClick={onProjectsClick}
        className="group px-8 py-3 bg-[#00ff9f] text-black font-['Orbitron'] hover:bg-[#00ff9f]/90 transition-all clip-corner relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          Ver Projetos
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9f] to-[#00ffcc] opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      <a
        href={cvHref}
        download
        className="group px-8 py-3 border-2 border-[#8a2be2] text-[#8a2be2] font-['Orbitron'] hover:bg-[#8a2be2]/10 transition-all clip-corner relative inline-flex items-center justify-center"
      >
        <span className="flex items-center gap-2">
          <Download className="w-5 h-5" />
          Download CV
        </span>
        <div className="absolute inset-0 border-2 border-[#8a2be2] blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="mt-16"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="font-['Space_Mono'] text-xs text-gray-600">
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#8a2be2] to-transparent"
        />
      </div>
    </motion.div>
  );
}
