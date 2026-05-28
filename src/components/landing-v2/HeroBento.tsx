import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/landing/hero-office.jpg';

const HeroBento = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-[0.35] pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px] pointer-events-none animate-orb" />
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/25 blur-[140px] pointer-events-none animate-orb-delayed" />

      <div className="relative max-w-6xl mx-auto">
        <div className="hero-animate hero-animate-1 flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>est. 2006 · filderstadt</span>
            <span className="w-px h-3 bg-border" />
            <Sparkles size={11} className="text-primary" />
            <span>v2026.1</span>
          </div>
        </div>

        <h1 className="hero-animate hero-animate-2 text-center font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.98] tracking-tight max-w-5xl mx-auto">
          Software, die <br className="hidden sm:block" />
          Prozesse <span className="gradient-text-violet">denkt</span>.
        </h1>

        <p className="hero-animate hero-animate-3 mt-8 max-w-2xl mx-auto text-center text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
          for.tel Solutions baut maßgeschneiderte Software & digitale Prozesse für
          mittelständische Unternehmen — messbar, wartbar, ohne Buzzword-Bingo.
        </p>

        <div className="hero-animate hero-animate-4 mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/kontakt" className="group inline-flex items-center justify-center gap-3 px-7 h-14 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
            <span>Projekt starten</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link to="/leistungen" className="group inline-flex items-center justify-center gap-3 px-7 h-14 rounded-2xl border border-border bg-background/60 backdrop-blur font-semibold hover:border-primary/40 transition-all">
            <span>Leistungen ansehen</span>
            <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Hero image */}
        <div className="hero-animate hero-animate-5 mt-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-primary-glow/20 to-transparent rounded-[2.5rem] blur-2xl opacity-70" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl shadow-primary/10 bg-muted">
            <img
              src={heroImage}
              alt="Modernes Software-Team von for.tel Solutions bei der Arbeit"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-auto object-cover aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            {/* Floating stat chip */}
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-background/90 backdrop-blur-xl border border-border shadow-lg">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-sm">20</span>
              </div>
              <div className="text-left">
                <p className="font-display text-sm font-bold leading-tight">Jahre Erfahrung</p>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">seit 2006</p>
              </div>
            </div>
            <div className="hidden sm:flex absolute top-5 right-5 sm:top-7 sm:right-7 items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-xl border border-border shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider">live · 150+ projekte</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="hero-animate hero-animate-5 mt-20 overflow-hidden">
          <div className="flex gap-12 animate-ticker font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 shrink-0 items-center">
                {[
                  'Custom Software', 'Prozessdigitalisierung', 'KI & Automatisierung',
                  'ERP & CRM', 'Cloud & DevOps', 'IT-Beratung',
                ].map((w) => (
                  <span key={w} className="flex items-center gap-12 shrink-0">
                    <span>{w}</span>
                    <span className="text-primary/60">●</span>
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
