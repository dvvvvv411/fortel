import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const departments = [
  {
    number: '01',
    title: 'Geschäftsführung',
    intro: 'Strategische Ausrichtung und unternehmerische Verantwortung.',
    members: [
      {
        name: 'Manfred Beutel',
        role: 'Geschäftsführer',
        description:
          'Gründer von for.tel Solutions mit langjähriger Erfahrung im Aufbau digitaler Test- und Service-Teams. Verantwortet die strategische Ausrichtung.',
      },
    ],
  },
  {
    number: '02',
    title: 'Betrieb & Finanzen',
    intro: 'Operative Steuerung und verlässliche Abwicklung aller Aufträge und Auszahlungen.',
    members: [
      {
        name: 'Sabine Vogt',
        role: 'Leiterin Operations',
        description:
          'Sorgt dafür, dass jeder Auftrag reibungslos läuft und unsere Tester pünktlich ihre Vergütung erhalten.',
      },
      {
        name: 'Andrea Wenzel',
        role: 'Leiterin Finanzen',
        description:
          'Hält alle Zahlen im Blick und stellt sicher, dass Auszahlungen zuverlässig und transparent erfolgen.',
      },
    ],
  },
  {
    number: '03',
    title: 'People & Community',
    intro: 'Erste Ansprechpartner für Bewerber und Mitarbeitende — vom Onboarding bis zur Kultur.',
    members: [
      {
        name: 'Jonas Beckmann',
        role: 'Recruiting & Community',
        description:
          'Erste Anlaufstelle für neue Bewerber. Begleitet dich vom ersten Klick bis zum erfolgreichen Onboarding.',
      },
      {
        name: 'Katrin Hofmann',
        role: 'Head of People & Culture',
        description:
          'Verantwortlich für ein wertschätzendes Miteinander — intern wie auch in der Zusammenarbeit mit unseren Mitarbeitenden.',
      },
    ],
  },
  {
    number: '04',
    title: 'Technologie',
    intro: 'Sichere, stabile und schnelle Prozesse als Fundament unserer Plattform.',
    members: [
      {
        name: 'Michael Schreiber',
        role: 'Head of Technology',
        description:
          'Leitet die technische Entwicklung unserer Plattform und sorgt für sichere, stabile und schnelle Prozesse.',
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
