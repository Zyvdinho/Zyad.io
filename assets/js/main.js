(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        filter: '.filter-stage1'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      portfolioFilters.forEach(function(el) {
        el.classList.remove('filter-active');
        if (el.getAttribute('data-filter') === '.filter-stage1') {
          el.classList.add('filter-active');
        }
      });

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider - AUTOPLAY DÉSACTIVÉ
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: false, // ← AUTOPLAY DÉSACTIVÉ
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider - AUTOPLAY DÉSACTIVÉ
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: false, // ← AUTOPLAY DÉSACTIVÉ
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();

/**
 * Container Swiper - AUTOPLAY DÉSACTIVÉ
 */
const swiper = new Swiper(".container-swiper", {
  direction: "horizontal",
  loop: false,
  speed: 1500,
  slidesPerView: 4,
  spaceBetween: 60,
  mousewheel: true,
  parallax: true,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 40,
    slideShadows: true
  },
  autoplay: false, // ← AUTOPLAY DÉSACTIVÉ
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 60
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    2300: {
      slidesPerView: 5,
      spaceBetween: 60
    },
    2900: {
      slidesPerView: 6,
      spaceBetween: 60
    }
  }
});

/**
 * Carousel personnalisé
 */
let active = 1;
const cardCount = $('.card-container').length;

function prevSlide() {
  active = (active - 1 + cardCount) % cardCount;
  updateCarousel();
}

function nextSlide() {
  active = (active + 1) % cardCount;
  updateCarousel();
}

function updateCarousel() {
  $('.card-container').each(function(i) {
    const offset = ((active - i) % cardCount) / 3;
    const direction = Math.sign(active - i);
    const absOffset = Math.abs(active - i) / 3;
    const isActive = i === active ? 1 : 0;
    const opacity = Math.abs(active - i) <= 1 ? 1 : 0;
    
    $(this).css({
      '--offset': offset,
      '--direction': direction,
      '--abs-offset': absOffset,
      '--active': isActive,
      '--opacity': opacity
    });
  });
}

$(document).ready(function() {
  updateCarousel();
});

// main.js - Effets dynamiques pour le portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Effet de scintillement pour les titres
  const titles = document.querySelectorAll('.section-title h2, #hero h1');
  titles.forEach(title => {
    title.classList.add('glow');
  });
  
  // Animation au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observer toutes les sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Effet de parallaxe sur le Hero
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
  
  // Animation pour les compteurs
  const counters = document.querySelectorAll('.purecounter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-purecounter-end');
    const duration = +counter.getAttribute('data-purecounter-duration') * 1000;
    const start = +counter.getAttribute('data-purecounter-start') || 0;
    const increment = target / (duration / 16); // 60fps
    
    let current = start;
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Démarrer l'animation quand le compteur est visible
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counterObserver.observe(counter);
  });
  
  // Effet hover pour les cartes
  const cards = document.querySelectorAll('.veille-card, .portfolio-wrap, .facts .count-box');
  cards.forEach(card => {
    card.classList.add('card-hover-effect');
  });
  
  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation pour les barres de progression
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bar.style.transition = 'width 1.5s ease';
          bar.style.width = width;
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    barObserver.observe(bar);
  });
  
  // Effet de typing amélioré
  if (document.querySelector('.typed')) {
    const typed = document.querySelector('.typed');
    const typedItems = typed.getAttribute('data-typed-items').split(',');
    let currentItem = 0;
    let currentChar = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    function typeEffect() {
      if (isWaiting) return;
      
      const currentText = typedItems[currentItem];
      
      if (!isDeleting) {
        typed.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
        
        if (currentChar === currentText.length) {
          isWaiting = true;
          setTimeout(() => {
            isWaiting = false;
            isDeleting = true;
          }, 1500);
        }
      } else {
        typed.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
        
        if (currentChar === 0) {
          isDeleting = false;
          currentItem = (currentItem + 1) % typedItems.length;
        }
      }
      
      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(typeEffect, typingSpeed);
    }
    
    // Démarrer l'effet après un délai
    setTimeout(typeEffect, 1000);
  }
  
  // Effet de particules dans le Hero (optionnel simple)
  const hero = document.getElementById('hero');
  if (hero && window.innerWidth > 768) {
    for (let i = 0; i < 30; i++) {
      createParticle();
    }
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 3 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = 'rgba(100, 255, 218, 0.5)';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.zIndex = '1';
      hero.appendChild(particle);
      
      animateParticle(particle);
    }
    
    function animateParticle(element) {
      const duration = Math.random() * 10 + 10;
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      
      element.animate([
        { transform: 'translate(0, 0)', opacity: 0 },
        { transform: `translate(${x}px, ${y}px)`, opacity: 1 },
        { transform: `translate(${x * 2}px, ${y * 2}px)`, opacity: 0 }
      ], {
        duration: duration * 1000,
        iterations: Infinity
      });
    }
  }
  
  // Animation pour les graphiques (exemple simple)
  const charts = document.querySelectorAll('.chart');
  charts.forEach(chart => {
    const chartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          chartObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    chart.style.opacity = '0';
    chart.style.transition = 'opacity 1s ease';
    chartObserver.observe(chart);
  });
  
  // Gestion du menu mobile
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const header = document.getElementById('header');
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function() {
      document.body.classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }
  
  // Fermer le menu mobile en cliquant sur un lien
  document.querySelectorAll('#navbar .nav-link').forEach(navLink => {
    navLink.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-nav-active')) {
        document.body.classList.remove('mobile-nav-active');
        mobileNavToggle.classList.toggle('bi-list');
        mobileNavToggle.classList.toggle('bi-x');
      }
    });
  });
  
  // Highlight de la section active dans la navigation
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navbar .nav-link');
  
  function highlightNavLink() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavLink);
  
  // Préchargement des images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px 0px' });
  
  images.forEach(img => imageObserver.observe(img));
  
  // Effet de révélation au scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  revealElements.forEach(el => revealObserver.observe(el));
  
  // Gestion des formulaires
  const forms = document.querySelectorAll('.php-email-form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const action = this.getAttribute('action');
      
      // Simulation d'envoi (remplacez par votre logique réelle)
      const loading = this.querySelector('.loading');
      const errorMessage = this.querySelector('.error-message');
      const sentMessage = this.querySelector('.sent-message');
      
      loading.style.display = 'block';
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
      
      setTimeout(() => {
        loading.style.display = 'none';
        sentMessage.style.display = 'block';
        form.reset();
      }, 1500);
    });
  });
  
  // Animation au chargement de la page
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animation d'entrée pour le contenu principal
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.transform = 'translateY(20px)';
      mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
      }, 300);
    }
  });
});

// ... [tout le début de votre fichier reste inchangé] ...

/**
 * Portfolio details slider - AUTOPLAY DÉSACTIVÉ
 */
document.addEventListener('DOMContentLoaded', function() {
  // Vérifier si le slider existe sur la page
  if (document.querySelector('.portfolio-details-slider')) {
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: false, // ← AUTOPLAY DÉSACTIVÉ
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }
});

/**
 * Testimonials slider - AUTOPLAY DÉSACTIVÉ
 */
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: false, // ← AUTOPLAY DÉSACTIVÉ
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// ... [le reste de votre fichier reste inchangé] ...