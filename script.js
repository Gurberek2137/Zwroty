/**
 * AMZ RETURNS OUTLET - MINIMALIST SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  // Podaj swój profil Instagram
  const INSTAGRAM_HANDLE = 'twoj_profil_outlet';
  const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  // Aktualizacja linków Instagram na stronie
  document.querySelectorAll('a[href*="instagram.com/twoj_profil"]').forEach(link => {
    link.href = INSTAGRAM_URL;
  });

  // Aktualizacja roku w stopce
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
