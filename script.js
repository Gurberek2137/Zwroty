/**
 * LETINO OUTLET - MAIN LOGIC & MULTI-LANGUAGE ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  // Oficjalne odnośniki Letino Outlet
  const INSTAGRAM_URL = 'https://www.instagram.com/letino.outlet/';
  const EBAY_URL = 'https://www.ebay.de/str/letinooutlet';
  const FACEBOOK_URL = 'https://www.facebook.com/people/Letino/61554488427516/?mibextid=wwXIfr';

  // Aktualizacja roku w stopce
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // BAZA TŁUMACZEŃ (PL / EN / DE)
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
      hero_live_badge: '<span class="pulse-dot"></span> DOSTAWA Z AMAZON',
      hero_brand_sub: '@letino.outlet &bull; Zamówienia i kontakt przez DM',
      hero_brand_arrow: 'Napisz DM &rarr;',
      hero_title: 'Markowe produkty. <br><span class="gradient-text">Ceny, które robią różnicę.</span>',
      hero_subtitle: 'Sprawdzone produkty pochodzące ze zwrotów konsumenckich i nadwyżek magazynowych. Znane marki w atrakcyjnych cenach.',
      hero_cta: 'Zobacz aktualne okazje',
      hero_cta_secondary: 'Przeglądaj ofertę',

      // Produkty
      section_badge: 'OSTATNIA DOSTAWA PALET',
      section_heading: 'Aktualne Okazje',
      section_subtext: 'Pojedyncze sztuki zweryfikowane pod kątem sprawności i kompletności.',
      p1_cond: 'Stan: Nowy / Otwarty karton',
      p1_comp: 'Kompletność: Zestaw fabryczny',
      p1_title: 'Sony WH-1000XM5 Słuchawki ANC',
      p1_amz: 'Cena Amazon: 1 499 zł',
      p1_savings: 'Oszczędzasz 650 zł',
      p1_ours: 'Nasza cena: <strong>849 zł</strong>',
      p1_cta: 'Kup teraz na eBay',

      p2_cond: 'Stan: Klasa A+ (stan idealny)',
      p2_comp: 'Kompletność: Zestaw z ładowarką',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Cena Amazon: 2 199 zł',
      p2_savings: 'Oszczędzasz 909 zł',
      p2_ours: 'Nasza cena: <strong>1 290 zł</strong>',
      p2_cta: 'Kup teraz na eBay',

      p3_cond: 'Stan: Sprawdzony / Klasa A',
      p3_comp: 'Kompletność: Zestaw akcesoriów',
      p3_title: 'Dyson V11 Odkurzacz Bezprzewodowy',
      p3_amz: 'Cena Amazon: 2 699 zł',
      p3_savings: 'Oszczędzasz 1 249 zł',
      p3_ours: 'Nasza cena: <strong>1 450 zł</strong>',
      p3_cta: 'Kup teraz na eBay',

      p4_cond: 'Stan: Otwarty karton / jak nowy',
      p4_comp: 'Kompletność: Zestaw fabryczny',
      p4_title: 'JBL Charge 5 Głośnik Bluetooth',
      p4_amz: 'Cena Amazon: 699 zł',
      p4_savings: 'Oszczędzasz 339 zł',
      p4_ours: 'Nasza cena: <strong>360 zł</strong>',
      p4_cta: 'Kup teraz na eBay',

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
      why_4_desc: 'Częste dostawy paletowe i unikalne pojedyncze egzemplarze w limitowanej dostępności.',

      // Jak to działa?
      how_badge: 'PROSTY PROCES',
      how_heading: 'Jak to działa?',
      how_subtext: 'Od dostawy paletowej po bezpieczny zakup w 4 prostych krokach.',
      how_1_title: 'Pozyskujemy produkty',
      how_1_desc: 'Produkty pochodzące ze zwrotów konsumenckich i nadwyżek magazynowych renomowanych platform e-commerce.',
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
      faq_a1: 'W ofercie Letino Outlet znajdują się towary ze zwrotów konsumenckich oraz nadwyżek magazynowych. Część produktów to egzemplarze fabrycznie nowe w otwartych lub uszkodzonych kartonach, a część to urządzenia powystawowe. Dokładny stan wizualny i klasa każdego produktu są zawsze rzetelnie podane w opisie danej oferty.',
      faq_q2: 'Czy produkty są sprawdzane?',
      faq_a2: 'Tak. Każdy egzemplarz przed wystawieniem do oferty jest weryfikowany pod kątem sprawności technicznej, działania głównych funkcji oraz kompletności dołączonych akcesoriów.',
      faq_q3: 'Skąd pochodzą produkty?',
      faq_a3: 'Oferowane produkty pochodzą ze zwrotów konsumenckich (np. zwrotów 14-dniowych), wyprzedaży zapasów oraz nadwyżek magazynowych z oficjalnych kanałów dystrybucji i platform handlowych (m.in. Amazon).',
      faq_q4: 'Gdzie można zobaczyć aktualną ofertę?',
      faq_a4: 'Bieżące dostawy, relacje oraz pojedyncze okazje publikujemy na naszym profilu Instagram (@letino.outlet). Część asortymentu wystawiamy również w naszym oficjalnym sklepie na platformie eBay.',
      faq_q5: 'Jak skontaktować się w sprawie produktu?',
      faq_a5: 'Najszybszym sposobem kontaktu jest wiadomość prywatna (Direct Message) na profilu Instagram @letino.outlet lub bezpośredni kontakt poprzez wiadomość na platformie eBay / Facebook.',

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
      contact_ebay_desc: 'Bezpośredni zakup z ochroną kupującego oraz opcja kontaktu ze sprzedającym na eBay.',
      contact_ebay_btn: 'Odwiedź sklep na eBay &rarr;',
      contact_registry_text: '<strong>Informacja formalna:</strong> Letino Outlet prowadzi sprzedaż zweryfikowanych towarów outletowych. Wszelkie zapytania handlowe oraz pytania o asortyment prosimy kierować przez wyżej wymienione oficjalne kanały.',

      // Stopka
      footer_brand_desc: 'Sprawdzone produkty ze zwrotów konsumenckich i nadwyżek magazynowych. Znane marki w atrakcyjnych cenach.',
      footer_links_title: 'Nawigacja',
      footer_social_title: 'Oficjalne Kanały',
      socials_title: 'Znajdź nas & Napisz do nas',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Profil Letino',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Sklep Letino Outlet',
      legal_notice: '<strong>Nota prawna:</strong> Serwis <strong>Letino Outlet</strong> jest niezależnym sprzedawcą zweryfikowanych towarów ze zwrotów konsumenckich oraz nadwyżek magazynowych i nie jest powiązany, prowadzony ani sponsorowany przez markę Amazon (Amazon.com, Inc. lub Amazon EU S.à r.l.). Wszelkie znaki towarowe i nazwy marek należą do ich prawnych właścicieli i zostały użyte wyłącznie w celach informacyjnych do określenia właściwości i przeznaczenia oferowanych produktów.',
      footer_privacy: 'Polityka Prywatności',
      footer_terms: 'Regulamin Serwisu',
      copyright_text: 'Letino Outlet. Wszelkie prawa zastrzeżone.'
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
      hero_live_badge: '<span class="pulse-dot"></span> DIRECT FROM AMAZON',
      hero_brand_sub: '@letino.outlet &bull; Inquiries & orders via DM',
      hero_brand_arrow: 'Send DM &rarr;',
      hero_title: 'Brand-name products. <br><span class="gradient-text">Prices that make a difference.</span>',
      hero_subtitle: 'Verified products from customer returns and overstock. Well-known brands at attractive prices.',
      hero_cta: 'View Latest Deals',
      hero_cta_secondary: 'Browse Offers',

      // Products
      section_badge: 'LATEST PALLET ARRIVAL',
      section_heading: 'Featured Deals',
      section_subtext: 'Single units tested and verified for condition and accessories.',
      p1_cond: 'Condition: New / Open Box',
      p1_comp: 'Completeness: Factory Kit',
      p1_title: 'Sony WH-1000XM5 ANC Headphones',
      p1_amz: 'Amazon Price: 1 499 PLN',
      p1_savings: 'Save 650 PLN',
      p1_ours: 'Our price: <strong>849 PLN</strong>',
      p1_cta: 'Buy now on eBay',

      p2_cond: 'Condition: Grade A+ (Pristine)',
      p2_comp: 'Completeness: Includes Charger',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Amazon Price: 2 199 PLN',
      p2_savings: 'Save 909 PLN',
      p2_ours: 'Our price: <strong>1 290 PLN</strong>',
      p2_cta: 'Buy now on eBay',

      p3_cond: 'Condition: Tested / Grade A',
      p3_comp: 'Completeness: Tool Kit Included',
      p3_title: 'Dyson V11 Cordless Vacuum',
      p3_amz: 'Amazon Price: 2 699 PLN',
      p3_savings: 'Save 1 249 PLN',
      p3_ours: 'Our price: <strong>1 450 PLN</strong>',
      p3_cta: 'Buy now on eBay',

      p4_cond: 'Condition: Open Box / Like New',
      p4_comp: 'Completeness: Factory Kit',
      p4_title: 'JBL Charge 5 Bluetooth Speaker',
      p4_amz: 'Amazon Price: 699 PLN',
      p4_savings: 'Save 339 PLN',
      p4_ours: 'Our price: <strong>360 PLN</strong>',
      p4_cta: 'Buy now on eBay',

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
      why_4_desc: 'Frequent pallet arrivals and unique, single-unit opportunities in limited quantities.',

      // How It Works
      how_badge: 'SIMPLE PROCESS',
      how_heading: 'How It Works',
      how_subtext: 'From pallet acquisition to safe purchase in 4 straightforward steps.',
      how_1_title: 'We Source Goods',
      how_1_desc: 'Products sourced from overstock and customer returns of major e-commerce platforms.',
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
      faq_a1: 'Letino Outlet offers goods from customer returns and warehouse overstocks. Some items are factory new in opened or slightly distressed boxes, while others are demo/display units. Exact cosmetic grade is always stated transparently.',
      faq_q2: 'Are items tested before dispatch?',
      faq_a2: 'Yes. Each piece undergoes functional verification, testing of primary features and check of included accessories before listing.',
      faq_q3: 'Where do the items come from?',
      faq_a3: 'Our inventory originates from customer returns (e.g. 14-day statutory returns), inventory clearances and warehouse overstock from official retail channels (including Amazon).',
      faq_q4: 'Where can I see current inventory?',
      faq_a4: 'Daily deliveries, unboxing stories and single-unit deals are posted on Instagram (@letino.outlet). Selected items are also listed on our official eBay store.',
      faq_q5: 'How do I contact you regarding an item?',
      faq_a5: 'The quickest way is sending a Direct Message (DM) on Instagram @letino.outlet or messaging us via eBay / Facebook.',

      // Contact
      contact_badge: 'CONTACT',
      contact_heading: 'Get In Touch',
      contact_subtext: 'We reply fastest via Instagram DM and marketplace messaging.',
      contact_ig_title: 'Instagram (Recommended)',
      contact_ig_desc: 'Send us a Direct Message (DM). We answer questions about condition, availability and reserve requests.',
      contact_ig_btn: 'Message on Instagram &rarr;',
      contact_fb_title: 'Facebook',
      contact_fb_desc: 'Letino official Facebook page. Contact via Messenger available.',
      contact_fb_btn: 'Open Facebook Page &rarr;',
      contact_ebay_title: 'eBay.de Store',
      contact_ebay_desc: 'Direct purchase with buyer protection and seller messaging on eBay.',
      contact_ebay_btn: 'Visit eBay Store &rarr;',
      contact_registry_text: '<strong>Formal Notice:</strong> Letino Outlet is a reseller of verified outlet merchandise. Please direct all commercial inquiries and stock questions through the official channels listed above.',

      // Footer
      footer_brand_desc: 'Verified products from customer returns and overstock. Famous brands at affordable prices.',
      footer_links_title: 'Navigation',
      footer_social_title: 'Official Channels',
      socials_title: 'Find Us & Message Us',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Letino Profile',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet Store',
      legal_notice: '<strong>Legal Notice:</strong> <strong>Letino Outlet</strong> is an independent reseller of customer returns and overstock merchandise and is not affiliated with, operated by, or sponsored by Amazon (Amazon.com, Inc. or Amazon EU S.à r.l.). All trademarks and brand names belong to their respective owners and are used purely for descriptive identification.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      copyright_text: 'Letino Outlet. All rights reserved.'
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
      hero_live_badge: '<span class="pulse-dot"></span> DIREKT AUS AMAZON-RETOUREN',
      hero_brand_sub: '@letino.outlet &bull; Bestellungen & Kontakt per DM',
      hero_brand_arrow: 'DM schreiben &rarr;',
      hero_title: 'Markenprodukte. <br><span class="gradient-text">Preise, die den Unterschied machen.</span>',
      hero_subtitle: 'Geprüfte Produkte aus Kundenretouren und Überbeständen. Bekannte Marken zu attraktiven Preisen.',
      hero_cta: 'Aktuelle Angebote ansehen',
      hero_cta_secondary: 'Sortiment erkunden',

      // Produkte
      section_badge: 'NEUESTE PALETTENLIEFERUNG',
      section_heading: 'Aktuelle Schnäppchen',
      section_subtext: 'Geprüfte Einzelstücke – voll funktionsfähig und transparent bewertet.',
      p1_cond: 'Zustand: Neu / Geöffnete OVP',
      p1_comp: 'Vollständigkeit: Komplettes Set',
      p1_title: 'Sony WH-1000XM5 ANC Kopfhörer',
      p1_amz: 'Amazon UVP: 1 499 PLN',
      p1_savings: 'Sie sparen 650 PLN',
      p1_ours: 'Unser Preis: <strong>849 PLN</strong>',
      p1_cta: 'Jetzt auf eBay kaufen',

      p2_cond: 'Zustand: Klasse A+ (Neuwertig)',
      p2_comp: 'Vollständigkeit: Inkl. Ladekabel',
      p2_title: 'Apple Watch Series 9 GPS 45mm',
      p2_amz: 'Amazon UVP: 2 199 PLN',
      p2_savings: 'Sie sparen 909 PLN',
      p2_ours: 'Unser Preis: <strong>1 290 PLN</strong>',
      p2_cta: 'Jetzt auf eBay kaufen',

      p3_cond: 'Zustand: Geprüft / Klasse A',
      p3_comp: 'Vollständigkeit: Mit Zubehör',
      p3_title: 'Dyson V11 Akku-Staubsauger',
      p3_amz: 'Amazon UVP: 2 699 PLN',
      p3_savings: 'Sie sparen 1 249 PLN',
      p3_ours: 'Unser Preis: <strong>1 450 PLN</strong>',
      p3_cta: 'Jetzt auf eBay kaufen',

      p4_cond: 'Zustand: Geöffnete OVP / Wie neu',
      p4_comp: 'Vollständigkeit: Komplettes Set',
      p4_title: 'JBL Charge 5 Bluetooth-Lautsprecher',
      p4_amz: 'Amazon UVP: 699 PLN',
      p4_savings: 'Sie sparen 339 PLN',
      p4_ours: 'Unser Preis: <strong>360 PLN</strong>',
      p4_cta: 'Jetzt auf eBay kaufen',

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
      why_4_desc: 'Laufend neue Palettenlieferungen und seltene Einzelstücke mit begrenzter Verfügbarkeit.',

      // Wie funktioniert es?
      how_badge: 'EINFACHER ABLAUF',
      how_heading: 'Wie funktioniert es?',
      how_subtext: 'Von der Palettenware zum sicheren Kauf in 4 klaren Schritten.',
      how_1_title: 'Wir beziehen Ware',
      how_1_desc: 'Produkte aus Kundenretouren und Lagerüberhängen führender Handelsplattformen.',
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
      faq_a1: 'Bei Letino Outlet finden Sie Waren aus Kundenretouren und Restposten. Manche Produkte sind unbenutzt in geöffneter Verpackung, andere Vorführgeräte. Der genaue Zustand wird stets transparent deklariert.',
      faq_q2: 'Werden die Artikel geprüft?',
      faq_a2: 'Ja. Jedes Exemplar wird vor dem Verkauf auf Funktion, Betriebsbereitschaft und Zubehör getestet.',
      faq_q3: 'Woher stammt die Ware?',
      faq_a3: 'Die Produkte stammen aus gesetzlichen Rücksendungen (14-Tage-Retouren) und Lagerüberbeständen europäischer Marktplätze (u. a. Amazon).',
      faq_q4: 'Wo finde ich das aktuelle Sortiment?',
      faq_a4: 'Tagesaktuelle Neuzugänge und Highlights posten wir auf Instagram (@letino.outlet). Zudem finden Sie Angebote in unserem offiziellen eBay-Shop.',
      faq_q5: 'Wie kann ich ein Produkt anfragen?',
      faq_a5: 'Am schnellsten per Direktnachricht (DM) auf Instagram (@letino.outlet) oder über das Nachrichtensystem bei eBay / Facebook.',

      // Kontakt
      contact_badge: 'KONTAKT',
      contact_heading: 'Kontaktieren Sie uns',
      contact_subtext: 'Wir antworten am schnellsten per Instagram DM und Marktplatz.',
      contact_ig_title: 'Instagram (Empfohlen)',
      contact_ig_desc: 'Schreiben Sie uns eine Direktnachricht (DM) für Fragen zum Zustand, Preis und Reservierung.',
      contact_ig_btn: 'Auf Instagram schreiben &rarr;',
      contact_fb_title: 'Facebook',
      contact_fb_desc: 'Offizielle Facebook-Seite von Letino mit Messenger-Kontakt.',
      contact_fb_btn: 'Facebook-Seite öffnen &rarr;',
      contact_ebay_title: 'eBay.de Shop',
      contact_ebay_desc: 'Direkter Kauf mit Käuferschutz und Verkäuferkontakt auf eBay.',
      contact_ebay_btn: 'eBay-Shop besuchen &rarr;',
      contact_registry_text: '<strong>Rechtlicher Hinweis:</strong> Letino Outlet vertreibt geprüfte Outlet-Waren. Bitte richten Sie alle kaufmännischen Anfragen an die oben genannten offiziellen Kanäle.',

      // Footer
      footer_brand_desc: 'Geprüfte Ware aus Kundenretouren und Restposten bekannter Marken zu Spitzenpreisen.',
      footer_links_title: 'Navigation',
      footer_social_title: 'Offizielle Kanäle',
      socials_title: 'Finde uns & Schreib uns',
      social_ig_title: 'Instagram',
      social_ig_desc: '@letino.outlet',
      social_fb_title: 'Facebook',
      social_fb_desc: 'Letino Facebook-Seite',
      social_ebay_title: 'eBay.de',
      social_ebay_desc: 'Letino Outlet eBay-Shop',
      legal_notice: '<strong>Rechtlicher Hinweis:</strong> <strong>Letino Outlet</strong> ist ein unabhängiger Wiederverkäufer von Kundenretouren und steht in keiner geschäftlichen Verbindung zu Amazon (Amazon.com, Inc. oder Amazon EU S.à r.l.). Alle genannten Markennamen dienen rein beschreibenden Zwecken.',
      footer_privacy: 'Datenschutzerklärung',
      footer_terms: 'Nutzungsbedingungen',
      copyright_text: 'Letino Outlet. Alle Rechte vorbehalten.'
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
          <strong>Wskazówka:</strong> Poniższa treść stanowi transparentną informację o ochronie prywatności. Właściwe dane rejestrowe administratora zostaną uzupełnione przez właściciela firmy.
        </div>
        <p><strong>1. Informacje ogólne:</strong> Serwis Letino Outlet dba o poszanowanie prywatności użytkowników odwiedzających witrynę.</p>
        <p><strong>2. Pliki cookies i pamięć lokalna:</strong> Serwis wykorzystuje pamięć przeglądarki (localStorage) wyłącznie do zapamiętania preferencji językowych (PL / EN / DE). Nie stosujemy uciążliwych skryptów śledzących zachowanie użytkownika.</p>
        <p><strong>3. Przekierowania do serwisów zewnętrznych:</strong> Klikając linki do profili Instagram, Facebook lub sklepu eBay, użytkownik przechodzi na strony podmiotów trzecich, które posiadają własne, niezależne polityki prywatności.</p>
        <p><strong>4. Dane kontaktowe:</strong> Wszelka korespondencja prowadzona za pośrednictwem Instagram Direct, Facebook Messenger lub platformy eBay podlega zasadom bezpieczeństwa tych platform.</p>
      `;
    } else {
      modalTitle.textContent = 'Regulamin Serwisu Letino Outlet';
      modalBody.innerHTML = `
        <div class="legal-placeholder-alert">
          <strong>Wskazówka:</strong> Poniższa treść określa charakter informacyjno-katalogowy witryny.
        </div>
        <p><strong>1. Charakter witryny:</strong> Niniejszy serwis internetowy pełni funkcję katalogowo-informacyjną prezentującą wybrane produkty z oferty outletowej marki Letino Outlet.</p>
        <p><strong>2. Pochodzenie produktów:</strong> Oferowane produkty pochodzą ze zwrotów konsumenckich, nadwyżek magazynowych lub wyprzedaży zapasów. Każdy produkt posiada określony stan wizualny oraz techniczny w opisie oferty.</p>
        <p><strong>3. Zakup i finalizacja transakcji:</strong> Transakcje kupna-sprzedaży są zawierane za pośrednictwem dedykowanych platform handlowych (np. eBay.de) lub ustalane indywidualnie drogą bezpośrednią (Instagram DM). Zasady płatności, wysyłki oraz ewentualnych zwrotów są wiążąco określane na platformie sprzedażowej dla danego zakupu.</p>
        <p><strong>4. Niezależność:</strong> Letino Outlet jest niezależnym podmiotem gospodarczym i nie jest powiązany z marką Amazon ani producentami prezentowanych sprzętów.</p>
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
  // SYNCHRONIZACJA LINKÓW EBAY & INSTAGRAM
  // =========================================================================
  document.querySelectorAll('.card-link').forEach(link => {
    link.href = EBAY_URL;
  });

  document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.href = INSTAGRAM_URL;
  });
});
