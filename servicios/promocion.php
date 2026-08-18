<?php
$pageTitle = 'PromociÃ³n Comercial | FundaciÃ³n Hecho en Bolivia';
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
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">PromociÃ³n Comercial</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Llevamos tus productos a nuevos mercados, ferias nacionales e internacionales.</p>
      </div>
    
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split" style="gap: 4rem; align-items: center;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img loading="lazy" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Feria Comercial" style="width: 100%; display: block;">
          </div>
          <div>
            <span class="section-label">Apertura de Mercados</span>
            <h2 class="section-title">Expande tu <span class="text-gradient">Negocio</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Organizamos ruedas de negocios, misiones comerciales y pabellones "Hecho en Bolivia" en las ferias mÃ¡s importantes del paÃ­s y la regiÃ³n.
            </p>
            <a href="../info/contacto.php" class="btn btn--primary">Solicitar InformaciÃ³n</a>
          </div>
        </div>
      </div>
    </section>
  
</main>


  <!-- ==================== FOOTER ==================== -->

<?php include '../components/footer.php'; ?>
