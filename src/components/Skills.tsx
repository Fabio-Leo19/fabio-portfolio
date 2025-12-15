import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Server, 
  GitBranch, 
  Monitor,
  Shield,
  Settings
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Backend',
      color: '#00ff9f',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Kotlin', level: 80 },
        { name: 'Spring Boot', level: 80 },
        { name: 'REST API', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      category: 'Mobile',
      color: '#8a2be2',
      skills: [
        { name: 'Android', level: 85 },
        { name: 'Jetpack Compose', level: 80 },
        { name: 'Room Database', level: 75 },
        { name: 'Coroutines', level: 75 },
      ],
    },
    {
      category: 'Frontend',
      color: '#b300ff',
      skills: [
        { name: 'React', level: 75 },
        { name: 'TypeScript', level: 75 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 75 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Bootstrap', level: 75 },
      ],
    },
    {
      category: 'DevOps & Ferramentas',
      color: '#00ff9f',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'GitHub Actions', level: 65 },
        { name: 'Linux', level: 75 },
        { name: 'Zabbix', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative bg-black/20">
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
            <span className="font-['Space_Mono'] text-[#00ff9f] text-sm">&gt; 04</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00ff9f] to-transparent"></div>
          </div>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-white mb-2">
            SKILLS & <span className="text-[#00ff9f]">TECNOLOGIAS</span>
          </h2>
          <p className="font-['Space_Mono'] text-gray-500 text-sm">TECH_STACK.config</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group border border-[#8a2be2]/30 bg-black/40 backdrop-blur-sm p-6 clip-corner relative overflow-hidden"
            >
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 w-full h-[2px] transition-all duration-300"
                style={{ 
                  background: `linear-gradient(to right, ${category.color}, transparent)`,
                  opacity: 0.5
                }}
              ></div>

              {/* Icon */}
              <div className="mb-4">
                <Code2 
                  className="w-10 h-10 transition-all duration-300" 
                  style={{ 
                    color: category.color,
                    filter: `drop-shadow(0 0 8px ${category.color})`
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="font-['Orbitron'] text-xl mb-4 transition-colors"
                style={{ color: category.color }}
              >
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-center gap-2 font-['Space_Mono'] text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    <div 
                      className="w-1 h-1 rounded-full pulse-glow" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Corner accent */}
              <div 
                className="absolute bottom-0 right-0 w-12 h-12 border-r border-b opacity-30 group-hover:opacity-100 transition-all"
                style={{ borderColor: category.color }}
              ></div>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ backgroundColor: category.color }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 border border-[#8a2be2]/30 bg-black/40 p-8 clip-corner-all"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Linguagens', value: '5+' },
              { label: 'Frameworks', value: '8+' },
              { label: 'Ferramentas', value: '15+' },
              { label: 'Projetos', value: '10+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-['Orbitron'] text-3xl md:text-4xl text-[#00ff9f] mb-2 neon-green">
                  {stat.value}
                </div>
                <div className="font-['Space_Mono'] text-xs md:text-sm text-gray-500 uppercase">
                  {stat.label}
                </div>
                <div className="mt-2 h-[1px] w-12 mx-auto bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00ff9f]/30 bg-[#00ff9f]/5">
            <div className="w-2 h-2 bg-[#00ff9f] rounded-full pulse-glow"></div>
            <span className="font-['Space_Mono'] text-xs text-[#00ff9f]">
              CONSTANTLY_LEARNING && EVOLVING
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}