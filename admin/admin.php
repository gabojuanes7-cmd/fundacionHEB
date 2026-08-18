<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel de Administración | Hecho en Bolivia</title>
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../css/admin.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="admin-body">

  <!-- LOGIN SECTION -->
  <div id="login-section" class="admin-login-container">
    <div class="admin-login-card">
      <h2><i class="fas fa-lock"></i> Acceso Administrador</h2>
      <p>Ingresa tus credenciales para gestionar el contenido de la Fundación.</p>
      <form id="login-form">
        <div class="form-group">
          <label for="admin-email">Correo Electrónico</label>
          <input type="email" id="admin-email" required placeholder="correo@ejemplo.com">
        </div>
        <div class="form-group">
          <label for="admin-password">Contraseña</label>
          <input type="password" id="admin-password" required placeholder="********">
        </div>
        <div id="login-error" class="error-msg" style="display:none; color: red; margin-bottom: 1rem;">Credenciales incorrectas.</div>
        <button type="submit" class="btn btn--primary" style="width: 100%;">Ingresar</button>
      </form>
    </div>
  </div>

  <!-- DASHBOARD SECTION -->
  <div id="dashboard-section" class="admin-dashboard" style="display:none;">
    
    <!-- Sidebar -->
    <aside class="admin-sidebar">
      <div class="sidebar-header">
        <h3>HECHO EN <span>BOLIVIA</span></h3>
        <p>Panel de Control</p>
      </div>
      <nav class="sidebar-nav">
        <button class="tab-btn" data-target="solicitudes"><i class="fas fa-file-signature"></i> Solicitudes</button>
        <button class="tab-btn active" data-target="noticias"><i class="fas fa-newspaper"></i> Noticias</button>
        <button class="tab-btn" data-target="publicaciones"><i class="fas fa-book"></i> Publicaciones</button>
        <button class="tab-btn" data-target="actividades"><i class="fas fa-calendar-alt"></i> Actividades</button>
        <button class="tab-btn" data-target="capacitaciones"><i class="fas fa-graduation-cap"></i> Capacítate</button>
        <button class="tab-btn" data-target="pulso"><i class="fas fa-chart-line"></i> Pulso Económico</button>
        <button class="tab-btn" data-target="directorio"><i class="fas fa-building"></i> Directorio</button>
        <button class="tab-btn" data-target="galeria"><i class="fas fa-images"></i> Galería/Slider</button>
        <button class="tab-btn" data-target="configuracion"><i class="fas fa-cog"></i> Configuración</button>
        <button class="tab-btn" data-target="logout"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="admin-main">
      
      <!-- SOLICITUDES TAB -->
      <section id="tab-solicitudes" class="tab-content" style="display:none;">
        <h2>Bandeja de Entrada: Solicitudes y Mensajes</h2>
        
        <!-- Certificaciones -->
        <div class="admin-card list-card" style="margin-bottom: 2rem;">
          <h3 style="color: var(--admin-primary);"><i class="fas fa-certificate"></i> Certificaciones y Afiliaciones</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre / Empresa</th>
                <th>Tipo de Sello</th>
                <th>Contacto</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-solicitudes-cert">
              <!-- Datos -->
            </tbody>
          </table>
        </div>

        <!-- Contactos -->
        <div class="admin-card list-card" style="margin-bottom: 2rem;">
          <h3 style="color: var(--admin-secondary);"><i class="fas fa-envelope"></i> Mensajes de Contacto Web</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Asunto</th>
                <th>Contacto</th>
                <th>Mensaje</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-solicitudes-contacto">
              <!-- Datos -->
            </tbody>
          </table>
        </div>

        <!-- Voluntariado -->
        <div class="admin-card list-card">
          <h3 style="color: #10b981;"><i class="fas fa-hands-helping"></i> Postulaciones de Voluntariado</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Área de Interés</th>
                <th>Correo</th>
                <th>Motivación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-solicitudes-voluntariado">
              <!-- Datos -->
            </tbody>
          </table>
        </div>

        <!-- Cursos -->
        <div class="admin-card list-card" style="margin-top: 2rem;">
          <h3 style="color: #8b5cf6;"><i class="fas fa-graduation-cap"></i> Inscripciones a Cursos</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Curso</th>
                <th>Contacto</th>
                <th>Mensaje / Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-solicitudes-cursos">
              <!-- Datos -->
            </tbody>
          </table>
        </div>
      </section>

      <!-- NOTICIAS TAB -->
      <section id="tab-noticias" class="tab-content active">
        <h2>Gestionar Noticias</h2>
        
        <div class="admin-card form-card">
          <h3>Publicar Nueva Noticia</h3>
          <form id="form-noticia">
            <div class="form-group">
              <label>Título de la Noticia</label>
              <input type="text" id="noticia-titulo" required>
            </div>
            <div class="form-group">
              <label>Categoría</label>
              <select id="noticia-categoria" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--admin-border); border-radius: var(--admin-radius-sm); font-family: inherit; background: #f9fafb;">
                <option value="nacional">Nacional</option>
                <option value="internacional">Internacional</option>
                <option value="institucional">Institucional</option>
                <option value="pulso">Pulso Económico</option>
              </select>
            </div>
            <div class="form-group">
              <label>Fecha</label>
              <input type="date" id="noticia-fecha" required>
            </div>
            <div class="form-group">
              <label>URL de la Imagen de Portada (Puedes subirla gratis a Postimages.org y pegar el link aquí)</label>
              <input type="url" id="noticia-imagen" placeholder="https://ejemplo.com/imagen.jpg" required>
            </div>
            <div class="form-group">
              <label>Contenido Completo (Puedes usar HTML básico o saltos de línea)</label>
              <textarea id="noticia-contenido" rows="6" required></textarea>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-noticia">Publicar Noticia</button>
            <div id="noticia-loading" class="loading-spinner" style="display:none;">Cargando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Noticias Publicadas</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Título</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-noticias">
              <!-- Datos de Firebase -->
            </tbody>
          </table>
        </div>
      </section>

      <!-- DIRECTORIO TAB -->
      <section id="tab-directorio" class="tab-content" style="display:none;">
        <h2>Gestionar Directorio de Empresas</h2>
        
        <div class="admin-card form-card">
          <h3>Agregar Empresa Afiliada</h3>
          <form id="form-empresa">
            <div class="form-group">
              <label>Nombre de la Empresa</label>
              <input type="text" id="empresa-nombre" required>
            </div>
            <div class="form-group">
              <label>Tipo de Afiliación</label>
              <select id="empresa-tipo" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--admin-border); border-radius: var(--admin-radius-sm); font-family: inherit; background: #f9fafb;">
                <option value="miembro">Empresa Miembro</option>
                <option value="alianza">Alianza Interinstitucional</option>
                <option value="mercado">Mercado Interno</option>
              </select>
            </div>
            <div class="form-group">
              <label>Categoría (Ej. Alimentos, Tecnología, etc.)</label>
              <input type="text" id="empresa-categoria" required>
            </div>
            <div class="form-group">
              <label>Página Web o Facebook (Enlace completo con https://)</label>
              <input type="url" id="empresa-link" required>
            </div>
            <div class="form-group">
              <label>URL del Logo de la Empresa (Pega el link de la imagen)</label>
              <input type="url" id="empresa-logo" placeholder="https://ejemplo.com/logo.png" required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-empresa">Agregar Empresa</button>
            <div id="empresa-loading" class="loading-spinner" style="display:none;">Cargando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Empresas en el Directorio</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Tipo</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-empresas">
              <!-- Datos de Firebase -->
            </tbody>
          </table>
        </div>
      </section>

      <!-- PUBLICACIONES TAB -->
      <section id="tab-publicaciones" class="tab-content" style="display:none;">
        <h2>Gestionar Publicaciones</h2>
        
        <div class="admin-card form-card">
          <h3>Subir Nueva Publicación (Revistas, Guías)</h3>
          <form id="form-publicacion">
            <div class="form-group">
              <label>Título de la Publicación</label>
              <input type="text" id="pub-titulo" required>
            </div>
            <div class="form-group">
              <label>URL de la Portada (Imagen)</label>
              <input type="url" id="pub-portada" placeholder="https://ejemplo.com/portada.jpg" required>
            </div>
            <div class="form-group">
              <label>URL del Documento PDF</label>
              <input type="url" id="pub-pdf" placeholder="https://ejemplo.com/documento.pdf" required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-pub">Publicar</button>
            <div id="pub-loading" class="loading-spinner" style="display:none;">Cargando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Publicaciones Actuales</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-publicaciones">
            </tbody>
          </table>
        </div>
      </section>

      <!-- ACTIVIDADES TAB -->
      <section id="tab-actividades" class="tab-content" style="display:none;">
        <h2>Gestionar Actividades (Cursos, Seminarios)</h2>
        
        <div class="admin-card form-card">
          <h3>Agregar Nueva Actividad</h3>
          <form id="form-actividad">
            <div class="form-group">
              <label>Título de la Actividad</label>
              <input type="text" id="act-titulo" required>
            </div>
            <div class="form-group">
              <label>URL del Afiche (Imagen)</label>
              <input type="url" id="act-afiche" placeholder="https://ejemplo.com/afiche.jpg" required>
            </div>
            <div class="form-group">
              <label>URL de Inscripción o Más Info</label>
              <input type="url" id="act-link" placeholder="https://forms.gle/..." required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-act">Publicar Actividad</button>
            <div id="act-loading" class="loading-spinner" style="display:none;">Cargando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Actividades Publicadas</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-actividades">
            </tbody>
          </table>
        </div>
      </section>

      <!-- CAPACITACIONES TAB -->
      <section id="tab-capacitaciones" class="tab-content" style="display:none;">
        <h2>Gestionar Capacítate Bolivia</h2>
        
        <div class="admin-card form-card">
          <h3>Subir Nuevo Curso/Taller</h3>
          <form id="form-capacitacion">
            <div class="form-group">
              <label>Título del Curso</label>
              <input type="text" id="cap-titulo" required>
            </div>
            <div class="form-group">
              <label>URL del Flyer (Imagen)</label>
              <input type="url" id="cap-flyer" placeholder="https://ejemplo.com/flyer.jpg" required>
            </div>
            <div class="form-group">
              <label>URL de WhatsApp o Registro (Opcional)</label>
              <input type="url" id="cap-contacto" placeholder="https://wa.me/591...">
            </div>
            <div class="form-group">
              <label>Fecha del Curso/Taller</label>
              <input type="date" id="cap-fecha" required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-cap">Subir Capacitación</button>
            <div id="cap-loading" class="loading-spinner" style="display:none;">Cargando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Cursos Publicados</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Título</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-capacitaciones">
            </tbody>
          </table>
        </div>
      </section>

      <!-- PULSO ECONOMICO TAB -->
      <section id="tab-pulso" class="tab-content" style="display:none;">
        <h2>Gestionar Pulso Económico</h2>
        
        <!-- NUEVO: Agregar Enlace de Noticia -->
        <div class="admin-card form-card">
          <h3><i class="fas fa-link"></i> Agregar Enlace de Noticia</h3>
          <p style="margin-bottom: 1rem; color: #666; font-size: 0.9rem;">Agrega enlaces a noticias de periódicos (Los Tiempos, El Deber, Página Siete, etc.) para que aparezcan en el portal del Pulso Económico.</p>
          <form id="form-pulso-noticia">
            <div class="form-group">
              <label>Título de la Noticia</label>
              <input type="text" id="pn-titulo" required placeholder="Ej: Gobierno anuncia nuevas medidas económicas">
            </div>
            <div class="form-group">
              <label>URL del Artículo (enlace al periódico)</label>
              <input type="url" id="pn-url" required placeholder="https://www.lostiempos.com/...">
            </div>
            <div class="form-group">
              <label>Subcategoría</label>
              <select id="pn-subcategoria" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--admin-border); border-radius: var(--admin-radius-sm); font-family: inherit; background: #f9fafb;">
                <option value="Economía">Economía</option>
                <option value="Laboral">Laboral</option>
                <option value="Agricultura">Agricultura</option>
                <option value="Política">Política</option>
                <option value="Industria">Industria</option>
                <option value="Comercio">Comercio Exterior</option>
                <option value="General">General</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tipo</label>
              <select id="pn-tipo" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--admin-border); border-radius: var(--admin-radius-sm); font-family: inherit; background: #f9fafb;">
                <option value="nacional">Nacional</option>
                <option value="internacional">Internacional</option>
              </select>
            </div>
            <div class="form-group">
              <label>Fecha de la Noticia</label>
              <input type="date" id="pn-fecha" required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-pn">Publicar Enlace</button>
            <div id="pn-loading" class="loading-spinner" style="display:none;">Publicando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Noticias del Pulso Publicadas</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Título</th>
                <th>Tipo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-pulso-noticias">
              <!-- Datos de Firebase -->
            </tbody>
          </table>
        </div>

        <!-- Banners de publicidad -->
        <div class="admin-card form-card">
          <h3><i class="fas fa-image"></i> Banners de Publicidad (Carousel Superior)</h3>
          <p style="margin-bottom: 1rem; color: #666; font-size: 0.9rem;">Sube imágenes para el carousel de publicidad que aparece en la parte superior del Pulso Económico.</p>
          <form id="form-pulso-banner">
            <div class="form-group">
              <label>Título / Descripción del Banner</label>
              <input type="text" id="pb-titulo" required placeholder="Ej: Publicidad empresa XYZ">
            </div>
            <div class="form-group">
              <label>URL de la Imagen del Banner</label>
              <input type="url" id="pb-imagen" required placeholder="https://ejemplo.com/banner.jpg">
            </div>
            <div class="form-group">
              <label>URL de destino al hacer clic (Opcional)</label>
              <input type="url" id="pb-url" placeholder="https://ejemplo.com">
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-pb">Agregar Banner</button>
            <div id="pb-loading" class="loading-spinner" style="display:none;">Subiendo...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Banners Activos</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-pulso-banners">
            </tbody>
          </table>
        </div>

        <!-- PDFs de indicadores (existente) -->
        <div class="admin-card form-card">
          <h3><i class="fas fa-file-pdf"></i> Actualizar PDFs de Indicadores</h3>
          <p style="margin-bottom: 1rem; color: #666; font-size: 0.9rem;">Sube tus PDFs a Google Drive, Dropbox, u otro lugar y pega los enlaces públicos aquí.</p>
          <form id="form-pulso">
            <div class="form-group">
              <label>1. URL de Indicadores</label>
              <input type="url" id="pulso-indicadores" placeholder="https://ejemplo.com/indicadores.pdf" required>
            </div>
            <div class="form-group">
              <label>2. URL de Evolución SMN</label>
              <input type="url" id="pulso-smn" placeholder="https://ejemplo.com/smn.pdf" required>
            </div>
            <div class="form-group">
              <label>3. URL de IPC Vecinos</label>
              <input type="url" id="pulso-ipc" placeholder="https://ejemplo.com/ipc.pdf" required>
            </div>
            <div class="form-group">
              <label>4. URL de Tabla de Cotizaciones</label>
              <input type="url" id="pulso-cotizaciones" placeholder="https://ejemplo.com/cotizaciones.pdf" required>
            </div>
            <div class="form-group">
              <label>5. URL de Cargas Sociales</label>
              <input type="url" id="pulso-cargas" placeholder="https://ejemplo.com/cargas.pdf" required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-guardar-pulso">Guardar Enlaces</button>
            <div id="pulso-loading" class="loading-spinner" style="display:none;">Guardando...</div>
          </form>
        </div>

        <!-- Patrocinadores Exclusivos Pulso Económico -->
        <div class="admin-card form-card">
          <h3><i class="fas fa-handshake"></i> Patrocinadores (Exclusivos Pulso Económico)</h3>
          <p style="margin-bottom: 1rem; color: #666; font-size: 0.9rem;">Agrega empresas patrocinadoras que solo se mostrarán en la sección de Pulso Económico.</p>
          <form id="form-pulso-patrocinador">
            <div class="form-group">
              <label>Nombre de la Empresa</label>
              <input type="text" id="pp-nombre" required>
            </div>
            <div class="form-group">
              <label>URL del Logo de la Empresa (Pega el link de la imagen)</label>
              <input type="url" id="pp-logo" placeholder="https://ejemplo.com/logo.png" required>
            </div>
            <div class="form-group">
              <label>Página Web o Facebook (Enlace completo)</label>
              <input type="url" id="pp-link" required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-pp">Agregar Patrocinador</button>
            <div id="pp-loading" class="loading-spinner" style="display:none;">Cargando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Patrocinadores Activos en Pulso</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-pulso-patrocinadores">
            </tbody>
          </table>
        </div>
      </section>

      <!-- GALERIA/SLIDER TAB -->
      <section id="tab-galeria" class="tab-content" style="display:none;">
        <h2>Gestionar Galería / Slider Principal</h2>
        
        <div class="admin-card form-card">
          <h3>Agregar Imagen a la Galería</h3>
          <form id="form-galeria">
            <div class="form-group">
              <label>Título / Descripción</label>
              <input type="text" id="gal-titulo" required>
            </div>
            <div class="form-group">
              <label>Categoría</label>
              <select id="gal-categoria" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--admin-border); border-radius: var(--admin-radius-sm); font-family: inherit; background: #f9fafb;">
                <option value="evento">Eventos</option>
                <option value="feria">Ferias</option>
                <option value="taller">Talleres</option>
                <option value="institucional">Institucional</option>
                <option value="slider">Slider Principal (Hero)</option>
              </select>
            </div>
            <div class="form-group">
              <label>URL de la Imagen (Puedes subirla a Postimages.org y pegar el link)</label>
              <input type="url" id="gal-imagen" placeholder="https://ejemplo.com/foto.jpg" required>
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-publicar-gal">Agregar Imagen</button>
            <div id="gal-loading" class="loading-spinner" style="display:none;">Cargando...</div>
          </form>
        </div>

        <div class="admin-card list-card">
          <h3>Imágenes en Galería</h3>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-galeria">
            </tbody>
          </table>
        </div>
      </section>

      <!-- CONFIGURACION TAB -->
      <section id="tab-configuracion" class="tab-content" style="display:none;">
        <h2>Configuración del Sitio</h2>
        
        <div class="admin-card form-card">
          <h3><i class="fas fa-share-alt"></i> Redes Sociales</h3>
          <p style="margin-bottom: 1rem; color: #666; font-size: 0.9rem;">Edita los enlaces de las redes sociales que aparecen en el footer del sitio.</p>
          <form id="form-config-social">
            <div class="form-group">
              <label><i class="fab fa-facebook"></i> Facebook (URL completa)</label>
              <input type="url" id="cfg-facebook" value="https://www.facebook.com/FundacionHechoBolivia/">
            </div>
            <div class="form-group">
              <label><i class="fab fa-youtube"></i> YouTube (URL completa)</label>
              <input type="url" id="cfg-youtube" value="https://www.youtube.com/channel/UCmrdnziOy67OzB587EJtAdA">
            </div>
            <div class="form-group">
              <label><i class="fab fa-x-twitter"></i> X / Twitter (URL completa)</label>
              <input type="url" id="cfg-twitter" value="https://x.com/FHechoenBolivia">
            </div>
            <div class="form-group">
              <label><i class="fab fa-tiktok"></i> TikTok (URL completa)</label>
              <input type="url" id="cfg-tiktok" value="https://www.tiktok.com/@hechoenbolivia">
            </div>
            <div class="form-group">
              <label><i class="fab fa-whatsapp"></i> WhatsApp (Número con código país, ej: 59171411888)</label>
              <input type="text" id="cfg-whatsapp" value="59171411888">
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-guardar-social">Guardar Redes Sociales</button>
            <div id="social-loading" class="loading-spinner" style="display:none;">Guardando...</div>
          </form>
        </div>

        <div class="admin-card form-card">
          <h3><i class="fas fa-id-card"></i> Datos de Contacto</h3>
          <form id="form-config-contacto">
            <div class="form-group">
              <label>Correo Electrónico</label>
              <input type="email" id="cfg-email" value="fundacionhechoenbolivia@gmail.com">
            </div>
            <div class="form-group">
              <label>Dirección Física</label>
              <input type="text" id="cfg-direccion" value="Calle Obispo Anaya N° 518, Cochabamba">
            </div>
            <div class="form-group">
              <label>Teléfono / Celular</label>
              <input type="text" id="cfg-telefono" value="+591 71411888">
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-guardar-contacto">Guardar Datos de Contacto</button>
            <div id="contacto-loading" class="loading-spinner" style="display:none;">Guardando...</div>
          </form>
        </div>

        <div class="admin-card form-card">
          <h3><i class="fas fa-users-cog"></i> Directorio de la Junta</h3>
          <p style="margin-bottom: 1rem; color: #666; font-size: 0.9rem;">Edita los miembros del directorio que aparecen en la página "Directorio".</p>
          <form id="form-config-junta">
            <div class="form-group">
              <label>Presidente</label>
              <input type="text" id="cfg-presidente" value="Ing. Luis Fernando Laredo Arellano">
            </div>
            <div class="form-group">
              <label>Vicepresidente</label>
              <input type="text" id="cfg-vicepresidente" value="Ing. Milton Alberto Encinas Montaño">
            </div>
            <div class="form-group">
              <label>Tesorera</label>
              <input type="text" id="cfg-tesorera" value="Lic. Tania Elizabeth Claros Vargas">
            </div>
            <div class="form-group">
              <label>Secretario</label>
              <input type="text" id="cfg-secretario" value="">
            </div>
            <button type="submit" class="btn btn--secondary" id="btn-guardar-junta">Guardar Directorio</button>
            <div id="junta-loading" class="loading-spinner" style="display:none;">Guardando...</div>
          </form>
        </div>
      </section>

    </main>
  </div>

  <script type="module" src="../js/admin.js"></script>
</body>
</html>
