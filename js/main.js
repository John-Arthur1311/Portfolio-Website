// js/main.js
// Small interactive behaviors: mobile nav toggle, smooth scroll, and contact form stub

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({behavior: 'smooth', block: 'start'});
        // close mobile nav after navigation
        if (navList && navList.classList.contains('show')) {
          navList.classList.remove('show');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Simple contact form handler (placeholder)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Placeholder behavior: display a simple confirmation and clear the form
      alert('Thank you — your message has been recorded (placeholder).');
      contactForm.reset();
    });
  }
});
