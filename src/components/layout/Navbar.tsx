import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../../constants/menu';
import type { MenuItem } from '../../types';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#8a2be2]/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo onScroll={handleScroll} />

            {/* Desktop Menu */}
            <DesktopMenu items={MENU_ITEMS} onScroll={handleScroll} />

            {/* Mobile Menu Button */}
            <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide */}
      <MobileMenu 
        isOpen={isOpen} 
        items={MENU_ITEMS} 
        onScroll={handleScroll} 
      />
    </>
  );
}

interface LogoProps {
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function Logo({ onScroll }: LogoProps) {
  return (
    <motion.a
      href="#home"
      className="flex items-center gap-2 group"
      onClick={(e) => onScroll(e, '#home')}
      whileHover={{ scale: 1.05 }}
    >
      <Terminal className="w-6 h-6 text-[#00ff9f]" />
      <span className="font-['Orbitron'] font-bold text-lg text-[#00ff9f] group-hover:text-shadow-[0_0_10px_#00ff9f] transition-all">
        FL.DEV
      </span>
    </motion.a>
  );
}

interface DesktopMenuProps {
  items: MenuItem[];
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function DesktopMenu({ items, onScroll }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center gap-1">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => onScroll(e, item.href)}
          className="px-4 py-2 font-['Space_Mono'] text-sm text-gray-400 hover:text-[#00ff9f] transition-all relative group"
        >
          {item.name}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00ff9f] group-hover:w-full transition-all duration-300 shadow-[0_0_5px_#00ff9f]" />
        </a>
      ))}
    </div>
  );
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 text-[#00ff9f] hover:bg-[#00ff9f]/10 transition-all"
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  items: MenuItem[];
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function MobileMenu({ isOpen, items, onScroll }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed top-16 right-0 bottom-0 w-64 bg-black/95 backdrop-blur-md border-l border-[#8a2be2]/30 z-40 md:hidden"
        >
          <div className="flex flex-col p-6 gap-2">
            <div className="mb-4 pb-4 border-b border-[#8a2be2]/30">
              <span className="font-['Space_Mono'] text-xs text-[#00ff9f]">
                &gt; MENU_NAVIGATION
              </span>
            </div>
            {items.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => onScroll(e, item.href)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-3 font-['Space_Mono'] text-sm text-gray-400 hover:text-[#00ff9f] hover:bg-[#00ff9f]/5 transition-all border-l-2 border-transparent hover:border-[#00ff9f]"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
