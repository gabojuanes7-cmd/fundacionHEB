import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// DOM Elements
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Check Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'flex';
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
  } else {
    loginSection.style.display = 'flex';
    dashboardSection.style.display = 'none';
  }
});

// Login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;
  
  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginError.style.display = 'none';
  } catch (error) {
    console.error("Login error:", error);
    loginError.style.display = 'block';
  }
});

// Tab Navigation
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    
    if (target === 'logout') {
      signOut(auth);
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
    const q = query(collection(db, "solicitudes"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    tCert.innerHTML = '';
    tCont.innerHTML = '';
    tVol.innerHTML = '';
    if (tCursos) tCursos.innerHTML = '';
    
    let countCert = 0, countCont = 0, countVol = 0, countCursos = 0;

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      
      if (data.tipo && data.tipo.startsWith('Contacto')) {
        tr.innerHTML = `
          <td>${data.fecha || 'Sin fecha'}</td>
          <td><strong>${data.nombre}</strong></td>
          <td><span class="badge" style="background: var(--admin-secondary); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">${data.tipo.replace('Contacto Web: ', '')}</span></td>
          <td>
            <a href="https://wa.me/${data.celular.replace(/\D/g,'')}" target="_blank" class="btn-link" style="color: #25D366; margin-right: 10px;" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:${data.correo}" class="btn-link" style="color: var(--admin-secondary);" title="Email"><i class="fas fa-envelope"></i> ${data.correo}</a>
          </td>
          <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${data.mensaje}">${data.mensaje}</td>
          <td><button class="btn-delete" data-id="${docSnap.id}" data-type="solicitud">Eliminar</button></td>
        `;
        tCont.appendChild(tr);
        countCont++;
      } else if (data.tipo && data.tipo.startsWith('Voluntariado')) {
        tr.innerHTML = `
          <td>${data.fecha || 'Sin fecha'}</td>
          <td><strong>${data.nombre}</strong></td>
          <td><span class="badge" style="background: #10b981; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">${data.tipo.replace('Voluntariado: ', '')}</span></td>
          <td><a href="mailto:${data.correo}" class="btn-link" style="color: var(--admin-secondary);" title="Email"><i class="fas fa-envelope"></i> ${data.correo}</a></td>
          <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${data.mensaje}">${data.mensaje}</td>
          <td><button class="btn-delete" data-id="${docSnap.id}" data-type="solicitud">Eliminar</button></td>
        `;
        tVol.appendChild(tr);
        countVol++;
      } else if (data.tipo && data.tipo.startsWith('Curso:')) {
        tr.innerHTML = `
          <td>${data.fecha || 'Sin fecha'}</td>
          <td><strong>${data.nombre}</strong></td>
          <td><span class="badge" style="background: #8b5cf6; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">${data.tipo.replace('Curso: ', '')}</span></td>
          <td>
            <a href="https://wa.me/${data.celular.replace(/\\D/g,'')}" target="_blank" class="btn-link" style="color: #25D366; margin-right: 10px;" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:${data.correo}" class="btn-link" style="color: var(--admin-secondary);" title="Email"><i class="fas fa-envelope"></i> ${data.correo}</a>
          </td>
          <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${data.mensaje}">${data.mensaje || 'Interesado en el curso'}</td>
          <td><button class="btn-delete" data-id="${docSnap.id}" data-type="solicitud">Eliminar</button></td>
        `;
        if (tCursos) tCursos.appendChild(tr);
        countCursos++;
      } else {
        // Certificaciones y Otros
        tr.innerHTML = `
          <td>${data.fecha || 'Sin fecha'}</td>
          <td><strong>${data.nombre}</strong></td>
          <td><span class="badge" style="background: var(--admin-primary); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">${data.tipo}</span></td>
          <td>
            <a href="https://wa.me/${data.celular.replace(/\D/g,'')}" target="_blank" class="btn-link" style="color: #25D366; margin-right: 10px;" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:${data.correo}" class="btn-link" style="color: var(--admin-secondary);" title="Email"><i class="fas fa-envelope"></i> ${data.correo}</a>
          </td>
          <td><span style="color: #f59e0b; font-weight: bold;">${(data.estado || 'pendiente').toUpperCase()}</span></td>
          <td><button class="btn-delete" data-id="${docSnap.id}" data-type="solicitud">Eliminar</button></td>
        `;
        tCert.appendChild(tr);
        countCert++;
      }
    });

    if(countCert === 0) tCert.innerHTML = '<tr><td colspan="6" style="text-align: center;">No hay solicitudes de certificación.</td></tr>';
    if(countCont === 0) tCont.innerHTML = '<tr><td colspan="6" style="text-align: center;">No hay mensajes de contacto.</td></tr>';
    if(countVol === 0) tVol.innerHTML = '<tr><td colspan="6" style="text-align: center;">No hay postulaciones de voluntariado.</td></tr>';
    if(countCursos === 0 && tCursos) tCursos.innerHTML = '<tr><td colspan="6" style="text-align: center;">No hay inscripciones a cursos.</td></tr>';

  } catch (error) {
    console.error("Error cargando solicitudes:", error);
    tCert.innerHTML = '<tr><td colspan="6">Error cargando datos.</td></tr>';
    tCont.innerHTML = '<tr><td colspan="6">Error cargando datos.</td></tr>';
    tVol.innerHTML = '<tr><td colspan="6">Error cargando datos.</td></tr>';
  }
}

