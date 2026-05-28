import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, Cable, Users, CalendarDays, Lightbulb } from 'lucide-react';

const HeroBento = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-muted/40 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-12 gap-5 lg:gap-6">
        {/* ───── LEFT: MAIN CONTENT CARD ───── */}
        <div className="hero-animate hero-animate-1 col-span-12 lg:col-span-7 bg-background rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-border flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/[0.05] blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors duration-700" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8">
              <ShieldCheck size={13} className="text-primary" />
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                Inhabergeführt · seit 2006 · Filderstadt
              </span>
            </div>

            <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08] mb-8">
              Technische Beratung &amp;
              <br />
              <span className="text-primary">Anlagenplanung.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 lg:mb-12">
              Wir beraten, steuern und planen technische Projekte — von der Machbarkeitsstudie
              über Projektmanagement und Personalberatung bis zur Planung elektro- und
              fernmeldetechnischer Anlagen.{' '}
              <span className="text-foreground font-medium">Verlässlich. Unabhängig. Aus einer Hand.</span>
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/kontakt"
                className="group/btn inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl transition-all shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5"
              >
                Projekt anfragen
                <ArrowRight size={17} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center px-7 py-4 bg-background text-foreground border border-border font-semibold rounded-2xl hover:border-primary/40 hover:bg-muted transition-all"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tabular-nums">
                18<span className="text-primary">+</span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">
                Jahre Erfahrung
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tabular-nums">
                150<span className="text-primary">+</span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">
                Projekte realisiert
              </div>
            </div>
          </div>
        </div>

        {/* ───── RIGHT: VISUAL COLUMN ───── */}
        <div className="col-span-12 lg:col-span-5 grid grid-rows-[auto_auto] gap-5 lg:gap-6">
          {/* Project status mockup */}
          <div className="hero-animate hero-animate-2 bg-background rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-border overflow-hidden relative p-7 sm:p-8">
            <div className="flex items-center justify-between mb-7">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/30 border border-destructive/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/30 border border-amber-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/30 border border-emerald-400/40" />
              </div>
              <div className="text-[10px] font-mono text-muted-foreground/70 tracking-widest uppercase">
                projekt-status.app
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  Aktuelles Projekt
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-0.5">
                  Fernmelde-Rollout
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-muted-foreground">Phase 3 von 5</span>
                  <span className="text-primary tabular-nums">68 %</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: '68%' }} />
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {[
                  { label: 'Machbarkeit & Konzept', done: true },
                  { label: 'Ausschreibung vergeben', done: true },
                  { label: 'Bauüberwachung', done: false },
                ].map((m) => (
                  <div key={m.label} className={`flex items-center gap-3 text-sm ${m.done ? '' : 'opacity-60'}`}>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        m.done
                          ? 'bg-emerald-100 border border-emerald-200 text-emerald-600'
                          : 'bg-muted border border-border'
                      }`}
                    >
                      {m.done && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span className={m.done ? 'text-foreground' : 'text-muted-foreground'}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two smaller info tiles */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6">
            <div className="hero-animate hero-animate-3 bg-background rounded-[2.5rem] p-6 sm:p-8 border border-border shadow-[0_20px_40px_-12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow group flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Building2 size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="font-display font-bold text-foreground">Branchen</div>
              <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-tight leading-snug">
                Industrie, TK, Energie &amp; Öff. Hand
              </div>
            </div>

            <div className="hero-animate hero-animate-4 bg-primary rounded-[2.5rem] p-6 sm:p-8 shadow-[0_20px_40px_-12px_hsl(var(--primary)/0.3)] flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 sm:p-8">
                <ShieldCheck size={28} className="text-primary-foreground/25" />
              </div>
              <div className="font-display font-bold text-primary-foreground">Verlässlich.</div>
              <div className="text-primary-foreground/75 text-sm leading-snug">
                Unabhängig.
                <br />
                Aus einer Hand.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
