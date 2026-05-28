import { Link } from 'react-router-dom';
import { Code2, Workflow, Brain, Cloud, Database, Layers, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
