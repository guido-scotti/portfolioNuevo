// Todo el contenido editable del portfolio está en este archivo.

export const i18n = {
  en: {
    nav: { home: "Home", about: "About", training: "Training", projects: "Projects", contact: "Contact" },
    hero: {
      hi: "Hi, i'm",
      title: "I'm a fullstack developer!",
      cv: "RESUME",
      cvUrl: "https://drive.google.com/file/d/1LvZQu51Tj20JlG6BtmFPSeKmocJtHa75/view?usp=sharing",
    },
    about: {
      title: "ABOUT ME",
      facts: [["Degree", "Technical Degree in Programming · UTN FRGP, July 2026"], ["Languages", "Spanish (native) · English (B2)"], ["Location", "Buenos Aires, Argentina"]],
      sub: "Passionate about coding, design, and continuous learning.",
      p1: "I’m Guido Scotti, a <span class='text-hover'>web developer</span> and <span class='text-hover'>programming technician</span> from Buenos Aires, Argentina. I graduated in July 2026 with a Technical Degree in Programming from the National Technological University (UTN). I worked as a Teaching Assistant for Programming 1 at UTN, where I helped students learn the fundamentals of programming with C++.",
      p2: "I enjoy creating clean and functional projects, combining creativity with problem-solving skills. Beyond coding, I’m passionate about sports like rugby, as well as music and design, which inspire me to bring fresh and original ideas into my work. I consider myself organized, responsible, and always eager to take on new challenges.",
    },
    stack: { title: "TRAINING", sub: "My whole stack!", back: "BACK-END", front: "FRONT-END", db: "DATABASES", tools: "TOOLS" },
    edu: {
      title: "Academic background",
      items: [
        {
          t: "TECHNICAL DEGREE IN PROGRAMMING",
          d: "I earned a Technical Degree in Programming from the National Technological University (UTN) in July 2026. Throughout this program, I learned the fundamentals of programming, database design and modeling, algorithmic logic, and data structures, working with languages such as C#, C++, and Java. The degree also emphasizes teamwork, clean coding practices, and software engineering principles to prepare me for building real-world, scalable applications.",
        },
        {
          t: "RESPONSIVE WEB DESIGN",
          d: "In this course, I gained knowledge of HTML5 and CSS3 applied to modern web development. I learned to structure semantic content, apply styles through cascading style sheets, work with Flexbox and Grid, and design interfaces that adapt to different devices. The course also focused on accessibility and responsive design best practices to ensure websites look and perform well on any screen.",
        },
      ],
    },
    projectsSec: { title: "MY PROJECTS!", sub: "My work" },
    projects: [
      {
        t: "PLANTAS VS PROFES",
        d: "A tower defense console game parodying Plants vs Zombies, where university professors replace the zombies. Built in <span class='color-c'>C++</span> with <span class='color-sfml'>SFML</span> for graphics, sound, and music.",
      },
      {
        t: "GR REAL ESTATE",
        d: "A landing page for a real estate agency, created with <span class='color-html'>HTML</span>, <span class='color-tailwind'>Tailwind</span>, and <span class='color-js'>JavaScript</span>. It features a responsive design, property showcase and contact information.",
      },
      {
        t: "RR-SCD MED",
        d: "A clinic management system built with <span class='color-csharp'>C#</span>, <span class='color-asp'>ASP.NET</span>, <span class='color-html'>HTML</span>, <span class='color-css'>CSS</span>, and <span class='color-sql'>SQL Server</span>. It allows admin users to manage doctors and patients (CRUD), while doctors can view and manage their appointments.",
      },
      {
        t: "GS SCORING",
        d: "A comprehensive analytical system designed to evaluate the management, financial health, and competitiveness of football clubs through metrics based on structural pillars. Built with <span class='color-python'>Python</span>, <span class='color-fastapi'>FastAPI</span>, <span class='color-sqlalchemy'>SQLAlchemy</span>, <span class='color-react'>React</span>, <span class='color-next'>Next.js</span>, <span class='color-js'>JavaScript</span>, and <span class='color-tailwind'>Tailwind</span>.",
      },
    ],
    contact: { title: "GET IN TOUCH", sub: "REACH ME!", name: "Your name", email: "youremail@example.com", message: "Message", send: "SEND" },
    footer: "&copy; 2026 <span class='font-bold text-white'>Guido Scotti.</span> All rights reserved",
  },

  es: {
    nav: { home: "Inicio", about: "Sobre mí", training: "Formación", projects: "Proyectos", contact: "Contacto" },
    hero: {
      hi: "Hola, soy",
      title: "Soy un desarrollador fullstack!",
      cv: "CV",
      cvUrl: "https://drive.google.com/file/d/1FtYuSq23XpQSbJeLT6-ZBJPhRRFq_b2f/view?usp=sharing",
    },
    about: {
      title: "SOBRE MÍ",
      facts: [["Título", "Técnico en Programación · UTN FRGP, julio de 2026"], ["Idiomas", "Español (nativo) · Inglés (B2)"], ["Ubicación", "Buenos Aires, Argentina"]],
      sub: "Apasionado por la programación, el diseño y el aprendizaje continuo.",
      p1: "Soy Guido Scotti, <span class='text-hover'>desarrollador web</span> y <span class='text-hover'>técnico en programación</span> de Buenos Aires, Argentina. Me recibí de Técnico en Programación en la Universidad Tecnológica Nacional (UTN) en julio de 2026. Me desempeñé como ayudante de cátedra en Programación 1 en la UTN, donde ayudé a los estudiantes a aprender los fundamentos de la programación con C++.",
      p2: "Disfruto crear proyectos limpios y funcionales, combinando creatividad con habilidades para resolver problemas. Además de programar, me apasionan deportes como el rugby, la música y el diseño, que me inspiran a aportar ideas frescas y originales a mi trabajo. Me considero organizado, responsable y siempre dispuesto a asumir nuevos desafíos.",
    },
    stack: { title: "FORMACIÓN", sub: "Todo mi stack!", back: "BACK-END", front: "FRONT-END", db: "BASES DE DATOS", tools: "HERRAMIENTAS" },
    edu: {
      title: "Formación académica",
      items: [
        {
          t: "TECNICATURA EN PROGRAMACIÓN",
          d: "Me recibí de la Tecnicatura en Programación en la Universidad Tecnológica Nacional (UTN) en julio de 2026. A lo largo de esta carrera, aprendí fundamentos de programación, diseño y modelado de bases de datos, lógica algorítmica y estructuras de datos, trabajando con lenguajes como C#, C++ y Java. La carrera también enfatiza el trabajo en equipo, buenas prácticas de código y principios de ingeniería de software para prepararme para desarrollar aplicaciones reales y escalables.",
        },
        {
          t: "DISEÑO WEB RESPONSIVE",
          d: "En este curso adquirí conocimientos de HTML5 y CSS3 aplicados al desarrollo web moderno. Aprendí a estructurar contenido semántico, aplicar estilos con hojas de estilo en cascada, trabajar con Flexbox y Grid, y diseñar interfaces que se adaptan a diferentes dispositivos. El curso también se centró en accesibilidad y buenas prácticas de diseño responsivo para asegurar que los sitios se vean y funcionen bien en cualquier pantalla.",
        },
      ],
    },
    projectsSec: { title: "MIS PROYECTOS!", sub: "Mi trabajo" },
    projects: [
      {
        t: "PLANTAS VS PROFES",
        d: "Juego de consola estilo tower defense, parodia de Plants vs Zombies, donde los profesores de la facultad reemplazan a los zombies. Hecho en <span class='color-c'>C++</span> y <span class='color-sfml'>SFML</span> para gráficos, sonidos y música.",
      },
      {
        t: "GR REAL ESTATE",
        d: "Landing page para una inmobiliaria, hecha con <span class='color-html'>HTML</span>, <span class='color-tailwind'>Tailwind</span> y <span class='color-js'>JavaScript</span>. Cuenta con un diseño responsivo, muestra de propiedades e información de contacto.",
      },
      {
        t: "RR-SCD MED",
        d: "Sistema de gestión de clínica desarrollado con <span class='color-csharp'>C#</span>, <span class='color-asp'>ASP.NET</span>, <span class='color-html'>HTML</span>, <span class='color-css'>CSS</span> y <span class='color-sql'>SQL Server</span>. Permite a los administradores gestionar médicos y pacientes (ABML), y a los médicos ver y modificar sus turnos.",
      },
      {
        t: "GS SCORING",
        d: "Sistema analítico integral diseñado para evaluar la gestión, salud financiera y competitividad de clubes de fútbol mediante métricas basadas en pilares estructurales. Desarrollado con <span class='color-python'>Python</span>, <span class='color-fastapi'>FastAPI</span>, <span class='color-sqlalchemy'>SQLAlchemy</span>, <span class='color-react'>React</span>, <span class='color-next'>Next.js</span>, <span class='color-js'>JavaScript</span> y <span class='color-tailwind'>Tailwind</span>.",
      },
    ],
    contact: { title: "CONTACTAME", sub: "ENVIAME UN MENSAJE!", name: "Tu nombre", email: "tuemail@ejemplo.com", message: "Mensaje", send: "ENVIAR" },
    footer: "&copy; 2026 <span class='font-bold text-white'>Guido Scotti.</span> Todos los derechos reservados",
  },
};

