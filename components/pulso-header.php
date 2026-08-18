<?php
if (!isset($pageTitle)) $pageTitle = 'Pulso Económico | Fundación Hecho en Bolivia';
if (!isset($pageDescription)) $pageDescription = 'Tu fuente de información económica en Bolivia.';
if (!isset($basePath)) $basePath = '';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <script>window.API_BASE = '<?php echo $basePath; ?>api';</script>
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <meta name="description" content="<?php echo htmlspecialchars($pageDescription); ?>">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script>
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  </script>
  <meta property="og:title" content="Fundación Hecho en Bolivia">
  <meta property="og:description" content="Impulsamos el desarrollo económico administrando la Marca País y fomentando la producción nacional.">
  <meta property="og:image" content="https://hechoenbolivia.org/assets/images/logo-hecho-en-bolivia.jpg">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/x-icon" href="<?php echo $basePath; ?>assets/images/logo.jfif">
  <?php if (isset($extraHead)) echo $extraHead; ?>
</head>
<body class="pulso-page">

  <!-- ========== BANNER PUBLICITARIO ========== -->
  <section class="pulso-ad-banner">
    <div class="carousel-track" id="pulso-banner-track">
      <div class="carousel-slide">
        <img src="<?php echo $basePath; ?>assets/images/pulsoeconomico/Picsart_25-09-22_16-19-29-933.jpg.jpeg" alt="Pulso Económico Banner 1">
      </div>
      <div class="carousel-slide">
        <img src="<?php echo $basePath; ?>assets/images/pulsoeconomico/Picsart_25-09-22_16-32-16-566.jpg.jpeg" alt="Pulso Económico Banner 2">
      </div>
      <div class="carousel-slide">
        <img src="<?php echo $basePath; ?>assets/images/pulsoeconomico/Picsart_25-09-22_16-19-29-933.jpg.jpeg" alt="Pulso Económico Banner 1">
      </div>
      <div class="carousel-slide">
        <img src="<?php echo $basePath; ?>assets/images/pulsoeconomico/Picsart_25-09-22_16-32-16-566.jpg.jpeg" alt="Pulso Económico Banner 2">
      </div>
    </div>
    <div class="carousel-dots" id="pulso-banner-dots"></div>
    <div class="pulso-live-dot"><span></span><span></span></div>
  </section>

  <!-- ========== TOP BAR ROJA ========== -->
  <div class="pulso-topbar">
    <a href="<?php echo $basePath; ?>index.php">Fundación Hecho en Bolivia</a>
  </div>

  <!-- ========== NAV PRINCIPAL AMARILLA ========== -->
  <nav class="pulso-nav-main">
    <div class="pulso-logo">
      <a href="<?php echo $basePath; ?>publicaciones/pulso-economico.php">
        <img loading="lazy" src="<?php echo $basePath; ?>assets/images/pulsoeconomico/pulso%20ECO.png" alt="Pulso Económico" style="max-height: 45px; width: auto; object-fit: contain;">
      </a>
    </div>
    <div class="pulso-links">
      <a href="#" id="pulso-publicidad-link">Publicidad</a>
      <a href="<?php echo $basePath; ?>publicaciones/pulso-indicadores.php">Indicadores</a>
      <a href="<?php echo $basePath; ?>assets/REDIRECCIONES/EVOLUCION%20DEL%20SALARIO%20MINIMO%20NACIONAL.pdf" id="pulso-smn-link" target="_blank">Evol. SMN</a>
      <a href="<?php echo $basePath; ?>assets/REDIRECCIONES/IPC%20PAISES%20VECINOS%202025.pdf" id="pulso-ipc-link" target="_blank">IPC Vecinos</a>
    </div>
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <button class="pulso-subscribe" id="pulso-subscribe-btn">Suscríbete</button>
      <button class="pulso-mobile-toggle" id="pulso-mobile-btn">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ========== SUB NAV VERDE ========== -->
  <nav class="pulso-nav-sub" id="pulso-subnav">
    <a href="#noticias">Noticias</a>
    <a href="<?php echo $basePath; ?>assets/REDIRECCIONES/TABLA%20COTIZACIONES.pdf" id="pulso-cotizacion-link" target="_blank">Cotización</a>
    <a href="<?php echo $basePath; ?>publicaciones/pulso-articulos.php">Artículos</a>
    <a href="<?php echo $basePath; ?>publicaciones/pulso-2minutos.php">2 minutos</a>
    <a href="<?php echo $basePath; ?>publicaciones/pulso-precios.php">Precios</a>
    <a href="<?php echo $basePath; ?>assets/REDIRECCIONES/CARGAS%20SOCIALES.pdf" id="pulso-cargas-link" target="_blank">Cargas Sociales</a>
  </nav>
