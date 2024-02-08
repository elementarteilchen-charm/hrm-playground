export  const topMenuItems = [
      {
        linkText: "Stammdaten",
        link: "/hra/mitarbeiterinnen/stammdaten",
      },
      {
        linkText: "Firmendaten",
        link: "/hra/firmendaten/",
      },
      {
        linkText: "Datenschutz",
        link: "/hra/datenschutz",
      },
      {
        linkText: "Werdegang",
        link: "/hra/mitarbeiterinnen/ausbildung",
      },
      {
        linkText: "Vertrag",
        link: "/hra/mitarbeiterinnen/vertrag",
      },
      {
        linkText: "Dokumente",
        link: "/hra/dokumente",
      },
    ];



export  const eventMenuItems = [
      {
        linkText: "Namensänderung",
        link: "/hra/events/Namensaenderung",
      },
      {
        linkText: "Hochzeit",
        link: "/hra/events/Hochzeit-stepper",
      },

      {
        linkText: "Geburt",
        link: "/hra/events/Geburt",
      },
      {
        linkText: "Ernennungen",
        link: "/hra/events/Ernennungen",
      },
      {
        linkText: "Ummeldungen",
        link: "/hra/events/Ummeldungen",
      },
      {
        linkText: "Geschenke",
        link: "/hra/events/Geschenke",
      },
      {
        linkText: "Jubiläum",
        link: "/hra/events/Jubiläum",
      }
    ];

  export const eventsAktionen = {
    stammdaten: {
      headline: "Stammdaten",
      items: [
        { 
          text: "Stammdaten", 
          link: "/hra/mitarbeiterinnen/stammdaten",
          erinnerungen: 1
        },
        { 
          text: "Ausbildung", 
          link: "/hra/mitarbeiterinnen/ausbildung",
          erinnerungen: 0
        },
        { 
          text: "Vertrag", 
          link: "/hra/mitarbeiterinnen/vertrag",
          erinnerungen: 0
        },
        { 
          text: "Dokumente", 
          link: "/hra/mitarbeiterinnen/dokumente",
          erinnerungen: 0
        },
      ]
    },
    events: {
      headline: "Events & Änderungen",
      items: [
        { 
          text: 'Hochzeit', 
          link: '/hra/events/Hochzeit-stepper',
          erinnerungen: 2
        },
        { 
          text: 'Hochzeit AllInOne', 
          link: '/hra/events/Hochzeit-allinone',
          erinnerungen: 0
        },
        { 
          text: 'Namensaenderung', 
          link: '/hra/events/Namensaenderung',
          erinnerungen: 0
        },
        { 
          text: 'Geburt', 
          link: '/hra/events/Geburt',
          erinnerungen: 0
        },
        { 
          text: 'Ernennungen', 
          link: '/hra/events/Ernennungen',
          erinnerungen: 0
        },
        { 
          text: 'Ummeldungen', 
          link: '/hra/events/Ummeldungen',
          erinnerungen: 0
        },
        { 
          text: 'Arbeitszeitmodell', 
          link: '/hra/events/Arbeitszeitmodell',
          erinnerungen: 0
        },
        { 
          text: 'Signatur', 
          link: '/hra/events/Signatur',
          erinnerungen: 0
        },
        { 
          text: 'Visitenkarten', 
          link: '/hra/events/Visitenkarten',
          erinnerungen: 1
        },
        { 
          text: 'Zusatzqualifikationen', 
          link: '/hra/events/Zusatzqualifikationen',
          erinnerungen: 0
        },
        { 
          text: 'Geschenke', 
          link: '/hra/events/Geschenke',
          erinnerungen: 0
        },
        { 
          text: 'Jubiläum', 
          link: '/hra/events/Jubiläum',
          erinnerungen: 0
        },
      ]
    },
    auszeiten: {
      headline: "Temporäre Auszeiten",
      items: [
        { 
          text: 'Wochenhilfe', 
          link: '/hra/abwesenheiten/Wochenhilfe',
          erinnerungen: 0
        },
        { 
          text: 'Elternkarenz', 
          link: '/hra/abwesenheiten/elternkarenz',
          erinnerungen: 0
        },
        { 
          text: 'Papamonat', 
          link: '/hra/abwesenheiten/Karenz',
          erinnerungen: 0
        },
        { 
          text: 'Elternteilzeit', 
          link: '/hra/abwesenheiten/Elternteilzeit',
          erinnerungen: 0
        },
        { 
          text: 'Bildungskarenz', 
          link: '/hra/abwesenheiten/Bildungskarenz',
          erinnerungen: 0
        },
        { 
          text: 'Unbezahlter Urlaub', 
          link: '/hra/abwesenheiten/UnbezahlterUrlaub',
          erinnerungen: 0
        },
        { 
          text: 'Milizübungen', 
          link: '/hra/abwesenheiten/Milizübungen',
          erinnerungen: 0
        },
        { 
          text: 'Teilzeit', 
          link: '/hra/abwesenheiten/Teilzeit',
          erinnerungen: 0
        },
      ]
    },
    austritt: {
      headline: "Austritt",
      items: [
        { 
          text: 'Kündigung', 
          link: '/hra/austritt/Kuendigung',
          erinnerungen: 0
        },
        { 
          text: 'DG Kündigung', 
          link: '/hra/austritt/Kuendigung',
          erinnerungen: 0
        },
        { 
          text: 'Pensionierung', 
          link: '/hra/austritt/Pensionierung',
          erinnerungen: 0
        },
        { 
          text: 'Todesfall', 
          link: '/hra/austritt/Todesfall',
          erinnerungen: 0
        },
      ]
    }
  } 
export  const abwesenheitenMenuItems = [
      {
        linkText: "Karenz",
        link: "/hra/abwesenheiten/elternkarenz",
      },
      {
        linkText: "Familienzeit",
        link: "/hra/abwesenheiten/familienzeit",
      },
      {
        linkText: "Bildungskarenz",
        link: "/hra/abwesenheiten/Bildungskarenz",
      },
      {
        linkText: "Milizübung",
        link: "/hra/abwesenheiten/Milizuebung",
      },
      {
        linkText: "Wehr- & Zivildienst  ",
        link: "/hra/abwesenheiten/wehrdienst",
      },
      {
        linkText: "Unbezahlter Urlaub",
        link: "/hra/abwesenheiten/unbezahlterurlaub",
      },
      {
        linkText: "Langzeit Krankenstand ",
        link: "/hra/abwesenheiten/langzeitkrankenstand",
      },

    ];
