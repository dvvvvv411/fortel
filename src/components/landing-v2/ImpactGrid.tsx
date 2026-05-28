import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';
import { TrendingDown, TrendingUp, Clock, Euro } from 'lucide-react';

const ImpactGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const c1 = useCounterAnimation(150, 2000, isVisible);
  const c2 = useCounterAnimation(80, 1800, isVisible);
  const c3 = useCounterAnimation(47, 1600, isVisible);
  const c4 = useCounterAnimation(20, 1400, isVisible);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">// proof, not promises</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Zahlen, die wir <span className="gradient-text-violet">unterschreiben</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-3 sm:gap-4">
          {[
            { v: c1, suffix: '+', label: 'Projekte ausgeliefert', sub: 'Web, Mobile, Backend', icon: TrendingUp },
            { v: c2, suffix: '+', label: 'Kunden', sub: 'Mittelstand bis Konzern', icon: Euro },
            { v: c3, suffix: '%', label: 'Ø Effizienzplus', sub: 'gemessen, nicht geschätzt', icon: TrendingDown, prefix: '+' },
            { v: c4, suffix: '', label: 'Jahre Erfahrung', sub: 'seit 2006, ein Team', icon: Clock },
          ].map((s, i) => (
            <div key={i} className={`bento-card p-6 flex flex-col justify-between scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>kpi · {String(i + 1).padStart(2, '0')}</span>
                <s.icon size={14} className="text-primary" />
              </div>
              <div>
                <div className="font-display text-6xl sm:text-7xl font-bold tabular-nums leading-none">
                  {s.prefix}{s.v}<span className="text-primary">{s.suffix}</span>
                </div>
                <p className="mt-3 text-sm font-semibold">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
