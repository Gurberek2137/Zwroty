/**
 * LETINO OUTLET - MINIMALIST SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  // Nazwa Twojego profilu na Instagramie
  const INSTAGRAM_HANDLE = 'letino_outlet';
  const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

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