// ==========================================
// MÓDULO NOTICIAS
// ==========================================
const formNoticia = document.getElementById('form-noticia');
const btnNoticia = document.getElementById('btn-publicar-noticia');
const loadingNoticia = document.getElementById('noticia-loading');
let editing_noticias_Id = null;
const listaNoticias = document.getElementById('lista-noticias');

formNoticia.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnNoticia.disabled = true;
  loadingNoticia.style.display = 'block';

  const titulo = document.getElementById('noticia-titulo').value;
  const fecha = document.getElementById('noticia-fecha').value;
  const categoria = document.getElementById('noticia-categoria').value;
  const contenido = document.getElementById('noticia-contenido').value;
  const imageUrl = document.getElementById('noticia-imagen').value;

  try {
    if (editing_noticias_Id) {
      await updateDoc(doc(db, "noticias", editing_noticias_Id), {
      titulo, fecha, categoria, contenido, imageUrl,
      timestamp: Date.now()});
      alert("Elemento actualizado exitosamente!");
      editing_noticias_Id = null;
      document.getElementById('btn-publicar-noticia').textContent = 'Agregar';
    } else {
      await addDoc(collection(db, "noticias"), {
      titulo, fecha, categoria, contenido, imageUrl,
      timestamp: Date.now()});
      alert("Elemento agregado exitosamente!");
    }
    alert("Noticia publicada exitosamente!");
    formNoticia.reset();
    cargarNoticias();
  } catch (error) {
    console.error("Error subiendo noticia:", error);
    alert("Hubo un error al publicar.");
  } finally {
    btnNoticia.disabled = false;
    loadingNoticia.style.display = 'none';
  }
});

async function cargarNoticias() {
  listaNoticias.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "noticias"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaNoticias.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.fecha}</td>
        <td>${data.titulo}</td>
        <td style="white-space: nowrap;">
  <button class="btn-edit" data-id="${docSnap.id}" data-type="noticias" data-titulo="${data.titulo}" data-fecha="${data.fecha}" data-categoria="${data.categoria}" data-contenido="${data.contenido}" data-imagen="${data.imageUrl}" style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Editar</button>
  <button class="btn-delete" data-id="${docSnap.id}" data-type="noticia">Eliminar</button>
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
let editingEmpresaId = null; // Track if we're editing

formEmpresa.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnEmpresa.disabled = true;
  loadingEmpresa.style.display = 'block';

  const nombre = document.getElementById('empresa-nombre').value;
  const tipo = document.getElementById('empresa-tipo').value;
  const categoria = document.getElementById('empresa-categoria').value;
  const link = document.getElementById('empresa-link').value;
  const logoUrl = document.getElementById('empresa-logo').value;

  try {
    if (editingEmpresaId) {
      // Update existing
      await updateDoc(doc(db, "directorio", editingEmpresaId), {
        nombre, tipo, categoria, link, logoUrl,
        timestamp: Date.now()
      });
      alert("Empresa actualizada exitosamente!");
      editingEmpresaId = null;
      btnEmpresa.textContent = 'Agregar Empresa';
    } else {
      // Add new
      await addDoc(collection(db, "directorio"), {
        nombre, tipo, categoria, link, logoUrl,
        timestamp: Date.now()
      });
      alert("Empresa agregada exitosamente!");
    }
    formEmpresa.reset();
    cargarEmpresas();
  } catch (error) {
    console.error("Error guardando empresa:", error);
    alert("Hubo un error al guardar.");
  } finally {
    btnEmpresa.disabled = false;
    loadingEmpresa.style.display = 'none';
  }
});

