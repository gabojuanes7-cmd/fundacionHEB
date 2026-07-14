import re
with open('index.html', 'r', encoding='utf8') as f:
    idx = f.read()

header = idx.split('<main>')[0] + '<main>\n'
footer = '\n  </main>\n' + idx.split('</main>')[1]

main_content = '''    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Quiénes Somos</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Conoce nuestra historia, misión, visión y a las personas que trabajan día a día por impulsar lo "Hecho en Bolivia".</p>
      </div>
    </section>

    <!-- Historia -->
    <section class="section">
      <div class="container">
        <div class="split" style="gap: 4rem; align-items: center;">
          <div>
            <span class="section-label">Nuestros Orígenes</span>
            <h2 class="section-title">Historia de la <span class="text-gradient">Fundación</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Nace un 3 de diciembre de 2014. Producto de un grupo de personas, para crear una institución sin fines de lucro que no sea gremial, ni sectorial, ni Departamental; Ser nacional, transversal a todos los sectores.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8;">
              La FUNDACIÓN es la consolidación de la Campaña “Consume lo Nuestro” que inició el año 2001 con resultados exitosos, hoy es nuestra distinción como país.
            </p>
          </div>
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img src="https://images.unsplash.com/photo-1577493340887-b7bfff554c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Historia de la fundación" style="width: 100%; display: block;">
          </div>
        </div>
      </div>
    </section>

    <!-- Misión y Visión -->
    <section class="section section--gray">
      <div class="container">
        <div class="grid grid--2" style="gap: 3rem;">
          <div class="card animated" style="text-align: center; padding: 3rem;">
            <i class="fas fa-bullseye" style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1.5rem;"></i>
            <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 1rem;">Nuestra Misión</h3>
            <p style="color: var(--color-text-muted);">
              Contribuir al desarrollo y la integración de los productos y servicios nacionales, promoviendo todo tipo de actividades de promoción, fomento, capacitación, innovación, premiación e información, articulando actores y recursos para lograr el crecimiento económico y empleo sostenible en un entorno integral y colaborativo.
            </p>
          </div>
          
          <div class="card animated" style="text-align: center; padding: 3rem;">
            <i class="fas fa-eye" style="font-size: 3rem; color: var(--color-secondary); margin-bottom: 1.5rem;"></i>
            <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 1rem;">Nuestra Visión</h3>
            <p style="color: var(--color-text-muted);">
              Consolidarnos como el principal ecosistema empresarial del país, impulsando el desarrollo, la formalización y el crecimiento de emprendedores y PYMEs. A través de una arquitectura integrada de servicios, buscamos fortalecer la competitividad y sostenibilidad del sector productivo nacional.
            </p>
          </div>
        </div>
      </div>
    </section>'''

# Fix the title
header = header.replace('<title>Fundación Hecho en Bolivia — Promoviendo lo Nuestro</title>', '<title>Quiénes Somos | Fundación Hecho en Bolivia</title>')

with open('quienes-somos.html', 'w', encoding='utf8') as f:
    f.write(header + main_content + footer)
