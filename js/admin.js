/**
 * admin.js - Panel de Administración (PHP Backend)
 * Usa fetch() para comunicarse con las APIs PHP en /api/
 */

const API_BASE = '../api';

// DOM Elements
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// ==========================================
// HELPERS
// ==========================================
async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE}/${endpoint}`, { credentials: 'include' });
  return res.json();
}

async function apiPost(endpoint, data) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include'
  });
  return res.json();
}

async function apiPut(endpoint, data) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include'
  });
  return res.json();
}

async function apiDelete(endpoint) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  return res.json();
}

// ==========================================
// AUTH
// ==========================================
async function checkAuth() {
  try {
    const data = await apiGet('auth.php?action=check');
    if (data.authenticated) {
      loginSection.style.display = 'none';
      dashboardSection.style.display = 'flex';
      loadAllData();
    } else {
      loginSection.style.display = 'flex';
      dashboardSection.style.display = 'none';
    }
  } catch {
    loginSection.style.display = 'flex';
    dashboardSection.style.display = 'none';
  }
}

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;
  
  try {
    const data = await apiPost('auth.php?action=login', { email, password });
    if (data.success) {
      loginError.style.display = 'none';
      loginSection.style.display = 'none';
      dashboardSection.style.display = 'flex';
      loadAllData();
    } else {
      loginError.style.display = 'block';
    }
  } catch {
    loginError.style.display = 'block';
  }
});

function loadAllData() {
  cargarSolicitudes();
  cargarNoticias();
  cargarEmpresas();
  cargarPublicaciones();
  cargarActividades();
  cargarCapacitaciones();
  cargarPulso();
  cargarGaleria();
  cargarConfigSocial();
  cargarConfigContacto();
  cargarConfigJunta();
  cargarPulsoNoticias();
  cargarPulsoBanners();
  cargarPulsoPatrocinadores();
}

// Tab Navigation
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    
    if (target === 'logout') {
      apiPost('auth.php?action=logout', {}).then(() => {
        loginSection.style.display = 'flex';
        dashboardSection.style.display = 'none';
      });
      return;
    }

    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.style.display = 'none');
    
    btn.classList.add('active');
    document.getElementById(`tab-${target}`).style.display = 'block';
  });
});

// ==========================================
// MÓDULO SOLICITUDES
// ==========================================
async function cargarSolicitudes() {
  const tCert = document.getElementById('lista-solicitudes-cert');
  const tCont = document.getElementById('lista-solicitudes-contacto');
  const tVol = document.getElementById('lista-solicitudes-voluntariado');
  const tCursos = document.getElementById('lista-solicitudes-cursos');
  if (!tCert || !tCont || !tVol) return;

  tCert.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';
  tCont.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';
  tVol.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';
  if (tCursos) tCursos.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';

  try {
    const rows = await apiGet('crud.php?table=solicitudes');
    tCert.innerHTML = '';
    tCont.innerHTML = '';
    tVol.innerHTML = '';
    if (tCursos) tCursos.innerHTML = '';

    rows.forEach(data => {
      const tr = document.createElement('tr');
      
      if (data.tipo && data.tipo.startsWith('Contacto')) {
        tr.innerHTML = `
          <td>${data.nombre || ''}</td>
          <td>${data.email || ''}</td>
          <td>${data.telefono || ''}</td>
          <td>${data.mensaje || ''}</td>
          <td><button class="btn-delete" data-id="${data.id}" data-type="solicitud">Eliminar</button></td>
        `;
        tCont.appendChild(tr);
      } else if (data.tipo && data.tipo.startsWith('Voluntariado')) {
        tr.innerHTML = `
          <td>${data.nombre || ''}</td>
          <td>${data.email || ''}</td>
          <td>${data.telefono || ''}</td>
          <td>${data.experiencia || ''}</td>
          <td>${data.motivacion || ''}</td>
          <td><button class="btn-delete" data-id="${data.id}" data-type="solicitud">Eliminar</button></td>
        `;
        tVol.appendChild(tr);
      } else if (data.tipo && data.tipo.startsWith('Inscripción Curso')) {
        if (tCursos) {
          tr.innerHTML = `
            <td>${data.nombre || ''}</td>
            <td>${data.email || ''}</td>
            <td>${data.telefono || ''}</td>
            <td>${data.curso || ''}</td>
            <td><button class="btn-delete" data-id="${data.id}" data-type="solicitud">Eliminar</button></td>
          `;
          tCursos.appendChild(tr);
        }
      } else {
        tr.innerHTML = `
          <td>${data.nombre || ''}</td>
          <td>${data.empresa || ''}</td>
          <td>${data.email || ''}</td>
          <td>${data.departamento || ''}</td>
          <td>${data.rubro || ''}</td>
          <td><button class="btn-delete" data-id="${data.id}" data-type="solicitud">Eliminar</button></td>
        `;
        tCert.appendChild(tr);
      }
    });
  } catch (error) {
    console.error("Error cargando solicitudes:", error);
  }
}

// ==========================================
// MÓDULO NOTICIAS
// ==========================================
const formNoticia = document.getElementById('form-noticia');
const btnNoticia = document.getElementById('btn-publicar-noticia');
const loadingNoticia = document.getElementById('noticia-loading');
const listaNoticias = document.getElementById('lista-noticias');
let editing_noticias_Id = null;

formNoticia.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnNoticia.disabled = true;
  loadingNoticia.style.display = 'block';

  const data = {
    titulo: document.getElementById('noticia-titulo').value,
    fecha: document.getElementById('noticia-fecha').value,
    categoria: document.getElementById('noticia-categoria').value,
    contenido: document.getElementById('noticia-contenido').value,
    image_url: document.getElementById('noticia-imagen').value,
  };

  try {
    if (editing_noticias_Id) {
      await apiPut(`crud.php?table=noticias&id=${editing_noticias_Id}`, data);
      editing_noticias_Id = null;
      btnNoticia.textContent = 'Agregar';
    } else {
      await apiPost('crud.php?table=noticias', data);
    }
    alert("Noticia guardada exitosamente!");
    formNoticia.reset();
    cargarNoticias();
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un error al publicar.");
  } finally {
    btnNoticia.disabled = false;
    loadingNoticia.style.display = 'none';
  }
});

async function cargarNoticias() {
  listaNoticias.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=noticias');
    listaNoticias.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.fecha || ''}</td>
        <td>${data.titulo}</td>
        <td style="white-space: nowrap;">
          <button class="btn-edit" data-id="${data.id}" data-type="noticias" data-titulo="${data.titulo}" data-fecha="${data.fecha}" data-categoria="${data.categoria}" data-contenido="${data.contenido || ''}" data-imagen="${data.image_url || ''}" style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-delete" data-id="${data.id}" data-type="noticia">Eliminar</button>
        </td>
      `;
      listaNoticias.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando noticias:", error);
    listaNoticias.innerHTML = '<tr><td colspan="3">Error cargando datos.</td></tr>';
  }
}

