import { LucideIcon } from 'lucide-react';

export interface NavColumnItem {
  title: string;
  href: string;
}

export interface NavColumn {
  title: string;
  items: NavColumnItem[];
}

export interface MegaMenu {
  id: string;
  columns: NavColumn[];
}

export interface NavItem {
  title: string;
  icon?: LucideIcon;
  megaMenu: MegaMenu;
  href?: string;
}

export const navItems: NavItem[] = [
  {
    title: "IT-Berufe",
    megaMenu: {
      id: "mega-menu-1",
      columns: [
        {
          title: "Fachinformatiker",
          items: [
            { title: "Anwendungsentwicklung", href: "/berufe/fiae" },
            { title: "Systemintegration", href: "/berufe/fisi" },
            { title: "Daten- und Prozessanalyse", href: "/berufe/fidp" },
            { title: "Digitale Vernetzung", href: "/berufe/fidv" },
          ]
        },
        {
          title: "Weitere IT-Berufe",
          items: [
            { title: "IT-Systemelektroniker", href: "/berufe/itse" },
            { title: "Kaufmann für Digitalisierungsmanagement", href: "/berufe/kdm" },
            { title: "Kaufmann für IT-System-Management", href: "/berufe/kism" },
          ]
        },
        {
          title: "Überblick",
          items: [
            { title: "Berufsvergleich", href: "/vergleich" },
            { title: "Gehälter & Perspektiven", href: "/gehaelter" },
            { title: "Zukunftsaussichten", href: "/zukunft" },
          ]
        }
      ]
    }
  },
  {
    title: "Berufswahl & Start",
    megaMenu: {
      id: "mega-menu-2",
      columns: [
        {
          title: "Berufsorientierung",
          items: [
            { title: "Berufseignungstest", href: "/orientierung/test" },
            { title: "Welcher IT-Beruf passt zu mir?", href: "/orientierung/berufstest" },
            { title: "Voraussetzungen & Anforderungen", href: "/orientierung/voraussetzungen" },
            { title: "Ausbildungsinhalte im Überblick", href: "/orientierung/inhalte" },
          ]
        },
        {
          title: "Bewerbung",
          items: [
            { title: "Bewerbungsratgeber", href: "/bewerbung/ratgeber" },
            { title: "Vorstellungsgespräch", href: "/bewerbung/vorstellungsgespraech" },
            { title: "Einstellungstest", href: "/bewerbung/einstellungstest" },
            { title: "Bewerbungsmuster", href: "/bewerbung/muster" },
          ]
        },
        {
          title: "Ausbildungsplatzsuche",
          items: [
            { title: "Stellenbörse", href: "/ausbildung/stellen" },
            { title: "Top Ausbildungsbetriebe", href: "/ausbildung/betriebe" },
            { title: "Ausbildungsstart & Termine", href: "/ausbildung/termine" },
          ]
        }
      ]
    }
  },
  {
    title: "Ausbildung & Praxis",
    megaMenu: {
      id: "mega-menu-3",
      columns: [
        {
          title: "Prüfungsvorbereitung",
          items: [
            { title: "AP Teil 1 Vorbereitung", href: "/pruefung/teil1" },
            { title: "AP Teil 2 Vorbereitung", href: "/pruefung/teil2" },
            { title: "Projektarbeit", href: "/pruefung/projektarbeit" },
            { title: "Prüfungstermine", href: "/pruefung/termine" },
          ]
        },
        {
          title: "Lernmaterialien",
          items: [
            { title: "Online-Kurse", href: "/lernen/kurse" },
            { title: "Übungsaufgaben", href: "/lernen/uebungen" },
            { title: "Lerngruppen", href: "/lernen/gruppen" },
            { title: "Nachhilfe finden", href: "/lernen/nachhilfe" },
          ]
        },
        {
          title: "Hilfe & Support",
          items: [
            { title: "Rechtliche Fragen", href: "/hilfe/recht" },
            { title: "Ausbildungsberatung", href: "/hilfe/beratung" },
            { title: "Konflikte lösen", href: "/hilfe/konflikte" },
          ]
        }
      ]
    }
  },
  {
    title: "Karriere & Entwicklung",
    megaMenu: {
      id: "mega-menu-4",
      columns: [
        {
          title: "Weiterbildung",
          items: [
            { title: "Zertifizierungen", href: "/karriere/zertifizierungen" },
            { title: "Studium nach Ausbildung", href: "/karriere/studium" },
            { title: "Fortbildungen", href: "/karriere/fortbildungen" },
            { title: "Förderungsmöglichkeiten", href: "/karriere/foerderung" },
          ]
        },
        {
          title: "Berufliche Entwicklung",
          items: [
            { title: "Karrierewege", href: "/karriere/wege" },
            { title: "Gehaltsverhandlung", href: "/karriere/gehalt" },
            { title: "Jobwechsel", href: "/karriere/jobwechsel" },
            { title: "Führungsposition", href: "/karriere/fuehrung" },
          ]
        },
        {
          title: "Spezialisierung",
          items: [
            { title: "Cloud Computing", href: "/karriere/cloud" },
            { title: "Cybersecurity", href: "/karriere/security" },
            { title: "KI & Machine Learning", href: "/karriere/ki" },
            { title: "DevOps", href: "/karriere/devops" },
          ]
        }
      ]
    }
  },
  {
    title: "News & Ressourcen",
    megaMenu: {
      id: "mega-menu-5",
      columns: [
        {
          title: "Wissensdatenbank",
          items: [
            { title: "IT-Lexikon", href: "/wissen/lexikon" },
            { title: "Fachbegriffe", href: "/wissen/begriffe" },
            { title: "Technologien", href: "/wissen/technologien" },
            { title: "Best Practices", href: "/wissen/best-practices" },
          ]
        },
        {
          title: "Blog & News",
          items: [
            { title: "Aktuelle Trends", href: "/blog/trends" },
            { title: "Erfahrungsberichte", href: "/blog/erfahrungen" },
            { title: "Interviews", href: "/blog/interviews" },
            { title: "Branchennews", href: "/blog/news" },
          ]
        },
        {
          title: "Downloads & Tools",
          items: [
            { title: "Checklisten", href: "/downloads/checklisten" },
            { title: "Vorlagen", href: "/downloads/vorlagen" },
            { title: "E-Books", href: "/downloads/ebooks" },
            { title: "Lerntools", href: "/downloads/tools" },
          ]
        }
      ]
    }
  }
];