import { motion } from 'motion/react';
import { Code2, Shield, Server, Cpu } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Backend', value: 75, color: '#00ff9f' },
    { label: 'Mobile', value: 60, color: '#8a2be2' },
    { label: 'Frontend', value: 75, color: '#b300ff' },
    { label: 'DevOps', value: 50, color: '#00ff9f' },
  ];

  const areas = [
    { icon: Code2, title: 'Backend Dev', desc: 'Spring Boot, Kotlin, Java' },
    { icon: Cpu, title: 'Mobile Dev', desc: 'Android, Jetpack Compose' },
    { icon: Server, title: 'DevOps', desc: 'Docker, Linux, CI/CD' },
    { icon: Shield, title: 'Infraestrutura', desc: 'Zabbix, GLPI, AD' },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#8a2be2] rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#00ff9f]"></div>
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
            <span className="font-['Space_Mono'] text-[#00ff9f] text-sm">&gt; 01</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00ff9f] to-transparent"></div>
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-white mb-2">
            SOBRE <span className="text-[#00ff9f]">MIM</span>
          </h2>
          <p className="font-['Space_Mono'] text-gray-500 text-sm">QUEM_SOU.txt</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-[#00ff9f] pl-6 space-y-4">
              <p className="font-['Space_Mono'] text-gray-300 text-sm md:text-base leading-relaxed">
                Desenvolvedor especializado em <span className="text-[#00ff9f]">aplicações backend escaláveis</span> com 
                Java/Kotlin e <span className="text-[#00ff9f]">desenvolvimento mobile Android nativo</span>. 
                Experiência sólida em infraestrutura de TI, trazendo perspectiva única para arquitetura de sistemas.
              </p>
              <p className="font-['Space_Mono'] text-gray-300 text-sm md:text-base leading-relaxed">
                Construo APIs RESTful com <span className="text-[#8a2be2]">Spring Boot</span>, aplicativos Android modernos com 
                <span className="text-[#8a2be2]"> Jetpack Compose</span>, e interfaces web responsivas com <span className="text-[#8a2be2]">React e Bootstrap</span>. 
                Focado em clean code, padrões de design e práticas DevOps.
              </p>
              <p className="font-['Space_Mono'] text-gray-300 text-sm md:text-base leading-relaxed">
                Formado em <span className="text-[#b300ff]">Front End Design</span> e com background em <span className="text-[#b300ff]">Gestão de TI</span>, 
                atuo como <span className="text-[#b300ff]">Assistente de TI / Service Desk</span> com experiência prática em 
                infraestrutura, troubleshooting e monitoramento de sistemas. 
                Essa base me permite desenvolver soluções mais seguras e bem arquitetadas.
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00ff9f]/30 bg-[#00ff9f]/5 clip-corner">
              <div className="w-2 h-2 bg-[#00ff9f] rounded-full pulse-glow"></div>
              <span className="font-['Space_Mono'] text-xs text-[#00ff9f]">STATUS: DISPONÍVEL PARA PROJETOS</span>
            </div>
          </motion.div>

          {/* Right Column - Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Status Panel */}
            <div className="border border-[#8a2be2]/30 bg-black/40 p-6 clip-corner relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent"></div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Space_Mono'] text-xs text-[#8a2be2]">&gt; NÍVEL DE CONHECIMENTO</span>
                  <span className="font-['Space_Mono'] text-xs text-gray-600">v2.0.24</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-['Space_Mono'] text-sm text-gray-400">{stat.label}</span>
                      <span className="font-['Space_Mono'] text-sm" style={{ color: stat.color }}>
                        {stat.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#0a0a0a] border border-[#8a2be2]/20 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full relative"
                        style={{ backgroundColor: stat.color }}
                      >
                        <div className="absolute inset-0" style={{ 
                          boxShadow: `0 0 10px ${stat.color}`,
                          opacity: 0.8
                        }}></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="border border-[#8a2be2]/20 bg-black/20 p-4 clip-corner group hover:border-[#00ff9f]/50 transition-all cursor-pointer"
                >
                  <area.icon className="w-8 h-8 text-[#8a2be2] mb-3 group-hover:text-[#00ff9f] transition-colors" />
                  <h4 className="font-['Orbitron'] text-sm text-white mb-1">{area.title}</h4>
                  <p className="font-['Space_Mono'] text-xs text-gray-600">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}