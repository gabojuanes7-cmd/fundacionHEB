/**
 * public-db.js - Funciones para cargar datos públicos desde el backend PHP
 */

const API_BASE = window.API_BASE || '../api';
const BASE_PATH = window.API_BASE ? window.API_BASE.replace('api', '') : '../';

// Helper: Llamadas a la API
async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE}/${endpoint}`);
  return res.json();
}

async function apiPost(endpoint, data) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

// Helpers de UI
function createNewsCard(data) {
  const card = document.createElement('div');
  card.className = 'card animated news-card-compact';
  const hasImage = data.image_url && data.image_url !== 'assets/images/logo.jfif';
  const cat = data.categoria || data.subcategoria || 'NOTICIA';
  const text = data.contenido || data.resumen || 'Haz clic para leer más detalles sobre esta noticia.';
  const linkHtml = data.url ? `<a href="${data.url}" target="_blank" class="btn btn--outline btn--sm" style="margin-top: 0.75rem; display: block; text-align: center; font-size: 0.8rem;">Leer noticia completa <i class="fas fa-external-link-alt"></i></a>` : '';
  
  const imageBlock = hasImage
    ? `<div class="card__image card__image--compact">
        <img src="${data.image_url}" alt="${data.titulo}" style="object-fit: cover;">
        <div class="card__image-overlay"></div>
      </div>`
    : `<div class="card__image-placeholder">
        <i class="fas fa-newspaper"></i>
      </div>`;
  
  card.innerHTML = `
    ${imageBlock}
    <div class="card__body" style="padding: 1rem;">
      <span class="card__category">${cat.toUpperCase()}</span>
      <h3 class="card__title" style="font-size: 1rem; margin: 0.3rem 0;">${data.titulo}</h3>
      <p class="card__text" style="font-size: 0.85rem; -webkit-line-clamp: 2;">${text.substring(0, 90)}...</p>
      <div class="card__meta" style="font-size: 0.75rem;">
        <span><i class="far fa-calendar"></i> ${data.fecha || 'Reciente'}</span>
      </div>
      ${linkHtml}
    </div>
  `;
  return card;
}

function createCompanyCard(data) {
  const card = document.createElement('a');
  card.href = data.link;
  card.target = "_blank";
  card.className = 'card animated';
  card.style.display = 'block';
  card.style.textDecoration = 'none';
  card.style.color = 'inherit';
  card.style.textAlign = 'center';
  card.style.padding = '1.5rem';
  card.style.minWidth = '200px';

  card.innerHTML = `
    <img src="${data.logo_url}" alt="${data.nombre}" style="max-height: 80px; width: auto; margin: 0 auto 1rem auto; display: block;">
    <h4 style="margin:0; color: var(--color-primary); font-family: var(--font-heading); font-size: 1.1rem;">${data.nombre}</h4>
    <span style="font-size: 0.8rem; color: var(--color-text-muted); background: var(--color-background-alt); padding: 0.2rem 0.6rem; border-radius: 12px; display: inline-block; margin-top: 0.5rem;">${data.categoria || 'Directorio'}</span>
  `;
  return card;
}

function timeAgo(dateStr) {
  if (!dateStr) return '';
  const now = new Date();
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) return 'hace un momento';
  if (diffInSeconds < 3600) return `hace ${Math.floor(diffInSeconds / 60)} m`;
  if (diffInSeconds < 86400) return `hace ${Math.floor(diffInSeconds / 3600)} h`;
  if (diffInSeconds < 2592000) return `hace ${Math.floor(diffInSeconds / 86400)} d`;
  return dateStr;
}

// =====================================
// FUNCIONES PÚBLICAS (Home)
// =====================================

export async function loadHomeNews() {
  const containerNacional = document.getElementById('home-news-nacional-container');
  const containerInternacional = document.getElementById('home-news-internacional-container');
  if (!containerNacional && !containerInternacional) return;

  try {
    const rows = await apiGet('crud.php?table=noticias');
    if (containerNacional) containerNacional.innerHTML = '';
    if (containerInternacional) containerInternacional.innerHTML = '';

    let countNacional = 0;
    let countInternacional = 0;

    rows.forEach((data) => {
      const card = createNewsCard(data);
      if (data.categoria === 'nacional' && countNacional < 2 && containerNacional) {
        containerNacional.appendChild(card);
        countNacional++;
      } else if (data.categoria === 'internacional' && countInternacional < 2 && containerInternacional) {
        containerInternacional.appendChild(card);
        countInternacional++;
      } else if (!data.categoria && countNacional < 2 && containerNacional) {
        containerNacional.appendChild(card);
        countNacional++;
      }
    });

    if (countNacional === 0 && containerNacional) containerNacional.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted);">No hay noticias nacionales publicadas.</div>';
    if (countInternacional === 0 && containerInternacional) containerInternacional.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted);">No hay noticias internacionales publicadas.</div>';
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadHomeDirectorio() {
  const containerMiembros = document.getElementById('home-empresas-container');
  const containerAlianzas = document.getElementById('home-alianzas-container');
  if (!containerMiembros && !containerAlianzas) return;

  try {
    const rows = await apiGet('crud.php?table=directorio');
    if (containerMiembros) containerMiembros.innerHTML = '';
    if (containerAlianzas) containerAlianzas.innerHTML = '';

    rows.forEach((data) => {
      const card = createCompanyCard(data);
      if (data.tipo === 'miembro' && containerMiembros) {
        containerMiembros.appendChild(card);
      } else if (data.tipo === 'alianza' && containerAlianzas) {
        containerAlianzas.appendChild(card);
      } else if (!data.tipo && containerMiembros) {
        containerMiembros.appendChild(card);
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadPublicaciones() {
  const container = document.getElementById('home-publicaciones-container');
  if (!container) return;

  container.innerHTML = '<div style="color: var(--color-text-muted);">Cargando...</div>';
  try {
    const rows = await apiGet('crud.php?table=publicaciones');
    if (rows.length === 0) {
      container.innerHTML = '<div style="color: var(--color-text-muted);">No hay publicaciones aún.</div>';
      return;
    }

    container.innerHTML = '';
    rows.forEach((data) => {
      const card = document.createElement('a');
      card.href = data.pdf_url;
      card.target = "_blank";
      card.className = 'card animated';
      card.style.display = 'block';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      
      card.innerHTML = `
        <div class="card__image" style="padding-top: 140%;">
          <img src="${data.portada_url}" alt="${data.titulo}" style="object-fit: cover; position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
          <div class="card__image-overlay"><i class="fas fa-file-pdf" style="font-size: 3rem; color: white;"></i></div>
        </div>
        <div class="card__body" style="padding: 1.5rem; text-align: center;">
          <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-primary); font-family: var(--font-heading);">${data.titulo}</h3>
          <div class="btn btn--outline btn--sm" style="margin-top: 1rem; width: 100%;">Leer más <i class="fas fa-external-link-alt"></i></div>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadActividades() {
  const container = document.getElementById('home-actividades-container');
  if (!container) return;

  container.innerHTML = '<div style="color: var(--color-text-muted);">Cargando...</div>';
  try {
    const rows = await apiGet('crud.php?table=actividades');
    if (rows.length === 0) {
      container.innerHTML = '<div style="color: var(--color-text-muted);">No hay actividades aún.</div>';
      return;
    }

    container.innerHTML = '';
    rows.forEach((data) => {
      const card = document.createElement('a');
      card.href = data.link_url;
      card.target = "_blank";
      card.className = 'card animated';
      card.style.display = 'block';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      
      card.innerHTML = `
        <div class="card__image" style="padding-top: 140%;">
          <img src="${data.afiche_url}" alt="${data.titulo}" style="object-fit: cover; position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
        </div>
        <div class="card__body" style="padding: 1.5rem; text-align: center;">
          <h3 style="margin: 0; font-size: 1.1rem; color: var(--color-secondary); font-family: var(--font-heading);">${data.titulo}</h3>
          <div class="btn btn--outline btn--sm" style="margin-top: 1rem; width: 100%;">Leer más <i class="fas fa-external-link-alt"></i></div>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// =====================================
// PÁGINAS INDIVIDUALES
// =====================================

export async function loadPublicNews() {
  const containerNac = document.getElementById('noticias-nacionales-container');
  const containerIntl = document.getElementById('noticias-internacionales-container');
  const containerInst = document.getElementById('noticias-institucional-container');
  const containerPulso = document.getElementById('noticias-pulso-container');
  if (!containerNac && !containerIntl && !containerInst && !containerPulso) return;
  
  try {
    const [pulsoNews, localNews] = await Promise.all([
      apiGet('crud.php?table=pulso_noticias'),
      apiGet('crud.php?table=noticias')
    ]);
    
    let allNews = [];

    pulsoNews.forEach(d => {
      allNews.push({ ...d, image_url: d.image_url || 'assets/images/logo.jfif', isIntl: d.tipo === 'internacional', srcCollection: 'pulso' });
    });

    localNews.forEach(data => {
      const validCats = ['nacional', 'internacional', 'institucional', 'pulso'];
      if (validCats.includes(data.categoria)) {
        allNews.push({
          titulo: data.titulo,
          url: `${BASE_PATH}info/noticia.php?id=${data.id}`,
          image_url: data.image_url,
          contenido: data.contenido,
          subcategoria: data.categoria === 'pulso' ? 'Pulso' : 'General',
          tipo: data.categoria,
          categoria: data.categoria,
          fecha: data.fecha,
          timestamp: data.timestamp,
          isIntl: data.categoria === 'internacional',
          srcCollection: 'local'
        });
      }
    });

    allNews.sort((a, b) => b.timestamp - a.timestamp);

    if (containerNac) containerNac.innerHTML = '';
    if (containerIntl) containerIntl.innerHTML = '';
    if (containerInst) containerInst.innerHTML = '';
    if (containerPulso) containerPulso.innerHTML = '';

    let countNac = 0, countIntl = 0, countInst = 0, countPulso = 0;

    allNews.forEach(data => {
      const card = createNewsCard(data);
      if (data.categoria === 'nacional' && containerNac) {
        containerNac.appendChild(card); countNac++;
      } else if (data.categoria === 'internacional' && containerIntl) {
        containerIntl.appendChild(card); countIntl++;
      } else if (data.categoria === 'institucional' && containerInst) {
        containerInst.appendChild(card); countInst++;
      } else if (data.categoria === 'pulso' && containerPulso) {
        containerPulso.appendChild(card); countPulso++;
      } else if (data.srcCollection === 'pulso' && data.isIntl && containerIntl) {
        containerIntl.appendChild(card); countIntl++;
      } else if (data.srcCollection === 'pulso' && !data.isIntl && containerNac) {
        containerNac.appendChild(card); countNac++;
      }
    });

    const emptyMsg = msg => `<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color:var(--color-text-muted);">${msg}</div>`;
    
    if (countNac === 0 && containerNac) containerNac.innerHTML = emptyMsg('No hay noticias nacionales publicadas aún.');
    if (countIntl === 0 && containerIntl) containerIntl.innerHTML = emptyMsg('No hay noticias internacionales publicadas aún.');
    if (countInst === 0 && containerInst) containerInst.innerHTML = emptyMsg('No hay noticias institucionales publicadas aún.');
    if (countPulso === 0 && containerPulso) containerPulso.innerHTML = emptyMsg('No hay noticias del Pulso Económico publicadas aún.');
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadPublicDirectory() {
  const container = document.getElementById('dynamic-directory-container');
  const searchInput = document.getElementById('search-directorio');
  const filterSelect = document.getElementById('filter-categoria');
  if (!container) return;
  
  container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;"><i class="fas fa-spinner fa-spin fa-2x"></i><br>Cargando empresas...</div>';
  try {
    const rows = await apiGet('crud.php?table=directorio');
    container.innerHTML = '';
    
    if(rows.length === 0) {
        container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">No hay empresas.</div>';
        return;
    }
    
    const categories = new Set();
    rows.forEach(data => {
      if (data.categoria) categories.add(data.categoria.trim());
    });
    
    if (filterSelect) {
      categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        filterSelect.appendChild(option);
      });
    }

    const renderCompanies = (searchTerm, filterCat) => {
      container.innerHTML = '';
      const term = searchTerm.toLowerCase().trim();
      const cat = filterCat === 'todas' ? '' : filterCat;
      
      const filtered = rows.filter(c => {
        const matchesSearch = c.nombre.toLowerCase().includes(term);
        const matchesCat = cat === '' || (c.categoria && c.categoria.trim() === cat);
        return matchesSearch && matchesCat;
      });
      
      if (filtered.length === 0) {
        container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">No se encontraron empresas con esos criterios.</div>';
        return;
      }
      
      filtered.forEach(c => container.appendChild(createCompanyCard(c)));
    };
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderCompanies(e.target.value, filterSelect ? filterSelect.value : 'todas');
      });
    }
    
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        renderCompanies(searchInput ? searchInput.value : '', e.target.value);
      });
    }

    renderCompanies('', 'todas');

  } catch (error) {
    console.error("Error:", error);
    container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: red;">Error al cargar datos.</div>';
  }
}

