<?php
$pageTitle = 'Economía Creativa | Fundación Hecho en Bolivia';
$pageDescription = 'Descarga nuestro Dossier de Consolidación y otros documentos institucionales.';
$basePath = '../';
$activeNav = '';

include '../components/header.php';
?>

<main>
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Dossier de Consolidación</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Documentos oficiales, reportes y guías de la Fundación.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid--2" style="gap: 2rem;">
          <a href="#" class="card animated" style="padding: 2rem; display: flex; align-items: center; justify-content: space-between; text-decoration: none; color: inherit;">
            <div>
              <h3 style="margin-bottom: 0.5rem; font-family: var(--font-heading); color: var(--color-primary);">Dossier Institucional 2026</h3>
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">Formato PDF (2.5 MB)</p>
            </div>
            <i class="fas fa-download" style="font-size: 1.5rem; color: var(--color-primary);"></i>
          </a>

          <a href="#" class="card animated" style="padding: 2rem; display: flex; align-items: center; justify-content: space-between; text-decoration: none; color: inherit;">
            <div>
              <h3 style="margin-bottom: 0.5rem; font-family: var(--font-heading); color: var(--color-secondary);">Manual de Uso del Sello</h3>
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">Formato PDF (1.1 MB)</p>
            </div>
            <i class="fas fa-download" style="font-size: 1.5rem; color: var(--color-secondary);"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <div class="text-center mb-12">
          <span class="section-label">Publicaciones</span>
          <h2 class="section-title">Economía Creativa</h2>
          <p style="color: var(--color-text-muted); max-width: 600px; margin: 1rem auto 0;">Explora nuestros últimos lanzamientos y revistas que analizan el panorama económico, creativo e industrial de Bolivia.</p>
        </div>
        
        <div id="home-publicaciones-container" class="grid grid--3">
          <div style="text-align: center; grid-column: 1 / -1;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Cargando publicaciones...</p></div>
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
