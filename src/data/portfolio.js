export const personal = {
  name: "Gerardo Rios",
  role: "Analista de Sistemas · Full Stack Developer",
  location: "Barranqueras, Chaco — Argentina",
  bio: "Desarrollo interfaces y sistemas web con foco en claridad visual, mantenimiento simple y experiencias que ayuden de verdad a los usuarios.",
  email: "gerarios26@gmail.com",
  phone: "(0362) 154709877",
  web: "https://rios-gerardo.netlify.app/",
  linkedin: "https://linkedin.com/in/gerardrioss/",
  github: "https://github.com/Gerardo-Rioss",
  available: true,
}

export const skills = [
  {
    category: "Frontend",
    icon: "⚡",
    items: ["React", "TypeScript", "Tailwind CSS", "Material-UI", "HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Django REST Framework", ".NET (C#)", "VB.NET", "Java", "Spring Boot", "Python"],
  },
  {
    category: "Bases de Datos",
    icon: "🗄️",
    items: ["SQL Server", "PostgreSQL", "SQLite"],
  },
  {
    category: "Data & BI",
    icon: "📊",
    items: ["Power BI", "DAX", "Power Query", "Excel Avanzado"],
  },
  {
    category: "Herramientas",
    icon: "🛠️",
    items: ["Git", "GitHub", "Vite", "VS Code", "Visual Studio"],
  },
]

export const projects = [
  {
    id: 1,
    title: "Control Cuentas",
    subtitle: "App de Finanzas Personales",
    year: "2026",
    tags: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "Tailwind v4", "shadcn/ui"],
    description:
      "Dashboard interactivo de finanzas personales con CRUD completo de ingresos/gastos, gráficos dinámicos (torta, barras, línea), autenticación segura, modo oscuro y diseño responsive.",
    highlights: [
      "Dashboard con Recharts: gastos por categoría, evolución mensual, comparativas",
      "CRUD completo de movimientos y categorías con 12 colores personalizables",
      "Autenticación con NextAuth v5 + JWT + bcrypt",
      "Modo oscuro con persistencia · Diseño responsive (desktop/mobile)",
      "Tests automatizados (Vitest) con 5 suites · 1.700+ líneas de testing",
      "CI/CD con Vercel + PostgreSQL serverless en Neon",
    ],
    color: "#10B981",
    emoji: "💰",
    image: "/img-control-cuentas.png",
    github: "https://github.com/Gerardo-Rioss/control-cuentas-web",
    live: "https://control-cuentas-6okkse5b4-gerariosdev-projects.vercel.app",
  },
  {
    id: 2,
    title: "Ecommerce React",
    subtitle: "Clon Mercado Libre",
    year: "2025",
    tags: ["React", "TypeScript", "Material-UI"],
    description:
      "Clon funcional de Mercado Libre con catálogo de productos desde FakeStore API, filtros dinámicos por categoría y precio en URL params, carrito persistente con localStorage y checkout multi-paso con validación Formik + Yup. Routing con React Router 7, data fetching con TanStack React Query, y code splitting por ruta con React.lazy.",
    highlights: ["Filtros dinámicos persistidos en URL params", "Carrito persistente con subtotales automáticos", "Checkout multi-paso con validación", "Code splitting + vendor chunking (227 KB main bundle)", "Dark mode con CSS Custom Properties"],
    color: "#F5C518",
    emoji: "🛒",
    image: "/img-ecommerce.png",
    github: "https://github.com/Gerardo-Rioss/Clon_Ecommerce_React",
    live: "https://ecommerce-react-clon.vercel.app",
  },
  {
    id: 3,
    title: "Blog de Cocina",
    subtitle: "Full Stack Web App",
    year: "2024",
    tags: ["Django", "Python", "PostgreSQL"],
    description:
      "Blog colaborativo con sistema de roles jerárquicos (usuarios, colaboradores y administradores), publicaciones con categorías y etiquetas, comentarios anidados con moderación, panel de administración completo y buscador full-text.",
    highlights: ["Sistema de roles y permisos", "Editor de publicaciones", "Panel de administración completo"],
    color: "#27AE60",
    emoji: "🍳",
    image: "/img-blogcocina.png",
    github: "https://github.com/Gerardo-Rioss/Blog_Cocina-Django_Python",
  },
  {
    id: 4,
    title: "API REST — Diario Personal",
    subtitle: "TP Final Java · Informatorio 2025",
    year: "2025",
    tags: ["Java", "Spring Boot", "JPA", "REST"],
    description:
      "Backend de una app de bienestar personal donde los usuarios registran emociones, reflexiones y hábitos. Endpoint con filtros por fecha, validación de datos, manejo centralizado de errores y arquitectura limpia en capas.",
    highlights: ["Filtros dinámicos con Specifications JPA", "GlobalExceptionHandler con respuestas uniformes", "Arquitectura: Controller → Service → Repository"],
    color: "#E67E22",
    emoji: "📓",
    image: "/img-java.jpg",
    github: "https://github.com/Gerardo-Rioss/java_spring",
  },
  {
    id: 5,
    title: "Dashboard de Ventas",
    subtitle: "Power BI Report",
    year: "2024",
    tags: ["Power BI", "DAX", "Power Query"],
    description:
      "Dashboard interactivo para seguimiento de ventas con KPIs estratégicos, análisis de rentabilidad por producto y segmentación de clientes. Incluye drill-down por región, comparativas temporales, alertas visuales por umbrales dinámicos y exportación a CSV.",
    highlights: ["KPIs en tiempo real con DAX", "Drill-down por región y período", "Filtros dinámicos y slicers interactivos"],
    color: "#8E44AD",
    emoji: "📊",
    image: "/img-dashboard.jpg",
    github: "https://github.com/Gerardo-Rioss/Data_Analytics-Power_BI",
  },
  {
    id: 6,
    title: "Griffith's",
    subtitle: "Sistema Integral para Peluquería",
    year: "2023",
    tags: ["C#", ".NET Framework", "SQL Server"],
    description:
      "Aplicación de escritorio integral para peluquería con gestión de stock, agenda de citas con recordatorios, base de clientes con historial de servicios y dashboard financiero con KPIs de facturación, gastos y rentabilidad mensual.",
    highlights: ["Gestión de agenda y citas", "Control de stock en tiempo real", "Reportes financieros automáticos"],
    color: "#E91E8C",
    emoji: "✂️",
    image: "/img-peluqueria.png",
    github: "https://github.com/Gerardo-Rioss/Griffith-Sistema_Integral_Peluqueria",
  },
  {
    id: 7,
    title: "JuliJo",
    subtitle: "Showroom de Ropa",
    year: "2022",
    tags: ["VB.NET", "SQL Server"],
    description:
      "Sistema de escritorio completo para showroom de ropa con gestión de ventas, clientes e inventario, reportes automáticos de facturación por período, control de stock en tiempo real con alertas de reposición y módulo de proveedores.",
    highlights: ["Gestión de inventario en tiempo real", "Reportes de ventas automáticos", "Base de clientes con historial"],
    color: "#2E7CF6",
    emoji: "👗",
    image: "/img-showroom.png",
    github: "https://github.com/Gerardo-Rioss/JuliJo-Sistema_Gestion_Showroom_Ropa",
  },
  {
    id: 8,
    title: "Mr. Brook",
    subtitle: "Sistema Integral para Hamburguesería",
    year: "2022",
    tags: ["VB.NET", "SQL Server"],
    description:
      "Sistema de escritorio completo para la gestión de una hamburguesería: pedidos de clientes, control de insumos, proveedores, stock y facturación, todo integrado en una sola aplicación.",
    highlights: ["Gestión de pedidos y clientes", "Control de insumos y proveedores", "Facturación y reportes integrados"],
    color: "#E74C3C",
    emoji: "🍔",
    image: "/img-hamburgueseria.png",
    github: "https://github.com/Gerardo-Rioss/MrBrook-Sistema_Integral_Hamburgueseria",
  },
]