const tipoLabels = {
  'miembro': 'Empresa Miembro',
  'alianza': 'Alianza Interinstitucional',
  'mercado': 'Mercado Interno'
};
const tipoColors = {
  'miembro': '#c0392b',
  'alianza': '#2980b9',
  'mercado': '#27ae60'
};

async function cargarEmpresas() {
  listaEmpresas.innerHTML = '<tr><td colspan="4">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "directorio"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaEmpresas.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tipoLabel = tipoLabels[data.tipo] || data.tipo || 'Sin tipo';
      const tipoColor = tipoColors[data.tipo] || '#6b7280';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${data.nombre}</strong></td>
        <td><span style="background: ${tipoColor}; color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; white-space: nowrap;">${tipoLabel}</span></td>
        <td>${data.categoria}</td>
        <td style="white-space: nowrap;">
          <button class="btn-edit" data-id="${docSnap.id}" data-type="empresa" 
            data-nombre="${data.nombre}" data-tipo="${data.tipo}" data-categoria="${data.categoria}" 
            data-link="${data.link}" data-logo="${data.logoUrl}"
            style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;">
            <i class="fas fa-edit"></i> Editar
          </button>
          <button class="btn-delete" data-id="${docSnap.id}" data-type="empresa">Eliminar</button>
        </td>
      `;
      listaEmpresas.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando empresas:", error);
    listaEmpresas.innerHTML = '<tr><td colspan="4">Error cargando datos.</td></tr>';
  }
}

// ==========================================
// MÓDULO PULSO ECONÓMICO (PDFs)
// ==========================================
const formPulso = document.getElementById('form-pulso');
const btnPulso = document.getElementById('btn-guardar-pulso');
const loadingPulso = document.getElementById('pulso-loading');

if (formPulso) {
  formPulso.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnPulso.disabled = true;
    loadingPulso.style.display = 'block';

    const data = {
      indicadores: document.getElementById('pulso-indicadores').value,
      smn: document.getElementById('pulso-smn').value,
      ipc: document.getElementById('pulso-ipc').value,
      cotizaciones: document.getElementById('pulso-cotizaciones').value,
      cargas: document.getElementById('pulso-cargas').value,
      timestamp: Date.now()
    };

    try {
      await setDoc(doc(db, "configuracion", "pulso_pdfs"), data);
      alert("Enlaces de Pulso Económico guardados exitosamente!");
    } catch (error) {
      console.error("Error guardando pulso:", error);
      alert("Hubo un error al guardar.");
    } finally {
      btnPulso.disabled = false;
      loadingPulso.style.display = 'none';
    }
  });
}

async function cargarPulso() {
  try {
    const docSnap = await getDoc(doc(db, "configuracion", "pulso_pdfs"));
    if (docSnap.exists()) {
      const data = docSnap.data();
      if(document.getElementById('pulso-indicadores')) document.getElementById('pulso-indicadores').value = data.indicadores || '';
      if(document.getElementById('pulso-smn')) document.getElementById('pulso-smn').value = data.smn || '';
      if(document.getElementById('pulso-ipc')) document.getElementById('pulso-ipc').value = data.ipc || '';
      if(document.getElementById('pulso-cotizaciones')) document.getElementById('pulso-cotizaciones').value = data.cotizaciones || '';
      if(document.getElementById('pulso-cargas')) document.getElementById('pulso-cargas').value = data.cargas || '';
    }
  } catch (error) {
    console.error("Error cargando pulso:", error);
  }
}

// ==========================================
// MÓDULO PULSO NOTICIAS (NUEVO)
// ==========================================
const formPulsoNoticia = document.getElementById('form-pulso-noticia');
const btnPulsoNoticia = document.getElementById('btn-publicar-pn');
const loadingPulsoNoticia = document.getElementById('pn-loading');
const listaPulsoNoticias = document.getElementById('lista-pulso-noticias');

if (formPulsoNoticia) {
  formPulsoNoticia.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnPulsoNoticia.disabled = true;
    loadingPulsoNoticia.style.display = 'block';

    const titulo = document.getElementById('pn-titulo').value;
    const url = document.getElementById('pn-url').value;
    const subcategoria = document.getElementById('pn-subcategoria').value;
    const tipo = document.getElementById('pn-tipo').value;
    const fecha = document.getElementById('pn-fecha').value;

    try {
      await addDoc(collection(db, "pulso_noticias"), {
        titulo, url, subcategoria, tipo, fecha,
        timestamp: Date.now()
      });
      alert("Enlace de noticia publicado exitosamente!");
      formPulsoNoticia.reset();
      cargarPulsoNoticias();
    } catch (error) {
      console.error("Error publicando enlace:", error);
      alert("Hubo un error al publicar.");
    } finally {
      btnPulsoNoticia.disabled = false;
      loadingPulsoNoticia.style.display = 'none';
    }
  });
}

async function cargarPulsoNoticias() {
  if (!listaPulsoNoticias) return;
  listaPulsoNoticias.innerHTML = '<tr><td colspan="4">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "pulso_noticias"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaPulsoNoticias.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.fecha}</td>
        <td><a href="${data.url}" target="_blank" style="color: var(--admin-primary);">${data.titulo}</a></td>
        <td><span style="text-transform: capitalize;">${data.tipo}</span></td>
        <td><button class="btn-delete" data-id="${docSnap.id}" data-type="pulso_noticia">Eliminar</button></td>
      `;
      listaPulsoNoticias.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando pulso noticias:", error);
    listaPulsoNoticias.innerHTML = '<tr><td colspan="4">Error cargando datos.</td></tr>';
  }
}

