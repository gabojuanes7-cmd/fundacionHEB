<?php
$pageTitle = 'EducaciÃ³n Empresarial | FundaciÃ³n Hecho en Bolivia';
$pageDescription = '';
$basePath = '../';
$activeNav = 'servicios';
$headerTransparent = true;

include '../components/header.php';
?>

<main>

    <!-- Hero -->
    
    <section class="page-header relative  bg-dark text-white text-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('assets/images/hero-bolivia.png'); background-size: cover; background-position: center; filter: grayscale(1);"></div>
      <div class="container relative z-10">
        
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">EducaciÃ³n Empresarial</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">FormaciÃ³n continua, seminarios y talleres para potenciar el talento de tu empresa.</p>
      </div>
    
      </div>
    </section>

    <section class="section">
      <div class="container text-center">
        <h2 class="section-title">Nuestra <span class="text-gradient">Oferta AcadÃ©mica</span></h2>
        <p style="max-width: 800px; margin: 0 auto 3rem auto; line-height: 1.8;">
          Mejora las capacidades tÃ©cnicas y gerenciales de tu personal con nuestros expertos.
        </p>
        
        <div class="grid grid--3">
          <div class="card animated" style="padding: 2rem;">
            <i class="fas fa-chalkboard-teacher" style="font-size: 2.5rem; color: var(--color-primary); margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-heading);">Seminarios</h3>
            <p>ActualizaciÃ³n en normativas, tendencias de mercado y gestiÃ³n empresarial.</p>
          </div>
          <div class="card animated" style="padding: 2rem;">
            <i class="fas fa-laptop-code" style="font-size: 2.5rem; color: var(--color-secondary); margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-heading);">Talleres PrÃ¡cticos</h3>
            <p>Cursos intensivos en marketing digital, finanzas, y comercio electrÃ³nico.</p>
          </div>
          <div class="card animated" style="padding: 2rem;">
            <i class="fas fa-certificate" style="font-size: 2.5rem; color: #e74c3c; margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-heading);">Certificaciones</h3>
            <p>Diplomados y certificaciones respaldadas por instituciones de prestigio.</p>
          </div>
        </div>
      </div>
    </section>
  
</main>


  <!-- ==================== FOOTER ==================== -->

<?php include '../components/footer.php'; ?>