// ==========================================
// MÓDULO DIRECTORIO
// ==========================================
const formEmpresa = document.getElementById('form-empresa');
const btnEmpresa = document.getElementById('btn-publicar-empresa');
const loadingEmpresa = document.getElementById('empresa-loading');
const listaEmpresas = document.getElementById('lista-empresas');
let editingEmpresaId = null;

formEmpresa.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnEmpresa.disabled = true;
  loadingEmpresa.style.display = 'block';

  const data = {
    nombre: document.getElementById('empresa-nombre').value,
    tipo: document.getElementById('empresa-tipo').value,
    categoria: document.getElementById('empresa-categoria').value,
    link: document.getElementById('empresa-link').value,
    logo_url: document.getElementById('empresa-logo').value,
  };

  try {
    if (editingEmpresaId) {
      await apiPut(`crud.php?table=directorio&id=${editingEmpresaId}`, data);
      editingEmpresaId = null;
      btnEmpresa.textContent = 'Agregar Empresa';
    } else {
      await apiPost('crud.php?table=directorio', data);
    }
    alert("Empresa guardada exitosamente!");
    formEmpresa.reset();
    cargarEmpresas();
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un error al guardar.");
  } finally {
    btnEmpresa.disabled = false;
    loadingEmpresa.style.display = 'none';
  }
});

const tipoLabels = { 'miembro': 'Empresa Miembro', 'alianza': 'Alianza Interinstitucional', 'mercado': 'Mercado Interno' };
const tipoColors = { 'miembro': '#c0392b', 'alianza': '#2980b9', 'mercado': '#27ae60' };

