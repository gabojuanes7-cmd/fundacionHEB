import sys

with open('sello.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace title
content = content.replace('<title>Marca Hecho en Bolivia', '<title>VAON')
content = content.replace('<meta name="description" content="Conoce todo sobre la Marca Hecho en Bolivia', '<meta name="description" content="Certificación VAON')

main_start = content.find('<main>')
main_end = content.find('</main>') + len('</main>')

if main_start != -1 and main_end != -1:
    new_main = '''<main>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 style="font-size: 3.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Certificación VAON</h1>
        <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">Valor Agregado de Origen Nacional.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Sello VAON -->
        <div class="grid grid--2" style="gap: 4rem; align-items: center;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border-color); background: var(--bg-card); padding: 1rem;">
            <img src="assets/images/VAON.png" alt="Certificación VAON" style="width: 100%; display: block; border-radius: var(--radius-md);">
          </div>
          <div>
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
              <span style="display: inline-block; width: 30px; height: 2px; background-color: var(--primary); margin-right: 10px;"></span>
              <span style="color: var(--primary); font-weight: bold; text-transform: uppercase; font-size: 0.9rem;">PARA PRODUCTOS IGUAL O MAYOR AL 51% de VAON</span>
            </div>
            <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin-bottom: 1.5rem; font-weight: 700; text-transform: uppercase;">SI ES PRODUCTO NACIONAL – <span style="color: var(--primary);">Certifícalo!</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 2rem; text-align: justify;">
              Cuando una mercancía incorpora insumos o materias primas dentro de su proceso productivo, existe la posibilidad de formular reglas que favorezcan la producción nacional basándose en criterios económicos, como por ejemplo, que el componente del costo, confiera un porcentaje de valor que se agrega a la mercancía en el territorio nacional, en base a la materia prima empleada, mano de obra e insumos, para que la misma sea considerada como de origen nacional, vale decir producida en Bolivia.
            </p>
            <a href="docs/Dossier_FHB.pdf" target="_blank" class="btn btn--primary" style="background-color: #B91C1C; border-radius: 4px; padding: 0.8rem 1.5rem; font-weight: 600;">Solicitud de Certificación <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
          </div>
        </div>
      </div>
    </section>
  </main>'''
    
    content = content[:main_start] + new_main + content[main_end:]
    with open('vaon.html', 'w', encoding='utf-8') as f:
        f.write(content)
