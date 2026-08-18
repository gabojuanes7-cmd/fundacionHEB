<?php
$pageTitle = 'FundaciÃ³n Hecho en Bolivia â Promoviendo lo Nuestro';
$pageDescription = 'FundaciÃ³n Hecho en Bolivia: impulsamos el desarrollo econÃ³mico del paÃ­s administrando la Marca PaÃ­s y fomentando la producciÃ³n nacional.';
$basePath = '';
$activeNav = 'inicio';
$headerTransparent = true;

include 'components/header.php';
?>

<main>
    <!-- ==================== HERO ACCORDION ==================== -->
    <section class="hero-accordion" id="hero">
      <!-- Panel Rojo -->
      <div class="accordion-panel panel-red" data-target="#featured-projects">
        <div class="panel-bg" style="background-image: url('assets/images/project-feria.png');"></div>
        <div class="panel-overlay"></div>
        <div class="panel-content">
          <h2 class="panel-title">PROYECTOS</h2>
          <div class="panel-hidden">
            <p>Descubre iniciativas como EXPOINDUSTRIA y ferias a nivel nacional.</p>
            <a href="servicios/proyectos.php" class="btn btn--outline btn--sm">Explorar <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <!-- Panel Amarillo -->
      <div class="accordion-panel panel-yellow" data-target="#fines">
        <div class="panel-bg" style="background-image: url('assets/images/project-marca-pais.png');"></div>
        <div class="panel-overlay"></div>
        <div class="panel-content">
          <h2 class="panel-title">IDENTIDAD</h2>
          <div class="panel-hidden">
            <p>Conoce la administraciÃ³n de la Marca PaÃ­s y nuestra historia.</p>
            <a href="fundacion/quienes-somos.php" class="btn btn--outline btn--sm">Explorar <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <!-- Panel Verde -->
      <div class="accordion-panel panel-green" data-target="#about-preview">
        <div class="panel-bg" style="background-image: url('assets/images/gallery-landscape.png');"></div>
        <div class="panel-overlay"></div>
        <div class="panel-content">
          <h2 class="panel-title">SERVICIOS</h2>
          <div class="panel-hidden">
            <p>LegislaciÃ³n empresarial, trÃ¡mites y promociÃ³n comercial.</p>
            <a href="certificaciones/sello.php" class="btn btn--outline btn--sm">Explorar <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      
      <!-- Central Branding -->
      <div class="accordion-branding">
        <img loading="lazy" src="assets/images/logo-hecho-en-bolivia.jpg" alt="FundaciÃ³n Hecho en Bolivia" class="accordion-branding__logo">
      </div>
      <div class="scroll-down-hint">Scroll para continuar</div>
    </section>

