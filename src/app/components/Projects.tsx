import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const techStack = [
  { name: 'HTML', color: 'bg-orange-500' },
  { name: 'CSS', color: 'bg-blue-500' },
  { name: 'JavaScript', color: 'bg-yellow-500' },
  { name: 'Node.js', color: 'bg-green-500' },
  { name: 'Express', color: 'bg-gray-500' },
  { name: 'PostgreSQL', color: 'bg-blue-600' },
  { name: 'Docker', color: 'bg-blue-400' },
];

const tpdaoStack = [
  { name: 'Python 3.13', color: 'bg-blue-500' },
  { name: 'Tkinter', color: 'bg-gray-500' },
  { name: 'MySQL', color: 'bg-orange-500' },
  { name: 'Docker', color: 'bg-blue-400' },
  { name: 'pytest', color: 'bg-green-500' },
  { name: 'ReportLab', color: 'bg-red-500' },
  { name: 'Matplotlib', color: 'bg-purple-500' },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="proyectos" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Proyectos
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Aplicaciones reales en desarrollo activo y producción
          </p>

          {/* Proyecto Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 mb-12"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Sistema de Gestión de Turnos Web
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    En Desarrollo
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-xl border border-slate-700">
              <img
                src="/fondo-peluqueria.jpeg"
                alt="Sistema de turnos"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Aplicación web para gestión de turnos desarrollada para un cliente real. 
              Actualmente desplegada para pruebas y en evolución constante, con desarrollo 
              activo para incorporar automatizaciones y mejoras. Frontend construido con 
              HTML, CSS y JavaScript vanilla, backend con Node.js y Express, base de datos 
              PostgreSQL, contenedorizado con Docker. El proyecto está planificado para 
              evolucionar hacia una arquitectura más robusta incorporando React y TypeScript 
              en futuras iteraciones.
            </p>

            <div className="mb-6">
              <p className="text-sm text-slate-400 mb-3 font-semibold">Tecnologías:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 rounded-lg ${tech.color} bg-opacity-20 text-white text-sm font-medium border border-current border-opacity-30 cursor-default transition-all duration-200`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://turnero-public.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Ver demo
              </a>
              <a
                href="https://github.com/cirogiordano17/turnero-public"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 border border-slate-600"
              >
                <Github className="w-4 h-4" />
                Ver código
              </a>
            </div>
          </motion.div>

          {/* Proyectos Secundarios */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Proyecto Hospital */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  Turnero Hospitalario
                </h3>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mb-3">
                Académico
              </span>

              <div className="mb-4 overflow-hidden rounded-lg border border-slate-700">
                <img
                  src="/tpdao-turnos.png"
                  alt="Turnero hospitalario - vista de turnos"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                App de escritorio para gestión de turnos médicos en clínica hospitalaria. Arquitectura ECB (Jacobson) con Patrón State para el ciclo de vida del turno, DAOs propios sin ORM, recetas en PDF con QR, notificaciones por email y reportes con gráficos. 54 tests unitarios con pytest. TP integrador UTN-FRC.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tpdaoStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 rounded-lg ${tech.color} bg-opacity-20 text-white text-sm font-medium border border-current border-opacity-30 cursor-default transition-all duration-200`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>

              <a
                href="https://github.com/cirogiordano17/turnero-hospital-UTN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600"
              >
                <Github className="w-4 h-4" />
                Ver código
              </a>
            </motion.div>

            {/* Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 border-dashed"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-slate-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-500">
                  Próximo proyecto
                </h3>
              </div>
              <p className="text-slate-600 text-sm">
                En desarrollo...
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
