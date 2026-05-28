# Typografie seriöser machen

Globaler Wechsel der Schriftfamilien — wirkt auf der gesamten Landingpage (und der ganzen Site, da Token-basiert).

## Änderungen

**`src/index.css`**
- Google-Fonts-Import austauschen: statt `Inter` + `Space Grotesk` → `Epilogue` (300–800) + `Urbanist` (500–800). JetBrains Mono bleibt für Mono-Akzente.
- `body { font-family }` auf `'Epilogue', system-ui, -apple-system, sans-serif` setzen.
- `.font-display` auf `'Urbanist', 'Epilogue', sans-serif` umstellen (Headlines, Hero, Section-Titel).

**`tailwind.config.ts`**
- `fontFamily.sans` → `['Epilogue', 'system-ui', '-apple-system', 'sans-serif']`
- `fontFamily.display` ergänzen: `['Urbanist', 'Epilogue', 'sans-serif']` (für künftige `font-display`-Klassen über Tailwind).

## Was bleibt gleich

- Alle Komponenten, Klassen, `font-display`-Verwendungen, Farben, Layouts, Animationen bleiben unverändert.
- Keine neuen Dependencies, kein Framer Motion.
- Mono-Akzente (`.font-mono`) bleiben JetBrains Mono.

## Wirkung

- Headlines (Hero, Sektionen) erhalten durch **Urbanist** einen ruhigeren, geometrischeren, autoritativeren Engineering-Charakter.
- Body-Text über **Epilogue** liest sich erwachsener und seriöser als Inter, ohne kühl zu wirken.
