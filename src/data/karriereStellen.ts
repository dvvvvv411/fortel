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
  status?: 'Sofort verfügbar' | 'Bald verfügbar';
}

export const stellen: Stelle[] = [
  {
    slug: 'webseiten-app-tester',
    titel: 'Webseiten- & App-Tester:in (m/w/d)',
    standort: 'Remote',
    modell: 'Minijob / Teilzeit',
    arbeitszeit: 'Flexibel',
    stundenlohn: '29 €',
    status: 'Sofort verfügbar',
    kurzbeschreibung:
      'Teste Webseiten und mobile Apps aus echter Nutzersicht, dokumentiere Auffälligkeiten und gib Verbesserungsvorschläge weiter. Smartphone, Tablet oder PC reichen.',
    beschreibung:
      'Du bist regelmäßig online unterwegs und achtest darauf, ob Webseiten und Apps wirklich gut funktionieren? Als Webseiten- & App-Tester:in prüfst du digitale Anwendungen aus echter Nutzersicht und hilfst Unternehmen dabei, ihre Produkte zu verbessern. Die Aufgaben sind verständlich erklärt — Vorkenntnisse sind nicht erforderlich.',
    aufgaben: [
      'Testen von Webseiten und mobilen Apps nach einfachen Vorgaben',
      'Prüfen typischer Abläufe aus Sicht eines echten Nutzers',
      'Dokumentation von Auffälligkeiten, Fehlern und Eindrücken',
      'Weitergabe von Verbesserungsvorschlägen an unser Team',
    ],
    voraussetzungen: [
      'Zuverlässige und sorgfältige Arbeitsweise',
      'Grundlegender Umgang mit Internet, Webseiten und Apps',
      'Ein internetfähiges Gerät (Smartphone, Tablet oder PC)',
      'Eigenständiges Arbeiten und Motivation',
      'Keine spezielle Ausbildung notwendig',
    ],
    benefits: [
      'Flexible Zeiteinteilung (auch abends oder am Wochenende möglich)',
      '100 % remote — arbeite von überall',
      'Einfache Einarbeitung mit klaren Anleitungen',
      'Faire Vergütung von 29 €/h auf Stundenbasis',
      'Unkomplizierte Zusammenarbeit ohne Bürokratie',
    ],
  },
  {
    slug: 'usability-ux-tester',
    titel: 'Usability- & UX-Tester:in (m/w/d)',
    standort: 'Remote',
    modell: 'Minijob / Teilzeit',
    arbeitszeit: 'Flexibel',
    stundenlohn: '29 €',
    status: 'Bald verfügbar',
    kurzbeschreibung:
      'Bewerte konkrete Bedienabläufe, finde Stolpersteine und beschreibe sie verständlich. Ideal für strukturiert denkende Menschen mit Auge fürs Detail.',
    beschreibung:
      'Als Usability- & UX-Tester:in prüfst du, wie intuitiv sich digitale Produkte bedienen lassen. Du arbeitest dich durch vorgegebene Bedienabläufe, erkennst Stolpersteine und beschreibst sie so, dass Designer:innen und Entwickler:innen direkt etwas damit anfangen können.',
    aufgaben: [
      'Durchspielen vorgegebener Bedienabläufe in Webseiten und Apps',
      'Erkennen von Verständnis-, Navigations- und Designproblemen',
      'Strukturierte und verständliche Beschreibung der Stolpersteine',
      'Einordnung von Schwere und Häufigkeit der Auffälligkeiten',
      'Vorschläge zur Verbesserung der Nutzerführung',
    ],
    voraussetzungen: [
      'Strukturierte, aufmerksame Arbeitsweise mit Auge fürs Detail',
      'Freude daran, Beobachtungen klar in Worte zu fassen',
      'Sicherer Umgang mit gängigen Webseiten und Apps',
      'Ein internetfähiges Gerät (Smartphone, Tablet oder PC)',
      'Gute Deutschkenntnisse in Wort und Schrift',
    ],
    benefits: [
      'Flexible Arbeitszeiten — passend zu deinem Alltag',
      '100 % remote von zu Hause oder unterwegs',
      'Einarbeitung in Usability-Grundlagen inklusive',
      '29 €/h plus Bonusmöglichkeiten je nach Aufgabe',
      'Abwechslungsreiche Projekte aus verschiedenen Branchen',
    ],
  },
  {
    slug: 'app-funktionstester',
    titel: 'App-Funktionstester:in (m/w/d)',
    standort: 'Remote',
    modell: 'Minijob / Teilzeit',
    arbeitszeit: 'Flexibel',
    stundenlohn: '29 €',
    status: 'Sofort verfügbar',
    kurzbeschreibung:
      'Prüfe mobile Apps systematisch nach klaren Vorgaben, hilf bei Akzeptanztests neuer Releases und dokumentiere Fehler nachvollziehbar.',
    beschreibung:
      'Als App-Funktionstester:in prüfst du mobile Apps nach klaren Testplänen. Du arbeitest Testschritte sauber ab, hilfst bei Akzeptanztests neuer Releases und dokumentierst Fehler so, dass Entwicklerteams sie schnell beheben können.',
    aufgaben: [
      'Ausführen vorgegebener Testpläne auf iOS- und Android-Apps',
      'Mitwirkung bei Akzeptanztests neuer App-Versionen und Releases',
      'Nachvollziehbare Dokumentation von Fehlern und Reproduktionsschritten',
      'Prüfen typischer Funktionen wie Login, Bezahlvorgänge oder Benachrichtigungen',
      'Rückmeldung an unser Team über stabile und auffällige Bereiche',
    ],
    voraussetzungen: [
      'Sorgfältige, systematische Arbeitsweise',
      'Sicherer Umgang mit Smartphone und mobilen Apps',
      'Smartphone oder Tablet (iOS oder Android)',
      'Bereitschaft, Anleitungen genau zu folgen',
      'Gute Deutschkenntnisse in Wort und Schrift',
    ],
    benefits: [
      'Flexible Zeiteinteilung, auch abends und am Wochenende',
      '100 % remote — kein Pendeln, keine festen Bürozeiten',
      'Strukturierte Einarbeitung und klare Testvorgaben',
      'Stundenlohn von 29 € plus Bonusmöglichkeiten',
      'Einblick in spannende Apps vor dem offiziellen Release',
    ],
  },
];
