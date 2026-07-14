import { db } from './firebase-config.js';
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('capacitaciones-container');
    const lightbox = document.getElementById('flyerLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightboxBtn = document.getElementById('closeLightbox');

    if (!container) return;

    try {
        const q = query(collection(db, "capacitaciones"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        
        container.innerHTML = ''; // Limpiar spinner

        if (querySnapshot.empty) {
            container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 4rem;"><p>No hay cursos disponibles en este momento.</p></div>`;
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const fechaStr = data.fechaCreacion ? new Date(data.fechaCreacion).toLocaleDateString('es-ES') : 'Reciente';
            
            const card = document.createElement('div');
            card.className = 'course-card';
            
            card.innerHTML = `
                <img src="${data.imagenUrl}" alt="${data.titulo}" class="course-card__image" data-full="${data.imagenUrl}">
                <div class="course-card__body">
                    <div class="course-card__date"><i class="far fa-calendar-alt"></i> Publicado: ${fechaStr}</div>
                    <h3 class="course-card__title">${data.titulo}</h3>
                    <div class="course-card__footer">
                        <button class="btn btn--outline btn--sm btn-view-flyer" data-full="${data.imagenUrl}">Ver Flyer</button>
                        <button class="btn btn--primary btn--sm btn-abrir-solicitud-curso" data-tipo="Curso: ${data.titulo}"><i class="fab fa-whatsapp"></i> Inscribirme</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        // Event Listeners for Lightbox
        const flyerImages = document.querySelectorAll('.course-card__image, .btn-view-flyer');
        flyerImages.forEach(img => {
            img.addEventListener('click', (e) => {
                const url = e.currentTarget.getAttribute('data-full');
                if (url) {
                    lightboxImg.src = url;
                    lightbox.classList.add('active');
                }
            });
        });

        // Event Listeners for Solicitud Cursos Modal
        const btnInscribirse = document.querySelectorAll('.btn-abrir-solicitud-curso');
        const modal = document.getElementById('solicitud-modal');
        const tipoInput = document.getElementById('solicitud-tipo');
        btnInscribirse.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tipo = btn.getAttribute('data-tipo');
                if (tipo && tipoInput) tipoInput.value = tipo;
                if (modal) modal.classList.add('active');
            });
        });

        closeLightboxBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                lightboxImg.src = '';
            }
        });

    } catch (error) {
        console.error("Error cargando capacitaciones: ", error);
        container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: red;"><p>Error al cargar los cursos. Inténtalo más tarde.</p></div>`;
    }
});
