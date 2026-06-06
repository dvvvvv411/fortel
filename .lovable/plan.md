# Team-Seite Neugestaltung — textbasiert, gruppiert nach Abteilung

## Ziel
Die `/team`-Seite komplett überarbeiten: keine Portraitfotos mehr, stattdessen ruhige, textfokussierte Darstellung der Mitarbeiter:innen, gruppiert nach Abteilung.

## Struktur

PageHero bleibt unverändert (Eyebrow „Team", Titel, Subtitle, Breadcrumb).

Darunter neue Sektion mit 4 Abteilungs-Gruppen, jeweils:
- **Gruppen-Header**: kleine Eyebrow-Zeile (z. B. „01 — Geschäftsführung") + Abteilungstitel + kurzer Einleitungssatz
- **Mitgliederliste**: zweispaltiges Grid (md:grid-cols-2) mit je einem Text-Eintrag pro Person: Name (groß, bold), Rolle (violett, klein), Kurzbeschreibung (muted)
- Dünne Trennlinie zwischen Gruppen

### Abteilungen & Zuordnung

```text
01 Geschäftsführung
   Ulrich Papst       — Geschäftsführer
   Thomas Papst       — Geschäftsführer

02 Projektmanagement & Planung
   Laura Schneider    — Leitung Projektmanagement
   Michael Fischer    — Senior Projektleiter
   Anna Hoffmann      — Planerin Fernmeldetechnik
   Sebastian Richter  — Planer Elektrotechnik

03 Beratung & Controlling
   Julia Wagner       — Senior Consultant
   Markus Bauer       — Projektcontroller

04 Personalberatung
   Sarah Meier        — Leitung Personalberatung
   Jonas Hartmann     — Recruiter
```

## Technische Details

**Datei**: `src/pages/Team.tsx` komplett umschreiben.

- Alle 10 `@/assets/team/*.jpg` Imports entfernen
- `teamMembers` flache Liste → neue Struktur `departments` (Array von `{ number, title, intro, members: [{ name, role, description }] }`)
- Karten-Grid + `<img>`-Block + `ring`/`rounded-full`-Avatar komplett raus
- Bestehende Scroll-Animation (`scroll-hidden` / `IntersectionObserver`) beibehalten — pro Gruppe ein Block
- Design-Tokens: `text-foreground`, `text-primary`, `text-muted-foreground`, `border-border`. Harte Kanten (Core-Memory: kein `rounded-2xl/3xl`)
- Container: `max-w-5xl mx-auto px-6 py-20 md:py-28`, Abstand zwischen Gruppen `space-y-16`
- Typo: Name `text-lg font-semibold`, Rolle `text-xs uppercase tracking-wide text-primary`, Beschreibung `text-sm text-muted-foreground leading-relaxed`
- `CTASection` und `Footer` am Ende bleiben

**Memory-Update** nach Implementierung: `mem://features/team-page` aktualisieren — neue Struktur (textbasiert, nach Abteilung gruppiert), Bildschutz-Hinweis entfernen, Asset-Imports nicht mehr relevant. Die Bild-Dateien unter `src/assets/team/` bleiben liegen (werden anderweitig evtl. noch genutzt; nicht löschen).
