/* ============================================
   INDUS-B2B — Main JavaScript (Visual-only interactions)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-mobile-open');
    });
  }

  // Product gallery thumbnail switching
  const thumbnails = document.querySelectorAll('.product-thumb');
  const mainImage = document.querySelector('.product-main-image img');
  if (thumbnails.length && mainImage) {
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImage.src = thumb.querySelector('img').src;
      });
    });
  }

  // Variation option selection
  const variationOptions = document.querySelectorAll('.variation-option');
  variationOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const parent = opt.closest('.variation-group');
      if (parent) {
        parent.querySelectorAll('.variation-option').forEach(o => o.classList.remove('active'));
      }
      opt.classList.add('active');
    });
  });

  // Payment option selection
  const paymentOptions = document.querySelectorAll('.payment-option');
  paymentOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      paymentOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Quantity buttons
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  quantityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('.quantity-input');
      if (!input) return;
      let val = parseInt(input.value) || 1;
      if (btn.classList.contains('qty-minus')) {
        val = Math.max(1, val - 1);
      } else if (btn.classList.contains('qty-plus')) {
        val = val + 1;
      }
      input.value = val;
    });
  });

  // Animate stats on scroll (intersection observer)
  const statItems = document.querySelectorAll('.stat-item');
  if (statItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    statItems.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.animationDelay = `${i * 0.1}s`;
      observer.observe(item);
    });
  }

  // Animate category cards on scroll
  const categoryCards = document.querySelectorAll('.category-card');
  if (categoryCards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    categoryCards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.animationDelay = `${i * 0.08}s`;
      observer.observe(card);
    });
  }

  // Animate product cards on scroll
  const productCards = document.querySelectorAll('.product-card');
  if (productCards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    productCards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.animationDelay = `${i * 0.1}s`;
      observer.observe(card);
    });
  }

  // Smooth header shadow on scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      }
    });
  }

  // Add-to-quote button ripple effect
  const ctaButtons = document.querySelectorAll('.btn-add-quote, .btn-submit-quote, .btn-primary, .btn-orcamento');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        width: 100px;
        height: 100px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        left: ${e.offsetX - 50}px;
        top: ${e.offsetY - 50}px;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
