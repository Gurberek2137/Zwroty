# 🛒 AMZ Returns Outlet – Landing Page

Nowoczesny, minimalistyczny i w pełni responsywny one-page (strona pokazowa / katalog ofert) dla projektu prezentującego okazyjne zwroty konsumenckie oraz nadwyżki magazynowe z platformy Amazon (Amazon Returns / Outlet).

Strona została zaprojektowana zgodnie z założeniem **maksymalnej prostoty i szybkości**:
- ❌ Brak koszyka, bramek płatności i skomplikowanych formularzy
- ❌ Brak baz danych i kont użytkowników
- ✅ **100% Czysty kod**: Semantyczny HTML5 + Nowoczesny CSS3 (Vanilla) + Lekki Vanilla JS
- ✅ **Bezpośredni kontakt i zamówienia**: Wszystkie oferty prowadzą wprost do wiadomości prywatnej (DM) na profilu **Instagram**

---

## 📱 Struktura Strony

1. **Top Announcement Bar**: Informacja o dacie ostatniej dostawy palety z pulsującym wskaźnikiem live.
2. **Sticky Header**: Nowoczesne logo, menu szybkiego przewijania oraz bezpośredni przycisk kontaktu na IG.
3. **Hero Section**: Chwytliwy nagłówek, wyjaśnienie zasad działania, kafelki zaufania (testy sprawności, wysyłka 24h Paczkomat/Kurier, rabaty 40–70%) oraz przycisk CTA.
4. **Katalog Ofert (Product Grid)**:
   - 8 gotowych przykładowych produktów z różnych kategorii (Sony, Apple, De'Longhi, Logitech, JBL, Dyson, Kindle, Razer).
   - Dynamiczne filtrowanie po kategoriach: *Wszystkie*, *Audio & Muzyka*, *Elektronika*, *Smartwatche*, *Dom & AGD*.
   - Wyszukiwarka na żywo (live search).
   - Etykiety stanu (*Nowy / Otwarty karton*, *Klasa A+*, *Powystawowy*), badge rabatowe (-40% do -54%) i oznaczenia limitowanych sztuk.
   - Każda karta otwiera bezpośrednio profil Instagram w celu rezerwacji.
5. **Jak to działa? (3 Proste Kroki)**: Wybór oferty → Wiadomość na Instagramie → Rezerwacja i wysyłka w 24h.
6. **Klasy Stanu Towaru**: Przejrzysta rozpiska transparentności produktów.
7. **Sekcja FAQ**: Odpowiedzi na najważniejsze pytania kupujących w formie interaktywnego akordeonu.
8. **Pływający Przycisk (FAB)**: Szybki dostęp do profilu Instagram w prawym dolnym rogu.
9. **Stopka & Nota Prawna**: Odnośniki do social mediów oraz nota prawna potwierdzająca niezależność outletu.

---

## 🛠️ Konfiguracja

Aby podpiąć swój profil na Instagramie, otwórz plik `script.js` i zmień wartość na samej górze:

```javascript
const INSTAGRAM_HANDLE = 'twoj_prawdziwy_profil';
```

Wszystkie przyciski i odnośniki na stronie zaktualizują się automatycznie!

---

## 💻 Uruchomienie lokalne

Otwórz plik `index.html` w dowolnej przeglądarce internetowej lub uruchom dowolny serwer statyczny:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve
```
