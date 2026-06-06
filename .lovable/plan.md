## Plan: Logo Rechtsklick ermöglichen

### Problem
Das for.tel Logo im Header (Navbar) lässt sich nicht per Rechtsklick speichern, weil `onContextMenu={e => e.preventDefault()}` und `draggable={false}` aktiv sind.

### Änderung
In `src/components/landing/Navbar.tsx` an beiden Logo-`<img>`-Tags (Desktop-Header + Mobile Sidebar):
1. `onContextMenu={(e) => e.preventDefault()}` entfernen
2. `draggable={false}` entfernen

Das erlaubt Nutzern den nativen Browser-Rechtsklick (Bild speichern unter / Kopieren etc.).

### Dateien
- `src/components/landing/Navbar.tsx`