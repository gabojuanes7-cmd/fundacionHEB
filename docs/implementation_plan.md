# 🇧🇴 Nuevo Sitio Web — Fundación Hecho en Bolivia

Construcción desde cero de un sitio web moderno, profesional y visualmente impactante para la Fundación Hecho en Bolivia, reemplazando completamente el sitio actual que presenta errores críticos.

## User Review Required

> [!IMPORTANT]
> **Decisión sobre contenido**: Usaré textos reales de la fundación (misión, visión, fines) obtenidos de la investigación, pero necesitaré que luego reemplaces algunos textos placeholder de proyectos y noticias con información actual proporcionada por la fundación.

> [!IMPORTANT]
> **Hosting**: Este sitio será HTML/CSS/JS estático (ultrarrápido). Cuando esté listo, lo podrás subir al hosting actual o cualquier otro. No requiere WordPress ni PHP.

## Open Questions

> [!IMPORTANT]
> **¿Tienes el logo de la fundación en alta resolución?** Lo necesitaremos para el header. Si no lo tienes, generaré uno temporal.

> [!IMPORTANT]
> **¿Quieres mantener los mismos colores de Bolivia (rojo, amarillo, verde) o prefieres una paleta diferente?** Mi propuesta usa esos colores de forma elegante y moderna.

---

## Stack Tecnológico

| Tecnología | Justificación |
|-----------|--------------|
| **HTML5 semántico** | Accesibilidad, SEO, estructura correcta |
| **CSS3 vanilla** | Máximo control visual, sin dependencias pesadas |
| **JavaScript vanilla** | Sin frameworks = ultra rápido, sin jQuery |
| **Google Fonts** | Tipografías modernas (Poppins + Inter) |
| **Font Awesome 6** | Iconografía consistente |

**¿Por qué NO WordPress/Elementor?** El sitio actual con WordPress carga 20+ archivos CSS, tiene versiones duplicadas, mezcla HTTP/HTTPS, y las páginas internas se rompen. Un sitio estático bien hecho será **10x más rápido**, **100% controlable** y sin los bugs actuales.

---

## Proposed Changes

### Estructura del Proyecto

```
d:\2026\HechoEnBolivia\
├── index.html                    ← Página de inicio
├── quienes-somos.html            ← Quiénes somos
├── proyectos.html                ← Proyectos
├── noticias.html                 ← Noticias / Blog
├── galeria.html                  ← Galería fotográfica
├── contacto.html                 ← Contacto
├── proyecto-detalle.html         ← Detalle de un proyecto (template)
├── css/
│   └── styles.css                ← Todo el CSS (design system + páginas)
├── js/
│   └── main.js                   ← Toda la lógica JS
└── assets/
    └── images/                   ← Imágenes generadas y optimizadas
```

---

### 🏠 Página de Inicio — `index.html`

La página más importante. Debe causar una primera impresión **WOW**.

**Secciones:**

1. **Hero Section** — Pantalla completa con video/imagen de fondo de Bolivia, título animado "HECHO EN BOLIVIA" con efecto de aparición, subtítulo con la misión, y botón CTA "Conoce Nuestros Proyectos"
2. **Ticker/Marquee** — Franja animada con logotipos de alianzas o palabras clave (Producción • Innovación • Bolivia • Desarrollo)
3. **¿Quiénes Somos?** — Resumen corto con imagen lateral, botón "Leer más"
4. **Contador Animado** — Números que se animan al hacer scroll: años de trayectoria, proyectos realizados, empresas apoyadas, eventos organizados
5. **Proyectos Destacados** — Grid de 3 tarjetas con imagen, título, descripción corta y botón
6. **Nuestros Fines** — 6 tarjetas con iconos mostrando los fines de la fundación (producción, plataforma de encuentro, divulgación, conciencia del consumidor, competitividad, marca país)
7. **Testimonios / Cita** — Sección con cita inspiradora del fundador o aliados
8. **Últimas Noticias** — 3 tarjetas de noticias recientes
9. **Call to Action** — Banner con fondo degradado: "¿Quieres ser parte del cambio?" + botón de contacto
10. **Footer Completo** — Logo, links, contacto, redes sociales, mapa de ubicación mini, copyright

---

### 👥 Quiénes Somos — `quienes-somos.html`

1. **Hero interno** — Banner con título "Quiénes Somos" y breadcrumbs
2. **Historia** — Timeline visual con los hitos de la fundación
3. **Misión y Visión** — Dos columnas con iconos destacados
4. **Nuestros Fines** — Lista visual con iconos animados
5. **Equipo / Directiva** — Grid de cards con foto, nombre, cargo
6. **Alianzas Institucionales** — Logos de instituciones aliadas en carrusel
7. **Resolución Ministerial** — Mención a R.M. N°030/2016 que le da legalidad

---

### 📋 Proyectos — `proyectos.html`

