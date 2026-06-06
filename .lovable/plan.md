## Plan: Referenzen-Sektion zu Logo-Karussell umbauen

### Ziel
Die bestehende Branchen-/Regions-Grid (`src/components/landing-v2/TrustLogos.tsx`) wird durch ein **endlos laufendes Logo-Karussell** mit Platzhalter-Unternehmen ersetzt. Echte Logos werden später vom Nutzer eingesetzt.

### Inhalt
- **Eyebrow:** „Referenzen" (violett, klein)
- **Headline:** „Unternehmen, die auf for.tel Solutions vertrauen."
- **Subline (kurz):** „Eine Auswahl unserer Kunden aus Mittelstand, Industrie und öffentlicher Hand."
- **Karussell-Reihe** mit ~10 Platzhalter-Logos (reine Wortmarken in `font-display`, neutralgrau, leichtes Hover → Graphit). Beispiel-Namen: Lumitec, Nordwerk, Cordis Group, ELBA Systems, Strato Industries, Helvetica Werke, Mercura, Westwerk, Quantis, BlauHaus, AVENO, Falkenberg AG
- Die alte anonymisierte Branchenliste + Hinweistext entfällt komplett.

### Technische Umsetzung
1. **`TrustLogos.tsx` komplett ersetzen:**
   - Endlos-Marquee per CSS: zwei identische `flex`-Reihen nebeneinander, Container `overflow-hidden`, Inner-Track via Tailwind `animate-[marquee_40s_linear_infinite]`.
   - Edge-Fade links/rechts via `mask-image: linear-gradient(...)` damit Logos sanft ein-/ausblenden.
   - Pause-on-hover (`hover:[animation-play-state:paused]`).
   - Jedes „Logo" = `<div>` mit Textmarke (`font-display font-bold text-xl text-foreground/50 hover:text-foreground transition-colors`), Mindesthöhe 56px, horizontaler Abstand via `gap-12 sm:gap-16`.
   - Platzhalter-Hinweis als sehr dezenter Kommentar im Code: `{/* TODO: replace with real <img src=".../logo.svg" /> */}`
2. **`tailwind.config.ts`:** `keyframes.marquee` (`from { transform: translateX(0) }` → `to { transform: translateX(-50%) }`) und `animation.marquee: 'marquee 40s linear infinite'` hinzufügen.
3. Keine neuen Dependencies. Light mode, semantische Tokens (`bg-background`, `border-border`, `text-foreground`, `text-primary`), Radius `rounded-md`, max `shadow-sm` — passt zu Memory-Regeln.

### Nicht betroffen
Hero, BentoFeatures, ProcessFlow, Footer etc. — nur diese Sektion wird ausgetauscht. Komponentenname `TrustLogos` und Import in `Index.tsx` bleiben gleich.

### Aufwand
1 Datei neu schreiben (TrustLogos.tsx), 1 kleiner Tailwind-Config-Eintrag. Kein Schema, keine Packages.
