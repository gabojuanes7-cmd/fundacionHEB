<?php
$pageTitle = 'VAON | FundaciÃ³n Hecho en Bolivia';
$pageDescription = '';
$basePath = '../';
$activeNav = 'certificaciones';
$headerTransparent = true;

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://fundacionhechoenbolivia.com/vaonbolivia/wp-content/uploads/2024/09/Lanzamiento-VAONv2.jpg') center/cover; padding: 6rem 0;">
      <div class="container text-center">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4.5rem); margin-bottom: 1rem; font-family: var(--font-heading); text-transform: uppercase; color: white;">CertificaciÃ³n VAON</h1>
        <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto; color: rgba(255,255,255,0.9);">Valor Agregado de Origen Nacional</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section">
      <div class="container">
        <!-- Sello VAON -->
        <div class="grid grid--2" style="gap: 4rem; align-items: center;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--border-color); background: var(--bg-card); padding: 2rem; display: flex; justify-content: center;">
            <img loading="lazy" src="../assets/images/VAON.png" alt="CertificaciÃ³n VAON" style="width: 80%; display: block;">
          </div>
          <div>
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
              <span style="display: inline-block; width: 40px; height: 3px; background-color: var(--primary); margin-right: 15px;"></span>
              <span style="color: var(--primary); font-weight: 800; text-transform: uppercase; font-size: 0.95rem; letter-spacing: 1px;">Mayor al 51% de VAON</span>
            </div>
            <h2 style="font-family: var(--font-heading); font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 800; text-transform: uppercase; line-height: 1.2;">SI ES PRODUCTO NACIONAL <br><span class="text-gradient">Â¡CertifÃ­calo!</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 2rem; text-align: justify;">
              Cuando una mercancÃ­a incorpora insumos o materias primas dentro de su proceso productivo, existe la posibilidad de formular reglas que favorezcan la producciÃ³n nacional basÃ¡ndose en criterios econÃ³micos. El componente del costo confiere un porcentaje de valor que se agrega a la mercancÃ­a en el territorio nacional (materia prima, mano de obra e insumos), permitiendo que sea considerada como de origen nacional, es decir, <strong>producida en Bolivia</strong>.
            </p>
            <div style="background: rgba(var(--primary-rgb), 0.05); border-left: 4px solid var(--primary); padding: 1.5rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2.5rem;">
              <h4 style="margin-bottom: 0.5rem; font-family: var(--font-heading);">Beneficios de la CertificaciÃ³n</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Respaldar legalmente el origen de tu producto.</li>
                <li style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Acceso a mercados internacionales con beneficios.</li>
                <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Fomentar el consumo de lo nuestro con garantÃ­a oficial.</li>
              </ul>
            </div>
            <button class="btn btn--primary btn-abrir-solicitud" data-tipo="Sello VAON" style="padding: 1rem 2rem; font-size: 1.1rem; box-shadow: var(--shadow-md); width: 100%; justify-content: center;">
              Solicitud de CertificaciÃ³n <i class="fas fa-arrow-right" style="margin-left: 10px;"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner Info Adicional -->
    <section class="section" style="background: var(--bg-card); border-top: 1px solid var(--border-color);">
      <div class="container text-center">
        <h3 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem;">Â¿Dudas sobre el proceso de certificaciÃ³n?</h3>
        <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto 2rem;">Nuestro equipo tÃ©cnico estÃ¡ listo para asesorarte en la obtenciÃ³n de tu sello VAON paso a paso.</p>
        <a href="../info/contacto.php" class="btn btn--outline" style="border-color: var(--primary); color: var(--primary);">Contactar AsesorÃ­a TÃ©cnica <i class="fas fa-headset" style="margin-left: 8px;"></i></a>
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
