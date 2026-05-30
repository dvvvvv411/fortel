## Ziel

Die gesamte Seite seriöser & autoritativer wirken lassen — Richtung Telekom/T-Systems/Konzernberatung — durch **drei globale Hebel**, ohne Brand zu sprengen:

1. **Hybrid-Farbschema**: Violett bleibt als CTA- und Akzentfarbe, aber `--foreground` wird auf hartes Anthrazit/Graphit gezogen. Headings rendern dadurch automatisch dunkler & strenger statt aktuell violett-getönt.
2. **Härtere Kanten**: globaler Border-Radius reduziert; alle hardcodierten `rounded-2xl/3xl/[2.5rem]` in den Landing-v2-Komponenten auf `rounded-md/lg` heruntergezogen.
3. **Strengere Typo & ruhigere Motion**: Headings tighter (tracking-tighter, leading enger), Animationen entschärft (kein Blur-In mehr, kürzere Distanz, kürzere Dauer), weniger Glow/Shadow.

## Änderungen im Detail

### 1. `src/index.css` — Design-Tokens & Motion
- `--foreground`: `258 30% 10%` → **`220 15% 12%`** (Graphit statt violett-schwarz).
- `--muted-foreground`: `258 10% 45%` → **`220 9% 42%`** (neutraleres Grau).
- `--border`: leicht entsättigen (`220 15% 90%`).
- `--radius`: `0.75rem` → **`0.375rem`** (alle Tailwind-`rounded-lg/md/sm` werden härter).
- `.scroll-hidden`: `translateY(24px)` → `translateY(12px)`, `filter: blur(3px)` **entfernen**, Dauer `0.6s` → `0.45s`. Wirkt sofort ruhiger auf der ganzen Seite.
- Hero-Gradient-Intensität in `.hero-gradient` von `0.15/0.1` auf `0.08/0.05` reduzieren.

### 2. `src/components/landing-v2/HeroBento.tsx`
- Alle `rounded-[2.5rem]` → `rounded-lg`, `rounded-2xl` → `rounded-md`.
- `shadow-[0_32px_64px_-16px_…]` & `shadow-[0_20px_40px_…]` → schlichte `shadow-sm` mit 1px-Border.
- Pill-Badge oben (`rounded-full`) bleibt — ist Telekom-konform (Claim-Pill).
- Stat-Zahlen: Plus-Zeichen von `text-primary` → `text-foreground/40` (weniger bunt, mehr Geschäftsbericht).
- CTA-Buttons: Primary bleibt violett (Wiedererkennung), Secondary verliert `rounded-2xl` → `rounded-md`.

### 3. `src/components/landing-v2/BentoFeatures.tsx`
- Karten: `rounded-lg` ist OK, aber `min-h-[240px]` bleibt; Hover-Glow entfernen, nur Border-Color-Change.
- CTA-Card: weniger Schatten, harter Border.
- Image-Accent-Card: Gradient-Overlay-Stärke leicht reduzieren.

### 4. `src/components/landing-v2/TrustLogos.tsx`
- Karten: `rounded-xl` → `rounded-md`, Icon-Container `rounded-lg` → `rounded-sm`.

### 5. `src/components/landing-v2/AboutSnapshot.tsx`
- Bild-Container `rounded-[2rem]` → `rounded-lg`, äußerer Glow-Blur (`blur-2xl opacity-80`) auf `opacity-40` reduzieren.
- Badge-Karte `rounded-2xl` → `rounded-md`.
- Buttons `rounded-xl` → `rounded-md`.

### 6. `src/components/landing-v2/ProcessFlow.tsx`, `ImpactGrid.tsx`, `CertificationsBar.tsx`, `VoicesSection.tsx`, `FAQTerminal.tsx`, `FinalCTA.tsx`
- Pauschal: alle `rounded-2xl|3xl|[2rem]|[2.5rem]` → `rounded-lg`/`rounded-md`.
- Alle dicken Custom-Shadows (`shadow-[0_…]`) durch Tailwind-`shadow-sm` ersetzen.
- Hero-/CTA-Glow-Blobs (`blur-3xl bg-primary/20`) auf `bg-primary/8` reduzieren.

### 7. `src/components/landing/Footer.tsx` & `src/components/landing/Navbar.tsx`
- Falls Pill-Navbar `rounded-full` ist → bleibt (Brand-Element gemäß Memory).
- Footer-Karten/Buttons mit `rounded-2xl` → `rounded-md` angleichen.

## Nicht enthalten

- Keine Schriftart-Änderung (Epilogue/Urbanist bleiben — User-Wunsch).
- Keine Brand-Farben-Änderung (Violett bleibt Primary).
- Keine Layout-Restrukturierung (Sticky-Hero, Bento etc. bleiben).
- Keine neuen Libraries.

## Memory-Update

Nach Umsetzung das Core-Memory aktualisieren:
> *„Korporative Härte: globaler Radius 0.375rem, Headings auf neutralem Graphit (`220 15% 12%`), reduzierte Schatten & Motion. Violett nur als CTA/Akzent."*

## Erwartetes Ergebnis

Gleiche Struktur, gleiche Brand-Wiedererkennung, aber spürbar weniger „Startup-Soft" — mehr Geschäftsbericht / Telekom-Business / T-Systems. Headings wirken durch das Graphit-Foreground sofort autoritativer, harte Kanten signalisieren Präzision, ruhigere Motion signalisiert Reife.