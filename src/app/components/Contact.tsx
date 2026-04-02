import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contacto" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Contacto
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente o querés conversar? Escribime
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="mailto:tu@email.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-slate-400 text-sm break-all">cirogiordano17s@gmail.com
              </p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ciro-giordano-43327824a"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                <Linkedin className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm">Ciro Giordano</p>
            </motion.a>

            <motion.a
              href="tel:+123456789"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                <Phone className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Teléfono</h3>
              <p className="text-slate-400 text-sm">+54 (9) 351 325 2802</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}