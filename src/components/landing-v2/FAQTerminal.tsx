import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  { q: 'Wie lange dauert ein typisches Projekt?', a: 'Kleinere Tools: 6 – 10 Wochen. Größere Plattformen: 3 – 6 Monate. Wir liefern alle zwei Wochen einen funktionierenden Stand — nicht erst am Ende.' },
  { q: 'Arbeiten Sie auch mit Bestandssoftware?', a: 'Ja. Integration mit ERP (SAP, Sage, DATEV), CRM (Salesforce, HubSpot) und Legacy-Systemen ist Standardgeschäft für uns. APIs, Webhooks oder direkter DB-Sync — wir wählen den saubersten Weg.' },
  { q: 'Was kostet das?', a: 'Festpreis pro Phase, transparent kalkuliert. Discovery ab €4.900. Build-Sprints typisch zwischen €18.000 und €45.000 pro Monat — abhängig von Teamgröße und Scope.' },
  { q: 'Wem gehört der Code am Ende?', a: 'Ihnen. Vollständig. Inklusive Repository-Zugang ab Tag 1, Dokumentation und Übergabe. Keine Vendor-Lock-Ins, keine versteckten Lizenzgebühren.' },
  { q: 'Was passiert nach dem Launch?', a: 'Optional: Wartungsvertrag mit SLA, Weiterentwicklung im Sprint-Modus, oder vollständige Übergabe an Ihr Team. Ihre Entscheidung.' },
  { q: 'Wo sitzen Sie und wer arbeitet am Projekt?', a: 'Filderstadt bei Stuttgart. Festes Inhouse-Team, kein Outsourcing. Sie haben direkten Draht zu Entwicklern, Architekten und Geschäftsführung.' },
];

const FAQTerminal = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`mb-14 text-center scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">// faq.md</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Die ehrlichen <span className="gradient-text-violet">Antworten</span>.
          </h2>
        </div>

        <div className={`bento-card p-2 sm:p-4 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left p-5 sm:p-6 rounded-2xl hover:bg-muted/40 transition-colors border-b border-border last:border-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-primary mt-1.5">Q{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug">{f.q}</h3>
                  </div>
                  <span className={`shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center transition-transform ${isOpen ? 'rotate-45 bg-primary text-primary-foreground border-primary' : ''}`}>
                    <Plus size={16} />
                  </span>
                </div>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden pl-10">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQTerminal;
