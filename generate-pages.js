const fs = require('fs');
const path = require('path');

// Datos para las páginas
const pages = [
  {
    id: 'directorio',
    title: 'Directorio',
    icon: 'fa-users-cog',
    sidebarCategory: 'fundacion',
    content: `
      <h2>Junta Directiva</h2>
      <p>La Fundación Hecho en Bolivia está liderada por profesionales comprometidos con el desarrollo nacional y la promoción de nuestra identidad.</p>
      <div class="card p-4 mt-4">
        <h3>Presidencia</h3>
        <p>Responsable de la dirección estratégica y representación legal de la Fundación ante el Estado y la Sociedad Civil.</p>
      </div>
      <div class="card p-4 mt-4">
        <h3>Comité Técnico</h3>
        <p>Expertos encargados de evaluar las solicitudes para el uso del Sello Hecho en Bolivia y garantizar los estándares de calidad.</p>
      </div>
    `
  },
  {
    id: 'voluntariado',
    title: 'Voluntariado',
    icon: 'fa-hands-helping',
    sidebarCategory: 'fundacion',
    content: `
      <h2>Únete a la Causa</h2>
      <p>El programa de voluntariado de la Fundación busca jóvenes y profesionales que deseen aportar al crecimiento de la industria nacional.</p>
      <h3>Áreas de Acción</h3>
      <ul>
        <li><strong>Eventos y Ferias:</strong> Apoyo logístico en la EXPOINDUSTRIA y eventos departamentales.</li>
        <li><strong>Capacitación:</strong> Asistencia en talleres de educación empresarial para Mypes.</li>
        <li><strong>Difusión:</strong> Apoyo en campañas de la Marca País en redes sociales y medios.</li>
      </ul>
      <a href="contacto.html" class="btn btn--primary mt-4">Postular al Voluntariado</a>
    `
  },
  {
    id: 'sello',
    title: 'Uso del Sello "Hecho en Bolivia"',
    icon: 'fa-stamp',
    sidebarCategory: 'servicios',
    content: `
      <h2>Identidad y Calidad Nacional</h2>
      <p>El Sello "Hecho en Bolivia" es el distintivo oficial que certifica que un producto o servicio ha sido elaborado dentro del territorio nacional, aportando al desarrollo económico y la generación de empleo.</p>
      
      <div class="split mt-6">
        <div class="card p-6">
          <i class="fas fa-check-circle text-primary text-3xl mb-4"></i>
          <h3>Beneficios del Sello</h3>
          <ul class="mt-2">
            <li>Preferencia en contrataciones estatales.</li>
            <li>Reconocimiento inmediato por el consumidor.</li>
            <li>Respaldo institucional de la Marca País.</li>
            <li>Acceso a ferias y ruedas de negocios.</li>
          </ul>
        </div>
        <div class="card p-6">
          <i class="fas fa-file-signature text-secondary text-3xl mb-4"></i>
          <h3>Requisitos Principales</h3>
          <ul class="mt-2">
            <li>Registro en FUNDEMPRESA (o entidad actual).</li>
            <li>NIT Activo y Certificado.</li>
            <li>Demostrar origen nacional de manufactura/servicio.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 'legislacion',
    title: 'Legislación Empresarial',
    icon: 'fa-balance-scale',
    sidebarCategory: 'servicios',
    content: `
      <h2>Marco Normativo para la Industria</h2>
      <p>Asesoramiento y recopilación de la normativa vigente que rige el desarrollo empresarial, productivo y comercial en el Estado Plurinacional de Bolivia.</p>
      <h3>Leyes Clave</h3>
      <ul>
        <li><strong>Ley de Fomento a la Industria Nacional:</strong> Disposiciones para priorizar la compra estatal de productos bolivianos.</li>
        <li><strong>Normativa Laboral y Tributaria:</strong> Actualizaciones constantes para el sector productivo formal.</li>
      </ul>
      <p>Nuestro equipo legal apoya a los afiliados en la interpretación y aplicación de normativas complejas para evitar contingencias y promover la formalización.</p>
    `
  },
  {
    id: 'tramites',
    title: 'Trámites Administrativos',
    icon: 'fa-folder-open',
    sidebarCategory: 'servicios',
    content: `
      <h2>Gestión y Agilización Institucional</h2>
      <p>Apoyamos a nuestros miembros en la navegación de la burocracia estatal, facilitando la creación y mantenimiento de empresas formales.</p>
      <div class="grid grid-cols-2 gap-4 mt-6">
        <div class="card p-4">
          <h4>Apertura de Empresas</h4>
          <p class="text-sm">Guía paso a paso para registros en Impuestos Nacionales, Registro de Comercio, Caja de Salud, y AFPs.</p>
        </div>
        <div class="card p-4">
          <h4>Certificaciones SENASAG</h4>
          <p class="text-sm">Asesoría técnica para la obtención de registros sanitarios de alimentos y bebidas.</p>
        </div>
        <div class="card p-4">
          <h4>Licencias de Funcionamiento</h4>
          <p class="text-sm">Apoyo en trámites municipales según jurisdicción.</p>
        </div>
        <div class="card p-4">
          <h4>Certificados de Origen</h4>
          <p class="text-sm">Trámites para exportación aprovechando acuerdos comerciales vigentes.</p>
        </div>
      </div>
    `
  },
  {
    id: 'propiedad-intelectual',
    title: 'Propiedad Intelectual e Industrial',
    icon: 'fa-lightbulb',
    sidebarCategory: 'servicios',
    content: `
      <h2>Protege tu Innovación</h2>
      <p>La protección de marcas, patentes y derechos de autor es fundamental para el crecimiento sostenible y la competitividad de la industria boliviana.</p>
      <h3>Nuestros Servicios</h3>
      <ul>
        <li>Búsqueda de antecedentes fonéticos y figurativos.</li>
        <li>Registro de Marcas Comerciales y Lemas en el SENAPI.</li>
        <li>Asesoramiento en Patentes de Invención y Modelos de Utilidad.</li>
        <li>Renovación y defensa de derechos marcarios.</li>
      </ul>
      <p class="mt-4 p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800">
        <em>"Una marca registrada es el activo intangible más valioso de una empresa en crecimiento."</em>
      </p>
    `
  },
  {
    id: 'educacion',
    title: 'Educación Empresarial',
    icon: 'fa-graduation-cap',
    sidebarCategory: 'servicios',
    content: `
      <h2>Formación para la Competitividad</h2>
      <p>Creemos que el conocimiento es la base de la transformación productiva. Organizamos programas de formación continua para empresarios, emprendedores y trabajadores.</p>
      <h3>Programas Activos</h3>
      <ul>
        <li><strong>Diplomados en Gestión Industrial:</strong> En alianza con universidades locales.</li>
        <li><strong>Talleres de Exportación:</strong> Capacitación técnica para mercados internacionales.</li>
        <li><strong>Marketing Digital para Mypes:</strong> Herramientas modernas para vender "Hecho en Bolivia" en el mundo.</li>
      </ul>
      <a href="contacto.html" class="btn btn--secondary mt-4">Consultar Calendario de Cursos</a>
    `
  },
  {
    id: 'promocion',
    title: 'Promoción Comercial',
    icon: 'fa-bullhorn',
    sidebarCategory: 'servicios',
    content: `
      <h2>Conectando Oferta y Demanda</h2>
      <p>Diseñamos estrategias y organizamos eventos para conectar a los productores bolivianos con mercados locales e internacionales.</p>
      <div class="card p-6 mt-4">
        <h3>Ruedas de Negocios</h3>
        <p>Facilitamos encuentros B2B (Business to Business) entre proveedores nacionales y grandes compradores, supermercados e instituciones del Estado.</p>
      </div>
      <div class="card p-6 mt-4">
        <h3>Catálogo Nacional de Productores</h3>
        <p>Administramos el directorio oficial de empresas certificadas con el Sello "Hecho en Bolivia", distribuyéndolo a nivel diplomático y comercial.</p>
      </div>
    `
  },
  {
    id: 'cunas',
    title: 'Cuñas Radiales y Spots',
    icon: 'fa-broadcast-tower',
    sidebarCategory: 'multimedia',
    content: `
      <h2>Campañas Históricas</h2>
      <p>Archivo multimedia de las históricas campañas que posicionaron el lema "Consume lo Nuestro, Hecho en Bolivia, Emplea a los Nuestros" desde el año 2001.</p>
      <div class="grid grid-cols-2 gap-4 mt-6">
        <div class="card p-4 text-center">
          <i class="fas fa-play-circle text-4xl text-primary mb-2"></i>
          <h4>Campaña Original (2001)</h4>
          <p class="text-sm">Spot televisivo de lanzamiento.</p>
        </div>
        <div class="card p-4 text-center">
          <i class="fas fa-volume-up text-4xl text-secondary mb-2"></i>
          <h4>Cuña "El Valor de lo Nuestro"</h4>
          <p class="text-sm">Radio, difusión nacional.</p>
        </div>
      </div>
      <p class="mt-6 text-sm text-gray-500">* Material disponible para uso exclusivo de miembros afiliados en sus campañas co-brandeables.</p>
    `
  },
  {
    id: 'dossier',
    title: 'Dossier Institucional',
    icon: 'fa-book',
    sidebarCategory: 'multimedia',
    content: `
      <h2>Documentos Oficiales y Publicaciones</h2>
      <p>Accede a la documentación formal, reportes de impacto y el Dossier de Consolidación de la Fundación Hecho en Bolivia.</p>
      
      <div class="card p-6 border-l-4 border-primary flex items-center justify-between">
        <div>
          <h3 class="mb-1">Dossier de Consolidación (2012)</h3>
          <p class="text-sm">Documento fundacional detallando fines, objetivos y miembros originales.</p>
        </div>
        <a href="Dossier_FHB.pdf" target="_blank" class="btn btn--primary"><i class="fas fa-download"></i> PDF</a>
      </div>

      <div class="card p-6 mt-4 border-l-4 border-secondary flex items-center justify-between">
        <div>
          <h3 class="mb-1">Memoria Anual EXPOINDUSTRIA</h3>
          <p class="text-sm">Resultados e impacto económico de la última feria nacional.</p>
        </div>
        <button class="btn btn--outline" disabled>Próximamente</button>
      </div>
    `
  }
];

// Sidebar Data
const sidebars = {
  fundacion: [
    { id: 'quienes-somos.html', title: 'Quiénes Somos', icon: 'fa-info-circle' },
    { id: 'directorio.html', title: 'Directorio', icon: 'fa-users-cog' },
    { id: 'voluntariado.html', title: 'Voluntariado', icon: 'fa-hands-helping' }
  ],
  servicios: [
    { id: 'sello.html', title: 'Uso del Sello', icon: 'fa-stamp' },
    { id: 'legislacion.html', title: 'Legislación Empresarial', icon: 'fa-balance-scale' },
    { id: 'tramites.html', title: 'Trámites Administrativos', icon: 'fa-folder-open' },
    { id: 'propiedad-intelectual.html', title: 'Propiedad Intelectual', icon: 'fa-lightbulb' },
    { id: 'educacion.html', title: 'Educación Empresarial', icon: 'fa-graduation-cap' },
    { id: 'promocion.html', title: 'Promoción Comercial', icon: 'fa-bullhorn' }
  ],
  multimedia: [
    { id: 'galeria.html', title: 'Galería', icon: 'fa-images' },
    { id: 'cunas.html', title: 'Cuñas Radiales', icon: 'fa-broadcast-tower' },
    { id: 'dossier.html', title: 'Dossier Institucional', icon: 'fa-book' }
  ]
};

// Generar sidebar HTML
function generateSidebar(category, currentId) {
  let html = '<div class="sidebar-menu card p-4 sticky top-24">';
  html += '<h3 class="font-heading text-lg mb-4 uppercase tracking-wider text-secondary">Navegación</h3>';
  html += '<ul class="space-y-2">';
  
  sidebars[category].forEach(item => {
    const isActive = item.id === currentId + '.html' ? 'text-primary font-bold border-r-2 border-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary';
    html += `
      <li>
        <a href="${item.id}" class="flex items-center gap-3 py-2 px-3 rounded transition-colors ${isActive}">
          <i class="fas ${item.icon} w-5 text-center"></i>
          <span>${item.title}</span>
        </a>
      </li>
    `;
  });
  
  html += '</ul></div>';
  return html;
}

// Plantilla Maestra
const template = fs.readFileSync(path.join(__dirname, 'quienes-somos.html'), 'utf8');

// Extraer Cabecera (hasta <main>) y Pie (desde </main>)
const mainStart = template.indexOf('<main>');
const mainEnd = template.indexOf('</main>') + 7;
const headerContent = template.substring(0, mainStart + 6);
const footerContent = template.substring(mainEnd - 7);

// Crear páginas
pages.forEach(page => {
  const filePath = path.join(__dirname, page.id + '.html');
  
  const sidebarHtml = generateSidebar(page.sidebarCategory, page.id);
  
  const mainHtml = `
    <!-- Page Header -->
    <section class="page-header relative py-20 bg-dark text-white text-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('assets/images/hero-bolivia.png'); background-size: cover; background-position: center; filter: grayscale(1);"></div>
      <div class="container relative z-10">
        <i class="fas ${page.icon} text-5xl text-secondary mb-4"></i>
        <h1 class="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">${page.title}</h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="section py-12">
      <div class="container">
        <!-- Grid: 3 columnas sidebar, 9 columnas contenido -->
        <div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 2rem;">
          
          <!-- Sidebar -->
          <aside style="grid-column: span 12 / span 12;" class="lg-col-3">
            ${sidebarHtml}
          </aside>

          <!-- Main Content -->
          <div style="grid-column: span 12 / span 12;" class="lg-col-9">
            <div class="content-wrapper prose dark:prose-invert max-w-none">
              ${page.content}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
  
  // Custom CSS for layout within the page so we don't need tailwind compilation
  const customStyles = `
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
  `;

  // Insert styles before closing head
  let finalHeader = headerContent.replace('</head>', customStyles + '\n</head>');

  fs.writeFileSync(filePath, finalHeader + mainHtml + footerContent, 'utf8');
  console.log(`Created: ${filePath}`);
});

