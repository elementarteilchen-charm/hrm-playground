export const angehoerige = [
    {
      notfallkontakt: true,
      nachweis: false,
      verwandtschaftsgrad: 'Bruder',
      anrede: 'Hr.',
      name: 'Babunek',
      vorname: 'Robert',
      telefon: '+43 676 444 3456',
      handy: '',
    },
    {
      notfallkontakt: false,
      nachweis: true,
      verwandtschaftsgrad: 'Ehemann',
      anrede: 'Hr.',
      name: 'Babunek',
      vorname: 'Peter',
      telefon: '',
      handy: '',
    }

  ];
export const ordner = [
      '01 Bewerbungen und Zeugnisse', '02 Bewilligungen', '03 Verträge', '04 Infos + Beurteilungen', '05 Dokumente + Urkunden', '07 Diverses', '08 Austritt'
  ];
export  const dokumentKategorien_volleListe = [
      "Anmeldebescheinigung", "Arbeitsbestätigung", "Aufenthaltstitel", "Beschäftigungsbewilligung", "Datenschutzerklärung",
      "Dienstvertrag", "Diplom", "Ersatz", "FXT", "HAS", "Homeoffice", "Inskriptionsbestätigung", "Konkurrenzklausel",
      "Lehrabschlussprüfung", "Maturazeugnis", "Meldezettel", "Personalausweis", "Personaldatenblatt", "Reisepass", "RWR",
      "Schuldaten", "Schulzeugnisse", "Sprachzertifikate", "Uni", "Verpflichtungserklärung",
  ];

export  const dokumentKategorien = [
      "-", "Anmeldebescheinigung", "Lebenslauf", "Dokument (allgemein)", "Bestätigung (allgemein)", "Meldezettel", "Reisepasskopie", "Aufenthaltstitel",
      "Dienstvertrag", "(Aus)bildung", "Dienstzeugnisse", "Abschlusszeugnis / Diplom / Inskriptionsbestätigung", "Sonstiges"
  ];

export  const bewerberUploads = [
      'Lebenslauf Babunek.pdf', 'Motivationsschreiben Stephanie Babunek.pdf',
      'Meldezettel.pdf', 'Email Zusage.msg', 'Reisepass.jpg', 'Zeugnis Bachelor Babunek 2019.pdf'
  ];
export const bewerberDokumente = [{
          uploadDateiname: "Lebenslauf Babunek.pdf",
          ordner: "01 Bewerbungen und Zeugnisse",
          digitaleAkteDateiname: "2023-03-14 [ Lebenslauf Babunek ].pdf",
          kategorie: "Lebenslauf",
          uebernehmen: true,
      },
      {
          uploadDateiname: "Motivationsschreiben Stephanie Babunek.pdf",
          ordner: "01 Bewerbungen und Zeugnisse",
          digitaleAkteDateiname: "2023-03-14 [ Motivationsschreiben Stephanie Babunek ].pdf",
          uebernehmen: false,
      },
      {
          uploadDateiname: "Reisepass Babunek.pdf",
          ordner: "05 Dokumente + Urkunden",
          digitaleAkteDateiname: "2023-03-14 [ Reisepass Babunek ].pdf",
          uebernehmen: true,
          kategorie: "Reisepasskopie",
      },
      {
          uploadDateiname: "Babunek Bescheid Beschäftigungsbewilligung.pdf",
          ordner: "02 Bewilligungen",
          digitaleAkteDateiname: "2023-03-14 [ Reisepass Babunek ].pdf",
          uebernehmen: true,
      },
      {
          uploadDateiname: "Praktikumsbestätigung.pdf",
          ordner: "01 Bewerbungen und Zeugnisse",
          digitaleAkteDateiname: "2023-03-14 [ Praktikumsbestätigung Babunek 2021].pdf",
          uebernehmen: false,
      },
      {
          uploadDateiname: "Email Zusage.msg",
          ordner: "07 Diverses",
          digitaleAkteDateiname: "2023-03-14 [ Email Zusage ].msg",
          uebernehmen: false,
      },

  ];