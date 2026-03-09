export const personal = {
  name: "Gerardo Rios",
  role: "Analista de Sistemas · Full Stack Developer JR",
  location: "Barranqueras, Chaco — Argentina",
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
    title: "Ecommerce React",
    subtitle: "Clon Mercado Libre",
    year: "2025",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Plataforma de e-commerce completa con catálogo de productos, filtros dinámicos, carrito persistente y flujo de checkout. Arquitectura de componentes reutilizables con React Hooks y Context API.",
    highlights: ["Filtros dinámicos por categoría y precio", "Carrito con persistencia en localStorage", "Checkout con validación de formularios"],
    color: "#F5C518",
    emoji: "🛒",
    image: "/img-ecommerce.png",
    github: "https://github.com/Gerardo-Rioss/Clon_Ecommerce_React",
  },
  {
    id: 2,
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
    id: 3,
    title: "Dashboard de Ventas",
    subtitle: "Power BI Report",
    year: "2024",
    tags: ["Power BI", "DAX", "Power Query"],
    description:
      "Dashboard interactivo para seguimiento de ventas, análisis de clientes y monitoreo de KPIs estratégicos. Incluye drill-down por región, comparativas temporales y alertas visuales.",
    highlights: ["KPIs en tiempo real con DAX", "Drill-down por región y período", "Filtros dinámicos y slicers interactivos"],
    color: "#8E44AD",
    emoji: "📊",
    image: "/img-dashboard.jpg",
    github: "https://github.com/Gerardo-Rioss/Data_Analytics-Power_BI",
  },
  {
    id: 4,
    title: "Blog de Cocina",
    subtitle: "Full Stack Web App",
    year: "2024",
    tags: ["Django", "Python", "PostgreSQL"],
    description:
      "Blog colaborativo con sistema de roles jerárquicos (usuarios, colaboradores y administradores), publicaciones con categorías, comentarios anidados y panel de administración.",
    highlights: ["Sistema de roles y permisos", "Editor de publicaciones", "Panel de administración completo"],
    color: "#27AE60",
    emoji: "🍳",
    image: "/img-blogcocina.png",
    github: "https://github.com/Gerardo-Rioss/Blog_Cocina-Django_Python",
  },
  {
    id: 5,
    title: "Griffith's",
    subtitle: "Sistema Integral para Peluquería",
    year: "2023",
    tags: ["C#", ".NET Framework", "SQL Server"],
    description:
      "Aplicación de escritorio para gestión de stock, agenda de citas, base de clientes y reportes financieros con dashboard de KPIs.",
    highlights: ["Gestión de agenda y citas", "Control de stock en tiempo real", "Reportes financieros automáticos"],
    color: "#E91E8C",
    emoji: "✂️",
    image: "/img-peluqueria.png",
    github: "https://github.com/Gerardo-Rioss/Griffith-Sistema_Integral_Peluqueria",
  },
  {
    id: 6,
    title: "JuliJo",
    subtitle: "Showroom de Ropa",
    year: "2022",
    tags: ["VB.NET", "SQL Server"],
    description:
      "Sistema de escritorio para gestión integral de ventas, clientes e inventario con reportes automáticos y control de stock en tiempo real.",
    highlights: ["Gestión de inventario en tiempo real", "Reportes de ventas automáticos", "Base de clientes con historial"],
    color: "#2E7CF6",
    emoji: "👗",
    image: "/img-showroom.png",
    github: "https://github.com/Gerardo-Rioss/JuliJo-Sistema_Gestion_Showroom_Ropa",
  },
  {
    id: 7,
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
