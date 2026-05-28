export interface Stelle {
  slug: string;
  titel: string;
  standort: string;
  modell: string;
  kurzbeschreibung: string;
  beschreibung: string;
  aufgaben: string[];
  voraussetzungen: string[];
  benefits: string[];
  arbeitszeit?: string;
  stundenlohn?: string;
}

export const stellen: Stelle[] = [
  {
    slug: 'onlineprozess-tester',
    titel: 'Mitarbeiter (m/w/d) für Onlineprozess-Tests',
    standort: 'Filderstadt',
    modell: 'Remote / Minijob / Teilzeit',
    arbeitszeit: 'Flexibel (ca. 5–30 Std./Woche)',
    stundenlohn: '29 €',
    kurzbeschreibung: 'Teste digitale Anwendungen remote und halte deine Eindrücke strukturiert fest – flexibel und ohne Vorkenntnisse.',
    beschreibung: 'Du bist regelmäßig online unterwegs und achtest darauf, ob Webseiten oder Apps gut funktionieren? Dann könnte diese Tätigkeit gut zu dir passen. Zur Unterstützung suchen wir Personen, die digitale Anwendungen testen und ihre Eindrücke strukturiert festhalten. Die Aufgaben sind einfach gehalten und werden verständlich erklärt – Vorkenntnisse sind nicht erforderlich.',
    aufgaben: [
      'Testen von Webseiten und mobilen Apps',
      'Prüfen von Abläufen aus Sicht eines Nutzers',
      'Dokumentation von Auffälligkeiten und Feedback',
      'Erkennen von einfachen Bedienungsproblemen',
      'Weitergabe von Verbesserungsvorschlägen',
    ],
    voraussetzungen: [
      'Zuverlässige und sorgfältige Arbeitsweise',
      'Grundlegendes Verständnis für Internetanwendungen',
      'Ein internetfähiges Gerät (Smartphone, Tablet oder PC)',
      'Eigenständiges Arbeiten und Motivation',
      'Keine spezielle Ausbildung notwendig',
    ],
    benefits: [
      'Flexible Zeiteinteilung (auch abends oder am Wochenende möglich)',
      'Arbeiten von zu Hause aus',
      'Einfache Einarbeitung mit klaren Anleitungen',
      'Angenehme, unkomplizierte Zusammenarbeit',
      'Vergütung auf Stundenbasis mit zusätzlicher Bonusmöglichkeit je nach Aufgabe',
    ],
  },
  {
    slug: 'senior-projektleiter',
    titel: 'Mitarbeiter (m/w/d) für Projektleitung Technik',
    standort: 'Filderstadt',
    modell: 'Hybrid',
    kurzbeschreibung: 'Leite anspruchsvolle Technik-Projekte über alle Gewerke — Termine, Kosten, Qualität.',
    beschreibung: 'Als Senior Projektleiter:in steuerst du komplexe Projekte in Telekommunikation, Elektrotechnik und Anlagenbau. Du verantwortest Termin-, Kosten- und Qualitätskontrolle und bist zentrale Ansprechperson für Auftraggeber, Planer und ausführende Firmen.',
    aufgaben: [
      'Technische und wirtschaftliche Projektleitung über alle Leistungsphasen',
      'Termin-, Kosten- und Qualitätscontrolling',
      'Steuerung von Planern, Lieferanten und ausführenden Gewerken',
      'Reporting an Geschäftsführung und Lenkungskreise',
      'Claim- und Nachtragsmanagement',
    ],
    voraussetzungen: [
      'Mindestens 5 Jahre Erfahrung in der Projektleitung technischer Vorhaben',
      'Sehr gute Kenntnisse in HOAI, VOB/VOL und gängigen PM-Methoden (IPMA/PMI)',
      'Erfahrung in Telekommunikation, Elektrotechnik oder Anlagenbau',
      'Sicheres Auftreten gegenüber Auftraggebern und Behörden',
      'Verhandlungssichere Deutschkenntnisse (mind. C1)',
    ],
    benefits: [
      'Eigenverantwortliche Mandate und kurze Entscheidungswege',
      'Hybrides Arbeiten mit Standort Filderstadt',
      'Weiterbildungsbudget und Zertifizierungen (IPMA/PMI)',
      '30 Urlaubstage',
      'Firmenwagen oder Bahncard 100 nach Wahl',
    ],
  },
  {
    slug: 'planer-fernmeldetechnik',
    titel: 'Mitarbeiter (m/w/d) für Planung Fernmeldetechnik',
    standort: 'Filderstadt',
    modell: 'Hybrid',
    kurzbeschreibung: 'Plane Daten-, Telefon- und Sicherheitstechnik von der Vorplanung bis zur Ausführung.',
    beschreibung: 'Als Planer:in Fernmeldetechnik verantwortest du die Planung kommunikations- und sicherheitstechnischer Anlagen über alle Leistungsphasen. Du arbeitest eng mit Projektleitung und Bauherren zusammen.',
    aufgaben: [
      'Vor-, Entwurfs- und Ausführungsplanung fernmeldetechnischer Anlagen',
      'Erstellung von Leistungsverzeichnissen und Kostenberechnungen',
      'Auslegung strukturierter Verkabelung, LWL-Trassen und aktiver Komponenten',
      'Mitarbeit bei Brandmelde-, Einbruchmelde- und Videoanlagen',
      'Zusammenarbeit mit Projektleitung und ausführenden Firmen',
    ],
    voraussetzungen: [
      'Abgeschlossenes Studium oder Techniker im Bereich Elektro-/Nachrichtentechnik',
      'Mindestens 3 Jahre Erfahrung in der Planung fernmeldetechnischer Anlagen',
      'Sichere Anwendung der einschlägigen Normen (DIN VDE, EN 50173 u.a.)',
      'Kenntnisse in gängiger CAD- und Planungssoftware',
      'Gute Deutschkenntnisse in Wort und Schrift',
    ],
    benefits: [
      'Hybrides Arbeiten mit modernem Büro in Filderstadt',
      'Vielfältige Projekte in Industrie, TK und öffentlicher Hand',
      'Weiterbildungsbudget und Normenzugang',
      '30 Urlaubstage',
      'Flexible Arbeitszeiten',
    ],
  },
  {
    slug: 'planer-elektrotechnik',
    titel: 'Mitarbeiter (m/w/d) für Planung Elektrotechnik',
    standort: 'Filderstadt',
    modell: 'Hybrid',
    kurzbeschreibung: 'Plane Stark- und Schwachstromanlagen nach DIN VDE — von Verteilungen bis Beleuchtung.',
    beschreibung: 'Als Planer:in Elektrotechnik verantwortest du die Auslegung elektrotechnischer Anlagen für Gewerbe-, Industrie- und Verwaltungsbauten — über alle Leistungsphasen nach HOAI.',
    aufgaben: [
      'Vor-, Entwurfs- und Ausführungsplanung elektrotechnischer Anlagen',
      'Berechnungen, Schemata und Stromlaufpläne',
      'Erstellung von Leistungsverzeichnissen',
      'Auslegung von Verteilungen, USV, Beleuchtung und Erdung',
      'Bauüberwachung und Abnahme',
    ],
    voraussetzungen: [
      'Abgeschlossenes Studium oder Techniker Elektrotechnik',
      'Mindestens 3 Jahre Berufserfahrung in der Anlagenplanung',
      'Sichere Anwendung von DIN VDE und einschlägigen Normen',
      'Erfahrung mit gängiger Planungssoftware (z. B. ePlan, Trimble, AutoCAD)',
      'Gute Deutschkenntnisse in Wort und Schrift',
    ],
    benefits: [
      'Hybrides Arbeiten und moderne Büroausstattung',
      'Vielseitige Projekte über alle Leistungsphasen',
      'Weiterbildungsbudget und Zertifizierungen',
      '30 Urlaubstage',
      'Flexible Arbeitszeiten',
    ],
  },
  {
    slug: 'werkstudent-projektmanagement',
    titel: 'Werkstudent (m/w/d) im Projektmanagement',
    standort: 'Filderstadt',
    modell: 'Hybrid',
    kurzbeschreibung: 'Unterstütze unser Team bei der Steuerung technischer Projekte und sammle Praxiserfahrung.',
    beschreibung: 'Als Werkstudent:in im Projektmanagement unterstützt du unsere Projektleiter:innen bei laufenden Mandaten. Du bekommst Einblick in Beratung, Projektsteuerung und Anlagenplanung — ideal für den Berufseinstieg.',
    aufgaben: [
      'Unterstützung der Projektleitung im Tagesgeschäft',
      'Pflege von Termin-, Kosten- und Risikolisten',
      'Erstellung von Präsentationen und Projektberichten',
      'Mitarbeit bei Ausschreibungs- und Vergabeunterlagen',
      'Teilnahme an Kundenterminen und internen Workshops',
    ],
    voraussetzungen: [
      'Laufendes Studium Wirtschaftsingenieurwesen, Elektrotechnik, Bauingenieurwesen oder vergleichbar',
      'Interesse an Technik, Projektmanagement und Bauwesen',
      'Sicherer Umgang mit MS Office (insb. Excel)',
      'Selbstständige und strukturierte Arbeitsweise',
      'Gute Deutschkenntnisse in Wort und Schrift',
    ],
    benefits: [
      'Flexible Arbeitszeiten neben dem Studium',
      'Praktische Erfahrung in echten Kundenprojekten',
      'Mentoring durch erfahrene Projektleiter und Berater',
      'Übernahmemöglichkeit nach dem Studium',
      'Modernes Büro in Filderstadt mit Hybrid-Option',
    ],
  },
];
