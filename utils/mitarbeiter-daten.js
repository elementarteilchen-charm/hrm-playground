export const mitarbeiterListe = [{
        anrede: 'Frau',
        vorname: 'Regina',
        name: 'Aberl',
        strasse: 'Zuhausegasse 33/12',
        plz: '2530',
        ort: 'Wiener Neustadt',
        land: 'Österreich',
        taetigkeit: 'Transport Manager (TM)',
        abteilungen: ['Trucking IT - Ost • V13T00', 'GD IT,ES,PT - PL,CZ,SK • VG14C', 'VDI IT / ES / PT (W) / Hirzer•VDA3', 'SMO Hr. Ehrenhöfer•SMO1'],
        mandant: 'LKW',
        standort: 'WND',
        pnr: 15436,
        email: 'aberl@lkw-walter.com',
        email_privat: 'regina@aberl.com',
        geburtsdatum: '23.04.1988',
        alter: 35,
        staatsbuergerschaft: 'AT',
        staatsbuergerschaft2: 'SK',
        kontonummer: 'AT88 1234 4567 2345 9874',
        eintrittstag: '02.01.2024',
        durchwahl: '2002',
        mobil: '+43 664 88370265',
        avatar: 'avatar-2.jpg',
        sprachkenntnisse: [{
                sprache: 'Deutsch',
                niveau: 'C2',
                muttersprache: true,
            },
            {
                sprache: 'Italienisch',
                niveau: 'B2',
                muttersprache: false,
            },
            {
                sprache: 'Englisch',
                niveau: 'A2',
                muttersprache: false,
            },
        ],
        zusatzqualifikationen: [{
                bezeichnung: 'Brandschutzwart',
                bewertet_von: 'Gutwinski 11.03.2016',
                bemerkung: 'Zirkular Nr. 1953',
                erworben_am: '10.02.2016',
                gueltig_bis: '',
            },
            {
                bezeichnung: 'Abfallbeauftragter',
                bewertet_von: 'Kandisky 11.03.2018',
                bemerkung: 'Zirkular Nr. 3253',
                erworben_am: '10.02.2018',
                gueltig_bis: '01.01.2020',
            },
            {
                bezeichnung: 'Sicherheitsfachkraft',
                bewertet_von: 'Ehrenreich 11.03.2021',
                bemerkung: 'Zirkular Nr. 4353',
                erworben_am: '10.03.2021',
                gueltig_bis: '',
            },
        ],
        vordienstzeiten: [
            { von: '01.04.2009', bis: '31.03.2014', anrechenbare_zeit: 0, beruf: 'nicht erfasst', firma: 'Anecon' },
            { von: '01.05.2001', bis: '31.07.2008', anrechenbare_zeit: 32.00, beruf: 'nicht erfasst', firma: 'ONE GmbH., Wien 21' },
            { von: '01.03.1999', bis: '30.06.2000', anrechenbare_zeit: 16.00, beruf: 'nicht erfasst', firma: 'Softcom, Wien 12' },
            { von: '01.10.1987', bis: '14.06.1988', anrechenbare_zeit: 0, beruf: 'nicht erfasst', firma: 'Öst.Bundesheer' },
        ],
        abwesenheiten: [
            { art: "Bildungskarenz", von: '2024-04-01', bis: '2024-08-31', wiedereintritt: '2024-09-01',  aktiv: true, bemerkung: '' },
            { art: "Unbezahlter Urlaub", von: '2019-09-01', bis: '2019-09-30', wiedereintritt: '2019-10-02',  bemerkung: 'Vorzeitig beendet.' },
            { art: "Bildungskarenz", von: '2014-05-01', bis: '2015-04-30', wiedereintritt: '',  bemerkung: 'Karenzverlängerung' },
            { art: "Elternkarenz", von: '2013-05-01', bis: '2014-04-30', wiedereintritt: '',  bemerkung: 'Von 2 Jahren auf 18 Monate verkürzt.' },
            { art: "Elternkarenz", von: '2009-04-01', bis: '2011-03-31', wiedereintritt: '',  bemerkung:  '' },
        ],
        events: [
            { art: "Geburt", von: '2023-11-18', bis: '', aktiv: false },
            { art: "Hochzeit", von: '2022-05-22', bis: '', aktiv: false },
        ]
    },
    {
        anrede: 'Herr',
        vorname: 'Patrick',
        name: 'Andor',
        taetigkeit: 'Transport Manager (TM)',
        abteilungen: ['Trucking IT - Ost•V13T00', 'GD IT,ES,PT - PL,CZ,SK•VG14C', 'VDI IT / ES / PT (W) / Hirzer•VDA3', 'SMO Hr. Ehrenhöfer•SMO1'],
        mandant: 'LKW',
        standort: 'WND',
        email: 'andor@lkw-walter.com',
        email_privat: 'pat@andor.at',
        geburtsdatum: '4.3.2000',
        durchwahl: '2002',
        mobil: '+43 664 88370265',
        avatar: 'avatar-3.jpg'
    },
    {
        anrede: 'Herr',
        vorname: 'Sebastian',
        name: 'Andor',
        taetigkeit: 'Customer Service (CS)',
        abteilungen: ['GD GB - DE-Süd / IE - DE•VG26D', 'VDI GB,IE - DE,AT,CZ,SK,PL,Skandi / Lackner', 'SMO Hr. Schauer•SMO3'],
        mandant: 'LKW',
        standort: 'WND',
        email: 'sebastian.andor@lkw-walter.com',
        email_privat: 'sando@gmx.at',
        geburtsdatum: '14.9.1987',
        durchwahl: '2002',
        mobil: '+43 664 88370265',
        avatar: 'avatar-5.jpg'
    },

    {
        anrede: 'Herr',
        vorname: 'Daniel',
        name: 'Steiner',
        taetigkeit: 'Human Resource Recruiting (SSG)',
        abteilungen: ['Human Resource Recruiting • 54400', 'Human Resource Management • HRM1', 'Human Resource Management • HRM', 'Vorstand Hr. Höfler•VST4'],
        mandant: 'LKW',
        standort: 'KUF',
        email: 'steiner@lkw-walter.com',
        email_privat: 'danidani@steiner.at',
        geburtsdatum: '8.6.1999',
        durchwahl: '2004',
        mobil: '+43 664 88370265',
        avatar: 'avatar-4.jpg'
    },

]
export const historieAbwesenheiten = [
    "Bis-Datum eingetragen. Martina Daum am 23.05.2024 um 9:42",
    "Dokument 'Nachweis.pdf' hochgeladen. Petra Koller am 21.05.2024 um 14:12",
    "Von-Datum eingetragen. Petra Koller am 03.05.2024 um 10:18",
]