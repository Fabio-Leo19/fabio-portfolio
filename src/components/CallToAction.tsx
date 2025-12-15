import { motion } from 'motion/react';
import { Rocket, Github, Mail, Linkedin } from 'lucide-react';

export function CallToAction() {
  const stats = [
    { value: '2+', label: 'Projetos Completados' },
    { value: '5+', label: 'Tecnologias Dominadas' },
    { value: '3+', label: 'Anos de Experiência em TI' },
    { value: '100%', label: 'Comprometimento' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Fabio-Leo19', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/fabioleonardomoraes', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=fabioldemoraes@gmail.com&su=Contato%20pelo%20Portf%C3%B3lio', label: 'Email' },
  ];

  return (
    <section id="contato" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"></div>
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, #8a2be2 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, #00ff9f 0%, transparent 50%)
              `,
              filter: 'blur(80px)'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#8a2be2]/30 bg-black/40 p-6 text-center clip-corner group hover:border-[#00ff9f]/50 transition-all"
              >
                <div className="font-['Orbitron'] text-3xl md:text-4xl text-[#00ff9f] mb-2 neon-green">
                  {stat.value}
                </div>
                <div className="font-['Space_Mono'] text-xs md:text-sm text-gray-500 uppercase">
                  {stat.label}
                </div>
                <div className="mt-3 h-[1px] w-12 mx-auto bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent group-hover:via-[#00ff9f] transition-all"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-[#00ff9f]/30 bg-[#00ff9f]/5 clip-corner"
          >
            <Rocket className="w-4 h-4 text-[#00ff9f]" />
            <span className="font-['Space_Mono'] text-xs text-[#00ff9f]">VAMOS TRABALHAR JUNTOS</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Orbitron'] text-3xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Tem um projeto em mente?
            <br />
            <span className="text-[#00ff9f]">Vamos torná-lo realidade!</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Space_Mono'] text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Seja para desenvolver uma API robusta, criar um aplicativo Android moderno, 
            ou implementar soluções DevOps, estou pronto para transformar suas ideias em código de qualidade.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => {
                const contactButton = document.querySelector('button[class*="fixed bottom-8"]') as HTMLButtonElement;
                if (contactButton) contactButton.click();
              }}
              className="group px-8 py-4 bg-[#00ff9f] text-black font-['Orbitron'] hover:bg-[#00ff9f]/90 transition-all clip-corner relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Entrar em Contato
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9f] to-[#00ffcc] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <a
              href="https://github.com/Fabio-Leo19"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-[#8a2be2] text-[#8a2be2] font-['Orbitron'] hover:bg-[#8a2be2]/10 transition-all clip-corner relative"
            >
              <span className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                Ver Portfólio Completo
              </span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <span className="font-['Space_Mono'] text-sm text-gray-600">Ou conecte-se:</span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-2 border border-[#8a2be2]/30 hover:border-[#00ff9f]/50 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-600 group-hover:text-[#00ff9f] transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Lines */}
        <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-gradient-to-r from-[#8a2be2] to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-gradient-to-l from-[#8a2be2] to-transparent"></div>
      </div>
    </section>
  );
}