async function cargarEmpresas() {
  listaEmpresas.innerHTML = '<tr><td colspan="4">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=directorio');
    listaEmpresas.innerHTML = '';
    rows.forEach(data => {
      const tipoLabel = tipoLabels[data.tipo] || data.tipo || 'Sin tipo';
      const tipoColor = tipoColors[data.tipo] || '#6b7280';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${data.nombre}</strong></td>
        <td><span style="background: ${tipoColor}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">${tipoLabel}</span></td>
        <td>${data.categoria || ''}</td>
        <td style="white-space: nowrap;">
          <button class="btn-edit" data-id="${data.id}" data-type="empresa" data-nombre="${data.nombre}" data-tipo="${data.tipo}" data-categoria="${data.categoria || ''}" data-link="${data.link || ''}" data-logo="${data.logo_url || ''}" style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-delete" data-id="${data.id}" data-type="empresa">Eliminar</button>
        </td>
      `;
      listaEmpresas.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando empresas:", error);
  }
}

// ==========================================
// MÓDULO PULSO - PDFs
// ==========================================
async function cargarPulso() {
  const form = document.getElementById('form-pulso-pdfs');
  if (!form) return;
  
  try {
    const config = await apiGet('configuracion.php?key=pulso_pdfs');
    if (config) {
      if (config.cargas_sociales) document.getElementById('pulso-cargas').value = config.cargas_sociales;
      if (config.cotizaciones) document.getElementById('pulso-cotizaciones').value = config.cotizaciones;
      if (config.ipc) document.getElementById('pulso-ipc').value = config.ipc;
      if (config.smn) document.getElementById('pulso-smn').value = config.smn;
    }
  } catch (e) { console.error(e); }
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      cargas_sociales: document.getElementById('pulso-cargas').value,
      cotizaciones: document.getElementById('pulso-cotizaciones').value,
      ipc: document.getElementById('pulso-ipc').value,
      smn: document.getElementById('pulso-smn').value,
    };
    try {
      await apiPost('configuracion.php?key=pulso_pdfs', data);
      alert("PDFs actualizados exitosamente!");
    } catch (e) {
      alert("Error al guardar.");
    }
  });
}

// ==========================================
// MÓDULO PULSO NOTICIAS
// ==========================================
let editing_pulso_noticias_Id = null;

async function cargarPulsoNoticias() {
  const listaPulsoNoticias = document.getElementById('lista-pulso-noticias');
  if (!listaPulsoNoticias) return;
  
  const formPN = document.getElementById('form-pulso-noticia');
  if (formPN && !formPN._listener) {
    formPN._listener = true;
    formPN.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        titulo: document.getElementById('pn-titulo').value,
        fecha: document.getElementById('pn-fecha').value,
        categoria: document.getElementById('pn-categoria').value,
        url: document.getElementById('pn-url').value,
        tipo: document.getElementById('pn-tipo').value,
      };
      try {
        if (editing_pulso_noticias_Id) {
          await apiPut(`crud.php?table=pulso_noticias&id=${editing_pulso_noticias_Id}`, data);
          editing_pulso_noticias_Id = null;
          document.getElementById('btn-publicar-pn').textContent = 'Agregar';
        } else {
          await apiPost('crud.php?table=pulso_noticias', data);
        }
        alert("Noticia de Pulso guardada!");
        formPN.reset();
        cargarPulsoNoticias();
      } catch (e) { alert("Error al guardar."); }
    });
  }
  
  listaPulsoNoticias.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=pulso_noticias');
    listaPulsoNoticias.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.titulo}</td>
        <td>${data.tipo || 'nacional'}</td>
        <td style="white-space: nowrap;">
          <button class="btn-edit" data-id="${data.id}" data-type="pulso_noticias" data-titulo="${data.titulo}" data-fecha="${data.fecha || ''}" data-categoria="${data.categoria || ''}" data-url="${data.url || ''}" data-tipo="${data.tipo || 'nacional'}" style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-delete" data-id="${data.id}" data-type="pulso_noticia">Eliminar</button>
        </td>
      `;
      listaPulsoNoticias.appendChild(tr);
    });
  } catch (e) { console.error(e); }
}

