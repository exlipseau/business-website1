// ---------- HERO BUTTON EXAMPLE ----------
const ctaBtn = document.getElementById('cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    alert('✅ You clicked Learn More! Replace this with your own feature.');
  });
}

// ---------- CONTACT FORM ----------
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload
    // ✅ Here you could add code to send the message to an email service
    formStatus.textContent = 'Thanks for reaching out! (Form not connected to email yet)';
    contactForm.reset();
  });
}
