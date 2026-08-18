<?php
$pageTitle = 'Cuñas Radiales | Fundación Hecho en Bolivia';
$pageDescription = 'Audios y cuñas radiales promocionales.';
$basePath = '../';
$activeNav = 'multimedia';

include '../components/header.php';
?>

<main>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Cuñas Radiales</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Escucha nuestros spots publicitarios y compártelos para promover la campaña.</p>
      </div>
    </section>

    <!-- Audios -->
    <section class="section">
      <div class="container">
        <div class="grid grid--2" style="gap: 2rem;">
          <div class="card" style="padding: 2rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <h3 style="margin-bottom: 0.5rem; color: var(--color-primary);">Spot Campaña 2026</h3>
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">Duración: 0:30 seg</p>
            </div>
            <button class="btn btn--primary" style="border-radius: 50%; width: 50px; height: 50px; padding: 0; display: flex; align-items: center; justify-content: center;"><i class="fas fa-play"></i></button>
          </div>
          
          <div class="card" style="padding: 2rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <h3 style="margin-bottom: 0.5rem; color: var(--color-secondary);">Spot Sello Oficial</h3>
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">Duración: 0:45 seg</p>
            </div>
            <button class="btn btn--primary" style="border-radius: 50%; width: 50px; height: 50px; padding: 0; display: flex; align-items: center; justify-content: center;"><i class="fas fa-play"></i></button>
          </div>
        </div>
      </div>
    </section>
  </main>

<?php include '../components/footer.php'; ?>
