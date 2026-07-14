import re

content = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Directorio — Fundación Hecho en Bolivia</title>
  <meta name="description" content="Conoce la historia de la Fundación Hecho en Bolivia, nacida de la campaña 'Consume lo Nuestro' en 2001 y consolidada en 2012.">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <style>
      @media (min-width: 1024px) {
        .lg-col-3 { grid-column: span 3 / span 12 !important; }
        .lg-col-9 { grid-column: span 9 / span 12 !important; }
      }
      .content-wrapper h2 { color: var(--primary); font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; }
      .content-wrapper h3 { color: var(--secondary); font-family: var(--font-heading); font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; }
      .content-wrapper h4 { color: var(--text-primary); font-weight: bold; margin-bottom: 0.5rem; }
      .content-wrapper p { line-height: 1.8; margin-bottom: 1rem; color: var(--text-secondary); }
      .content-wrapper ul { list-style-type: disc; padding-left: 2rem; margin-bottom: 1rem; color: var(--text-secondary); }
      .content-wrapper li { margin-bottom: 0.5rem; }
      .content-wrapper .card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); }
      .sticky { position: sticky; top: 100px; }
      .flex { display: flex; }
      .items-center { align-items: center; }
      .justify-between { justify-content: space-between; }
      .gap-3 { gap: 0.75rem; }
      .space-y-2 > * + * { margin-top: 0.5rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
      .rounded { border-radius: 0.25rem; }
      .w-5 { width: 1.25rem; }
      .text-center { text-align: center; }
      .tracking-wider { letter-spacing: 0.05em; }
      .uppercase { text-transform: uppercase; }
      .text-sm { font-size: 0.875rem; }
    </style>
  

  <!-- Prevent Dark Mode Flash -->
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  </script>
</head>
<body>

  <!-- Header -->
  <header class="header header--transparent" data-transparent="true">
    <div class="container header__inner">
      <a href="index.html" class="header__logo">
        <div class="header__logo-text">HECHO EN <span>BOLIVIA</span></div>
      </a>
      <nav class="nav" role="navigation">
        <a href="index.html" class="nav__logo-link" aria-label="Inicio"><img src="assets/images/logo-hecho-en-bolivia.jpg" alt="Inicio" class="nav__small-logo"></a>
        
        <div class="nav__item">
          <a href="#" class="nav__link" aria-expanded="false" aria-haspopup="true">La Fundación <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown" role="menu">
            <li role="none"><a href="quienes-somos.html" class="dropdown__link" role="menuitem">Quiénes Somos</a></li>
            <li role="none"><a href="directorio.html" class="dropdown__link" role="menuitem">Directorio</a></li>
            <li role="none"><a href="voluntariado.html" class="dropdown__link" role="menuitem">Voluntariado</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="certificaciones.html" class="nav__link" aria-expanded="false" aria-haspopup="true">Certificaciones <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown" role="menu">
            <li role="none"><a href="sello.html" class="dropdown__link" role="menuitem">Sello Hecho en Bolivia</a></li>
            <li role="none"><a href="certificaciones.html#ibnorca" class="dropdown__link" role="menuitem">Sello Ibnorca</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="servicios.html" class="nav__link" aria-expanded="false" aria-haspopup="true">Servicios <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown" role="menu">
            <li role="none"><a href="servicios.html#red-marcas" class="dropdown__link" role="menuitem">Red de Marcas</a></li>
            <li role="none"><a href="servicios.html#radio" class="dropdown__link" role="menuitem">Radio Online</a></li>
            <li role="none"><a href="capacitate.html" class="dropdown__link" role="menuitem">Capacítate</a></li>
            <li role="none"><a href="servicios.html#asistencia" class="dropdown__link" role="menuitem">Asistencia Técnica</a></li>
            <li role="none"><a href="propiedad-intelectual.html" class="dropdown__link" role="menuitem">Gestión en Propiedad Intelectual</a></li>
            <li role="none"><a href="servicios.html#caporal" class="dropdown__link" role="menuitem">Festival Int. del Caporal</a></li>
            <li role="none"><a href="servicios.html#revista" class="dropdown__link" role="menuitem">Revista Origen</a></li>
            <li role="none"><a href="pulso-economico.html" class="dropdown__link" role="menuitem"><i class="fas fa-chart-line"></i> Pulso Económico</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link" aria-expanded="false" aria-haspopup="true">Multimedia <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown" role="menu">
            <li role="none"><a href="galeria.html" class="dropdown__link" role="menuitem">Galería</a></li>
            <li role="none"><a href="cunas.html" class="dropdown__link" role="menuitem">Cuñas Radiales</a></li>
            <li role="none"><a href="dossier.html" class="dropdown__link" role="menuitem">Dossier Consolidación</a></li>
          </ul>
        </div>

        <a href="noticias.html" class="nav__link">Noticias</a>
        <button class="theme-toggle" aria-label="Cambiar tema"><i class="fas fa-moon"></i></button>
        <div class="nav__cta">
          <a href="contacto.html" class="btn btn--primary btn--sm"><i class="fas fa-handshake"></i> Únete</a>
        </div>
      </nav>
      <button class="mobile-toggle" aria-label="Abrir menú"><span></span><span></span><span></span></button>
    </div>
    <div class="nav-overlay"></div>
  </header>

  <main>
    <!-- Page Header -->
    <section class="page-header relative  bg-dark text-white text-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('assets/images/hero-bolivia.png'); background-size: cover; background-position: center; filter: grayscale(1);"></div>
      <div class="container relative z-10">
        <i class="fas fa-users-cog text-5xl text-secondary mb-4"></i>
        <h1 class="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">Directorio</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="section py-12">
      <div class="container">
        <!-- Grid: 3 columnas sidebar, 9 columnas contenido -->
        <div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 2rem;">
          
          <!-- Sidebar -->
          <aside style="grid-column: span 12 / span 12;" class="lg-col-3">
            <div class="sidebar-menu card p-4 sticky top-24"><h3 class="font-heading text-lg mb-4 uppercase tracking-wider text-secondary">Navegación</h3><ul class="space-y-2">
      <li>
        <a href="quienes-somos.html" class="flex items-center gap-3 py-2 px-3 rounded transition-colors text-gray-600 dark:text-gray-300 hover:text-primary">
          <i class="fas fa-info-circle w-5 text-center"></i>
          <span>Quiénes Somos</span>
        </a>
      </li>
    
      <li>
        <a href="directorio.html" class="flex items-center gap-3 py-2 px-3 rounded transition-colors text-primary font-bold border-r-2 border-primary">
          <i class="fas fa-users-cog w-5 text-center"></i>
          <span>Directorio</span>
        </a>
      </li>
    
      <li>
        <a href="voluntariado.html" class="flex items-center gap-3 py-2 px-3 rounded transition-colors text-gray-600 dark:text-gray-300 hover:text-primary">
          <i class="fas fa-hands-helping w-5 text-center"></i>
          <span>Voluntariado</span>
        </a>
      </li>
    </ul></div>
          </aside>

          <!-- Main Content -->
          <div style="grid-column: span 12 / span 12;" class="lg-col-9">
            <div class="content-wrapper prose dark:prose-invert max-w-none">
              
      <h2>Nuestros Servidores</h2>
      <p>La Fundación Hecho en Bolivia está liderada por profesionales comprometidos con el desarrollo nacional y la promoción de nuestra identidad.</p>
      <div class="card p-4 mt-4">
        <h3>Gerente General</h3>
        <p><strong>Lic. Oscar Buendia Miranda</strong></p>
      </div>
      <div class="card p-4 mt-4">
        <h3>Comité Técnico</h3>
        <p>Expertos, encargados de coordinar Asistencia Técnica, Capacitación y Evaluar las solicitudes para el uso de la Marca Hecho en Bolivia.</p>
      </div>

      <h2 style="margin-top: 3rem;">Miembros</h2>
      <p>Conoce a las 9 empresas miembro que forman parte de la Fundación Hecho en Bolivia y que llevan nuestra marca con orgullo.</p>
      
      <!-- Buscador y Filtros -->
      <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <div style="flex: 1; min-width: 250px;">
          <label for="search-directorio" style="display: block; font-weight: bold; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">Buscar Empresa</label>
          <div style="position: relative;">
            <i class="fas fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
            <input type="text" id="search-directorio" placeholder="Escribe el nombre..." style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; background: var(--bg-body); color: var(--text-primary);">
          </div>
        </div>
        <div style="flex: 1; min-width: 250px;">
          <label for="filter-categoria" style="display: block; font-weight: bold; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">Filtrar por Categoría</label>
          <select id="filter-categoria" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; background: var(--bg-body); color: var(--text-primary);">
            <option value="todas">Todas las categorías</option>
            <!-- Opciones dinámicas -->
          </select>
        </div>
      </div>

      <div id="dynamic-directory-container" class="grid grid--3" style="margin-top: 2rem;">
        <!-- Las empresas se cargarán dinámicamente aquí -->
      </div>
    
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="index.html" class="header__logo" style="color: white; font-size: 1.5rem;"><div class="header__logo-text">HECHO EN <span>BOLIVIA</span></div></a>
          <p>Fundación sin fines de lucro dedicada a promover el desarrollo económico y social de Bolivia.</p>
          <div class="footer__socials">
            <a href="https://www.facebook.com/FundacionHechoBolivia/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-tiktok"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div>
          <h4 class="footer__title">Enlaces</h4>
          <ul class="footer__links">
            <li><a href="index.html"><i class="fas fa-chevron-right"></i> Inicio</a></li>
            <li><a href="quienes-somos.html"><i class="fas fa-chevron-right"></i> Quiénes Somos</a></li>
            <li><a href="proyectos.html"><i class="fas fa-chevron-right"></i> Proyectos</a></li>
            <li><a href="noticias.html"><i class="fas fa-chevron-right"></i> Noticias</a></li>
            <li><a href="galeria.html"><i class="fas fa-chevron-right"></i> Galería</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__title">Fundación</h4>
          <ul class="footer__links">
            <li><a href="quienes-somos.html"><i class="fas fa-chevron-right"></i> Misión y Visión</a></li>
            <li><a href="proyectos.html"><i class="fas fa-chevron-right"></i> EXPOINDUSTRIA</a></li>
            <li><a href="contacto.html"><i class="fas fa-chevron-right"></i> Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__title">Contacto</h4>
          <div class="footer__contact-item"><i class="fas fa-map-marker-alt"></i><span>Cochabamba, Bolivia</span></div>
          <div class="footer__contact-item"><i class="fas fa-envelope"></i><span>fundacionhechoenbolivia@gmail.com</span></div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copyright">© 2026 <strong>Fundación Hecho en Bolivia</strong>. Todos los derechos reservados.</div>
      </div>
    </div>
  </footer>

  <button class="scroll-top" aria-label="Volver arriba"><i class="fas fa-chevron-up"></i></button>
  <script src="js/main.js"></script>
  <script type="module" src="js/public-db.js"></script>
</body>
</html>"""

with open("directorio.html", "w", encoding="utf8") as f:
    f.write(content)
