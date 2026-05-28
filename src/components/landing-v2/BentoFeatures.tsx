import { Link } from 'react-router-dom';
import { Code2, Workflow, Brain, Cloud, Database, Layers, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  {
    icon: Code2,
    tag: '01 / build',
    title: 'Custom Software',
    body: 'Webapps, Portale & interne Tools — gebaut um Ihr Geschäft, nicht andersrum.',
    span: 'lg:col-span-6 lg:row-span-2',
    visual: (
      <div className="absolute inset-x-0 bottom-0 h-44 flex items-end gap-1 px-6">
        {[28, 52, 38, 70, 45, 88, 60, 95, 72, 100, 80, 90].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-primary to-primary-glow opacity-80 bar-grow" style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }} />
        ))}
      </div>
    ),
  },
  {
    icon: Workflow,
    tag: '02 / flow',
    title: 'Prozess­digitalisierung',
    body: 'Vom Papierberg zum API-Call: Workflows, die wirklich laufen.',
    span: 'lg:col-span-3',
    visual: (
      <svg viewBox="0 0 200 120" className="absolute right-3 bottom-3 w-32 h-20 opacity-90">
        <circle cx="20" cy="60" r="6" fill="hsl(var(--primary))" />
        <circle cx="100" cy="30" r="6" fill="hsl(var(--primary))" />
        <circle cx="100" cy="90" r="6" fill="hsl(var(--primary))" />
        <circle cx="180" cy="60" r="6" fill="hsl(var(--primary))" />
        <path d="M26,60 L94,30 M26,60 L94,90 M106,30 L174,60 M106,90 L174,60" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" className="animate-dash" />
      </svg>
    ),
  },
  {
    icon: Brain,
    tag: '03 / ai',
    title: 'KI & Automatisierung',
    body: 'LLMs, Agents & RAG — produktiv eingesetzt, nicht nur demoed.',
    span: 'lg:col-span-3',
    visual: (
      <div className="absolute right-4 bottom-4 grid grid-cols-3 gap-1.5">
        {Array.from({length: 9}).map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-sm bg-primary" style={{opacity: 0.2 + (i % 4) * 0.2}} />
        ))}
      </div>
    ),
  },
  {
    icon: Cloud,
    tag: '04 / scale',
    title: 'Cloud & DevOps',
    body: 'Skalierbare Architektur. Azure, AWS, Kubernetes — sauber aufgesetzt.',
    span: 'lg:col-span-3',
    visual: (
      <svg viewBox="0 0 100 60" className="absolute right-3 bottom-3 w-24 h-14">
        <path d="M10,45 Q25,15 50,30 T90,25" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <circle cx="10" cy="45" r="3" fill="hsl(var(--primary))" />
        <circle cx="50" cy="30" r="3" fill="hsl(var(--primary))" />
        <circle cx="90" cy="25" r="3" fill="hsl(var(--primary))" />
      </svg>
    ),
  },
  {
    icon: Database,
    tag: '05 / data',
    title: 'Daten & Integration',
    body: 'ERP, CRM, Legacy — sauber verbunden, in Echtzeit synchronisiert.',
    span: 'lg:col-span-3',
    visual: (
      <div className="absolute right-3 bottom-3 flex gap-2">
        {['db', 'api', 'erp'].map((t) => (
          <div key={t} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono text-[10px]">{t}</div>
        ))}
      </div>
    ),
  },
  {
    icon: Layers,
    tag: '06 / advice',
    title: 'IT-Beratung',
    body: 'Architektur, Stack-Entscheidungen, Roadmap. Klartext statt Folienorgie.',
    span: 'lg:col-span-6',
    visual: (
      <div className="absolute right-6 bottom-6 flex items-center gap-3">
        <div className="font-mono text-[10px] text-muted-foreground">decision.matrix</div>
        <div className="flex flex-col gap-1">
          {[80, 55, 92].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-muted overflow-hidden w-32">
              <div className="h-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const BentoFeatures = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">// what we ship</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
              Sechs Disziplinen. <br />
              <span className="text-muted-foreground/70">Ein</span> <span className="gradient-text-violet">Operating-System</span> <span className="text-muted-foreground/70">für Ihr Unternehmen.</span>
            </h2>
          </div>
          <Link to="/leistungen" className="group inline-flex items-center gap-2 font-mono text-sm text-primary self-start lg:self-end">
            alle leistungen <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[220px] gap-3 sm:gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`bento-card col-span-1 sm:col-span-2 ${it.span} p-7 flex flex-col scroll-hidden delay-${(i % 6) + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{it.tag}</span>
                <it.icon size={16} className="text-primary" />
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold leading-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md leading-relaxed">{it.body}</p>
              {it.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
