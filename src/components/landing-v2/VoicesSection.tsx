import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const voices = [
  {
    quote: 'In drei Monaten haben wir ein Tool live gehabt, an dem andere ein Jahr planen. Kein Bullshit, einfach Lieferung.',
    name: 'CTO',
    role: 'B2B SaaS · 200 Mitarbeitende',
    metric: '−68%',
    metricLabel: 'Bearbeitungszeit',
  },
  {
    quote: 'Wir hatten Excel-Hölle. Heute läuft alles über eine Plattform — und das Team will sie tatsächlich benutzen.',
    name: 'Geschäftsführerin',
    role: 'Logistik · 80 Mitarbeitende',
    metric: '+€340k',
    metricLabel: 'p.a. Einsparung',
  },
  {
    quote: 'Beratung, die zuhört, baut, misst — und dann wieder zuhört. So muss das funktionieren.',
    name: 'IT-Leiter',
    role: 'Maschinenbau · 450 Mitarbeitende',
    metric: '99.98%',
    metricLabel: 'Uptime nach Launch',
  },
];

const VoicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6 bg-gradient-blue-section">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">// signal from the field</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Was unsere Kunden <br className="hidden sm:block"/>
            <span className="gradient-text-violet">wirklich</span> sagen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {voices.map((v, i) => (
            <div
              key={i}
              className={`bento-card p-8 flex flex-col scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <Quote size={24} className="text-primary mb-6" />
              <p className="text-lg leading-relaxed font-medium">&bdquo;{v.quote}&ldquo;</p>
              <div className="mt-8 pt-6 border-t border-border flex items-end justify-between">
                <div>
                  <p className="font-semibold text-sm">{v.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{v.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold gradient-text-violet">{v.metric}</p>
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
