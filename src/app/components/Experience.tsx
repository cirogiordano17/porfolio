import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Rocket, Target, TrendingUp } from 'lucide-react';

const experiences = [
  {
    icon: Rocket,
    title: 'Desarrollo de proyecto real',
    description: 'Trabajando activamente en sistema de turnos web para cliente, desde la arquitectura hasta el despliegue.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Mejora continua',
    description: 'Implementación iterativa, incorporación de feedback y evolución constante del producto en producción.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Target,
    title: 'Buenas prácticas',
    description: 'Enfoque en código limpio, arquitectura escalable, containerización y preparación para evolución tecnológica.',
    color: 'from-green-500 to-green-600',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experiencia" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Enfoque
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Mi aproximación al desarrollo de software
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50"
                >
                  <div className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline-style extra info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 bg-slate-800/30 rounded-xl p-8 border border-slate-700/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Trayectoria actual
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="text-slate-200 font-medium mb-1">
                        Sistema de Gestión de Turnos
                      </p>
                      <p className="text-slate-400 text-sm">
                        Desarrollo activo para cliente real, arquitectura Node.js + Express + PostgreSQL + Docker
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-purple-500"></div>
                    <div>
                      <p className="text-slate-200 font-medium mb-1">
                        Expansión de stack técnico
                      </p>
                      <p className="text-slate-400 text-sm">
                        Aprendizaje y aplicación de React, TypeScript, Java y Python
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <p className="text-slate-200 font-medium mb-1">
                        Ingeniería en Sistemas
                      </p>
                      <p className="text-slate-400 text-sm">
                        Estudiante avanzado, formación continua en desarrollo de software
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
