import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// TODO: Platzhalter-Wortmarken — später durch echte <img src="/logos/xyz.svg" /> ersetzen.
const placeholderLogos = [
  'LUMITEC',
  'NORDWERK',
  'CORDIS',
  'ELBA SYSTEMS',
  'STRATO',
  'HELVETICA',
  'MERCURA',
  'WESTWERK',
  'QUANTIS',
  'BLAUHAUS',
  'AVENO',
  'FALKENBERG',
];

const TrustLogos = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  // Doppelte Liste für nahtlose Endlos-Animation (translateX -50%)
  const track = [...placeholderLogos, ...placeholderLogos];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center max-w-2xl mx-auto mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Referenzen</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            Unternehmen, die auf for.tel Solutions vertrauen.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Eine Auswahl unserer Kunden aus Mittelstand, Industrie und öffentlicher Hand.
          </p>
        </div>

        <div
          className={`group relative overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
          }}
        >
          <div className="flex w-max animate-marquee gap-12 sm:gap-16 group-hover:[animation-play-state:paused]">
            {track.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-14 shrink-0 items-center justify-center px-2"
                aria-hidden={i >= placeholderLogos.length ? 'true' : undefined}
                title={name}
              >
                {/* TODO: replace with real <img src=`/logos/${slug}.svg` alt={name} className="h-8 w-auto opacity-60 hover:opacity-100" /> */}
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground/40 hover:text-foreground transition-colors whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
