/**
 * LETINO OUTLET - MAIN LOGIC & MULTI-LANGUAGE ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  // Główne kanały i odnośniki Letino Outlet
  const INSTAGRAM_URL = 'https://www.instagram.com/letino.outlet/';
  const EBAY_URL = 'https://www.ebay.de/str/letinooutlet';
  const EMAIL_CONTACT = 'letino.outlet@gmail.com';

  // Opcjonalny token Meta Graph API (User Access Token) do automatycznego ładowania postów
  const INSTAGRAM_ACCESS_TOKEN = '';

  // Aktualizacja roku w stopce
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // BAZA TŁUMACZEŃ (PL / EN / DE) - RZETELNE I POTWIERDZONE INFORMACJE
  // =========================================================================
  const translations = {
    pl: {
      doc_title: "Letino Outlet | Zwroty konsumenckie i okazje",
      doc_desc: "Letino Outlet – sprawdzone produkty ze zwrotów konsumenckich i nadwyżek magazynowych w atrakcyjnych cenach.",
      
      // Nawigacja
      nav_home: "Strona Główna",
      nav_about: "O Letino",
      nav_abc: "ABC Ware",
      nav_deals: "Okazje",
      nav_why: "Dlaczego Letino?",
      nav_how: "Jak to działa?",
      nav_categories: "Kategorie",
      nav_platforms: "Platformy",
      nav_instagram: "Instagram",
      nav_faq: "FAQ",
      nav_contact: "Kontakt",

      // Hero
      hero_live_badge: '<span class="pulse-dot"></span> ZWROTY & OKAZJE',
      hero_brand_sub: '@letino.outlet &bull; Zamówienia i kontakt przez DM',
      hero_brand_arrow: 'Napisz DM &rarr;',
      hero_title: 'Witamy w <span class="gradient-text">Letino Outlet!</span>',
      hero_subtitle: '<h3 class="hero-subheading">Niespodzianki w pakiecie. Okazje – zawsze.</h3>' +
        '<p class="hero-lead"><strong>Dajemy produktom drugą szansę, a Tobie dajemy szansę kupić je w naprawdę dobrej cenie!</strong></p>' +
        '<p>Nasz asortyment obejmuje między innymi <strong>zwroty konsumenckie, nadwyżki i końcówki magazynowe, produkty powystawowe oraz nieodebrane przesyłki</strong>.</p>' +
        '<p>Znajdziesz u nas produkty z wielu różnych kategorii – od elektroniki i artykułów gospodarstwa domowego, przez kosmetykę i pielęgnację, aż po sport, torby i praktyczne rzeczy na co dzień.</p>' +
        '<h3 class="hero-subheading">A najlepsze?</h3>' +
        '<p class="hero-highlight"><strong>Nie płacisz klasycznej ceny sklepowej.</strong></p>',
      hero_cta: 'Zobacz aktualne okazje',
      hero_cta_secondary: 'Przeglądaj ofertę',

      // O Letino
      about_badge: "POZNAJ NAS",
      about_heading: "Czym jest Letino Outlet?",
      about_subtext: "Dajemy produktom drugą szansę, a Tobie szansę kupić je w naprawdę dobrej cenie!",
      about_lead: "To proste: <strong>dajemy produktom drugą szansę, a Tobie dajemy szansę kupić je w naprawdę dobrej cenie!</strong>",
      about_text_1: "Nasz asortyment obejmuje między innymi <strong>zwroty konsumenckie, nadwyżki i końcówki magazynowe, produkty powystawowe oraz nieodebrane przesyłki</strong>.",
      about_text_2: "Dzięki temu znajdziesz u nas produkty z wielu różnych kategorii – od elektroniki i artykułów gospodarstwa domowego, przez kosmetykę i pielęgnację, aż po sport, torby i praktyczne rzeczy na co dzień.",
      about_subheading_1: "Dlaczego nasze ceny są takie wyjątkowe?",
      about_text_3: "Czasami produkt jest po prostu <strong>zbyt dobry, żeby leżał zapomniany w magazynie</strong>.",
      about_reasons: '<li><span class="reason-dot"></span> Może został zamówiony, a następnie zwrócony.</li><li><span class="reason-dot"></span> Może miał otwarte opakowanie.</li><li><span class="reason-dot"></span> Może pochodzi z nadwyżki magazynowej.</li><li><span class="reason-dot"></span> A może był tylko produktem wystawowym.</li>',
      about_highlight_lead: "<strong>I właśnie wtedy wkraczamy my.</strong>",
      about_highlight_text: "Sprawdzamy towar, możliwie dokładnie opisujemy jego stan, a następnie oferujemy go w <strong>atrakcyjnej cenie outletowej</strong>.",
      about_closing_title: "Dobre produkty wcale nie muszą być drogie.",
      about_owner_badge: "Właścicielka Letino Outlet",
      about_owner_note: "Osobiście dbam o staranną selekcję, rzetelne testy i bezpieczne zakupy dla każdego klienta.",

      // ABC Ware
      abc_badge: "STANDARD JAKOŚCI",
      abc_heading: "Klasy Jakości ABC Ware",
      abc_subtext: "Przejrzysty system klasyfikacji towarów outletowych. U nas zawsze wiesz, co kupujesz.",
      abc_a_badge: "Klasa A / A+",
      abc_a_title: "Stan idealny / Nowy",
      abc_a_desc: "Sprzęt w 100% sprawny technicznie, w stanie niemal fabrycznym lub nowym. Towary z otwartych kartonów w celu weryfikacji lub z delikatnie naruszonymi w transporcie opakowaniami zewnętrznymi.",
      abc_a_f1: "100% sprawności technicznej",
      abc_a_f2: "Brak widocznych śladów użytkowania",
      abc_a_f3: "Kompletny zestaw akcesoriów",
      abc_a_f4: "Oryginalne pudełko (może być otwarte)",
      abc_b_badge: "Klasa B",
      abc_b_title: "Stan bardzo dobry / Powystawowy",
      abc_b_desc: "Sprzęt w 100% sprawny i przetestowany. Egzemplarze powystawowe lub z krótkich zwrotów konsumenckich. Mogą posiadać drobne ślady kosmetyczne (np. mikro-ryski na obudowie) lub zastępcze opakowanie.",
      abc_b_f1: "100% sprawności technicznej",
      abc_b_f2: "Możliwe drobne ślady wizualne",
      abc_b_f3: "Główne akcesoria w zestawie",
      abc_b_f4: "Bardzo atrakcyjna cena",
      abc_c_badge: "Klasa C",
      abc_c_title: "Stan z widocznymi śladami / Okazja",
      abc_c_desc: "Sprzęt sprawny bazowo lub ze wskazaną specyfiką działania, dokładnie opisaną w ofercie. Może posiadać wyraźniejsze ślady eksploatacji, rysy lub brak pojedynczego, niekluczowego akcesorium.",
      abc_c_f1: "Przetestowane działanie",
      abc_c_f2: "Wyraźniejsze ślady kosmetyczne",
      abc_c_f3: "Dokładnie wyszczególniony stan",
      abc_c_f4: "Maksymalna obniżka ceny",

      // Produkty (Przykłady z oferty)
      section_badge: 'PRZYKŁADY Z OFERTY',
      section_heading: 'Przykładowe Okazje',
      section_subtext: 'Poniższe produkty i ceny mają charakter poglądowy. Aktualnie dostępne pojedyncze sztuki prezentujemy na bieżąco na naszym Instagramie.',
      badge_sample: 'Wzór poglądowy',
      p1_cond: 'Stan: Nowy / Otwarty karton',
      p1_comp: 'Kompletność: Zestaw fabryczny',
      p1_title: 'Sony WH-1000XM5 Słuchawki ANC',
      p1_amz: 'Cena regularna: ok. 349<sub class="currency-sub">€</sub>',
      p1_savings: 'Oszczędzasz 150<sub class="currency-sub">€</sub>',
      p1_ours: 'Cena w Letino: <strong>199<sub class="currency-sub">€</sub></strong>',
      p1_cta: 'Zapytaj o dostępność na Instagramie',

      p2_cond: 'Stan: Klasa A+ (stan idealny)',
      p2_comp: 'Kompletność: Zestaw z ładowarką',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Cena regularna: ok. 499<sub class="currency-sub">€</sub>',
      p2_savings: 'Oszczędzasz 200<sub class="currency-sub">€</sub>',
      p2_ours: 'Cena w Letino: <strong>299<sub class="currency-sub">€</sub></strong>',
      p2_cta: 'Zapytaj o dostępność na Instagramie',

      p3_cond: 'Stan: Sprawdzony / Klasa A',
      p3_comp: 'Kompletność: Zestaw akcesoriów',
      p3_title: 'Dyson V11 Odkurzacz Bezprzewodowy',
      p3_amz: 'Cena regularna: ok. 629<sub class="currency-sub">€</sub>',
      p3_savings: 'Oszczędzasz 290<sub class="currency-sub">€</sub>',
      p3_ours: 'Cena w Letino: <strong>339<sub class="currency-sub">€</sub></strong>',
      p3_cta: 'Zapytaj o dostępność na Instagramie',

      p4_cond: 'Stan: Otwarty karton / jak nowy',
      p4_comp: 'Kompletność: Zestaw fabryczny',
      p4_title: 'JBL Charge 5 Głośnik Bluetooth',
      p4_amz: 'Cena regularna: ok. 169<sub class="currency-sub">€</sub>',
      p4_savings: 'Oszczędzasz 80<sub class="currency-sub">€</sub>',
      p4_ours: 'Cena w Letino: <strong>89<sub class="currency-sub">€</sub></strong>',
      p4_cta: 'Zapytaj o dostępność na Instagramie',

      // Co znajdziesz w Letino Outlet?
      why_badge: 'ASORTYMENT & OKAZJE',
      why_heading: 'Co znajdziesz w Letino Outlet?',
      why_subtext: 'Nasz asortyment ciągle się zmienia – dziś znalezione, jutro może już go nie być!',
      why_sources_title: 'Pochodzenie towaru',
      why_sources_list: '<li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></span><strong>Zwroty konsumenckie</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span><strong>Nadwyżki i końcówki magazynowe</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 13.5 11 17 11.5 14.5 14 15 17.5 12 16 9 17.5 9.5 14 7 11.5 10.5 11 12 8"></polygon></svg></span><strong>Produkty powystawowe</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></span><strong>Nieodebrane przesyłki</strong></li>',
      why_categories_title: 'A także między innymi:',
      why_categories_list: '<li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span><strong>Elektronikę i sprzęt</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span><strong>Dom i małe AGD</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span><strong>Beauty i pielęgnację</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><strong>Torby i akcesoria</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4M12 16V8"></path></svg></span><strong>Sport i rekreację</strong></li>',
      why_surprise: '<span class="surprise-sparkle">✨</span> <strong>…i mnóstwo innych niespodzianek!</strong>',
      why_changing_text: 'Nasz asortyment <strong>ciągle się zmienia</strong> – i właśnie to jest największym urokiem outletu.',
      why_urgency: '<span class="pulse-dot"></span> <strong>Dziś znalezione. Jutro może już go nie być.</strong>',

      // Największe platformy sprzedażowe
      platforms_badge: 'ZWERYFIKOWANY PROFIL',
      platforms_title: 'Największe platformy sprzedażowe',
      platforms_subtext: 'Sprawdź nasz oficjalny sklep na platformie eBay oraz rzeczywiste opinie i zadowolenie kupujących.',
      ebay_proof_badge: 'ZWERYFIKOWANY PROFIL',
      ebay_proof_title: 'Sprawdź nas również na eBay',
      ebay_proof_subtext: 'Rzeczywiste opinie i zadowolenie kupujących w naszym oficjalnym sklepie.',
      ebay_stat_score: '99,3%',
      ebay_stat_score_label: 'pozytywnych ocen',
      ebay_stat_sales: '1300+',
      ebay_stat_sales_label: 'sprzedanych produktów',
      ebay_proof_btn: 'Zobacz sklep na eBay &rarr;',
      ebay_proof_disclaimer: '* Dane ze sklepu eBay mogą ulegać bieżącym zmianom.',

      // Jak to działa?
      how_badge: 'PROSTY PROCES',
      how_heading: 'Jak to działa?',
      how_subtext: 'Od pozyskania produktu po zakup w 4 prostych krokach.',
      how_1_title: 'Pozyskujemy produkty',
      how_1_desc: 'Produkty pochodzące ze zwrotów konsumenckich oraz nadwyżek magazynowych.',
      how_2_title: 'Weryfikujemy',
      how_2_desc: 'Produkty są sprawdzane przed sprzedażą pod kątem stanu technicznego, działania i kompletności.',
      how_3_title: 'Publikujemy okazje',
      how_3_desc: 'Aktualne produkty i okazje pojawiają się na bieżąco na naszym profilu Instagram oraz platformach sprzedaży.',
      how_4_title: 'Kupujesz',
      how_4_desc: 'Klient kontaktuje się z Letino Outlet przez DM lub platformę handlową i wygodnie ustala szczegóły zakupu.',

      // Kategorie
      cat_badge: 'ASORTYMENT',
      cat_heading: 'Kategorie Produktów',
      cat_subtext: 'Główne grupy sprzętu trafiające do oferty Letino Outlet.',
      cat_audio_title: 'Audio',
      cat_audio_desc: 'Słuchawki bezprzewodowe z ANC, głośniki Bluetooth, soundbary i sprzęt nagłośnieniowy.',
      cat_elec_title: 'Elektronika',
      cat_elec_desc: 'Smartwatche, monitory, akcesoria gamingowe i drobna elektronika użytkowa.',
      cat_agd_title: 'AGD',
      cat_agd_desc: 'Bezprzewodowe odkurzacze pionowe, ekspresy do kawy, roboty sprzątające i małe AGD.',
      cat_acc_title: 'Akcesoria',
      cat_acc_desc: 'Szybkie ładowarki, stacje dokujące, powerbanki, etui ochronne i okablowanie.',
      cat_baby_title: 'Dziecko',
      cat_baby_desc: 'Artykuły dziecięce, akcesoria niemowlęce, bezpieczne zabawki i wózki ze zwrotów konsumenckich.',
      cat_pets_title: 'Zwierzęta',
      cat_pets_desc: 'Akcesoria dla psów i kotów, legowiska, automatyczne podajniki karmy i zabawki w okazyjnych cenach.',
      cat_other_title: 'Inne',
      cat_other_desc: 'Różnorodne wyselekcjonowane okazje z nadwyżek magazynowych i wyprzedaży zapasów.',

      // Instagram Live Feed & Banner
      ig_feed_heading: 'Najnowsze Publikacje z Instagrama',
      ig_feed_subtext: 'Codzienne promocje, nowe dostawy i unboxingi. Kliknij dowolny post lub reel, aby przejść bezpośrednio na Instagram.',
      ig_post_tag: 'NOWA DOSTAWA',
      ig_view_post: 'Zobacz post',
      ig_post_1_cap: 'Sprawdź najnowsze słuchawki bezprzewodowe z aktywacją ANC w klasie A+. Szczegóły w relacji!',
      ig_post_2_cap: 'Zegarki i smartbandy znanych marek – zwroty e-commerce z rynku niemieckiego w super cenach.',
      ig_post_3_cap: 'Testujemy odkurzacze pionowe i roboty sprzątające przed wystawieniem. Pełna sprawność gwarantowana.',
      ig_post_4_cap: 'Głośniki Bluetooth i akcesoria mobilne w oryginalnych zestawach fabrycznych. Napisz do nas DM!',
      ig_banner_title: 'Najnowsze okazje znajdziesz na Instagramie',
      ig_banner_desc: 'Nasza oferta regularnie się zmienia. Obserwuj nas, aby nie przegapić nowych produktów.',
      ig_banner_btn: 'Przejdź do profilu',

      // FAQ
      faq_badge: 'PYTANIA I ODPOWIEDZI',
      faq_heading: 'Pytania i Odpowiedzi (FAQ)',
      faq_subtext: 'Praktyczne informacje o pochodzeniu sprzętu i realizacji zakupów.',
      faq_q1: 'Czy produkty są nowe?',
      faq_a1: 'W ofercie Letino Outlet znajdują się towary ze zwrotów konsumenckich oraz nadwyżek magazynowych. Część produktów to egzemplarze w otwartych lub uszkodzonych opakowaniach, a część to urządzenia powystawowe lub ze zwrotów. Dokładny stan wizualny każdego oferowanego przedmiotu jest zawsze rzetelnie podany w opisie.',
      faq_q2: 'Czy produkty są sprawdzane?',
      faq_a2: 'Tak. Każdy egzemplarz przed wystawieniem do oferty jest sprawdzany pod kątem działania i kompletności dołączonych akcesoriów.',
      faq_q3: 'Skąd pochodzą produkty?',
      faq_a3: 'Oferowane produkty pochodzą ze zwrotów konsumenckich (np. zwrotów ustawowych) oraz nadwyżek magazynowych z rynku europejskiego.',
      faq_q4: 'Gdzie można zobaczyć aktualną ofertę?',
      faq_a4: 'Aktualną ofertę i bieżące pojedyncze okazje publikujemy na naszym profilu Instagram (@letino.outlet). Wybrane przedmioty mogą być również wystawiane na naszym profilu eBay.',
      faq_q5: 'Jak skontaktować się w sprawie produktu?',
      faq_a5: 'Najszybszym sposobem kontaktu jest wiadomość prywatna (Direct Message) na profilu Instagram @letino.outlet lub e-mail: letino.outlet@gmail.com.',

      // Kontakt
      contact_badge: 'KONTAKT',
      contact_heading: 'Skontaktuj się z nami',
      contact_subtext: 'Odpowiadamy najszybciej na Instagramie, platformie eBay oraz drogą mailową.',
      contact_ig_title: 'Instagram (Rekomendowany)',
      contact_ig_desc: 'Napisz do nas w wiadomości prywatnej (DM). Odpowiadamy na pytania o stan, dostępność i rezerwacje.',
      contact_ig_btn: 'Napisz na Instagramie &rarr;',
      contact_ebay_title: 'Sklep eBay.de',
      contact_ebay_desc: 'Profil sprzedażowy Letino Outlet na platformie eBay z pełną ochroną kupującego.',
      contact_ebay_btn: 'Odwiedź sklep na eBay &rarr;',
      contact_email_title: 'E-mail',
      contact_email_desc: 'Napisz do nas bezpośrednio na oficjalny adres e-mail w sprawach zapytań i realizacji zamówień.',
      contact_email_btn: 'Napisz: letino.outlet@gmail.com &rarr;',
      contact_registry_text: '<strong>Informacja formalna:</strong> Letino Outlet prowadzi sprzedaż zweryfikowanych towarów outletowych. Wszelkie zapytania handlowe oraz pytania o asortyment prosimy kierować przez wyżej wymienione kanały kontaktu.',

      // Stopka
      footer_brand_desc: 'Sprawdzone produkty ze zwrotów konsumenckich i nadwyżek magazynowych. Znane marki w atrakcyjnych cenach.',
      footer_links_title: 'Nawigacja',
      footer_social_title: 'Nasze Kanały',
      socials_title: 'Znajdź nas & Napisz do nas',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Sklep Letino Outlet',
      legal_notice: '<strong>Nota prawna:</strong> Serwis <strong>Letino Outlet</strong> jest niezależnym sprzedawcą produktów ze zwrotów konsumenckich oraz nadwyżek magazynowych. Serwis nie jest powiązany, prowadzony ani sponsorowany przez żadną zewnętrzną korporację ani producentów prezentowanych marek. Wszelkie znaki towarowe należą do ich prawnych właścicieli i zostały użyte wyłącznie w celach informacyjnych.',
      footer_privacy: 'Polityka Prywatności',
      footer_terms: 'Regulamin Serwisu',
      copyright_text: 'Letino Outlet. Wszelkie prawa zastrzeżone.',
      faq_more_btn: "Zobacz pełne centrum pytań i odpowiedzi (FAQ) &rarr;",
      crumb_home: "Strona Główna",
      crumb_faq: "FAQ",
      faq_page_badge: "CENTRUM POMOCY & FAQ",
      faq_page_title: "Centrum Pomocy <br><span class=\"gradient-text\">Pytania i Odpowiedzi (FAQ)</span>",
      faq_page_subtitle: "Wszystko, co warto wiedzieć o produktach, weryfikacji stanu technicznego, rezerwacjach oraz realizacji zamówień w Letino Outlet.",
      faq_tab_all: "Wszystkie",
      faq_tab_products: "Produkty i stan",
      faq_tab_orders: "Zakup i rezerwacje",
      faq_tab_shipping: "Wysyłka i odbiór",
      faq_tab_safety: "Bezpieczeństwo i kontakt",
      cat_title_products: "Produkty i stan techniczny",
      fq_p1: "Czy produkty w ofercie Letino Outlet są nowe czy używane?",
      fa_p1: "W ofercie Letino Outlet znajdują się towary pochodzące ze zwrotów konsumenckich oraz nadwyżek magazynowych. Część produktów to egzemplarze fabrycznie nowe w otwartych lub uszkodzonych kartonach, a część to urządzenia powystawowe lub ze zwrotów. Dokładny stan wizualny i klasa każdego produktu są zawsze rzetelnie podane w opisie oferty.",
      fq_p2: "W jaki sposób sprzęt jest weryfikowany przed sprzedażą?",
      fa_p2: "Każdy egzemplarz przed wystawieniem do oferty przechodzi weryfikację. Sprawdzamy kluczowe funkcje techniczne (np. włączanie, ładowanie, moduły łączności, działanie przycisków i sensorów) oraz kompletność dołączonych akcesoriów fabrycznych.",
      fq_p3: "Co oznaczają stany „Otwarty karton” oraz „Klasa A+”?",
      fa_p3: "„Nowy / Otwarty karton” oznacza sprzęt w stanie idealnym, którego oryginalne opakowanie zostało otwarte w celu weryfikacji lub uległo uszkodzeniu podczas transportu. „Klasa A+” to urządzenia sprawdzone, w stanie niemal fabrycznym, bez widocznych śladów użytkowania.",
      fq_p4: "Skąd pochodzą oferowane towary?",
      fa_p4: "Oferowane produkty pochodzą ze zwrotów konsumenckich (np. zwrotów ustawowych) oraz nadwyżek magazynowych z rynku europejskiego.",
      fq_p5: "Czy w zestawie znajdują się oryginalne akcesoria?",
      fa_p5: "Informacja o kompletności zestawu jest zawsze wyraźnie podana w opisie danej oferty. Zdecydowana większość egzemplarzy zawiera kompletny fabryczny zestaw akcesoriów (przewody, zasilacze, końcówki).",
      cat_title_orders: "Zakup i rezerwacje",
      fq_o1: "Gdzie można zobaczyć aktualnie dostępne okazje?",
      fa_o1: "Bieżące nowości, relacje z unboxingu oraz pojedyncze okazje publikujemy w pierwszej kolejności na naszym profilu Instagram (@letino.outlet). Część asortymentu wystawiamy również w naszym sklepie na platformie eBay.",
      fq_o2: "Dlaczego produkty na stronie głównej są oznaczone jako „Wzór poglądowy”?",
      fa_o2: "Ze względu na specyfikę outletu asortyment rotuje bardzo szybko, a poszczególne modele trafiają się w pojedynczych egzemplarzach. Przykłady na stronie głównej obrazują typowy asortyment oraz poziom cen, a aktualnie wolne sztuki prezentujemy w postach i relacjach na Instagramie.",
      fq_o3: "Jak zapytać o dostępność lub zarezerwować produkt?",
      fa_o3: "Wystarczy wysłać do nas wiadomość prywatną (Direct Message) na profilu Instagram @letino.outlet. Odpowiadamy sprawnie, przesyłamy dodatkowe zdjęcia egzemplarza i ustalamy szczegóły rezerwacji.",
      fq_o4: "Dlaczego ceny w Letino Outlet są tak atrakcyjne?",
      fa_o4: "Znaczne oszczędności wynikają z faktu, że towar pochodzi z nadwyżek lub zwrotów (często z naruszonym kartonem). Dzięki temu możesz kupić w 100% sprawny, markowy sprzęt za ułamek ceny rynkowej.",
      cat_title_shipping: "Wysyłka i realizacja",
      fq_s1: "W jaki sposób realizowana jest wysyłka zamówienia?",
      fa_s1: "Wysyłka realizowana jest za pośrednictwem sprawdzonych firm kurierskich oraz do paczkomatów. Sposób i koszt dostawy ustalany jest podczas bezpośredniego kontaktu na Instagramie lub zgodnie z cennikiem danej oferty w sklepie eBay.",
      fq_s2: "Jak przebiega zakup przez platformę eBay?",
      fa_s2: "Dla przedmiotów wystawionych w sklepie eBay.de zakup przebiega według oficjalnych zasad serwisu eBay, z pełną ochroną kupującego eBay Buyer Protection oraz automatycznym generowaniem numeru śledzenia paczki.",
      fq_s3: "W jaki sposób sprzęt jest pakowany i zabezpieczany do transportu?",
      fa_s3: "Każda przesyłka jest pakowana z dużą starannością przy użyciu grubych kartonów oraz folii bąbelkowej i wypełniaczy, co gwarantuje pełne bezpieczeństwo delikatnej elektroniki podczas transportu.",
      cat_title_safety: "Bezpieczeństwo i kontakt",
      fq_c1: "Jakie są kanały kontaktu z Letino Outlet?",
      fa_c1: "Głównym i najszybszym kanałem kontaktu jest wiadomość prywatna (Direct Message) na profilu Instagram @letino.outlet. Możesz także skontaktować się z nami mailowo na letino.outlet@gmail.com lub poprzez system wiadomości w serwisie eBay.",
      fq_c2: "Czy Letino Outlet jest powiązane z producentami sprzedawanych marek?",
      fa_c2: "Nie. Serwis Letino Outlet jest niezależnym sprzedawcą produktów outletowych i nie jest powiązany ani sponsorowany przez żadną zewnętrzną korporację ani producentów prezentowanych marek. Wszelkie nazwy i znaki handlowe zostały użyte wyłącznie w celach informacyjnych.",
      fq_c3: "Co zrobić, jeśli mam inne pytanie, którego nie ma na liście?",
      fa_c3: "Napisz do nas bezpośrednio na Instagramie @letino.outlet lub na adres letino.outlet@gmail.com. Chętnie odpowiemy na każde dodatkowe pytanie!",
      faq_cta_title: "Masz dodatkowe pytania?",
      faq_cta_desc: "Napisz do nas w wiadomości prywatnej (DM) na Instagramie @letino.outlet. Chętnie doradzimy i odpowiemy na wszelkie pytania o sprzęt!",
      faq_cta_btn: "Napisz na Instagramie &rarr;",
      faq_cta_home: "Wróć do strony głównej",
      faq_doc_title: "FAQ – Pytania i Odpowiedzi | Letino Outlet",
      faq_doc_desc: "Odpowiedzi na pytania dotyczące pochodzenia sprzętu, weryfikacji stanu technicznego, zakupu oraz wysyłki w Letino Outlet.",
    },

    en: {
      doc_title: "Letino Outlet | Brand Returns & Verified Deals",
      doc_desc: "Letino Outlet – verified goods from customer returns and overstock at attractive prices.",
      
      // Navigation
      nav_home: "Home",
      nav_about: "About Letino",
      nav_abc: "ABC Ware",
      nav_deals: "Deals",
      nav_why: "Why Letino?",
      nav_how: "How It Works",
      nav_categories: "Categories",
      nav_platforms: "Platforms",
      nav_instagram: "Instagram",
      nav_faq: "FAQ",
      nav_contact: "Contact",

      // Hero
      hero_live_badge: '<span class="pulse-dot"></span> RETURNS & OVERSTOCK',
      hero_brand_sub: '@letino.outlet &bull; Inquiries & orders via DM',
      hero_brand_arrow: 'Send DM &rarr;',
      hero_title: 'Welcome to <span class="gradient-text">Letino Outlet!</span>',
      hero_subtitle: '<h3 class="hero-subheading">Surprises in the package. Deals – always.</h3>' +
        '<p class="hero-lead"><strong>We give products a second chance, and give you the chance to buy them at a truly great price!</strong></p>' +
        '<p>Our assortment includes <strong>customer returns, overstock and surplus goods, display items, and unclaimed parcels</strong>.</p>' +
        '<p>You will find products from many different categories – from electronics and household goods, to cosmetics and skincare, to sports, bags, and practical everyday items.</p>' +
        '<h3 class="hero-subheading">And the best part?</h3>' +
        '<p class="hero-highlight"><strong>You don\'t pay the classic retail store price.</strong></p>',
      hero_cta: 'View Latest Deals',
      hero_cta_secondary: 'Browse Offers',

      // About Letino
      about_badge: "ABOUT US",
      about_heading: "What is Letino Outlet?",
      about_subtext: "We give products a second chance and give you the opportunity to buy them at truly great prices!",
      about_lead: "It's simple: <strong>We give products a second chance, and give you the chance to buy them at a truly great price!</strong>",
      about_text_1: "Our assortment includes <strong>customer returns, overstock and surplus goods, display items, and unclaimed parcels</strong>.",
      about_text_2: "This allows you to find products from many different categories – from electronics and household appliances, to cosmetics and skincare, to sports, bags, and everyday essentials.",
      about_subheading_1: "Why are our prices so unique?",
      about_text_3: "Sometimes a product is simply <strong>too good to sit forgotten in a warehouse</strong>.",
      about_reasons: '<li><span class="reason-dot"></span> Maybe it was ordered and then returned.</li><li><span class="reason-dot"></span> Maybe the packaging was opened.</li><li><span class="reason-dot"></span> Maybe it comes from surplus warehouse stock.</li><li><span class="reason-dot"></span> Or maybe it was just a display model.</li>',
      about_highlight_lead: "<strong>And that is precisely when we step in.</strong>",
      about_highlight_text: "We inspect every item, describe its condition with complete accuracy, and offer it at an <strong>attractive outlet price</strong>.",
      about_closing_title: "Quality products don't have to be expensive.",
      about_owner_badge: "Letino Outlet Owner",
      about_owner_note: "I personally oversee careful product selection, thorough testing, and a smooth shopping experience for every customer.",

      // ABC Ware
      abc_badge: "QUALITY STANDARD",
      abc_heading: "ABC Ware Quality Grades",
      abc_subtext: "Clear grading standard for outlet goods. You always know exactly what you purchase.",
      abc_a_badge: "Grade A / A+",
      abc_a_title: "Pristine / Like New",
      abc_a_desc: "100% functional equipment in near-factory or brand new condition. Items with opened boxes for inspection or slight outer packaging distress from transit.",
      abc_a_f1: "100% technical functionality",
      abc_a_f2: "No noticeable signs of wear",
      abc_a_f3: "Complete accessory package",
      abc_a_f4: "Original box (may be open)",
      abc_b_badge: "Grade B",
      abc_b_title: "Very Good / Demo Unit",
      abc_b_desc: "100% functional and tested gear. Display units or brief customer returns. May exhibit minor cosmetic marks (e.g. fine micro-scratches on casing) or replacement packaging.",
      abc_b_f1: "100% technical functionality",
      abc_b_f2: "Minor visual marks possible",
      abc_b_f3: "Key accessories included",
      abc_b_f4: "Exceptional price discount",
      abc_c_badge: "Grade C",
      abc_c_title: "Pre-owned / Bargain",
      abc_c_desc: "Tested, baseline functional hardware or items with specific characteristics transparently noted in the listing. May show noticeable wear or lack a non-essential accessory.",
      abc_c_f1: "Tested baseline functionality",
      abc_c_f2: "Visible cosmetic wear",
      abc_c_f3: "Detailed condition report",
      abc_c_f4: "Maximum price reduction",

      // Products (Sample Offers)
      section_badge: 'SAMPLE OFFERS',
      section_heading: 'Sample Deals',
      section_subtext: 'The products and prices below are for illustration purposes only. Currently available items are posted on our Instagram.',
      badge_sample: 'Sample Offer',
      p1_cond: 'Condition: New / Open Box',
      p1_comp: 'Completeness: Factory Kit',
      p1_title: 'Sony WH-1000XM5 ANC Headphones',
      p1_amz: 'Regular price: ~349<sub class="currency-sub">€</sub>',
      p1_savings: 'Save 150<sub class="currency-sub">€</sub>',
      p1_ours: 'Letino price: <strong>199<sub class="currency-sub">€</sub></strong>',
      p1_cta: 'Inquire on Instagram',

      p2_cond: 'Condition: Grade A+ (Pristine)',
      p2_comp: 'Completeness: Includes Charger',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Regular price: ~499<sub class="currency-sub">€</sub>',
      p2_savings: 'Save 200<sub class="currency-sub">€</sub>',
      p2_ours: 'Letino price: <strong>299<sub class="currency-sub">€</sub></strong>',
      p2_cta: 'Inquire on Instagram',

      p3_cond: 'Condition: Tested / Grade A',
      p3_comp: 'Completeness: Tool Kit Included',
      p3_title: 'Dyson V11 Cordless Vacuum',
      p3_amz: 'Regular price: ~629<sub class="currency-sub">€</sub>',
      p3_savings: 'Save 290<sub class="currency-sub">€</sub>',
      p3_ours: 'Letino price: <strong>339<sub class="currency-sub">€</sub></strong>',
      p3_cta: 'Inquire on Instagram',

      p4_cond: 'Condition: Open Box / Like New',
      p4_comp: 'Completeness: Factory Kit',
      p4_title: 'JBL Charge 5 Bluetooth Speaker',
      p4_amz: 'Regular price: ~169<sub class="currency-sub">€</sub>',
      p4_savings: 'Save 80<sub class="currency-sub">€</sub>',
      p4_ours: 'Letino price: <strong>89<sub class="currency-sub">€</sub></strong>',
      p4_cta: 'Inquire on Instagram',

      // What will you find at Letino Outlet?
      why_badge: 'ASSORTMENT & DEALS',
      why_heading: 'What will you find at Letino Outlet?',
      why_subtext: 'Our selection is constantly changing – found today, gone tomorrow!',
      why_sources_title: 'Sourcing & Origins',
      why_sources_list: '<li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></span><strong>Customer returns</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span><strong>Overstock & surplus lots</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 13.5 11 17 11.5 14.5 14 15 17.5 12 16 9 17.5 9.5 14 7 11.5 10.5 11 12 8"></polygon></svg></span><strong>Display items</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></span><strong>Unclaimed parcels</strong></li>',
      why_categories_title: 'As well as among others:',
      why_categories_list: '<li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span><strong>Electronics & gadgets</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span><strong>Home & small appliances</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span><strong>Beauty & skincare</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><strong>Bags & accessories</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4M12 16V8"></path></svg></span><strong>Sports & recreation</strong></li>',
      why_surprise: '<span class="surprise-sparkle">✨</span> <strong>…and lots of other surprises!</strong>',
      why_changing_text: 'Our inventory is <strong>constantly changing</strong> – and that is the real magic of our outlet.',
      why_urgency: '<span class="pulse-dot"></span> <strong>Found today. Might be gone tomorrow.</strong>',

      // Major Sales Platforms
      platforms_badge: 'VERIFIED STORE',
      platforms_title: 'Major Sales Platforms',
      platforms_subtext: 'Check our verified official eBay store and real buyer feedback.',
      ebay_proof_badge: 'VERIFIED STORE',
      ebay_proof_title: 'Find us on eBay as well',
      ebay_proof_subtext: 'Real customer feedback and verified buyer satisfaction on our official store.',
      ebay_stat_score: '99.3%',
      ebay_stat_score_label: 'positive feedback',
      ebay_stat_sales: '1,300+',
      ebay_stat_sales_label: 'items sold',
      ebay_proof_btn: 'Visit eBay store &rarr;',
      ebay_proof_disclaimer: '* eBay store ratings and stats may vary over time.',

      // How It Works
      how_badge: 'SIMPLE PROCESS',
      how_heading: 'How It Works',
      how_subtext: 'From product sourcing to your purchase in 4 simple steps.',
      how_1_title: 'We Source Goods',
      how_1_desc: 'Products sourced from customer returns and warehouse overstock.',
      how_2_title: 'We Verify',
      how_2_desc: 'Products are rigorously inspected for functionality, visual condition and accessory kit.',
      how_3_title: 'We Post Deals',
      how_3_desc: 'New items, real photos and pricing are published directly on Instagram and sales channels.',
      how_4_title: 'You Purchase',
      how_4_desc: 'Contact us via Instagram DM or marketplace store to confirm transaction details easily.',

      // Categories
      cat_badge: 'PORTFOLIO',
      cat_heading: 'Product Categories',
      cat_subtext: 'Main categories regularly featured in Letino Outlet.',
      cat_audio_title: 'Audio',
      cat_audio_desc: 'Wireless ANC headphones, Bluetooth speakers, soundbars and audio gear.',
      cat_elec_title: 'Electronics',
      cat_elec_desc: 'Smartwatches, displays, gaming peripherals and personal electronics.',
      cat_agd_title: 'Appliances',
      cat_agd_desc: 'Cordless stick vacuums, coffee machines, robot vacuums and small home tech.',
      cat_acc_title: 'Accessories',
      cat_acc_desc: 'Fast chargers, docks, powerbanks, protective cases and cables.',
      cat_baby_title: 'Baby & Kids',
      cat_baby_desc: 'Infant accessories, safe toys, baby care and strollers from verified returns.',
      cat_pets_title: 'Pets',
      cat_pets_desc: 'Dog & cat accessories, pet beds, automatic food dispensers and toys at bargain prices.',
      cat_other_title: 'Other Deals',
      cat_other_desc: 'Carefully selected overstock opportunities across diverse categories.',

      // Instagram Live Feed & Banner
      ig_feed_heading: 'Latest Instagram Posts',
      ig_feed_subtext: 'Daily promotions, unboxings and stock updates. Click any post or reel to view on Instagram.',
      ig_post_tag: 'NEW ARRIVAL',
      ig_view_post: 'View post',
      ig_post_1_cap: 'Check out the newest ANC wireless headphones in Grade A+. See details in our stories!',
      ig_post_2_cap: 'Smartwatches and wearables from top brands – e-commerce returns from Germany at great prices.',
      ig_post_3_cap: 'We test cordless vacuums and robot cleaners before listing. Complete function guaranteed.',
      ig_post_4_cap: 'Bluetooth speakers and mobile accessories in original factory kits. Send us a DM!',
      ig_banner_title: 'Find the latest drops on Instagram',
      ig_banner_desc: 'Our stock rotates quickly. Follow our profile so you do not miss new arrivals.',
      ig_banner_btn: 'Visit profile',

      // FAQ
      faq_badge: 'QUESTIONS & ANSWERS',
      faq_heading: 'Questions & Answers (FAQ)',
      faq_subtext: 'Practical answers about stock origin and buying process.',
      faq_q1: 'Are the products brand new?',
      faq_a1: 'Letino Outlet offers goods from customer returns and warehouse overstocks. Some items are in opened or distressed boxes, while others are demo/display units. Exact cosmetic grade is always stated transparently.',
      faq_q2: 'Are items tested before dispatch?',
      faq_a2: 'Yes. Each piece undergoes functional verification and check of included accessories before listing.',
      faq_q3: 'Where do the items come from?',
      faq_a3: 'Our inventory originates from customer returns and warehouse overstock from the European market.',
      faq_q4: 'Where can I see current inventory?',
      faq_a4: 'Current offers and single-unit deals are posted on Instagram (@letino.outlet). Selected items may also be listed on our eBay profile.',
      faq_q5: 'How do I contact you regarding an item?',
      faq_a5: 'The quickest way is sending a Direct Message (DM) on Instagram @letino.outlet or via email at letino.outlet@gmail.com.',

      // Contact
      contact_badge: 'CONTACT',
      contact_heading: 'Get In Touch',
      contact_subtext: 'We reply fastest via Instagram DM, eBay marketplace, and official email.',
      contact_ig_title: 'Instagram (Recommended)',
      contact_ig_desc: 'Send us a Direct Message (DM). We answer questions about condition, availability and reserve requests.',
      contact_ig_btn: 'Message on Instagram &rarr;',
      contact_ebay_title: 'eBay.de Store',
      contact_ebay_desc: 'Letino Outlet seller profile on eBay platform with full buyer protection.',
      contact_ebay_btn: 'Visit eBay Store &rarr;',
      contact_email_title: 'E-mail',
      contact_email_desc: 'Write to our official email address regarding inquiries and orders.',
      contact_email_btn: 'Email: letino.outlet@gmail.com &rarr;',
      contact_registry_text: '<strong>Formal Notice:</strong> Letino Outlet is a reseller of verified outlet merchandise. Please direct all commercial inquiries and stock questions through the contact channels listed above.',

      // Footer
      footer_brand_desc: 'Verified products from customer returns and overstock. Famous brands at affordable prices.',
      footer_links_title: 'Navigation',
      footer_social_title: 'Our Channels',
      socials_title: 'Find Us & Message Us',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet Store',
      legal_notice: '<strong>Legal Notice:</strong> <strong>Letino Outlet</strong> is an independent reseller of customer returns and overstock merchandise. The site is not affiliated with, operated by, or sponsored by any external corporation or product manufacturers. All trademarks belong to their respective owners.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      copyright_text: 'Letino Outlet. All rights reserved.',
      faq_more_btn: "View Full FAQ & Help Center &rarr;",
      crumb_home: "Home",
      crumb_faq: "FAQ",
      faq_page_badge: "HELP CENTER & FAQ",
      faq_page_title: "Help Center <br><span class=\"gradient-text\">Questions & Answers (FAQ)</span>",
      faq_page_subtitle: "Everything you need to know about products, condition checks, reservations, and order fulfillment at Letino Outlet.",
      faq_tab_all: "All",
      faq_tab_products: "Products & Condition",
      faq_tab_orders: "Purchasing & Reserve",
      faq_tab_shipping: "Shipping & Delivery",
      faq_tab_safety: "Safety & Contact",
      cat_title_products: "Products & Technical Condition",
      fq_p1: "Are the products in Letino Outlet new or used?",
      fa_p1: "Letino Outlet offers products from customer returns and warehouse overstock. Some items are brand new in open or damaged boxes, while others are demo or returned units. The exact condition and grading of each product are always described honestly in each listing.",
      fq_p2: "How is merchandise inspected prior to sale?",
      fa_p2: "Every unit undergoes technical verification before listing. We test primary features (powering on, charging, connectivity, controls, sensors) and inspect included factory accessories.",
      fq_p3: "What do product conditions like 'Open Box' or 'Grade A+' mean?",
      fa_p3: "'New / Open Box' indicates an item in pristine condition where the original outer box was opened for inspection or slightly distressed in transport. 'Grade A+' designates verified gear in near-factory shape with no noticeable signs of wear.",
      fq_p4: "Where do the products come from?",
      fa_p4: "Our inventory originates from customer returns and warehouse overstock from the European market.",
      fq_p5: "Are original accessories included?",
      fa_p5: "Package completeness is explicitly specified in every item description. The vast majority of our units include complete factory accessories (cables, adapters, attachments).",
      cat_title_orders: "Purchasing & Reservations",
      fq_o1: "Where can I see currently available deals?",
      fa_o1: "New stock arrivals, unboxings, and individual deals are posted first on our Instagram account (@letino.outlet). Selected items are also available in our eBay store.",
      fq_o2: "Why are items on the homepage marked as 'Sample Offer'?",
      fa_o2: "Due to rapid inventory turnover in the outlet sector, many items arrive in single quantities. Homepage products represent typical stock and pricing, while currently available units are published live on Instagram.",
      fq_o3: "How do I inquire about availability or reserve an item?",
      fa_o3: "Simply send us a Direct Message (DM) on Instagram @letino.outlet. We reply promptly, share extra detailed photos, and arrange order details.",
      fq_o4: "Why are Letino Outlet prices so affordable?",
      fa_o4: "Savings stem from sourcing overstock and customer returns (often with open boxes). This allows you to acquire fully tested, premium brand gear at a fraction of retail price.",
      cat_title_shipping: "Shipping & Fulfillment",
      fq_s1: "How is order shipping handled?",
      fa_s1: "Orders are shipped via dependable courier services or parcel lockers. Shipping methods and costs are confirmed during DM conversation on Instagram or as listed on eBay.",
      fq_s2: "How does purchasing via eBay work?",
      fa_s2: "For items listed on our eBay.de store, transactions follow standard eBay checkout, covered by eBay Buyer Protection with automated parcel tracking.",
      fq_s3: "How is equipment secured for transit?",
      fa_s3: "Every shipment is carefully packed with heavy-duty cardboard boxes, bubble wrap, and shock-absorbing fillers to ensure electronics arrive in flawless condition.",
      cat_title_safety: "Safety & Contact",
      fq_c1: "What are the contact channels for Letino Outlet?",
      fa_c1: "The primary and fastest channel is sending a Direct Message (DM) on Instagram @letino.outlet. You may also contact us via email at letino.outlet@gmail.com or eBay messaging.",
      fq_c2: "Is Letino Outlet affiliated with the product manufacturers?",
      fa_c2: "No. Letino Outlet is an independent reseller and is not affiliated with, sponsored by, or endorsed by brand manufacturers. All trademarks belong to their lawful owners and are used purely for identification.",
      fq_c3: "What if I have another question not listed here?",
      fa_c3: "Message us directly on Instagram @letino.outlet or email letino.outlet@gmail.com – we will happily provide detailed answers and advice."
    },
    de: {
      doc_title: "Letino Outlet | Retouren & Markenschnäppchen",
      doc_desc: "Letino Outlet – geprüfte Ware aus Kundenretouren und Restposten zu Spitzenpreisen.",
      
      // Navigation
      nav_home: "Startseite",
      nav_about: "Über Letino",
      nav_abc: "ABC Ware",
      nav_deals: "Angebote",
      nav_why: "Warum Letino?",
      nav_how: "So funktioniert's",
      nav_categories: "Kategorien",
      nav_platforms: "Plattformen",
      nav_instagram: "Instagram",
      nav_faq: "FAQ",
      nav_contact: "Kontakt",

      // Hero
      hero_live_badge: '<span class="pulse-dot"></span> RETOUREN & ANGEBOTE',
      hero_brand_sub: '@letino.outlet &bull; Bestellungen & Kontakt per DM',
      hero_brand_arrow: 'DM schreiben &rarr;',
      hero_title: 'Willkommen bei <span class="gradient-text">Letino Outlet!</span>',
      hero_subtitle: '<h3 class="hero-subheading">Überraschungen inklusive. Schnäppchen – immer.</h3>' +
        '<p class="hero-lead"><strong>Wir geben Produkten eine zweite Chance, und Ihnen die Chance, sie zu einem wirklich guten Preis zu kaufen!</strong></p>' +
        '<p>Unser Sortiment umfasst unter anderem <strong>Kundenretouren, Überbestände und Restposten, Ausstellungsstücke sowie unzustellbare Pakete</strong>.</p>' +
        '<p>Bei uns finden Sie Produkte aus vielen verschiedenen Kategorien – von Elektronik und Haushaltswaren über Kosmetik und Pflege bis hin zu Sport, Taschen und praktischen Dingen für den Alltag.</p>' +
        '<h3 class="hero-subheading">Und das Beste daran?</h3>' +
        '<p class="hero-highlight"><strong>Sie zahlen nicht den klassischen Ladenpreis.</strong></p>',
      hero_cta: 'Aktuelle Angebote ansehen',
      hero_cta_secondary: 'Sortiment erkunden',

      // Über Letino
      about_badge: "ÜBER UNS",
      about_heading: "Was ist Letino Outlet?",
      about_subtext: "Wir geben Produkten eine zweite Chance und Ihnen die Gelegenheit, zu echten Spitzenpreisen einzukaufen!",
      about_lead: "Ganz einfach: <strong>Wir geben Produkten eine zweite Chance, und Ihnen die Chance, sie zu einem wirklich guten Preis zu kaufen!</strong>",
      about_text_1: "Unser Sortiment umfasst unter anderem <strong>Kundenretouren, Überbestände und Restposten, Ausstellungsstücke sowie unzustellbare Pakete</strong>.",
      about_text_2: "Dadurch finden Sie bei uns Produkte aus vielen verschiedenen Kategorien – von Elektronik und Haushaltswaren über Kosmetik und Pflege bis hin zu Sport, Taschen und praktischen Dingen für den Alltag.",
      about_subheading_1: "Warum sind unsere Preise so besonders?",
      about_text_3: "Manchmal ist ein Produkt einfach <strong>viel zu schade, um vergessen im Lager zu verstauben</strong>.",
      about_reasons: '<li><span class="reason-dot"></span> Vielleicht wurde es bestellt und dann retourniert.</li><li><span class="reason-dot"></span> Vielleicht war die Verpackung einmal geöffnet.</li><li><span class="reason-dot"></span> Vielleicht stammt es aus einem Lagerüberbestand.</li><li><span class="reason-dot"></span> Oder es war lediglich ein Vorführgerät.</li>',
      about_highlight_lead: "<strong>Und genau hier kommen wir ins Spiel.</strong>",
      about_highlight_text: "Wir prüfen die Ware, beschreiben ihren Zustand so präzise wie möglich und bieten sie zu einem <strong>attraktiven Outlet-Preis</strong> an.",
      about_closing_title: "Gute Produkte müssen keineswegs teuer sein.",
      about_owner_badge: "Inhaberin Letino Outlet",
      about_owner_note: "Ich kümmere mich persönlich um sorgfältige Produktauswahl, ehrliche Tests und einen sicheren Einkauf für jeden Kunden.",

      // ABC Ware
      abc_badge: "QUALITÄTSSTANDARD",
      abc_heading: "ABC Ware Qualitätsklassen",
      abc_subtext: "Transparentes Bewertungssystem für Outlet-Ware. Bei uns wissen Sie immer, was Sie kaufen.",
      abc_a_badge: "Klasse A / A+",
      abc_a_title: "Neuwertig / Wie neu",
      abc_a_desc: "Technisch zu 100% einwandfreie Ware in nahezu fabrikneuem Zustand. Artikel aus zu Prüfzwecken geöffneter OVP oder mit leichten Transportschäden am Umkarton.",
      abc_a_f1: "100% technische Funktion",
      abc_a_f2: "Keine nennenswerten Gebrauchsspuren",
      abc_a_f3: "Vollständiges Werkszubehör",
      abc_a_f4: "Originalverpackung (evtl. geöffnet)",
      abc_b_badge: "Klasse B",
      abc_b_title: "Sehr gut / Vorführgerät",
      abc_b_desc: "Zu 100% funktionsfähige und geprüfte Ware. Vorführgeräte oder Artikel aus kurzen Retouren. Kann minimale optische Spuren (z. B. feine Mikro-Kratzer) oder neutrale Verpackung aufweisen.",
      abc_b_f1: "100% technische Funktion",
      abc_b_f2: "Minimale optische Spuren möglich",
      abc_b_f3: "Wichtiges Zubehör enthalten",
      abc_b_f4: "Sehr attraktiver Preisnachlass",
      abc_c_badge: "Klasse C",
      abc_c_title: "Gebraucht / Schnäppchen",
      abc_c_desc: "Funktionsfähige Basisware oder Artikel mit spezifischen Eigenschaften, die im Angebot genau beschrieben sind. Kann sichtbare Spuren aufweisen oder ein unkritisches Zubehörteil fehlen.",
      abc_c_f1: "Geprüfte Basisfunktion",
      abc_c_f2: "Sichtbare optische Gebrauchsspuren",
      abc_c_f3: "Detaillierte Zustandsbeschreibung",
      abc_c_f4: "Maximaler Preisvorteil",

      // Produkte (Beispiele aus dem Sortiment)
      section_badge: 'BEISPIELANGEBOTE',
      section_heading: 'Beispielhafte Angebote',
      section_subtext: 'Die nachfolgenden Produkte und Preise dienen lediglich als Beispiele. Aktuell verfügbare Artikel posten wir auf Instagram.',
      badge_sample: 'Beispielangebot',
      p1_cond: 'Zustand: Neu / Geöffnete OVP',
      p1_comp: 'Vollständigkeit: Komplettes Set',
      p1_title: 'Sony WH-1000XM5 ANC Kopfhörer',
      p1_amz: 'Regulärer Preis: ca. 349<sub class="currency-sub">€</sub>',
      p1_savings: 'Sie sparen 150<sub class="currency-sub">€</sub>',
      p1_ours: 'Letino Preis: <strong>199<sub class="currency-sub">€</sub></strong>',
      p1_cta: 'Auf Instagram anfragen',

      p2_cond: 'Zustand: Klasse A+ (Neuwertig)',
      p2_comp: 'Vollständigkeit: Inkl. Ladekabel',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Regulärer Preis: ca. 499<sub class="currency-sub">€</sub>',
      p2_savings: 'Sie sparen 200<sub class="currency-sub">€</sub>',
      p2_ours: 'Letino Preis: <strong>299<sub class="currency-sub">€</sub></strong>',
      p2_cta: 'Auf Instagram anfragen',

      p3_cond: 'Zustand: Geprüft / Klasse A',
      p3_comp: 'Vollständigkeit: Mit Zubehör',
      p3_title: 'Dyson V11 Akku-Staubsauger',
      p3_amz: 'Regulärer Preis: ca. 629<sub class="currency-sub">€</sub>',
      p3_savings: 'Sie sparen 290<sub class="currency-sub">€</sub>',
      p3_ours: 'Letino Preis: <strong>339<sub class="currency-sub">€</sub></strong>',
      p3_cta: 'Auf Instagram anfragen',

      p4_cond: 'Zustand: Geöffnete OVP / Wie neu',
      p4_comp: 'Vollständigkeit: Komplettes Set',
      p4_title: 'JBL Charge 5 Bluetooth-Lautsprecher',
      p4_amz: 'Regulärer Preis: ca. 169<sub class="currency-sub">€</sub>',
      p4_savings: 'Sie sparen 80<sub class="currency-sub">€</sub>',
      p4_ours: 'Letino Preis: <strong>89<sub class="currency-sub">€</sub></strong>',
      p4_cta: 'Auf Instagram anfragen',

      // Was finden Sie im Letino Outlet?
      why_badge: 'SORTIMENT & SCHNÄPPCHEN',
      why_heading: 'Was finden Sie im Letino Outlet?',
      why_subtext: 'Unser Sortiment wechselt ständig – heute entdeckt, morgen vielleicht schon vergriffen!',
      why_sources_title: 'Herkunft der Ware',
      why_sources_list: '<li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></span><strong>Kundenretouren</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span><strong>Überbestände und Restposten</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 13.5 11 17 11.5 14.5 14 15 17.5 12 16 9 17.5 9.5 14 7 11.5 10.5 11 12 8"></polygon></svg></span><strong>Ausstellungsstücke</strong></li><li class="what-find-item"><span class="item-icon-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></span><strong>Unzustellbare Pakete</strong></li>',
      why_categories_title: 'Sowie unter anderem:',
      why_categories_list: '<li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span><strong>Elektronik & Technik</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span><strong>Haushalt & kleine Elektrogeräte</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span><strong>Beauty & Körperpflege</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span><strong>Taschen & Accessoires</strong></li><li class="what-find-item"><span class="item-icon-pill accent-pill"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4M12 16V8"></path></svg></span><strong>Sport & Freizeit</strong></li>',
      why_surprise: '<span class="surprise-sparkle">✨</span> <strong>…und viele weitere Überraschungen!</strong>',
      why_changing_text: 'Unser Sortiment <strong>wechselt ständig</strong> – genau das macht den besonderen Reiz unseres Outlets aus.',
      why_urgency: '<span class="pulse-dot"></span> <strong>Heute entdeckt. Morgen vielleicht schon weg.</strong>',

      // Große Verkaufsplattformen
      platforms_badge: 'VERIFIZIERTES PROFIL',
      platforms_title: 'Große Verkaufsplattformen',
      platforms_subtext: 'Besuchen Sie unseren offiziellen eBay-Shop und überzeugen Sie sich von echter Kundenzufriedenheit.',
      ebay_proof_badge: 'VERIFIZIERTES VERKÄUFERPROFIL',
      ebay_proof_title: 'Besuchen Sie uns auch auf eBay',
      ebay_proof_subtext: 'Transparente Bewertungen und verifizierte Kundenzufriedenheit in unserem offiziellen Shop.',
      ebay_stat_score: '99,3%',
      ebay_stat_score_label: 'positive Bewertungen',
      ebay_stat_sales: '1.300+',
      ebay_stat_sales_label: 'verkaufte Artikel',
      ebay_proof_btn: 'eBay-Shop ansehen &rarr;',
      ebay_proof_disclaimer: '* Daten basieren auf dem eBay-Verkäuferprofil und können sich laufend ändern.',

      // Wie funktioniert es?
      how_badge: 'EINFACHER ABLAUF',
      how_heading: 'Wie funktioniert es?',
      how_subtext: 'Von der Warenbeschaffung bis zum Kauf in 4 einfachen Schritten.',
      how_1_title: 'Wir beziehen Ware',
      how_1_desc: 'Waren aus Kundenretouren und Lagerüberbeständen.',
      how_2_title: 'Wir prüfen',
      how_2_desc: 'Alle Artikel werden auf Funktion, Zustand und Vollständigkeit sorgfältig getestet.',
      how_3_title: 'Wir veröffentlichen',
      how_3_desc: 'Aktuelle Angebote und Originalfotos erscheinen direkt auf Instagram und Verkaufsportalen.',
      how_4_title: 'Sie kaufen',
      how_4_desc: 'Kontaktieren Sie uns bequem via Instagram DM oder Marktplatz für eine reibungslose Abwicklung.',

      // Kategorien
      cat_badge: 'SORTIMENT',
      cat_heading: 'Produktkategorien',
      cat_subtext: 'Häufige Warengruppen im Letino Outlet.',
      cat_audio_title: 'Audio',
      cat_audio_desc: 'ANC Bluetooth-Kopfhörer, Lautsprecher, Soundbars und Audiotechnik.',
      cat_elec_title: 'Elektronik',
      cat_elec_desc: 'Smartwatches, Monitore, Gaming-Zubehör und Heimelektronik.',
      cat_agd_title: 'Haushaltsgeräte',
      cat_agd_desc: 'Kabellose Akkustaubsauger, Kaffeemaschinen und moderne Haushaltshelfer.',
      cat_acc_title: 'Zubehör',
      cat_acc_desc: 'Schnellladegeräte, Dockingstationen, Powerbanks und hochwertige Kabel.',
      cat_baby_title: 'Kind & Baby',
      cat_baby_desc: 'Babyartikel, Zubehör, sicheres Spielzeug und Kinderwagen aus geprüften Retouren.',
      cat_pets_title: 'Haustiere',
      cat_pets_desc: 'Zubehör für Hunde und Katzen, Tierbetten, Futterautomaten und Spielzeug zu Spitzenpreisen.',
      cat_other_title: 'Sonstiges',
      cat_other_desc: 'Ausgewählte Schnäppchen aus Restposten und Lagerabverkäufen.',

      // Instagram Live Feed & Banner
      ig_feed_heading: 'Neueste Beiträge auf Instagram',
      ig_feed_subtext: 'Tägliche Rabatte, Unboxings und neue Lieferungen. Klicken Sie auf einen Beitrag, um direkt zu Instagram zu gelangen.',
      ig_post_tag: 'NEUER EINGANG',
      ig_view_post: 'Beitrag ansehen',
      ig_post_1_cap: 'Entdecken Sie die neuesten ANC Wireless Kopfhörer in Klasse A+. Details in unserer Story!',
      ig_post_2_cap: 'Smartwatches führender Marken – E-Commerce-Retouren aus Deutschland zu Top-Preisen.',
      ig_post_3_cap: 'Wir testen kabellose Staubsauger und Saugroboter vor dem Einstellen. Funktion garantiert.',
      ig_post_4_cap: 'Bluetooth-Lautsprecher und mobiles Zubehör in Originalverpackung. Schreiben Sie uns eine DM!',
      ig_banner_title: 'Die neuesten Schnäppchen auf Instagram',
      ig_banner_desc: 'Unser Sortiment wechselt schnell. Folgen Sie uns, um keine Deals zu verpassen.',
      ig_banner_btn: 'Zum Profil',

      // FAQ
      faq_badge: 'FRAGEN & ANTWORTEN',
      faq_heading: 'Fragen & Antworten (FAQ)',
      faq_subtext: 'Wissenswertes über Herkunft und Kaufabwicklung bei Letino Outlet.',
      faq_q1: 'Sind die Produkte neu?',
      faq_a1: 'Bei Letino Outlet finden Sie Waren aus Kundenretouren und Restposten. Manche Produkte sind in geöffneter Verpackung, andere Vorführgeräte. Der genaue Zustand wird stets transparent deklariert.',
      faq_q2: 'Werden die Artikel geprüft?',
      faq_a2: 'Ja. Jedes Exemplar wird vor dem Verkauf auf Funktion, Betriebsbereitschaft und Zubehör getestet.',
      faq_q3: 'Woher stammt die Ware?',
      faq_a3: 'Die angebotenen Produkte stammen aus Kundenretouren und Restposten aus dem europäischen Markt.',
      faq_q4: 'Wo finde ich das aktuelle Sortiment?',
      faq_a4: 'Tagesaktuelle Neuzugänge und Highlights posten wir auf Instagram (@letino.outlet). Ausgewählte Artikel können auch auf eBay angeboten werden.',
      faq_q5: 'Wie kann ich ein Produkt anfragen?',
      faq_a5: 'Am schnellsten per Direktnachricht (DM) auf Instagram (@letino.outlet) oder per E-Mail an letino.outlet@gmail.com.',

      // Kontakt
      contact_badge: 'KONTAKT',
      contact_heading: 'Kontaktieren Sie uns',
      contact_subtext: 'Wir antworten am schnellsten per Instagram DM, eBay-Shop oder E-Mail.',
      contact_ig_title: 'Instagram (Empfohlen)',
      contact_ig_desc: 'Schreiben Sie uns eine Direktnachricht (DM) für Fragen zum Zustand, Preis und Reservierung.',
      contact_ig_btn: 'Auf Instagram schreiben &rarr;',
      contact_ebay_title: 'eBay.de Shop',
      contact_ebay_desc: 'Letino Outlet Verkäuferprofil auf eBay mit vollem Käuferschutz.',
      contact_ebay_btn: 'eBay-Shop besuchen &rarr;',
      contact_email_title: 'E-Mail',
      contact_email_desc: 'Schreiben Sie direkt an unsere offizielle E-Mail-Adresse für Anfragen und Bestellungen.',
      contact_email_btn: 'E-Mail: letino.outlet@gmail.com &rarr;',
      contact_registry_text: '<strong>Rechtlicher Hinweis:</strong> Letino Outlet vertreibt geprüfte Outlet-Waren. Bitte richten Sie alle kaufmännischen Anfragen an die oben genannten Kontaktkanäle.',

      // Footer
      footer_brand_desc: 'Geprüfte Ware aus Kundenretouren und Restposten bekannter Marken zu Spitzenpreisen.',
      footer_links_title: 'Navigation',
      footer_social_title: 'Unsere Kanäle',
      socials_title: 'Finde uns & Schreib uns',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet eBay-Shop',
      legal_notice: '<strong>Rechtlicher Hinweis:</strong> <strong>Letino Outlet</strong> ist ein unabhängiger Wiederverkäufer von Kundenretouren und Restposten und steht in keiner geschäftlichen Verbindung zu externen Konzernen oder Markenherstellern. Alle Marken gehören ihren jeweiligen Eigentümern.',
      footer_privacy: 'Datenschutzerklärung',
      footer_terms: 'Nutzungsbedingungen',
      copyright_text: 'Letino Outlet. Alle Rechte vorbehalten.',
      faq_more_btn: "Vollständiges FAQ & Hilfe-Center ansehen &rarr;",
      crumb_home: "Startseite",
      crumb_faq: "FAQ",
      faq_page_badge: "HILFE-CENTER & FAQ",
      faq_page_title: "Hilfe-Center <br><span class=\"gradient-text\">Fragen & Antworten (FAQ)</span>",
      faq_page_subtitle: "Alles Wissenswerte über Produkte, Zustandsprüfung, Reservierungen und Bestellabwicklung bei Letino Outlet.",
      faq_tab_all: "Alle",
      faq_tab_products: "Produkte & Zustand",
      faq_tab_orders: "Kauf & Reservierung",
      faq_tab_shipping: "Versand & Lieferung",
      faq_tab_safety: "Sicherheit & Kontakt",
      cat_title_products: "Produkte & Technischer Zustand",
      fq_p1: "Sind die Produkte bei Letino Outlet neu oder gebraucht?",
      fa_p1: "Letino Outlet führt Waren aus Kundenretouren und Überbeständen. Einige Artikel sind fabrikneu in geöffneter oder beschädigter Verpackung, andere sind Ausstellungs- oder Retourenstücke. Der genaue Zustand wird in jeder Artikelbeschreibung transparent angegeben.",
      fq_p2: "Wie werden die Geräte vor dem Verkauf geprüft?",
      fa_p2: "Jedes Exemplar wird vor dem Einstellen technisch geprüft. Wir testen Hauptfunktionen (Einschalten, Laden, Konnektivität, Bedienelemente) und überprüfen die Vollständigkeit des Originalzubehörs.",
      fq_p3: "Was bedeuten Zustände wie 'Geöffnete OVP' oder 'Klasse A+'?",
      fa_p3: "'Neu / Geöffnete OVP' bedeutet ein einwandfreies Gerät, dessen Verpackung zur Prüfung geöffnet wurde oder leichte Transportschäden aufweist. 'Klasse A+' bezeichnet geprüfte Ware in nahezu neuwertigem Zustand ohne nennenswerte Gebrauchsspuren.",
      fq_p4: "Woher stammt die angebotene Ware?",
      fa_p4: "Unsere Produkte stammen aus Kundenretouren und Restposten aus dem europäischen Markt.",
      fq_p5: "Ist das Originalzubehör im Lieferumfang enthalten?",
      fa_p5: "Die Vollständigkeit des Sets ist bei jedem Angebot detailliert angegeben. Die überwiegende Mehrheit der Artikel enthält das komplette Werkszubehör (Kabel, Netzteile, Zubehör).",
      cat_title_orders: "Kauf & Reservierung",
      fq_o1: "Wo finde ich die aktuell verfügbaren Angebote?",
      fa_o1: "Neuzugänge, Unboxings und Einzelangebote veröffentlichen wir zuerst auf unserem Instagram-Profil (@letino.outlet). Ausgewählte Artikel sind auch in unserem eBay-Shop gelistet.",
      fq_o2: "Warum sind Produkte auf der Startseite als 'Beispielangebot' gekennzeichnet?",
      fa_o2: "Wegen des schnellen Sortimentswechsels im Outlet sind viele Artikel Einzelstücke. Die Produkte auf der Startseite veranschaulichen typische Angebote und Preise, während aktuelle Einzelstücke auf Instagram gezeigt werden.",
      fq_o3: "Wie frage ich nach Verfügbarkeit oder reserviere einen Artikel?",
      fa_o3: "Schreiben Sie uns einfach eine Direktnachricht (DM) auf Instagram @letino.outlet. Wir antworten zügig, senden Ihnen Detailfotos und vereinbaren den Kauf.",
      fq_o4: "Warum sind die Preise bei Letino Outlet so günstig?",
      fa_o4: "Die Ersparnis entsteht durch den Bezug von Retouren und Überbeständen (oft mit geöffneter Verpackung). So erhalten Sie einwandfreie Markenware mit erheblichem Preisnachlass.",
      cat_title_shipping: "Versand & Lieferung",
      fq_s1: "Wie erfolgt der Versand der Bestellungen?",
      fa_s1: "Der Versand erfolgt über zuverlässige Paketdienste. Die Versandart wird im direkten Kontakt auf Instagram oder gemäß dem eBay-Angebot abgestimmt.",
      fq_s2: "Wie läuft der Kauf über eBay ab?",
      fa_s2: "Für Artikel in unserem eBay.de-Shop gilt der reguläre eBay-Kaufprozess mit vollem eBay-Käuferschutz und automatischer Sendungsverfolgung.",
      fq_s3: "Wie wird die Ware für den Transport geschützt?",
      fa_s3: "Jede Sendung wird sorgfältig mit stabilen Kartonagen, Luftpolsterfolie und Dämmmaterial verpackt, damit empfindliche Elektronik unbeschadet bei Ihnen ankommt.",
      cat_title_safety: "Sicherheit & Kontakt",
      fq_c1: "Welche Kontaktkanäle gibt es bei Letino Outlet?",
      fa_c1: "Der schnellste Weg ist eine Direktnachricht (DM) auf Instagram @letino.outlet. Alternativ erreichen Sie uns per E-Mail unter letino.outlet@gmail.com oder über eBay-Nachrichten.",
      fq_c2: "Ist Letino Outlet mit den Herstellern der Marken verbunden?",
      fa_c2: "Nein. Letino Outlet ist ein unabhängiger Händler und steht in keiner Verbindung zu externen Konzernen oder Markenherstellern. Alle Markennamen dienen ausschließlich Beschreibungszwecken.",
      fq_c3: "Was tun, wenn meine Frage hier nicht beantwortet wurde?",
      fa_c3: "Schreiben Sie uns direkt per DM auf Instagram @letino.outlet oder per E-Mail an letino.outlet@gmail.com. Wir helfen Ihnen gerne weiter!",
      faq_cta_title: "Haben Sie weitere Fragen?",
      faq_cta_desc: "Schreiben Sie uns per Direktnachricht (DM) auf Instagram @letino.outlet. Wir beraten Sie gerne persönlich!",
      faq_cta_btn: "Auf Instagram schreiben &rarr;",
      faq_cta_home: "Zur Startseite zurückkehren",
      faq_doc_title: "FAQ – Fragen & Antworten | Letino Outlet",
      faq_doc_desc: "Antworten auf Fragen zu Produktherkunft, Zustandsprüfung, Bestellung und Versand bei Letino Outlet."
    }
  };

  // =========================================================================
  // SYSTEM ZMIANY JĘZYKA
  // =========================================================================
  function setLanguage(lang, isImmediate = false) {
    const selectedLang = translations[lang] ? lang : 'de';
    const dict = translations[selectedLang];

    const applyLanguage = () => {
      document.documentElement.lang = selectedLang;
      const isFaq = document.body.getAttribute('data-page') === 'faq';
      if (isFaq && dict.faq_doc_title) {
        document.title = dict.faq_doc_title;
      } else if (dict.doc_title) {
        document.title = dict.doc_title;
      }
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        if (isFaq && dict.faq_doc_desc) {
          metaDesc.setAttribute('content', dict.faq_doc_desc);
        } else if (dict.doc_desc) {
          metaDesc.setAttribute('content', dict.doc_desc);
        }
      }

      // Aktualizacja wszystkich elementów z data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });

      // Aktualizacja wyglądu kafelków
      document.querySelectorAll('.lang-tile').forEach(tile => {
        const isActive = tile.getAttribute('data-lang') === selectedLang;
        tile.classList.toggle('active', isActive);
        tile.setAttribute('aria-checked', isActive ? 'true' : 'false');
        tile.tabIndex = isActive ? 0 : -1;
      });

      const activeTile = document.querySelector(`.lang-tile[data-lang="${selectedLang}"]`);
      if (activeTile) {
        updateLangGlideTo(activeTile);
      }

      try {
        localStorage.setItem('letino_lang', selectedLang);
      } catch (e) {}
    };

    if (isImmediate) {
      applyLanguage();
    } else {
      document.body.classList.add('lang-fade-out');
      setTimeout(() => {
        applyLanguage();
        document.body.classList.remove('lang-fade-out');
      }, 120);
    }
  }

  // =========================================================================
  // PŁYNNIE SUNĄCY WSKAŹNIK WYBORU JĘZYKA (LANGUAGE GLIDING PILL)
  // =========================================================================
  const langSwitcher = document.querySelector('.lang-switcher');
  let langGlidePill = document.querySelector('.lang-indicator-glide');
  if (langSwitcher && !langGlidePill) {
    langGlidePill = document.createElement('span');
    langGlidePill.className = 'lang-indicator-glide';
    langGlidePill.setAttribute('aria-hidden', 'true');
    langSwitcher.appendChild(langGlidePill);
  }
  if (langSwitcher) {
    langSwitcher.classList.add('has-glide-indicator');
  }

  function updateLangGlideTo(tileElement) {
    if (!langGlidePill || !langSwitcher || !tileElement) {
      if (langGlidePill) langGlidePill.style.opacity = '0';
      return;
    }
    const switcherRect = langSwitcher.getBoundingClientRect();
    const tileRect = tileElement.getBoundingClientRect();
    if (switcherRect.width === 0 || tileRect.width === 0) return;

    const left = tileRect.left - switcherRect.left;
    const width = tileRect.width;

    langGlidePill.style.transform = `translateX(${left}px)`;
    langGlidePill.style.width = `${width}px`;
    langGlidePill.style.opacity = '1';
  }

  // Obsługa kafelków językowych
  const langTiles = Array.from(document.querySelectorAll('.lang-tile'));
  langTiles.forEach((tile, index) => {
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = tile.getAttribute('data-lang');
      setLanguage(lang);
      tile.focus();
    });

    // Płynne podążanie pigułki za kursorem myszy (hover preview)
    tile.addEventListener('mouseenter', () => {
      updateLangGlideTo(tile);
    });

    tile.addEventListener('keydown', (e) => {
      let nextIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (index + 1) % langTiles.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (index - 1 + langTiles.length) % langTiles.length;
      }

      if (nextIndex !== null) {
        const nextTile = langTiles[nextIndex];
        const nextLang = nextTile.getAttribute('data-lang');
        setLanguage(nextLang);
        nextTile.focus();
      }
    });
  });

  // Płynny powrót do aktualnie aktywnego języka po zjechaniu kursora
  if (langSwitcher) {
    langSwitcher.addEventListener('mouseleave', () => {
      const currentActive = document.querySelector('.lang-tile.active');
      if (currentActive) {
        updateLangGlideTo(currentActive);
      }
    });
  }

  // Inicjalizacja pozycji pigułki po wyrenderowaniu strony i fontów
  requestAnimationFrame(() => {
    const activeTile = document.querySelector('.lang-tile.active') || langTiles[0];
    if (activeTile) updateLangGlideTo(activeTile);
  });

  if (document.fonts) {
    document.fonts.ready.then(() => {
      const activeTile = document.querySelector('.lang-tile.active') || langTiles[0];
      if (activeTile) updateLangGlideTo(activeTile);
    });
  }

  window.addEventListener('resize', () => {
    const activeTile = document.querySelector('.lang-tile.active');
    if (activeTile) updateLangGlideTo(activeTile);
  }, { passive: true });

  // Inicjalizacja języka (domyślny: niemiecki 'de')
  let initialLang = 'de';
  try {
    const saved = localStorage.getItem('letino_lang');
    if (saved && translations[saved]) {
      initialLang = saved;
    }
  } catch (e) {
    initialLang = 'de';
  }

  // Natychmiastowe zastosowanie domyślnego języka (bez opóźnienia)
  setLanguage(initialLang, true);

  // =========================================================================
  // MENU MOBILNE (DRAWER)
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // =========================================================================
  // PRZYCISK POWROTU NA GÓRĘ (BACK TO TOP)
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // MODAL INFORMACJI PRAWNYCH (POLITYKA PRYWATNOŚCI / REGULAMIN)
  // =========================================================================
  const legalModal = document.getElementById('legalModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCloseAction = document.getElementById('modalCloseAction');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const privacyBtn = document.getElementById('privacyBtn');
  const termsBtn = document.getElementById('termsBtn');

  function openLegalModal(type) {
    if (!legalModal || !modalTitle || !modalBody) return;

    if (type === 'privacy') {
      modalTitle.textContent = 'Polityka Prywatności Letino Outlet';
      modalBody.innerHTML = `
        <div class="legal-placeholder-alert">
          <strong>Wskazówka:</strong> Poniższa treść stanowi informację o ochronie prywatności. Właściwe dane rejestrowe administratora zostaną uzupełnione przez właściciela serwisu.
        </div>
        <p><strong>1. Informacje ogólne:</strong> Serwis Letino Outlet szanuje prywatność użytkowników odwiedzających witrynę.</p>
        <p><strong>2. Pamięć przeglądarki:</strong> Serwis wykorzystuje pamięć lokalną (localStorage) wyłącznie do zapamiętania preferencji językowych (PL / EN / DE).</p>
        <p><strong>3. Przekierowania do serwisów zewnętrznych:</strong> Klikając linki do profilu Instagram lub sklepu eBay, użytkownik przechodzi na strony podmiotów trzecich posiadające odrębne zasady prywatności.</p>
        <p><strong>4. Dane kontaktowe:</strong> Wszelka korespondencja prowadzona za pośrednictwem Instagram Direct lub platform handlowych podlega zasadom tych platform.</p>
      `;
    } else {
      modalTitle.textContent = 'Regulamin Serwisu Letino Outlet';
      modalBody.innerHTML = `
        <div class="legal-placeholder-alert">
          <strong>Wskazówka:</strong> Poniższa treść określa informacyjny charakter witryny.
        </div>
        <p><strong>1. Charakter witryny:</strong> Niniejszy serwis pełni funkcję prezentacyjno-informacyjną dla oferty outletowej marki Letino Outlet.</p>
        <p><strong>2. Produkty:</strong> Oferowane towary pochodzą ze zwrotów konsumenckich oraz nadwyżek magazynowych. Każdy egzemplarz ma określony stan wizualny oraz techniczny w opisie.</p>
        <p><strong>3. Zakup i kontakt:</strong> Pytania o dostępność oraz ustalenia transakcyjne odbywają się drogą bezpośrednią (Instagram DM) lub przez dedykowane platformy sprzedaży.</p>
        <p><strong>4. Niezależność:</strong> Letino Outlet jest niezależnym podmiotem i nie jest powiązany z zewnętrznymi korporacjami ani producentami prezentowanych marek.</p>
      `;
    }

    legalModal.classList.add('is-open');
    legalModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  function closeLegalModal() {
    if (!legalModal) return;
    legalModal.classList.remove('is-open');
    legalModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  if (privacyBtn) {
    privacyBtn.addEventListener('click', () => openLegalModal('privacy'));
  }
  if (termsBtn) {
    termsBtn.addEventListener('click', () => openLegalModal('terms'));
  }
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeLegalModal);
  }
  if (modalCloseAction) {
    modalCloseAction.addEventListener('click', closeLegalModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeLegalModal);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && legalModal && legalModal.classList.contains('is-open')) {
      closeLegalModal();
    }
  });

  // =========================================================================
  // SYNCHRONIZACJA LINKÓW
  // =========================================================================
  document.querySelectorAll('.card-link').forEach(link => {
    link.href = INSTAGRAM_URL;
  });

  document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.href = INSTAGRAM_URL;
  });

  // =========================================================================
  // AUTOMATYCZNA INTEGRACJA Z INSTAGRAM FEED (META GRAPH API)
  // =========================================================================
  async function initInstagramFeed() {
    const feedGrid = document.getElementById('instagramFeedGrid');
    if (!feedGrid || !INSTAGRAM_ACCESS_TOKEN || INSTAGRAM_ACCESS_TOKEN.trim() === '') {
      return; // Brak tokenu - zachowaj responsywny szablon startowy z prawidłowymi linkami
    }

    try {
      const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${encodeURIComponent(INSTAGRAM_ACCESS_TOKEN.trim())}&limit=4`;
      const response = await fetch(endpoint);
      if (!response.ok) return;

      const data = await response.json();
      if (!data || !Array.isArray(data.data) || data.data.length === 0) return;

      feedGrid.innerHTML = '';
      data.data.slice(0, 4).forEach(item => {
        const card = document.createElement('a');
        card.className = 'ig-feed-card';
        card.href = item.permalink || INSTAGRAM_URL;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';

        const imgUrl = (item.media_type === 'VIDEO' && item.thumbnail_url) ? item.thumbnail_url : (item.media_url || '');
        const dateFormatted = item.timestamp ? new Date(item.timestamp).toLocaleDateString() : 'INSTAGRAM';
        const caption = item.caption ? item.caption.substring(0, 110) + (item.caption.length > 110 ? '...' : '') : 'Nowy post na profilu @letino.outlet';

        const isVideo = item.media_type === 'VIDEO';
        const badgeIcon = isVideo 
          ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'
          : '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>';

        card.innerHTML = `
          <div class="ig-feed-media">
            <img src="${imgUrl}" alt="Post z Instagrama Letino Outlet" loading="lazy">
            <div class="ig-feed-type-badge">${badgeIcon}</div>
          </div>
          <div class="ig-feed-body">
            <span class="ig-feed-date">${dateFormatted}</span>
            <p class="ig-feed-caption">${caption}</p>
            <div class="ig-feed-footer">
              <span>Zobacz post</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        `;
        feedGrid.appendChild(card);
      });
    } catch (err) {
      console.warn('Instagram live feed fetch failed, keeping fallback feed cards:', err);
    }
  }

  initInstagramFeed();
  // =========================================================================
  // FILTR KATEGORII NA PODSTRONIE FAQ (faq.html)
  // =========================================================================
  const faqTabs = document.querySelectorAll('.faq-tab');
  const faqBlocks = document.querySelectorAll('.faq-category-block');

  if (faqTabs.length > 0 && faqBlocks.length > 0) {
    faqTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.getAttribute('data-filter');

        faqTabs.forEach(t => {
          const isActive = t === tab;
          t.classList.toggle('active', isActive);
          t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        faqBlocks.forEach(block => {
          const category = block.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            block.classList.remove('is-hidden');
          } else {
            block.classList.add('is-hidden');
          }
        });
      });
    });
  }

  // =========================================================================
  // AKTYWNA KRESKA W NAGŁÓWKU (GLIDING INDICATOR) & PŁYNNE PRZEJŚCIA
  // =========================================================================
  function initNavIndicator() {
    const isFaqPage = window.location.pathname.endsWith('faq.html') || 
                      window.location.pathname.includes('faq') || 
                      document.body.getAttribute('data-page') === 'faq' || 
                      document.querySelector('.faq-page-main') !== null;
    const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links .mobile-nav-link');
    const allNavLinks = [...desktopLinks, ...mobileLinks];
    const navLinksList = document.querySelector('.nav-links');

    // Dynamiczny element płynnie sunącej złotej kreski
    let glideIndicator = document.querySelector('.nav-indicator-glide');
    if (navLinksList && !glideIndicator) {
      glideIndicator = document.createElement('li');
      glideIndicator.className = 'nav-indicator-glide';
      glideIndicator.setAttribute('aria-hidden', 'true');
      navLinksList.appendChild(glideIndicator);
      navLinksList.classList.add('has-glide-indicator');
    }

    let activeKey = isFaqPage ? 'faq' : null;

    function updateGlideTo(linkElement) {
      if (!glideIndicator || !navLinksList || !linkElement) {
        if (glideIndicator) glideIndicator.style.opacity = '0';
        return;
      }
      
      const listRect = navLinksList.getBoundingClientRect();
      const linkRect = linkElement.getBoundingClientRect();
      const left = linkRect.left - listRect.left;
      const width = linkRect.width;

      glideIndicator.style.transform = `translateX(${left}px)`;
      glideIndicator.style.width = `${width}px`;
      glideIndicator.style.opacity = '1';
    }

    function setActiveKey(key, forceGlide = true) {
      activeKey = key;
      let activeDesktopLink = null;

      allNavLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        let isMatch = false;

        if (key === 'faq') {
          isMatch = href.endsWith('#faq') || (href.includes('faq.html') && !href.includes('#kontakt'));
        } else if (key === 'kontakt') {
          isMatch = href.endsWith('#kontakt');
        } else if (key === 'o-letino') {
          isMatch = href.endsWith('#o-letino');
        } else if (key === 'abc-ware') {
          isMatch = href.endsWith('#abc-ware');
        } else if (key === 'produkty') {
          isMatch = href.endsWith('#produkty');
        } else if (key === 'kategorie') {
          isMatch = href.endsWith('#kategorie');
        } else if (key === 'platformy') {
          isMatch = href.endsWith('#platformy');
        } else if (key === 'instagram-feed') {
          isMatch = href.endsWith('#instagram-feed');
        } else if (key === 'dlaczego-letino') {
          isMatch = href.endsWith('#dlaczego-letino');
        }

        link.classList.toggle('active', isMatch);
        if (isMatch && link.closest('.desktop-nav')) {
          activeDesktopLink = link;
        }
      });

      if (forceGlide) {
        if (activeDesktopLink) {
          updateGlideTo(activeDesktopLink);
        } else if (glideIndicator && !key) {
          glideIndicator.style.opacity = '0';
        }
      }
    }

    // Płynne podążanie kreski za kursorem myszy z powrotem do aktywnej pozycji
    desktopLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        updateGlideTo(link);
      });
    });

    if (navLinksList) {
      navLinksList.addEventListener('mouseleave', () => {
        const currentActive = document.querySelector('.desktop-nav .nav-link.active');
        if (currentActive) {
          updateGlideTo(currentActive);
        } else if (glideIndicator) {
          glideIndicator.style.opacity = '0';
        }
      });
    }

    // Aktualizacja pozycji przy zmianie rozmiaru ekranu
    window.addEventListener('resize', () => {
      const currentActive = document.querySelector('.desktop-nav .nav-link.active');
      if (currentActive) {
        updateGlideTo(currentActive);
      }
    }, { passive: true });

    // Płynne, precyzyjne przewijanie z uwzględnieniem sticky header
    function smoothScrollTo(targetEl) {
      if (!targetEl) return;
      const headerOffset = 70;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Kliknięcie w linki nawigacji
    allNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';

        if (href === '#kontakt' || (isFaqPage && href.endsWith('#kontakt'))) {
          const targetEl = document.getElementById('kontakt');
          if (targetEl) {
            e.preventDefault();
            setActiveKey('kontakt');
            smoothScrollTo(targetEl);
            if (history.pushState) {
              history.pushState(null, null, '#kontakt');
            } else {
              location.hash = '#kontakt';
            }
          }
        } else if (isFaqPage && href.includes('faq.html') && !href.includes('#')) {
          e.preventDefault();
          setActiveKey('faq');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (history.pushState) {
            history.pushState(null, null, window.location.pathname);
          }
        } else if (href.startsWith('#')) {
          const targetId = href.replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            setActiveKey(targetId);
            smoothScrollTo(targetEl);
            if (history.pushState) {
              history.pushState(null, null, '#' + targetId);
            }
          }
        } else if (href.includes('faq.html')) {
          setActiveKey('faq');
        }
      });
    });

    // Inicjalizacja stanu
    if (isFaqPage) {
      if (window.location.hash === '#kontakt') {
        setActiveKey('kontakt');
        setTimeout(() => {
          const targetEl = document.getElementById('kontakt');
          if (targetEl) smoothScrollTo(targetEl);
        }, 150);
      } else {
        setActiveKey('faq');
      }
    } else {
      const currentHash = window.location.hash.replace('#', '');
      if (['o-letino', 'abc-ware', 'produkty', 'kategorie', 'platformy', 'instagram-feed', 'faq', 'kontakt'].includes(currentHash)) {
        setActiveKey(currentHash);
      } else if (glideIndicator) {
        glideIndicator.style.opacity = '0';
      }
    }

    const contactSection = document.getElementById('kontakt');
    const trackedSections = [
      { id: 'instagram-feed', key: 'instagram-feed' },
      { id: 'o-letino', key: 'o-letino' },
      { id: 'kategorie', key: 'kategorie' },
      { id: 'dlaczego-letino', key: 'dlaczego-letino' },
      { id: 'produkty', key: 'produkty' },
      { id: 'abc-ware', key: 'abc-ware' },
      { id: 'platformy', key: 'platformy' },
      { id: 'faq', key: 'faq' },
      { id: 'kontakt', key: 'kontakt' }
    ];

    const trackedElements = trackedSections.map(item => ({
      key: item.key,
      el: document.getElementById(item.id)
    })).filter(item => item.el !== null);

    let sectionPositions = [];
    function updateSectionPositions() {
      sectionPositions = trackedElements.map(item => {
        const top = item.el.offsetTop;
        const height = item.el.offsetHeight;
        return { key: item.key, top, bottom: top + height };
      });
    }

    updateSectionPositions();
    window.addEventListener('resize', updateSectionPositions, { passive: true });

    // Dopasowanie pozycji po załadowaniu fontów
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateSectionPositions();
        const currentActive = document.querySelector('.desktop-nav .nav-link.active');
        if (currentActive) updateGlideTo(currentActive);
      });
    }

    let contactTopCached = contactSection ? (contactSection.offsetTop || 0) : 0;
    function updateFaqContactOffset() {
      if (contactSection) contactTopCached = contactSection.offsetTop;
    }
    if (isFaqPage) {
      window.addEventListener('resize', updateFaqContactOffset, { passive: true });
      updateFaqContactOffset();
    }

    return function onNavScrollTick(scrollY) {
      if (isFaqPage) {
        if (contactSection) {
          if (scrollY + window.innerHeight * 0.45 >= contactTopCached) {
            if (activeKey !== 'kontakt') setActiveKey('kontakt');
          } else {
            if (activeKey !== 'faq') setActiveKey('faq');
          }
        }
      } else {
        if (scrollY < 180) {
          if (activeKey !== null) setActiveKey(null);
          return;
        }

        const scrollPos = scrollY + 200;
        let currentKey = null;

        for (let i = 0; i < sectionPositions.length; i++) {
          const item = sectionPositions[i];
          if (scrollPos >= item.top && scrollPos < item.bottom) {
            currentKey = item.key;
            break;
          }
        }

        if (currentKey && currentKey !== activeKey) {
          setActiveKey(currentKey);
        }
      }
    };
  }

  // =========================================================================
  // WYSOKOWYDAJNY MOTOR PRZEWIJANIA (REQUEST ANIMATION FRAME)
  // =========================================================================
  const onNavScrollTick = initNavIndicator();

  let isScrollTicking = false;
  let lastScrollY = -1;
  let isBackToTopVisible = false;

  function handleScrollFrame() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (scrollY === lastScrollY) {
      isScrollTicking = false;
      return;
    }
    lastScrollY = scrollY;

    // 1. Widoczność przycisku Back To Top (tylko przy zmianie stanu)
    if (backToTopBtn) {
      const shouldShow = scrollY > 350;
      if (shouldShow !== isBackToTopVisible) {
        isBackToTopVisible = shouldShow;
        backToTopBtn.classList.toggle('is-visible', shouldShow);
      }
    }

    // 2. Wskaźnik nagłówka & Scroll Spy
    if (onNavScrollTick) {
      onNavScrollTick(scrollY);
    }

    isScrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
      window.requestAnimationFrame(handleScrollFrame);
      isScrollTicking = true;
    }
  }, { passive: true });
});
