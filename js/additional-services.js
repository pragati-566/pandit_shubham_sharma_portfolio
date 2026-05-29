/* ============================================
   ADDITIONAL SERVICES PAGE — JavaScript
   Reviews Carousel, Particles, Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== PAGE HERO PARTICLES ====================
  const pageParticles = document.getElementById('pageHeroParticles');

  function createPageParticles() {
    if (!pageParticles) return;

    const particleCount = window.innerWidth < 768 ? 12 : 25;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.5 + 0.1;

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${opacity};
      `;

      if (Math.random() > 0.5) {
        particle.style.background = '#D4A017';
        particle.style.boxShadow = '0 0 6px rgba(212, 160, 23, 0.6)';
      } else {
        particle.style.background = '#FF6F00';
        particle.style.boxShadow = '0 0 6px rgba(255, 111, 0, 0.6)';
      }

      pageParticles.appendChild(particle);
    }
  }

  createPageParticles();


  // ==================== REVIEWS CAROUSEL ====================
  const track = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('reviewPrev');
  const nextBtn = document.getElementById('reviewNext');
  const dotsContainer = document.getElementById('reviewDots');

  if (track && prevBtn && nextBtn && dotsContainer) {
    const cards = track.querySelectorAll('.review-card');
    let currentIndex = 0;
    let cardsPerView = 3;
    let autoPlayInterval;

    function updateCardsPerView() {
      if (window.innerWidth <= 768) {
        cardsPerView = 1;
      } else if (window.innerWidth <= 1024) {
        cardsPerView = 2;
      } else {
        cardsPerView = 3;
      }
    }

    function getTotalPages() {
      return Math.max(1, Math.ceil(cards.length / cardsPerView));
    }

    function createDots() {
      dotsContainer.innerHTML = '';
      const totalPages = getTotalPages();
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.classList.add('review-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to review page ${i + 1}`);
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      const dots = dotsContainer.querySelectorAll('.review-dot');
      const currentPage = Math.floor(currentIndex / cardsPerView);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentPage);
      });
    }

    function goToPage(page) {
      currentIndex = page * cardsPerView;
      if (currentIndex >= cards.length) currentIndex = 0;
      updateCarousel();
    }

    function updateCarousel() {
      if (cards.length === 0) return;

      const card = cards[0];
      const gap = 24;
      const cardWidth = card.offsetWidth + gap;
      const translateX = -(currentIndex * cardWidth);

      track.style.transform = `translateX(${translateX}px)`;
      updateDots();
    }

    function nextSlide() {
      currentIndex += cardsPerView;
      if (currentIndex >= cards.length) {
        currentIndex = 0;
      }
      updateCarousel();
    }

    function prevSlide() {
      currentIndex -= cardsPerView;
      if (currentIndex < 0) {
        currentIndex = Math.max(0, (getTotalPages() - 1) * cardsPerView);
      }
      updateCarousel();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startAutoPlay();
    }, { passive: true });

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    // Window resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateCardsPerView();
        createDots();
        currentIndex = 0;
        updateCarousel();
      }, 250);
    });

    // Initialize
    updateCardsPerView();
    createDots();
    updateCarousel();
    startAutoPlay();
  }


  // ==================== SERVICE CARD HOVER GLOW ====================
  const asCards = document.querySelectorAll('.as-card');
  asCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  });


  // ==================== SMOOTH SECTION NAV SCROLLING ====================
  // For internal page #links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        // Close mobile nav if open
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        if (hamburger && mobileNav) {
          hamburger.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });


  // ==================== INTERSECTION OBSERVER FOR REVEALS ====================
  // Re-initialize for dynamically created elements on this page
  const pageReveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const pageRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  pageReveals.forEach(el => pageRevealObserver.observe(el));


  // ==================== PAGE HERO ANIMATION ====================
  const heroContent = document.querySelector('.page-hero-content');
  if (heroContent) {
    const children = heroContent.children;
    Array.from(children).forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(25px)';
      child.style.transition = `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.2 + index * 0.12}s`;
    });

    // Trigger after preloader
    setTimeout(() => {
      Array.from(children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }, 1800);
  }

});
