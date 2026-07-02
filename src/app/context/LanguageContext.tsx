import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  heroSubtitle: string;
  heroViewProjects: string;
  heroContact: string;
  heroDownloadCV: string;
  heroProfileAlt: string;
  aboutTitle: string;
  aboutBody: string;
  aboutCard1Title: string;
  aboutCard1Desc: string;
  aboutCard2Title: string;
  aboutCard2Desc: string;
  aboutCard3Title: string;
  aboutCard3Desc: string;
  projectsTitle: string;
  projectsSubtitle: string;
  project1Title: string;
  project1Status: string;
  project1Desc: string;
  projectsTechLabel: string;
  projectsViewDemo: string;
  projectsViewCode: string;
  project2Title: string;
  project2Badge: string;
  project2Desc: string;
  projectsNext: string;
  projectsNextDesc: string;
  skillsTitle: string;
  skillsSubtitle: string;
  skillsDatabase: string;
  skillsTools: string;
  skillsLearning: string;
  experienceTitle: string;
  experienceSubtitle: string;
  exp1Title: string;
  exp1Desc: string;
  exp2Title: string;
  exp2Desc: string;
  exp3Title: string;
  exp3Desc: string;
  timelineTitle: string;
  timeline1Title: string;
  timeline1Desc: string;
  timeline2Title: string;
  timeline2Desc: string;
  timeline3Title: string;
  timeline3Desc: string;
  contactTitle: string;
  contactSubtitle: string;
  contactPhone: string;
  footerCopy: string;
}

