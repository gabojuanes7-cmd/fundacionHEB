<?php
$pageTitle = 'Propiedad Intelectual | FundaciÃ³n Hecho en Bolivia';
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
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Propiedad Intelectual</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Protege tus ideas, marcas y patentes en SENAPI y resguarda tu innovaciÃ³n.</p>
      </div>
    
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid--2" style="gap: 4rem; align-items: center;">
          <div>
            <span class="section-label">ProtecciÃ³n</span>
            <h2 class="section-title">Asegura tu <span class="text-gradient">Marca</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Te asesoramos y realizamos los registros ante el SENAPI para marcas, patentes de invenciÃ³n, modelos de utilidad y derechos de autor.
            </p>
            <a href="../info/contacto.php" class="btn btn--primary">Consultar ahora</a>
          </div>
          <div style="text-align: center; padding: 2rem; background: var(--color-background-alt); border-radius: var(--radius-lg);">
            <i class="fas fa-shield-alt" style="font-size: 6rem; color: var(--color-secondary); margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-heading);">Seguridad Total</h3>
            <p style="color: var(--color-text-muted);">El registro otorga derecho exclusivo sobre tus creaciones.</p>
          </div>
        </div>
      </div>
    </section>
  
</main>


  <!-- ==================== FOOTER ==================== -->

<?php include '../components/footer.php'; ?>
