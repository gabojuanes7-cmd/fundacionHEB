<?php
$pageTitle = 'Noticia — Fundación Hecho en Bolivia';
$pageDescription = 'Detalle de la noticia - Fundación Hecho en Bolivia';
$basePath = '../';
$activeNav = 'noticias';
$extraHead = '<style>     .noticia-detalle { max-width: 800px; margin: 0 auto; padding: 4rem 1.5rem; }     .noticia-detalle__header { text-align: center; margin-bottom: 2rem; }     .noticia-detalle__meta { display: flex; align-items: center; justify-content: center; gap: 1rem; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem; }     .noticia-detalle__title { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: var(--text-primary); margin-bottom: 2rem; line-height: 1.2; }     .noticia-detalle__image { width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); margin-bottom: 3rem; max-height: 500px; object-fit: cover; }     .noticia-detalle__content { font-size: 1.1rem; line-height: 1.8; color: var(--text-primary); }     .noticia-detalle__content p { margin-bottom: 1.5rem; }   </style>';

include '../components/header.php';
?>

<main>
    <section class="noticia-detalle">
      <div id="noticia-loading" style="text-align: center; padding: 4rem;">
        <i class="fas fa-spinner fa-spin fa-3x" style="color: var(--primary);"></i>
        <p style="margin-top: 1rem;">Cargando noticia...</p>
      </div>
      
      <div id="noticia-content" style="display: none;">
        <div class="noticia-detalle__header">
          <div class="noticia-detalle__meta">
            <span class="badge" id="noticia-categoria" style="background: var(--primary); color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size: 0.8rem; text-transform: uppercase;">Categoría</span>
            <span id="noticia-fecha"><i class="far fa-calendar"></i> Fecha</span>
          </div>
          <h1 class="noticia-detalle__title" id="noticia-titulo">Título de la noticia</h1>
        </div>
        
        <img loading="lazy" src="" alt="Portada de la noticia" class="noticia-detalle__image" id="noticia-imagen">
        
        <div class="noticia-detalle__content" id="noticia-texto">
          <!-- Contenido dinámico -->
        </div>
        
        <div style="margin-top: 4rem; text-align: center;">
          <a href="javascript:history.back()" class="btn btn--secondary"><i class="fas fa-arrow-left"></i> Volver</a>
        </div>
      </div>
      
      <div id="noticia-error" style="display: none; text-align: center; padding: 4rem; color: #dc2626;">
        <i class="fas fa-exclamation-circle fa-3x"></i>
        <h2 style="margin-top: 1rem;">Noticia no encontrada</h2>
        <p>El enlace podría estar roto o la noticia fue eliminada.</p>
        <a href="../index.php" class="btn btn--primary" style="margin-top: 2rem;">Ir al inicio</a>
      </div>
    </section>
  </main>

  <!-- Footer -->

<script type="module">
    import { db } from './js/firebase-config.js';
    import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

    document.addEventListener('DOMContentLoaded', async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const noticiaId = urlParams.get('id');
      
      if (!noticiaId) {
        document.getElementById('noticia-loading').style.display = 'none';
        document.getElementById('noticia-error').style.display = 'block';
        return;
      }

      try {
        const docRef = doc(db, "noticias", noticiaId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          
          document.getElementById('noticia-titulo').textContent = data.titulo;
          document.getElementById('noticia-categoria').textContent = data.categoria || 'Noticia';
          document.getElementById('noticia-fecha').innerHTML = `<i class="far fa-calendar"></i> ${data.fecha}`;
          
          if (data.imageUrl) {
            document.getElementById('noticia-imagen').src = data.imageUrl;
            document.getElementById('noticia-imagen').alt = data.titulo;
          } else {
            document.getElementById('noticia-imagen').style.display = 'none';
          }
          
          // Soporte para saltos de línea en el texto
          const contenidoFormateado = data.contenido.replace(/\n/g, '<br>');
          document.getElementById('noticia-texto').innerHTML = contenidoFormateado;

          document.title = `${data.titulo} — Fundación Hecho en Bolivia`;
          
          document.getElementById('noticia-loading').style.display = 'none';
          document.getElementById('noticia-content').style.display = 'block';
        } else {
          document.getElementById('noticia-loading').style.display = 'none';
          document.getElementById('noticia-error').style.display = 'block';
        }
      } catch (error) {
        console.error("Error al cargar la noticia:", error);
        document.getElementById('noticia-loading').style.display = 'none';
        document.getElementById('noticia-error').style.display = 'block';
      }
    });
  </script>

<?php include '../components/footer.php'; ?>
