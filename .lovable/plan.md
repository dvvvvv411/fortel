## Ziel

Vollständiger Farb- & Logo-Rebrand: Weg vom bestehenden Blau hin zur **Electric Violet**-Palette, dazu eine neue minimalistische **Wortmarke "for.tel"**.

## Neue Farbpalette (Electric Violet)

| Token | HSL | Hex | Verwendung |
|---|---|---|---|
| `--primary` | `258 90% 56%` | #7c3aed | Hauptakzent, Buttons, Links, CTA |
| `--primary-dark` | `243 75% 21%` | #1e1b4b | Hover, Tiefenkontrast |
| `--primary-glow` | `258 90% 75%` | #c4b5fd | Glow, Highlights, Hero-Akzente |
| `--accent` | `258 90% 96%` | very light violet | Hover-Backgrounds, Soft-Pills |
| `--ring` | `258 90% 56%` | — | Focus-Ringe |
| `--foreground` | `258 30% 8%` | sehr dunkles Violett-Schwarz | Body-Text (bisher reines Navy) |
| `--background` | `0 0% 100%` | bleibt weiß | — |

Sekundärer Verlauf für Gradients: **#7c3aed → #c4b5fd** (statt Blue → Cyan).

## Änderungen im Code

### 1. `src/index.css`
- Alle Blau-HSL-Werte (`217 91% 60%`, `199 89% 48%`, `224 76% 48%`) durch Violet-Werte ersetzen.
- Utility-Klassen umbenennen **wäre Breaking-Risk** (~30+ Verwendungen) → besser: `bg-gradient-blue`, `text-gradient-blue`, `bg-gradient-blue-subtle`, `bg-gradient-blue-section` **behalten** den Klassennamen, aber die Gradient-Farben werden auf Violet umgestellt. Kein Refactor in Komponenten nötig.
- `hero-gradient` (Z. 87–92): Orbs auf Violet umstellen.
- `glow-pulse`-Keyframe (Z. 164–167): Box-Shadow auf Violet.
- Sidebar-Tokens & Accent ebenfalls anpassen.

### 2. `tailwind.config.ts`
- Keine strukturellen Änderungen — die Tokens lesen aus CSS-Variablen.
- Optional: `primary.glow` als neuen Sub-Token hinzufügen.

### 3. Neues Logo
- **Stil:** Minimalistische Wortmarke "for.tel" — keine Bildmarke.
- **Typografie:** Geometrische Sans (z. B. Inter Black / Space Grotesk Bold), kleines Detail-Akzent: der **Punkt** zwischen `for` und `tel` in Violet (`#7c3aed`) gesetzt — als visuelles Brand-Element.
- **Wortlaut:** `for.tel` (klein) — Punkt farblich akzentuiert.
- **Erzeugung:** Per Image-Gen-Tool als hochauflösendes PNG mit transparentem Hintergrund.
- **Zwei Varianten:**
  - `src/assets/logo.png` — dunkle Schrift (für hellen Header/Footer).
  - `src/assets/logo-light.png` — weiße Schrift (Reserve für dunkle Sections, falls später benötigt).
- Alte `logo.png` wird überschrieben — alle Imports (Navbar 3×, Footer 1×) bleiben unverändert.

### 4. Favicon
- Optional in diesem Schritt: neues `public/favicon.png` aus dem Logo-Symbol (Punkt-Mark in Violet auf weißem/transparentem Hintergrund).

### 5. Memory-Update
- `mem://design/leitlinien` aktualisieren: Primary ist nicht mehr Blau, sondern Electric Violet.
- Core-Eintrag im `mem://index.md` entsprechend updaten.

## Vorgehen

1. **Logo generieren** mit `imagegen--generate_image` (premium-tier wegen Text-Lesbarkeit), Wortmarke "for.tel" mit violettem Punkt, transparenter Hintergrund → speichern als `src/assets/logo.png` (überschreibt).
2. **`src/index.css`** komplett auf Violet-Tokens umstellen (Variablen + Utility-Gradients + Hero-Gradient + Glow).
3. **Memory-Files** aktualisieren.
4. Visuell verifizieren: Startseite + Impressum + Karriere + Hero ansehen.

## Offene Punkte

- Wenn dir die generierte Wortmarke nicht gefällt, generiere ich gerne 2–3 weitere Varianten.
- Falls du später doch eine Bildmarke / ein Icon (z. B. nur den violetten Punkt als App-Icon) brauchst, kann ich das jederzeit nachziehen.