// Update the nav links in the master update-nav script
const updateNavPath = path.join(__dirname, 'update-nav.js');
let updateNavContent = fs.readFileSync(updateNavPath, 'utf8');

updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Directorio<\/a>/g, '<a href="directorio.html" class="dropdown__link">Directorio</a>');
updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Voluntariado<\/a>/g, '<a href="voluntariado.html" class="dropdown__link">Voluntariado</a>');

updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Uso del Sello "Hecho en Bolivia"<\/a>/g, '<a href="sello.html" class="dropdown__link">Uso del Sello "Hecho en Bolivia"</a>');
updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Legislación Empresarial<\/a>/g, '<a href="legislacion.html" class="dropdown__link">Legislación Empresarial</a>');
updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Trámites Administrativos<\/a>/g, '<a href="tramites.html" class="dropdown__link">Trámites Administrativos</a>');
updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Propiedad Intelectual<\/a>/g, '<a href="propiedad-intelectual.html" class="dropdown__link">Propiedad Intelectual</a>');
updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Educación Empresarial<\/a>/g, '<a href="educacion.html" class="dropdown__link">Educación Empresarial</a>');
updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Promoción Comercial<\/a>/g, '<a href="promocion.html" class="dropdown__link">Promoción Comercial</a>');

updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Cuñas Radiales<\/a>/g, '<a href="cunas.html" class="dropdown__link">Cuñas Radiales</a>');
updateNavContent = updateNavContent.replace(/<a href="#" class="dropdown__link">Dossier Consolidación<\/a>/g, '<a href="dossier.html" class="dropdown__link">Dossier Consolidación</a>');

// Agregamos las nuevas páginas a la lista de archivos que deben ser actualizados
const fileListRegex = /const files = \[\s*([\s\S]*?)\s*\];/;
const newFileList = `const files = [
  'index.html', 'quienes-somos.html', 'proyectos.html', 'noticias.html', 'galeria.html', 'contacto.html',
  'directorio.html', 'voluntariado.html', 'sello.html', 'legislacion.html', 'tramites.html', 
  'propiedad-intelectual.html', 'educacion.html', 'promocion.html', 'cunas.html', 'dossier.html'
];`;

updateNavContent = updateNavContent.replace(fileListRegex, newFileList);

fs.writeFileSync(updateNavPath, updateNavContent, 'utf8');
console.log('Updated update-nav.js with real links');
