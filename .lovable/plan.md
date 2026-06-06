## Ziel

`src/pages/Bewerbung.tsx` ruft eine neue Supabase Edge Function auf einem anderen Projekt auf. Endpoint, Authorization-Header und `branding_id` werden ausgetauscht. UI und Formularverhalten bleiben unverändert.

## Änderungen in `src/pages/Bewerbung.tsx`

Konstanten oben in der Datei austauschen:

- `API_URL` → `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application`
- `BRANDING_ID` → `a49c0302-65a5-4e87-b873-5a5757f41057`
- Neue Konstante `ANON_KEY` mit dem bereitgestellten anon-JWT (publishable, darf im Frontend stehen):
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3Z2bmF1cGRlY2VycHZ3em1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzEwNjUsImV4cCI6MjA5NDM0NzA2NX0.uXLnpeKILEDBoC8yCcX1ZL-hdlhFPUl-bVYcoxHKu2Y`

Im `fetch`-Call den `Authorization: Bearer ${ANON_KEY}` Header ergänzen (FormData-Body und alle bestehenden Felder bleiben gleich: `first_name`, `last_name`, `email`, `phone`, `employment_type`, `branding_id`, `resume`).

## Was unverändert bleibt

- Komplettes UI/Layout des Formulars (Select-Felder, Adressfelder, Datei-Upload, Pflichtfeld-Validierung, Toasts, Submit-Button).
- Aktualisierung von `mem://features/career-section/application-form` mit der neuen URL und Branding-ID, damit zukünftige Sessions Bescheid wissen.

## Hinweise

- Der anon-JWT ist ein publishable Key — kein Secret, kein Edge-Function-Deploy nötig.
- Adressfelder (`strasse`, `plz`, `stadt`) werden weiterhin clientseitig validiert, aber nicht an die neue Edge Function gesendet (war auch bisher schon so im bestehenden Code).
