import re

with open("voluntariado.html", "r", encoding="utf8") as f:
    content = f.read()

old_p = """            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Ser voluntario en la Fundación "Hecho en Bolivia" significa ser parte de un movimiento que impulsa la economía del país, apoyando a nuestros emprendedores y empresas.
            </p>"""

new_p = """            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
              Únete a nuestra misión de impulsar el valor de las ideas en acción. Juntos construimos cambio y desarrollo país. Generamos impacto social. 'Hecho en Bolivia'.
            </p>"""

old_select = """              <select required style="width: 100%; padding: 0.8rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-background-alt); color: var(--color-text);">
                <option value="">Selecciona un área</option>
                <option value="eventos">Organización de Eventos</option>
                <option value="marketing">Marketing y Redes Sociales</option>
                <option value="legal">Asesoría Legal y Trámites</option>
                <option value="capacitacion">Educación y Capacitación</option>
              </select>"""

new_select = """              <select required style="width: 100%; padding: 0.8rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-background-alt); color: var(--color-text);">
                <option value="">Selecciona un área</option>
                <option value="eventos">Organización de eventos</option>
                <option value="marketing">Marketing y Redes Sociales</option>
                <option value="proyectos">Proyectos</option>
                <option value="capacitacion">Capacitación</option>
                <option value="adm">Adm. Y Contabilidad</option>
                <option value="sistemas">Sistemas</option>
                <option value="otros">Otros</option>
              </select>"""

content = content.replace(old_p, new_p)
content = content.replace(old_select, new_select)

with open("voluntariado.html", "w", encoding="utf8") as f:
    f.write(content)