1. **Hero interno** — Banner "Nuestros Proyectos"
2. **Filtros** — Botones para filtrar por categoría (Todos, Capacitación, Ferias, Marca País, Clústers)
3. **Grid de Proyectos** — Tarjetas con imagen, categoría, título, descripción, botón "Ver más"
4. **Estadísticas** — Banner con números de impacto

---

### 📰 Noticias — `noticias.html`

1. **Hero interno** — Banner "Noticias y Eventos"
2. **Noticia destacada** — Card grande con la noticia principal
3. **Grid de noticias** — Tarjetas más pequeñas con fecha, categoría, título, extracto
4. **Sidebar** — Categorías, búsqueda, noticias populares

---

### 🖼️ Galería — `galeria.html`

1. **Hero interno** — Banner "Galería"
2. **Filtros** — Por evento/año/categoría
3. **Grid Masonry** — Imágenes en grid con efecto hover (zoom + overlay con título)
4. **Lightbox** — Al hacer clic se abre la imagen en grande con navegación prev/next

---

### 📞 Contacto — `contacto.html`

1. **Hero interno** — Banner "Contáctanos"
2. **Info de Contacto** — 3 cards: Dirección (Cochabamba), Teléfono, Email
3. **Formulario** — Nombre, email, asunto, mensaje, botón enviar (con validación JS)
4. **Mapa** — Google Maps embed con ubicación de Cochabamba
5. **Redes Sociales** — Links grandes a Facebook, Instagram, YouTube, etc.

---

### 🎨 Design System — `css/styles.css`

**Paleta de colores (inspirada en Bolivia pero modernizada):**

```css
:root {
  /* Colores principales */
  --primary: #CE1126;        /* Rojo Bolivia — pasión, fuerza */
  --primary-dark: #A30D1E;
  --secondary: #F4A100;      /* Dorado cálido — riqueza, producción */
  --secondary-light: #FBBF24;
  --accent: #007934;         /* Verde Bolivia — esperanza, crecimiento */
  --accent-light: #10B981;
  
  /* Neutros */
  --dark: #0F172A;           /* Casi negro — elegante */
  --dark-soft: #1E293B;
  --gray-700: #334155;
  --gray-500: #64748B;
  --gray-300: #CBD5E1;
  --gray-100: #F1F5F9;
  --white: #FFFFFF;
  --cream: #FFFBF0;
  
  /* Tipografías */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

**Efectos visuales premium:**
- Glassmorphism en el header (navbar transparente que se vuelve sólido al hacer scroll)
- Gradientes sutiles en CTAs y secciones hero
- Sombras suaves y elevación en las tarjetas
- Animaciones de entrada al hacer scroll (fade-up, slide-in)
- Hover effects en tarjetas (scale + shadow)
- Cursor personalizado en botones
- Smooth scrolling nativo
- Transiciones suaves en todos los elementos interactivos

**Responsive breakpoints:**
- Mobile: 0 - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Wide: 1440px+

---

### ⚡ JavaScript — `js/main.js`

**Funcionalidades:**

| Feature | Descripción |
|---------|-------------|
| **Navbar inteligente** | Transparente arriba, sólido al scroll, oculto al bajar, visible al subir |
| **Menú móvil** | Hamburger menu con animación de apertura suave |
| **Scroll animations** | Elementos aparecen con animación al entrar en viewport (IntersectionObserver) |
| **Contador animado** | Números que cuentan desde 0 hasta el valor real al ser visibles |
| **Filtro de proyectos** | Filtrar tarjetas por categoría sin recargar la página |
| **Galería lightbox** | Modal de imagen con navegación, zoom, cierre con Escape |
| **Validación de formulario** | Validación en tiempo real con mensajes de error amigables |
| **Scroll to top** | Botón flotante que aparece al bajar |
| **Typing effect** | Texto que se "escribe" en el hero |
| **Parallax sutil** | Efecto parallax leve en las imágenes hero |
| **Dark mode toggle** | Cambiar entre modo claro y oscuro |
| **Newsletter popup** | Modal para suscripción al newsletter (aparece después de 30 seg) |

---

### 🖼️ Imágenes

Generaré con IA las siguientes imágenes para el sitio:

1. Hero background — paisaje de Bolivia moderno
2. Imágenes para secciones de proyectos (3-4)
3. Fondos de secciones con patrones bolivianos
4. Placeholder para equipo de trabajo

---

## Verification Plan

### Automated Tests
- Abrir cada página en el navegador local y verificar que carga sin errores
- Revisar la consola del navegador para errores JS
- Probar en viewport mobile (375px), tablet (768px) y desktop (1440px)
- Verificar que todos los enlaces internos funcionan (0 errores 404)
- Comprobar el formulario de contacto con validación

### Manual Verification
- Navegar por todas las páginas como un usuario real
- Verificar animaciones y transiciones
- Probar el menú móvil
- Verificar la galería lightbox
- Comprobar el modo oscuro
- Verificar que el diseño se ve impresionante y profesional
