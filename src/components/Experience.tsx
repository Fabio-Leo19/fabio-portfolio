import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Assistente de TI / Service Desk N1/N2',
      company: 'Salutem Móveis Hospitalares',
      location: 'São Paulo, SP',
      period: 'Ago/2024 – Atual',
      responsibilities: [
        'Suporte Estratégico e Estabilidade: Atuo na linha de frente do Suporte Técnico (Help Desk)',
        'Diagnóstico e Ação Rápida: Responsável pelo diagnóstico e resolução de incidentes críticos da Infraestrutura de tecnologia da informação',
        'Gestão de Chamados e Usuários: Forte atuação no atendimento a usuários, realizando troubleshooting eficiente e manutenção de equipamentos',
        'Compromisso e Melhoria Contínua: Comprometido em manter um ambiente tecnológico seguro e eficiente',
      ],
    },
    {
      role: 'Desenvolvedor Full Stack & Mobile (Projetos)',
      company: 'Freelance & Projetos Pessoais',
      location: 'Remote',
      period: '2023 – Atual',
      responsibilities: [
        'Desenvolvimento de APIs REST com Spring Boot, implementando autenticação JWT e validação de dados',
        'Criação de aplicativos Android nativos com Kotlin, Jetpack Compose e arquitetura MVVM',
        'Desenvolvimento de interfaces web responsivas com React, TypeScript e Bootstrap',
        'Integração com bancos de dados PostgreSQL, MySQL e Room para persistência local',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 lg:py-32 relative bg-black/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent"></div>
      
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
            <span className="font-['Space_Mono'] text-[#00ff9f] text-sm">&gt; 02</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00ff9f] to-transparent"></div>
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-white mb-2">
            EXPERIÊNCIA <span className="text-[#00ff9f]">PROFISSIONAL</span>
          </h2>
          <p className="font-['Space_Mono'] text-gray-500 text-sm">WORK_HISTORY.log</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#8a2be2] via-[#8a2be2]/50 to-transparent transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative ${index % 2 === 0 ? 'lg:pr-[calc(50%+3rem)]' : 'lg:pl-[calc(50%+3rem)] lg:ml-auto'}`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute top-8 left-1/2 w-4 h-4 bg-[#00ff9f] border-4 border-black rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_#00ff9f]"></div>

              {/* Card */}
              <div className="group border border-[#8a2be2]/30 bg-black/40 p-6 lg:p-8 clip-corner hover:border-[#00ff9f]/50 transition-all relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8a2be2]/0 via-[#8a2be2]/5 to-[#8a2be2]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Top decorative line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#00ff9f] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#00ff9f]"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-['Orbitron'] text-xl md:text-2xl text-white mb-2 group-hover:text-[#00ff9f] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-[#8a2be2] mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-['Space_Mono'] text-sm">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 text-gray-500 text-sm">
                      <div className="flex items-center gap-2 font-['Space_Mono']">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 font-['Space_Mono']">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#8a2be2]/30 via-[#8a2be2]/50 to-[#8a2be2]/30 mb-4"></div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 font-['Space_Mono'] text-sm text-gray-400"
                      >
                        <span className="text-[#00ff9f] mt-1">▹</span>
                        <span className="flex-1">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Status Indicator */}
                  {index === 0 && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 border border-[#00ff9f]/30 bg-[#00ff9f]/5">
                      <div className="w-2 h-2 bg-[#00ff9f] rounded-full pulse-glow"></div>
                      <span className="font-['Space_Mono'] text-xs text-[#00ff9f]">ATUAL</span>
                    </div>
                  )}
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-[#8a2be2]/30 group-hover:border-[#00ff9f]/50 transition-all"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#8a2be2]/20 bg-black/20">
            <span className="font-['Space_Mono'] text-xs text-gray-600">&gt; END_OF_TIMELINE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}