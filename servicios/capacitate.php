<?php
$pageTitle = 'Academia FHB Bolivia — Fundación Hecho en Bolivia';
$pageDescription = 'Programas de formación, cursos y talleres de la Fundación Hecho en Bolivia.';
$basePath = '../';
$activeNav = 'servicios';
$extraHead = '<style>     .course-card {       background: var(--surface);       border-radius: var(--radius-lg);       overflow: hidden;       box-shadow: var(--shadow-md);       transition: transform 0.3s ease, box-shadow 0.3s ease;       display: flex;       flex-direction: column;     }     .course-card:hover {       transform: translateY(-5px);       box-shadow: var(--shadow-lg);     }     .course-card__image {       width: 100%;       height: 250px;       object-fit: cover;       object-position: center top;       border-bottom: 1px solid var(--border);       cursor: pointer;     }     .course-card__body {       padding: 1.5rem;       display: flex;       flex-direction: column;       flex-grow: 1;     }     .course-card__date {       font-size: 0.85rem;       color: var(--text-light);       margin-bottom: 0.5rem;       display: flex;       align-items: center;       gap: 0.5rem;     }     .course-card__title {       font-size: 1.25rem;       font-family: var(--font-heading);       color: var(--text);       margin-bottom: 1rem;     }     .course-card__footer {       margin-top: auto;       display: flex;       justify-content: space-between;       align-items: center;     }          /* Lightbox Modal */     .lightbox {       position: fixed;       top: 0;       left: 0;       width: 100%;       height: 100%;       background: rgba(0,0,0,0.85);       z-index: 9999;       display: flex;       justify-content: center;       align-items: center;       opacity: 0;       pointer-events: none;       transition: opacity 0.3s ease;     }     .lightbox.active {       opacity: 1;       pointer-events: auto;     }     .lightbox__content {       max-width: 90%;       max-height: 90vh;       position: relative;     }     .lightbox__img {       max-width: 100%;       max-height: 90vh;       object-fit: contain;       border-radius: var(--radius-md);       box-shadow: 0 10px 30px rgba(0,0,0,0.5);     }     .lightbox__close {       position: absolute;       top: -40px;       right: 0;       background: transparent;       border: none;       color: white;       font-size: 2rem;       cursor: pointer;     }   </style>';

include '../components/header.php';
?>

<main>
    <!-- Page Header -->
    <section class="page-header">
      <div class="page-header__overlay"></div>
      <div class="container page-header__content text-center">
        <span class="section-label" style="color: var(--secondary);">Formación Continua</span>
        <h1 class="page-title animate-on-scroll" style="color: white;">Academia FHB <span class="text-gradient">Bolivia</span></h1>
        <p class="page-subtitle animate-on-scroll animate-delay-1" style="color: #ccc; max-width: 600px; margin: 0 auto;">Programa integral de formación diseñado para emprendedores y PyMEs que buscan ser exitosos. A través de cursos online, mentorías, módulos de autoaprendisaje y una comunidad colaborativa.</p>
      </div>
    </section>

    <!-- Content -->
    <section class="section section--gray">
      <div class="container">
        <div class="text-center animate-on-scroll" style="margin-bottom: 3rem;">
          <h2 class="section-title">Cursos Disponibles</h2>
        </div>

        <div id="capacitaciones-container" class="grid grid--3">
          <!-- Spinner de carga inicial -->
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
             <i class="fas fa-spinner fa-spin fa-3x" style="color: var(--primary); margin-bottom: 1rem;"></i>
             <p>Cargando cursos y capacitaciones...</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Lightbox (hidden by default) -->
  <div class="lightbox" id="flyerLightbox">
    <div class="lightbox__content">
      <button class="lightbox__close" id="closeLightbox">&times;</button>
      <img loading="lazy" src="" alt="Flyer del curso" class="lightbox__img" id="lightboxImg">
    </div>
  </div>

  <!-- Footer -->

<!-- Modal de Solicitud (Agregado para inscripciones) -->
  <div id="solicitud-modal" class="modal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 9999; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; pointer-events: none;">
    <div style="background: var(--bg-card); width: 90%; max-width: 500px; border-radius: var(--radius-lg); padding: 2rem; position: relative; box-shadow: var(--shadow-xl); transform: translateY(20px); transition: transform 0.3s;">
      <button class="solicitud-modal-close" style="position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted);">&times;</button>
      <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-primary);"><i class="fas fa-file-signature" style="color: var(--primary);"></i> Formulario de Inscripción</h3>
      <form id="form-solicitud-cert">
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Nombre Completo</label>
          <input type="text" id="solicitud-nombre" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);">
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Correo Electrónico</label>
          <input type="email" id="solicitud-correo" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);">
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Celular / WhatsApp</label>
          <input type="tel" id="solicitud-celular" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);">
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Curso a Inscribirse</label>
          <input type="text" id="solicitud-tipo" readonly required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary); cursor: not-allowed; opacity: 0.8;">
        </div>
        <div style="margin-bottom: 1.5rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Mensaje o Consulta Extra</label>
          <textarea id="solicitud-mensaje" rows="3" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);"></textarea>
        </div>
        <button type="submit" id="btn-enviar-solicitud" class="btn btn--primary" style="width: 100%;">Enviar Inscripción</button>
        <div id="solicitud-loading" style="display:none; text-align: center; margin-top: 1rem;"><i class="fas fa-spinner fa-spin"></i> Procesando...</div>
      </form>
    </div>
  </div>
  <style>
    #solicitud-modal.active { display: flex !important; opacity: 1 !important; pointer-events: auto !important; }
    #solicitud-modal.active > div { transform: translateY(0) !important; }
  </style>
  <script type="module" src="../js/firebase-config.js"></script>
  <script type="module" src="../js/capacitate.js"></script>

<?php include '../components/footer.php'; ?>
