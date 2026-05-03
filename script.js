// ==========================================
// PORTFOLIO LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. I18N (INTERNACIONALIZACIÓN) ---
    const translations = {
        'es': {
            'page-title': 'Moshe Shabes | Fullstack Developer',
            'meta-desc': 'Moshe Shabes Gittler - Fullstack Web Developer. Creación de soluciones web modernas, escalables y orientadas a la conversión.',
            'nav-about': 'Sobre mí',
            'nav-projects': 'Proyectos',
            'nav-experience': 'Experiencia',
            'nav-contact': 'Contacto',
            'hero-greeting': 'Hola, soy',
            'hero-role': 'Fullstack Web Developer',
            'hero-value': 'Transformo ideas en experiencias digitales excepcionales. Construyo aplicaciones web escalables, atractivas y optimizadas para impulsar el éxito de tu negocio.',
            'hero-cta-contact': 'Contáctame',
            'hero-cta-projects': 'Ver proyectos',
            'about-title': 'Sobre mí',
            'about-text-1': 'Soy un desarrollador apasionado por crear soluciones eficientes a problemas complejos. Mi enfoque principal es aportar <strong>valor real</strong>: no solo escribo código, sino que diseño herramientas digitales que mejoran la experiencia del usuario y optimizan procesos operativos.',
            'about-text-2': 'Con experiencia tanto en el diseño de interfaces como en la arquitectura de servidores, ofrezco una perspectiva integral para cualquier proyecto web.',
            'about-skills-title': 'Skills Principales',
            'projects-title': 'Proyectos Destacados',
            'project-1-desc': 'Métricas de Mercado Libre México. Muestra los productos más vendidos por categoría, tendencias de búsqueda y recomendaciones basadas en datos.',
            'project-2-desc': 'Plataforma web para una empresa de logística y envío de pedidos en toda la Ciudad de México, optimizando la gestión de entregas.',
            'project-3-desc': 'Aplicación de delivery de comida. Incluye sistema de autenticación, visualización de menús, subida de archivos y geolocalización de restaurantes.',
            'project-4-desc': 'Aplicación web que permite realizar operaciones CRUD sobre una colección de memes, subiendo enlaces, modificando o eliminando contenido en tiempo real.',
            'experience-title': 'Experiencia Laboral',
            'exp-1-date': 'Febrero 2024 - Presente',
            'exp-1-content': '<ul><li><b>Liderazgo End-to-End: </b>Diseñé y desplegué desde cero la arquitectura cloud, frontend y backend del MVP, logrando el lanzamiento comercial exitoso de la plataforma como único desarrollador.</li><li><b>Optimización: </b> Automaticé la conciliación fiscal de vendedores de Mercado Libre, mediante la integración de APIs de Mercado Libre y Mercado Pago, ayudando a eliminar el 100% de los errores manuales y ahorrando múltiples horas diarias a los clientes.</li><li><b> Aplicación escalable: </b>Implementé una estructura modular basada en componentes reutilizables, garantizando un crecimiento sostenido del sistema.</li></ul>',
            'exp-2-date': 'Noviembre 2022 - Abril 2025',
            'exp-2-content': '<ul><li><b>Rescate de Proyecto Crítico: </b>Optimicé el sistema interno que consiste en el envío de ofertas al CENACE (mercado eléctrico nacional), logrando una <b>mejora del 95% en tiempos de respuesta</b> y asegurando la continuidad del negocio.</li><li><b>Eficiencia Operativa: </b>Reduje la carga de trabajo manual del equipo operativo en un <b>90%</b>, mediante la automatización de flujos repetitivos y la generación automática de reportes internos y para clientes.</li><li><b>Transformación Tecnológica y Mentoría: </b>Tras una rápida especialización autónoma en Python y AWS, lideré su adopción como estándares de la compañía. En menos de un año, pasé de la implementación inicial a actuar como referente técnico y supervisor de calidad para el equipo de ingenieros junior.</li></ul>',
            'exp-3-date': 'Octubre 2019 - Noviembre 2022',
            'exp-3-content': '<ul><li><b>Modernización de Sistemas: </b>Lideré la migración completa de un CRM legado a un stack moderno (MERN), incrementando drásticamente el rendimiento y la escalabilidad de la plataforma.</li><li><b>Desarrollo Mobile: </b>Diseñé y ejecuté nuevos módulos para aplicaciones móviles utilizando React Native e Ionic 3, expandiendo el alcance del producto a dispositivos iOS y Android.</li></ul>',
            'exp-4-date': 'Febrero 2021 - Agosto 2021',
            'exp-4-role': 'Desarrollador Wordpress (Prácticas universitarias)',
            'exp-4-content': '<ul><li>Desarrollé una plataforma e-commerce funcional en WordPress al 80%, cubriendo desde el análisis de requerimientos hasta la implementación técnica.</li></ul>',
            'contact-title': '¿Trabajamos juntos?',
            'contact-text': 'Actualmente estoy abierto a nuevas oportunidades laborales y proyectos freelance. Si tienes una idea en mente o buscas un desarrollador comprometido, me encantaría escucharte.',
            'footer-rights': 'Todos los derechos reservados.',
            'footer-made': 'Diseñado y construido con ☕ y código limpio.'
        },
        'en': {
            'page-title': 'Moshe Shabes | Fullstack Developer',
            'meta-desc': 'Moshe Shabes Gittler - Fullstack Web Developer. Creating modern, scalable, and conversion-oriented web solutions.',
            'nav-about': 'About me',
            'nav-projects': 'Projects',
            'nav-experience': 'Experience',
            'nav-contact': 'Contact',
            'hero-greeting': 'Hi, I\'m',
            'hero-role': 'Fullstack Web Developer',
            'hero-value': 'I transform ideas into exceptional digital experiences. I build scalable, attractive, and optimized web applications to drive your business success.',
            'hero-cta-contact': 'Contact me',
            'hero-cta-projects': 'View projects',
            'about-title': 'About me',
            'about-text-1': 'I am a developer passionate about creating efficient solutions to complex problems. My main focus is providing <strong>real value</strong>: I don\'t just write code, I design digital tools that improve user experience and optimize operational processes.',
            'about-text-2': 'With experience in both interface design and server architecture, I offer a comprehensive perspective for any web project.',
            'about-skills-title': 'Core Skills',
            'projects-title': 'Featured Projects',
            'project-1-desc': 'Mercado Libre Mexico metrics. Shows top-selling products by category, search trends, and data-driven recommendations.',
            'project-2-desc': 'Web platform for a logistics and delivery company in Mexico City, optimizing delivery management.',
            'project-3-desc': 'Food delivery application. Includes authentication system, menu display, file upload, and restaurant geolocation.',
            'project-4-desc': 'Web application that allows CRUD operations on a meme collection, uploading links, modifying or deleting content in real-time.',
            'experience-title': 'Work Experience',
            'exp-1-date': 'February 2024 - Present',
            'exp-1-content': '<ul><li><b>End-to-End Leadership: </b>Designed and deployed from scratch the cloud architecture, frontend and backend of the MVP, achieving the successful commercial launch of the platform as the sole developer.</li><li><b>Optimization: </b> Automated the tax reconciliation for Mercado Libre sellers by integrating Mercado Libre and Mercado Pago APIs, helping to eliminate 100% of manual errors and saving multiple daily hours for clients.</li><li><b>Scalable Application: </b>Implemented a modular structure based on reusable components, ensuring sustained system growth.</li></ul>',
            'exp-2-date': 'November 2022 - April 2025',
            'exp-2-content': '<ul><li><b>Critical Project Rescue: </b>Optimized the internal system for sending offers to CENACE (national electricity market), achieving a <b>95% improvement in response times</b> and ensuring business continuity.</li><li><b>Operational Efficiency: </b>Reduced the manual workload of the operations team by <b>90%</b> through the automation of repetitive flows and the automatic generation of internal and client reports.</li><li><b>Technological Transformation and Mentoring: </b>After a rapid autonomous specialization in Python and AWS, I led their adoption as company standards. In less than a year, I went from initial implementation to acting as a technical reference and quality supervisor for the junior engineering team.</li></ul>',
            'exp-3-date': 'October 2019 - November 2022',
            'exp-3-content': '<ul><li><b>Systems Modernization: </b>Led the complete migration of a legacy CRM to a modern stack (MERN), drastically increasing the platform\'s performance and scalability.</li><li><b>Mobile Development: </b>Designed and executed new modules for mobile applications using React Native and Ionic 3, expanding the product\'s reach to iOS and Android devices.</li></ul>',
            'exp-4-date': 'February 2021 - August 2021',
            'exp-4-role': 'Wordpress Developer (University Internship)',
            'exp-4-content': '<ul><li>Developed a functional e-commerce platform in WordPress to 80%, covering everything from requirements analysis to technical implementation.</li></ul>',
            'contact-title': 'Let\'s work together?',
            'contact-text': 'I am currently open to new job opportunities and freelance projects. If you have an idea in mind or are looking for a committed developer, I would love to hear from you.',
            'footer-rights': 'All rights reserved.',
            'footer-made': 'Designed and built with ☕ and clean code.'
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    let currentLang = localStorage.getItem('language') || 'es';

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'META') {
                    element.setAttribute('content', translations[lang][key]);
                } else if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        langText.textContent = lang === 'es' ? 'EN' : 'ES';
        document.documentElement.lang = lang;
    };

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('language', currentLang);
        updateLanguage(currentLang);
    });

    // Inicializar idioma
    updateLanguage(currentLang);

    // --- 2. SET CURRENT YEAR IN FOOTER ---
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- 3. DARK/LIGHT MODE TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.replace('light-mode', 'dark-mode');
        updateThemeIcon('dark');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // --- 4. MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });
    });

    // --- 5. SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- 6. STICKY NAVBAR SHADOW ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
