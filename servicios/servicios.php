<?php
$pageTitle = 'Servicios | Fundación Hecho en Bolivia';
$pageDescription = 'Conoce los servicios que ofrece la Fundación Hecho en Bolivia: Red de Marcas, Radio Online, Capacítate, Asistencia Técnica, Propiedad Intelectual y más.';
$basePath = '../';
$activeNav = 'servicios';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-header">
      <div class="container" style="position: relative; z-index: 2;">
        <i class="fas fa-briefcase" style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem; display: block;"></i>
        <h1 style="font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 0.5rem;">Nuestros Servicios</h1>
        <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto; opacity: 0.8;">Soluciones integrales para impulsar la producción y el comercio boliviano.</p>
      </div>
    </section>

    <!-- Servicios Grid -->
    <section class="section">
      <div class="container">
        <div class="text-center animate-on-scroll" style="margin-bottom: 3rem;">
          <span class="section-label">Lo que ofrecemos</span>
          <h2 class="section-title">Servicios de la <span class="text-gradient">Fundación</span></h2>
        </div>

        <style>
          .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; }
          .service-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden; text-decoration: none; color: inherit; display: block; }
          .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--primary), var(--accent)); transform: scaleX(0); transition: transform 0.4s ease; transform-origin: left; }
          .service-card:hover::before { transform: scaleX(1); }
          .service-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
          .service-card__icon { width: 90px; height: 90px; border-radius: 50%; margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; transition: all 0.4s ease; }
          .service-card__icon--vintage { background: linear-gradient(135deg, #8B7355, #6B5B3F); color: #f5e6d0; border: 3px solid #a0926c; }
          .service-card:hover .service-card__icon--vintage { background: linear-gradient(135deg, #6B5B3F, #4a3f2a); box-shadow: 0 4px 15px rgba(107, 91, 63, 0.4); }
          .service-card__title { font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; margin: 0 0 0.5rem; color: var(--text-primary); }
          .service-card__desc { font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5; }
          .service-card__tag { display: inline-block; background: rgba(var(--primary-rgb), 0.1); color: var(--primary); font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border-radius: var(--radius-full); text-transform: uppercase; letter-spacing: 1px; margin-top: 0.75rem; }
        </style>

        <div class="services-grid">
          <!-- Red de Marcas -->
          <a href="../servicios/red-marcas.php" class="service-card animate-on-scroll animate-delay-1" id="red-marcas">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-tags"></i>
            </div>
            <h3 class="service-card__title">Red de Marcas</h3>
            <p class="service-card__desc">Conectamos marcas bolivianas para fortalecer su presencia en el mercado nacional e internacional.</p>
            <span class="service-card__tag">Comercio</span>
          </a>

          <!-- Radio Online -->
          <a href="https://www.facebook.com/CadenaHB/?locale=es_LA" target="_blank" class="service-card animate-on-scroll animate-delay-2" id="radio">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-broadcast-tower"></i>
            </div>
            <h3 class="service-card__title">Radio Online</h3>
            <p class="service-card__desc">Escucha nuestra radio en vivo con contenido sobre industria, economía y cultura boliviana.</p>
            <span class="service-card__tag">Medios</span>
          </a>

          <!-- Capacítate -->
          <a href="../servicios/capacitate.php" class="service-card animate-on-scroll animate-delay-3">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="service-card__title">Capacítate</h3>
            <p class="service-card__desc">Cursos, talleres y seminarios para el desarrollo empresarial y profesional boliviano.</p>
            <span class="service-card__tag">Educación</span>
          </a>

          <!-- Asistencia Técnica -->
          <a href="#" target="_blank" class="service-card animate-on-scroll animate-delay-1" id="asistencia">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-tools"></i>
            </div>
            <h3 class="service-card__title">Asistencia Técnica</h3>
            <p class="service-card__desc">Asesoramiento especializado para mejorar procesos productivos y calidad empresarial.</p>
            <span class="service-card__tag">Consultoría</span>
          </a>

          <!-- Gestión en Propiedad Intelectual -->
          <a href="../asistencia/propiedad-intelectual.php" class="service-card animate-on-scroll animate-delay-2">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="service-card__title">Gestión en Propiedad Intelectual</h3>
            <p class="service-card__desc">Protege tu marca, patentes y derechos de autor con nuestro servicio de gestión integral.</p>
            <span class="service-card__tag">Legal</span>
          </a>

          <!-- Festival Internacional del Caporal -->
          <a href="#" target="_blank" class="service-card animate-on-scroll animate-delay-3" id="caporal">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-music"></i>
            </div>
            <h3 class="service-card__title">Festival Int. del Caporal</h3>
            <p class="service-card__desc">El mayor evento cultural que celebra y promueve la danza del Caporal a nivel internacional.</p>
            <span class="service-card__tag">Cultura</span>
          </a>

          <!-- Revista Origen -->
          <a href="#" target="_blank" class="service-card animate-on-scroll animate-delay-1" id="revista">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-book-open"></i>
            </div>
            <h3 class="service-card__title">Revista Origen</h3>
            <p class="service-card__desc">Publicación especializada en industria, economía y la identidad productiva de Bolivia.</p>
            <span class="service-card__tag">Publicación</span>
          </a>

          <!-- Pulso Económico -->
          <a href="../publicaciones/pulso-economico.php" class="service-card animate-on-scroll animate-delay-2">
            <div class="service-card__icon service-card__icon--vintage">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="service-card__title">Pulso Económico</h3>
            <p class="service-card__desc">Portal de noticias económicas con indicadores, cotizaciones y análisis del mercado boliviano.</p>
            <span class="service-card__tag">Economía</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Conversor como herramienta -->
    <section class="section section--dark" id="conversor">
      <div class="container">
        <div class="text-center" style="margin-bottom: 2rem;">
          <span class="section-label">Herramienta</span>
          <h2 class="section-title">Conversor de <span class="text-gradient">Moneda</span></h2>
          <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto;">Cotización del Boliviano (BOB) frente a las principales monedas del mundo.</p>
        </div>
        <style>
          .converter-box-v2 { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2.5rem; max-width: 650px; margin: 0 auto; }
          .converter-box-v2 h3 { font-family: var(--font-heading); color: var(--primary); margin-bottom: 1.5rem; text-align: center; }
          .converter-row-v2 { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
          .converter-input-v2 { flex: 1; min-width: 150px; }
          .converter-input-v2 label { display: block; font-size: var(--text-sm); font-weight: 600; color: var(--text-secondary); margin-bottom: 0.5rem; }
          .converter-input-v2 input, .converter-input-v2 select { width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-family: var(--font-body); font-size: var(--text-base); background: var(--bg-primary); color: var(--text-primary); }
          .converter-input-v2 input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.15); }
          .converter-result-v2 { text-align: center; margin-top: 1.5rem; padding: 1.5rem; background: rgba(var(--accent-rgb), 0.08); border-radius: var(--radius-md); }
          .converter-result-v2 .value { font-family: var(--font-heading); font-size: var(--text-3xl); font-weight: 800; color: var(--accent-dark); }
          .converter-swap-v2 { background: var(--primary); color: white; border: none; border-radius: 50%; width: 44px; height: 44px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: transform 0.3s ease, background 0.3s ease; flex-shrink: 0; }
          .converter-swap-v2:hover { background: var(--primary-dark); transform: rotate(180deg); }
        </style>

        <div class="converter-box-v2">
          <h3><i class="fas fa-exchange-alt"></i> Convertir Monedas</h3>
          <div class="converter-row-v2">
            <div class="converter-input-v2">
              <label for="sv-conv-amount">Cantidad</label>
              <input type="number" id="sv-conv-amount" value="100" min="0" step="0.01">
            </div>
            <div class="converter-input-v2">
              <label for="sv-conv-from">De</label>
              <select id="sv-conv-from">
                <option value="USD">🇺🇸 USD - Dólar</option>
                <option value="EUR">🇪🇺 EUR - Euro</option>
                <option value="BRL">🇧🇷 BRL - Real</option>
                <option value="ARS">🇦🇷 ARS - Peso Arg.</option>
                <option value="CLP">🇨🇱 CLP - Peso Chileno</option>
                <option value="PEN">🇵🇪 PEN - Sol</option>
                <option value="BOB" selected>🇧🇴 BOB - Boliviano</option>
              </select>
            </div>
            <button class="converter-swap-v2" id="sv-conv-swap" title="Intercambiar"><i class="fas fa-exchange-alt"></i></button>
            <div class="converter-input-v2">
              <label for="sv-conv-to">A</label>
              <select id="sv-conv-to">
                <option value="USD" selected>🇺🇸 USD - Dólar</option>
                <option value="EUR">🇪🇺 EUR - Euro</option>
                <option value="BRL">🇧🇷 BRL - Real</option>
                <option value="ARS">🇦🇷 ARS - Peso Arg.</option>
                <option value="CLP">🇨🇱 CLP - Peso Chileno</option>
                <option value="PEN">🇵🇪 PEN - Sol</option>
                <option value="BOB">🇧🇴 BOB - Boliviano</option>
              </select>
            </div>
          </div>
          <div class="converter-result-v2" id="sv-conv-result">
            <div class="value" id="sv-conv-result-value">—</div>
            <p style="color: var(--text-muted); font-size: var(--text-sm); margin-top: 0.5rem;" id="sv-conv-result-detail"></p>
          </div>
        </div>
        <p style="text-align: center; margin-top: 1rem; color: var(--text-muted); font-size: var(--text-xs);">Datos proporcionados por <a href="https://www.exchangerate-api.com/" target="_blank" style="color: var(--primary);">ExchangeRate-API</a> (actualización diaria).</p>
      </div>
    </section>
  </main>

  <!-- Footer -->

<script>
    // Currency Converter
    let svExchangeRates = {};
    async function svFetchRates() {
      try {
        const r = await fetch('https://v6.exchangerate-api.com/v6/8f00d9e021e87b0b628e1198/latest/BOB');
        const d = await r.json();
        if (d.result === 'success') { svExchangeRates = d.conversion_rates; svConvert(); }
      } catch(e) { console.error(e); }
    }
    function svConvert() {
      if (!svExchangeRates || !Object.keys(svExchangeRates).length) return;
      const amt = parseFloat(document.getElementById('sv-conv-amount').value) || 0;
      const from = document.getElementById('sv-conv-from').value;
      const to = document.getElementById('sv-conv-to').value;
      let res;
      if (from === 'BOB') res = amt * (svExchangeRates[to] || 1);
      else if (to === 'BOB') res = amt / (svExchangeRates[from] || 1);
      else { res = (amt / (svExchangeRates[from] || 1)) * (svExchangeRates[to] || 1); }
      document.getElementById('sv-conv-result-value').textContent = res.toFixed(2) + ' ' + to;
      document.getElementById('sv-conv-result-detail').textContent = amt.toFixed(2) + ' ' + from + ' = ' + res.toFixed(2) + ' ' + to;
    }
    document.getElementById('sv-conv-amount').addEventListener('input', svConvert);
    document.getElementById('sv-conv-from').addEventListener('change', svConvert);
    document.getElementById('sv-conv-to').addEventListener('change', svConvert);
    document.getElementById('sv-conv-swap').addEventListener('click', () => {
      const f = document.getElementById('sv-conv-from'), t = document.getElementById('sv-conv-to');
      const tmp = f.value; f.value = t.value; t.value = tmp; svConvert();
    });
    document.addEventListener('DOMContentLoaded', svFetchRates);
  </script>

<?php include '../components/footer.php'; ?>
