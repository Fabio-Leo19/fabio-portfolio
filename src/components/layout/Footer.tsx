import { motion } from 'motion/react';
import { Terminal, Heart } from 'lucide-react';
import { FADE_IN_UP, FADE_IN } from '../../constants/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[#8a2be2]/30 bg-black/40">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div {...FADE_IN_UP} className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-[#00ff9f]" />
            <span className="font-['Orbitron'] font-bold text-lg text-[#00ff9f]">
              FL.DEV
            </span>
          </motion.div>

          {/* Divider */}
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent" />

          {/* Copyright */}
          <motion.div {...FADE_IN} className="text-center">
            <p className="font-['Space_Mono'] text-sm text-gray-500 flex items-center gap-2 flex-wrap justify-center">
              <span>&copy; {currentYear} Fabio Leonardo de Moraes.</span>
              <span className="flex items-center gap-1">
                Feito com{' '}
                <Heart 
                  className="w-4 h-4 text-[#8a2be2] inline" 
                  fill="#8a2be2" 
                />{' '}
                e <span className="text-[#00ff9f]">código</span>
              </span>
            </p>
          </motion.div>

          {/* Tech Badge */}
          <motion.div
            {...FADE_IN}
            className="inline-flex items-center gap-2 px-3 py-1 border border-[#8a2be2]/20 bg-black/20"
          >
            <span className="font-['Space_Mono'] text-xs text-gray-600">
              React + TypeScript + Tailwind CSS + Motion
            </span>
          </motion.div>

          {/* Terminal Status */}
          <motion.div
            {...FADE_IN}
            className="font-['Space_Mono'] text-xs text-gray-700"
          >
            <span className="text-[#8a2be2]">&gt;</span> system.status:{' '}
            <span className="text-[#00ff9f]">ONLINE</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
