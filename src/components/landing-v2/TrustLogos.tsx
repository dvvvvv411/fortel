import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  { name: 'Industrie AG', sector: 'Industrie' },
  { name: 'TK-Carrier Süd', sector: 'Telekommunikation' },
  { name: 'Energie+', sector: 'Energieversorger' },
  { name: 'Maschinenbau Werk', sector: 'Anlagenbau' },
  { name: 'Stadtwerke', sector: 'Versorger' },
  { name: 'Bundesbehörde', sector: 'Öffentl. Hand' },
  { name: 'MedTech GmbH', sector: 'Medizintechnik' },
  { name: 'Verkehrsbetrieb', sector: 'Infrastruktur' },
];

const TrustLogos = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <p className={`text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          Vertrauen von Mittelstand, Versorgern und öffentlicher Hand
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8 items-center">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className={`flex flex-col items-center justify-center gap-1 text-center scroll-hidden delay-${(i % 6) + 1} ${isVisible ? 'scroll-visible' : ''}`}
              title={`${c.name} · ${c.sector}`}
            >
              <span className="font-display font-bold text-base sm:text-lg text-foreground/70 grayscale opacity-80 hover:opacity-100 hover:text-foreground transition-all">
                {c.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">{c.sector}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground/80">
          Anonymisierte Branchenangaben — Kundennamen auf Anfrage und nach Freigabe.
        </p>
      </div>
    </section>
  );
};

export default TrustLogos;
