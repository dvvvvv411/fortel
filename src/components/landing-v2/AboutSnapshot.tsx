import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutImage from '@/assets/landing/about-building.jpg';

const points = [
  'Inhouse-Team in Filderstadt — kein Outsourcing',
  '20 Jahre Erfahrung, 150+ Projekte ausgeliefert',
  'Direkter Draht zu Entwicklern & Geschäftsführung',
  'Festpreise pro Phase, transparent kalkuliert',
];

const AboutSnapshot = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">// über uns</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Seit 2006 in Filderstadt.<br/>
            <span className="gradient-text-violet">Ein Team, kein Hype.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            for.tel Solutions ist eine inhabergeführte Software- & Beratungs­agentur aus der Region Stuttgart.
            Wir arbeiten mit Mittelstand und Konzern — bodenständig, langfristig, ohne Buzzwords.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/team" className="group inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all">
              Team kennenlernen <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </Link>
            <Link to="/methodik" className="group inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl border border-border font-semibold hover:border-primary/40 transition-all">
              Unsere Methodik <ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </Link>
          </div>
        </div>

        <div className={`relative scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 via-primary-glow/15 to-transparent rounded-[2.5rem] blur-2xl opacity-80" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl shadow-primary/10 aspect-[4/5] bg-muted">
            <img
              src={aboutImage}
              alt="for.tel Solutions Büro in Filderstadt"
              width={1080}
              height={1350}
              loading="lazy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 sm:left-7 sm:right-auto inline-flex flex-col gap-1 px-5 py-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-lg">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Standort</span>
              <span className="font-display font-bold text-base">Filderstadt · DE</span>
              <span className="text-xs text-muted-foreground">10 Min. vom Stuttgarter Flughafen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
