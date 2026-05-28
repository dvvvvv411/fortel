import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className={`max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-foreground text-background p-10 sm:p-16 lg:p-24 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
        {/* glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/40 blur-[140px]" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-[140px]" />
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
              <span>verfügbar · q1 2026</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
              Lassen Sie uns das <br/>
              <span className="gradient-text-violet">nächste Ding</span> bauen.
            </h2>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-background/70 leading-relaxed">
              30 Minuten, kostenlos, ohne Folien. Wir hören zu, stellen die richtigen Fragen
              und sagen Ihnen ehrlich, ob wir der richtige Partner sind.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link to="/kontakt" className="group inline-flex items-center justify-between gap-4 px-7 h-16 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all">
              <span>Gespräch buchen</span>
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link to="/karriere" className="group inline-flex items-center justify-between gap-4 px-7 h-16 rounded-2xl border border-background/20 text-background font-semibold text-base hover:bg-background/5 transition-all">
              <span>Bei uns arbeiten</span>
              <ArrowUpRight size={20} className="text-background/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-[11px]">
              <div className="rounded-xl border border-background/15 p-3">
                <p className="text-background/50 uppercase tracking-widest text-[10px]">Telefon</p>
                <p className="mt-1 text-background">+49 711 96881540</p>
              </div>
              <div className="rounded-xl border border-background/15 p-3">
                <p className="text-background/50 uppercase tracking-widest text-[10px]">Mail</p>
                <p className="mt-1 text-background">info@for-tel.de</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
