## Plan: Leistungen-Sektion → Vertikale Tabs mit Detail-Panel

### Ziel
`BentoFeatures.tsx` (Card-Grid) komplett ersetzen durch ein zweispaltiges Layout: links eine vertikale Disziplinen-Liste (klickbar), rechts ein großes Detail-Panel mit Beschreibung, Stichpunkten und Mini-Visual. Seriös, ruhig, Produkt-Datenblatt-Anmutung.

### Inhalt (Mix Software + Beratung) — 6 Leistungen
1. **Individualsoftware** — Maßgeschneiderte Business-Anwendungen, ERP-/CRM-Integrationen, Schnittstellen, Migrationen.
2. **Webentwicklung** — Performante Websites, Portale & Web-Apps. React/TypeScript, Headless CMS, SEO-ready.
3. **Cloud & DevOps** — Hosting, CI/CD, Monitoring, Skalierung. AWS / Azure / Hetzner, IaC mit Terraform.
4. **KI-Integration** — LLM-gestützte Assistenten, Dokumenten­verarbeitung, Prozess­automatisierung mit klarer DSGVO-Linie.
5. **IT- & Technologie­beratung** — Architektur-Reviews, Make-or-Buy, Lastenhefte, technische Due Diligence.
6. **Projektmanagement** — Termine, Budget, Qualität. Agil oder klassisch — wir wählen das passende Modell.

Jede Leistung: `title`, `eyebrow` (z. B. „01 / Software"), `summary` (2 Zeilen), `bullets` (4 Punkte), `tech` (kleiner Chip-Stack, z. B. „React · TypeScript · Node"). Mini-Visual rechts oben im Panel = abstraktes Mini-Mockup (Browser-Bar / Code-Klammern / Cloud-Icon) — pro Leistung leicht variiert via Lucide-Icon-Komposition (kein Bild-Asset).

### Layout (`max-w-7xl`, `py-24 sm:py-32`)
```text
┌──────────────────────────────────────────────────────────┐
│ EYEBROW „Leistungen"                                     │
│ H2 „Sechs Disziplinen, ein verantwortliches Team."       │
│                                          [Alle Leistungen →]│
├──────────────────┬───────────────────────────────────────┤
│  LINKE LISTE     │   RECHTES DETAIL-PANEL                │
│  (5 / 12 cols)   │   (7 / 12 cols)                       │
│                  │                                       │
│  01 Individual…  │   ┌──────── Mini-Visual ────────┐    │
│ ▎02 Web­ent…    │   │ abstraktes UI-Element        │    │
│  03 Cloud & DO   │   └──────────────────────────────┘    │
│  04 KI-Integr.   │   H3 Webentwicklung                   │
│  05 Beratung     │   Subline / Summary                   │
│  06 Projektmgmt  │   • Bullet 1   • Bullet 3             │
│                  │   • Bullet 2   • Bullet 4             │
│                  │   [React] [TS] [Node] [PostgreSQL]    │
│                  │   → Mehr zu dieser Leistung           │
└──────────────────┴───────────────────────────────────────┘
```

- **Linke Liste:** Buttons in einer `<ul>`, je Zeile: Nummer (`01`–`06`, monospaced, klein, violett), Titel (`font-display`, fett). Aktiver Tab: violetter 2px-Bar links + `text-foreground`; inaktiv: `text-muted-foreground hover:text-foreground`. Trennlinien `border-border` zwischen Zeilen. Auf Desktop vertikal, auf Mobile horizontal scrollbar (Chips-Reihe) — Detail-Panel darunter.
- **Rechtes Panel:** dezente Card mit `border border-border bg-card rounded-md p-8 sm:p-10`, kein Schatten (`shadow-sm` max). Beim Tab-Wechsel weicher Fade/Slide (Tailwind `transition-opacity duration-300` + key-basiertes Remount, kein neuer Lib).
- **Mini-Visual:** schmaler Header-Block im Panel (Höhe ~120 px) mit subtilem violettem Gradient (`bg-gradient-blue-subtle` legacy class) und 1–2 zentrierten Lucide-Icons pro Leistung, kein Foto.
- **CTA-Karte/Image-Card aus dem alten Bento entfällt** — die Sektion wird ruhiger; CTA bleibt über den globalen FinalCTA / Hero-CTA abgedeckt.

### Technik
1. **Neue Datei:** `src/components/landing-v2/ServicesTabs.tsx` (Client-Komponente mit `useState` für aktiven Index, `useScrollAnimation` für Reveal). Tastatur: Pfeiltasten ↑/↓ wechseln Tab (ARIA `role="tablist"` / `role="tab"` / `role="tabpanel"`).
2. **Icons:** `Code2`, `Globe`, `Cloud`, `Sparkles`, `Compass`, `ListChecks` aus `lucide-react`. Keine neuen Deps.
3. **Index.tsx:** Import `BentoFeatures` → `ServicesTabs`, Komponente austauschen. Alte Datei `BentoFeatures.tsx` bleibt im Repo (ungenutzt), kann später entfernt werden.
4. Semantische Tokens (`bg-background`, `bg-card`, `border-border`, `text-primary`, `text-muted-foreground`), Radius `rounded-md`, `shadow-sm` max, kein hartes Hex. Light mode.

### Nicht betroffen
Hero, TrustLogos, ProcessFlow, Voices, FAQ, Footer. Route `/leistungen` (Detailseite) bleibt unverändert; „Alle Leistungen →"-Link führt weiterhin dorthin.
