<?php
$pageTitle = 'Marca Hecho en Bolivia | FundaciÃ³n Hecho en Bolivia';
$pageDescription = '';
$basePath = '../';
$activeNav = 'certificaciones';
$headerTransparent = true;

include '../components/header.php';
?>

<main>

    <!-- Hero -->
    
    <section class="page-header relative  bg-dark text-white text-center overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('assets/images/hero-bolivia.png'); background-size: cover; background-position: center; filter: grayscale(1);"></div>
      <div class="container relative z-10">
        
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Sello "Hecho en Bolivia"</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Garantiza la calidad nacional y diferÃ©nciate en el mercado con nuestro sello oficial.</p>
      </div>
    
      </div>
    </section>

    <section class="section">
      <div class="container">
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
      </div>
    </section>
  
</main>


  <!-- ==================== FOOTER ==================== -->

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
