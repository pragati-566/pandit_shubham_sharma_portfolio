/* ============================================
   ACHARYA PANDIT SHUBHAM SHARMA JI
   Premium Spiritual Website — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== PRELOADER ====================
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 800);
    }, 1500);
  });

  // Fallback: hide preloader after 4 seconds max
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
      setTimeout(() => { preloader.style.display = 'none'; }, 800);
    }
  }, 4000);


  // ==================== NAVBAR SCROLL EFFECT ====================
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });


  // ==================== BACK TO TOP ====================
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // ==================== HAMBURGER MENU ====================
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });


  // ==================== SMOOTH SCROLL FOR NAV LINKS ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });


  // ==================== SCROLL REVEAL ANIMATIONS ====================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ==================== HERO PARTICLES ====================
  const particlesContainer = document.getElementById('heroParticles');

  function createParticles() {
    if (!particlesContainer) return;

    const particleCount = window.innerWidth < 768 ? 15 : 30;

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

      // Alternate gold and saffron particles
      if (Math.random() > 0.5) {
        particle.style.background = '#D4A017';
        particle.style.boxShadow = '0 0 6px rgba(212, 160, 23, 0.6)';
      } else {
        particle.style.background = '#FF6F00';
        particle.style.boxShadow = '0 0 6px rgba(255, 111, 0, 0.6)';
      }

      particlesContainer.appendChild(particle);
    }
  }

  createParticles();


  // ==================== HERO CONTENT ANIMATION ====================
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const children = heroContent.children;
    Array.from(children).forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px)';
      child.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.3 + index * 0.15}s`;
    });

    // Trigger after preloader
    setTimeout(() => {
      Array.from(children).forEach(child => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      });
    }, 1800);
  }


  // ==================== SERVICE CARD HOVER GLOW ====================
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(212, 160, 23, 0.15)';
    });
    card.addEventListener('mouseleave', function () {
      this.style.boxShadow = '';
    });
  });


  // ==================== CONTACT FORM HANDLING ====================
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const pujaType = document.getElementById('puja-type').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !phone) {
        showNotification('⚠️ कृपया नाम और फ़ोन नंबर दर्ज करें', 'warning');
        return;
      }

      // Build WhatsApp message
      let waMessage = `🙏 नमस्कार पंडित जी,\n\n`;
      waMessage += `*नाम / Name:* ${name}\n`;
      waMessage += `*फ़ोन / Phone:* ${phone}\n`;
      if (pujaType) {
        const pujaSelect = document.getElementById('puja-type');
        const pujaText = pujaSelect.options[pujaSelect.selectedIndex].text;
        waMessage += `*पूजा / Puja:* ${pujaText}\n`;
      }
      if (message) {
        waMessage += `*संदेश / Message:* ${message}\n`;
      }
      waMessage += `\nकृपया मुझसे संपर्क करें। 🙏`;

      const waUrl = `https://wa.me/919131606735?text=${encodeURIComponent(waMessage)}`;

      // Button animation
      submitBtn.innerHTML = '✅ भेजा जा रहा है...';
      submitBtn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';

      setTimeout(() => {
        window.open(waUrl, '_blank');
        showNotification('🙏 धन्यवाद! आपका संदेश भेजा जा रहा है।', 'success');

        // Reset form
        contactForm.reset();
        submitBtn.innerHTML = '🔱 पूजा बुक करें / Book Puja Now';
        submitBtn.style.background = '';
      }, 800);
    });
  }


  // ==================== NOTIFICATION SYSTEM ====================
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 24px;
      padding: 18px 28px;
      border-radius: 14px;
      font-family: 'Noto Sans Devanagari', sans-serif;
      font-size: 0.95rem;
      z-index: 10000;
      opacity: 0;
      transform: translateX(100px);
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      max-width: 380px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;

    if (type === 'success') {
      notification.style.background = 'linear-gradient(135deg, #1a3a1a, #0d2b0d)';
      notification.style.border = '1px solid rgba(37, 211, 102, 0.3)';
      notification.style.color = '#a8e6a8';
    } else if (type === 'warning') {
      notification.style.background = 'linear-gradient(135deg, #3a2a0a, #2b1d05)';
      notification.style.border = '1px solid rgba(255, 159, 64, 0.3)';
      notification.style.color = '#ffd088';
    } else {
      notification.style.background = 'linear-gradient(135deg, #1a1a3a, #0d0d2b)';
      notification.style.border = '1px solid rgba(100, 100, 255, 0.3)';
      notification.style.color = '#b0b0ff';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    });

    // Animate out & remove
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100px)';
      setTimeout(() => notification.remove(), 500);
    }, 3500);
  }


  // ==================== ACTIVE NAV LINK HIGHLIGHT ====================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.style.color = '#F5D060';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });


  // ==================== FLOATING BUTTON VISIBILITY ====================
  const floatingBtns = document.querySelector('.floating-btns');
  let lastScrollY = 0;

  function handleFloatingBtns() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 300) {
      floatingBtns.style.opacity = '1';
      floatingBtns.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
  }

  // Initial state
  if (floatingBtns) {
    floatingBtns.style.transition = 'all 0.4s ease';
  }

  window.addEventListener('scroll', handleFloatingBtns, { passive: true });


  // ==================== TILT EFFECT ON ABOUT IMAGE ====================
  const aboutImage = document.querySelector('.about-image-placeholder');
  if (aboutImage && window.innerWidth > 768) {
    aboutImage.addEventListener('mousemove', (e) => {
      const rect = aboutImage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      aboutImage.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });

    aboutImage.addEventListener('mouseleave', () => {
      aboutImage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      aboutImage.style.transition = 'transform 0.5s ease';
    });

    aboutImage.addEventListener('mouseenter', () => {
      aboutImage.style.transition = 'none';
    });
  }


  // ==================== COUNTER ANIMATION (for future stats) ====================
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  }


  // ==================== MOBILE STICKY CTA VISIBILITY ====================
  const mobileCta = document.getElementById('mobileCta');

  function handleMobileCta() {
    if (window.innerWidth <= 768 && mobileCta) {
      if (window.scrollY > 400) {
        mobileCta.style.transform = 'translateY(0)';
      } else {
        mobileCta.style.transform = 'translateY(100%)';
      }
    }
  }

  if (mobileCta) {
    mobileCta.style.transition = 'transform 0.4s ease';
    mobileCta.style.transform = 'translateY(100%)';
  }

  window.addEventListener('scroll', handleMobileCta, { passive: true });


  // ==================== KEYBOARD NAVIGATION ====================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

});
