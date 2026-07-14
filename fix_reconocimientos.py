with open('index.html', 'r', encoding='utf8') as f:
    idx = f.read()

header = idx.split('<main>')[0] + '<main>\n'
footer = '\n  </main>\n' + idx.split('</main>')[1]

main_content = '''    <!-- Hero -->
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('assets/images/gallery-event.png') center/cover;">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading); color: white;">Reconocimientos</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9; color: white;">En su trayectoria institucional, la Fundación Hecho en Bolivia ha sido distinguida por diversas entidades nacionales en reconocimiento a su aporte sostenido al desarrollo productivo, social y cultural del país.</p>
      </div>
    </section>

    <section class="section section--gray">
      <div class="container">
        <div class="grid grid--2" style="gap: 2rem;">
          
          <div class="card animated" style="padding: 2.5rem; text-align: center;">
            <div style="width: 80px; height: 80px; background: rgba(var(--color-primary-rgb), 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
              <i class="fas fa-dove" style="font-size: 2.5rem; color: var(--color-primary);"></i>
            </div>
            <h3 style="margin-bottom: 1rem; font-family: var(--font-heading); font-size: 1.5rem;">"Construyendo la Paz"</h3>
            <p style="color: var(--color-text-muted);">Reconocimiento por su compromiso con la formación y acompañamiento de futuros emprendedores.</p>
          </div>

          <div class="card animated" style="padding: 2.5rem; text-align: center;">
            <div style="width: 80px; height: 80px; background: rgba(var(--color-secondary-rgb), 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
              <i class="fas fa-globe-americas" style="font-size: 2.5rem; color: var(--color-secondary);"></i>
            </div>
            <h3 style="margin-bottom: 1rem; font-family: var(--font-heading); font-size: 1.5rem;">Proyección Internacional</h3>
            <p style="color: var(--color-text-muted);">Distinciones por su apoyo a la producción nacional con proyección y alcance en mercados internacionales.</p>
          </div>

          <div class="card animated" style="padding: 2.5rem; text-align: center;">
            <div style="width: 80px; height: 80px; background: rgba(46, 204, 113, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
              <i class="fas fa-leaf" style="font-size: 2.5rem; color: #2ecc71;"></i>
            </div>
            <h3 style="margin-bottom: 1rem; font-family: var(--font-heading); font-size: 1.5rem;">"Sembrando Vida"</h3>
            <p style="color: var(--color-text-muted);">Reconocimientos por su activa participación e impacto en la campaña ecológica y social.</p>
          </div>

          <div class="card animated" style="padding: 2.5rem; text-align: center;">
            <div style="width: 80px; height: 80px; background: rgba(155, 89, 182, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
              <i class="fas fa-palette" style="font-size: 2.5rem; color: #9b59b6;"></i>
            </div>
            <h3 style="margin-bottom: 1rem; font-family: var(--font-heading); font-size: 1.5rem;">Arte y Cultura</h3>
            <p style="color: var(--color-text-muted);">Méritos por su contribución efectiva al desarrollo del arte y la cultura en el Estado Plurinacional de Bolivia.</p>
          </div>

        </div>
        
        <div class="text-center" style="margin-top: 3rem; max-width: 800px; margin-left: auto; margin-right: auto;">
            <p style="font-size: 1.1rem; color: var(--color-text-muted); font-style: italic;">"Estas distinciones reflejan el impacto integral de la Fundación, no solo en el ámbito empresarial, sino también en la construcción de ciudadanía, identidad productiva y fortalecimiento del tejido social a nivel nacional."</p>
        </div>
      </div>
    </section>'''

header = header.replace('<title>Fundación Hecho en Bolivia — Promoviendo lo Nuestro</title>', '<title>Reconocimientos | Fundación Hecho en Bolivia</title>')
header = header.replace('nav__link--active', '')
header = header.replace('href="reconocimientos.html" class="dropdown__link"', 'href="reconocimientos.html" class="dropdown__link active"')

with open('reconocimientos.html', 'w', encoding='utf8') as f:
    f.write(header + main_content + footer)
