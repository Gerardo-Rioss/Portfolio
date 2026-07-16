# Portfolio — Gerardo Ríos

[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://rios-gerardo.netlify.app)

Portfolio web personal de **Gerardo Ríos**, Analista de Sistemas y Full Stack Developer. Diseñado con enfoque en claridad visual, animaciones modernas y experiencia responsive.

🔗 **Sitio en vivo:** [rios-gerardo.netlify.app](https://rios-gerardo.netlify.app/)

---

## ✨ Características

| Feature | Detalle |
|---------|---------|
| 🎨 **Hero animado** | Gradiente animado en el nombre, orbes flotantes, glow pulsante en la foto |
| 📊 **Stats animados** | Contadores que se animan al hacer scroll (easeOutQuart) |
| 📜 **Scroll reveal** | Secciones aparecen con fade-up suave al scrollear |
| 🌙 **Dual theme** | Modo oscuro (esmeralda/teal) · Modo claro (warm minimal estilo Notion) |
| 🧭 **Navbar inteligente** | Glassmorphism, active link con underline animado, detección de sección activa |
| 🏷️ **Badge Live** | Indicador visual en proyectos con deploy activo |
| 🔗 **Live Demo** | Botón condicional para proyectos desplegados |
| 📱 **Responsive** | Sidebar en desktop, bottom nav/menú hamburguesa en mobile |
| ⚡ **Animaciones CSS** | Transiciones suaves, micro-interacciones en hover |
| ♿ **Accesibilidad** | Focus visible, ARIA labels, soporte para reduced motion |

## 🛠️ Stack

| Área | Tecnología |
|------|-----------|
| **Frontend** | React 18 + JSX |
| **Build** | Vite 5 |
| **Estilos** | CSS Modules + variables CSS + `color-mix()` |
| **Tipografía** | Syne (títulos) · DM Sans (cuerpo) |
| **Animaciones** | CSS keyframes · Intersection Observer |
| **Deploy** | Netlify (auto-deploy desde `main`) |

## 📁 Estructura

```
portfolio/
├── public/                # Assets estáticos
│   ├── img-*.png          # Screenshots de proyectos
│   └── foto.png           # Foto de perfil
├── src/
│   ├── components/        # Componentes React
│   │   ├── AnimatedCounter.jsx   # Contador animado con IO
│   │   ├── Hero.jsx              # Hero con animaciones
│   │   ├── Navbar.jsx            # Nav con detección de sección
│   │   ├── Projects.jsx          # Grilla con Live Demo + badge
│   │   ├── Footer.jsx            # Social links con iconos SVG
│   │   └── ...
│   ├── context/           # ThemeContext (tema claro/oscuro)
│   ├── data/              # portfolio.js (datos centralizados)
│   ├── hooks/             # useScrollReveal (Intersection Observer)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Variables de tema, reset, animaciones globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Cómo ejecutar

### Requisitos

- Node.js 18+
- npm

### Instalación

```bash
git clone https://github.com/Gerardo-Rioss/portfolio.git
cd portfolio
npm install
```

### Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build |

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build
```

## 🎨 Temas

El portfolio soporta **modo oscuro** (default) y **modo claro**.

| Tema | Paleta |
|------|--------|
| 🌑 **Oscuro** | Fondo `#0A0F0D` · Accent esmeralda `#10B981` · Orbes teal |
| ☀️ **Claro** | Fondo crema `#F7F6F3` · Accent verde bosque `#2D6A4F` · Estilo warm minimal |

Toggle con el botón 🌙/☀️ en la navbar.

## 📝 Personalizar contenido

Todo el contenido visible está en **`src/data/portfolio.js`**:

| Export | Descripción |
|--------|-------------|
| `personal` | Nombre, rol, ubicación, email, redes, disponibilidad |
| `skills` | Categorías e ítems técnicos |
| `projects` | Título, descripción, tags, imagen, GitHub, Live Demo |
| `experience` | Roles, empresa, período y logros |
| `certifications` | Nombre, organización, año |
| `heroStats` | Estadísticas del hero (años, proyectos, certificaciones) |

Agrega un campo `live` a cualquier proyecto para que muestre el botón **"Live Demo"**.

## 🧩 Componentes destacados

### Scroll Reveal
```jsx
<section className={`${styles.section} reveal`}>
```

Las secciones con clase `reveal` aparecen con fade-up al entrar al viewport vía IntersectionObserver.

### Animated Counter
```jsx
<AnimatedNumber raw="+13" />  // → 0 → 1 → 2 → ... → +13
```

Los números se animan con easeOutQuart de 0 a su valor al hacer scroll.

### Datos de proyectos
```js
{
  title: "Control Cuentas",
  live: "https://...vercel.app",  // ← opcional, muestra botón Live Demo
  github: "https://github.com/...",
  image: "/img-proyecto.png",
  tags: ["Next.js", "TypeScript"],
}
```

## 🧑‍💻 Autor

**Gerardo Germán Ríos** — Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/gerardrioss)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Gerardo-Rioss)
[![Portfolio](https://img.shields.io/badge/Portfolio-rios--gerardo.netlify.app-10B981?style=flat-square)](https://rios-gerardo.netlify.app)

---

<p align="center">
  <sub>Hecho con ☕ y React · Chaco, Argentina · 2026</sub>
</p>
