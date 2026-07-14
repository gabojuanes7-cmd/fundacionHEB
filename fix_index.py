import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Restore the deleted sections between <!-- ==================== QUIÉNES SOMOS (Preview) ==================== -->
# and <!-- ==================== STATS ==================== -->

correct_section = """      <div class="scroll-down-hint">Scroll para continuar</div>
    </section>

    <!-- ==================== QUIÉNES SOMOS (Preview) ==================== -->
    <section class="section" id="about-preview">
      <div class="container">
        <div class="split">
          <div class="split__image animate-slide-left">
            <img src="assets/images/about-artisans.png" alt="Producción Nacional" loading="lazy" width="640" height="480">
          </div>
          <div class="split__content animate-slide-right">
            <span class="section-label">Nuestra Fundación</span>
            <h2 class="section-title">El Orgullo de lo <span class="text-gradient">Nuestro</span></h2>
            <p>
              Nace un 3 de diciembre de 2014. Producto de un grupo de personas, para crear una institución sin fines de lucro que no sea gremial, ni sectorial, ni Departamental; Ser nacional, transversal a todos los sectores.
            </p>
            <p>
              La FUNDACIÓN es la consolidación de la Campaña "Consume lo Nuestro" que inició el año 2001 con resultados exitosos, hoy es nuestra distinción como país.
            </p>
            <a href="quienes-somos.html" class="btn btn--primary">Nuestra Misión y Visión <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== STATS ==================== -->
    <section class="section section--dark" id="stats">
      <div class="container">
        <div class="stats">"""

# Replace anything from <div class="scroll-down-hint"> to <div class="stats">
content = re.sub(r'<div class="accordion-branding">.*?<div class="stat animate-on-scroll">',
                 '<div class="accordion-branding">\n        <img src="assets/images/logo-hecho-en-bolivia.jpg" alt="Fundación Hecho en Bolivia" class="accordion-branding__logo">\n      </div>\n' + correct_section + '\n          <div class="stat animate-on-scroll">',
                 content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
