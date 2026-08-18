  <!-- ========== FOOTER PULSO ========== -->
  <footer class="pulso-footer">
    <div class="pulso-footer-grid">
      <div>
        <h4>Contacto</h4>
        <p><a href="https://www.google.com/maps/search/Fundaci%C3%B3n+Hecho+en+Bolivia,+Cochabamba" target="_blank" style="color: inherit; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='inherit'"><i class="fas fa-map-marker-alt" style="margin-right: 0.25rem;"></i>Calle Obispo Anaya Nro. 518, entre calle J. Quintín Mendoza y Calle J. Aguirre Acharo.</a></p>
        <p>Cochabamba, Bolivia</p>
        <p style="margin-top: 0.5rem;"><a href="https://wa.me/59163889148" target="_blank" style="color: inherit; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='inherit'"><i class="fas fa-phone"></i> +591 63889148</a></p>
        <p><a href="mailto:fundacionhechoenbolivia@gmail.com" style="color: inherit; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='inherit'"><i class="fas fa-envelope"></i> fundacionhechoenbolivia@gmail.com</a></p>
      </div>
      <div>
        <h4>Síguenos</h4>
        <div class="pulso-footer-socials">
          <a href="https://www.facebook.com/FundacionHechoBolivia/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/fundacionhechoenbolivia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@hechoenbolivia" target="_blank" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          <a href="https://www.linkedin.com/company/fundacion-hecho-en-bolivia/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/channel/UCmrdnziOy67OzB587EJtAdA" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="https://x.com/FHechoenBolivia" target="_blank" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
          <a href="https://api.whatsapp.com/send?phone=59171411888" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div>
        <h4>Pulso Económico</h4>
        <p>Tu fuente de información económica en Bolivia</p>
      </div>
    </div>
    <div class="pulso-footer-bottom">
      <p>&copy; 2026 Pulso Económico. Todos los derechos reservados.</p>
    </div>
  </footer>

  <script type="module" src="<?php echo $basePath; ?>js/public-db.js"></script>
  <script>
    // Mobile toggle
    const mobileBtn = document.getElementById('pulso-mobile-btn');
    const linksEl = document.querySelector('.pulso-links');
    if (mobileBtn && linksEl) {
      mobileBtn.addEventListener('click', () => {
        linksEl.style.display = linksEl.style.display === 'flex' ? 'none' : 'flex';
      });
    }
  </script>
  <!-- Floating Conversor Button -->
  <a href="https://www.bcb.gob.bo/librerias/indicadores/otras/ultimo.php" target="_blank" class="floating-conversor" title="Conversor de Moneda">
    <i class="fas fa-exchange-alt"></i>
  </a>
</body>
</html>
