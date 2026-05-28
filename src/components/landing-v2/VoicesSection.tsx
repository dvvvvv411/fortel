import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const voices = [
  {
    quote: 'In drei Monaten haben wir ein Tool live gehabt, an dem andere ein Jahr planen. Kein Bullshit, einfach Lieferung.',
    name: 'CTO',
    initials: 'CT',
    role: 'B2B SaaS · 200 Mitarbeitende',
    metric: '−68%',
    metricLabel: 'Bearbeitungszeit',
  },
  {
    quote: 'Wir hatten Excel-Hölle. Heute läuft alles über eine Plattform — und das Team will sie tatsächlich benutzen.',
    name: 'Geschäftsführerin',
    initials: 'GF',
    role: 'Logistik · 80 Mitarbeitende',
    metric: '+€340k',
    metricLabel: 'p.a. Einsparung',
  },
  {
    quote: 'Beratung, die zuhört, baut, misst — und dann wieder zuhört. So muss das funktionieren.',
    name: 'IT-Leiter',
    initials: 'IT',
    role: 'Maschinenbau · 450 Mitarbeitende',
    metric: '99.98%',
    metricLabel: 'Uptime nach Launch',
  },
];

const VoicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Kundenstimmen</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Was unsere Kunden über die Zusammenarbeit sagen.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Anonymisierte Stimmen aus laufenden und abgeschlossenen Projekten.
            Referenzkontakte gerne auf Anfrage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {voices.map((v, i) => (
            <div
              key={i}
              className={`p-8 flex flex-col rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <Quote size={22} className="text-primary mb-5" />
              <p className="text-base leading-relaxed">&bdquo;{v.quote}&ldquo;</p>
              <div className="mt-7 pt-5 border-t border-border flex items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-sm">{v.name}</p>
                  <p className="text-xs text-muted-foreground">{v.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl font-bold text-primary">{v.metric}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{v.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
