/**
 * AMZ RETURNS OUTLET - INTERAKTYWNY SKRYPT KATALOGOWY
 * Lekki, bez zewnętrznych bibliotek, 100% czysty JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Konfiguracja profilu Instagram (zmień na swój właściwy nick)
  const INSTAGRAM_HANDLE = 'twoj_profil_outlet';
  const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  // Aktualizacja wszystkich linków do Instagrama na stronie
  document.querySelectorAll('a[href*="instagram.com/twoj_profil"]').forEach(link => {
    link.href = INSTAGRAM_URL;
  });

  // Aktualizacja roku w stopce
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Dynamiczna data dostawy palety (np. "Dzisiaj rano" lub sformatowana dzisiejsza data)
  const liveDateSpan = document.getElementById('liveDate');
  if (liveDateSpan) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });
    liveDateSpan.textContent = `Dostawa: ${formattedDate}`;
  }

  // 2. Filtrowanie kategorii i Wyszukiwarka
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.product-card');
  const emptyResults = document.getElementById('emptyResults');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const totalCountSpan = document.getElementById('totalCount');

  let activeCategory = 'all';
  let searchQuery = '';

  if (totalCountSpan) {
    totalCountSpan.textContent = productCards.length;
  }

  function applyFilters() {
    let visibleCount = 0;

    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
      const cardText = card.textContent.toLowerCase();

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = searchQuery === '' || cardTitle.includes(searchQuery) || cardText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyResults) {
      if (visibleCount === 0) {
        emptyResults.classList.remove('hidden');
      } else {
        emptyResults.classList.add('hidden');
      }
    }
  }

  // Obsługa kliknięć w przyciski filtrów
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      applyFilters();
    });
  });

  // Obsługa wpisywania w pole wyszukiwania
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Przycisk resetowania filtrów w widoku pustego wyniku
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      activeCategory = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';

      filterBtns.forEach(btn => {
        if (btn.getAttribute('data-category') === 'all') {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      applyFilters();
    });
  }

  // 3. Akordeon FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Zwiń pozostałe
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Zamknij menu mobilne po kliknięciu w dowolny link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 5. Kliknięcie w kartę produktu - bezpośrednie przejście do IG
  productCards.forEach(card => {
    const link = card.querySelector('.product-card-link');
    const title = card.querySelector('.product-title')?.textContent || 'Produkt';
    
    if (link) {
      link.addEventListener('click', () => {
        // Można zapisać w schowku informację o produkcie lub otworzyć IG
        console.log(`Wybrano produkt: ${title}`);
      });
    }
  });
});
