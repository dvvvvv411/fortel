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
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">// leistungen</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
              Sechs Disziplinen.<br />
              <span className="gradient-text-violet">Ein Team.</span>
            </h2>
          </div>
          <Link to="/leistungen" className="group inline-flex items-center gap-2 font-mono text-sm text-primary self-start lg:self-end">
            alle leistungen <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`bento-card p-8 sm:p-10 flex flex-col gap-6 min-h-[260px] scroll-hidden delay-${(i % 6) + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <it.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight">{it.title}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </div>
          ))}

          {/* Image accent card — spans 2 cols on lg */}
          <div className={`relative overflow-hidden rounded-3xl border border-border min-h-[260px] sm:col-span-2 lg:col-span-2 group scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <img
              src={codeImage}
              alt="Code-Editor mit violetten Akzenten"
              width={1024}
              height={1024}
              loading="lazy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/85 via-foreground/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 text-background">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-glow mb-3">// made in filderstadt</div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight max-w-md">
                Code, der altert wie guter Wein — nicht wie Milch.
              </h3>
              <p className="mt-3 text-sm text-background/80 max-w-md leading-relaxed">
                Inhouse-Team, Clean-Code-Standards, Test-Coverage &gt; 80 %. Sie bekommen Software, an die man nach 3 Jahren noch dranbauen kann.
              </p>
            </div>
          </div>

          {/* Filler card to balance grid on lg */}
          <div className={`bento-card p-8 sm:p-10 flex flex-col justify-between min-h-[260px] bg-primary text-primary-foreground border-primary scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">// next step</div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">Ihre Idee. Unser Stack.</h3>
              <Link to="/kontakt" className="mt-5 inline-flex items-center gap-2 font-semibold text-sm group">
                Kostenfreies Erstgespräch <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
