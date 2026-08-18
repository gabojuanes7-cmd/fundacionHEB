<?php
$pageTitle = 'Noticias â FundaciÃ³n Hecho en Bolivia';
$pageDescription = 'Ãltimas noticias, eventos y actividades de la FundaciÃ³n Hecho en Bolivia. Mantente informado sobre nuestro trabajo.';
$basePath = '../';
$activeNav = 'noticias';
$headerTransparent = true;

include '../components/header.php';
?>

<main>
    <section class="hero hero--internal">
      <div class="hero__bg"><img loading="lazy" src="../assets/images/gallery-event.png" alt="Eventos de la fundaciÃ³n" loading="eager"></div>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <nav class="breadcrumbs"><a href="../index.php">Inicio</a><span class="separator"><i class="fas fa-chevron-right"></i></span><span>Noticias</span></nav>
        <h1 class="hero__title">Noticias y <span class="highlight">Eventos</span></h1>
        <p class="hero__subtitle">Mantente al dÃ­a con nuestras actividades, logros y prÃ³ximos eventos.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="news-layout">
          <!-- Main Content -->
          <div>
            <!-- Institucional -->
            <h2 class="news-section-heading news-section-heading--inst">Institucional / FundaciÃ³n</h2>
            <div id="noticias-institucional-container" class="grid grid--2">
              <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">Cargando...</div>
            </div>

            <!-- Nacionales -->
            <h2 class="news-section-heading news-section-heading--nac">Nacionales</h2>
            <div id="noticias-nacionales-container" class="grid grid--2">
              <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">Cargando...</div>
            </div>

            <!-- Internacionales -->
            <h2 class="news-section-heading news-section-heading--intl">Internacionales</h2>
            <div id="noticias-internacionales-container" class="grid grid--2">
              <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">Cargando...</div>
            </div>

            <!-- Pulso EconÃ³mico -->
            <h2 class="news-section-heading news-section-heading--pulso">Pulso EconÃ³mico</h2>
            <div id="noticias-pulso-container" class="grid grid--2">
              <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">Cargando...</div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="sidebar">
            <!-- Search -->
            <div class="sidebar__widget">
              <h4 class="sidebar__widget-title">Buscar</h4>
              <div class="sidebar__search">
                <input type="text" class="form-input" placeholder="Buscar noticias...">
                <button class="btn btn--primary btn--sm"><i class="fas fa-search"></i></button>
              </div>
            </div>

            <!-- Categories -->
            <div class="sidebar__widget">
              <h4 class="sidebar__widget-title">CategorÃ­as</h4>
              <ul class="sidebar__categories">
                <li>Eventos <span>8</span></li>
                <li>CapacitaciÃ³n <span>5</span></li>
                <li>Logros <span>4</span></li>
                <li>Cultura <span>6</span></li>
                <li>ProducciÃ³n <span>3</span></li>
                <li>Ferias <span>7</span></li>
              </ul>
            </div>

            <!-- Popular -->
            <div class="sidebar__widget">
              <h4 class="sidebar__widget-title">MÃ¡s Populares</h4>
              <div class="mini-card">
                <div class="mini-card__img"><img loading="lazy" src="../assets/images/project-feria.png" alt="Expo Bolivia"></div>
                <div>
                  <div class="mini-card__title">Expo Bolivia Produce bate rÃ©cord de asistencia</div>
                  <div class="mini-card__date"><i class="far fa-calendar"></i> Dic 2025</div>
                </div>
              </div>
              <div class="mini-card">
                <div class="mini-card__img"><img loading="lazy" src="../assets/images/gallery-landscape.png" alt="Cochabamba"></div>
                <div>
                  <div class="mini-card__title">Cochabamba, capital del emprendimiento boliviano</div>
                  <div class="mini-card__date"><i class="far fa-calendar"></i> Nov 2025</div>
                </div>
              </div>
              <div class="mini-card">
                <div class="mini-card__img"><img loading="lazy" src="../assets/images/about-artisans.png" alt="Artesanos"></div>
                <div>
                  <div class="mini-card__title">Artesanos bolivianos reciben certificaciÃ³n internacional</div>
                  <div class="mini-card__date"><i class="far fa-calendar"></i> Oct 2025</div>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div class="sidebar__widget">
              <h4 class="sidebar__widget-title">Etiquetas</h4>
              <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
                <span class="filter-btn" style="font-size: var(--text-xs); padding: 4px 12px;">Bolivia</span>
                <span class="filter-btn" style="font-size: var(--text-xs); padding: 4px 12px;">Ferias</span>
                <span class="filter-btn" style="font-size: var(--text-xs); padding: 4px 12px;">Quinua</span>
                <span class="filter-btn" style="font-size: var(--text-xs); padding: 4px 12px;">Textiles</span>
                <span class="filter-btn" style="font-size: var(--text-xs); padding: 4px 12px;">Marca PaÃ­s</span>
                <span class="filter-btn" style="font-size: var(--text-xs); padding: 4px 12px;">Emprendimiento</span>
                <span class="filter-btn" style="font-size: var(--text-xs); padding: 4px 12px;">ExportaciÃ³n</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->

<?php include '../components/footer.php'; ?>
