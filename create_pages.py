import shutil

new_pages = {
    'reconocimientos.html': 'Reconocimientos',
    'vaon.html': 'VAON',
    'red-marcas.html': 'Red de Marcas',
    'asistencia-tecnica.html': 'Asistencia Técnica',
    'sistemas-gestion.html': 'Sistemas de Gestión',
    'radio-online.html': 'Radio Online HB',
    'spots.html': 'Spots',
    'revista-origen.html': 'Revista Origen',
    'economia-creativa.html': 'Economía Creativa',
}

# Create placeholder pages based on dossier.html
for page_name, title in new_pages.items():
    with open('dossier.html', 'r', encoding='utf8') as f:
        content = f.read()
    
    # Replace titles
    content = content.replace('Dossier Consolidación', title)
    content = content.replace('El Dossier Consolidación es un documento', f'{title} es una nueva sección en construcción.')
    
    with open(page_name, 'w', encoding='utf8') as f:
        f.write(content)

# Update sello.html title
with open('sello.html', 'r', encoding='utf8') as f:
    sello = f.read()
sello = sello.replace('Sello Hecho en Bolivia', 'Marca Hecho en Bolivia')
sello = sello.replace('Uso del Sello', 'Uso de la Marca')
with open('sello.html', 'w', encoding='utf8') as f:
    f.write(sello)

# Update capacitate.html title
with open('capacitate.html', 'r', encoding='utf8') as f:
    capa = f.read()
capa = capa.replace('Capacítate', 'Academia FHB')
capa = capa.replace('Capacitación y formación continua', 'Programa integral de formación diseñado para emprendedores y PyMEs que buscan ser exitosos. A través de cursos online, mentorías, módulos de autoaprendisaje y una comunidad colaborativa.')
with open('capacitate.html', 'w', encoding='utf8') as f:
    f.write(capa)