export const experience = [
  {
    role: "Técnico de Soporte & Colaborador de Sistemas",
    company: "Obra Social InSSSeP",
    area: "Área de Servicio Técnico",
    period: "2012 – Actualidad",
    bullets: [
      "Soporte técnico integral a usuarios finales: hardware, software y redes.",
      "Relevamiento de requerimientos funcionales y documentación de procesos.",
      "Colaboración en mejora continua y automatización de procesos informáticos.",
      "Configuración de software y gestión de inventario de equipos.",
    ],
  },
  {
    role: "Operador de Ingreso de Mercadería",
    company: "Obra Social InSSSeP",
    area: "Farmacia",
    period: "2008 – 2012",
    bullets: [
      "Control de stock y carga de productos en sistema de gestión.",
      "Optimización del registro de inventarios y validación de vencimientos.",
    ],
  },
]

export const certifications = [
  { name: "Java", org: "Informatorio", year: "2025", icon: "☕" },
  { name: "React", org: "Informatorio", year: "2025", icon: "⚛️" },
  { name: "Desarrollo Web con Django & Python", org: "Informatorio", year: "2024", icon: "🐍" },
  { name: "Data Analytics con Power BI", org: "Informatorio", year: "2024", icon: "📊" },
]

export const heroStats = [
  { value: "+13", label: "años de experiencia" },
  { value: `${projects.length}`, label: "proyectos destacados" },
  { value: `${certifications.length}`, label: "certificaciones" },
  { value: "5+", label: "tecnologías activas" },
]
