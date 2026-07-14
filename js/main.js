/* ============================================================
   FUNDACIÓN HECHO EN BOLIVIA — Main JavaScript
   Vanilla JS — Zero dependencies
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  PageLoader.init();
  Navbar.init();
  MobileMenu.init();
  ScrollAnimations.init();
  CounterAnimation.init();
  ProjectFilters.init();
  GalleryLightbox.init();
  ContactForm.init();
  ScrollToTop.init();
  DarkMode.init();
  TypingEffect.init();
  Parallax.init();
  SmoothScroll.init();
  Ticker.init();
  AccessibleDropdowns.init();
  AccordionHero.init();
});

/* ============================================================
   PAGE LOADER
   ============================================================ */
const PageLoader = {
  init() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    const hideLoader = () => {
      if (loader.classList.contains('hidden')) return;
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 500);
      }, 300);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      // Fallback just in case some resource hangs indefinitely
      setTimeout(hideLoader, 5000);
    }
  }
};

/* ============================================================
   NAVBAR — Smart scroll behavior
   ============================================================ */
const Navbar = {
  lastScrollY: 0,
  ticking: false,

  init() {
    this.header = document.querySelector('.header');
    if (!this.header) return;

    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => this.onScroll());
        this.ticking = true;
      }
    });

    // Initial check
    this.onScroll();
  },

  onScroll() {
    const scrollY = window.scrollY;

    // Add scrolled class
    if (scrollY > 50) {
      this.header.classList.add('header--scrolled');
      this.header.classList.remove('header--transparent');
    } else {
      this.header.classList.remove('header--scrolled');
      if (this.header.dataset.transparent === 'true') {
        this.header.classList.add('header--transparent');
      }
    }

    // Hide/show on scroll direction
    if (scrollY > 300) {
      if (scrollY > this.lastScrollY + 5) {
        this.header.classList.add('header--hidden');
      } else if (scrollY < this.lastScrollY - 5) {
        this.header.classList.remove('header--hidden');
      }
    } else {
      this.header.classList.remove('header--hidden');
    }

    this.lastScrollY = scrollY;
    this.ticking = false;
  }
};

/* ============================================================
   MOBILE MENU
   ============================================================ */
const MobileMenu = {
  init() {
    this.toggle = document.querySelector('.mobile-toggle');
    this.nav = document.querySelector('.nav');
    this.overlay = document.querySelector('.nav-overlay');

    if (!this.toggle || !this.nav) return;

    this.toggle.addEventListener('click', () => this.toggleMenu());

    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.closeMenu());
    }

    // Close on link click
    this.nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMenu();
    });
  },

  toggleMenu() {
    this.toggle.classList.toggle('active');
    this.nav.classList.toggle('active');
    if (this.overlay) this.overlay.classList.toggle('active');
    document.body.style.overflow = this.nav.classList.contains('active') ? 'hidden' : '';
  },

  closeMenu() {
    this.toggle.classList.remove('active');
    this.nav.classList.remove('active');
    if (this.overlay) this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ============================================================
   SCROLL ANIMATIONS — IntersectionObserver
   ============================================================ */
const ScrollAnimations = {
  init() {
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale');

    if (!elements.length) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => el.classList.add('animated'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }
};

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
const CounterAnimation = {
  init() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  },

  animate(el) {
    const target = parseInt(el.dataset.counter);
    const duration = parseInt(el.dataset.duration) || 2000;
    const suffix = el.dataset.suffix || '';
    const start = 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (target - start) + start);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
};

/* ============================================================
   PROJECT FILTERS
   ============================================================ */
const ProjectFilters = {
  init() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('[data-category]');

    if (!filterBtns.length || !items.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');

        const filter = btn.dataset.filter;

        items.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = '';
            item.style.animation = 'fade-up 0.5s ease forwards';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
};

/* ============================================================
   GALLERY LIGHTBOX
   ============================================================ */
const GalleryLightbox = {
  currentIndex: 0,
  images: [],

  init() {
    this.lightbox = document.querySelector('.lightbox');
    this.lightboxImg = document.querySelector('.lightbox__img');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!this.lightbox || !galleryItems.length) return;

    this.images = Array.from(galleryItems).map(item => {
      const img = item.querySelector('img');
      return img ? img.src : '';
    });

    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => this.open(index));
    });

    // Close
    this.lightbox.querySelector('.lightbox__close')?.addEventListener('click', () => this.close());
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) this.close();
    });

    // Navigate
    this.lightbox.querySelector('.lightbox__nav--prev')?.addEventListener('click', () => this.prev());
    this.lightbox.querySelector('.lightbox__nav--next')?.addEventListener('click', () => this.next());

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  },

  open(index) {
    this.currentIndex = index;
    this.lightboxImg.src = this.images[index];
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  },

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.lightboxImg.src = this.images[this.currentIndex];
  },

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.lightboxImg.src = this.images[this.currentIndex];
  }
};

