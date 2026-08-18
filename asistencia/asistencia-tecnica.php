<?php
$pageTitle = 'Asistencia Técnica | Fundación Hecho en Bolivia';
$pageDescription = 'Descarga nuestro Dossier de Consolidación y otros documentos institucionales.';
$basePath = '../';
$activeNav = 'servicios';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
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
  </main>

<?php include '../components/footer.php'; ?>