// ==========================================
// MÓDULO PULSO BANNERS
// ==========================================
let editing_pulso_banners_Id = null;

async function cargarPulsoBanners() {
  const listaPulsoBanners = document.getElementById('lista-pulso-banners');
  if (!listaPulsoBanners) return;
  
  const formPB = document.getElementById('form-pulso-banner');
  if (formPB && !formPB._listener) {
    formPB._listener = true;
    formPB.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        titulo: document.getElementById('pb-titulo').value,
        image_url: document.getElementById('pb-imagen').value,
        url: document.getElementById('pb-url').value,
      };
      try {
        if (editing_pulso_banners_Id) {
          await apiPut(`crud.php?table=pulso_banners&id=${editing_pulso_banners_Id}`, data);
          editing_pulso_banners_Id = null;
          document.getElementById('btn-publicar-pb').textContent = 'Agregar';
        } else {
          await apiPost('crud.php?table=pulso_banners', data);
        }
        alert("Banner guardado!");
        formPB.reset();
        cargarPulsoBanners();
      } catch (e) { alert("Error al guardar."); }
    });
  }
  
  listaPulsoBanners.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=pulso_banners');
    listaPulsoBanners.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.titulo || ''}</td>
        <td><button class="btn-delete" data-id="${data.id}" data-type="pulso_banner">Eliminar</button></td>
      `;
      listaPulsoBanners.appendChild(tr);
    });
  } catch (e) { console.error(e); }
}

// ==========================================
// MÓDULO PUBLICACIONES
// ==========================================
const formPublicacion = document.getElementById('form-publicacion');
const btnPublicacion = document.getElementById('btn-publicar-pub');
const loadingPublicacion = document.getElementById('pub-loading');
let editing_publicaciones_Id = null;
const listaPublicaciones = document.getElementById('lista-publicaciones');

formPublicacion.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnPublicacion.disabled = true;
  loadingPublicacion.style.display = 'block';

  const data = {
    titulo: document.getElementById('pub-titulo').value,
    portada_url: document.getElementById('pub-portada').value,
    pdf_url: document.getElementById('pub-pdf').value,
  };

  try {
    if (editing_publicaciones_Id) {
      await apiPut(`crud.php?table=publicaciones&id=${editing_publicaciones_Id}`, data);
      editing_publicaciones_Id = null;
      btnPublicacion.textContent = 'Agregar';
    } else {
      await apiPost('crud.php?table=publicaciones', data);
    }
    alert("Publicación guardada!");
    formPublicacion.reset();
    cargarPublicaciones();
  } catch (e) { alert("Error al guardar."); }
  finally { btnPublicacion.disabled = false; loadingPublicacion.style.display = 'none'; }
});

async function cargarPublicaciones() {
  listaPublicaciones.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=publicaciones');
    listaPublicaciones.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.titulo}</td>
        <td style="white-space: nowrap;">
          <button class="btn-edit" data-id="${data.id}" data-type="publicaciones" data-titulo="${data.titulo}" style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-delete" data-id="${data.id}" data-type="publicacion">Eliminar</button>
        </td>
      `;
      listaPublicaciones.appendChild(tr);
    });
  } catch (e) { console.error(e); }
}

// ==========================================
// MÓDULO ACTIVIDADES
// ==========================================
const formActividad = document.getElementById('form-actividad');
const btnActividad = document.getElementById('btn-publicar-act');
const loadingActividad = document.getElementById('act-loading');
const listaActividades = document.getElementById('lista-actividades');

formActividad.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnActividad.disabled = true;
  loadingActividad.style.display = 'block';
  const data = {
    titulo: document.getElementById('act-titulo').value,
    afiche_url: document.getElementById('act-afiche').value,
    link_url: document.getElementById('act-link').value,
  };
  try {
    await apiPost('crud.php?table=actividades', data);
    alert("Actividad agregada!");
    formActividad.reset();
    cargarActividades();
  } catch (e) { alert("Error al guardar."); }
  finally { btnActividad.disabled = false; loadingActividad.style.display = 'none'; }
});

