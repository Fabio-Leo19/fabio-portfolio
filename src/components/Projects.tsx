import { motion } from 'motion/react';
import { Github, ExternalLink, Terminal } from 'lucide-react';
import { ImageWithFallback } from './shared/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'CashHawk',
      description: 'App Android de controle financeiro completo com categorização inteligente, gráficos interativos e sincronização em nuvem.',
      stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Material 3', 'MVVM'],
      status: 'DEVELOPMENT',
      github: 'https://github.com/Fabio-Leo19/CashHawk.git',
      highlight: 'Arquitetura limpa com Room Database',
    },
    {
      title: 'ModernCloset',
      description: 'E-commerce moderno e responsivo para venda de roupas, mochilas e aparelhos eletrônicos. Interface elegante com carrinho de compras e filtros avançados.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'REST API'],
      status: 'LIVE',
      github: '#',
      highlight: 'Design responsivo e UX otimizada',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE':
        return '#00ff9f';
      case 'DEVELOPMENT':
        return '#8a2be2';
      case 'PLANNING':
        return '#666';
      default:
        return '#666';
    }
  };

  return (
    <section id="projetos" className="py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729258171691-4faf8962d2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBncmlkfGVufDF8fHx8MTc2NTfigmaM4Njk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=&utm_medium=referral"
          alt="Digital Grid"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-['Space_Mono'] text-[#00ff9f] text-sm">&gt; 03</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00ff9f] to-transparent"></div>
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-white mb-2">
            PROJETOS <span className="text-[#00ff9f]">RECENTES</span>
          </h2>
          <p className="font-['Space_Mono'] text-gray-500 text-sm">PORTFOLIO_ITEMS.json</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group border border-[#8a2be2]/30 bg-black/40 backdrop-blur-sm clip-corner relative overflow-hidden"
            >
              {/* Top status bar */}
              <div className="h-1 bg-gradient-to-r from-[#8a2be2] to-[#b300ff] group-hover:from-[#00ff9f] group-hover:to-[#00ffcc] transition-all duration-300"></div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div
                  className="px-2 py-1 border text-xs font-['Space_Mono']"
                  style={{
                    borderColor: getStatusColor(project.status),
                    backgroundColor: `${getStatusColor(project.status)}10`,
                    color: getStatusColor(project.status),
                  }}
                >
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <Terminal className="w-10 h-10 text-[#8a2be2] group-hover:text-[#00ff9f] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-['Orbitron'] text-xl text-white mb-3 group-hover:text-[#00ff9f] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-['Space_Mono'] text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#8a2be2]/10 border border-[#8a2be2]/30 text-[#8a2be2] text-xs font-['Space_Mono']"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 border border-[#00ff9f]/50 text-[#00ff9f] hover:bg-[#00ff9f]/10 transition-all font-['Space_Mono'] text-sm group/btn"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-[#8a2be2]/20 group-hover:border-[#00ff9f]/50 transition-all"></div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8a2be2]/0 via-[#8a2be2]/5 to-[#00ff9f]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Fabio-Leo19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#8a2be2] text-[#8a2be2] hover:bg-[#8a2be2]/10 transition-all font-['Orbitron'] group"
          >
            <Github className="w-5 h-5" />
            Ver Todos no GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}