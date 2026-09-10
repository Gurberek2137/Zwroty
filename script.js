/**
 * LETINO OUTLET - MINIMALIST SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  // Oficjalne linki Letino Outlet
  const INSTAGRAM_URL = 'https://www.instagram.com/letino.outlet?igsh=dW1zdHdwbDJkbzJr&utm_source=qr';
  const EBAY_URL = 'https://www.ebay.de/str/letinooutlet?mkcid=16&mkevt=1&mkrid=707-127634-2357-0&ssspo=bovaat-vsa-&sssrc=3418065&ssuid=bovaat-vsa-&stype=1&widget_ver=artemis&media=COPY';

  // Aktualizacja linków zakupu produktów na eBay
  document.querySelectorAll('.card-link').forEach(link => {
    link.href = EBAY_URL;
  });

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
