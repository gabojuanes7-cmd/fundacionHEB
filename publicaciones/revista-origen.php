<?php
$pageTitle = 'Revista Origen | Fundación Hecho en Bolivia';
<?php
$pageTitle = 'Revista Origen | Fundación Hecho en Bolivia';
$pageDescription = 'Descarga nuestro Dossier de Consolidación y otros documentos institucionales.';
$basePath = '../';
$activeNav = '';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-hero" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); text-align: center;">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Revista Origen</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Nuestra publicación oficial enfocada en el desarrollo productivo y la cultura boliviana.</p>
      </div>
    </section>

    <!-- About Revista Origen -->
    <section class="section" style="background: #f8fafc;">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <h2 class="section-title">¿Qué es la Revista Origen?</h2>
          <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text); margin-bottom: 1.5rem;">
            La <strong>Revista Origen</strong> nace de la profunda necesidad de resaltar y dar voz al talento, esfuerzo y calidad de los productores bolivianos. Transmitimos historias inspiradoras de emprendedores, análisis de la economía nacional y artículos dedicados a fortalecer la identidad de la industria de nuestro país.
          </p>
          <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text);">
            A través de cada edición, buscamos no solo informar, sino también <strong>conectar a nuestra comunidad</strong>, promoviendo el consumo local y destacando el verdadero valor de lo <em>"Hecho en Bolivia"</em>.
          </p>
        </div>
      </div>
    </section>

    <!-- Ediciones Publicadas -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ediciones Publicadas</h2>
        </div>
        
        <!-- We use home-publicaciones-container so public-db.js populates it -->
        <div id="home-publicaciones-container" class="grid grid--3">
          <div style="text-align: center; grid-column: 1 / -1;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Cargando revistas...</p></div>
        </div>
      </div>
    </section>

    <!-- Documentos Institucionales Anteriores -->
    <section class="section" style="background: #f8fafc;">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Otros Documentos</h2>
        </div>
        <div class="grid grid--2" style="gap: 2rem;">
          <a href="#" class="card animated" style="padding: 2rem; display: flex; align-items: center; justify-content: space-between; text-decoration: none; color: inherit;">
            <div>
              <h3 style="margin-bottom: 0.5rem; font-family: var(--font-heading); color: var(--color-primary);">Dossier Institucional 2026</h3>
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">Formato PDF</p>
            </div>
            <i class="fas fa-download" style="font-size: 1.5rem; color: var(--color-primary);"></i>
          </a>

          <a href="#" class="card animated" style="padding: 2rem; display: flex; align-items: center; justify-content: space-between; text-decoration: none; color: inherit;">
            <div>
              <h3 style="margin-bottom: 0.5rem; font-family: var(--font-heading); color: var(--color-secondary);">Manual de Uso del Sello</h3>
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">Formato PDF</p>
            </div>
            <i class="fas fa-download" style="font-size: 1.5rem; color: var(--color-secondary);"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- ==================== CTA ==================== -->
    <section class="cta-section" id="cta">
      <div class="container">
        <h2 class="cta-section__title animate-on-scroll">¿Quieres ser parte del cambio?</h2>
        <p class="cta-section__text animate-on-scroll animate-delay-1">Únete a nuestra misión de impulsar el valor de las ideas en acción. Juntos construimos cambio y desarrollo país. Generamos impacto social.</p>
        <div class="animate-on-scroll animate-delay-2">
          <a href="../info/contacto.php" class="btn btn--secondary btn--lg"><i class="fas fa-envelope"></i> Contáctanos</a>
        </div>
      </div>
    </section>
  </main>

<?php include '../components/footer.php'; ?>
