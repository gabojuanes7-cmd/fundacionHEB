<?php
$pageTitle = 'TrÃ¡mites Administrativos | FundaciÃ³n Hecho en Bolivia';
$pageDescription = '';
$basePath = '../';
$activeNav = '';
$headerTransparent = true;

include '../components/header.php';
?>

<main>

    <!-- Hero -->
    
    <section class="page-header relative  bg-dark text-white text-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('assets/images/hero-bolivia.png'); background-size: cover; background-position: center; filter: grayscale(1);"></div>
      <div class="container relative z-10">
        
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">TrÃ¡mites Administrativos</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Simplificamos la burocracia para que te enfoques en hacer crecer tu negocio.</p>
      </div>
    
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split" style="gap: 4rem; align-items: center;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img loading="lazy" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="GestiÃ³n de TrÃ¡mites" style="width: 100%; display: block;">
          </div>
          <div>
            <span class="section-label">GestiÃ³n Eficiente</span>
            <h2 class="section-title">Delega la <span class="text-gradient">Burocracia</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Te ayudamos con SENASAG, Fundempresa (SEPREC), impuestos y licencias de funcionamiento. Ahorra tiempo y recursos.
            </p>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 1rem; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 1rem;"></i> SEPREC y MatrÃ­culas.</li>
              <li style="margin-bottom: 1rem; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 1rem;"></i> Registros Sanitarios.</li>
              <li style="margin-bottom: 1rem; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--color-primary); margin-right: 1rem;"></i> Patentes y Licencias Municipales.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
</main>


  <!-- ==================== FOOTER ==================== -->

<?php include '../components/footer.php'; ?>
