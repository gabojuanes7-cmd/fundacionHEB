import re

with open('directorio.html', 'r', encoding='utf-8') as f:
    content = f.read()

missing_part = """      </div>

      <h2 style="margin-top: 3rem;">Miembros</h2>
      <p>Conoce a las 9 empresas miembro que forman parte de la Fundación Hecho en Bolivia y que llevan nuestra marca con orgullo.</p>
      
      <!-- Buscador y Filtros -->
      <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <div style="flex: 1; min-width: 250px;">
          <label for="search-directorio" style="display: block; font-weight: bold; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">Buscar Empresa</label>
          <div style="position: relative;">
            <i class="fas fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
            <input type="text" id="search-directorio" placeholder="Escribe el nombre..." style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; background: var(--bg-body); color: var(--text-primary);">
          </div>
        </div>
        <div style="flex: 1; min-width: 250px;">"""

# We replace the malformed transition:
#       </div>
#         <div style="flex: 1; min-width: 250px;">
#           <label for="filter-categoria"
content = re.sub(r'</div>\s*<div style="flex: 1; min-width: 250px;">\s*<label for="filter-categoria"', missing_part + '\n          <label for="filter-categoria"', content)

with open('directorio.html', 'w', encoding='utf-8') as f:
    f.write(content)
