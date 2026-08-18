<?php
$pageTitle = 'Voluntariado | Fundación Hecho en Bolivia';
$pageDescription = 'Únete al programa de voluntariado de la Fundación Hecho en Bolivia.';
$basePath = '../';
$activeNav = 'fundacion';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Voluntariado</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Forma parte del equipo y contribuye al desarrollo de la producción nacional con tus talentos.</p>
      </div>
    </section>

    <!-- Info Voluntariado -->
    <section class="section">
      <div class="container">
        <div class="grid grid--2" style="gap: 4rem; align-items: center;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img loading="lazy" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Equipo de Voluntarios" style="width: 100%; display: block;">
          </div>
          <div>
            <span class="section-label">Únete a Nosotros</span>
            <h2 class="section-title">¿Por qué ser <span class="text-gradient">Voluntario?</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Únete a nuestra misión de impulsar el valor de las ideas en acción. Juntos construimos cambio y desarrollo país. Generamos impacto social. 'Hecho en Bolivia'.
            </p>
            <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
              <li style="margin-bottom: 1rem; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--color-primary); font-size: 1.2rem; margin-right: 1rem;"></i> Desarrollo profesional y personal.</li>
              <li style="margin-bottom: 1rem; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--color-primary); font-size: 1.2rem; margin-right: 1rem;"></i> Ampliación de red de contactos (Networking).</li>
              <li style="margin-bottom: 1rem; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--color-primary); font-size: 1.2rem; margin-right: 1rem;"></i> Impacto real en la economía nacional.</li>
              <li style="margin-bottom: 1rem; display: flex; align-items: center;"><i class="fas fa-check-circle" style="color: var(--color-primary); font-size: 1.2rem; margin-right: 1rem;"></i> Certificado de participación avalado.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulario -->
    <section class="section section--gray">
      <div class="container">
        <div class="text-center" style="margin-bottom: 3rem;">
          <h2 class="section-title">Formulario de <span class="text-gradient">Inscripción</span></h2>
          <p style="color: var(--color-text-muted);">Completa el formulario y nos pondremos en contacto contigo pronto.</p>
        </div>

        <div class="card" style="max-width: 600px; margin: 0 auto; padding: 3rem;">
            <form id="volunteer-form">
            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Nombre Completo</label>
              <input type="text" id="vol-nombre" placeholder="Ej. Juan Pérez" required class="form-control">
            </div>
            
            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Correo Electrónico</label>
              <input type="email" id="vol-correo" placeholder="juan@ejemplo.com" required class="form-control">
            </div>

            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Área de Interés</label>
              <select id="vol-area" required class="form-control">
                <option value="">Selecciona un área</option>
                <option value="eventos">Organización de eventos</option>
                <option value="marketing">Marketing y Redes Sociales</option>
                <option value="proyectos">Proyectos</option>
                <option value="capacitacion">Capacitación</option>
                <option value="adm">Adm. Y Contabilidad</option>
                <option value="sistemas">Sistemas</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 2rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">¿Por qué quieres unirte?</label>
              <textarea id="vol-mensaje" rows="4" placeholder="Cuéntanos brevemente tu motivación..." required class="form-control" style="resize: vertical;"></textarea>
            </div>

            <button type="submit" id="btn-enviar-vol" class="btn btn--primary" style="width: 100%;">Enviar Solicitud</button>
            <div id="vol-loading" style="display:none; text-align: center; margin-top: 1rem;"><i class="fas fa-spinner fa-spin"></i> Enviando...</div>
          </form>
        </div>
      </div>
    </section>
  </main>

<?php include '../components/footer.php'; ?>
