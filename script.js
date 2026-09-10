/**
 * LETINO OUTLET - MULTI-LANGUAGE & APP LOGIC
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

  // =========================================================================
  // SYSTEM ZMIANY JĘZYKA (PL / EN / DE)
  // =========================================================================
  const translations = {
    pl: {
      doc_title: "Letino Outlet – Okazje i Zwroty z Amazon",
      doc_desc: "Letino Outlet – Sprawdzony sprzęt ze zwrotów konsumenckich Amazon w ułamku ceny rynkowej. Zamówienia i kontakt przez Instagram.",
      hero_live_badge: '<span class="pulse-dot"></span> DOSTAWA Z AMAZON',
      hero_brand_sub: '@letino.outlet &bull; Zamówienia i kontakt przez DM',
      hero_brand_arrow: 'Napisz DM &rarr;',
      hero_title: 'Okazje i Zwroty z Amazon <br><span class="gradient-text">Najlepsze Ceny</span>',
      hero_subtitle: 'W <strong>Letino Outlet</strong> oferujemy sprawdzony towar ze zwrotów konsumenckich w ułamku ceny rynkowej. Zakupy, rezerwacje i bezpośredni kontakt prowadzimy przez nasz profil na Instagramie.',
      hero_cta: 'Zobacz na Instagramie',
      section_badge: 'OSTATNIA DOSTAWA PALET',
      section_heading: 'Aktualne Okazje',
      // Produkty
      p1_cond: 'Stan: Nowy / Otwarty karton',
      p1_title: 'Sony WH-1000XM5 Słuchawki ANC',
      p1_amz: 'Cena Amazon: 1 499 zł',
      p1_ours: 'Nasza cena: <strong>849 zł</strong>',
      p1_cta: 'Kup teraz na eBay',

      p2_cond: 'Stan: Klasa A+ (stan idealny)',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Cena Amazon: 2 199 zł',
      p2_ours: 'Nasza cena: <strong>1 290 zł</strong>',
      p2_cta: 'Kup teraz na eBay',

      p3_cond: 'Stan: Sprawdzony / Klasa A',
      p3_title: 'Dyson V11 Odkurzacz Bezprzewodowy',
      p3_amz: 'Cena Amazon: 2 699 zł',
      p3_ours: 'Nasza cena: <strong>1 450 zł</strong>',
      p3_cta: 'Kup teraz na eBay',

      p4_cond: 'Stan: Otwarty karton / jak nowy',
      p4_title: 'JBL Charge 5 Głośnik Bluetooth',
      p4_amz: 'Cena Amazon: 699 zł',
      p4_ours: 'Nasza cena: <strong>360 zł</strong>',
      p4_cta: 'Kup teraz na eBay',
      // Stopka
      socials_title: 'Znajdź nas & Napisz do nas',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Profil Letino',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Sklep Letino Outlet',
      legal_notice: '<strong>Nota prawna:</strong> Strona ma charakter wyłącznie pokazowo-katalogowy. Serwis <strong>Letino Outlet</strong> jest niezależnym resellerem zwrotów konsumenckich i nie jest powiązany, prowadzony ani sponsorowany przez Amazon.com, Inc. lub Amazon EU S.à r.l. Wszelkie znaki towarowe należą do ich prawnych właścicieli.',
      copyright_text: 'Letino Outlet. Wszelkie prawa zastrzeżone.'
    },

    en: {
      doc_title: "Letino Outlet – Amazon Returns & Verified Deals",
      doc_desc: "Letino Outlet – Verified goods from Amazon customer returns at a fraction of retail prices. Orders and inquiries via Instagram DM.",
      hero_live_badge: '<span class="pulse-dot"></span> DIRECT FROM AMAZON',
      hero_brand_sub: '@letino.outlet &bull; Inquiries & orders via DM',
      hero_brand_arrow: 'Send DM &rarr;',
      hero_title: 'Amazon Returns & Overstock <br><span class="gradient-text">Best Prices</span>',
      hero_subtitle: 'At <strong>Letino Outlet</strong> we offer verified merchandise from Amazon customer returns at a fraction of the retail price. Purchases, reservations and direct contact are handled through our Instagram profile.',
      hero_cta: 'View on Instagram',
      section_badge: 'LATEST PALLET ARRIVAL',
      section_heading: 'Featured Deals',
      // Produkty
      p1_cond: 'Condition: New / Open Box',
      p1_title: 'Sony WH-1000XM5 ANC Headphones',
      p1_amz: 'Amazon price: ~€350 (1,499 PLN)',
      p1_ours: 'Our price: <strong>~€199 (849 PLN)</strong>',
      p1_cta: 'Buy now on eBay',

      p2_cond: 'Condition: Grade A+ (Pristine)',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Amazon price: ~€510 (2,199 PLN)',
      p2_ours: 'Our price: <strong>~€299 (1,290 PLN)</strong>',
      p2_cta: 'Buy now on eBay',

      p3_cond: 'Condition: Tested / Grade A',
      p3_title: 'Dyson V11 Cordless Vacuum',
      p3_amz: 'Amazon price: ~€625 (2,699 PLN)',
      p3_ours: 'Our price: <strong>~€335 (1,450 PLN)</strong>',
      p3_cta: 'Buy now on eBay',

      p4_cond: 'Condition: Open Box / Like New',
      p4_title: 'JBL Charge 5 Bluetooth Speaker',
      p4_amz: 'Amazon price: ~€160 (699 PLN)',
      p4_ours: 'Our price: <strong>~€84 (360 PLN)</strong>',
      p4_cta: 'Buy now on eBay',
      // Stopka
      socials_title: 'Find Us & Message Us',
      social_ig_title: 'Instagram',
      social_ig_desc: 'Orders & contact via DM',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Letino Official Page',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet Store',
      legal_notice: '<strong>Legal Notice:</strong> This website is for showcase and catalog purposes only. <strong>Letino Outlet</strong> is an independent reseller of customer returns and is not affiliated with, operated, or endorsed by Amazon.com, Inc. or Amazon EU S.à r.l. All trademarks belong to their respective owners.',
      copyright_text: 'Letino Outlet. All rights reserved.'
    },

    de: {
      doc_title: "Letino Outlet – Amazon Retouren & Schnäppchen",
      doc_desc: "Letino Outlet – Geprüfte Ware aus Amazon-Kundenretouren zum Bruchteil des Marktpreises. Bestellungen und Kontakt über Instagram DM.",
      hero_live_badge: '<span class="pulse-dot"></span> AMAZON-RETOUREN LIEFERUNG',
      hero_brand_sub: '@letino.outlet &bull; Bestellungen & Kontakt per DM',
      hero_brand_arrow: 'DM schreiben &rarr;',
      hero_title: 'Amazon Retouren & Deals <br><span class="gradient-text">Beste Preise</span>',
      hero_subtitle: 'Bei <strong>Letino Outlet</strong> bieten wir geprüfte Ware aus Kundenretouren zu einem Bruchteil des Marktpreises an. Bestellungen, Reservierungen und direkter Kontakt laufen über unser Instagram-Profil.',
      hero_cta: 'Auf Instagram ansehen',
      section_badge: 'NEUESTE PALETTENLIEFERUNG',
      section_heading: 'Aktuelle Schnäppchen',
      // Produkty
      p1_cond: 'Zustand: Neu / Geöffnete OVP',
      p1_title: 'Sony WH-1000XM5 ANC Kopfhörer',
      p1_amz: 'Amazon UVP: ca. 350 € (1.499 PLN)',
      p1_ours: 'Unser Preis: <strong>ca. 199 € (849 PLN)</strong>',
      p1_cta: 'Jetzt auf eBay kaufen',

      p2_cond: 'Zustand: Klasse A+ (Neuwertig)',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Amazon UVP: ca. 510 € (2.199 PLN)',
      p2_ours: 'Unser Preis: <strong>ca. 299 € (1.290 PLN)</strong>',
      p2_cta: 'Jetzt auf eBay kaufen',

      p3_cond: 'Zustand: Geprüft / Klasse A',
      p3_title: 'Dyson V11 Akku-Staubsauger',
      p3_amz: 'Amazon UVP: ca. 625 € (2.699 PLN)',
      p3_ours: 'Unser Preis: <strong>ca. 335 € (1.450 PLN)</strong>',
      p3_cta: 'Jetzt auf eBay kaufen',

      p4_cond: 'Zustand: Geöffnete OVP / Wie neu',
      p4_title: 'JBL Charge 5 Bluetooth-Lautsprecher',
      p4_amz: 'Amazon UVP: ca. 160 € (699 PLN)',
      p4_ours: 'Unser Preis: <strong>ca. 84 € (360 PLN)</strong>',
      p4_cta: 'Jetzt auf eBay kaufen',
      // Stopka
      socials_title: 'Finde uns & Schreib uns',
      social_ig_title: 'Instagram',
      social_ig_desc: 'Bestellungen & Kontakt per DM',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Letino Facebook-Seite',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet eBay-Shop',
      legal_notice: '<strong>Rechtlicher Hinweis:</strong> Diese Seite dient ausschließlich Katalog- und Vorführzwecken. <strong>Letino Outlet</strong> ist ein unabhängiger Wiederverkäufer von Kundenretouren und steht in keiner Verbindung zu Amazon.com, Inc. oder Amazon EU S.à r.l. Alle Marken gehören ihren jeweiligen Eigentümern.',
      copyright_text: 'Letino Outlet. Alle Rechte vorbehalten.'
    }
  };

  function setLanguage(lang) {
    const selectedLang = translations[lang] ? lang : 'pl';
    const dict = translations[selectedLang];

    // Subtelna animacja płynnego przejścia
    document.body.classList.add('lang-fade-out');

    setTimeout(() => {
      // Aktualizacja atrybutu lang i tytułu
      document.documentElement.lang = selectedLang;
      if (dict.doc_title) {
        document.title = dict.doc_title;
      }
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && dict.doc_desc) {
        metaDesc.setAttribute('content', dict.doc_desc);
      }

      // Aktualizacja wszystkich elementów z data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });

      // Aktualizacja stanu 3 kafelków
      document.querySelectorAll('.lang-tile').forEach(tile => {
        const isActive = tile.getAttribute('data-lang') === selectedLang;
        tile.classList.toggle('active', isActive);
        tile.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      // Zapis wyboru w pamięci przeglądarki
      try {
        localStorage.setItem('letino_lang', selectedLang);
      } catch (e) {
        // obsługa trybu incognito bez localStorage
      }

      document.body.classList.remove('lang-fade-out');
    }, 120);
  }

  // Obsługa kliknięć w 3 kafelki
  document.querySelectorAll('.lang-tile').forEach(tile => {
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = tile.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Inicjalizacja języka (zapisany w localStorage lub domyślny PL)
  let savedLang = 'pl';
  try {
    savedLang = localStorage.getItem('letino_lang') || 'pl';
  } catch (e) {
    savedLang = 'pl';
  }

  if (savedLang !== 'pl') {
    setLanguage(savedLang);
  }
});
