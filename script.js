/**
 * LETINO OUTLET - MINIMALIST SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  // Pełny link do Twojego profilu Instagram
  const INSTAGRAM_URL = 'https://www.instagram.com/letino.outlet?igsh=dW1zdHdwbDJkbzJr&utm_source=qr';

  // Aktualizacja linków Instagram na stronie
  document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.href = INSTAGRAM_URL;
  });

  // Aktualizacja roku w stopce
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
