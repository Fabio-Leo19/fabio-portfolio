import { motion } from 'motion/react';
import { 
  Code, 
  Smartphone, 
  Database, 
  Workflow, 
  Shield,
  Zap
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Backend',
      description: 'APIs RESTful escaláveis com Spring Boot, autenticação segura, integração de banco de dados e documentação completa.',
      features: ['REST APIs', 'Microserviços', 'JWT Auth', 'Swagger Docs'],
      color: '#00ff9f',
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Android',
      description: 'Apps nativos modernos com Kotlin e Jetpack Compose, seguindo Material Design 3 e melhores práticas Android.',
      features: ['Kotlin Native', 'Jetpack Compose', 'MVVM', 'Material 3'],
      color: '#8a2be2',
    },
    {
      icon: Database,
      title: 'Integração de Dados',
      description: 'Modelagem e integração de bancos relacionais, otimização de queries e implementação de cache para performance.',
      features: ['PostgreSQL', 'MySQL', 'Redis Cache', 'Query Optimization'],
      color: '#b300ff',
    },
    {
      icon: Workflow,
      title: 'Automação DevOps',
      description: 'Pipelines CI/CD, containerização com Docker, deploy automatizado e monitoramento de aplicações.',
      features: ['Docker', 'CI/CD', 'GitHub Actions', 'Monitoring'],
      color: '#00ff9f',
    },
    {
      icon: Shield,
      title: 'Infraestrutura TI',
      description: 'Suporte técnico especializado, troubleshooting, administração de sistemas e gestão de incidentes.',
      features: ['Service Desk', 'Troubleshooting', 'Active Directory', 'Zabbix'],
      color: '#8a2be2',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 100px, #8a2be2 100px, #8a2be2 101px),
            repeating-linear-gradient(90deg, transparent, transparent 100px, #8a2be2 100px, #8a2be2 101px)
          `
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-[#00ff9f] to-transparent"></div>
            <span className="font-['Space_Mono'] text-[#00ff9f] text-sm">&gt; SERVIÇOS</span>
            <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-[#00ff9f] to-transparent"></div>
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-white mb-4">
            O QUE EU <span className="text-[#00ff9f]">FAÇO</span>
          </h2>
          <p className="font-['Space_Mono'] text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Soluções completas de desenvolvimento, desde a concepção até o deploy em produção
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group border border-[#8a2be2]/30 bg-black/40 backdrop-blur-sm p-6 clip-corner relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div 
                className="absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                style={{ 
                  backgroundColor: service.color,
                  boxShadow: `0 0 10px ${service.color}`
                }}
              ></div>

              {/* Icon */}
              <div className="mb-4">
                <div 
                  className="inline-flex p-3 border transition-all duration-300"
                  style={{
                    borderColor: `${service.color}40`,
                    backgroundColor: `${service.color}10`
                  }}
                >
                  <service.icon 
                    className="w-8 h-8 transition-all duration-300" 
                    style={{ color: service.color }}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 
                className="font-['Orbitron'] text-xl text-white mb-3 group-hover:transition-colors duration-300"
                style={{ 
                  color: 'white'
                }}
              >
                {service.title}
              </h3>

              <p className="font-['Space_Mono'] text-sm text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-['Space_Mono'] border transition-all"
                    style={{
                      borderColor: `${service.color}30`,
                      backgroundColor: `${service.color}05`,
                      color: service.color
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div 
                className="absolute bottom-0 right-0 w-12 h-12 border-r border-b opacity-30 group-hover:opacity-100 transition-all"
                style={{ borderColor: service.color }}
              ></div>

              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"
                style={{ backgroundColor: service.color }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 border border-[#8a2be2]/30 bg-black/40 clip-corner">
            <h3 className="font-['Orbitron'] text-2xl text-white">
              Pronto para iniciar seu projeto?
            </h3>
            <p className="font-['Space_Mono'] text-sm text-gray-400 max-w-md">
              Entre em contato para discutir como posso ajudar a transformar sua ideia em realidade
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contato');
                if (element) {
                  // Trigger the contact bubble
                  const contactButton = document.querySelector('button[class*="fixed bottom-8"]') as HTMLButtonElement;
                  if (contactButton) contactButton.click();
                }
              }}
              className="px-8 py-3 bg-[#00ff9f] text-black font-['Orbitron'] hover:bg-[#00ff9f]/90 transition-all clip-corner relative overflow-hidden group"
            >
              <span className="relative z-10">Entrar em Contato</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9f] to-[#00ffcc] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}