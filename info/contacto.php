<?php
$pageTitle = 'Contacto — Fundación Hecho en Bolivia';
$pageDescription = 'Contáctanos para más información sobre la Fundación Hecho en Bolivia. Estamos en Cochabamba, Bolivia. ¡Escríbenos!';
$basePath = '../';
$activeNav = '';
$headerTransparent = true;

include '../components/header.php';
?>

<main>
    <section class="hero hero--internal">
      <div class="hero__bg"><img loading="lazy" src="../assets/images/gallery-landscape.png" alt="Cochabamba, Bolivia" loading="eager"></div>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <nav class="breadcrumbs"><a href="../index.php">Inicio</a><span class="separator"><i class="fas fa-chevron-right"></i></span><span>Contacto</span></nav>
        <h1 class="hero__title">Contáctanos</h1>
        <p class="hero__subtitle">Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.</p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="section">
      <div class="container">
        <div class="grid grid--3" style="margin-bottom: var(--space-16);">
          <div class="contact-card animate-on-scroll animate-delay-1">
            <div class="contact-card__icon"><i class="fas fa-map-marker-alt"></i></div>
            <h3 class="contact-card__title">Dirección</h3>
            <p class="contact-card__text">Cochabamba, Bolivia<br>Estado Plurinacional de Bolivia</p>
          </div>

          <div class="contact-card animate-on-scroll animate-delay-2">
            <div class="contact-card__icon"><i class="fas fa-phone-alt"></i></div>
            <h3 class="contact-card__title">Teléfono</h3>
            <p class="contact-card__text">+591 4 XXX XXXX<br>+591 7XX XXXXX (WhatsApp)</p>
          </div>

          <div class="contact-card animate-on-scroll animate-delay-3">
            <div class="contact-card__icon"><i class="fas fa-envelope"></i></div>
            <h3 class="contact-card__title">Email</h3>
            <p class="contact-card__text">fundacionhechoenbolivia@gmail.com<br>contacto@fundacionhechoenbolivia.com</p>
          </div>
        </div>

        <!-- Form + Map -->
        <div class="split">
          <!-- Form -->
          <div class="animate-slide-left">
            <span class="section-label">Escríbenos</span>
            <h2 class="section-title" style="margin-bottom: var(--space-8);">Envíanos un <span class="text-gradient">Mensaje</span></h2>

            <form id="contact-form" novalidate>
              <div class="grid grid--2" style="gap: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Nombre completo *</label>
                  <input type="text" id="contact-name" class="form-input" placeholder="Tu nombre" required minlength="2">
                  <span class="form-error"></span>
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-email">Email *</label>
                  <input type="email" id="contact-email" class="form-input" placeholder="tu@email.com" required>
                  <span class="form-error"></span>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-phone">Teléfono</label>
                <input type="tel" id="contact-phone" class="form-input" placeholder="+591 7XX XXXXX">
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-subject">Asunto *</label>
                <select id="contact-subject" class="form-input form-select" required>
                  <option value="">Selecciona un asunto</option>
                  <option value="informacion">Información general</option>
                  <option value="proyectos">Proyectos y colaboraciones</option>
                  <option value="ferias">Participar en ferias</option>
                  <option value="prensa">Prensa y medios</option>
                  <option value="voluntariado">Voluntariado</option>
                  <option value="otro">Otro</option>
                </select>
                <span class="form-error"></span>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Mensaje *</label>
                <textarea id="contact-message" class="form-input form-textarea" placeholder="¿En qué podemos ayudarte?" required minlength="10"></textarea>
                <span class="form-error"></span>
              </div>

              <button type="submit" class="btn btn--primary btn--lg" style="width: 100%;">
                <i class="fas fa-paper-plane"></i> Enviar Mensaje
              </button>
            </form>
          </div>

          <!-- Map + Info -->
          <div class="animate-slide-right">
            <span class="section-label">Encuéntranos</span>
            <h2 class="section-title" style="margin-bottom: var(--space-8);">Nuestra <span class="text-gradient">Ubicación</span></h2>

            <div class="map-container" style="margin-bottom: var(--space-8);">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8472030860147!2d-66.18184028565635!3d-17.380737445418115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3762204476a8f%3A0x33a7449473c2c3bc!2sCalle%20Juan%20de%20La%20Fuente%20600%2C%20Cochabamba%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1752341501622!5m2!1ses!2sbo"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de la Fundación Hecho en Bolivia en Cochabamba">
              </iframe>
            </div>

            <!-- Horarios -->
            <div style="background: var(--bg-secondary); border-radius: var(--radius-xl); padding: var(--space-6); border: 1px solid var(--border-color);">
              <h4 style="margin-bottom: var(--space-4); font-size: var(--text-lg);"><i class="fas fa-clock" style="color: var(--primary); margin-right: var(--space-2);"></i> Horarios de Atención</h4>
              <div style="display: flex; justify-content: space-between; padding: var(--space-2) 0; border-bottom: 1px solid var(--border-color); font-size: var(--text-sm);">
                <span>Lunes - Viernes</span>
                <strong style="color: var(--accent);">8:30 — 16:30</strong>
              </div>
              <div style="display: flex; justify-content: space-between; padding: var(--space-2) 0; font-size: var(--text-sm);">
                <span>Sábados, Domingos y Feriados</span>
                <strong style="color: var(--primary);">Cerrado</strong>
              </div>
            </div>

            <!-- Social -->
            <div style="margin-top: var(--space-8);">
              <h4 style="margin-bottom: var(--space-4); font-size: var(--text-lg);"><i class="fas fa-share-alt" style="color: var(--primary); margin-right: var(--space-2);"></i> Síguenos</h4>
              <div style="display: flex; gap: var(--space-3);">
                <a href="https://www.facebook.com/FundacionHechoBolivia/" target="_blank" class="btn btn--sm" style="background: #1877F2; color: white; border-color: #1877F2;">
                  <i class="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#" class="btn btn--sm" style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: white; border-color: transparent;">
                  <i class="fab fa-tiktok"></i> Instagram
                </a>
                <a href="#" class="btn btn--sm" style="background: #FF0000; color: white; border-color: #FF0000;">
                  <i class="fab fa-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->

<?php include '../components/footer.php'; ?>
