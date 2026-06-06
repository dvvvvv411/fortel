## Ziel
Favicon durch das angehängte `faviconfortel.png` ersetzen.

## Schritte
1. `public/favicon.ico` löschen (sonst überschreibt der Browser-Default das neue Favicon).
2. `public/favicon.png` (und ggf. `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`) durch die hochgeladene Datei ersetzen — alle zeigen jetzt das neue „for.tel"-Icon.
3. `index.html`: sicherstellen, dass `<link rel="icon" href="/favicon.png" type="image/png">` aktiv ist und kein `.ico`-Verweis mehr existiert.

## Nicht geändert
- Logo in Navbar/Footer (bleibt wie zuletzt skaliert).
- Sonstige Assets.
