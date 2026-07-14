import { db } from './firebase-config.js';
import { collection, getDocs, query, orderBy, doc, getDoc, limit, where, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

function createNewsCard(data) {
  const card = document.createElement('div');
  card.className = 'card animated news-card-compact';
  const hasImage = data.imageUrl && data.imageUrl !== 'assets/images/logo.jfif';
  const cat = data.categoria || data.subcategoria || 'NOTICIA';
  const text = data.contenido || data.resumen || 'Haz clic para leer más detalles sobre esta noticia.';
  const linkHtml = data.url ? `<a href="${data.url}" target="_blank" class="btn btn--outline btn--sm" style="margin-top: 0.75rem; display: block; text-align: center; font-size: 0.8rem;">Leer noticia completa <i class="fas fa-external-link-alt"></i></a>` : '';
  
  const imageBlock = hasImage
    ? `<div class="card__image card__image--compact">
        <img src="${data.imageUrl}" alt="${data.titulo}" style="object-fit: cover;">
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
    <img src="${data.logoUrl}" alt="${data.nombre}" style="max-height: 80px; width: auto; margin: 0 auto 1rem auto; display: block;">
    <h4 style="margin:0; color: var(--color-primary); font-family: var(--font-heading); font-size: 1.1rem;">${data.nombre}</h4>
    <span style="font-size: 0.8rem; color: var(--color-text-muted); background: var(--color-background-alt); padding: 0.2rem 0.6rem; border-radius: 12px; display: inline-block; margin-top: 0.5rem;">${data.categoria || 'Directorio'}</span>
  `;
  return card;
}

// Helper: tiempo relativo
function timeAgo(dateStr) {
  if (!dateStr) return '';
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Hace 1 día';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
  return `Hace ${Math.floor(diffDays / 30)} meses`;
}

// =====================================
// PÁGINA DE INICIO (HOME)
// =====================================

export async function loadHomeNews() {
  const containerNacional = document.getElementById('home-news-nacional-container');
  const containerInternacional = document.getElementById('home-news-internacional-container');
  if (!containerNacional && !containerInternacional) return;

  try {
    const q = query(collection(db, "noticias"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    if (containerNacional) containerNacional.innerHTML = '';
    if (containerInternacional) containerInternacional.innerHTML = '';

    let countNacional = 0;
    let countInternacional = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = createNewsCard(data);

      // Changed to 2 per category as requested
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

    if (countNacional === 0 && containerNacional) containerNacional.innerHTML = '<div style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; height: 100%;"><p style="color: var(--color-text-muted);">No hay noticias nacionales publicadas.</p></div>';
    if (countInternacional === 0 && containerInternacional) containerInternacional.innerHTML = '<div style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; height: 100%;"><p style="color: var(--color-text-muted);">No hay noticias internacionales publicadas.</p></div>';

  } catch (error) {
    console.error("Error loading home news:", error);
  }
}

export async function loadHomeDirectorio() {
  const containerMiembros = document.getElementById('home-empresas-container');
  const containerAlianzas = document.getElementById('home-alianzas-container');
  if (!containerMiembros && !containerAlianzas) return;

  try {
    const q = query(collection(db, "directorio"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    if (containerMiembros) containerMiembros.innerHTML = '';
    if (containerAlianzas) containerAlianzas.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const data = doc.data();
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
    console.error("Error loading home directorio:", error);
  }
}

export async function loadPublicaciones() {
  const container = document.getElementById('home-publicaciones-container');
  if (!container) return;

  container.innerHTML = '<div style="color: var(--color-text-muted);">Cargando...</div>';
  try {
    const q = query(collection(db, "publicaciones"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      container.innerHTML = '<div style="color: var(--color-text-muted);">No hay publicaciones aún.</div>';
      return;
    }

    container.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = document.createElement('a');
      card.href = data.pdfUrl;
      card.target = "_blank";
      card.className = 'card animated';
      card.style.display = 'block';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      
      card.innerHTML = `
        <div class="card__image" style="padding-top: 140%;">
          <img src="${data.portadaUrl}" alt="${data.titulo}" style="object-fit: cover; position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
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
    const q = query(collection(db, "actividades"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      container.innerHTML = '<div style="color: var(--color-text-muted);">No hay actividades aún.</div>';
      return;
    }

    container.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = document.createElement('a');
      card.href = data.linkUrl;
      card.target = "_blank";
      card.className = 'card animated';
      card.style.display = 'block';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      
      card.innerHTML = `
        <div class="card__image" style="padding-top: 140%;">
          <img src="${data.aficheUrl}" alt="${data.titulo}" style="object-fit: cover; position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
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
// PÁGINAS INDIVIDUALES (Noticias, Directorio)
// =====================================
export async function loadPublicNews() {
  const containerNac = document.getElementById('noticias-nacionales-container');
  const containerIntl = document.getElementById('noticias-internacionales-container');
  const containerInst = document.getElementById('noticias-institucional-container');
  const containerPulso = document.getElementById('noticias-pulso-container');
  if (!containerNac && !containerIntl && !containerInst && !containerPulso) return;
  
  try {
    const qPulso = query(collection(db, "pulso_noticias"), orderBy("timestamp", "desc"));
    const qLocal = query(collection(db, "noticias"), orderBy("timestamp", "desc"));
    
    const [snapPulso, snapLocal] = await Promise.all([getDocs(qPulso), getDocs(qLocal)]);
    
    let allNews = [];

    snapPulso.forEach((docSnap) => {
      const d = docSnap.data();
      allNews.push({ ...d, isIntl: d.tipo === 'internacional', srcCollection: 'pulso' });
    });

    snapLocal.forEach((docSnap) => {
      const data = docSnap.data();
      const validCats = ['nacional', 'internacional', 'institucional', 'pulso'];
      if (validCats.includes(data.categoria)) {
        allNews.push({
          titulo: data.titulo,
          url: `noticia.html?id=${docSnap.id}`,
          imageUrl: data.imageUrl,
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
      if (data.tipo === 'nacional' && containerNac) {
        containerNac.appendChild(card);
        countNac++;
      } else if (data.tipo === 'internacional' && containerIntl) {
        containerIntl.appendChild(card);
        countIntl++;
      } else if (data.tipo === 'institucional' && containerInst) {
        containerInst.appendChild(card);
        countInst++;
      } else if (data.tipo === 'pulso' && containerPulso) {
        containerPulso.appendChild(card);
        countPulso++;
      }
    });

    const emptyMsg = (text) => `<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-muted);">${text}</div>`;
    if (countInst === 0 && containerInst) containerInst.innerHTML = emptyMsg('No hay noticias institucionales publicadas aún.');
    if (countNac === 0 && containerNac) containerNac.innerHTML = emptyMsg('No hay noticias nacionales publicadas aún.');
    if (countIntl === 0 && containerIntl) containerIntl.innerHTML = emptyMsg('No hay noticias internacionales publicadas aún.');
    if (countPulso === 0 && containerPulso) containerPulso.innerHTML = emptyMsg('No hay noticias del Pulso Económico publicadas aún.');
  } catch (error) {
    console.error("Error loading public news:", error);
    const errMsg = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color:red;">Error al cargar noticias.</div>';
    if(containerNac) containerNac.innerHTML = errMsg;
    if(containerIntl) containerIntl.innerHTML = errMsg;
    if(containerInst) containerInst.innerHTML = errMsg;
    if(containerPulso) containerPulso.innerHTML = errMsg;
  }
}

export async function loadPublicDirectory() {
  const container = document.getElementById('dynamic-directory-container');
  const searchInput = document.getElementById('search-directorio');
  const filterSelect = document.getElementById('filter-categoria');
  if (!container) return;
  
  container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;"><i class="fas fa-spinner fa-spin fa-2x"></i><br>Cargando empresas...</div>';
  try {
    const q = query(collection(db, "directorio"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    container.innerHTML = '';
    
    if(querySnapshot.empty) {
        container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">No hay empresas.</div>';
        return;
    }
    
    const allCompanies = [];
    const categories = new Set();
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      allCompanies.push(data);
      if (data.categoria) categories.add(data.categoria.trim());
    });
    
    // Poblar select
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
      
      const filtered = allCompanies.filter(c => {
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
    console.error("Error cargando directorio:", error);
    container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: red;">Error al cargar datos.</div>';
  }
}

// =====================================
// PULSO ECONÓMICO — Portal de Noticias
// =====================================

// Crear un item de noticia estilo lista (para Pulso Económico)
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
        <span class="news-date">• ${timeAgo(data.fecha)}</span>
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
    const qPulso = query(collection(db, "pulso_noticias"), orderBy("timestamp", "desc"));
    const qLocal = query(collection(db, "noticias"), orderBy("timestamp", "desc"));
    
    const [snapPulso, snapLocal] = await Promise.all([getDocs(qPulso), getDocs(qLocal)]);
    
    let allNews = [];

    snapPulso.forEach((docSnap) => {
      allNews.push({ ...docSnap.data(), isIntl: docSnap.data().tipo === 'internacional' });
    });

    snapLocal.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.categoria === 'nacional' || data.categoria === 'internacional') {
        allNews.push({
          titulo: data.titulo,
          url: `noticia.html?id=${docSnap.id}`,
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

    if (countNac === 0 && containerNac) {
      containerNac.innerHTML = '<div class="pulso-empty"><i class="fas fa-newspaper"></i><p>No hay noticias nacionales publicadas aún.</p></div>';
    }
    if (countIntl === 0 && containerIntl) {
      containerIntl.innerHTML = '<div class="pulso-empty"><i class="fas fa-globe"></i><p>No hay noticias internacionales publicadas aún.</p></div>';
    }
  } catch (error) {
    console.error("Error loading pulso noticias:", error);
    if (containerNac) containerNac.innerHTML = '<div class="pulso-empty"><p>Error al cargar noticias.</p></div>';
  }
}

export async function loadPulsoArticulos() {
  const container = document.getElementById('pulso-articulos-list');
  if (!container) return;

  try {
    const q = query(collection(db, "noticias"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    container.innerHTML = '';
    let count = 0;
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.categoria === 'pulso' && count < 6) {
        container.appendChild(createPulsoNewsItem(data, false));
        count++;
      }
    });
    if (count === 0) {
      container.innerHTML = '<div class="pulso-empty"><i class="fas fa-pen-fancy"></i><p>No hay artículos económicos aún.</p></div>';
    }
  } catch (error) {
    console.error("Error loading pulso articles:", error);
  }
}

export async function loadPulsoPatrocinadores() {
  const container = document.getElementById('pulso-sponsors-container');
  if (!container) return;

  try {
    const q1 = query(collection(db, "directorio"), orderBy("timestamp", "desc"));
    const q2 = query(collection(db, "pulso_patrocinadores"), orderBy("timestamp", "desc"));
    
    const [snap1, snap2] = await Promise.all([getDocs(q1), getDocs(q2)]);
    
    container.innerHTML = '';

    if (snap1.empty && snap2.empty) {
      container.innerHTML = '<p style="text-align: center; color: #9ca3af; grid-column: 1/-1;">Sin patrocinadores</p>';
      return;
    }

    const renderSponsor = (data) => {
      const sponsor = document.createElement('a');
      sponsor.href = data.link || '#';
      sponsor.target = '_blank';
      sponsor.className = 'pulso-sponsor';
      sponsor.innerHTML = `
        <div class="sponsor-logo" style="text-align: center; padding: 5px;">
          <img src="${data.logoUrl}" alt="${data.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size: 0.7rem; font-weight: 700; color: #16a34a; line-height: 1.1; word-break: break-word;">${data.nombre}</span>
        </div>
      `;
      container.appendChild(sponsor);
    };

    snap1.forEach((docSnap) => renderSponsor(docSnap.data()));
    snap2.forEach((docSnap) => renderSponsor(docSnap.data()));

  } catch (error) {
    console.error("Error loading patrocinadores:", error);
  }
}

export async function loadPulsoPDFLinks() {
  try {
    const docSnap = await getDoc(doc(db, "configuracion", "pulso_pdfs"));
    if (!docSnap.exists()) return;
    const data = docSnap.data();

    // Update nav links
    const setLink = (id, url) => {
      const el = document.getElementById(id);
      if (el && url) {
        el.href = url;
        el.target = "_blank";
      }
    };
    setLink('pulso-indicadores-link', data.indicadores);
    setLink('pulso-smn-link', data.smn);
    setLink('pulso-ipc-link', data.ipc);
    setLink('pulso-cotizacion-link', data.cotizaciones);
    setLink('pulso-lectura-link', data.lectura);
    setLink('pulso-precios-link', data.precios);
    setLink('pulso-cargas-link', data.cargas);
    setLink('pulso-tool-indicadores', data.indicadores);
  } catch (error) {
    console.error("Error loading pulso PDF links:", error);
  }
}

export async function loadPulsoBanners() {
  const track = document.getElementById('pulso-banner-track');
  const dotsContainer = document.getElementById('pulso-banner-dots');
  if (!track || !dotsContainer) return;

  try {
    const q = query(collection(db, "pulso_banners"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return; // Keep default placeholder

    track.innerHTML = '';
    dotsContainer.innerHTML = '';

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      if (data.url) {
        slide.innerHTML = `<a href="${data.url}" target="_blank" style="display:flex;align-items:center;justify-content:center;height:100%;"><img src="${data.imageUrl}" alt="${data.titulo || 'Banner'}"></a>`;
      } else {
        slide.innerHTML = `<img src="${data.imageUrl}" alt="${data.titulo || 'Banner'}">`;
      }
      track.appendChild(slide);
    });

    // Clone all slides for infinite marquee scroll effect
    const slides = Array.from(track.children);
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });

    // Create dots
    const slidesRef = track.children;
    for (let i = 0; i < (slidesRef.length / 2); i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => {
        track.style.transform = `translateX(-${i * 100}%)`;
        document.querySelectorAll('.pulso-ad-banner .carousel-dot').forEach((d, j) => d.classList.toggle('active', j === i));
      });
      dotsContainer.appendChild(dot);
    }
  } catch (error) {
    console.error("Error loading pulso banners:", error);
  }
}

// Legacy support for older Pulso page
export async function loadPulsoEconomico() {
  // Now handled by individual functions
  loadPulsoNoticias();
  loadPulsoArticulos();
  loadPulsoPatrocinadores();
  loadPulsoPDFLinks();
  loadPulsoBanners();
}

// =====================================
// FORMULARIO DE SOLICITUDES
// =====================================
export function setupSolicitudesForm() {
  const form = document.getElementById('form-solicitud-cert');
  const loading = document.getElementById('solicitud-loading');
  const btn = document.getElementById('btn-enviar-solicitud');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (btn) btn.disabled = true;
    if (loading) loading.style.display = 'block';

    const data = {
      nombre: document.getElementById('solicitud-nombre').value,
      correo: document.getElementById('solicitud-correo').value,
      celular: document.getElementById('solicitud-celular').value,
      tipo: document.getElementById('solicitud-tipo').value,
      mensaje: document.getElementById('solicitud-mensaje').value,
      estado: 'pendiente',
      timestamp: Date.now(),
      fecha: new Date().toLocaleDateString('es-ES')
    };

    try {
      await addDoc(collection(db, "solicitudes"), data);
      alert("¡Solicitud enviada exitosamente! Nos contactaremos contigo pronto.");
      form.reset();
      
      const modal = document.getElementById('solicitud-modal');
      if (modal) modal.classList.remove('active');
    } catch (error) {
      console.error("Error enviando solicitud:", error);
      alert("Hubo un error al enviar tu solicitud. Inténtalo de nuevo.");
    } finally {
      if (btn) btn.disabled = false;
      if (loading) loading.style.display = 'none';
    }
  });

  const modal = document.getElementById('solicitud-modal');
  const openBtns = document.querySelectorAll('.btn-abrir-solicitud');
  const closeBtn = document.querySelector('.solicitud-modal-close');

  openBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      const tipo = b.getAttribute('data-tipo');
      if (tipo && document.getElementById('solicitud-tipo')) {
        document.getElementById('solicitud-tipo').value = tipo;
      }
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // =====================================
  // CONTACT FORM LOGIC (from main.js form-valid event)
  // =====================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('form-valid', async (e) => {
      const data = {
        nombre: document.getElementById('contact-name').value,
        correo: document.getElementById('contact-email').value,
        celular: document.getElementById('contact-phone').value || 'No proporcionado',
        tipo: 'Contacto Web: ' + document.getElementById('contact-subject').value,
        mensaje: document.getElementById('contact-message').value,
        estado: 'pendiente',
        timestamp: Date.now(),
        fecha: new Date().toLocaleDateString('es-ES')
      };

      try {
        await addDoc(collection(db, "solicitudes"), data);
        // Toast is shown by main.js automatically
        contactForm.reset();
        contactForm.querySelectorAll('.form-group').forEach(g => {
          g.classList.remove('form-group--success', 'form-group--error');
        });
        
        // Ensure Toast runs if it wasn't triggered completely in main.js, 
        // actually main.js was triggering it on 'else' previously.
        // Wait, main.js does NOT show toast anymore on success, we need to show it here.
        if (typeof Toast !== 'undefined') {
          Toast.show('¡Mensaje enviado exitosamente! Nos contactaremos pronto.', 'success');
        } else {
          alert('¡Mensaje enviado exitosamente!');
        }
      } catch (error) {
        console.error("Error enviando contacto:", error);
        if (typeof Toast !== 'undefined') {
          Toast.show('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
        } else {
          alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        }
      }
    });
  }

  // =====================================
  // VOLUNTEER FORM LOGIC
  // =====================================
  const volunteerForm = document.getElementById('volunteer-form');
  const btnVol = document.getElementById('btn-enviar-vol');
  const loadingVol = document.getElementById('vol-loading');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (btnVol) btnVol.disabled = true;
      if (loadingVol) loadingVol.style.display = 'block';

      const data = {
        nombre: document.getElementById('vol-nombre').value,
        correo: document.getElementById('vol-correo').value,
        celular: 'Ver mensaje',
        tipo: 'Voluntariado: ' + document.getElementById('vol-area').value,
        mensaje: document.getElementById('vol-mensaje').value,
        estado: 'pendiente',
        timestamp: Date.now(),
        fecha: new Date().toLocaleDateString('es-ES')
      };

      try {
        await addDoc(collection(db, "solicitudes"), data);
        alert("¡Solicitud de voluntariado enviada exitosamente! Nos contactaremos contigo pronto.");
        volunteerForm.reset();
      } catch (error) {
        console.error("Error enviando solicitud de voluntariado:", error);
        alert("Hubo un error al enviar tu solicitud. Inténtalo de nuevo.");
      } finally {
        if (btnVol) btnVol.disabled = false;
        if (loadingVol) loadingVol.style.display = 'none';
      }
    });
  }
}

// Iniciar
document.addEventListener('DOMContentLoaded', () => {
  setupSolicitudesForm();
  loadPublicNews();
  loadPublicDirectory();
  loadHomeNews();
  loadHomeDirectorio();
  loadPublicaciones();
  loadActividades();
  loadPulsoEconomico();
});


// =====================================
// MODALES GLOBALES DE PULSO ECONÓMICO
// =====================================
function initPulsoModals() {
  // Solo ejecutar si estamos en una página de Pulso
  if (!document.querySelector('.pulso-nav-main')) return;

  // 1. Crear el Modal Visor de PDF
  const pdfModal = document.createElement('div');
  pdfModal.id = 'pulso-pdf-modal';
  pdfModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; align-items:center; justify-content:center; padding:2rem; backdrop-filter: blur(4px);';
  pdfModal.innerHTML = `
    <div style="background:white; width:100%; max-width:900px; height:90%; border-radius:12px; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="padding:1rem 1.5rem; border-bottom:1px solid #e5e7eb; display:flex; justify-content:space-between; align-items:center; background:#f8fafc;">
        <h2 id="pulso-pdf-modal-title" style="margin:0; font-size:1.25rem; color:#16a34a; font-family:'Inter',sans-serif;">Documento</h2>
        <button id="pulso-pdf-modal-close" style="background:none; border:none; font-size:1.5rem; color:#6b7280; cursor:pointer;"><i class="fas fa-times"></i></button>
      </div>
      <iframe id="pulso-pdf-modal-frame" src="" style="width:100%; flex-grow:1; border:none; background:#f1f5f9;"></iframe>
    </div>
  `;
  document.body.appendChild(pdfModal);

  document.getElementById('pulso-pdf-modal-close').addEventListener('click', () => {
    pdfModal.style.display = 'none';
    document.getElementById('pulso-pdf-modal-frame').src = '';
  });

  // Interceptar clicks de enlaces de PDFs en la nav (ahora abrirán el modal)
  const navIds = ['pulso-smn-link', 'pulso-ipc-link', 'pulso-cotizacion-link', 'pulso-cargas-link'];
  navIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault(); // evitar que abra nueva pestaña
        // Si hay una url cargada desde FB, usarla, si no usar el href default. 
        // Importante: encodeURI para evitar error 404
        let url = el.getAttribute('href');
        // si empieza con assets o docs, debemos encodearla
        if (url && (url.includes('assets/') || url.includes('docs/'))) {
            // reemplazamos posibles urls hardcodeadas que no estén encodeadas
            url = url.replace('docs/REDIRECCIONES/', 'assets/REDIRECCIONES/');
            let parts = url.split('/');
            let filename = parts.pop();
            url = parts.join('/') + '/' + encodeURIComponent(decodeURIComponent(filename));
        }
        document.getElementById('pulso-pdf-modal-title').textContent = el.textContent;
        document.getElementById('pulso-pdf-modal-frame').src = url + '#toolbar=0';
        pdfModal.style.display = 'flex';
      });
    }
  });

  // 2. Crear Modal de Publicidad
  const pubModal = document.createElement('div');
  pubModal.id = 'pulso-pub-modal';
  pubModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; align-items:center; justify-content:center; padding:1rem; backdrop-filter: blur(4px);';
  pubModal.innerHTML = `
    <div class="animate-slide-up" style="background:white; width:100%; max-width:500px; border-radius:12px; overflow:hidden; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="padding:1.5rem; background:#f59e0b; color:white; display:flex; justify-content:space-between; align-items:center;">
        <h2 style="margin:0; font-size:1.5rem; font-family:'Inter',sans-serif;"><i class="fas fa-bullhorn"></i> Solicitud de Publicidad</h2>
        <button id="pulso-pub-modal-close" style="background:none; border:none; font-size:1.5rem; color:white; cursor:pointer;"><i class="fas fa-times"></i></button>
      </div>
      <form id="form-publicidad" style="padding:2rem;">
        <p style="margin-top:0; color:#4b5563; font-size:0.95rem;">Solicita un espacio publicitario en la revista Pulso Económico o en el portal Hecho en Bolivia.</p>
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Nombre Completo</label>
          <input type="text" id="pub-nombre" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
        </div>
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Empresa</label>
          <input type="text" id="pub-empresa" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
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

  document.getElementById('pulso-pub-modal-close').addEventListener('click', () => {
    pubModal.style.display = 'none';
  });

  const pubLink = document.getElementById('pulso-publicidad-link');
  if (pubLink) {
    pubLink.addEventListener('click', (e) => {
      e.preventDefault();
      pubModal.style.display = 'flex';
    });
  }

  // Manejar el submit del formulario de publicidad
  document.getElementById('form-publicidad').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-pub-submit');
    const alertBox = document.getElementById('pub-alert');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    try {
      const { collection, addDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      await addDoc(collection(db, "solicitudes_publicidad"), {
        nombre: document.getElementById('pub-nombre').value,
        empresa: document.getElementById('pub-empresa').value,
        correo: document.getElementById('pub-correo').value,
        mensaje: document.getElementById('pub-mensaje').value,
        fecha: new Date().toISOString(),
        estado: 'pendiente'
      });
      alertBox.style.display = 'block';
      alertBox.style.backgroundColor = '#dcfce3';
      alertBox.style.color = '#16a34a';
      alertBox.textContent = '¡Solicitud enviada con éxito! Nos contactaremos pronto.';
      document.getElementById('form-publicidad').reset();
      setTimeout(() => { pubModal.style.display = 'none'; alertBox.style.display = 'none'; }, 3000);
    } catch (error) {
      console.error(error);
      alertBox.style.display = 'block';
      alertBox.style.backgroundColor = '#fee2e2';
      alertBox.style.color = '#dc2626';
      alertBox.textContent = 'Error al enviar la solicitud. Intente nuevamente.';
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Solicitud';
    }
  });

  // 3. Crear Modal de Suscripción
  const subModal = document.createElement('div');
  subModal.id = 'pulso-sub-modal';
  subModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; align-items:center; justify-content:center; padding:1rem; backdrop-filter: blur(4px);';
  subModal.innerHTML = `
    <div class="animate-slide-up" style="background:white; width:100%; max-width:500px; border-radius:12px; overflow:hidden; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);">
      <div style="padding:1.5rem; background:#dc2626; color:white; display:flex; justify-content:space-between; align-items:center;">
        <h2 style="margin:0; font-size:1.5rem; font-family:'Inter',sans-serif;"><i class="fas fa-envelope-open-text"></i> Suscríbete a Pulso</h2>
        <button id="pulso-sub-modal-close" style="background:none; border:none; font-size:1.5rem; color:white; cursor:pointer;"><i class="fas fa-times"></i></button>
      </div>
      <form id="form-suscripcion" style="padding:2rem;">
        <p style="margin-top:0; color:#4b5563; font-size:0.95rem;">Recibe las últimas noticias económicas, actualizaciones de indicadores y precios directamente en tu correo.</p>
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Nombre Completo</label>
          <input type="text" id="sub-nombre" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
        </div>
        <div style="margin-bottom:1rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">Correo Electrónico</label>
          <input type="email" id="sub-correo" required style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;">
        </div>
        <div style="margin-bottom:1.5rem;">
          <label style="display:block; margin-bottom:0.5rem; font-weight:600; color:#1f2937;">WhatsApp (Opcional)</label>
          <input type="tel" id="sub-whatsapp" style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:6px;" placeholder="+591 ...">
        </div>
        <div id="sub-alert" style="display:none; padding:1rem; border-radius:6px; margin-bottom:1rem; font-weight:600; text-align:center;"></div>
        <button type="submit" id="btn-sub-submit" style="width:100%; background:#15803d; color:white; border:none; padding:1rem; border-radius:6px; font-weight:600; cursor:pointer; font-size:1rem; transition:0.2s;"><i class="fas fa-check-circle"></i> Suscribirme Ahora</button>
      </form>
    </div>
  `;
  document.body.appendChild(subModal);

  document.getElementById('pulso-sub-modal-close').addEventListener('click', () => {
    subModal.style.display = 'none';
  });

  const subBtns = document.querySelectorAll('.pulso-subscribe');
  subBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      subModal.style.display = 'flex';
    });
  });

  // Manejar el submit del formulario de suscripción
  document.getElementById('form-suscripcion').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-sub-submit');
    const alertBox = document.getElementById('sub-alert');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
    
    try {
      const { collection, addDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      await addDoc(collection(db, "suscriptores_pulso"), {
        nombre: document.getElementById('sub-nombre').value,
        correo: document.getElementById('sub-correo').value,
        whatsapp: document.getElementById('sub-whatsapp').value,
        fecha: new Date().toISOString(),
        estado: 'activo'
      });
      alertBox.style.display = 'block';
      alertBox.style.backgroundColor = '#dcfce3';
      alertBox.style.color = '#16a34a';
      alertBox.textContent = '¡Suscripción exitosa! Bienvenido a Pulso Económico.';
      document.getElementById('form-suscripcion').reset();
      setTimeout(() => { subModal.style.display = 'none'; alertBox.style.display = 'none'; }, 3000);
    } catch (error) {
      console.error(error);
      alertBox.style.display = 'block';
      alertBox.style.backgroundColor = '#fee2e2';
      alertBox.style.color = '#dc2626';
      alertBox.textContent = 'Error al suscribirse. Intente nuevamente.';
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-check-circle"></i> Suscribirme Ahora';
    }
  });
}

// Inicializar modales al cargar DOM (o directamente si ya está listo)

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPulsoModals);
} else {
  initPulsoModals();
}
