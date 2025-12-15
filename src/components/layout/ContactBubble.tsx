import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';
import type { ContactInfo } from '../../types';

const CONTACTS: ContactInfo[] = [
  {
  icon: Mail,
  label: 'Email',
  value: 'fabioldemoraes@gmail.com',
  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=fabioldemoraes@gmail.com&su=Contato%20pelo%20Portf%C3%B3lio',
},

  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+55 (11) 94040-7303',
    href: 'https://wa.me/5511940407303',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Fabio-Leo19',
    href: 'https://github.com/Fabio-Leo19',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/fabioleonardomoraes',
    href: 'https://www.linkedin.com/in/fabioleonardomoraes',
  },
];

export function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Floating Button */}
      <FloatingButton onClick={handleToggle} />

      {/* Modal Overlay */}
      <Overlay isOpen={isOpen} onClose={handleClose} />

      {/* Contact Panel */}
      <ContactPanel isOpen={isOpen} onClose={handleClose} contacts={CONTACTS} />
    </>
  );
}

interface FloatingButtonProps {
  onClick: () => void;
}

function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-[#00ff9f] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_#00ff9f] transition-all group cursor-pointer"
      aria-label="Abrir contato"
    >
      <MessageSquare className="w-7 h-7 text-black group-hover:rotate-12 transition-transform" />
      <div className="absolute inset-0 rounded-full border-2 border-[#00ff9f] animate-ping opacity-20" />
    </motion.button>
  );
}

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function Overlay({ isOpen, onClose }: OverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9997]"
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
}

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
  contacts: ContactInfo[];
}

function ContactPanel({ isOpen, onClose, contacts }: ContactPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed right-0 top-0 h-full w-full sm:w-96 bg-black border-l border-[#8a2be2]/30 z-[9998] overflow-y-auto"
        >
          {/* Header */}
          <PanelHeader onClose={onClose} />

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Info Text */}
            <div className="pb-4 border-b border-[#8a2be2]/30">
              <p className="font-['Space_Mono'] text-sm text-gray-400 leading-relaxed">
                Vamos conversar sobre desenvolvimento, tecnologia e oportunidades!
              </p>
            </div>

            {/* Contact Items */}
            {contacts.map((contact, index) => (
              <ContactItem key={index} contact={contact} index={index} />
            ))}

            {/* Status */}
            <StatusBadge />
          </div>

          {/* Decorations */}
          <Decorations />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface PanelHeaderProps {
  onClose: () => void;
}

function PanelHeader({ onClose }: PanelHeaderProps) {
  return (
    <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-[#8a2be2]/30 p-6 z-10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-['Orbitron'] text-xl text-[#00ff9f] neon-green">
          &gt; CONTATO
        </h3>
        <button
          onClick={onClose}
          className="p-2 border border-[#8a2be2]/30 hover:border-[#00ff9f]/50 hover:bg-[#00ff9f]/10 transition-all group cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 text-gray-500 group-hover:text-[#00ff9f] transition-colors" />
        </button>
      </div>
    </div>
  );
}

interface ContactItemProps {
  contact: ContactInfo;
  index: number;
}

function ContactItem({ contact, index }: ContactItemProps) {
  return (
    <motion.a
      href={contact.href}
      target={contact.href.startsWith('http') ? '_blank' : undefined}
      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 5 }}
      className="flex items-start gap-3 p-3 border border-[#8a2be2]/20 bg-black/20 hover:border-[#00ff9f]/50 hover:bg-[#00ff9f]/5 transition-all group cursor-pointer"
    >
      <div className="mt-1">
        <contact.icon className="w-5 h-5 text-[#8a2be2] group-hover:text-[#00ff9f] transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-['Orbitron'] text-xs text-gray-500 mb-1">
          {contact.label}
        </div>
        <div className="font-['Space_Mono'] text-sm text-gray-300 group-hover:text-[#00ff9f] transition-colors truncate">
          {contact.value}
        </div>
      </div>
    </motion.a>
  );
}

function StatusBadge() {
  return (
    <div className="pt-4 border-t border-[#8a2be2]/30">
      <div className="flex items-center justify-center gap-2 px-3 py-2 border border-[#00ff9f]/30 bg-[#00ff9f]/5">
        <div className="w-2 h-2 bg-[#00ff9f] rounded-full pulse-glow" />
        <span className="font-['Space_Mono'] text-xs text-[#00ff9f]">
          DISPONÍVEL PARA OPORTUNIDADES
        </span>
      </div>
    </div>
  );
}

function Decorations() {
  return (
    <>
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#00ff9f]/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#00ff9f]/30 pointer-events-none" />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff9f 2px, #00ff9f 4px)'
          }} 
        />
      </div>
    </>
  );
}
