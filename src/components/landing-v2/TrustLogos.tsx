import { Factory, Radio, Zap, Cog, Plug, HeartPulse, Landmark, Truck, type LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Reference = { icon: LucideIcon; sector: string; region: string };

const references: Reference[] = [
  { icon: Factory,    sector: 'Automobilzulieferer',          region: 'Region Stuttgart' },
  { icon: Radio,      sector: 'TK-Netzbetreiber',             region: 'Süddeutschland' },
  { icon: Zap,        sector: 'Stadtwerk',                    region: 'Filderebene' },
  { icon: Cog,        sector: 'Maschinenbau · Mittelstand',   region: 'Neckar-Alb' },
  { icon: Plug,       sector: 'Energieversorger',             region: 'Baden-Württemberg' },
  { icon: HeartPulse, sector: 'Klinikverbund',                region: 'Region Stuttgart' },
  { icon: Landmark,   sector: 'Öffentliche Hand',             region: 'Landkreis Esslingen' },
  { icon: Truck,      sector: 'Logistik & Intralogistik',     region: 'Großraum Stuttgart' },
];

const TrustLogos = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center max-w-2xl mx-auto mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Referenzen</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            Vertrauen aus Mittelstand, Versorgern &amp; öffentlicher Hand der Region Stuttgart.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {references.map(({ icon: Icon, sector, region }, i) => (
            <div
              key={sector}
              className={`group flex items-center gap-3 p-4 sm:p-5 rounded-md border border-border bg-background hover:border-primary/40 hover:shadow-md transition-all scroll-hidden delay-${(i % 6) + 1} ${isVisible ? 'scroll-visible' : ''}`}
              title={`${sector} · ${region}`}
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Icon size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-sm leading-tight truncate">{sector}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5 truncate">{region}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground/80 max-w-2xl mx-auto">
          Referenzen anonymisiert nach Branche und Region — konkrete Kundennamen auf Anfrage und nach schriftlicher Freigabe.
        </p>
      </div>
    </section>
  );
};

export default TrustLogos;