// =====================================
// PULSO ECONÓMICO
// =====================================

function createPulsoNewsItem(data, isIntl) {
  const a = document.createElement('a');
  a.href = data.url || '#';
  a.target = data.url ? '_blank' : '_self';
  a.className = `pulso-news-item${isIntl ? ' intl' : ''}`;
  
  const badgeClass = (data.subcategoria || 'general').toLowerCase().replace(/\s/g, '');
  const badgeMap = { economia: 'economia', laboral: 'laboral', agricultura: 'agricultura', politica: 'politica' };
  const badge = badgeMap[badgeClass] || 'general';
  
  a.innerHTML = `
    <div class="news-border"></div>
    <div class="news-content">
      <h3 class="news-title">${data.titulo}</h3>
      <div class="news-meta">
        <span class="news-badge ${badge}">${data.subcategoria || 'General'}</span>
        <span class="news-date">▶ ${timeAgo(data.fecha)}</span>
      </div>
    </div>
    <div class="news-arrow"><i class="fas fa-chevron-right"></i></div>
  `;
  return a;
}

export async function loadPulsoNoticias() {
  const containerNac = document.getElementById('pulso-nacionales-list');
  const containerIntl = document.getElementById('pulso-internacionales-list');
  if (!containerNac && !containerIntl) return;

  try {
    const [pulsoNews, localNews] = await Promise.all([
      apiGet('crud.php?table=pulso_noticias'),
      apiGet('crud.php?table=noticias')
    ]);
    
    let allNews = [];

    pulsoNews.forEach(d => {
      allNews.push({ ...d, isIntl: d.tipo === 'internacional' });
    });

    localNews.forEach(data => {
      if (data.categoria === 'nacional' || data.categoria === 'internacional') {
        allNews.push({
          titulo: data.titulo,
          url: `${BASE_PATH}info/noticia.php?id=${data.id}`,
          subcategoria: 'General',
          tipo: data.categoria,
          fecha: data.fecha,
          timestamp: data.timestamp,
          isIntl: data.categoria === 'internacional'
        });
      }
    });

    allNews.sort((a, b) => b.timestamp - a.timestamp);

    if (containerNac) containerNac.innerHTML = '';
    if (containerIntl) containerIntl.innerHTML = '';

    let countNac = 0, countIntl = 0;

    allNews.forEach(data => {
      if (data.tipo === 'nacional' && containerNac) {
        containerNac.appendChild(createPulsoNewsItem(data, false));
        countNac++;
      } else if (data.tipo === 'internacional' && containerIntl) {
        containerIntl.appendChild(createPulsoNewsItem(data, true));
        countIntl++;
      }
    });

    if (countNac === 0 && containerNac) containerNac.innerHTML = '<div class="pulso-empty"><i class="fas fa-newspaper"></i><p>No hay noticias nacionales publicadas aún.</p></div>';
    if (countIntl === 0 && containerIntl) containerIntl.innerHTML = '<div class="pulso-empty"><i class="fas fa-globe"></i><p>No hay noticias internacionales publicadas aún.</p></div>';
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadPulsoArticulos() {
  const container = document.getElementById('pulso-articulos-list');
  if (!container) return;

  try {
    const rows = await apiGet('crud.php?table=noticias');
    container.innerHTML = '';
    let count = 0;
    rows.forEach(data => {
      if (data.categoria === 'pulso' && count < 6) {
        container.appendChild(createPulsoNewsItem(data, false));
        count++;
      }
    });
    if (count === 0) {
      container.innerHTML = '<div class="pulso-empty"><i class="fas fa-pen-fancy"></i><p>No hay artículos económicos aún.</p></div>';
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadPulsoPatrocinadores() {
  const container = document.getElementById('pulso-sponsors-container');
  if (!container) return;

  try {
    const [directorio, patrocinadores] = await Promise.all([
      apiGet('crud.php?table=directorio'),
      apiGet('crud.php?table=pulso_patrocinadores')
    ]);
    
    container.innerHTML = '';
    let count = 0;
    
    // Primero patrocinadores exclusivos de Pulso
    patrocinadores.forEach(data => {
      if (count < 8) {
        const a = document.createElement('a');
        a.href = data.link || '#';
        a.target = data.link ? '_blank' : '_self';
        a.innerHTML = `<img src="${data.logo_url}" alt="${data.nombre}" style="max-height:60px;">`;
        container.appendChild(a);
        count++;
      }
    });

    // Luego miembros del directorio
    directorio.forEach(data => {
      if (data.tipo === 'miembro' && count < 8) {
        const a = document.createElement('a');
        a.href = data.link || '#';
        a.target = data.link ? '_blank' : '_self';
        a.innerHTML = `<img src="${data.logo_url}" alt="${data.nombre}" style="max-height:60px;">`;
        container.appendChild(a);
        count++;
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadPulsoBanners() {
  const container = document.getElementById('pulso-banners-container');
  if (!container) return;

  try {
    const rows = await apiGet('crud.php?table=pulso_banners');
    container.innerHTML = '';
    rows.forEach(data => {
      const a = document.createElement('a');
      a.href = data.url || '#';
      a.target = data.url ? '_blank' : '_self';
      a.className = 'ad-banner-link';
      a.innerHTML = `<img src="${data.image_url}" alt="${data.titulo}">`;
      container.appendChild(a);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function loadPulsoPDFs() {
  const btns = {
    'btn-cargas': 'cargas_sociales',
    'btn-cotizaciones': 'cotizaciones',
    'btn-ipc': 'ipc',
    'btn-smn': 'smn'
  };

  try {
    const config = await apiGet('configuracion.php?key=pulso_pdfs');
    if (config) {
      for (const [id, key] of Object.entries(btns)) {
        const btn = document.getElementById(id);
        if (btn && config[key]) {
          btn.href = config[key];
          btn.target = "_blank";
        }
      }
    }
  } catch (error) {
    console.error("Error al cargar PDFs de Pulso:", error);
  }
}

// =====================================
// FORMULARIOS PÚBLICOS
// =====================================
export function initForms() {
  const forms = [
    { id: 'form-contacto', table: 'solicitudes', extraData: { tipo: 'Contacto' } },
    { id: 'form-certificacion', table: 'solicitudes', extraData: { tipo: 'Certificación' } },
    { id: 'form-voluntariado', table: 'solicitudes', extraData: { tipo: 'Voluntariado' } }
  ];

  forms.forEach(({id, table, extraData}) => {
    const form = document.getElementById(id);
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if(btn) btn.disabled = true;

      const formData = new FormData(form);
      const data = { ...extraData };
      formData.forEach((value, key) => data[key] = value);

      try {
        await apiPost(`crud.php?table=${table}`, data);
        alert('¡Solicitud enviada exitosamente!');
        form.reset();
      } catch (err) {
        alert('Error al enviar solicitud.');
      } finally {
        if(btn) btn.disabled = false;
      }
    });
  });
}

function initPulsoModals() {
  // Modal de Publicidad
  const pubModal = document.createElement('div');
  pubModal.id = 'pulso-pub-modal';
  pubModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; align-items:center; justify-content:center; padding:1rem; backdrop-filter: blur(4px);';
  pubModal.innerHTML = `
    <div class="animate-slide-up" style="background:white; width:100%; max-width:500px; border-radius:12px; overflow:hidden; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="padding:1.5rem; background:var(--color-primary); color:white; display:flex; justify-content:space-between; align-items:center;">
        <h2 style="margin:0; font-size:1.5rem;"><i class="fas fa-bullhorn"></i> Solicitar Publicidad</h2>
        <button id="pulso-pub-modal-close" style="background:none; border:none; font-size:1.5rem; color:white; cursor:pointer;"><i class="fas fa-times"></i></button>
      </div>
      <form id="form-publicidad" style="padding:2rem;">
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Nombre de Empresa</label>
          <input type="text" id="pub-empresa" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
        </div>
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Persona de Contacto</label>
          <input type="text" id="pub-contacto" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
        </div>
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Correo Electrónico</label>
          <input type="email" id="pub-correo" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
        </div>
        <div style="margin-bottom:1.5rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Detalles de Solicitud</label>
          <textarea id="pub-mensaje" required rows="3" style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;" placeholder="Ej: Me interesa un banner lateral..."></textarea>
        </div>
        <div id="pub-alert" style="display:none; padding:1rem; border-radius:6px; margin-bottom:1rem; font-weight:600; text-align:center;"></div>
        <button type="submit" id="btn-pub-submit" style="width:100%; background:#15803d; color:white; border:none; padding:1rem; border-radius:6px; font-weight:600; cursor:pointer; font-size:1rem; transition:0.2s;"><i class="fas fa-paper-plane"></i> Enviar Solicitud</button>
      </form>
    </div>
  `;
  document.body.appendChild(pubModal);

  document.getElementById('pulso-pub-modal-close').addEventListener('click', () => { pubModal.style.display = 'none'; });
  const pubLink = document.getElementById('pulso-publicidad-link');
  if (pubLink) {
    pubLink.addEventListener('click', (e) => { e.preventDefault(); pubModal.style.display = 'flex'; });
  }

  document.getElementById('form-publicidad').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-pub-submit');
    const alertBox = document.getElementById('pub-alert');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    const data = {
      empresa: document.getElementById('pub-empresa').value,
      contacto: document.getElementById('pub-contacto').value,
      email: document.getElementById('pub-correo').value,
      tipo_publicidad: 'Banner (Pulso)',
      mensaje: document.getElementById('pub-mensaje').value,
    };
    try {
      await apiPost('crud.php?table=solicitudes_publicidad', data);
      alertBox.style.display = 'block'; alertBox.style.backgroundColor = '#dcfce3'; alertBox.style.color = '#16a34a';
      alertBox.textContent = '¡Solicitud enviada! Nos contactaremos pronto.';
      document.getElementById('form-publicidad').reset();
      setTimeout(() => { pubModal.style.display = 'none'; alertBox.style.display = 'none'; }, 3000);
    } catch (e) {
      alertBox.style.display = 'block'; alertBox.style.backgroundColor = '#fee2e2'; alertBox.style.color = '#dc2626';
      alertBox.textContent = 'Error al enviar.';
    } finally {
      btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Solicitud';
    }
  });

  // Modal de Suscripción
  const subModal = document.createElement('div');
  subModal.id = 'pulso-sub-modal';
  subModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; align-items:center; justify-content:center; padding:1rem; backdrop-filter: blur(4px);';
  subModal.innerHTML = `
    <div class="animate-slide-up" style="background:white; width:100%; max-width:500px; border-radius:12px; overflow:hidden; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="padding:1.5rem; background:#dc2626; color:white; display:flex; justify-content:space-between; align-items:center;">
        <h2 style="margin:0; font-size:1.5rem;"><i class="fas fa-envelope-open-text"></i> Suscríbete a Pulso</h2>
        <button id="pulso-sub-modal-close" style="background:none; border:none; font-size:1.5rem; color:white; cursor:pointer;"><i class="fas fa-times"></i></button>
      </div>
      <form id="form-suscripcion" style="padding:2rem;">
        <p style="margin-top:0; color:#4b5563; font-size:0.95rem;">Recibe las últimas noticias económicas.</p>
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Correo Electrónico</label>
          <input type="email" id="sub-correo" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
        </div>
        <div id="sub-alert" style="display:none; padding:1rem; border-radius:6px; margin-bottom:1rem; font-weight:600; text-align:center;"></div>
        <button type="submit" id="btn-sub-submit" style="width:100%; background:#15803d; color:white; border:none; padding:1rem; border-radius:6px; font-weight:600; cursor:pointer; font-size:1rem; transition:0.2s;"><i class="fas fa-check-circle"></i> Suscribirme Ahora</button>
      </form>
    </div>
  `;
  document.body.appendChild(subModal);

  document.getElementById('pulso-sub-modal-close').addEventListener('click', () => { subModal.style.display = 'none'; });
  document.querySelectorAll('.pulso-subscribe').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); subModal.style.display = 'flex'; });
  });

  document.getElementById('form-suscripcion').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-sub-submit');
    const alertBox = document.getElementById('sub-alert');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
    
    try {
      await apiPost('crud.php?table=suscriptores_pulso', { email: document.getElementById('sub-correo').value });
      alertBox.style.display = 'block'; alertBox.style.backgroundColor = '#dcfce3'; alertBox.style.color = '#16a34a';
      alertBox.textContent = '¡Suscripción exitosa!';
      document.getElementById('form-suscripcion').reset();
      setTimeout(() => { subModal.style.display = 'none'; alertBox.style.display = 'none'; }, 3000);
    } catch (e) {
      alertBox.style.display = 'block'; alertBox.style.backgroundColor = '#fee2e2'; alertBox.style.color = '#dc2626';
      alertBox.textContent = 'Error al suscribirse.';
    } finally {
      btn.disabled = false; btn.innerHTML = '<i class="fas fa-check-circle"></i> Suscribirme Ahora';
    }
  });
}

function loadAll() {
  initForms(); 
  initPulsoModals();
  loadHomeNews();
  loadHomeDirectorio();
  loadPublicaciones();
  loadActividades();
  loadPublicNews();
  loadPublicDirectory();
  loadPulsoNoticias();
  loadPulsoArticulos();
  loadPulsoPatrocinadores();
  loadPulsoBanners();
  loadPulsoPDFs();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadAll);
} else {
  loadAll();
}
