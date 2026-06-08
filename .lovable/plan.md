## Ziel
Den Debian-Deploy wieder lauffähig machen und den Update-Ablauf auf einen stabilen Befehl reduzieren.

## Wahrscheinliche Ursache
Der Fehler kommt sehr wahrscheinlich aus `index.html`.
Dort steht aktuell:

```html
<link rel="canonical" href="/" />
```

Mit der aktuellen Vite-Version wird dieses `href="/"` beim HTML-Build offenbar als Datei-Asset aufgelöst. `/` ist aber ein Verzeichnis, deshalb entsteht:

```text
EISDIR: illegal operation on a directory, read
```

## Geplanter Fix
1. `index.html` anpassen und den problematischen Canonical-Eintrag ersetzen.
2. Danach den Build lokal verifizieren.
3. Dir einen robusten Debian-Update-Befehl geben, den du künftig 1:1 ausführen kannst.

## Konkrete Änderung
Ich würde in `index.html` den Canonical-Link von

```html
<link rel="canonical" href="/" />
```

auf eine echte URL ändern, z. B.:

```html
<link rel="canonical" href="https://for-tel.com/" />
```

Falls die Seite unter einer anderen Domain läuft, nehmen wir stattdessen genau diese Domain.

## Danach: empfohlener Server-Befehl
Nach dem Fix wäre der sichere Ablauf:

```bash
git pull && rm -rf node_modules package-lock.json && npm install --legacy-peer-deps && npm run build && pm2 delete fortel; pm2 start "npx serve -s dist -l 8080" --name fortel && pm2 save
```

## Technische Hinweise
- `git stash` nur benutzen, wenn du wirklich uncommittete lokale Änderungen hast.
- `git pull` reicht normalerweise vor dem Neuinstallieren.
- Das Löschen von `package-lock.json` ist nur sinnvoll, wenn du bewusst komplett neu auflösen willst; für reproduzierbare Deploys wäre langfristig ein sauberer Lockfile-Workflow besser.
- Der eigentliche Build-Blocker ist hier sehr wahrscheinlich der Canonical-Link in `index.html`, nicht PM2.

## Ergebnis nach Umsetzung
- `npm run build` sollte wieder durchlaufen.
- PM2 kann danach wie bisher neu gestartet werden.
- Du bekommst von mir anschließend den finalen Copy-Paste-Befehl für deinen Server-Workflow.