## Update phone number everywhere to +49 711-96881540

Replace the old/for-telefon number across all source files and project memory.

### Files to change

1. **src/components/landing/Navbar.tsx** (2 occurrences)
   - Top bar: `tel:+4971124086840` → `tel:+4971196881540`
   - Top bar display: `+49 711 24086840` → `+49 711-96881540`
   - Mobile menu: same href + display update

2. **src/components/landing-v2/FinalCTA.tsx** (1 occurrence)
   - Display text: `+49 711 24086840` → `+49 711-96881540`

3. **src/pages/Impressum.tsx** (1 occurrence)
   - Display text: `+49 711 96881540` → `+49 711-96881540`

4. **src/pages/Datenschutz.tsx** (1 occurrence)
   - Display text: `+49 711 96881540` → `+49 711-96881540`

5. **src/pages/Kontakt.tsx** (2 occurrences)
   - Contact info value: `+49 711 96881540` → `+49 711-96881540`
   - Form placeholder: `+49 123 456 789` → `+49 711-96881540`

6. **src/components/landing/Footer.tsx** (1 occurrence)
   - Display text: `+49 711 96881540` → `+49 711-96881540`

7. **src/pages/Bewerbung.tsx** (1 occurrence)
   - Form placeholder: `+49 123 456 789` → `+49 711-96881540`

8. **mem://projekt/identitaet**
   - Phone field: `0211-87971940` → `+49 711-96881540`

No other logic or layout changes.