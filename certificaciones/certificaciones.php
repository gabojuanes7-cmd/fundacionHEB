<?php
$pageTitle = 'Certificaciones | FundaciÃ³n Hecho en Bolivia';
$pageDescription = 'Certificaciones oficiales de la FundaciÃ³n Hecho en Bolivia: Sello Hecho en Bolivia y Sello Ibnorca. Garantiza la calidad y el origen de tu producto.';
$basePath = '../';
$activeNav = 'certificaciones';
$extraHead = '<style>     .cert-hero { background: linear-gradient(135deg, #0a3622 0%, #15803d 50%, #166534 100%); padding: 6rem 0 4rem; text-align: center; color: white; position: relative; overflow: hidden; }     .cert-hero::before { content: \'\'; position: absolute; inset: 0; background: url(\'assets/images/logo-hecho-en-bolivia.jpg\') center/300px no-repeat; opacity: 0.04; }     .cert-hero h1 { font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 0.75rem; position: relative; color: #ffffff; }     .cert-hero p { font-size: 1.1rem; max-width: 600px; margin: 0 auto; opacity: 0.95; position: relative; color: #ffffff; }      .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 2.5rem; margin-top: -3rem; position: relative; z-index: 2; }       .cert-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); transition: transform 0.4s ease; }     .cert-card:hover { transform: translateY(-6px); }     .cert-card__header { padding: 2.5rem; text-align: center; position: relative; }     .cert-card__header--heb { background: linear-gradient(135deg, #fbbf24, #f59e0b); }     .cert-card__header--ibnorca { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }     .cert-card__seal { width: 120px; height: 120px; border-radius: 50%; background: rgba(255,255,255,0.95); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }     .cert-card__seal i { font-size: 3rem; }     .cert-card__seal--heb i { color: #b45309; }     .cert-card__seal--ibnorca i { color: #1d4ed8; }     .cert-card__header h2 { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: white; margin: 0; text-shadow: 0 1px 3px rgba(0,0,0,0.2); }     .cert-card__body { padding: 2rem; }     .cert-card__body p { color: var(--text-secondary); line-height: 1.7; margin-bottom: 1rem; }     .cert-card__body h3 { font-family: var(--font-heading); color: var(--text-primary); margin: 1.5rem 0 0.75rem; font-size: 1.1rem; }      .cert-steps { list-style: none; padding: 0; margin: 0; counter-reset: step; }     .cert-steps li { display: flex; align-items: flex-start; gap: 12px; padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); counter-increment: step; }     .cert-steps li:last-child { border-bottom: none; }     .cert-steps li::before { content: counter(step); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0; }     .cert-card--heb .cert-steps li::before { background: #fef3c7; color: #b45309; }     .cert-card--ibnorca .cert-steps li::before { background: #dbeafe; color: #1d4ed8; }     .cert-steps li span { font-size: 0.9rem; color: var(--text-secondary); }      .cert-cta { text-align: center; margin-top: 1.5rem; }   </style>';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="cert-hero">
      <div class="container">
        <i class="fas fa-certificate" style="font-size: 3rem; margin-bottom: 1rem; display: block; color: #fbbf24;"></i>
        <h1>Certificaciones</h1>
        <p>Avala la calidad y el origen boliviano de tus productos con nuestros sellos de certificaciÃ³n reconocidos.</p>
      </div>
    </section>

    <!-- Certificaciones Split Layout -->
    <section class="section">
      <div class="container" style="display: flex; flex-direction: column; gap: 6rem;">
        
        <!-- Sello Hecho en Bolivia -->
        <div class="grid grid--2" style="gap: 4rem; align-items: center;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border-color); background: var(--bg-card); padding: 1rem;">
            <img loading="lazy" src="../assets/images/nuestra identidad.png" alt="Marca Hecho en Bolivia" style="width: 100%; display: block; border-radius: var(--radius-md);">
          </div>
          <div>
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
              <span style="display: inline-block; width: 30px; height: 2px; background-color: var(--primary); margin-right: 10px;"></span>
              <span style="color: var(--primary); font-weight: bold; text-transform: uppercase; font-size: 0.9rem;">PARA EMPRENDEDORES Y EMPRESARIOS PRIVADOS</span>
            </div>
            <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin-bottom: 1.5rem; font-weight: 700;">Nuestra Identidad â <span style="color: var(--primary);">Lo Nuestro</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 2rem; text-align: justify;">
              Una marca sÃ³lida nos permite alinear esfuerzos bajo un mismo objetivo, fortaleciendo la efectividad de la producciÃ³n nacional. Al hacerlo, motivamos el espÃ­ritu emprendedor de cada boliviano y contribuimos a la formaciÃ³n de empresarios destacados que impulsen el desarrollo econÃ³mico sostenible del paÃ­s. Este compromiso se traduce en la generaciÃ³n de empleos dignos y en la mejora de la calidad de vida que se traduce en impacto social.
            </p>
            <button class="btn btn--primary btn-abrir-solicitud" data-tipo="Sello Hecho en Bolivia" style="background-color: #B91C1C; border-radius: 4px; padding: 0.8rem 1.5rem; font-weight: 600; cursor: pointer; border: none; font-family: inherit; font-size: inherit; color: white;">Solicitud Certificado de Uso <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></button>
          </div>
        </div>

        <!-- Sello VAON -->
        <div class="grid grid--2" style="gap: 4rem; align-items: center;">
          <a href="../certificaciones/vaon.php" style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border-color); background: var(--bg-card); padding: 1rem; display: block; text-decoration: none;">
            <img loading="lazy" src="../assets/images/VAON.png" alt="CertificaciÃ³n VAON" style="width: 100%; display: block; border-radius: var(--radius-md);">
          </a>
          <div>
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
              <span style="display: inline-block; width: 30px; height: 2px; background-color: var(--primary); margin-right: 10px;"></span>
              <span style="color: var(--primary); font-weight: bold; text-transform: uppercase; font-size: 0.9rem;">PARA PRODUCTOS IGUAL O MAYOR AL 51% de VAON</span>
            </div>
            <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin-bottom: 1.5rem; font-weight: 700; text-transform: uppercase;">SI ES PRODUCTO NACIONAL â <span style="color: var(--primary);">CertifÃ­calo!</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 2rem; text-align: justify;">
              Cuando una mercancÃ­a incorpora insumos o materias primas dentro de su proceso productivo, existe la posibilidad de formular reglas que favorezcan la producciÃ³n nacional basÃ¡ndose en criterios econÃ³micos, como por ejemplo, que el componente del costo, confiera un porcentaje de valor que se agrega a la mercancÃ­a en el territorio nacional, en base a la materia prima empleada, mano de obra e insumos, para que la misma sea considerada como de origen nacional, vale decir producida en Bolivia.
            </p>
            <button class="btn btn--primary btn-abrir-solicitud" data-tipo="Sello VAON" style="background-color: #B91C1C; border-radius: 4px; padding: 0.8rem 1.5rem; font-weight: 600; cursor: pointer; border: none; font-family: inherit; font-size: inherit; color: white;">Solicitud de CertificaciÃ³n <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></button>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <h2 class="cta-section__title animate-on-scroll">Â¿Quieres certificar tu producto?</h2>
        <p class="cta-section__text animate-on-scroll animate-delay-1">Nuestro equipo te guÃ­a en todo el proceso de certificaciÃ³n. Protege y valoriza lo Hecho en Bolivia.</p>
        <div class="animate-on-scroll animate-delay-2">
          <a href="../info/contacto.php" class="btn btn--secondary btn--lg"><i class="fas fa-envelope"></i> ContÃ¡ctanos</a>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->

