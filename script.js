/**
 * LETINO OUTLET - MAIN LOGIC & MULTI-LANGUAGE ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  // Główne kanały i odnośniki Letino Outlet
  const INSTAGRAM_URL = 'https://www.instagram.com/letino.outlet/';
  const EBAY_URL = 'https://www.ebay.de/str/letinooutlet';
  const FACEBOOK_URL = 'https://www.facebook.com/people/Letino/61554488427516/?mibextid=wwXIfr';

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
      nav_deals: "Okazje",
      nav_why: "Dlaczego Letino?",
      nav_how: "Jak to działa?",
      nav_categories: "Kategorie",
      nav_faq: "FAQ",
      nav_contact: "Kontakt",

      // Hero
      hero_live_badge: '<span class="pulse-dot"></span> ZWROTY & OKAZJE',
      hero_brand_sub: '@letino.outlet &bull; Zamówienia i kontakt przez DM',
      hero_brand_arrow: 'Napisz DM &rarr;',
      hero_title: 'Markowe produkty. <br><span class="gradient-text">Ceny, które robią różnicę.</span>',
      hero_subtitle: 'Sprawdzone produkty pochodzące ze zwrotów konsumenckich i nadwyżek magazynowych. Znane marki w atrakcyjnych cenach.',
      hero_cta: 'Zobacz aktualne okazje',
      hero_cta_secondary: 'Przeglądaj ofertę',

      // Produkty (Przykłady z oferty)
      section_badge: 'PRZYKŁADY Z OFERTY',
      section_heading: 'Przykładowe Okazje',
      section_subtext: 'Poniższe produkty i ceny mają charakter poglądowy. Aktualnie dostępne pojedyncze sztuki prezentujemy na bieżąco na naszym Instagramie.',
      badge_sample: 'Wzór poglądowy',
      p1_cond: 'Stan: Nowy / Otwarty karton',
      p1_comp: 'Kompletność: Zestaw fabryczny',
      p1_title: 'Sony WH-1000XM5 Słuchawki ANC',
      p1_amz: 'Cena regularna: ok. 1 499 zł',
      p1_savings: 'Oszczędzasz 650 zł',
      p1_ours: 'Cena w Letino: <strong>849 zł</strong>',
      p1_cta: 'Zapytaj o dostępność na Instagramie',

      p2_cond: 'Stan: Klasa A+ (stan idealny)',
      p2_comp: 'Kompletność: Zestaw z ładowarką',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Cena regularna: ok. 2 199 zł',
      p2_savings: 'Oszczędzasz 909 zł',
      p2_ours: 'Cena w Letino: <strong>1 290 zł</strong>',
      p2_cta: 'Zapytaj o dostępność na Instagramie',

      p3_cond: 'Stan: Sprawdzony / Klasa A',
      p3_comp: 'Kompletność: Zestaw akcesoriów',
      p3_title: 'Dyson V11 Odkurzacz Bezprzewodowy',
      p3_amz: 'Cena regularna: ok. 2 699 zł',
      p3_savings: 'Oszczędzasz 1 249 zł',
      p3_ours: 'Cena w Letino: <strong>1 450 zł</strong>',
      p3_cta: 'Zapytaj o dostępność na Instagramie',

      p4_cond: 'Stan: Otwarty karton / jak nowy',
      p4_comp: 'Kompletność: Zestaw fabryczny',
      p4_title: 'JBL Charge 5 Głośnik Bluetooth',
      p4_amz: 'Cena regularna: ok. 699 zł',
      p4_savings: 'Oszczędzasz 339 zł',
      p4_ours: 'Cena w Letino: <strong>360 zł</strong>',
      p4_cta: 'Zapytaj o dostępność na Instagramie',

      // Dlaczego Letino?
      why_badge: 'NASZE ATUTY',
      why_heading: 'Dlaczego Letino?',
      why_subtext: 'Uczciwe zasady, rzetelna selekcja i sprawdzone źródła towaru.',
      why_1_title: 'Atrakcyjne ceny',
      why_1_desc: 'Realne oszczędności sięgające od kilkudziesięciu procent w stosunku do standardowych cen sklepowych.',
      why_2_title: 'Sprawdzone produkty',
      why_2_desc: 'Każdy produkt jest rzetelnie sprawdzany pod kątem działania i stanu wizualnego przed wystawieniem.',
      why_3_title: 'Znane marki',
      why_3_desc: 'Oryginalny sprzęt czołowych producentów elektroniki, urządzeń domowych i akcesoriów.',
      why_4_title: 'Regularnie nowe okazje',
      why_4_desc: 'Dynamicznie zmieniający się asortyment i unikalne pojedyncze egzemplarze w atrakcyjnych cenach.',

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
      cat_other_title: 'Inne',
      cat_other_desc: 'Różnorodne wyselekcjonowane okazje z nadwyżek magazynowych i wyprzedaży zapasów.',

      // Instagram Banner
      ig_banner_title: 'Najnowsze okazje znajdziesz na Instagramie',
      ig_banner_desc: 'Nasza oferta regularnie się zmienia. Obserwuj nas, aby nie przegapić nowych produktów.',
      ig_banner_btn: 'Przejdź do profilu @letino.outlet',

      // FAQ
      faq_badge: 'PYTANIA I ODPOWIEDZI',
      faq_heading: 'Najczęściej zadawane pytania',
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
      faq_a5: 'Najszybszym sposobem kontaktu jest wiadomość prywatna (Direct Message) na profilu Instagram @letino.outlet.',

      // Kontakt
      contact_badge: 'KONTAKT',
      contact_heading: 'Skontaktuj się z nami',
      contact_subtext: 'Odpowiadamy najszybciej na Instagramie i platformach sprzedażowych.',
      contact_ig_title: 'Instagram (Rekomendowany)',
      contact_ig_desc: 'Napisz do nas w wiadomości prywatnej (DM). Odpowiadamy na pytania o stan, dostępność i rezerwacje.',
      contact_ig_btn: 'Napisz na Instagramie &rarr;',
      contact_fb_title: 'Facebook',
      contact_fb_desc: 'Profil Letino na Facebooku. Możliwość kontaktu poprzez wiadomość Messenger.',
      contact_fb_btn: 'Przejdź do profilu Facebook &rarr;',
      contact_ebay_title: 'Sklep eBay.de',
      contact_ebay_desc: 'Profil sprzedażowy Letino Outlet na platformie eBay.',
      contact_ebay_btn: 'Odwiedź sklep na eBay &rarr;',
      contact_registry_text: '<strong>Informacja formalna:</strong> Letino Outlet prowadzi sprzedaż zweryfikowanych towarów outletowych. Wszelkie zapytania handlowe oraz pytania o asortyment prosimy kierować przez wyżej wymienione kanały kontaktu.',

      // Stopka
      footer_brand_desc: 'Sprawdzone produkty ze zwrotów konsumenckich i nadwyżek magazynowych. Znane marki w atrakcyjnych cenach.',
      footer_links_title: 'Nawigacja',
      footer_social_title: 'Nasze Kanały',
      socials_title: 'Znajdź nas & Napisz do nas',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Profil Letino',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Sklep Letino Outlet',
      legal_notice: '<strong>Nota prawna:</strong> Serwis <strong>Letino Outlet</strong> jest niezależnym sprzedawcą produktów ze zwrotów konsumenckich oraz nadwyżek magazynowych. Serwis nie jest powiązany, prowadzony ani sponsorowany przez żadną zewnętrzną korporację ani producentów prezentowanych marek. Wszelkie znaki towarowe należą do ich prawnych właścicieli i zostały użyte wyłącznie w celach informacyjnych.',
      footer_privacy: 'Polityka Prywatności',
      footer_terms: 'Regulamin Serwisu',
      copyright_text: 'Letino Outlet. Wszelkie prawa zastrzeżone.',
      nav_home: "Strona Główna",
      faq_more_btn: "Zobacz pełne centrum pytań i odpowiedzi (FAQ) &rarr;",
      crumb_home: "Strona Główna",
      crumb_faq: "FAQ",
      faq_page_badge: "CENTRUM POMOCY & FAQ",
      faq_page_title: "Najczęściej Zadawane <br><span class=\"gradient-text\">Pytania i Odpowiedzi</span>",
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
      fa_c1: "Głównym i najszybszym kanałem kontaktu jest wiadomość prywatna (Direct Message) na profilu Instagram @letino.outlet. Możesz także skontaktować się z nami poprzez profil na Facebooku lub system wiadomości w serwisie eBay.",
      fq_c2: "Czy Letino Outlet jest powiązane z producentami sprzedawanych marek?",
      fa_c2: "Nie. Serwis Letino Outlet jest niezależnym sprzedawcą produktów outletowych i nie jest powiązany ani sponsorowany przez żadną zewnętrzną korporację ani producentów prezentowanych marek. Wszelkie nazwy i znaki handlowe zostały użyte wyłącznie w celach informacyjnych.",
      fq_c3: "Co zrobić, jeśli mam inne pytanie, którego nie ma na liście?",
      fa_c3: "Napisz do nas bezpośrednio na Instagramie @letino.outlet. Chętnie odpowiemy na każde dodatkowe pytanie i rozwiejemy wszelkie wątpliwości!",
      faq_cta_title: "Masz dodatkowe pytania?",
      faq_cta_desc: "Napisz do nas w wiadomości prywatnej (DM) na Instagramie @letino.outlet. Chętnie doradzimy i odpowiemy na wszelkie pytania o sprzęt!",
      faq_cta_btn: "Napisz na Instagramie &rarr;",
      faq_cta_home: "Wróć do strony głównej",
      faq_doc_title: "FAQ – Najczęściej Zadawane Pytania | Letino Outlet",
      faq_doc_desc: "Odpowiedzi na pytania dotyczące pochodzenia sprzętu, weryfikacji stanu technicznego, zakupu oraz wysyłki w Letino Outlet.",
    },

    en: {
      doc_title: "Letino Outlet | Brand Returns & Verified Deals",
      doc_desc: "Letino Outlet – verified goods from customer returns and overstock at attractive prices.",
      
      // Navigation
      nav_deals: "Deals",
      nav_why: "Why Letino?",
      nav_how: "How It Works",
      nav_categories: "Categories",
      nav_faq: "FAQ",
      nav_contact: "Contact",

      // Hero
      hero_live_badge: '<span class="pulse-dot"></span> RETURNS & OVERSTOCK',
      hero_brand_sub: '@letino.outlet &bull; Inquiries & orders via DM',
      hero_brand_arrow: 'Send DM &rarr;',
      hero_title: 'Brand-name products. <br><span class="gradient-text">Prices that make a difference.</span>',
      hero_subtitle: 'Verified products from customer returns and overstock. Well-known brands at attractive prices.',
      hero_cta: 'View Latest Deals',
      hero_cta_secondary: 'Browse Offers',

      // Products (Sample Offers)
      section_badge: 'SAMPLE OFFERS',
      section_heading: 'Sample Deals',
      section_subtext: 'The products and prices below are for illustration purposes only. Currently available items are posted on our Instagram.',
      badge_sample: 'Sample Offer',
      p1_cond: 'Condition: New / Open Box',
      p1_comp: 'Completeness: Factory Kit',
      p1_title: 'Sony WH-1000XM5 ANC Headphones',
      p1_amz: 'Regular price: ~1 499 PLN',
      p1_savings: 'Save 650 PLN',
      p1_ours: 'Letino price: <strong>849 PLN</strong>',
      p1_cta: 'Inquire on Instagram',

      p2_cond: 'Condition: Grade A+ (Pristine)',
      p2_comp: 'Completeness: Includes Charger',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Regular price: ~2 199 PLN',
      p2_savings: 'Save 909 PLN',
      p2_ours: 'Letino price: <strong>1 290 PLN</strong>',
      p2_cta: 'Inquire on Instagram',

      p3_cond: 'Condition: Tested / Grade A',
      p3_comp: 'Completeness: Tool Kit Included',
      p3_title: 'Dyson V11 Cordless Vacuum',
      p3_amz: 'Regular price: ~2 699 PLN',
      p3_savings: 'Save 1 249 PLN',
      p3_ours: 'Letino price: <strong>1 450 PLN</strong>',
      p3_cta: 'Inquire on Instagram',

      p4_cond: 'Condition: Open Box / Like New',
      p4_comp: 'Completeness: Factory Kit',
      p4_title: 'JBL Charge 5 Bluetooth Speaker',
      p4_amz: 'Regular price: ~699 PLN',
      p4_savings: 'Save 339 PLN',
      p4_ours: 'Letino price: <strong>360 PLN</strong>',
      p4_cta: 'Inquire on Instagram',

      // Why Letino?
      why_badge: 'WHY CHOOSE US',
      why_heading: 'Why Letino?',
      why_subtext: 'Honest grading, strict verification and certified inventory sources.',
      why_1_title: 'Attractive Prices',
      why_1_desc: 'Substantial savings compared to standard manufacturer suggested retail prices.',
      why_2_title: 'Verified Products',
      why_2_desc: 'Every single unit undergoes thorough functional and visual inspection before being offered.',
      why_3_title: 'Known Brands',
      why_3_desc: 'Authentic merchandise from world-leading consumer electronics and home appliance makers.',
      why_4_title: 'Regular New Drops',
      why_4_desc: 'Frequently updated stock and unique single items at competitive prices.',

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
      cat_other_title: 'Other Deals',
      cat_other_desc: 'Carefully selected overstock opportunities across diverse categories.',

      // Instagram Banner
      ig_banner_title: 'Find the latest drops on Instagram',
      ig_banner_desc: 'Our stock rotates quickly. Follow our profile so you do not miss new arrivals.',
      ig_banner_btn: 'Visit @letino.outlet profile',

      // FAQ
      faq_badge: 'QUESTIONS & ANSWERS',
      faq_heading: 'Frequently Asked Questions',
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
      faq_a5: 'The quickest way is sending a Direct Message (DM) on Instagram @letino.outlet.',

      // Contact
      contact_badge: 'CONTACT',
      contact_heading: 'Get In Touch',
      contact_subtext: 'We reply fastest via Instagram DM and marketplace messaging.',
      contact_ig_title: 'Instagram (Recommended)',
      contact_ig_desc: 'Send us a Direct Message (DM). We answer questions about condition, availability and reserve requests.',
      contact_ig_btn: 'Message on Instagram &rarr;',
      contact_fb_title: 'Facebook',
      contact_fb_desc: 'Letino Facebook page. Contact via Messenger available.',
      contact_fb_btn: 'Open Facebook Page &rarr;',
      contact_ebay_title: 'eBay.de Store',
      contact_ebay_desc: 'Letino Outlet seller profile on eBay platform.',
      contact_ebay_btn: 'Visit eBay Store &rarr;',
      contact_registry_text: '<strong>Formal Notice:</strong> Letino Outlet is a reseller of verified outlet merchandise. Please direct all commercial inquiries and stock questions through the contact channels listed above.',

      // Footer
      footer_brand_desc: 'Verified products from customer returns and overstock. Famous brands at affordable prices.',
      footer_links_title: 'Navigation',
      footer_social_title: 'Our Channels',
      socials_title: 'Find Us & Message Us',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Letino Profile',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet Store',
      legal_notice: '<strong>Legal Notice:</strong> <strong>Letino Outlet</strong> is an independent reseller of customer returns and overstock merchandise. The site is not affiliated with, operated by, or sponsored by any external corporation or product manufacturers. All trademarks belong to their respective owners.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      copyright_text: 'Letino Outlet. All rights reserved.',
      nav_home: "Home",
      faq_more_btn: "View Full FAQ & Help Center &rarr;",
      crumb_home: "Home",
      crumb_faq: "FAQ",
      faq_page_badge: "HELP CENTER & FAQ",
      faq_page_title: "Frequently Asked <br><span class=\"gradient-text\">Questions & Answers</span>",
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
      fa_c1: "The primary and fastest channel is sending a Direct Message (DM) on Instagram @letino.outlet. You may also contact us via Facebook Messenger or eBay messaging.",
      fq_c2: "Is Letino Outlet affiliated with the product manufacturers?",
      fa_c2: "No. Letino Outlet is an independent reseller and is not affiliated with, sponsored by, or endorsed by brand manufacturers. All trademarks belong to their lawful owners and are used purely for identification.",
      fq_c3: "What if I have another question not listed here?",
      fa_c3: "Message us directly on Instagram @letino.outlet. We are always glad to assist and provide any additional information!",
      faq_cta_title: "Have more questions?",
      faq_cta_desc: "Send us a Direct Message (DM) on Instagram @letino.outlet. We are happy to help and answer any questions!",
      faq_cta_btn: "Message on Instagram &rarr;",
      faq_cta_home: "Return to Homepage",
      faq_doc_title: "FAQ – Frequently Asked Questions | Letino Outlet",
      faq_doc_desc: "Answers to questions regarding item provenance, technical condition verification, purchasing, and shipping at Letino Outlet.",
    },

    de: {
      doc_title: "Letino Outlet | Retouren & Markenschnäppchen",
      doc_desc: "Letino Outlet – geprüfte Ware aus Kundenretouren und Restposten zu Spitzenpreisen.",
      
      // Navigation
      nav_deals: "Angebote",
      nav_why: "Warum Letino?",
      nav_how: "So funktioniert's",
      nav_categories: "Kategorien",
      nav_faq: "FAQ",
      nav_contact: "Kontakt",

      // Hero
      hero_live_badge: '<span class="pulse-dot"></span> RETOUREN & ANGEBOTE',
      hero_brand_sub: '@letino.outlet &bull; Bestellungen & Kontakt per DM',
      hero_brand_arrow: 'DM schreiben &rarr;',
      hero_title: 'Markenprodukte. <br><span class="gradient-text">Preise, die den Unterschied machen.</span>',
      hero_subtitle: 'Geprüfte Produkte aus Kundenretouren und Überbeständen. Bekannte Marken zu attraktiven Preisen.',
      hero_cta: 'Aktuelle Angebote ansehen',
      hero_cta_secondary: 'Sortiment erkunden',

      // Produkte (Beispiele aus dem Sortiment)
      section_badge: 'BEISPIELANGEBOTE',
      section_heading: 'Beispielhafte Angebote',
      section_subtext: 'Die nachfolgenden Produkte und Preise dienen lediglich als Beispiele. Aktuell verfügbare Artikel posten wir auf Instagram.',
      badge_sample: 'Beispielangebot',
      p1_cond: 'Zustand: Neu / Geöffnete OVP',
      p1_comp: 'Vollständigkeit: Komplettes Set',
      p1_title: 'Sony WH-1000XM5 ANC Kopfhörer',
      p1_amz: 'Regulärer Preis: ca. 1 499 PLN',
      p1_savings: 'Sie sparen 650 PLN',
      p1_ours: 'Letino Preis: <strong>849 PLN</strong>',
      p1_cta: 'Auf Instagram anfragen',

      p2_cond: 'Zustand: Klasse A+ (Neuwertig)',
      p2_comp: 'Vollständigkeit: Inkl. Ladekabel',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Regulärer Preis: ca. 2 199 PLN',
      p2_savings: 'Sie sparen 909 PLN',
      p2_ours: 'Letino Preis: <strong>1 290 PLN</strong>',
      p2_cta: 'Auf Instagram anfragen',

      p3_cond: 'Zustand: Geprüft / Klasse A',
      p3_comp: 'Vollständigkeit: Mit Zubehör',
      p3_title: 'Dyson V11 Akku-Staubsauger',
      p3_amz: 'Regulärer Preis: ca. 2 699 PLN',
      p3_savings: 'Sie sparen 1 249 PLN',
      p3_ours: 'Letino Preis: <strong>1 450 PLN</strong>',
      p3_cta: 'Auf Instagram anfragen',

      p4_cond: 'Zustand: Geöffnete OVP / Wie neu',
      p4_comp: 'Vollständigkeit: Komplettes Set',
      p4_title: 'JBL Charge 5 Bluetooth-Lautsprecher',
      p4_amz: 'Regulärer Preis: ca. 699 PLN',
      p4_savings: 'Sie sparen 339 PLN',
      p4_ours: 'Letino Preis: <strong>360 PLN</strong>',
      p4_cta: 'Auf Instagram anfragen',

      // Warum Letino?
      why_badge: 'UNSERE VORTEILE',
      why_heading: 'Warum Letino?',
      why_subtext: 'Transparente Bewertung, professionelle Prüfung und verlässliche Quellen.',
      why_1_title: 'Attraktive Preise',
      why_1_desc: 'Echte Ersparnisse von mehreren Dutzend Prozent gegenüber herkömmlichen UVP-Preisen.',
      why_2_title: 'Geprüfte Produkte',
      why_2_desc: 'Jedes Gerät wird vor dem Einstellen technisch und optisch genauestens überprüft.',
      why_3_title: 'Bekannte Marken',
      why_3_desc: 'Originalware renommierter Hersteller von Elektronik und Haushaltsgeräten.',
      why_4_title: 'Regelmäßig neue Drops',
      why_4_desc: 'Regelmäßig wechselndes Sortiment und seltene Einzelstücke zu attraktiven Preisen.',

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
      cat_other_title: 'Sonstiges',
      cat_other_desc: 'Ausgewählte Schnäppchen aus Restposten und Lagerabverkäufen.',

      // Instagram Banner
      ig_banner_title: 'Die neuesten Schnäppchen auf Instagram',
      ig_banner_desc: 'Unser Sortiment wechselt schnell. Folgen Sie uns, um keine Deals zu verpassen.',
      ig_banner_btn: 'Zum @letino.outlet Profil',

      // FAQ
      faq_badge: 'FRAGEN & ANTWORTEN',
      faq_heading: 'Häufig gestellte Fragen',
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
      faq_a5: 'Am schnellsten per Direktnachricht (DM) auf Instagram (@letino.outlet).',

      // Kontakt
      contact_badge: 'KONTAKT',
      contact_heading: 'Kontaktieren Sie uns',
      contact_subtext: 'Wir antworten am schnellsten per Instagram DM und Marktplatz.',
      contact_ig_title: 'Instagram (Empfohlen)',
      contact_ig_desc: 'Schreiben Sie uns eine Direktnachricht (DM) für Fragen zum Zustand, Preis und Reservierung.',
      contact_ig_btn: 'Auf Instagram schreiben &rarr;',
      contact_fb_title: 'Facebook',
      contact_fb_desc: 'Facebook-Seite von Letino mit Messenger-Kontakt.',
      contact_fb_btn: 'Facebook-Seite öffnen &rarr;',
      contact_ebay_title: 'eBay.de Shop',
      contact_ebay_desc: 'Letino Outlet Verkäuferprofil auf eBay.',
      contact_ebay_btn: 'eBay-Shop besuchen &rarr;',
      contact_registry_text: '<strong>Rechtlicher Hinweis:</strong> Letino Outlet vertreibt geprüfte Outlet-Waren. Bitte richten Sie alle kaufmännischen Anfragen an die oben genannten Kontaktkanäle.',

      // Footer
      footer_brand_desc: 'Geprüfte Ware aus Kundenretouren und Restposten bekannter Marken zu Spitzenpreisen.',
      footer_links_title: 'Navigation',
      footer_social_title: 'Unsere Kanäle',
      socials_title: 'Finde uns & Schreib uns',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Letino Facebook-Seite',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet eBay-Shop',
      legal_notice: '<strong>Rechtlicher Hinweis:</strong> <strong>Letino Outlet</strong> ist ein unabhängiger Wiederverkäufer von Kundenretouren und Restposten und steht in keiner geschäftlichen Verbindung zu externen Konzernen oder Markenherstellern. Alle Marken gehören ihren jeweiligen Eigentümern.',
      footer_privacy: 'Datenschutzerklärung',
      footer_terms: 'Nutzungsbedingungen',
      copyright_text: 'Letino Outlet. Alle Rechte vorbehalten.',
      nav_home: "Startseite",
      faq_more_btn: "Vollständiges FAQ & Hilfe-Center ansehen &rarr;",
      crumb_home: "Startseite",
      crumb_faq: "FAQ",
      faq_page_badge: "HILFE-CENTER & FAQ",
      faq_page_title: "Häufig gestellte <br><span class=\"gradient-text\">Fragen & Antworten</span>",
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
      fa_c1: "Der schnellste Weg ist eine Direktnachricht (DM) auf Instagram @letino.outlet. Alternativ erreichen Sie uns über Facebook Messenger oder eBay-Nachrichten.",
      fq_c2: "Ist Letino Outlet mit den Herstellern der Marken verbunden?",
      fa_c2: "Nein. Letino Outlet ist ein unabhängiger Händler und steht in keiner Verbindung zu externen Konzernen oder Markenherstellern. Alle Markennamen dienen ausschließlich Beschreibungszwecken.",
      fq_c3: "Was tun, wenn meine Frage hier nicht beantwortet wurde?",
      fa_c3: "Schreiben Sie uns direkt per DM auf Instagram @letino.outlet. Wir helfen Ihnen gerne weiter!",
      faq_cta_title: "Haben Sie weitere Fragen?",
      faq_cta_desc: "Schreiben Sie uns per Direktnachricht (DM) auf Instagram @letino.outlet. Wir beraten Sie gerne persönlich!",
      faq_cta_btn: "Auf Instagram schreiben &rarr;",
      faq_cta_home: "Zur Startseite zurückkehren",
      faq_doc_title: "FAQ – Häufig gestellte Fragen | Letino Outlet",
      faq_doc_desc: "Antworten auf Fragen zu Produktherkunft, Zustandsprüfung, Bestellung und Versand bei Letino Outlet.",
    }
  };

  // =========================================================================
  // SYSTEM ZMIANY JĘZYKA
  // =========================================================================
  function setLanguage(lang) {
    const selectedLang = translations[lang] ? lang : 'pl';
    const dict = translations[selectedLang];

    document.body.classList.add('lang-fade-out');

    setTimeout(() => {
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

      try {
        localStorage.setItem('letino_lang', selectedLang);
      } catch (e) {}

      document.body.classList.remove('lang-fade-out');
    }, 120);
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

  // Inicjalizacja języka
  let initialLang = 'pl';
  try {
    const saved = localStorage.getItem('letino_lang');
    if (saved && translations[saved]) {
      initialLang = saved;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (browserLang.startsWith('de')) {
        initialLang = 'de';
      } else if (browserLang.startsWith('en')) {
        initialLang = 'en';
      }
    }
  } catch (e) {
    initialLang = 'pl';
  }

  if (initialLang !== 'pl') {
    setLanguage(initialLang);
  }

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
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

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
        <p><strong>3. Przekierowania do serwisów zewnętrznych:</strong> Klikając linki do profilu Instagram, Facebook lub sklepu eBay, użytkownik przechodzi na strony podmiotów trzecich posiadające odrębne zasady prywatności.</p>
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
});
