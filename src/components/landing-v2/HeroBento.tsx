import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, TrendingUp, Activity, GitBranch, Star } from 'lucide-react';

const HeroBento = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-muted/40 pt-24 sm:pt-28 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
        {/* ─────────── LEFT: copy ─────────── */}
        <div className="lg:col-span-6 space-y-7">
          <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
            <ShieldCheck size={14} />
            Inhabergeführt · seit 2006 · Filderstadt
          </div>

          <h1 className="hero-animate hero-animate-2 font-display text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
            Software-Entwicklung
            <br />
            für den{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              Mittelstand.
            </span>
          </h1>

          <p className="hero-animate hero-animate-3 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            for.tel Solutions plant, baut und betreibt individuelle Unternehmens­software —
            mit einem festen Inhouse-Team aus der Region Stuttgart.{' '}
            <span className="font-semibold text-foreground underline decoration-primary/40 decoration-2 underline-offset-4">
              Verlässlich. Wartbar. Dokumentiert.
            </span>
          </p>

          <div className="hero-animate hero-animate-4 space-y-3 pt-1">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Projekt anfragen
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center px-7 py-3.5 bg-background text-foreground font-semibold rounded-xl border border-border hover:bg-muted transition-all"
              >
                Unsere Leistungen
              </Link>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Antwort innerhalb von 24 h · unverbindlich
            </p>
          </div>

          <div className="hero-animate hero-animate-5 pt-5 border-t border-border space-y-3">
            <div className="flex items-center gap-6 sm:gap-8">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">18+</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Jahre Erfahrung</p>
              </div>
              <div className="w-px h-9 bg-border" />
              <div>
                <p className="text-xl sm:text-2xl font-bold text-foreground">150+</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Projekte</p>
              </div>
              <div className="w-px h-9 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-xl sm:text-2xl font-bold text-foreground">100%</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Inhouse-Team</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4,9</span>
              <span>· 38 Kundenstimmen</span>
            </div>
          </div>
        </div>

        {/* ─────────── RIGHT: dashboard mock ─────────── */}
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] blur-3xl pointer-events-none" />

          {/* team online floating card – top left */}
          <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-3 bg-background border border-border rounded-xl shadow-xl px-3.5 py-2.5">
            <div className="flex -space-x-2">
              {[
                { i: 'MK', c: 'bg-primary' },
                { i: 'TS', c: 'bg-indigo-500' },
                { i: 'AL', c: 'bg-emerald-500' },
              ].map((a) => (
                <div
                  key={a.i}
                  className={`w-7 h-7 rounded-full ${a.c} text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-background`}
                >
                  {a.i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-[11px] font-bold text-foreground leading-tight">Team online</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 12 aktiv
              </p>
            </div>
          </div>

          <div className="relative bg-background rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* window chrome + tabs */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-1 ml-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded-md bg-background border border-border text-foreground font-semibold">
                  dashboard.tsx
                </span>
                <span className="px-2.5 py-1 text-muted-foreground">api.ts</span>
                <span className="px-2.5 py-1 text-muted-foreground hidden sm:inline">config</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              {/* KPI row */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: 'Uptime', value: '99.98%', icon: Activity, trend: '+0.02' },
                  { label: 'Releases', value: '142', icon: GitBranch, trend: '+8' },
                  { label: 'Response', value: '84 ms', icon: TrendingUp, trend: '-12' },
                ].map((k) => (
                  <div key={k.label} className="rounded-lg border border-border bg-muted/30 p-2.5">
                    <div className="flex items-center justify-between mb-1">
                      <k.icon size={11} className="text-muted-foreground" />
                      <span className="text-[9px] font-semibold text-emerald-600">{k.trend}</span>
                    </div>
                    <p className="text-sm font-bold text-foreground tabular-nums">{k.value}</p>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wide mt-0.5">{k.label}</p>
                  </div>
                ))}
              </div>

              {/* code block */}
              <div className="rounded-lg bg-muted/40 border border-border p-3.5 font-mono text-[11px] leading-[1.7]">
                {[
                  { n: 1, c: <><span className="text-slate-400">// orchestriert eingehende Aufträge</span></> },
                  { n: 2, c: <><span className="text-violet-600">export async</span> <span className="text-violet-600">function</span> <span className="text-foreground">processOrder</span><span className="text-muted-foreground">(order: Order) {'{'}</span></> },
                  { n: 3, c: <><span className="text-muted-foreground">  </span><span className="text-violet-600">const</span> <span className="text-foreground">validated</span> = <span className="text-violet-600">await</span> <span className="text-foreground">validate</span><span className="text-muted-foreground">(order);</span></> },
                  { n: 4, c: <><span className="text-muted-foreground">  </span><span className="text-violet-600">if</span> <span className="text-muted-foreground">(!validated.ok) </span><span className="text-violet-600">throw new</span> <span className="text-foreground">DomainError</span><span className="text-muted-foreground">(</span><span className="text-emerald-600">'INVALID'</span><span className="text-muted-foreground">);</span></> },
                  { n: 5, c: <><span className="text-muted-foreground">  </span><span className="text-violet-600">return</span> <span className="text-foreground">repo</span><span className="text-muted-foreground">.</span><span className="text-foreground">persist</span><span className="text-muted-foreground">(validated.value);</span></> },
                  { n: 6, c: <span className="text-muted-foreground">{'}'}</span> },
                ].map((l) => (
                  <div key={l.n} className="flex gap-3">
                    <span className="text-muted-foreground/50 w-4 text-right select-none">{l.n}</span>
                    <span className="flex-1 truncate">{l.c}</span>
                  </div>
                ))}

                {/* sparkline */}
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Last 24h</span>
                  <svg width="120" height="28" viewBox="0 0 120 28" className="overflow-visible">
                    <defs>
                      <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="hsl(262 83% 58%)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,20 L15,16 L30,18 L45,10 L60,13 L75,7 L90,9 L105,4 L120,6 L120,28 L0,28 Z"
                      fill="url(#spark)"
                    />
                    <path
                      d="M0,20 L15,16 L30,18 L45,10 L60,13 L75,7 L90,9 L105,4 L120,6"
                      fill="none"
                      stroke="hsl(262 83% 58%)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="120" cy="6" r="2.5" fill="hsl(262 83% 58%)" />
                  </svg>
                </div>
              </div>

              {/* status footer */}
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-foreground">Build passed</span>
                  <span>· main · vor 2 Min</span>
                </div>
                <span className="font-mono">CI/CD aktiv</span>
              </div>
            </div>
          </div>

          {/* compliance floating card – bottom right */}
          <div className="hidden sm:flex absolute -bottom-5 -right-4 z-20 items-center gap-3 bg-background border border-border rounded-xl shadow-xl px-4 py-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-foreground leading-tight">ISO 27001-ready</p>
              <p className="text-[10px] text-muted-foreground">DSGVO-konform · Hosting DE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
