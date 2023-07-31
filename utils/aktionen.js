export const aktionenFuerMA = [
    {
      headline: "Persönlich",
      items: [
        {text: "Stammdaten", process: false, link: "/hra/mitarbeiterinnen/stammdaten"},
        {text: "Ausbildung", process: false, link: "/hra/mitarbeiterinnen/ausbildung"},
        {text: "Vertrag", process: false, link: "/hra/mitarbeiterinnen/vertrag"},
        {text: "Dokumente", process: false, link: "/hra/mitarbeiterinnen/dokumente"},
      ]
    },
    {
      headline: "Events & Änderungen",
      items: [
        {text: 'Namensänderung', process: true, link: '/hra/events/Namensaenderung'},
        {text: 'Hochzeit', process: true, link: '/hra/events/Hochzeit'},
        {text: 'Geburt', process: false, link: '/hra/events/Geburt'},
        {text: 'Ernennungen', process: false, link: '/hra/events/Ernennungen'},
        {text: 'Ummeldungen', process: true, link: '/hra/events/Ummeldungen'},
        {text: 'Zusatzqualifikationen', process: false, link: '/hra/events/Zusatzqualifikationen'},
        {text: 'Geschenke', process: false, link: '/hra/events/Geschenke'},
        {text: 'Jubiläum', process: true, link: '/hra/events/Jubiläum'},
      ]
    },
    {
      headline: "Temporäre Auszeiten",
      items: [
        {text: 'Karenz', process: false, link: '/hra/mitarbeiterinnen/karenz'},
        {text: 'Elternteilzeit', process: false, link: '/hra/mitarbeiterinnen/Elternteilzeit'},
        {text: 'Bildungskarenz', process: true, link: '/hra/mitarbeiterinnen/Bildungskarenz'},
        // {text: 'Wochenhilfe', process: false, link: '/hra/mitarbeiterinnen/Wochenhilfe'},
        {text: 'Unbezahlter Urlaub', process: true, link: '/hra/mitarbeiterinnen/UnbezahlterUrlaub'},
        {text: 'Milizübungen', process: false, link: '/hra/mitarbeiterinnen/Milizübungen'},
        // {text: 'Teilzeit', process: false, link: '/hra/mitarbeiterinnen/Teilzeit'},
        // {text: 'Geringfügigkeiten', process: false, link: '/hra/mitarbeiterinnen/Geringfügigkeiten'},
      ]
    },
   {
      headline: "Austritt",
      items: [
        {text: 'Kündigung', process: false, link: '/hra/mitarbeiterinnen/karenz'},
        {text: 'DG Kündigung', process: false, link: '/hra/mitarbeiterinnen/Bildungskarenz'},
        {text: 'Pension', process: false, link: '/hra/mitarbeiterinnen/Karenz'},
        {text: 'Todesfall', process: false, link: '/hra/mitarbeiterinnen/Wochenhilfe'},
      ]
    }
  ]