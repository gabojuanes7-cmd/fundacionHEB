content = """const fs = require('fs');
const path = require('path');

const files = [
  'index.html', 'quienes-somos.html', 'proyectos.html', 'noticias.html', 'galeria.html', 'contacto.html',
  'directorio.html', 'voluntariado.html', 'sello.html', 'legislacion.html', 'tramites.html', 
  'propiedad-intelectual.html', 'educacion.html', 'promocion.html', 'cunas.html', 'dossier.html',
  'reconocimientos.html', 'vaon.html', 'red-marcas.html', 'capacitate.html', 'asistencia-tecnica.html',
  'sistemas-gestion.html', 'radio-online.html', 'spots.html', 'revista-origen.html', 'economia-creativa.html',
  'pulso-economico.html', 'certificaciones.html', 'servicios.html', 'admin.html'
];

const newNavBase = `
      <nav class="nav" role="navigation">
        <a href="index.html" class="nav__link {{ACT_INDEX}}">Inicio</a>
        
        <div class="nav__item">
          <a href="#" class="nav__link {{ACT_ABOUT}}">La Fundación <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="quienes-somos.html" class="dropdown__link">Quiénes Somos</a></li>
            <li><a href="directorio.html" class="dropdown__link">Directorio</a></li>
            <li><a href="voluntariado.html" class="dropdown__link">Voluntariado</a></li>
            <li><a href="reconocimientos.html" class="dropdown__link">Reconocimientos</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link {{ACT_CERT}}">Certificaciones <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="sello.html" class="dropdown__link">Marca Hecho en Bolivia</a></li>
            <li><a href="vaon.html" class="dropdown__link">VAON</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link {{ACT_SERV}}">Servicios <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="red-marcas.html" class="dropdown__link">Red de Marcas</a></li>
            <li><a href="radio-online.html" class="dropdown__link">Radio Online HB</a></li>
            <li><a href="capacitate.html" class="dropdown__link">Academia FHB</a></li>
            <li class="dropdown-submenu">
              <a href="asistencia-tecnica.html" class="dropdown__link">Asistencia Técnica <i class="fas fa-chevron-right"></i></a>
              <ul class="dropdown-nested">
                <li><a href="sistemas-gestion.html" class="dropdown__link">Sistemas de Gestión</a></li>
                <li><a href="propiedad-intelectual.html" class="dropdown__link">Propiedad Intelectual</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="#" class="dropdown__link">Publicaciones <i class="fas fa-chevron-right"></i></a>
              <ul class="dropdown-nested">
                <li><a href="pulso-economico.html" class="dropdown__link">Pulso Económico</a></li>
                <li><a href="revista-origen.html" class="dropdown__link">Revista Origen</a></li>
                <li><a href="economia-creativa.html" class="dropdown__link">Economía Creativa</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link {{ACT_GAL}}">Multimedia <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="galeria.html" class="dropdown__link">Galería</a></li>
            <li><a href="cunas.html" class="dropdown__link">Cuñas Radiales</a></li>
            <li><a href="spots.html" class="dropdown__link">Spots</a></li>
          </ul>
        </div>

        <a href="noticias.html" class="nav__link {{ACT_NEWS}}">Noticias</a>
        
        <button class="theme-toggle" aria-label="Cambiar tema"><i class="fas fa-moon"></i></button>
        <div class="nav__cta">
          <a href="contacto.html" class="btn btn--primary btn--sm"><i class="fas fa-handshake"></i> Únete</a>
        </div>
      </nav>
`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let htmlContent = fs.readFileSync(filePath, 'utf8');
    
    const navRegex = /<nav class="nav" role="navigation">[\\s\\S]*?<\\/nav>/;
    
    let specificNav = newNavBase
      .replace('{{ACT_INDEX}}', file === 'index.html' ? 'nav__link--active' : '')
      .replace('{{ACT_ABOUT}}', file === 'quienes-somos.html' ? 'nav__link--active' : '')
      .replace('{{ACT_PROJ}}', file === 'proyectos.html' ? 'nav__link--active' : '')
      .replace('{{ACT_GAL}}', file === 'galeria.html' ? 'nav__link--active' : '')
      .replace('{{ACT_NEWS}}', file === 'noticias.html' ? 'nav__link--active' : '');
    
    specificNav = specificNav.replace(/{{[A-Z_]+}}/g, '');

    htmlContent = htmlContent.replace(navRegex, specificNav.trim());
    
    fs.writeFileSync(filePath, htmlContent, 'utf8');
    console.log(`Updated nav in ${file}`);
  }
});
"""

with open('update-nav.js', 'w', encoding='utf-8') as f:
    f.write(content)
