<?php
$pageTitle = 'Proyectos | Fundación Hecho en Bolivia';
$pageDescription = 'Conoce los proyectos de la Fundación Hecho en Bolivia.';
$basePath = '../';
$activeNav = 'servicios';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Proyectos Destacados</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Descubre las iniciativas que estamos llevando a cabo para fortalecer la industria y el comercio boliviano.</p>
      </div>
    </section>

    <!-- Lista de Proyectos -->
    <section class="section">
      <div class="container">
        <!-- Proyecto 1 -->
        <div class="split" style="gap: 4rem; align-items: center; margin-bottom: 6rem;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img loading="lazy" src="https://images.unsplash.com/photo-1542744094-24638ea0bc40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Valor Agregado de Origen Nacional" style="width: 100%; display: block;">
          </div>
          <div>
            <span class="section-label">Certificación</span>
            <h2 class="section-title">Valor Agregado de Origen Nacional <span class="text-gradient">(VAON)</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Es una certificación creada por la Fundación Hecho en Bolivia que certifica las contribuciones porcentuales en la formación en el costo directo unitario de los diversos componentes de origen nacional que se utilizan para producir una mercancía-producto. ¡Garantía de Origen!
            </p>
            <div style="display: flex; gap: 1rem;">
              <a href="#" class="btn btn--primary">Ver Detalles</a>
            </div>
          </div>
        </div>

        <!-- Proyecto 2 (Invertido) -->
        <div class="split" style="gap: 4rem; align-items: center; margin-bottom: 6rem;">
          <div style="order: 2;">
            <span class="section-label">Plataforma Digital</span>
            <h2 class="section-title">Red de <span class="text-gradient">Marcas</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Es un ecosistema digital que conecta a productores nacionales con distribuidores, comercializadores y consumidores finales. A través de su catálogo de productos certificados, facilita la identificación de negocios bolivianos y se convierte en una vitrina internacional que amplía el alcance de las PYMEs.
            </p>
            <div style="display: flex; gap: 1rem;">
              <a href="#" class="btn btn--primary">Explorar Red</a>
            </div>
          </div>
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); order: 1;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Red de Marcas" style="width: 100%; display: block;">
          </div>
        </div>

      </div>
    </section>
  </main>

<?php include '../components/footer.php'; ?>
