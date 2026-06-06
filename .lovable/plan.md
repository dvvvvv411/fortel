## Ziel
Alle Vorkommen von `for-tel.de` durch `for-tel.com` ersetzen (inkl. E-Mail-Adressen, Links, Strukturdaten, App-Subdomain und Vite-AllowedHosts).

## Betroffene Dateien (17 Stellen)
- `index.html` — JSON-LD `url` + `email`
- `src/components/landing-v2/FinalCTA.tsx` — Anzeige `info@for-tel.de`
- `src/components/landing-v2/HeroSplit.tsx` — Mock-URL `app.for-tel.de/dashboard`
- `src/components/landing/Footer.tsx` — `mailto:` + Anzeige
- `src/components/landing/HeroSection.tsx` — Mock-URL `app.for-tel.de/...`
- `src/components/landing/Navbar.tsx` — Desktop- & Mobile-Mail (2 Stellen)
- `src/pages/Datenschutz.tsx` — `mailto:` + Anzeige
- `src/pages/Impressum.tsx` — `mailto:` + Anzeige + Website-Link `https://for-tel.de`
- `src/pages/Kontakt.tsx` — Kontaktdaten-Array
- `vite.config.ts` — `allowedHosts`: `for-tel.de`/`www.for-tel.de` → `for-tel.com`/`www.for-tel.com`

## Vorgehen
Eine globale, deterministische Text-Ersetzung: `for-tel.de` → `for-tel.com`. Keine Style- oder Layout-Änderungen.

## Memory
- `mem://technik/deployment-config` aktualisieren (neue allowedHosts).
- `mem://projekt/identitaet` prüfen/aktualisieren (Domain/E-Mail).

## Offene Frage
- Soll `for-tel.de` zusätzlich als Alias in `allowedHosts` erhalten bleiben (falls die alte Domain noch zeigt), oder komplett entfernt werden? Default im Plan: **entfernen** (durch `.com` ersetzen).
