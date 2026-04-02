import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skills = {
  frontend: [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
  ],
  database: [
    { name: 'PostgreSQL', icon: '🐘' },
  ],
  tools: [
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🔧' },
  ],
  learning: [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
  ],
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Tecnologías
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Stack técnico actual y en desarrollo
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                Frontend
              </h3>
              <div className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 cursor-default"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Backend
              </h3>
              <div className="space-y-3">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 cursor-default"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💾</span>
                Base de datos
              </h3>
              <div className="space-y-3">
                {skills.database.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 cursor-default"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Herramientas
              </h3>
              <div className="space-y-3">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 cursor-default"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/30 md:col-span-2 lg:col-span-2"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Próximo paso / Aprendiendo
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.learning.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 cursor-default border border-blue-500/20"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