<!-- ==================== QUIÃNES SOMOS (Preview) ==================== -->
    <section class="section" id="about-preview">
      <div class="container">
        <div class="split">
          <div class="split__image animate-slide-left">
            <img src="assets/images/about-artisans.png" alt="ProducciÃ³n Nacional" loading="lazy" width="640" height="480">
          </div>
          <div class="split__content animate-slide-right">
            <span class="section-label">Nuestra FundaciÃ³n</span>
            <h2 class="section-title">El Orgullo de lo <span class="text-gradient">Nuestro</span></h2>
            <p>
              Nace un 3 de diciembre de 2014. Producto de un grupo de personas, para crear una instituciÃ³n sin fines de lucro que no sea gremial, ni sectorial, ni Departamental; Ser nacional, transversal a todos los sectores.
            </p>
            <p>
              La FUNDACIÃN es la consolidaciÃ³n de la CampaÃ±a "Consume lo Nuestro" que iniciÃ³ el aÃ±o 2001 con resultados exitosos, hoy es nuestra distinciÃ³n como paÃ­s.
            </p>
            <a href="fundacion/quienes-somos.php" class="btn btn--primary">Nuestra MisiÃ³n y VisiÃ³n <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== STATS ==================== -->
    <section class="section section--dark" id="stats">
      <div class="container">
        <div class="stats">
          <div class="stat animate-on-scroll">
            <div class="stat__icon"><i class="fas fa-calendar-alt"></i></div>
            <div>
              <div class="stat__number"><span data-counter="25" data-suffix="+">0</span><span class="suffix">+</span></div>
              <div class="stat__label">AÃOS DESDE LA CAMPAÃA</div>
            </div>
          </div>
          <div class="stat animate-on-scroll animate-delay-1">
            <div class="stat__icon"><i class="fas fa-handshake"></i></div>
            <div>
              <div class="stat__number"><span data-counter="9" data-suffix="+">0</span><span class="suffix">+</span></div>
              <div class="stat__label">MIEMBROS FUNDADORES</div>
            </div>
          </div>
          <div class="stat animate-on-scroll animate-delay-2">
            <div class="stat__icon"><i class="fas fa-store"></i></div>
            <div>
              <div class="stat__number"><span data-counter="10" data-suffix="+">0</span><span class="suffix">+</span></div>
              <div class="stat__label">SERVICIOS</div>
            </div>
          </div>
          <div class="stat animate-on-scroll animate-delay-3">
            <div class="stat__icon"><i class="fas fa-flag"></i></div>
            <div>
              <div class="stat__number"><span data-counter="1">0</span></div>
              <div class="stat__label">MARCA "HECHO EN BOLIVIA"</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PROYECTOS DESTACADOS ==================== -->
    <section class="section" id="featured-projects">
      <div class="container">
        <div class="text-center animate-on-scroll">
          <span class="section-label">Lo que hacemos</span>
          <h2 class="section-title">Iniciativas <span class="text-gradient">Clave</span></h2>
        </div>

        <div class="grid grid--3 mt-8">
          <!-- Proyecto 1 -->
          <div class="card animate-on-scroll animate-delay-1">
            <div class="card__image">
              <img src="assets/images/project-feria.png" alt="EXPOINDUSTRIA" loading="lazy" width="640" height="480">
              <span class="card__badge">Feria Nacional</span>
            </div>
            <div class="card__body">
              <span class="card__category">Comercio</span>
              <h3 class="card__title">Promoviendo el Producto Nacional</h3>
              <p class="card__text">Gracias al alcance digital, amplÃ­a la presencia de las marcas emergentes, fortaleciendo el valor agregado nacional y proyectando lo Hecho en Bolivia hacia lo internacional.</p>
            </div>
            <div class="card__footer">
              <a href="servicios/proyectos.php" class="btn btn--ghost btn--sm">Conoce mÃ¡s <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

                    <!-- Proyecto 2 -->
          <div class="card animate-on-scroll animate-delay-2">
            <div class="card__image">
              <img src="assets/images/project-capacitacion.png" alt="ComitÃ© CCI" loading="lazy" width="640" height="480">
            </div>
            <div class="card__body">
              <span class="card__category">capacitacion</span>
              <h3 class="card__title">Academia FHB</h3>
              <p class="card__text">Programa integral de formaciÃ³n diseÃ±ado para emprendedores y PyMEs que buscan ser exitosos. A travÃ©s de cursos online, mentorÃ­as, mÃ³dulos de autoaprendisaje y una comunidad colaborativa.</p>
            </div>
            <div class="card__footer">
              <a href="https://www.facebook.com/CadenaHB/?locale=es_LA" class="btn btn--ghost btn--sm">Conoce mÃ¡s <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <!-- Proyecto 3 -->
          <div class="card animate-on-scroll animate-delay-3">
            <div class="card__image">
              <img src="assets/images/project-marca-pais.png" alt="Marca PaÃ­s" loading="lazy" width="640" height="480">
            </div>
            <div class="card__body">
              <span class="card__category">Identidad</span>
              <h3 class="card__title">GestiÃ³n Marca PaÃ­s</h3>
              <p class="card__text">AdministraciÃ³n y posicionamiento de la marca "HECHO EN BOLIVIA" como sello distintivo de origen, calidad y distinciÃ³n de Origen.</p>
            </div>
            <div class="card__footer">
              <a href="servicios/proyectos.php" class="btn btn--ghost btn--sm">Conoce mÃ¡s <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== FINES ==================== -->
    <section class="section section--dark" id="fines">
      <div class="container">
        <div class="text-center animate-on-scroll mb-8">
          <span class="section-label">Objetivos estratÃ©gicos</span>
          <h2 class="section-title">Nuestros <span class="text-gradient">Pilares</span></h2>
        </div>

        <div class="grid grid--3">
          <div class="feature-card animate-on-scroll animate-delay-1">
            <div class="feature-card__icon"><i class="fas fa-link"></i></div>
            <h3 class="feature-card__title">Vincular</h3>
            <p class="feature-card__text">Conectar a los demandantes de procesos y servicios con los productores locales.</p>
          </div>
          <div class="feature-card animate-on-scroll animate-delay-2">
            <div class="feature-card__icon"><i class="fas fa-globe"></i></div>
            <h3 class="feature-card__title">Promocionar</h3>
            <p class="feature-card__text">Exponer la oferta productiva boliviana en mercados nacionales e internacionales.</p>
          </div>
          <div class="feature-card animate-on-scroll animate-delay-3">
            <div class="feature-card__icon"><i class="fas fa-flag"></i></div>
            <h3 class="feature-card__title">Marca "Hecho en Bolivia"</h3>
            <p class="feature-card__text">Desarrollar, implementar y administrar la identidad de lo "Hecho en Bolivia".</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PUBLICACIONES Y ACTIVIDADES ==================== -->
    <section class="section" id="publicaciones-actividades">
      <div class="container">
        <div class="split pub-act-grid">
          
          <!-- Columna Publicaciones -->
          <div class="pub-col">
            <div class="section-header--left animate-on-scroll">
              <h2 class="section-title text-gradient section-title--sm">Publicaciones</h2>
            </div>
            <div id="home-publicaciones-container" class="grid grid--2 pub-inner-grid">
              <!-- Se cargarÃ¡n dinÃ¡micamente -->
            </div>
          </div>

          <!-- Columna Actividades -->
          <div class="act-col">
            <div class="section-header--left animate-on-scroll">
              <h2 class="section-title text-gradient section-title--sm">Actividades</h2>
            </div>
            <div id="home-actividades-container" class="grid grid--2 pub-inner-grid">
              <!-- Se cargarÃ¡n dinÃ¡micamente -->
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==================== NOTICIAS ==================== -->
    <section class="section section--dark" id="ultimas-noticias">
      <div class="container">
        <div class="split news-columns">
          <!-- Nacionales -->
          <div>
            <h3 class="news-col-title">Noticias Nacionales</h3>
            <div id="home-news-nacional-container" class="grid news-col-grid">
              <!-- Carga dinÃ¡mica -->
            </div>
          </div>

          <!-- Internacionales -->
          <div>
            <h3 class="news-col-title">Noticias Internacionales</h3>
            <div id="home-news-internacional-container" class="grid news-col-grid">
              <!-- Carga dinÃ¡mica -->
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a href="info/noticias.php" class="btn btn--outline">Ver todas las noticias <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>

    <!-- ==================== DIRECTORIO ==================== -->
    <section class="section" id="home-directorio">
      <div class="container text-center">
        <h3 class="directorio-section-title">Empresas Miembro</h3>
        <div class="scroll-wrapper">
          <button class="scroll-btn scroll-btn-prev" onclick="scrollContainer('home-empresas-container', -300)" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
          <div id="home-empresas-container" class="empresas-scroll empresas-scroll--mb">
            <!-- DinÃ¡mico -->
          </div>
          <button class="scroll-btn scroll-btn-next" onclick="scrollContainer('home-empresas-container', 300)" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>
        </div>

        <h3 class="directorio-section-title">Alianza Interinstitucional</h3>
        <div class="scroll-wrapper">
          <button class="scroll-btn scroll-btn-prev" onclick="scrollContainer('home-alianzas-container', -300)" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
          <div id="home-alianzas-container" class="empresas-scroll">
            <!-- DinÃ¡mico -->
          </div>
          <button class="scroll-btn scroll-btn-next" onclick="scrollContainer('home-alianzas-container', 300)" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </section>

    <!-- ==================== CTA ==================== -->
    <section class="cta-section" id="cta">
      <div class="container">
        <h2 class="cta-section__title animate-on-scroll">Â¿Quieres ser parte del cambio?</h2>
        <p class="cta-section__text animate-on-scroll animate-delay-1">Ãnete a nuestra misiÃ³n de impulsar el valor de las ideas en acciÃ³n. Juntos construimos cambio y desarrollo paÃ­s. Generamos impacto social.</p>
        <div class="animate-on-scroll animate-delay-2">
          <a href="info/contacto.php" class="btn btn--secondary btn--lg"><i class="fas fa-envelope"></i> ContÃ¡ctanos</a>
        </div>
      </div>
    </section>
  </main>

  <!-- ==================== FOOTER ==================== -->

<script>
    function scrollContainer(id, amount) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollBy({ left: amount, behavior: 'smooth' });
      }
    }
  </script>

<?php include 'components/footer.php'; ?>
