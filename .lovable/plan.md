1. Standards & Compliance entfernen
   - <CertificationsBar /> aus src/pages/Index.tsx entfernen (inkl. Import)

2. FAQ-Sektion entfernen
   - <FAQTerminal /> aus src/pages/Index.tsx entfernen (inkl. Import)

3. "Inhabergeführt" überall umschreiben
   - src/components/landing-v2/AboutSnapshot.tsx:
     • Headline: "Inhabergeführt. Seit 2006. Standort Deutschland." → "Seit 2006 am Markt. Standort Deutschland."
     • Fließtext: "inhabergeführtes Beratungshaus" → "unabhängiges Beratungshaus"
   - src/components/landing-v2/HeroBento.tsx (auch wenn aktuell ungenutzt, zur Konsistenz):
     • "Inhabergeführt · seit 2006 · Filderstadt" → "Gegründet 2006 · Filderstadt"
     • "Inhabergeführt seit 2006" → "Seit 2006 am Markt"
   - src/components/landing-v2/BentoFeatures.tsx (ungenutzt, zur Konsistenz):
     • "Inhabergeführtes Beratungshaus in Filderstadt." → "Unabhängiges Beratungshaus in Filderstadt."