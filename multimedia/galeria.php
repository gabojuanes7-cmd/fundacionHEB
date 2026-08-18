<?php
$pageTitle = 'Galería | Fundación Hecho en Bolivia';
$pageDescription = 'Galería de fotos de eventos y proyectos.';
$basePath = '../';
$activeNav = 'multimedia';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Galería Fotográfica</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Un recorrido visual por nuestros eventos, ferias y logros institucionales.</p>
      </div>
    </section>

    <!-- Galería -->
    <section class="section">
      <div class="container">
        <div class="grid grid--3" style="gap: 1.5rem;">
          <!-- Foto 1 -->
          <div style="border-radius: var(--radius-md); overflow: hidden; height: 250px;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Evento 1" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <!-- Foto 2 -->
          <div style="border-radius: var(--radius-md); overflow: hidden; height: 250px;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Evento 2" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <!-- Foto 3 -->
          <div style="border-radius: var(--radius-md); overflow: hidden; height: 250px;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Evento 3" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <!-- Foto 4 -->
          <div style="border-radius: var(--radius-md); overflow: hidden; height: 250px;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Evento 4" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <!-- Foto 5 -->
          <div style="border-radius: var(--radius-md); overflow: hidden; height: 250px;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1542744094-24638ea0bc40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Evento 5" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <!-- Foto 6 -->
          <div style="border-radius: var(--radius-md); overflow: hidden; height: 250px;">
            <img loading="lazy" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Evento 6" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          </div>
        </div>
      </div>
    </section>
  </main>

<?php include '../components/footer.php'; ?>
