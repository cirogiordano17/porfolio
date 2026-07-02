import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function LanguageButton() {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-slate-800/90 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg border border-slate-600 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
    >
      <img
        src={lang === 'es' ? 'https://flagcdn.com/w20/ar.png' : 'https://flagcdn.com/w20/us.png'}
        alt={lang === 'es' ? 'Argentina' : 'United States'}
        className="w-5 h-auto rounded-sm"
      />
      <span>{lang === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950">
        <LanguageButton />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
