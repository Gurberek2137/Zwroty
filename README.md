# Letino Outlet

Nowoczesna, lekka i w pełni responsywna witryna handlowa oraz showroom online marki **Letino Outlet** – niezależnego sprzedawcy oferującego sprawdzone produkty ze zwrotów konsumenckich, nadwyżek magazynowych oraz końcówek serii z rynku europejskiego.

---

### Opis projektu

Witryna pełni rolę oficjalnej wizytówki oraz showroomu online:
* Prezentuje profil działalności, zasady weryfikacji sprzętu oraz korzyści dla kupujących.
* Przedstawia przykładowy asortyment wraz z orientacyjnym poziomem oszczędności względem cen rynkowych.
* Buduje wiarygodność poprzez potwierdzone statystyki sprzedaży (Social Proof z platformy eBay: 99,3% pozytywnych ocen, 1300+ zamówień).
* Prowadzi bezpośrednio do głównych kanałów komunikacji i sprzedaży: profilu na **Instagramie** (`@letino.outlet`), oficjalnego **sklepu eBay** oraz kontaktu e-mail (`letino.outlet@gmail.com`).
* Zawiera wielojęzyczny silnik w czasie rzeczywistym (PL / EN / DE) oraz dedykowaną podstronę pytań i odpowiedzi (`faq.html`).

---

### Technologie

W projekcie wykorzystano wyłącznie technologie natywne (Vanilla Web Stack), eliminując zbędne narzuty frameworków i podatności zewnętrznych zależności:

* **HTML5**: Semantyczna struktura dokumentu, WAI-ARIA, metadane Open Graph, Twitter Cards oraz Schema.org JSON-LD (`Store`, `FAQPage`).
* **CSS3 (Vanilla CSS)**: Custom Properties (zmienne CSS), Flexbox, CSS Grid, efekty szklane (glassmorphism), animacje akcentów świetlnych oraz pełna responsywność (Mobile-First).
* **JavaScript (Vanilla JS ES6+)**: Lekki, natywny silnik bez bibliotek zewnętrznych (zero runtime dependencies) – obsługa wielojęzyczności (i18n), gliding indicators, szuflady mobilnej, modali i akordeonu FAQ.
* **Wektorowa grafika SVG**: Skalowalne ikony systemowe i flagi osadzone bezpośrednio w kodzie.

---

### Struktura projektu

```text
Zwroty/
├── assets/                          # Zasoby graficzne i brandingowe
│   ├── letino-logo-banner.png       # Oficjalne logo w formacie poziomym
│   ├── letino-logo-round.png        # Okrągły sygnet marki (ikona)
│   └── letino-logo-transparent.png  # Logo z przezroczystym tłem (watermark)
├── .env.example                     # Szablon zmiennych środowiskowych z wytycznymi bezpieczeństwa
├── .gitignore                       # Zabezpieczenie przed wyciekiem sekretów, plików .env, kluczy i logów
├── _headers                         # Konfiguracja nagłówków bezpieczeństwa (Cloudflare Pages / Netlify)
├── faq.html                         # Dedykowana podstrona FAQ z filtrowaniem i danymi Schema.org
├── favicon.ico                      # Wielorozdzielcza ikona serwisu wygenerowana z oficjalnego logo
├── index.html                       # Strona główna serwisu (Hero, Katalog, Social Proof, Kontakt)
├── README.md                        # Dokumentacja techniczna projektu
├── robots.txt                       # Reguły indeksowania dla wyszukiwarek
├── script.js                        # Główna logika frontendowa, słowniki i18n oraz interakcje UI
├── sitemap.xml                      # Mapa witryny z wersjami językowymi (hreflang)
└── style.css                        # Zunifikowany arkusz stylów v3.0 (Dark Slate & Gold Amber)
```

---

### Instalacja

Projekt jest aplikacją statyczną typu **zero-build** i nie wymaga instalowania żadnych zewnętrznych paczek ani zależności runtime.

Aby rozpocząć pracę z kodem:
1. Sklonuj repozytorium na dysk lokalny:
   ```bash
   git clone https://github.com/Gurberek2137/Zwroty.git
   cd Zwroty
   ```
2. Projekt jest natychmiast gotowy do uruchomienia – nie wymaga uruchamiania `npm install`.

---

### Uruchomienie lokalne

Serwis można uruchomić lokalnie za pomocą dowolnego serwera statycznego lub bezpośrednio w przeglądarce:

#### Opcja 1: Wbudowany serwer Python
```bash
python -m http.server 8080
```
Następnie otwórz w przeglądarce adres: `http://localhost:8080`

#### Opcja 2: Node.js (npx serve)
```bash
npx serve .
```

#### Opcja 3: Rozszerzenie Live Server (VS Code)
Kliknij prawym przyciskiem myszy na plik `index.html` i wybierz opcję **„Open with Live Server”**.

#### Opcja 4: Bezpośrednie otwarcie
Plik `index.html` można również otworzyć bezpośrednio w przeglądarce (dwuklik).

---

### Environment Variables

Projekt jest w 100% statyczną aplikacją frontendową działającą po stronie przeglądarki klienta. Wszystkie zasoby i skrypty JavaScript są publicznie dostępne dla użytkowników.