const translations: Record<Language, Translations> = {
  es: {
    heroSubtitle: 'Estudiante de Ingeniería en Sistemas',
    heroViewProjects: 'Ver proyectos',
    heroContact: 'Contacto',
    heroDownloadCV: 'Descargar CV',
    heroProfileAlt: 'Foto de perfil',
    aboutTitle: 'Sobre mí',
    aboutBody: 'Soy estudiante avanzado de Ingeniería en Sistemas y actualmente estoy desarrollando aplicaciones reales, trabajando en proyectos desplegados y en evolución constante, mientras sigo ampliando mi stack hacia tecnologías como React, TypeScript, Java y Python.',
    aboutCard1Title: 'Formación Técnica',
    aboutCard1Desc: 'Enfoque en fundamentos de programación, lógica y desarrollo de software.',
    aboutCard2Title: 'Experiencia Práctica',
    aboutCard2Desc: 'Desarrollo de proyectos reales como parte del aprendizaje y práctica continua.',
    aboutCard3Title: 'En Crecimiento',
    aboutCard3Desc: 'Exploración de tecnologías como Java, Python y JavaScript.',
    projectsTitle: 'Proyectos',
    projectsSubtitle: 'Aplicaciones reales en desarrollo activo y producción',
    project1Title: 'Sistema de Gestión de Turnos Web',
    project1Status: 'En Desarrollo',
    project1Desc: 'Aplicación web para gestión de turnos desarrollada para un cliente real. Actualmente desplegada para pruebas y en evolución constante, con desarrollo activo para incorporar automatizaciones y mejoras. Frontend construido con HTML, CSS y JavaScript vanilla, backend con Node.js y Express, base de datos PostgreSQL, contenedorizado con Docker. El proyecto está planificado para evolucionar hacia una arquitectura más robusta incorporando React y TypeScript en futuras iteraciones.',
    projectsTechLabel: 'Tecnologías:',
    projectsViewDemo: 'Ver demo',
    projectsViewCode: 'Ver código',
    project2Title: 'Turnero Hospitalario',
    project2Badge: 'Académico',
    project2Desc: 'App de escritorio para gestión de turnos médicos en clínica hospitalaria. Arquitectura ECB (Jacobson) con Patrón State para el ciclo de vida del turno, DAOs propios sin ORM, recetas en PDF con QR, notificaciones por email y reportes con gráficos. 54 tests unitarios con pytest. TP integrador UTN-FRC.',
    projectsNext: 'Próximo proyecto',
    projectsNextDesc: 'En desarrollo...',
    skillsTitle: 'Tecnologías',
    skillsSubtitle: 'Stack técnico actual y en desarrollo',
    skillsDatabase: 'Base de datos',
    skillsTools: 'Herramientas',
    skillsLearning: 'Próximo paso / Aprendiendo',
    experienceTitle: 'Enfoque',
    experienceSubtitle: 'Mi aproximación al desarrollo de software',
    exp1Title: 'Desarrollo de proyecto real',
    exp1Desc: 'Trabajando activamente en sistema de turnos web para cliente, desde la arquitectura hasta el despliegue.',
    exp2Title: 'Mejora continua',
    exp2Desc: 'Implementación iterativa, incorporación de feedback y evolución constante del producto en producción.',
    exp3Title: 'Buenas prácticas',
    exp3Desc: 'Enfoque en código limpio, arquitectura escalable, containerización y preparación para evolución tecnológica.',
    timelineTitle: 'Trayectoria actual',
    timeline1Title: 'Sistema de Gestión de Turnos',
    timeline1Desc: 'Desarrollo activo para cliente real, arquitectura Node.js + Express + PostgreSQL + Docker',
    timeline2Title: 'Expansión de stack técnico',
    timeline2Desc: 'Aprendizaje y aplicación de React, TypeScript, Java y Python',
    timeline3Title: 'Ingeniería en Sistemas',
    timeline3Desc: 'Estudiante avanzado, formación continua en desarrollo de software',
    contactTitle: 'Contacto',
    contactSubtitle: '¿Tenés un proyecto en mente o querés conversar? Escribime',
    contactPhone: 'Teléfono',
    footerCopy: 'Proyecto personal. Código disponible en GitHub.',
  },
  en: {
    heroSubtitle: 'Systems Engineering Student',
    heroViewProjects: 'View projects',
    heroContact: 'Contact',
    heroDownloadCV: 'Download CV',
    heroProfileAlt: 'Profile photo',
    aboutTitle: 'About me',
    aboutBody: 'I am an advanced Systems Engineering student currently building real-world applications, working on deployed and continuously evolving projects, while expanding my stack into technologies like React, TypeScript, Java and Python.',
    aboutCard1Title: 'Technical Training',
    aboutCard1Desc: 'Focus on programming fundamentals, logic and software development.',
    aboutCard2Title: 'Hands-on Experience',
    aboutCard2Desc: 'Building real projects as part of continuous learning and practice.',
    aboutCard3Title: 'Growing',
    aboutCard3Desc: 'Exploring technologies like Java, Python and JavaScript.',
    projectsTitle: 'Projects',
    projectsSubtitle: 'Real applications in active development and production',
    project1Title: 'Web Appointment Management System',
    project1Status: 'In Development',
    project1Desc: 'Web application for appointment management developed for a real client. Currently deployed for testing and continuously evolving, with active development to incorporate automations and improvements. Frontend built with HTML, CSS and vanilla JavaScript, backend with Node.js and Express, PostgreSQL database, containerized with Docker. The project is planned to evolve towards a more robust architecture incorporating React and TypeScript in future iterations.',
    projectsTechLabel: 'Technologies:',
    projectsViewDemo: 'View demo',
    projectsViewCode: 'View code',
    project2Title: 'Hospital Appointment System',
    project2Badge: 'Academic',
    project2Desc: 'Desktop app for managing medical appointments in a hospital clinic. ECB architecture (Jacobson) with State Pattern for appointment lifecycle, custom DAOs without ORM, PDF prescriptions with QR, email notifications and chart reports. 54 unit tests with pytest. UTN-FRC integrative project.',
    projectsNext: 'Next project',
    projectsNextDesc: 'In progress...',
    skillsTitle: 'Technologies',
    skillsSubtitle: 'Current and in-development tech stack',
    skillsDatabase: 'Database',
    skillsTools: 'Tools',
    skillsLearning: 'Next step / Learning',
    experienceTitle: 'Approach',
    experienceSubtitle: 'My approach to software development',
    exp1Title: 'Real project development',
    exp1Desc: 'Actively working on a web appointment system for a client, from architecture to deployment.',
    exp2Title: 'Continuous improvement',
    exp2Desc: 'Iterative implementation, feedback integration and constant evolution of the product in production.',
    exp3Title: 'Best practices',
    exp3Desc: 'Focus on clean code, scalable architecture, containerization and readiness for technological evolution.',
    timelineTitle: 'Current journey',
    timeline1Title: 'Appointment Management System',
    timeline1Desc: 'Active development for a real client, Node.js + Express + PostgreSQL + Docker architecture',
    timeline2Title: 'Tech stack expansion',
    timeline2Desc: 'Learning and applying React, TypeScript, Java and Python',
    timeline3Title: 'Systems Engineering',
    timeline3Desc: 'Advanced student, continuous training in software development',
    contactTitle: 'Contact',
    contactSubtitle: 'Have a project in mind or want to chat? Reach out',
    contactPhone: 'Phone',
    footerCopy: 'Personal project. Code available on GitHub.',
  },
};

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es');

  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