async function cargarActividades() {
  listaActividades.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=actividades');
    listaActividades.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${data.titulo}</td><td><button class="btn-delete" data-id="${data.id}" data-type="actividad">Eliminar</button></td>`;
      listaActividades.appendChild(tr);
    });
  } catch (e) { console.error(e); }
}

// ==========================================
// MÓDULO CAPACITACIONES
// ==========================================
const formCapacitacion = document.getElementById('form-capacitacion');
const btnCapacitacion = document.getElementById('btn-publicar-cap');
const loadingCapacitacion = document.getElementById('cap-loading');
const listaCapacitaciones = document.getElementById('lista-capacitaciones');

if (formCapacitacion) {
  formCapacitacion.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnCapacitacion.disabled = true;
    loadingCapacitacion.style.display = 'block';
    const data = {
      titulo: document.getElementById('cap-titulo').value,
      imagen_url: document.getElementById('cap-flyer').value,
      contacto_url: document.getElementById('cap-contacto').value,
      fecha_creacion: document.getElementById('cap-fecha').value,
    };
    try {
      await apiPost('crud.php?table=capacitaciones', data);
      alert("Capacitación agregada!");
      formCapacitacion.reset();
      cargarCapacitaciones();
    } catch (e) { alert("Error al guardar."); }
    finally { btnCapacitacion.disabled = false; loadingCapacitacion.style.display = 'none'; }
  });
}

async function cargarCapacitaciones() {
  if (!listaCapacitaciones) return;
  listaCapacitaciones.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=capacitaciones');
    listaCapacitaciones.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${data.titulo}</td><td>${data.fecha_creacion || ''}</td><td><button class="btn-delete" data-id="${data.id}" data-type="capacitacion">Eliminar</button></td>`;
      listaCapacitaciones.appendChild(tr);
    });
  } catch (e) { console.error(e); }
}

// ==========================================
// MÓDULO GALERÍA
// ==========================================
const formGaleria = document.getElementById('form-galeria');
const btnGaleria = document.getElementById('btn-publicar-gal');
const loadingGaleria = document.getElementById('gal-loading');
const listaGaleria = document.getElementById('lista-galeria');

if (formGaleria) {
  formGaleria.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnGaleria.disabled = true;
    loadingGaleria.style.display = 'block';
    const data = {
      titulo: document.getElementById('gal-titulo').value,
      image_url: document.getElementById('gal-imagen').value,
    };
    try {
      await apiPost('crud.php?table=galeria', data);
      alert("Foto agregada!");
      formGaleria.reset();
      cargarGaleria();
    } catch (e) { alert("Error al guardar."); }
    finally { btnGaleria.disabled = false; loadingGaleria.style.display = 'none'; }
  });
}

