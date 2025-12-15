import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CTO, TechStart',
      content: 'Desenvolvedor excepcional com forte conhecimento em Spring Boot e arquitetura de microsserviços. Entregou uma API robusta e bem documentada dentro do prazo.',
      rating: 5,
      project: 'API REST para E-commerce',
    },
    {
      name: 'Ana Paula',
      role: 'Product Manager, MobileApps',
      content: 'Excelente trabalho no desenvolvimento do nosso app Android. Código limpo, seguindo todas as melhores práticas e com ótima performance.',
      rating: 5,
      project: 'App Android Nativo',
    },
    {
      name: 'Roberto Mendes',
      role: 'Founder, StartupXYZ',
      content: 'Profissional comprometido e proativo. Sua experiência em infraestrutura agregou muito na arquitetura da solução. Recomendo!',
      rating: 5,
      project: 'Sistema Backend Completo',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative bg-black/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent"></div>

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
            <span className="font-['Space_Mono'] text-[#00ff9f] text-sm">&gt; FEEDBACK</span>
            <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-[#00ff9f] to-transparent"></div>
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-white mb-2">
            O QUE DIZEM <span className="text-[#00ff9f]">SOBRE MEU TRABALHO</span>
          </h2>
          <p className="font-['Space_Mono'] text-gray-500 text-sm">CLIENT_REVIEWS.json</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group border border-[#8a2be2]/30 bg-black/40 backdrop-blur-sm p-6 clip-corner relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-[#00ff9f]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#00ff9f] fill-[#00ff9f]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-['Space_Mono'] text-sm text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Project Badge */}
                <div className="mb-4 pb-4 border-b border-[#8a2be2]/30">
                  <span className="inline-block px-2 py-1 bg-[#8a2be2]/10 border border-[#8a2be2]/30 text-[#8a2be2] text-xs font-['Space_Mono']">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div>
                  <h4 className="font-['Orbitron'] text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="font-['Space_Mono'] text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#00ff9f] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#00ff9f]"></div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-[#8a2be2]/20 group-hover:border-[#00ff9f]/50 transition-all"></div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-['Space_Mono'] text-xs text-gray-600">
            * Depoimentos de projetos freelance e colaborações anteriores
          </p>
        </motion.div>
      </div>
    </section>
  );
}
