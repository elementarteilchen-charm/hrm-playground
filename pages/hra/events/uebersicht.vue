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
  
  <main class="grid  gap-8">

    <div v-for="event in eventHistory" class="flex gap-4">
      <div class="font-bold">
        {{event.event}}
      </div>
      <div class="font-bold">
        {{mitarbeiterListe[event.maIndex].name}} {{mitarbeiterListe[event.maIndex].vorname}} 
      </div>
      <div>
        {{event.start}}
      </div>
    </div>
    

  </main>

</template>

<style>  
</style>