// Datos que no dependen del idioma
export const socials = [
  { href: "https://www.linkedin.com/in/guidoscotti/", icon: "fa-brands fa-linkedin", alt: "linkedin" },
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=scottigui@gmail.com", icon: "fa-solid fa-envelope", alt: "mail" },
  { href: "https://github.com/guido-scotti", icon: "fa-brands fa-github", alt: "github" },
];

// [nombre, color del brillo]
export const stack = [
  { key: "stack.front", items: [["HTML", "#e44d26"], ["CSS", "#3b6cf5"], ["JavaScript", "#f7df1e"], ["Tailwind", "#38bdf8"]] },
  { key: "stack.back", items: [["C++", "#4f7cff"], ["C#", "#8b5cf6"], [".NET", "#7c5cf0"], ["Java", "#e76f00"], ["Python", "#4b8bbe"]] },
  { key: "stack.db", items: [["SQL Server", "#f31818"], ["MySQL", "#2aa5c4"], ["Sheets", "#0f9d58"]] },
  { key: "stack.tools", items: [["Git", "#f05032"], ["GitHub", "#8b949e"], ["Visual Studio Code", "#3b82f6"], ["Code::Blocks", "#f7a928"], ["Office", "#d83b01"]] },
];

export const edu = [
  { img: "utn.png", alt: "utn", label: "UTN FRGP", url: "https://www.frgp.utn.edu.ar/" },
  { img: "freecamp.png", alt: "free", label: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
];

export const projects = [
  { imgs: ["pvz2.png", "pvz.png", "pvz4.png"], alt: "Plants vs Profes", repo: "https://github.com/Lolociriaco/PlantasVsProfes" },
  { imgs: ["grrealestate1.png", "grrealestate2.png", "grrealestate3.png"], alt: "GR Real Estate", repo: "https://github.com/guido-scotti/GR-Real-Estate", web: "https://www.gracielaramos.com/" },
  { imgs: ["clinica2.png", "clinica.png", "clinica3.png"], alt: "TP Clinica", repo: "https://github.com/Lolociriaco/TP_Clinica" },
  { imgs: ["gsscoring1.jpg", "gsscoring2.jpg", "gsscoring3.jpg"], alt: "GS Scoring", repo: "https://github.com/marianos2024/gst-scoring-engine" },
];