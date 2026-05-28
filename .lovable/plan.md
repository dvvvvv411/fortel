# Header überarbeiten + Logo größer

Ziel: ruhigerer, premium-seriöser Header mit prominenterem Logo. Betrifft nur `src/components/landing/Navbar.tsx`.

## Änderungen

**Logo skalieren**
- Default-Höhe: `h-10` → `h-14` (≈ +40 %)
- Scrolled-Höhe: `h-8` → `h-11`
- Mobile-Sidebar-Logo: `h-8` → `h-10`
- Header-Höhe entsprechend angepasst: Default `h-20` → `h-24`, scrolled `h-16` → `h-20`

**Header-Refinement**
- Top-Bar (Kontaktleiste): Hintergrund `bg-foreground` → dezenter `bg-muted/60` mit `border-b border-border`, Text `text-muted-foreground`. Wirkt weniger schwer, edler. Höhe `h-9` → `h-10`.
- Telefon-/Mail-Hover: violett (`hover:text-primary`) statt weiß.
- Main-Header: keine Schatten mehr, statt `shadow-sm` nur dünner `border-b border-border`. Hintergrund im Scroll-Zustand `bg-background/90 backdrop-blur-xl` (statt `/95 backdrop-blur-md`) — leichtere, modernere Optik.
- Nav-Links: Abstand `gap-9` → `gap-8`, Schriftgrad bleibt `text-sm font-medium`, aktive Underline-Höhe `-bottom-1.5` → `-bottom-2`, Strich-Stärke `h-px` → `h-0.5` für bessere Sichtbarkeit. Statt `text-foreground/80` jetzt `text-foreground/70` für ruhigere Hierarchie.
- CTA-Button: `rounded-md` → `rounded-full`, `h-10` → `h-11`, Pfeil-Icon hover `translate-x-0.5`. Wirkt freundlicher und premium.
- Mobile-Burger: `rounded-md` → `rounded-full`, gleiche Optik.

**Was bleibt unverändert**
- Navigationspunkte und Reihenfolge
- Mobile-Sidebar-Struktur und -Inhalte
- Routen, Logik, Scroll-Verhalten
- Farben/Tokens (alles bleibt semantisch)

## Technische Details

Nur `src/components/landing/Navbar.tsx` wird editiert. Keine neuen Dependencies, keine Logik-Änderungen, keine Token-Änderungen in `index.css` oder `tailwind.config.ts`.
