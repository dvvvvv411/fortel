import { Link } from 'react-router-dom';
import { Code2, Workflow, Brain, Cloud, Database, Layers, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import codeImage from '@/assets/landing/feature-code.jpg';

const items = [
  { icon: Code2, title: 'Custom Software', body: 'Webapps, Portale & interne Tools — gebaut um Ihr Geschäft, nicht andersrum.' },
  { icon: Workflow, title: 'Prozess­digitalisierung', body: 'Vom Papierberg zum API-Call: Workflows, die wirklich laufen.' },
  { icon: Brain, title: 'KI & Automatisierung', body: 'LLMs, Agents & RAG — produktiv eingesetzt, nicht nur demoed.' },
  { icon: Cloud, title: 'Cloud & DevOps', body: 'Skalierbare Architektur. Azure, AWS, Kubernetes — sauber aufgesetzt.' },
  { icon: Database, title: 'Daten & Integration', body: 'ERP, CRM, Legacy — sauber verbunden, in Echtzeit synchronisiert.' },
  { icon: Layers, title: 'IT-Beratung', body: 'Architektur, Stack-Entscheidungen, Roadmap. Klartext statt Folienorgie.' },
];

const BentoFeatures = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Leistungen</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight max-w-3xl">
              Sechs Disziplinen, ein verantwortliches Team.
            </h2>
          </div>
          <Link to="/leistungen" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary self-start lg:self-end hover:gap-3 transition-all">
            Alle Leistungen <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`group relative p-8 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all flex flex-col gap-5 min-h-[240px] scroll-hidden delay-${(i % 6) + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center">
                <it.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold leading-tight">{it.title}</h3>
                <p className="mt-2.5 text-[15px] text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </div>
          ))}

          {/* Image accent card */}
          <div className={`relative overflow-hidden rounded-lg border border-border min-h-[240px] sm:col-span-2 lg:col-span-2 group scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <img
              src={codeImage}
              alt="Software-Entwicklung am Standort Filderstadt"
              width={1024}
              height={1024}
              loading="lazy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/90 via-foreground/55 to-foreground/10" />
            <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 text-background">
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary-glow mb-3 font-semibold">Standort Deutschland</p>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight max-w-md">
                Inhouse-Entwicklung in Filderstadt — kein Offshoring.
              </h3>
              <p className="mt-3 text-sm text-background/80 max-w-md leading-relaxed">
                Festes Team, dokumentierte Standards, Tests &amp; Code-Reviews. Software,
                die auch in fünf Jahren noch wartbar ist.
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className={`p-8 rounded-lg border border-primary bg-primary text-primary-foreground flex flex-col justify-between min-h-[240px] scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/70 font-semibold">Nächster Schritt</p>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">Unverbindliches Erstgespräch.</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">30 Minuten, ohne Verpflichtungen.</p>
              <Link to="/kontakt" className="mt-5 inline-flex items-center gap-2 font-semibold text-sm group">
                Termin anfragen <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
