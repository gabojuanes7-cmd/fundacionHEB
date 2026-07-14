const fs = require('fs');
const path = require('path');

const files = [
  'legislacion.html', 
  'tramites.html', 
  'propiedad-intelectual.html', 
  'educacion.html', 
  'promocion.html', 
  'sello.html'
];

const headerHtml = `
  <!-- Custom Cursor -->
  <div class="custom-cursor"></div>
  <div class="custom-cursor-follower"></div>

  <!-- Header -->
  <header class="header header--transparent" data-transparent="true">
    <div class="container header__inner">
      <a href="index.html" class="header__logo" aria-label="Inicio">
        <div class="header__logo-text">HECHO EN <span>BOLIVIA</span></div>
      </a>

      <nav class="nav" role="navigation">
        <a href="index.html" class="nav__link ">Inicio</a>
        
        <div class="nav__item">
          <a href="#" class="nav__link ">La Fundación <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="quienes-somos.html" class="dropdown__link">Quiénes Somos</a></li>
            <li><a href="directorio.html" class="dropdown__link">Directorio</a></li>
            <li><a href="voluntariado.html" class="dropdown__link">Voluntariado</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link nav__link--active">Servicios <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="sello.html" class="dropdown__link">Uso del Sello "Hecho en Bolivia"</a></li>
            <li><a href="legislacion.html" class="dropdown__link">Legislación Empresarial</a></li>
            <li><a href="tramites.html" class="dropdown__link">Trámites Administrativos</a></li>
            <li><a href="propiedad-intelectual.html" class="dropdown__link">Propiedad Intelectual</a></li>
            <li><a href="educacion.html" class="dropdown__link">Educación Empresarial</a></li>
            <li><a href="promocion.html" class="dropdown__link">Promoción Comercial</a></li>
          </ul>
        </div>

        <a href="proyectos.html" class="nav__link ">Proyectos</a>
        <a href="capacitate.html" class="nav__link ">Capacítate</a>
        
        <div class="nav__item">
          <a href="#" class="nav__link ">Multimedia <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="galeria.html" class="dropdown__link">Galería</a></li>
            <li><a href="cunas.html" class="dropdown__link">Cuñas Radiales</a></li>
            <li><a href="dossier.html" class="dropdown__link">Dossier Consolidación</a></li>
          </ul>
        </div>

        <a href="noticias.html" class="nav__link ">Noticias</a>
        <a href="pulso-economico.html" class="nav__link" style="color: #e74c3c; font-weight: bold;"><i class="fas fa-chart-line"></i> Pulso Económico</a>
        <button class="theme-toggle" aria-label="Cambiar tema"><i class="fas fa-moon"></i></button>
        <div class="nav__cta">
          <a href="contacto.html" class="btn btn--primary btn--sm"><i class="fas fa-handshake"></i> Únete</a>
        </div>
      </nav>
      <button class="mobile-toggle" aria-label="Abrir menú"><span></span><span></span><span></span></button>
    </div>
    <div class="nav-overlay"></div>
  </header>
`;

const footerHtml = `
  <!-- ==================== FOOTER ==================== -->
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="index.html" class="header__logo" style="color: white; font-size: 1.5rem;"><div class="header__logo-text">HECHO EN <span>BOLIVIA</span></div></a>
          <p>Fundación sin fines de lucro dedicada a promover el desarrollo económico y la Marca País.</p>
          <div class="footer__socials">
            <a href="https://www.facebook.com/haborigen" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div>
          <h4 class="footer__title">Enlaces</h4>
          <ul class="footer__links">
            <li><a href="index.html"><i class="fas fa-chevron-right"></i> Inicio</a></li>
            <li><a href="capacitate.html"><i class="fas fa-chevron-right"></i> Capacítate Bolivia</a></li>
            <li><a href="proyectos.html"><i class="fas fa-chevron-right"></i> Proyectos</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__title">Fundación</h4>
          <ul class="footer__links">
            <li><a href="quienes-somos.html"><i class="fas fa-chevron-right"></i> Misión y Visión</a></li>
            <li><a href="contacto.html"><i class="fas fa-chevron-right"></i> Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__title">Contacto</h4>
          <div class="footer__contact-item"><i class="fas fa-map-marker-alt"></i><span>Cochabamba, Bolivia</span></div>
          <div class="footer__contact-item"><i class="fas fa-envelope"></i><span>info@fundacionhechoenbolivia.com</span></div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copyright">© 2026 <strong>Fundación Hecho en Bolivia</strong>. Todos los derechos reservados.</div>
      </div>
    </div>
  </footer>

  <button class="scroll-top" aria-label="Volver arriba"><i class="fas fa-chevron-up"></i></button>
  
  <script src="js/main.js"></script>
</body>
</html>
`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    const mainStart = content.indexOf('<main');
    const mainEnd = content.indexOf('</main>');
    if (mainStart === -1 || mainEnd === -1) {
      console.log('Skipping ' + file + ' no main tag');
      return;
    }
    
    // find end of opening main tag
    const mainOpeningEnd = content.indexOf('>', mainStart) + 1;
    let mainContent = content.substring(mainOpeningEnd, mainEnd);

    // Extract title
    let title = 'Servicios | Fundación Hecho en Bolivia';
    const titleStart = content.indexOf('<title>');
    const titleEnd = content.indexOf('</title>');
    if (titleStart !== -1 && titleEnd !== -1) {
      title = content.substring(titleStart + 7, titleEnd);
    }
    // Replace page-hero with page-header
    if (mainContent.includes('page-hero')) {
      const heroStart = mainContent.indexOf('<section class="page-hero"');
      const heroContentStart = mainContent.indexOf('>', heroStart) + 1;
      const heroEnd = mainContent.indexOf('</section>', heroContentStart);
      
      const inner = mainContent.substring(heroContentStart, heroEnd);
      
      const newHero = `
    <section class="page-header relative py-20 bg-dark text-white text-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('assets/images/hero-bolivia.png'); background-size: cover; background-position: center; filter: grayscale(1);"></div>
      <div class="container relative z-10">
        ${inner}
      </div>
    </section>`;
      
      mainContent = mainContent.substring(0, heroStart) + newHero + mainContent.substring(heroEnd + 10);
    }

    const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${title}</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  </script>
</head>
<body>
${headerHtml}

<main>
${mainContent}
</main>

${footerHtml}
`;

    fs.writeFileSync(filePath, fullHtml, 'utf8');
    console.log('Successfully updated ' + file);
  }
});