* W repozytorium znajduje się plik wzorcowy [`.env.example`](file:///c:/Users/Dawid%20Cudak/Desktop/Agata%20-%20Outlet/Zwroty/.env.example).
* **NIGDY nie umieszczaj w plikach środowiskowych ani w kodzie frontendowym żadnych prywatnych kluczy API, haseł, tokenów dostępowych ani sekretów backendowych.**
* Prawdziwe pliki `.env` oraz `.env.*` są zablokowane i ignorowane przez `.gitignore`.

Przykładowa zawartość `.env.example`:
```env
# URL produkcyjny serwisu (opcjonalny parametr dla narzędzi CI/CD lub hostingu)
SITE_URL=https://letino-outlet.pl

# Identyfikatory narzędzi analitycznych (jeśli zostaną wdrożone w przyszłości przez właściciela)
# GA_MEASUREMENT_ID=
# META_PIXEL_ID=
```

---

### Build

Dzięki wykorzystaniu czystych technologii webowych (Vanilla HTML5 / CSS3 / ES6+) aplikacja **nie wymaga procesu kompilacji ani bundlera** (brak Webpacka, Vite czy Rollupa).

* Kod źródłowy jest jednocześnie kodem produkcyjnym gotowym do dystrybucji.
* Opcjonalnie przed wdrożeniem można zastosować minifikację plików CSS/JS, jednak pliki są już zoptymalizowane pod kątem wydajności (czas renderowania 60fps, płynne transitions, cache busters `?v=3.0`).

---

### Deployment

Serwis może zostać wdrożony na dowolnym hostingu statycznym lub serwerze WWW:

1. **Cloudflare Pages / Netlify**:
   * Podłącz repozytorium Git.
   * Katalog publikacji: katalog główny (`.`).
   * Brak komendy builda (pozostaw puste).
   * Plik [`_headers`](file:///c:/Users/Dawid%20Cudak/Desktop/Agata%20-%20Outlet/Zwroty/_headers) automatycznie zaaplikuje nagłówki bezpieczeństwa.
2. **GitHub Pages**:
   * Przejdź do *Settings -> Pages* w repozytorium GitHub.
   * Wybierz gałąź `main` oraz katalog `/ (root)`.
3. **Nginx / Apache**:
   * Skopiuj wszystkie pliki projektu do katalogu webroot serwera (np. `/var/www/html/letino-outlet`).
   * Skonfiguruj nagłówki bezpieczeństwa zgodnie z wytycznymi w sekcji *Security*.

---

### Security

W ramach audytu bezpieczeństwa przed wdrożeniem produkcyjnym zrealizowano:

* **Brak sekretów**: Zweryfikowano całą historię repozytorium Git (wszystkie commity i obiekty packfile) – w projekcie nie ma hardcoded credentials, tokenów ani kluczy API.
* **Ochrona repozytorium (.gitignore)**: Plik `.gitignore` został skonfigurowany pod kątem blokowania plików `.env*`, kluczy prywatnych (`*.pem`, `*.key`), certyfikatów, logów oraz katalogów narzędziowych (`node_modules/`, `.cache/`).
* **Bezpieczeństwo frontendu**:
  * Wszystkie linki zewnętrzne otwierające nowe karty posiadają atrybuty `target="_blank" rel="noopener noreferrer"`, co chroni przed atakami typu Reverse Tabnabbing.
  * Brak niebezpiecznych manipulacji DOM bazujących na danych wejściowych użytkownika – brak podatności na DOM XSS.
  * Brak elementów `iframe` oraz formularzy gromadzących dane wrażliwe (transakcje realizowane są bezpośrednio na platformie handlowej eBay lub przez Instagram DM).
  * Dodano atrybut `<meta name="referrer" content="strict-origin-when-cross-origin">`.
* **Rekomendowane nagłówki bezpieczeństwa (Security Headers)**:
  W pliku [`_headers`](file:///c:/Users/Dawid%20Cudak/Desktop/Agata%20-%20Outlet/Zwroty/_headers) zdefiniowano gotowy zestaw reguł:
  * `Content-Security-Policy`: Restrykcyjna polityka dopuszczająca wyłącznie zasoby własne oraz oficjalne fonty Google (`fonts.googleapis.com`, `fonts.gstatic.com`).
  * `X-Frame-Options: DENY`: Ochrona przed Clickjackingiem.
  * `X-Content-Type-Options: nosniff`: Ochrona przed atakami MIME-sniffing.
  * `Referrer-Policy: strict-origin-when-cross-origin`: Ochrona prywatności użytkowników przy przekierowaniach.
  * `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`: Blokada niepotrzebnych uprawnień sprzętowych przeglądarki.

---

### Status

* **Status projektu**: **Production Ready (Gotowy do wdrożenia)**
* Przeprowadzono kompleksowy audyt bezpieczeństwa.
* Wyeliminowano rozbieżności w kanonicznych adresach URL w `faq.html`.
* Wygenerowano wielorozdzielczą ikonę serwisu `favicon.ico`.
* Zweryfikowano poprawność składni JavaScript i poprawność danych strukturalnych Schema.org JSON-LD.
* Wygląd, kolorystyka, layout i zachowanie zaakceptowane przez właścicielkę pozostały w 100% nienaruszone.
