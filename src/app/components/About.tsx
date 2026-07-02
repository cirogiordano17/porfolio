import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            {t.aboutTitle}
          </h2>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.aboutBody}
            </p>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-600/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t.aboutCard1Title}</h3>
                  <p className="text-slate-400 text-sm">{t.aboutCard1Desc}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-purple-600/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t.aboutCard2Title}</h3>
                  <p className="text-slate-400 text-sm">{t.aboutCard2Desc}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-green-600/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-green-500"></div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t.aboutCard3Title}</h3>
                  <p className="text-slate-400 text-sm">{t.aboutCard3Desc}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
