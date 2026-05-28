import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { n: '01', title: 'Discovery', cmd: 'fortel init', desc: 'Workshop, Ist-Analyse, KPIs. Wir verstehen Ihr Geschäft — nicht nur Ihr Pflichtenheft.', dur: '1 – 2 Wochen' },
  { n: '02', title: 'Architecture', cmd: 'fortel design', desc: 'Tech-Stack, Datenmodell, Schnittstellen. Klickbarer Prototyp statt Word-Dokument.', dur: '2 – 3 Wochen' },
  { n: '03', title: 'Build', cmd: 'fortel ship --iterate', desc: 'Zwei-Wochen-Sprints, jeden Freitag eine Demo. Sie sehen Fortschritt, kein Statusreport.', dur: '8 – 16 Wochen' },
  { n: '04', title: 'Launch & Care', cmd: 'fortel deploy --prod', desc: 'Go-Live, Schulung, Monitoring. Wir bleiben dran — Wartung & Weiterentwicklung inklusive.', dur: 'fortlaufend' },
];

const ProcessFlow = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6 bg-foreground text-background overflow-hidden">
      {/* grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-primary/30 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow mb-4">// how we work</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Vier Phasen.<br/>
            Kein Wasserfall.<br/>
            <span className="text-background/50">Nur Lieferungen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative rounded-3xl border border-background/15 bg-background/[0.04] backdrop-blur p-7 hover:bg-background/[0.08] transition-colors scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-background/50">{s.dur}</span>
                <span className="font-display text-5xl font-bold text-primary-glow">{s.n}</span>
              </div>
              <h3 className="font-display text-2xl font-bold">{s.title}</h3>
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-background/10 px-3 py-1.5 font-mono text-[11px] text-primary-glow">
                <span className="text-background/40">$</span> {s.cmd}
              </div>
              <p className="mt-5 text-sm text-background/70 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-background/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
