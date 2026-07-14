import re

with open('directorio.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacement = """            <h2>Nuestros Servidores</h2>
      <p>La Fundación Hecho en Bolivia está liderada por profesionales comprometidos con el desarrollo nacional y la promoción de nuestra identidad.</p>
      
      <div class="grid grid--2 mt-8">
        <!-- Gerente General -->
        <div class="card p-4 text-center" style="border-top: 4px solid var(--primary); display: flex; flex-direction: column; align-items: center;">
          <div style="width: 100px; height: 100px; border-radius: 50%; background: var(--bg-secondary); margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-md); overflow: hidden;">
            <img src="assets/images/oscar-buendia.jpg" alt="Lic. Oscar Buendia Miranda" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1.5rem; color: var(--text-primary);">Lic. Oscar Buendia Miranda</h3>
          <span style="display: inline-block; padding: 0.25rem 1rem; background: rgba(var(--primary-rgb), 0.1); color: var(--primary); border-radius: var(--radius-full); font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Gerente General</span>
          <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5;">Líder de la administración y representación de la Fundación, velando por el cumplimiento de los objetivos estratégicos.</p>
        </div>

        <!-- Comité Técnico -->"""

content = re.sub(r'<div class="content-wrapper prose dark:prose-invert max-w-none">\s*<!-- Comité Técnico -->', 
                 '<div class="content-wrapper prose dark:prose-invert max-w-none">\n              \n' + replacement, 
                 content, flags=re.DOTALL)

with open('directorio.html', 'w', encoding='utf-8') as f:
    f.write(content)
