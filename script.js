// Tiny enhancements
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Ensure WhatsApp opens in new tab on desktop
  const wa = document.getElementById('whatsapp-cta');
  if (wa) {
    wa.addEventListener('click', () => {
      // no-op; link already set
    });
  }
});
