import re

# Fix sello.html
with open('sello.html', 'r', encoding='utf8') as f:
    sello_content = f.read()

sello_text = '''          <div>
            <span class="section-label">Marca País</span>
            <h2 class="section-title">El valor de lo <span class="text-gradient">Nuestro</span></h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Es una certificación oficial que distingue a los productos y servicios que cumplen con criterios de origen. Su importancia radica en que garantiza al consumidor la autenticidad y calidad de lo hecho en el país, fortaleciendo la confianza en la producción local y diferenciándola frente a lo importado o ensamblado.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Para las empresas, representa un respaldo institucional que incrementa su credibilidad, visibilidad y competitividad tanto en el mercado interno como en el internacional, convirtiéndose en un símbolo de orgullo nacional y en una herramienta estratégica para posicionar la identidad productiva boliviana.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              <strong>Distinción de Origen:</strong> Gracias al alcance digital, amplía la presencia de las marcas emergentes, fortaleciendo el valor agregado nacional y proyectando lo Hecho en Bolivia hacia lo internacional.
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Visita nuestra página en Facebook para conocer más: <br>
              <a href="https://www.facebook.com/CadenaHB/?locale=es_LA" target="_blank" style="color: var(--color-primary); text-decoration: underline;"><i class="fab fa-facebook"></i> CadenaHB</a>
            </p>
            <a href="contacto.html" class="btn btn--primary">Solicitar Sello</a>
          </div>
          <div style="text-align: center; padding: 2rem; background: var(--color-background-alt); border-radius: var(--radius-lg);">
            <i class="fas fa-stamp" style="font-size: 6rem; color: var(--color-primary); margin-bottom: 1rem;"></i>
            <h3 style="font-family: var(--font-heading);">Distinción y Calidad</h3>
            <p style="color: var(--color-text-muted);">Más de 500 empresas ya cuentan con este distintivo de calidad nacional.</p>
          </div>'''

# Replace the broken grid content
sello_content = re.sub(r'<div class="grid grid--2".*?<p style="color: var(--color-text-muted);">Más de 500 empresas ya cuentan con este distintivo de calidad nacional.</p>\s*</div>', 
                       '<div class="grid grid--2" style="gap: 4rem; align-items: center;">\n' + sello_text, 
                       sello_content, flags=re.DOTALL)

with open('sello.html', 'w', encoding='utf8') as f:
    f.write(sello_content)

# Fix noticias.html
with open('noticias.html', 'r', encoding='utf8') as f:
    noticias_content = f.read()

noticias_main = '''          <!-- Main Content -->
          <div>
            <!-- Tabs Navigation -->
            <div style="display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 1rem;">
              <button class="btn btn--primary" style="border-radius: var(--radius-full);">Nacionales</button>
              <button class="btn btn--outline" style="border-radius: var(--radius-full);">Internacionales</button>
            </div>

            <div id="noticias-nacionales">
              <h2 style="font-family: var(--font-heading); margin-bottom: 1.5rem;">Noticias Nacionales</h2>
              <!-- Featured News -->
              <div class="card news-featured animate-on-scroll">
                <div class="card__image">
                  <img src="assets/images/project-feria.png" alt="Gran Feria Hecho en Bolivia 2026">
                  <div class="card__image-overlay"></div>
                  <span class="card__badge">Destacado</span>
                </div>
                <div class="card__body">
                  <span class="card__category">Eventos</span>
                  <h2 class="card__title" style="font-size: var(--text-2xl);">Gran Feria Hecho en Bolivia 2026: Más de 200 Expositores Confirmados</h2>
                  <p class="card__text" style="-webkit-line-clamp: 4;">
                    La Fundación Hecho en Bolivia anuncia con orgullo la próxima edición de la feria más importante para productores bolivianos...
                  </p>
                  <div class="card__meta">
                    <span><i class="far fa-calendar"></i> 15 Mayo 2026</span>
                  </div>
                </div>
              </div>
              <div class="card news-featured animate-on-scroll" style="margin-top: 2rem;">
                <div class="card__image">
                  <img src="assets/images/about-artisans.png" alt="Artesanos reciben apoyo">
                  <div class="card__image-overlay"></div>
                </div>
                <div class="card__body">
                  <span class="card__category">Logros</span>
                  <h2 class="card__title" style="font-size: var(--text-2xl);">Artesanos bolivianos reciben apoyo tecnológico</h2>
                  <p class="card__text" style="-webkit-line-clamp: 4;">
                    Nuevos programas de apoyo para el desarrollo de la artesanía local...
                  </p>
                  <div class="card__meta">
                    <span><i class="far fa-calendar"></i> 10 Mayo 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="noticias-internacionales" style="margin-top: 4rem;">
              <h2 style="font-family: var(--font-heading); margin-bottom: 1.5rem;">Noticias Internacionales</h2>
              
              <div class="card news-featured animate-on-scroll">
                <div class="card__image">
                  <img src="assets/images/gallery-landscape.png" alt="Exportación">
                  <div class="card__image-overlay"></div>
                </div>
                <div class="card__body">
                  <span class="card__category">Exportación</span>
                  <h2 class="card__title" style="font-size: var(--text-2xl);">Productos bolivianos llegan a nuevos mercados europeos</h2>
                  <p class="card__text" style="-webkit-line-clamp: 4;">
                    Un importante acuerdo comercial permite la exportación de productos orgánicos a la Unión Europea...
                  </p>
                  <div class="card__meta">
                    <span><i class="far fa-calendar"></i> 05 Mayo 2026</span>
                  </div>
                </div>
              </div>

              <div class="card news-featured animate-on-scroll" style="margin-top: 2rem;">
                <div class="card__image">
                  <img src="assets/images/project-capacitacion.png" alt="Certificación Internacional">
                  <div class="card__image-overlay"></div>
                </div>
                <div class="card__body">
                  <span class="card__category">Certificación</span>
                  <h2 class="card__title" style="font-size: var(--text-2xl);">Empresas nacionales obtienen la certificación ISO internacional</h2>
                  <p class="card__text" style="-webkit-line-clamp: 4;">
                    Reconocimiento a la calidad productiva y a las gestiones de estandarización impulsadas por la Fundación.
                  </p>
                  <div class="card__meta">
                    <span><i class="far fa-calendar"></i> 01 Mayo 2026</span>
                  </div>
                </div>
              </div>

            </div>
          </div>'''

noticias_content = re.sub(r'<!-- Main Content -->\s*<div>\s*<!-- Featured News -->.*?</div>\s*</div>\s*</div>\s*<!-- Sidebar -->',
                          noticias_main + '\n\n          <!-- Sidebar -->',
                          noticias_content, flags=re.DOTALL)

with open('noticias.html', 'w', encoding='utf8') as f:
    f.write(noticias_content)