// ==========================================
// MÓDULO PULSO BANNERS (NUEVO)
// ==========================================
const formPulsoBanner = document.getElementById('form-pulso-banner');
const btnPulsoBanner = document.getElementById('btn-publicar-pb');
const loadingPulsoBanner = document.getElementById('pb-loading');
let editing_pulso_banners_Id = null;
const listaPulsoBanners = document.getElementById('lista-pulso-banners');

if (formPulsoBanner) {
  formPulsoBanner.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnPulsoBanner.disabled = true;
    loadingPulsoBanner.style.display = 'block';

    const titulo = document.getElementById('pb-titulo').value;
    const imageUrl = document.getElementById('pb-imagen').value;
    const url = document.getElementById('pb-url').value;

    try {
      if (editing_pulso_banners_Id) {
      await updateDoc(doc(db, "pulso_banners", editing_pulso_banners_Id), {
        titulo, imageUrl, url,
        timestamp: Date.now()});
      alert("Elemento actualizado exitosamente!");
      editing_pulso_banners_Id = null;
      document.getElementById('btn-publicar-pb').textContent = 'Agregar';
    } else {
      await addDoc(collection(db, "pulso_banners"), {
        titulo, imageUrl, url,
        timestamp: Date.now()});
      alert("Elemento agregado exitosamente!");
    }
      alert("Banner agregado exitosamente!");
      formPulsoBanner.reset();
      cargarPulsoBanners();
        cargarPulsoPatrocinadores();
    } catch (error) {
      console.error("Error subiendo banner:", error);
      alert("Hubo un error al guardar.");
    } finally {
      btnPulsoBanner.disabled = false;
      loadingPulsoBanner.style.display = 'none';
    }
  });
}

