import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroBento = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-muted/40 pt-24 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* very subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Content side */}
        <div className="lg:col-span-7 space-y-8">
          <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Inhabergeführt · seit 2006 · Filderstadt
          </div>

          <h1 className="hero-animate hero-animate-2 font-display text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground tracking-tight leading-[1.05]">
            Software-Entwicklung
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow">
              für den Mittelstand.
            </span>
          </h1>

          <p className="hero-animate hero-animate-3 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            for.tel Solutions plant, baut und betreibt individuelle Unternehmens­software —
            mit einem festen Inhouse-Team aus der Region Stuttgart.{' '}
            <span className="font-semibold text-foreground underline decoration-primary/40 decoration-2 underline-offset-4">
              Verlässlich. Wartbar. Dokumentiert.
            </span>
          </p>

          <div className="hero-animate hero-animate-4 flex flex-wrap gap-4 pt-2">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Projekt anfragen
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center px-8 py-4 bg-background text-foreground font-semibold rounded-xl border border-border hover:bg-muted transition-all"
            >
              Unsere Leistungen
            </Link>
          </div>

          <div className="hero-animate hero-animate-5 flex items-center gap-8 pt-6 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-foreground">18+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Jahre Erfahrung</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">Stuttgart</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Regional verwurzelt</p>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <p className="text-2xl font-bold text-foreground">150+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projekte</p>
            </div>
          </div>
        </div>

        {/* Visual side */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative bg-background rounded-3xl border border-border shadow-2xl p-6 sm:p-8 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="ml-4 h-4 w-32 bg-muted rounded" />
            </div>

            {/* Abstract code/UI rows */}
            <div className="space-y-3.5">
              <div className="h-4 w-full bg-muted/70 rounded" />
              <div className="h-4 w-[90%] bg-muted/70 rounded" />
              <div className="h-4 w-[95%] bg-primary/10 rounded flex items-center px-2">
                <div className="h-2 w-1/2 bg-primary/40 rounded" />
              </div>
              <div className="h-4 w-[70%] bg-muted/70 rounded" />

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="aspect-square rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-primary" />
                </div>
                <div className="aspect-square rounded-xl bg-muted/60 border border-border" />
                <div className="aspect-square rounded-xl bg-muted/60 border border-border" />
              </div>
            </div>

            {/* Floating status badge */}
            <div className="absolute bottom-10 -right-3 sm:-right-4 bg-foreground text-background p-4 rounded-xl shadow-xl rotate-3">
              <p className="text-[10px] opacity-70 uppercase font-bold tracking-widest">Status</p>
              <p className="text-sm font-semibold">Systeme optimiert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
