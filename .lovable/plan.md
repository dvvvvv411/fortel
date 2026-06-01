## Ziel
PageHero im Telekom-/T-Systems-Stil: **strikt mittig zentriert, rein typographisch, kein Schnickschnack**. Build-Fehler sind bereits behoben (`meta`-Props wurden im letzten Schritt entfernt — die TS-Fehlermeldung war stale).

## Neuer PageHero (`src/components/landing/PageHero.tsx`)

Klare, vertikale Mitten-Hierarchie auf weißem Hintergrund — ohne Glow, ohne Pills, ohne Borders, ohne Cards. Nur Typografie und Abstand.

```
                    HOME › METHODIK            (zentriert, xs, uppercase)

                    ─────                       (12px Violett-Strich, mittig)
                    METHODIK                    (eyebrow optional, xs, uppercase, violett)

              Unsere Methodik.                  (mittig, font-display, sehr groß, Graphit)
                                                Highlight rein typografisch — KEIN Violett auf
                                                der Headline. Punkt am Ende = corporate-Marker.

         Ein bewährter Vier-Phasen-Prozess für  (mittig, max-w-2xl, muted, leading-relaxed)
         technische Projekte — strukturiert,
         transparent, planbar.
```

**Konkret:**
- Container `max-w-5xl mx-auto text-center`
- Hintergrund `bg-background` (reines Weiß), keine `bg-muted/40`, keine Orbs, keine Glows
- Unten dünne `border-b border-border` als sauberer Schnitt
- Spacing: `pt-32 md:pt-40 pb-20 md:pb-24` — viel Luft = autoritativ
- Breadcrumb: kleine zentrierte Zeile, `text-xs uppercase tracking-[0.2em] text-muted-foreground`, Trennzeichen `›`
- Eyebrow (optional): 12px Violett-Strich mittig + Label darunter (`text-[11px] uppercase tracking-[0.25em] text-primary font-semibold`) — keine Pill mehr
- Headline: `font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-foreground`. **Highlight bekommt KEINE Sonderfarbe** (in Telekom-Logik wird die Headline durch Typographie getragen, nicht durch Akzentfarben). Wenn `highlight` gesetzt ist, wird er als normaler Teil der Headline mit gleicher Farbe gerendert — der Punkt `.` am Satzende kommt in Violett als einziger Akzent.
- Subtitle: `text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto`
- Motion: bestehende `hero-animate hero-animate-1/2/3` bleiben (ruhig, kein Blur)

## Pages
Keine Änderungen nötig — alle Aufrufe (`Leistungen`, `Methodik`, `Team`, `Karriere`, `Kontakt`, `Software`, plus Bewerbung/KarriereDetail/Impressum/Datenschutz) bleiben unverändert. `eyebrow` ist optional, alle bisherigen Calls funktionieren weiter.

## Scope
**Geändert:** nur `src/components/landing/PageHero.tsx`.
**Unverändert:** Pages, Inhalte unter dem Hero, Brand-Tokens, Schriften.