async function cargarPulsoBanners() {
  if (!listaPulsoBanners) return;
  listaPulsoBanners.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "pulso_banners"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaPulsoBanners.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.titulo}</td>
        <td><button class="btn-delete" data-id="${docSnap.id}" data-type="pulso_banner">Eliminar</button></td>
      `;
      listaPulsoBanners.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando banners:", error);
    listaPulsoBanners.innerHTML = '<tr><td colspan="2">Error cargando datos.</td></tr>';
  }
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

  const titulo = document.getElementById('pub-titulo').value;
  const portadaUrl = document.getElementById('pub-portada').value;
  const pdfUrl = document.getElementById('pub-pdf').value;

  try {
    if (editing_publicaciones_Id) {
      await updateDoc(doc(db, "publicaciones", editing_publicaciones_Id), {
      titulo, portadaUrl, pdfUrl,
      timestamp: Date.now()});
      alert("Elemento actualizado exitosamente!");
      editing_publicaciones_Id = null;
      document.getElementById('btn-publicar-pub').textContent = 'Agregar';
    } else {
      await addDoc(collection(db, "publicaciones"), {
      titulo, portadaUrl, pdfUrl,
      timestamp: Date.now()});
      alert("Elemento agregado exitosamente!");
    }
    alert("Publicación agregada exitosamente!");
    formPublicacion.reset();
    cargarPublicaciones();
  } catch (error) {
    console.error("Error subiendo publicación:", error);
    alert("Hubo un error al guardar.");
  } finally {
    btnPublicacion.disabled = false;
    loadingPublicacion.style.display = 'none';
  }
});

async function cargarPublicaciones() {
  listaPublicaciones.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "publicaciones"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaPublicaciones.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.titulo}</td>
        <td style="white-space: nowrap;">
  <button class="btn-edit" data-id="${docSnap.id}" data-type="publicaciones" data-titulo="${data.titulo}" data-url="${data.url}" style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;"><i class="fas fa-edit"></i> Editar</button>
  <button class="btn-delete" data-id="${docSnap.id}" data-type="publicacion">Eliminar</button>
</td>
      `;
      listaPublicaciones.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando publicaciones:", error);
    listaPublicaciones.innerHTML = '<tr><td colspan="2">Error cargando datos.</td></tr>';
  }
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

  const titulo = document.getElementById('act-titulo').value;
  const aficheUrl = document.getElementById('act-afiche').value;
  const linkUrl = document.getElementById('act-link').value;

  try {
    await addDoc(collection(db, "actividades"), {
      titulo, aficheUrl, linkUrl,
      timestamp: Date.now()
    });
    alert("Actividad agregada exitosamente!");
    formActividad.reset();
    cargarActividades();
  } catch (error) {
    console.error("Error subiendo actividad:", error);
    alert("Hubo un error al guardar.");
  } finally {
    btnActividad.disabled = false;
    loadingActividad.style.display = 'none';
  }
});

async function cargarActividades() {
  listaActividades.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "actividades"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaActividades.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.titulo}</td>
        <td><button class="btn-delete" data-id="${docSnap.id}" data-type="actividad">Eliminar</button></td>
      `;
      listaActividades.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando actividades:", error);
    listaActividades.innerHTML = '<tr><td colspan="2">Error cargando datos.</td></tr>';
  }
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

    const titulo = document.getElementById('cap-titulo').value;
    const imagenUrl = document.getElementById('cap-flyer').value;
    const contactoUrl = document.getElementById('cap-contacto').value;
    const fechaCreacion = document.getElementById('cap-fecha').value;

    try {
      await addDoc(collection(db, "capacitaciones"), {
        titulo, imagenUrl, contactoUrl, fechaCreacion,
        timestamp: Date.now()
      });
      alert("Capacitación agregada exitosamente!");
      formCapacitacion.reset();
      cargarCapacitaciones();
    } catch (error) {
      console.error("Error subiendo capacitación:", error);
      alert("Hubo un error al guardar.");
    } finally {
      btnCapacitacion.disabled = false;
      loadingCapacitacion.style.display = 'none';
    }
  });
}

async function cargarCapacitaciones() {
  if (!listaCapacitaciones) return;
  listaCapacitaciones.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "capacitaciones"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaCapacitaciones.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.fechaCreacion}</td>
        <td>${data.titulo}</td>
        <td><button class="btn-delete" data-id="${docSnap.id}" data-type="capacitacion">Eliminar</button></td>
      `;
      listaCapacitaciones.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando capacitaciones:", error);
    listaCapacitaciones.innerHTML = '<tr><td colspan="3">Error cargando datos.</td></tr>';
  }
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

    const titulo = document.getElementById('gal-titulo').value;
    const categoria = document.getElementById('gal-categoria').value;
    const imagenUrl = document.getElementById('gal-imagen').value;

    try {
      await addDoc(collection(db, "galeria"), {
        titulo, categoria, imagenUrl,
        timestamp: Date.now()
      });
      alert("Imagen agregada exitosamente!");
      formGaleria.reset();
      cargarGaleria();
    } catch (error) {
      console.error("Error subiendo imagen:", error);
      alert("Hubo un error al guardar.");
    } finally {
      btnGaleria.disabled = false;
      loadingGaleria.style.display = 'none';
    }
  });
}

