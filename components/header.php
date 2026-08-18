<?php
// Default values
if (!isset($pageTitle)) $pageTitle = 'Fundación Hecho en Bolivia';
if (!isset($pageDescription)) $pageDescription = 'Impulsamos el desarrollo económico administrando la Marca País y fomentando la producción nacional.';
if (!isset($basePath)) $basePath = '';
if (!isset($activeNav)) $activeNav = '';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <script>window.API_BASE = '<?php echo $basePath; ?>api';</script>
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($pageDescription); ?>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  <link rel="stylesheet" href="<?php echo $basePath; ?>css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- Prevent Dark Mode Flash -->
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  </script>

  <!-- SEO y Open Graph -->
  <meta property="og:title" content="Fundación Hecho en Bolivia">
  <meta property="og:description" content="Impulsamos el desarrollo económico administrando la Marca País y fomentando la producción nacional.">
  <meta property="og:image" content="https://hechoenbolivia.org/assets/images/logo-hecho-en-bolivia.jpg">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/x-icon" href="<?php echo $basePath; ?>assets/images/logo.jfif">
  <?php if (isset($extraHead)) echo $extraHead; ?>
</head>
<body>
  <!-- Custom Cursor -->
  <div class="custom-cursor"></div>
  <div class="custom-cursor-follower"></div>

  <!-- Page Loader -->
  <div class="page-loader" aria-hidden="true">
    <div class="page-loader__spinner"></div>
  </div>

  <!-- Header -->
  <header class="header<?php echo (isset($headerTransparent) && $headerTransparent) ? ' header--transparent' : ''; ?>"<?php echo (isset($headerTransparent) && $headerTransparent) ? ' data-transparent="true"' : ''; ?>>
    <div class="container header__inner">
      <a href="<?php echo $basePath; ?>index.php" class="header__logo" aria-label="Inicio">
        <div class="header__logo-text">HECHO EN <span>BOLIVIA</span></div>
      </a>

      <nav class="nav" role="navigation">
        <a href="<?php echo $basePath; ?>index.php" class="nav__link <?php echo ($activeNav === 'inicio') ? 'nav__link--active' : ''; ?>">Inicio</a>
        
        <div class="nav__item">
          <a href="#" class="nav__link <?php echo ($activeNav === 'fundacion') ? 'nav__link--active' : ''; ?>">La Fundación <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="<?php echo $basePath; ?>fundacion/quienes-somos.php" class="dropdown__link">Quiénes Somos</a></li>
            <li><a href="<?php echo $basePath; ?>fundacion/directorio.php" class="dropdown__link">Directorio</a></li>
            <li><a href="<?php echo $basePath; ?>fundacion/voluntariado.php" class="dropdown__link">Voluntariado</a></li>
            <li><a href="<?php echo $basePath; ?>fundacion/reconocimientos.php" class="dropdown__link">Reconocimientos</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link <?php echo ($activeNav === 'certificaciones') ? 'nav__link--active' : ''; ?>">Certificaciones <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="<?php echo $basePath; ?>certificaciones/sello.php" class="dropdown__link">Marca Hecho en Bolivia</a></li>
            <li><a href="<?php echo $basePath; ?>certificaciones/vaon.php" class="dropdown__link">VAON</a></li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link <?php echo ($activeNav === 'servicios') ? 'nav__link--active' : ''; ?>">Servicios <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="<?php echo $basePath; ?>servicios/red-marcas.php" class="dropdown__link">Red de Marcas</a></li>
            <li><a href="<?php echo $basePath; ?>servicios/radio-online.php" class="dropdown__link">Radio Online HB</a></li>
            <li><a href="<?php echo $basePath; ?>servicios/capacitate.php" class="dropdown__link">Academia FHB</a></li>
            <li class="dropdown-submenu">
              <a href="<?php echo $basePath; ?>asistencia/asistencia-tecnica.php" class="dropdown__link">Asistencia Técnica <i class="fas fa-chevron-right"></i></a>
              <ul class="dropdown-nested">
                <li><a href="<?php echo $basePath; ?>asistencia/sistemas-gestion.php" class="dropdown__link">Sistemas de Gestión</a></li>
                <li><a href="<?php echo $basePath; ?>asistencia/propiedad-intelectual.php" class="dropdown__link">Propiedad Intelectual</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="#" class="dropdown__link">Publicaciones <i class="fas fa-chevron-right"></i></a>
              <ul class="dropdown-nested">
                <li><a href="<?php echo $basePath; ?>publicaciones/pulso-economico.php" class="dropdown__link">Pulso Económico</a></li>
                <li><a href="<?php echo $basePath; ?>publicaciones/revista-origen.php" class="dropdown__link">Revista Origen</a></li>
                <li><a href="<?php echo $basePath; ?>publicaciones/economia-creativa.php" class="dropdown__link">Economía Creativa</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="nav__item">
          <a href="#" class="nav__link <?php echo ($activeNav === 'multimedia') ? 'nav__link--active' : ''; ?>">Multimedia <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown">
            <li><a href="<?php echo $basePath; ?>multimedia/galeria.php" class="dropdown__link">Galería</a></li>
            <li><a href="<?php echo $basePath; ?>multimedia/cunas.php" class="dropdown__link">Cuñas Radiales</a></li>
            <li><a href="<?php echo $basePath; ?>multimedia/spots.php" class="dropdown__link">Spots</a></li>
          </ul>
        </div>

        <a href="<?php echo $basePath; ?>info/noticias.php" class="nav__link <?php echo ($activeNav === 'noticias') ? 'nav__link--active' : ''; ?>">Noticias</a>
        
        <button class="theme-toggle" aria-label="Cambiar tema"><i class="fas fa-moon"></i></button>
        <div class="nav__cta">
          <a href="<?php echo $basePath; ?>info/contacto.php" class="btn btn--primary btn--sm"><i class="fas fa-handshake"></i> Únete</a>
        </div>
      </nav>
      <button class="mobile-toggle" aria-label="Abrir menú"><span></span><span></span><span></span></button>
    </div>
    <div class="nav-overlay"></div>
  </header>