<!-- Modal de Solicitud -->
  <div id="solicitud-modal" class="modal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 9999; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; pointer-events: none;">
    <div style="background: var(--bg-card); width: 90%; max-width: 500px; border-radius: var(--radius-lg); padding: 2rem; position: relative; box-shadow: var(--shadow-xl); transform: translateY(20px); transition: transform 0.3s;">
      <button class="solicitud-modal-close" style="position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted);">&times;</button>
      <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-primary);"><i class="fas fa-file-signature" style="color: var(--primary);"></i> Formulario de Solicitud</h3>
      <form id="form-solicitud-cert">
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Nombre o Empresa</label>
          <input type="text" id="solicitud-nombre" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);">
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Correo ElectrÃ³nico</label>
          <input type="email" id="solicitud-correo" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);">
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Celular / WhatsApp</label>
          <input type="tel" id="solicitud-celular" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);">
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Tipo de Solicitud</label>
          <select id="solicitud-tipo" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);">
            <option value="Sello Hecho en Bolivia">Sello Hecho en Bolivia</option>
            <option value="Sello VAON">Sello VAON</option>
            <option value="AfiliaciÃ³n Institucional">AfiliaciÃ³n Institucional</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div style="margin-bottom: 1.5rem;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Mensaje o Consulta</label>
          <textarea id="solicitud-mensaje" rows="3" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-body); color: var(--text-primary);"></textarea>
        </div>
        <button type="submit" id="btn-enviar-solicitud" class="btn btn--primary" style="width: 100%;">Enviar Solicitud</button>
        <div id="solicitud-loading" style="display:none; text-align: center; margin-top: 1rem;"><i class="fas fa-spinner fa-spin"></i> Enviando...</div>
      </form>
    </div>
  </div>
  <style>
    #solicitud-modal.active { display: flex !important; opacity: 1 !important; pointer-events: auto !important; }
    #solicitud-modal.active > div { transform: translateY(0) !important; }
  </style>

<?php include '../components/footer.php'; ?>