/* ============================================================
   CONTACT FORM VALIDATION
   ============================================================ */
const ContactForm = {
  init() {
    this.form = document.querySelector('#contact-form');
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Real-time validation
    this.form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        const group = input.closest('.form-group');
        if (group.classList.contains('form-group--error')) {
          this.validateField(input);
        }
      });
    });
  },

  validateField(input) {
    const group = input.closest('.form-group');
    const errorEl = group.querySelector('.form-error');
    let isValid = true;
    let message = '';

    // Required
    if (input.required && !input.value.trim()) {
      isValid = false;
      message = 'Este campo es requerido';
    }
    // Email
    else if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        message = 'Ingresa un email válido';
      }
    }
    // Min length
    else if (input.minLength > 0 && input.value.length < input.minLength) {
      isValid = false;
      message = `Mínimo ${input.minLength} caracteres`;
    }

    if (!isValid) {
      group.classList.add('form-group--error');
      group.classList.remove('form-group--success');
      if (errorEl) errorEl.textContent = message;
    } else if (input.value.trim()) {
      group.classList.remove('form-group--error');
      group.classList.add('form-group--success');
    } else {
      group.classList.remove('form-group--error', 'form-group--success');
    }

    return isValid;
  },

  handleSubmit(e) {
    e.preventDefault();

    const inputs = this.form.querySelectorAll('.form-input, .form-textarea');
    let allValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        allValid = false;
      }
    });

    if (allValid) {
      this.form.dispatchEvent(new CustomEvent('form-valid', { bubbles: true }));
      // Las notificaciones y reset se manejan en public-db.js
    } else {
      Toast.show('Por favor, completa todos los campos correctamente.', 'error');
    }
  }
};

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
const Toast = {
  show(message, type = 'success', duration = 4000) {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    `;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }
};

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
const ScrollToTop = {
  init() {
    this.btn = document.querySelector('.scroll-top');
    if (!this.btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.btn.classList.add('visible');
      } else {
        this.btn.classList.remove('visible');
      }
    });

    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/* ============================================================
   DARK MODE
   ============================================================ */
const DarkMode = {
  init() {
    this.toggleBtn = document.querySelectorAll('.theme-toggle');
    if (!this.toggleBtn.length) return;

    // Check saved preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.updateIcons(true);
    }

    this.toggleBtn.forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  },

  toggle() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    this.updateIcons(!isDark);
  },

  updateIcons(isDark) {
    this.toggleBtn.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
      }
    });
  }
};

/* ============================================================
   TYPING EFFECT
   ============================================================ */
const TypingEffect = {
  init() {
    const el = document.querySelector('[data-typing]');
    if (!el) return;

    const words = el.dataset.typing.split(',').map(w => w.trim());
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }
};

/* ============================================================
   PARALLAX (subtle)
   ============================================================ */
const Parallax = {
  init() {
    const elements = document.querySelectorAll('[data-parallax]');
    if (!elements.length) return;

    // Skip on mobile for performance
    if (window.innerWidth < 768) return;

    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        elements.forEach(el => {
          const speed = parseFloat(el.dataset.parallax) || 0.3;
          const rect = el.getBoundingClientRect();
          const offset = (rect.top + scrollY) * speed;
          el.style.transform = `translateY(${scrollY * speed - offset}px)`;
        });
      });
    });
  }
};

/* ============================================================
   SMOOTH SCROLL (for anchor links)
   ============================================================ */
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = 100; // header height
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }
};

/* ============================================================
   TICKER — Infinite Marquee
   ============================================================ */
const Ticker = {
  init() {
    const track = document.querySelector('.ticker__track');
    if (!track) return;

    // Clone items for seamless loop
    const items = track.innerHTML;
    track.innerHTML = items + items;
  }
};

/* ============================================================
   ACCESSIBLE DROPDOWNS — Keyboard support
   ============================================================ */
const AccessibleDropdowns = {
  init() {
    const triggers = document.querySelectorAll('.nav__item > .nav__link[aria-haspopup]');
    if (!triggers.length) return;

    triggers.forEach(trigger => {
      const parent = trigger.closest('.nav__item');
      const dropdown = parent.querySelector('.dropdown');
      if (!dropdown) return;

      // Toggle on Enter/Space
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          this.closeAll();
          if (!isOpen) {
            trigger.setAttribute('aria-expanded', 'true');
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
            // Focus first item
            const firstLink = dropdown.querySelector('.dropdown__link');
            if (firstLink) firstLink.focus();
          }
        }
        if (e.key === 'Escape') {
          this.closeAll();
          trigger.focus();
        }
      });

      // Close on Escape from within dropdown
      dropdown.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeAll();
          trigger.focus();
        }
      });

      // Update aria on hover
      parent.addEventListener('mouseenter', () => {
        trigger.setAttribute('aria-expanded', 'true');
      });
      parent.addEventListener('mouseleave', () => {
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  },

  closeAll() {
    document.querySelectorAll('.nav__item > .nav__link[aria-haspopup]').forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      const dd = t.closest('.nav__item').querySelector('.dropdown');
      if (dd) {
        dd.style.opacity = '';
        dd.style.visibility = '';
        dd.style.transform = '';
      }
    });
  }
};

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
const CustomCursor = {
  init() {
    this.cursor = document.querySelector('.custom-cursor');
    this.follower = document.querySelector('.custom-cursor-follower');
    
    if (!this.cursor || !this.follower) return;

    // Mobile check - disable custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.cursor.style.display = 'none';
      this.follower.style.display = 'none';
      return;
    }

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const loop = () => {
      // Cursor follows instantly
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;
      this.cursor.style.left = cursorX + 'px';
      this.cursor.style.top = cursorY + 'px';

      // Follower has lag/spring
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      this.follower.style.left = followerX + 'px';
      this.follower.style.top = followerY + 'px';

      requestAnimationFrame(loop);
    };
    loop();

    // Hover effect on links and buttons
    const interactables = document.querySelectorAll('a, button, .logo-part');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.classList.add('active');
        this.follower.classList.add('active');
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('active');
        this.follower.classList.remove('active');
      });
    });
  }
};

/* ============================================================
   ACCORDION HERO
   ============================================================ */
const AccordionHero = {
  init() {
    const panels = document.querySelectorAll('.accordion-panel');
    if (!panels.length) return;

    panels.forEach(panel => {
      const link = panel.querySelector('a.btn');
      const targetSelector = panel.getAttribute('data-target');
      const targetEl = document.querySelector(targetSelector);

      // Allow clicking the panel background to scroll to section
      panel.addEventListener('click', (e) => {
        // Don't override actual link clicks
        if (e.target.closest('a')) return;
        if (targetEl) {
          const offset = 80;
          const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }
};