async function cargarGaleria() {
  if (!listaGaleria) return;
  listaGaleria.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=galeria');
    listaGaleria.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${data.titulo}</td><td><button class="btn-delete" data-id="${data.id}" data-type="galeria">Eliminar</button></td>`;
      listaGaleria.appendChild(tr);
    });
  } catch (e) { console.error(e); }
}

// ==========================================
// MÓDULO CONFIG - REDES SOCIALES
// ==========================================
async function cargarConfigSocial() {
  const form = document.getElementById('form-redes-sociales');
  if (!form) return;
  try {
    const config = await apiGet('configuracion.php?key=redes_sociales');
    if (config) {
      if (config.facebook) document.getElementById('social-facebook').value = config.facebook;
      if (config.instagram) document.getElementById('social-instagram').value = config.instagram;
      if (config.tiktok) document.getElementById('social-tiktok').value = config.tiktok;
      if (config.youtube) document.getElementById('social-youtube').value = config.youtube;
      if (config.twitter) document.getElementById('social-twitter').value = config.twitter;
      if (config.linkedin) document.getElementById('social-linkedin').value = config.linkedin;
      if (config.whatsapp) document.getElementById('social-whatsapp').value = config.whatsapp;
    }
  } catch (e) { console.error(e); }
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      facebook: document.getElementById('social-facebook').value,
      instagram: document.getElementById('social-instagram').value,
      tiktok: document.getElementById('social-tiktok').value,
      youtube: document.getElementById('social-youtube').value,
      twitter: document.getElementById('social-twitter').value,
      linkedin: document.getElementById('social-linkedin').value,
      whatsapp: document.getElementById('social-whatsapp').value,
    };
    try {
      await apiPost('configuracion.php?key=redes_sociales', data);
      alert("Redes sociales actualizadas!");
    } catch (e) { alert("Error al guardar."); }
  });
}

// ==========================================
// MÓDULO CONFIG - CONTACTO
// ==========================================
async function cargarConfigContacto() {
  const form = document.getElementById('form-datos-contacto');
  if (!form) return;
  try {
    const config = await apiGet('configuracion.php?key=datos_contacto');
    if (config) {
      if (config.direccion) document.getElementById('contacto-direccion').value = config.direccion;
      if (config.telefono) document.getElementById('contacto-telefono').value = config.telefono;
      if (config.email) document.getElementById('contacto-email').value = config.email;
      if (config.mapsUrl) document.getElementById('contacto-maps').value = config.mapsUrl;
    }
  } catch (e) { console.error(e); }
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      direccion: document.getElementById('contacto-direccion').value,
      telefono: document.getElementById('contacto-telefono').value,
      email: document.getElementById('contacto-email').value,
      mapsUrl: document.getElementById('contacto-maps').value,
    };
    try {
      await apiPost('configuracion.php?key=datos_contacto', data);
      alert("Datos de contacto actualizados!");
    } catch (e) { alert("Error al guardar."); }
  });
}

// ==========================================
// MÓDULO CONFIG - JUNTA DIRECTIVA
// ==========================================
async function cargarConfigJunta() {
  const form = document.getElementById('form-junta-directiva');
  if (!form) return;
  try {
    const config = await apiGet('configuracion.php?key=junta_directiva');
    if (config && config.miembros) {
      document.getElementById('junta-content').value = JSON.stringify(config.miembros, null, 2);
    }
  } catch (e) { console.error(e); }
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const miembros = JSON.parse(document.getElementById('junta-content').value);
      await apiPost('configuracion.php?key=junta_directiva', { miembros });
      alert("Junta directiva actualizada!");
    } catch (e) { alert("Error: JSON inválido o error al guardar."); }
  });
}

// ==========================================
// MÓDULO PATROCINADORES
// ==========================================
let editingPPId = null;

async function cargarPulsoPatrocinadores() {
  const listaPP = document.getElementById('lista-pulso-patrocinadores');
  if (!listaPP) return;
  
  const formPP = document.getElementById('form-pulso-patrocinador');
  if (formPP && !formPP._listener) {
    formPP._listener = true;
    formPP.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        nombre: document.getElementById('pp-nombre').value,
        logo_url: document.getElementById('pp-logo').value,
        link: document.getElementById('pp-link').value,
      };
      try {
        if (editingPPId) {
          await apiPut(`crud.php?table=pulso_patrocinadores&id=${editingPPId}`, data);
          editingPPId = null;
          document.getElementById('btn-publicar-pp').textContent = 'Agregar Patrocinador';
        } else {
          await apiPost('crud.php?table=pulso_patrocinadores', data);
        }
        alert("Patrocinador guardado!");
        formPP.reset();
        cargarPulsoPatrocinadores();
      } catch (e) { alert("Error al guardar."); }
    });
  }
  
  listaPP.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const rows = await apiGet('crud.php?table=pulso_patrocinadores');
    listaPP.innerHTML = '';
    rows.forEach(data => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${data.nombre}</strong></td>
        <td style="white-space: nowrap;">
          <button class="btn-edit" data-id="${data.id}" data-type="pp" data-nombre="${data.nombre}" data-logo="${data.logo_url || ''}" data-link="${data.link || ''}" style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Editar</button>
          <button class="btn-delete" data-id="${data.id}" data-type="pulso_patrocinadores">Eliminar</button>
        </td>
      `;
      listaPP.appendChild(tr);
    });
  } catch (e) { console.error(e); }
}

