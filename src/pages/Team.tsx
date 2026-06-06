import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const departments = [
  {
    number: '01',
    title: 'Geschäftsführung',
    intro: 'Strategische Verantwortung, Beratung und Vertrieb auf Vorstandsebene.',
    members: [
      {
        name: 'Ulrich Papst',
        role: 'Geschäftsführer',
        description:
          'Über 30 Jahre Erfahrung in technischer Beratung, Projektleitung und Anlagenplanung.',
      },
      {
        name: 'Thomas Papst',
        role: 'Geschäftsführer',
        description:
          'Führt das Unternehmen gemeinsam mit seinem Vater und verantwortet Beratung und Vertrieb.',
      },
    ],
  },
  {
    number: '02',
    title: 'Projektmanagement & Planung',
    intro: 'Steuerung und Fachplanung über alle Gewerke — von der Vergabe bis zur Abnahme.',
    members: [
      {
        name: 'Laura Schneider',
        role: 'Leitung Projektmanagement',
        description:
          'Steuert komplexe Technik-Projekte über alle Gewerke hinweg — von Vergabe bis Abnahme.',
      },
      {
        name: 'Michael Fischer',
        role: 'Senior Projektleiter',
        description: 'Verantwortet Großprojekte in Telekommunikation und Energieversorgung.',
      },
      {
        name: 'Anna Hoffmann',
        role: 'Planerin Fernmeldetechnik',
        description: 'Plant Daten-, Telefon- und Sicherheitstechnik bis zur Ausführungsplanung.',
      },
      {
        name: 'Sebastian Richter',
        role: 'Planer Elektrotechnik',
        description: 'Plant Stark- und Schwachstromanlagen nach DIN VDE und einschlägigen Normen.',
      },
    ],
  },
  {
    number: '03',
    title: 'Beratung & Controlling',
    intro: 'Wirtschaftliche und technische Expertise für belastbare Entscheidungen.',
    members: [
      {
        name: 'Julia Wagner',
        role: 'Senior Consultant',
        description:
          'Verbindet wirtschaftliches Know-how mit technischem Verständnis für belastbare Entscheidungen.',
      },
      {
        name: 'Markus Bauer',
        role: 'Projektcontroller',
        description: 'Verantwortet Termin-, Kosten- und Qualitätscontrolling in laufenden Mandaten.',
      },
    ],
  },
  {
    number: '04',
    title: 'Personalberatung',
    intro: 'Diskrete und passgenaue Besetzung von Fach- und Führungspositionen.',
    members: [
      {
        name: 'Sarah Meier',
        role: 'Leitung Personalberatung',
        description:
          'Besetzt Fach- und Führungspositionen in Technik und Vertrieb — diskret und passgenau.',
      },
      {
        name: 'Jonas Hartmann',
        role: 'Recruiter',
        description:
          'Identifiziert Kandidaten in Telekommunikation, Elektrotechnik und Anlagenbau.',
      },
    ],
  },
];

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Unser"
        highlight="Team"
        subtitle="Die Menschen hinter for.tel Solutions — Berater, Projektleiter und Planer mit Branchenerfahrung."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Team' },
        ]}
      />

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-16">
          {departments.map((dept, idx) => (
            <div
              key={dept.number}
              className={`scroll-hidden ${idx > 0 ? 'pt-16 border-t border-border' : ''}`}
            >
              <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">
                <div>
                  <p className="text-xs font-mono text-primary tracking-wider">{dept.number}</p>
                  <h2 className="text-2xl font-semibold text-foreground mt-2 leading-tight">
                    {dept.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {dept.intro}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                  {dept.members.map((member) => (
                    <div key={member.name}>
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mt-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Team;
