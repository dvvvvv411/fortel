import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, Check } from 'lucide-react';

const HeroBento = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-muted/40 pt-24 sm:pt-28 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
            mit einem festen Inhouse-Team aus der Region Stuttgart. Verlässlich. Wartbar. Dokumentiert.
          </p>

          <div className="hero-animate hero-animate-4 flex flex-wrap gap-3 pt-1">
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

          <div className="hero-animate hero-animate-5 flex items-center gap-8 pt-5 border-t border-border">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-foreground">18+</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Jahre Erfahrung</p>
            </div>
            <div className="w-px h-9 bg-border" />
            <div>
              <p className="text-xl sm:text-2xl font-bold text-foreground">150+</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">Projekte</p>
            </div>
          </div>
        </div>

        {/* ─────────── RIGHT: friendly project card ─────────── */}
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] blur-3xl pointer-events-none" />

          <div className="relative bg-background rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* window chrome + single tab */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="ml-2 px-2.5 py-1 rounded-md bg-background border border-border text-[11px] font-medium text-foreground">
                Projekt · ERP-Modernisierung
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* project header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Aktuelles Projekt</p>
                  <h3 className="font-display text-xl font-bold text-foreground">Auftragsabwicklung 2.0</h3>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold border border-primary/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  in Umsetzung
                </span>
              </div>

              {/* progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Phase 3 von 5</span>
                  <span className="font-semibold text-foreground tabular-nums">68 %</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                    style={{ width: '68%' }}
                  />
                </div>
              </div>

              {/* milestones */}
              <div className="space-y-2.5">
                {[
                  { label: 'Konzept abgeschlossen', done: true },
                  { label: 'Backend live geschaltet', done: true },
                  { label: 'Frontend in Arbeit', done: false },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        m.done ? 'bg-primary text-primary-foreground' : 'bg-muted border border-border'
                      }`}
                    >
                      {m.done && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span className={m.done ? 'text-foreground' : 'text-muted-foreground'}>{m.label}</span>
                  </div>
                ))}
              </div>

              {/* team footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
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
                  <p className="text-xs text-muted-foreground">Ihr Team bei for.tel</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Status ansehen
                  <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* compliance floating card – bottom right, dezenter */}
          <div className="hidden sm:flex absolute -bottom-4 -right-3 z-20 items-center gap-2.5 bg-background border border-border rounded-lg shadow-lg px-3 py-2">
            <Lock size={14} className="text-primary" />
            <div className="text-left">
              <p className="text-[11px] font-bold text-foreground leading-tight">ISO 27001-ready</p>
              <p className="text-[10px] text-muted-foreground">DSGVO · Hosting DE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