// ==========================================
// ELIMINAR (Global Listener)
// ==========================================
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn-delete')) {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    
    if (confirm("¿Estás seguro de eliminar este registro?")) {
      const collectionMap = {
        'noticia': 'noticias',
        'empresa': 'directorio',
        'publicacion': 'publicaciones',
        'actividad': 'actividades',
        'capacitacion': 'capacitaciones',
        'galeria': 'galeria',
        'pulso_noticia': 'pulso_noticias',
        'pulso_banner': 'pulso_banners',
        'solicitud': 'solicitudes',
        'pulso_patrocinadores': 'pulso_patrocinadores'
      };
      
      const tableName = collectionMap[type];
      if (!tableName) return;

      try {
        await apiDelete(`crud.php?table=${tableName}&id=${id}`);
        
        const reloadMap = {
          'noticia': cargarNoticias,
          'empresa': cargarEmpresas,
          'publicacion': cargarPublicaciones,
          'actividad': cargarActividades,
          'capacitacion': cargarCapacitaciones,
          'galeria': cargarGaleria,
          'pulso_noticia': cargarPulsoNoticias,
          'pulso_banner': cargarPulsoBanners,
          'solicitud': cargarSolicitudes,
          'pulso_patrocinadores': cargarPulsoPatrocinadores
        };
        if (reloadMap[type]) reloadMap[type]();
      } catch (e) { alert("Error al eliminar."); }
    }
  }

  // EDIT handlers
  if (e.target.closest('.btn-edit')) {
    const btn = e.target.closest('.btn-edit');
    const type = btn.getAttribute('data-type');

    if (type === 'noticias') {
      editing_noticias_Id = btn.getAttribute('data-id');
      document.getElementById('noticia-titulo').value = btn.getAttribute('data-titulo') || '';
      document.getElementById('noticia-fecha').value = btn.getAttribute('data-fecha') || '';
      document.getElementById('noticia-categoria').value = btn.getAttribute('data-categoria') || '';
      document.getElementById('noticia-contenido').value = btn.getAttribute('data-contenido') || '';
      document.getElementById('noticia-imagen').value = btn.getAttribute('data-imagen') || '';
      btnNoticia.textContent = 'Actualizar';
      formNoticia.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (type === 'empresa') {
      editingEmpresaId = btn.getAttribute('data-id');
      document.getElementById('empresa-nombre').value = btn.getAttribute('data-nombre') || '';
      document.getElementById('empresa-tipo').value = btn.getAttribute('data-tipo') || 'miembro';
      document.getElementById('empresa-categoria').value = btn.getAttribute('data-categoria') || '';
      document.getElementById('empresa-link').value = btn.getAttribute('data-link') || '';
      document.getElementById('empresa-logo').value = btn.getAttribute('data-logo') || '';
      btnEmpresa.textContent = 'Actualizar Empresa';
      formEmpresa.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (type === 'publicaciones') {
      editing_publicaciones_Id = btn.getAttribute('data-id');
      document.getElementById('pub-titulo').value = btn.getAttribute('data-titulo') || '';
      btnPublicacion.textContent = 'Actualizar';
      formPublicacion.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (type === 'pulso_noticias') {
      editing_pulso_noticias_Id = btn.getAttribute('data-id');
      document.getElementById('pn-titulo').value = btn.getAttribute('data-titulo') || '';
      document.getElementById('pn-fecha').value = btn.getAttribute('data-fecha') || '';
      document.getElementById('pn-categoria').value = btn.getAttribute('data-categoria') || '';
      document.getElementById('pn-url').value = btn.getAttribute('data-url') || '';
      document.getElementById('pn-tipo').value = btn.getAttribute('data-tipo') || 'nacional';
      document.getElementById('btn-publicar-pn').textContent = 'Actualizar';
    }

    if (type === 'pulso_banners') {
      editing_pulso_banners_Id = btn.getAttribute('data-id');
      document.getElementById('pb-titulo').value = btn.getAttribute('data-titulo') || '';
      document.getElementById('pb-imagen').value = btn.getAttribute('data-imagen') || '';
      document.getElementById('pb-url').value = btn.getAttribute('data-url') || '';
      document.getElementById('btn-publicar-pb').textContent = 'Actualizar';
    }

    if (type === 'pp') {
      editingPPId = btn.getAttribute('data-id');
      document.getElementById('pp-nombre').value = btn.getAttribute('data-nombre') || '';
      document.getElementById('pp-logo').value = btn.getAttribute('data-logo') || '';
      document.getElementById('pp-link').value = btn.getAttribute('data-link') || '';
      document.getElementById('btn-publicar-pp').textContent = 'Actualizar Patrocinador';
      document.getElementById('form-pulso-patrocinador').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

// Init
checkAuth();
