<script setup>
  import {
    ChevronRightIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon,  } 
      from '@heroicons/vue/24/outline'

  const aktionen = {
    stammdaten: {
      headline: "Stammdaten",
      items: [
        {text: "Stammdaten", link: "/hra/mitarbeiterinnen/stammdaten"},
        {text: "Ausbildung", link: "/hra/mitarbeiterinnen/ausbildung"},
        {text: "Vertrag", link: "/hra/mitarbeiterinnen/vertrag"},
        {text: "Dokumente", link: "/hra/mitarbeiterinnen/dokumente"},
      ]
    },
    events: {
      headline: "Events & Änderungen",
      items: [
        {text: 'Hochzeit', link: '/hra/events/Hochzeit'},
        {text: 'Namensaenderung', link: '/hra/mitarbeiterinnen/Namensaenderung'},
        {text: 'Geburt', link: '/hra/mitarbeiterinnen/Geburt'},
        {text: 'Ernennungen', link: '/hra/mitarbeiterinnen/Ernennungen'},
        {text: 'Ummeldungen', link: '/hra/events/Ummeldungen'},
        {text: 'Arbeitszeitmodell', link: '/hra/mitarbeiterinnen/Arbeitszeitmodell'},
        {text: 'Signatur', link: '/hra/mitarbeiterinnen/Signatur'},
        {text: 'Visitenkarten', link: '/hra/mitarbeiterinnen/Visitenkarten'},
        {text: 'Zusatzqualifikationen', link: '/hra/mitarbeiterinnen/Zusatzqualifikationen'},
        {text: 'Geschenke', link: '/hra/mitarbeiterinnen/Geschenke'},
        {text: 'Jubiläum', link: '/hra/mitarbeiterinnen/Jubiläum'},
      ]
    },
    auszeiten: {
      headline: "Temporäre Auszeiten",
      items: [
        {text: 'Karenz', link: '/hra/mitarbeiterinnen/karenz'},
        {text: 'Bildungskarenz', link: '/hra/mitarbeiterinnen/Bildungskarenz'},
        {text: 'Karenz', link: '/hra/mitarbeiterinnen/Karenz'},
        {text: 'Wochenhilfe', link: '/hra/mitarbeiterinnen/Wochenhilfe'},
        {text: 'Unbezahlter Urlaub', link: '/hra/mitarbeiterinnen/UnbezahlterUrlaub'},
        {text: 'Milizübungen', link: '/hra/mitarbeiterinnen/Milizübungen'},
        {text: 'Teilzeit', link: '/hra/mitarbeiterinnen/Teilzeit'},
        {text: 'Elternteilzeit', link: '/hra/mitarbeiterinnen/Elternteilzeit'},
        {text: 'Geringfügigkeiten', link: '/hra/mitarbeiterinnen/Geringfügigkeiten'},
      ]
    },
    austritt: {
      headline: "Austritt",
      items: [
        {text: 'Kündigung', link: '/hra/mitarbeiterinnen/karenz'},
        {text: 'DG Kündigung', link: '/hra/mitarbeiterinnen/Bildungskarenz'},
        {text: 'Pension', link: '/hra/mitarbeiterinnen/Karenz'},
        {text: 'Todesfall', link: '/hra/mitarbeiterinnen/Wochenhilfe'},
      ]
    }
  } 
  const eventHistory = [
      { event: 'Hochzeit', maIndex: 1, start: '2023-06-11'},
      { event: 'Adressänderung', maIndex: 2, start: '2023-05-21'},
      { event: 'Karenz', maIndex: 0, start: '2023-04-01'},
      { event: 'Geburt', maIndex: 0, start: '2023-03-01'},
      { event: 'Geburt', maIndex: 2, start: '2023-02-01'}
    ]
</script>

<template>
    <div class="my-3 text-3xl font-light text-Blaugrau">
      Übersicht
    </div>
  
  <div class="my-3 flex gap-2 items-center w-full">
      <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
  </div>
  <main class="grid grid-cols-2 gap-8">

    <div class="bg-white p-4 rounded">
      <header class="font-bold text-xl mb-2">
        Events & Änderungen
      </header>
      <main>
        <ul class="space-y-1">
          <li v-for="item in aktionen.events.items" class="">
            <a :href="item.link" class="">
              <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau transition">
                <div class="p-1  transition">
                  <ChevronRightIcon class="w-4 h-4"/>                    
                </div>
                {{item.text}}
              </div>
            </a>
          </li>
        </ul>
      </main>
    </div>

    <div class="bg-Hellgrau p-4 rounded">
      <header class="font-bold text-xl mb-2">
        Letzte Aktionen
      </header>
      <table class="table-auto w-full">
        <thead class="bg-gray-100">
          <tr>
            <th class="text-left py-1 px-1">Mitarbeiter*in</th>
            <th class="text-left py-1 px-1">Aktion</th>
            <th class="py-1 px-1">Datum</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in eventHistory" class="border-b">
            <td >
              {{mitarbeiterListe[event.maIndex].name}} {{mitarbeiterListe[event.maIndex].vorname}}     
            </td>
            <td class="py-1 px-1">
              {{event.event}}
            </td>
            <td class="text-center">
              {{event.start}}
            </td>
          </tr>
          
        </tbody>
      </table>
          
    </div>
    

  </main>

</template>

<style>  
</style>