async function cargarGaleria() {
  if (!listaGaleria) return;
  listaGaleria.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "galeria"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaGaleria.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${data.titulo}</td>
        <td>${data.categoria}</td>
        <td><button class="btn-delete" data-id="${docSnap.id}" data-type="galeria">Eliminar</button></td>
      `;
      listaGaleria.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando galería:", error);
    listaGaleria.innerHTML = '<tr><td colspan="3">Error cargando datos.</td></tr>';
  }
}

// ==========================================
// MÓDULO CONFIGURACIÓN
// ==========================================

// Redes Sociales
const formConfigSocial = document.getElementById('form-config-social');
if (formConfigSocial) {
  formConfigSocial.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('social-loading').style.display = 'block';
    try {
      await setDoc(doc(db, "configuracion", "redes_sociales"), {
        facebook: document.getElementById('cfg-facebook').value,
        youtube: document.getElementById('cfg-youtube').value,
        twitter: document.getElementById('cfg-twitter').value,
        tiktok: document.getElementById('cfg-tiktok').value,
        whatsapp: document.getElementById('cfg-whatsapp').value,
        timestamp: Date.now()
      });
      alert("Redes sociales guardadas!");
    } catch (error) {
      console.error(error);
      alert("Error al guardar.");
    } finally {
      document.getElementById('social-loading').style.display = 'none';
    }
  });
}

async function cargarConfigSocial() {
  try {
    const docSnap = await getDoc(doc(db, "configuracion", "redes_sociales"));
    if (docSnap.exists()) {
      const data = docSnap.data();
      if(document.getElementById('cfg-facebook')) document.getElementById('cfg-facebook').value = data.facebook || '';
      if(document.getElementById('cfg-youtube')) document.getElementById('cfg-youtube').value = data.youtube || '';
      if(document.getElementById('cfg-twitter')) document.getElementById('cfg-twitter').value = data.twitter || '';
      if(document.getElementById('cfg-tiktok')) document.getElementById('cfg-tiktok').value = data.tiktok || '';
      if(document.getElementById('cfg-whatsapp')) document.getElementById('cfg-whatsapp').value = data.whatsapp || '';
    }
  } catch (error) {
    console.error("Error cargando config social:", error);
  }
}

// Contacto
const formConfigContacto = document.getElementById('form-config-contacto');
if (formConfigContacto) {
  formConfigContacto.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('contacto-loading').style.display = 'block';
    try {
      await setDoc(doc(db, "configuracion", "datos_contacto"), {
        email: document.getElementById('cfg-email').value,
        direccion: document.getElementById('cfg-direccion').value,
        telefono: document.getElementById('cfg-telefono').value,
        timestamp: Date.now()
      });
      alert("Datos de contacto guardados!");
    } catch (error) {
      console.error(error);
      alert("Error al guardar.");
    } finally {
      document.getElementById('contacto-loading').style.display = 'none';
    }
  });
}

async function cargarConfigContacto() {
  try {
    const docSnap = await getDoc(doc(db, "configuracion", "datos_contacto"));
    if (docSnap.exists()) {
      const data = docSnap.data();
      if(document.getElementById('cfg-email')) document.getElementById('cfg-email').value = data.email || '';
      if(document.getElementById('cfg-direccion')) document.getElementById('cfg-direccion').value = data.direccion || '';
      if(document.getElementById('cfg-telefono')) document.getElementById('cfg-telefono').value = data.telefono || '';
    }
  } catch (error) {
    console.error("Error cargando config contacto:", error);
  }
}

// Junta Directiva
const formConfigJunta = document.getElementById('form-config-junta');
if (formConfigJunta) {
  formConfigJunta.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('junta-loading').style.display = 'block';
    try {
      await setDoc(doc(db, "configuracion", "junta_directiva"), {
        presidente: document.getElementById('cfg-presidente').value,
        vicepresidente: document.getElementById('cfg-vicepresidente').value,
        tesorera: document.getElementById('cfg-tesorera').value,
        secretario: document.getElementById('cfg-secretario').value,
        timestamp: Date.now()
      });
      alert("Directorio de la Junta guardado!");
    } catch (error) {
      console.error(error);
      alert("Error al guardar.");
    } finally {
      document.getElementById('junta-loading').style.display = 'none';
    }
  });
}

async function cargarConfigJunta() {
  try {
    const docSnap = await getDoc(doc(db, "configuracion", "junta_directiva"));
    if (docSnap.exists()) {
      const data = docSnap.data();
      if(document.getElementById('cfg-presidente')) document.getElementById('cfg-presidente').value = data.presidente || '';
      if(document.getElementById('cfg-vicepresidente')) document.getElementById('cfg-vicepresidente').value = data.vicepresidente || '';
      if(document.getElementById('cfg-tesorera')) document.getElementById('cfg-tesorera').value = data.tesorera || '';
      if(document.getElementById('cfg-secretario')) document.getElementById('cfg-secretario').value = data.secretario || '';
    }
  } catch (error) {
    console.error("Error cargando config junta:", error);
  }
}

// ==========================================
// ELIMINAR (Global Listener)
// ==========================================
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn-delete')) {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    
    if (confirm("¿Estás seguro de eliminar este registro? Esta acción no se puede deshacer.")) {
      try {
        const collectionMap = {
          'noticia': 'noticias',
          'empresa': 'directorio',
          'publicacion': 'publicaciones',
          'actividad': 'actividades',
          'capacitacion': 'capacitaciones',
          'galeria': 'galeria',
          'pulso_noticia': 'pulso_noticias',
          'pulso_banner': 'pulso_banners',
          'solicitud': 'solicitudes'
        };
        
        const collectionName = collectionMap[type];
        if (!collectionName) return;

        await deleteDoc(doc(db, collectionName, id));
        
        const reloadMap = {
          'noticia': cargarNoticias,
          'empresa': cargarEmpresas,
          'publicacion': cargarPublicaciones,
          'actividad': cargarActividades,
          'capacitacion': cargarCapacitaciones,
          'galeria': cargarGaleria,
          'pulso_noticia': cargarPulsoNoticias,
          'pulso_banner': cargarPulsoBanners,
          'solicitud': cargarSolicitudes
        };
        
        if (reloadMap[type]) reloadMap[type]();
      } catch (error) {
        console.error("Error eliminando:", error);
        alert("Error al eliminar.");
      }
    }
  }

  // EDIT EMPRESA
  if (e.target.closest('.btn-edit')) {
    const btn = e.target.closest('.btn-edit');

    if (btn.getAttribute('data-type') === 'pulso_banners') {
      editing_pulso_banners_Id = btn.getAttribute('data-id');
      document.getElementById('pb-titulo').value = btn.getAttribute('data-titulo') || '';
      document.getElementById('pb-imagen').value = btn.getAttribute('data-imagen') || '';
      document.getElementById('pb-url').value = btn.getAttribute('data-url') || '';
      document.getElementById('btn-publicar-pb').textContent = 'Actualizar';
      document.getElementById('form-pulso-banner').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    

    if (btn.getAttribute('data-type') === 'publicaciones') {
      editing_publicaciones_Id = btn.getAttribute('data-id');
      document.getElementById('pub-titulo').value = btn.getAttribute('data-titulo') || '';
      document.getElementById('pub-url').value = btn.getAttribute('data-url') || '';
      document.getElementById('btn-publicar-pub').textContent = 'Actualizar';
      document.getElementById('form-publicacion').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    

    if (btn.getAttribute('data-type') === 'noticias') {
      editing_noticias_Id = btn.getAttribute('data-id');
      document.getElementById('noticia-titulo').value = btn.getAttribute('data-titulo') || '';
      document.getElementById('noticia-fecha').value = btn.getAttribute('data-fecha') || '';
      document.getElementById('noticia-categoria').value = btn.getAttribute('data-categoria') || '';
      document.getElementById('noticia-contenido').value = btn.getAttribute('data-contenido') || '';
      document.getElementById('noticia-imagen').value = btn.getAttribute('data-imagen') || '';
      document.getElementById('btn-publicar-noticia').textContent = 'Actualizar';
      document.getElementById('form-noticia').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    

    const type = btn.getAttribute('data-type');
    
    if (type === 'empresa') {
      editingEmpresaId = btn.getAttribute('data-id');
      document.getElementById('empresa-nombre').value = btn.getAttribute('data-nombre') || '';
      document.getElementById('empresa-tipo').value = btn.getAttribute('data-tipo') || 'miembro';
      document.getElementById('empresa-categoria').value = btn.getAttribute('data-categoria') || '';
      document.getElementById('empresa-link').value = btn.getAttribute('data-link') || '';
      document.getElementById('empresa-logo').value = btn.getAttribute('data-logo') || '';
      btnEmpresa.textContent = '✏️ Actualizar Empresa';
      
      // Scroll to form
      formEmpresa.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});


// ==========================================
// MÓDULO PATROCINADORES (PULSO ECONÓMICO)
// ==========================================
const formPP = document.getElementById('form-pulso-patrocinador');
const btnPP = document.getElementById('btn-publicar-pp');
const loadingPP = document.getElementById('pp-loading');
const listaPP = document.getElementById('lista-pulso-patrocinadores');
let editingPPId = null;

if (formPP) {
  formPP.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnPP.disabled = true;
    loadingPP.style.display = 'block';

    const nombre = document.getElementById('pp-nombre').value;
    const logoUrl = document.getElementById('pp-logo').value;
    const link = document.getElementById('pp-link').value;

    try {
      if (editingPPId) {
        await updateDoc(doc(db, "pulso_patrocinadores", editingPPId), {
          nombre, logoUrl, link,
          timestamp: Date.now()
        });
        alert("Patrocinador actualizado exitosamente!");
        editingPPId = null;
        btnPP.textContent = 'Agregar Patrocinador';
      } else {
        await addDoc(collection(db, "pulso_patrocinadores"), {
          nombre, logoUrl, link,
          timestamp: Date.now()
        });
        alert("Patrocinador agregado exitosamente!");
      }
      formPP.reset();
      cargarPulsoPatrocinadores();
    } catch (error) {
      console.error("Error guardando patrocinador:", error);
      alert("Hubo un error al guardar.");
    } finally {
      btnPP.disabled = false;
      loadingPP.style.display = 'none';
    }
  });
}

async function cargarPulsoPatrocinadores() {
  if (!listaPP) return;
  listaPP.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';
  try {
    const q = query(collection(db, "pulso_patrocinadores"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    listaPP.innerHTML = '';
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${data.nombre}</strong></td>
        <td style="white-space: nowrap;">
          <button class="btn-edit" data-id="${docSnap.id}" data-type="pp" 
            data-nombre="${data.nombre}" data-logo="${data.logoUrl}" data-link="${data.link}"
            style="background: #3b82f6; color: white; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-size: 0.8rem;">
            <i class="fas fa-edit"></i> Editar
          </button>
          <button class="btn-delete" data-id="${docSnap.id}" data-type="pulso_patrocinadores">Eliminar</button>
        </td>
      `;
      listaPP.appendChild(tr);
    });
  } catch (error) {
    console.error("Error cargando patrocinadores:", error);
    listaPP.innerHTML = '<tr><td colspan="2">Error cargando datos.</td></tr>';
  }
}

// Attach logic to global edit listener
document.addEventListener('click', (e) => {
  if (e.target.closest('.btn-edit')) {
    const btn = e.target.closest('.btn-edit');
    if (btn.getAttribute('data-type') === 'pp') {
      editingPPId = btn.getAttribute('data-id');
      document.getElementById('pp-nombre').value = btn.getAttribute('data-nombre') || '';
      document.getElementById('pp-logo').value = btn.getAttribute('data-logo') || '';
      document.getElementById('pp-link').value = btn.getAttribute('data-link') || '';
      document.getElementById('btn-publicar-pp').textContent = 'Actualizar Patrocinador';
      document.getElementById('form-pulso-patrocinador').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});
