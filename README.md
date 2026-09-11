# Letino Outlet – Landing Page

Prosta, responsywna strona wizytówkowa (landing page) dla **Letino Outlet**, prezentująca ofertę produktów pochodzących ze zwrotów konsumenckich (m.in. z Amazona).

## ✨ Funkcje

- **Czysty kod** – lekki projekt w czystym HTML, CSS i JavaScript (brak ciężkich frameworków czy zbędnych zależności).
- **Wielojęzyczność** – obsługa języka polskiego, angielskiego oraz niemieckiego (PL / EN / DE).
- **Responsywność (RWD)** – pełne dopasowanie do telefonów, tabletów i komputerów.
- **Kanały sprzedaży** – bezpośrednie linki do profilu Instagram oraz ofert na eBay.

## 🚀 Uruchomienie

Projekt jest statyczny – nie wymaga instalacji pakietów ani kompilacji:

1. Sklonuj lub pobierz repozytorium.
2. Otwórz plik `index.html` w dowolnej przeglądarce (np. klikając dwukrotnie lub przez *Live Server* w VS Code).

## ⚙️ Konfiguracja linków

Główne linki do profili społecznościowych i sklepu można zmienić na początku pliku `script.js`:

```javascript
const INSTAGRAM_URL = 'https://www.instagram.com/...';
const EBAY_URL = 'https://www.ebay.de/...';
```

## 📁 Struktura projektu

- `index.html` – struktura strony i sekcje z ofertami
- `style.css` – ostylowanie i responsywny układ
- `script.js` – przełączanie języków i konfiguracja odnośników
- `assets/` – grafiki produktów, ikony i logo
