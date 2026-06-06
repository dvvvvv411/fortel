## Ziel
Die violette Markenfarbe (#7c3aed / HSL 262 83% 58%) wird durch ein modernes Blau ersetzt — überall in der App.

## Vorschlag: Modernes Blau
- **Primary:** `217 91% 60%` (≈ #2563EB, Tailwind Blue-600 / Electric Blue)
- **Primary Glow:** `213 94% 78%` (helles Sky-Blue für Gradients/Akzente)
- **Primary Dark:** `224 76% 32%` (für Hover/Tiefe)
- **Accent (Tint):** `213 94% 96%` (zarter Blau-Hintergrund)
- **Ring:** identisch zu Primary

Klassischer „SaaS/Tech"-Blau-Look, hoher Kontrast auf Weiß, passt zur seriösen for.tel-Ästhetik.

## Änderungen

### 1. `src/index.css` — Color Tokens
- `--primary`, `--primary-dark`, `--primary-glow`, `--accent`, `--ring`, Sidebar-Tokens auf neue Blau-Werte umstellen.
- Gradient-Utilities (`.text-gradient-blue`, `.bg-gradient-blue`, `.bg-gradient-blue-subtle`, `.bg-gradient-blue-section`) auf neue HSL-Werte mappen.
- Hero-Gradient (`.hero-gradient`), `.dot-pattern`, `.bento-card:hover`, `.pulse-ring`, `.gradient-text-violet`, `.animate-glow-pulse` → Blau.

### 2. Hardcoded Violett-HSL-Werte in Components
Suche & Ersetze HSL-Werte `262 83% 58%`, `258 90% 76%`, `280 85% 65%`, `258 30% 10%`, `243 75% 21%` in:
- `src/components/landing/Stats.tsx`, `CTASection.tsx`
- `src/components/landing-v2/*` (HeroSplit, HeroBento, BentoFeatures, FinalCTA, ImpactGrid, ProcessFlow, FAQTerminal, etc.)
- weitere Komponenten mit Inline-Styles

### 3. Logo
- `src/assets/logo.png` enthält einen violetten Punkt → neues blaues Logo generieren (gleiches Wordmark „for.tel" mit blauem Punkt-Akzent).

### 4. Memory Update
- `mem://index.md` & Memory-Dateien aktualisieren: Brand-Farbe von „Electric Violet #7c3aed" → „Electric Blue #2563EB".
- Hinweis dass Utility-Klassen `bg-gradient-blue` jetzt wieder „echt blau" sind (Naming wird konsistent).

## Nicht geändert
- Layout, Typo, Spacing, Komponenten-Struktur bleiben identisch.
- Keine Business-Logik-Änderungen.

## Offene Frage
Passt der vorgeschlagene Blauton (#2563EB, kräftiges Royal/Electric Blue) — oder bevorzugst du eher:
- **Tiefes Corporate-Blau** (#1E40AF, Navy-Richtung, à la Deutsche Bank)
- **Helles Sky/Cyan** (#0EA5E9, frischer/techniger)
- **Indigo** (#4F46E5, leicht Richtung Violett-Übergang)
