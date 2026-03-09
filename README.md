# Portfolio — Gerardo Rios

Portfolio web personal de **Gerardo Rios**, Analista de Sistemas y Desarrollador Full Stack Jr. Desarrollado con React y Vite, con diseño responsive y soporte para tema claro y oscuro.

🔗 **Sitio en vivo:** [rios-gerardo.netlify.app](https://rios-gerardo.netlify.app/)

---

## ✨ Características

- **Secciones:** Hero, Skills, Proyectos, Experiencia y Contacto
- **Tema claro/oscuro** con persistencia de preferencia
- **Diseño responsive** y animaciones suaves
- **Datos centralizados** en un único archivo para fácil personalización
- **CSS con variables** y módulos por componente
- **Fuentes:** Syne (títulos) y DM Sans (cuerpo)

---

## 🛠️ Tecnologías

| Área        | Stack                          |
|------------|---------------------------------|
| Frontend   | React 18, JSX                   |
| Build      | Vite 5                          |
| Estilos    | CSS Modules, variables CSS      |
| Fuentes    | Google Fonts (Syne, DM Sans)    |

---

## 📁 Estructura del proyecto

```
portfolio/
├── public/           # Assets estáticos (favicon, imágenes de proyectos)
├── src/
│   ├── components/   # Navbar, Hero, Skills, Projects, Experience, Contact
│   ├── context/      # ThemeContext (tema claro/oscuro)
│   ├── data/         # portfolio.js (datos personales, skills, proyectos, experiencia)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css     # Variables de tema, reset, animaciones
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Cómo ejecutar

### Requisitos

- [Node.js](https://nodejs.org/) (recomendado v18+)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Gerardo-Rioss/portfolio.git
cd portfolio

# Instalar dependencias
npm install
```

### Scripts disponibles

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm run dev`  | Servidor de desarrollo (Vite)  |
| `npm run build`| Build de producción            |
| `npm run preview` | Vista previa del build      |

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Ver build localmente
npm run preview
```

---

## 📝 Personalizar contenido

Todo el contenido visible (nombre, rol, skills, proyectos, experiencia, certificaciones) está en:

**`src/data/portfolio.js`**

- `personal` — Nombre, rol, ubicación, email, teléfono, redes, disponibilidad
- `skills` — Categorías (Frontend, Backend, BD, Data & BI, Herramientas) e ítems
- `projects` — Título, descripción, tags, imagen, enlace a GitHub
- `experience` — Roles, empresa, período y bullets
- `certifications` — Nombre, organización, año e icono

Edita ese archivo para adaptar el portfolio a tu perfil sin tocar componentes.

---

## 📄 Licencia

Proyecto de uso personal. Si reutilizas el código, se agradece mención al autor.

---

**Gerardo Rios** · [LinkedIn](https://linkedin.com/in/gerardrioss/) · [GitHub](https://github.com/Gerardo-Rioss)
