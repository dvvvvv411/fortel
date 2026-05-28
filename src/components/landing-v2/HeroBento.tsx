import { Link } from 'react-router-dom';
import { ArrowUpRight, Activity, Cpu, Workflow, Sparkles, TrendingUp } from 'lucide-react';
import { useCounterAnimation, useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroBento = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const efficiency = useCounterAnimation(47, 1600, true);
  const projects = useCounterAnimation(150, 1800, true);
  const years = useCounterAnimation(20, 1400, true);

  return (
    <section ref={ref} className="relative pt-28 sm:pt-32 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-[0.4] pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none animate-orb" />
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-[120px] pointer-events-none animate-orb-delayed" />

      <div className="relative max-w-7xl mx-auto">
        {/* Status bar */}
        <div className="hero-animate hero-animate-1 flex flex-wrap items-center justify-between gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>system.online · v2026.1</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>filderstadt · de</span>
            <span>est. 2006</span>
            <span>uptime 99.98%</span>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 auto-rows-[minmax(140px,auto)] gap-3 sm:gap-4">
          {/* MAIN HEADLINE */}
          <div className="bento-card col-span-12 lg:col-span-8 row-span-2 p-8 sm:p-12 bento-glow hero-animate hero-animate-2">
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-6">
              <Sparkles size={14} /> <span>// flagship offering</span>
            </div>
            <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] xl:text-[5.75rem] font-bold leading-[0.95] tracking-tight">
              Software, die <br />
              Prozesse <span className="gradient-text-violet">denkt.</span><br />
              <span className="text-muted-foreground/70">Beratung, die liefert.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              for.tel Solutions baut maßgeschneiderte Software & digitale
              Prozesse für mittelständische Unternehmen — messbar, wartbar,
              ohne Buzzword-Bingo.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/kontakt" className="group inline-flex items-center justify-between gap-3 px-6 h-14 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                <span>Projekt starten</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/leistungen" className="group inline-flex items-center justify-between gap-3 px-6 h-14 rounded-2xl border border-border bg-background/60 backdrop-blur font-semibold hover:border-primary/40 transition-all">
                <span>Leistungen ansehen</span>
                <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* LIVE METRIC: Efficiency */}
          <div className="bento-card col-span-6 lg:col-span-4 p-6 hero-animate hero-animate-3 relative">
            <div className="flex items-center justify-between mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Ø Effizienzplus</span>
              <Activity size={12} className="text-primary" />
            </div>
            <div className="font-display text-5xl sm:text-6xl font-bold tabular-nums">
              +{efficiency}<span className="text-primary">%</span>
            </div>
            <svg viewBox="0 0 200 40" className="mt-4 w-full h-10">
              <defs>
                <linearGradient id="sparkA" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,30 L20,25 L40,28 L60,18 L80,22 L100,12 L120,16 L140,8 L160,11 L180,5 L200,7 L200,40 L0,40Z" fill="url(#sparkA)" />
              <polyline points="0,30 20,25 40,28 60,18 80,22 100,12 120,16 140,8 160,11 180,5 200,7" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="mt-1 text-[11px] text-muted-foreground">über alle Kundenprojekte 2024</p>
          </div>

          {/* TICKER / LIVE */}
          <div className="bento-card col-span-6 lg:col-span-4 p-6 hero-animate hero-animate-3 overflow-hidden">
            <div className="flex items-center justify-between mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Live-Telemetrie</span>
              <span className="flex items-center gap-1 text-primary"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> rec</span>
            </div>
            <div className="space-y-2 font-mono text-[12px]">
              {[
                ['→', 'process.optimize', '#A12'],
                ['↑', 'deploy.staging', 'v1.42'],
                ['✓', 'audit.passed', '0 issues'],
                ['→', 'roi.calculated', '+€340k'],
              ].map(([sym, k, v]) => (
                <div key={k} className="flex items-center gap-2">
                  <span className="text-primary">{sym}</span>
                  <span className="text-foreground/80">{k}</span>
                  <span className="ml-auto text-muted-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CODE TERMINAL */}
          <div className="bento-card col-span-12 lg:col-span-5 row-span-2 p-0 hero-animate hero-animate-4 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40 font-mono text-[11px] text-muted-foreground">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="ml-3">~/fortel · workflow.ts</span>
            </div>
            <pre className="p-5 font-mono text-[12.5px] leading-relaxed text-foreground/90 overflow-x-auto">
{`import { Process } from '@fortel/core'

const onboarding = new Process({
  name: 'Kundenonboarding',
  steps: 14,
})

onboarding
  .automate('dokumente')
  .integrate('crm', 'erp')
  .measure('lead-time')

await onboarding.deploy()
// ↳ ⏱  3 Wochen → 4 Stunden
// ↳ 💶 −€180.000 / Jahr`}<span className="caret" />
            </pre>
          </div>

          {/* COUNTERS */}
          <div className="bento-card col-span-6 lg:col-span-4 p-6 hero-animate hero-animate-4">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              <span>Projekte</span><Workflow size={12} className="text-primary"/>
            </div>
            <div className="font-display text-5xl sm:text-6xl font-bold tabular-nums">{projects}+</div>
            <p className="mt-2 text-[11px] text-muted-foreground">ausgeliefert seit 2006</p>
          </div>

          {/* YEARS */}
          <div className="bento-card col-span-6 lg:col-span-3 p-6 hero-animate hero-animate-5 bg-primary text-primary-foreground border-primary">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-primary-foreground/70 mb-3">
              <span>Erfahrung</span><TrendingUp size={12} />
            </div>
            <div className="font-display text-5xl sm:text-6xl font-bold tabular-nums">{years}</div>
            <p className="mt-2 text-[11px] text-primary-foreground/80">Jahre, ein Team, kein Bullshit.</p>
          </div>

          {/* CPU / TECH */}
          <div className="bento-card col-span-12 lg:col-span-5 p-6 hero-animate hero-animate-5 flex items-center gap-5">
            <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-spin-slow" style={{borderStyle:'dashed'}}/>
              <Cpu size={26} className="text-primary" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Stack 2026</p>
              <p className="font-display text-base sm:text-lg font-semibold leading-snug">
                React · Node · Python · Supabase · Azure · OpenAI · Kubernetes
              </p>
            </div>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="mt-10 overflow-hidden border-y border-border py-3 relative">
          <div className="flex gap-12 animate-ticker font-mono text-[12px] uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
            {Array.from({length: 2}).map((_, k) => (
              <div key={k} className="flex gap-12 shrink-0">
                {[
                  'Custom Software', 'Prozessdigitalisierung', 'KI-Integration',
                  'ERP & CRM', 'Cloud-Migration', 'IT-Beratung', 'DevOps',
                  'Data Engineering', 'API-Plattformen', 'Legacy-Modernisierung',
                ].map((w) => (
                  <span key={w} className="flex items-center gap-12 shrink-0">
                    <span>{w}</span>
                    <span className="text-primary">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
