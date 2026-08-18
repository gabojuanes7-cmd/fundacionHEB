<?php
$pageTitle = 'Red de Marcas | Fundación Hecho en Bolivia';
$pageDescription = 'Descarga nuestro Dossier de Consolidación y otros documentos institucionales.';
$basePath = '../';
$activeNav = 'servicios';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading); text-transform: uppercase;">Red de Marcas</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Si es Hecho en Bolivia... ¡es bueno!</p>
      </div>
    </section>

    <!-- Logos Grid Section -->
    <section class="section section--light">
      <div class="container">
        <div class="text-center" style="margin-bottom: 3rem;">
          <h2 class="section-title">Marcas <span class="text-gradient">Asociadas</span></h2>
          <p style="color: var(--text-muted); max-width: 700px; margin: 0 auto;">Nuestra red integra a las empresas e industrias más destacadas que apuestan por la producción nacional y el desarrollo de Bolivia.</p>
        </div>

        <style>
          .marcas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 2rem;
            align-items: center;
            justify-items: center;
          }
          .marca-card {
            background: white;
            border-radius: var(--radius-md);
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            padding: 1.5rem;
            width: 100%;
            height: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
            overflow: hidden;
            border: 1px solid var(--border-color);
          }
          html[data-theme="dark"] .marca-card {
            background: var(--bg-card);
          }
          .marca-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            border-color: var(--primary);
          }
          .marca-card img {
            max-width: 100%;
            max-height: 100px;
            object-fit: contain;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
          }
          .marca-card:hover img {
            filter: grayscale(0%);
          }
        </style>

        <div class="marcas-grid">
          <a href="http://www.ceramicacimco.com/cimco/index.php" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2022/05/Nuevo-proyecto-48.jpg" alt="CIMCO"></a>
          <a href="https://cadexco.bo/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2022/05/Nuevo-proyecto-58.jpg" alt="Cadexco"></a>
          <a href="https://www.unilever.bo/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2022/05/Nuevo-proyecto-78.jpg" alt="Unilever"></a>
          <a href="https://www.plasticosuperior.com/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2022/05/Nuevo-proyecto-79.jpg" alt="Plástico Superior"></a>
          <a href="https://madervaf.com/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2022/06/Nuevo-proyecto-90.jpg" alt="Madervaf"></a>
          <a href="https://garnica-ingenieria.jimdosite.com/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2022/05/Nuevo-proyecto-81-1.jpg" alt="Garnica Ingeniería"></a>
          <a href="https://www.facebook.com/ceramica.nacionalsrl" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-31-1.jpg" alt="Cerámica Nacional"></a>
          <a href="http://dismat.com.bo" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-41.jpg" alt="Dismat"></a>
          <a href="http://www.fabe.com.bo/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-51.jpg" alt="Fabe"></a>
          <a href="https://www.facebook.com/MueblesIBEMA/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-61-1.jpg" alt="Muebles IBEMA"></a>
          <a href="https://iadv.com.bo" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-71.jpg" alt="IADV"></a>
          <a href="https://www.laboratoriosfarcos.com/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-81-2.jpg" alt="Laboratorios Farcos"></a>
          <a href="http://www.laboratoriomalena.com" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-84-2.jpg" alt="Laboratorio Malena"></a>
          <a href="https://textimex.com.mx/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-106.jpg" alt="Textimex"></a>
          <a href="http://www.premier.com.bo/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-116.jpg" alt="Premier"></a>
          <a href="https://www.aguai.com.bo/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-126.jpg" alt="Aguaí"></a>
          <a href="http://www.bnb.com.bo/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-136.png" alt="BNB"></a>
          <a href="http://www.labelsbolivia.com/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-146.png" alt="Labels Bolivia"></a>
          <a href="http://belen.com.bo/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-156.png" alt="Belén"></a>
          <a href="https://plasticoscarmen.com/" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-166.png" alt="Plásticos Carmen"></a>
          <a href="https://www.facebook.com/sanlorenzofiambres" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-176.png" alt="San Lorenzo"></a>
          <a href="http://www.pinturasmonopol.com" target="_blank" class="marca-card"><img loading="lazy" src="https://www.fundacionhechoenbolivia.com/redmarcas/wp-content/uploads/2021/11/Sin-titulo-186.jpg" alt="Pinturas Monopol"></a>
        </div>
      </div>
    </section>
  </main>

<?php include '../components/footer.php'; ?>
