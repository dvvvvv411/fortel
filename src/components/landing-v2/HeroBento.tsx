import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check, Factory, Truck, HeartPulse, Package } from 'lucide-react';
import reactLogo from '@/assets/tech/react.svg';
import csharpLogo from '@/assets/tech/csharp.svg';
import postgresLogo from '@/assets/tech/postgresql.svg';
import nodeLogo from '@/assets/tech/nodejs.svg';
import nextLogo from '@/assets/tech/nextjs.svg';
import pythonLogo from '@/assets/tech/python.svg';

const HeroBento = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-muted/40 pt-24 sm:pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] rounded-full bg-primary/[0.07] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-12 gap-4 sm:gap-5 auto-rows-auto">
        {/* ───── HEADLINE BLOCK (left, large) ───── */}
        <div className="hero-animate hero-animate-1 col-span-12 lg:col-span-8 lg:row-span-2 relative rounded-2xl border border-border bg-background p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden">
          {/* subtle inner aura */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/[0.08] blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              <ShieldCheck size={14} />
              Inhabergeführt · seit 2006 · Filderstadt
            </div>

            <h1 className="mt-6 font-display text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-extrabold text-foreground tracking-tight leading-[1.04]">
              Software-Entwicklung
              <br />
              für den <span className="text-primary">Mittelstand.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Wir planen, bauen und betreiben individuelle Unternehmens­software — mit festem
              Inhouse-Team aus der Region Stuttgart.{' '}
              <span className="text-foreground font-medium">Verlässlich. Wartbar. Dokumentiert.</span>
            </p>
          </div>

          <div className="relative flex flex-wrap gap-3 pt-8">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Projekt anfragen
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center px-6 py-3.5 bg-background text-foreground font-semibold rounded-xl border border-border hover:bg-muted transition-all"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>

        {/* ───── STAT TILE 1 ───── */}
        <div className="hero-animate hero-animate-2 col-span-6 lg:col-span-4 rounded-2xl border border-border bg-background p-5 sm:p-6 flex flex-col justify-between min-h-[120px]">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Erfahrung</p>
          <div>
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tabular-nums leading-none">
              18<span className="text-primary">+</span>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">Jahre am Markt</p>
          </div>
        </div>

        {/* ───── STAT TILE 2 ───── */}
        <div className="hero-animate hero-animate-2 col-span-6 lg:col-span-4 rounded-2xl border border-border bg-background p-5 sm:p-6 flex flex-col justify-between min-h-[120px]">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Geliefert</p>
          <div>
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tabular-nums leading-none">
              150<span className="text-primary">+</span>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">Projekte umgesetzt</p>
          </div>
        </div>

        {/* ───── PROJEKT-STATUS-KARTE (rechts, groß) ───── */}
        <div className="hero-animate hero-animate-3 col-span-12 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-1 rounded-2xl border border-border bg-background overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="ml-2 text-[11px] font-medium text-muted-foreground">projekt-status.app</span>
          </div>

          <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Aktuelles Projekt</p>
                <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                  ERP-Modernisierung
                </h3>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold border border-primary/20">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                in Umsetzung
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Phase 3 von 5</span>
                <span className="font-semibold text-foreground tabular-nums">68 %</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: '68%' }} />
              </div>
            </div>

            <div className="space-y-2.5 flex-1">
              {[
                { label: 'Konzept abgeschlossen', done: true },
                { label: 'Backend live geschaltet', done: true },
                { label: 'Frontend in Arbeit', done: false },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2.5 text-[13px]">
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

            <div className="flex items-center justify-between pt-4 border-t border-border">
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
              <span className="text-[11px] text-muted-foreground">Ihr Team bei for.tel</span>
            </div>
          </div>
        </div>

        {/* ───── BRANCHEN-KACHEL ───── */}
        <div className="hero-animate hero-animate-4 col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl border border-border bg-background p-5 sm:p-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Branchen</p>
          <p className="font-display text-base font-bold text-foreground mt-1">Wo wir zuhause sind</p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[
              { Icon: Factory, label: 'Industrie' },
              { Icon: Truck, label: 'Logistik' },
              { Icon: HeartPulse, label: 'Health' },
              { Icon: Package, label: 'Handel' },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-muted/30 py-2.5 hover:border-primary/40 hover:bg-primary/[0.04] transition-colors"
              >
                <Icon size={18} className="text-primary" />
                <span className="text-[10px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ───── TECH-STACK-KACHEL ───── */}
        <div className="hero-animate hero-animate-5 col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl border border-border bg-background p-5 sm:p-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Tech-Stack</p>
          <p className="font-display text-base font-bold text-foreground mt-1">Womit wir bauen</p>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            {[reactLogo, csharpLogo, nextLogo, nodeLogo, postgresLogo, pythonLogo].map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg border border-border bg-muted/30 flex items-center justify-center hover:border-primary/40 transition-colors"
              >
                <img
                  src={src}
                  alt=""
                  className="w-5 h-5 object-contain"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
