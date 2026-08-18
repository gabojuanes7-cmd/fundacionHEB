<?php
$pageTitle = 'Directorio â FundaciÃ³n Hecho en Bolivia';
$pageDescription = 'Conoce la historia de la FundaciÃ³n Hecho en Bolivia, nacida de la campaÃ±a \'Consume lo Nuestro\' en 2001 y consolidada en 2012.';
$basePath = '../';
$activeNav = 'fundacion';
$headerTransparent = true;
$extraHead = '<style>       @media (min-width: 1024px) {         .lg-col-3 { grid-column: span 3 / span 12 !important; }         .lg-col-9 { grid-column: span 9 / span 12 !important; }       }       .content-wrapper h2 { color: var(--primary); font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; }       .content-wrapper h3 { color: var(--secondary); font-family: var(--font-heading); font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; }       .content-wrapper h4 { color: var(--text-primary); font-weight: bold; margin-bottom: 0.5rem; }       .content-wrapper p { line-height: 1.8; margin-bottom: 1rem; color: var(--text-secondary); }       .content-wrapper ul { list-style-type: disc; padding-left: 2rem; margin-bottom: 1rem; color: var(--text-secondary); }       .content-wrapper li { margin-bottom: 0.5rem; }       .content-wrapper .card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); }       .sticky { position: sticky; top: 100px; }       .flex { display: flex; }       .items-center { align-items: center; }       .justify-between { justify-content: space-between; }       .gap-3 { gap: 0.75rem; }       .space-y-2 > * + * { margin-top: 0.5rem; }       .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }       .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }       .rounded { border-radius: 0.25rem; }       .w-5 { width: 1.25rem; }       .text-center { text-align: center; }       .tracking-wider { letter-spacing: 0.05em; }       .uppercase { text-transform: uppercase; }       .text-sm { font-size: 0.875rem; }     </style>';

include '../components/header.php';
?>

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
            <div class="sidebar-menu card p-4 sticky top-24"><h3 class="font-heading text-lg mb-4 uppercase tracking-wider text-secondary">NavegaciÃ³n</h3><ul class="space-y-2">
      <li>
        <a href="../fundacion/quienes-somos.php" class="flex items-center gap-3 py-2 px-3 rounded transition-colors text-gray-600 dark:text-gray-300 hover:text-primary">
          <i class="fas fa-info-circle w-5 text-center"></i>
          <span>QuiÃ©nes Somos</span>
        </a>
      </li>
    
      <li>
        <a href="../fundacion/directorio.php" class="flex items-center gap-3 py-2 px-3 rounded transition-colors text-primary font-bold border-r-2 border-primary">
          <i class="fas fa-users-cog w-5 text-center"></i>
          <span>Directorio</span>
        </a>
      </li>
    
      <li>
        <a href="../fundacion/voluntariado.php" class="flex items-center gap-3 py-2 px-3 rounded transition-colors text-gray-600 dark:text-gray-300 hover:text-primary">
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
      <p>La FundaciÃ³n Hecho en Bolivia estÃ¡ liderada por profesionales comprometidos con el desarrollo nacional y la promociÃ³n de nuestra identidad.</p>
      
      <div class="grid grid--2 mt-8">
        <!-- Gerente General -->
        <div class="card p-4 text-center" style="border-top: 4px solid var(--primary); display: flex; flex-direction: column; align-items: center;">
          <div style="width: 100px; height: 100px; border-radius: 50%; background: var(--bg-secondary); margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-md); overflow: hidden;">
            <img loading="lazy" src="../assets/images/oscar-buendia.jpg" alt="Lic. Oscar Buendia Miranda" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.5rem; color: var(--text-primary);">Lic. Oscar Buendia Miranda</h3>
          <span style="display: inline-block; padding: 0.25rem 1rem; background: rgba(var(--primary-rgb), 0.1); color: var(--primary); border-radius: var(--radius-full); font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Gerente General</span>
          <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;">LÃ­der de la administraciÃ³n y representaciÃ³n de la FundaciÃ³n, velando por el cumplimiento de los objetivos estratÃ©gicos.</p>
        </div>

        <!-- ComitÃ© TÃ©cnico -->
        <div class="card p-4 text-center" style="border-top: 4px solid var(--secondary); display: flex; flex-direction: column; align-items: center;">
          <div style="width: 100px; height: 100px; border-radius: 50%; background: var(--bg-secondary); margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-md);">
            <i class="fas fa-users-cog" style="font-size: 3rem; color: var(--secondary);"></i>
          </div>
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.5rem; color: var(--text-primary);">ComitÃ© TÃ©cnico</h3>
          <span style="display: inline-block; padding: 0.25rem 1rem; background: rgba(var(--secondary-rgb), 0.1); color: var(--secondary); border-radius: var(--radius-full); font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Cuerpo de Expertos</span>
          <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;">Encargados de coordinar Asistencia TÃ©cnica, CapacitaciÃ³n y evaluar minuciosamente las solicitudes para el uso de la Marca Hecho en Bolivia.</p>
        </div>
            </div>

      <h2 style="margin-top: 3rem;">Miembros</h2>
      <p>Conoce a las 9 empresas miembro que forman parte de la FundaciÃ³n Hecho en Bolivia y que llevan nuestra marca con orgullo.</p>
      
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
          <label for="filter-categoria" style="display: block; font-weight: bold; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">Filtrar por CategorÃ­a</label>
          <select id="filter-categoria" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; background: var(--bg-body); color: var(--text-primary);">
            <option value="todas">Todas las categorÃ­as</option>
            <!-- Opciones dinÃ¡micas -->
          </select>
        </div>
      </div>

      <div id="dynamic-directory-container" class="grid grid--3" style="margin-top: 2rem;">
        <!-- Las empresas se cargarÃ¡n dinÃ¡micamente aquÃ­ -->
      </div>
    
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->

<?php include '../components/footer.php'; ?>
