import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/landing/hero-office.jpg';

const HeroBento = () => {
  return (
    <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* very subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.18] pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="hero-animate hero-animate-1 flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-background/70 text-xs tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>Inhabergeführt · seit 2006 · Filderstadt</span>
          </div>
        </div>

        <h1 className="hero-animate hero-animate-2 text-center font-display text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.05] tracking-tight max-w-5xl mx-auto">
          Software-Entwicklung und IT-Beratung
          <span className="block text-primary">für den deutschen Mittelstand.</span>
        </h1>

        <p className="hero-animate hero-animate-3 mt-7 max-w-2xl mx-auto text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
          for.tel Solutions plant, baut und betreibt individuelle Unternehmens­software —
          mit einem festen Inhouse-Team aus der Region Stuttgart. Verlässlich. Wartbar.
          Dokumentiert.
        </p>

        <div className="hero-animate hero-animate-4 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/kontakt" className="group inline-flex items-center justify-center gap-2 px-7 h-13 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">
            <span>Projekt anfragen</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/leistungen" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-border bg-background font-semibold hover:border-primary/40 hover:text-primary transition-all">
            <span>Leistungen ansehen</span>
          </Link>
        </div>

        {/* Hero image */}
        <div className="hero-animate hero-animate-5 mt-16 relative">
          <div className="relative rounded-xl overflow-hidden border border-border shadow-xl bg-muted">
            <img
              src={heroImage}
              alt="Software-Team von for.tel Solutions am Standort Filderstadt"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-auto object-cover aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-md bg-background/95 backdrop-blur border border-border shadow-sm">
              <div className="text-left">
                <p className="font-display text-sm font-bold leading-tight">20 Jahre Erfahrung</p>
                <p className="text-[11px] text-muted-foreground">150+ ausgelieferte Projekte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
