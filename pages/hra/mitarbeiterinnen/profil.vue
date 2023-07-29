<script setup>
  import {
    ChevronRightIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, PlusCircleIcon } 
      from '@heroicons/vue/24/outline'

  const aktionen = {
    stammdaten: {
      headline: "Stammdaten",
      items: [
        {text: "Stammdaten", process: false, link: "/hra/mitarbeiterinnen/stammdaten"},
        {text: "Ausbildung", process: false, link: "/hra/mitarbeiterinnen/ausbildung"},
        {text: "Vertrag", process: false, link: "/hra/mitarbeiterinnen/vertrag"},
        {text: "Dokumente", process: false, link: "/hra/mitarbeiterinnen/dokumente"},
      ]
    },
    events: {
      headline: "Events & Änderungen",
      items: [
        {text: 'Hochzeit', process: true, link: '/hra/events/Hochzeit'},
        {text: 'Namensaenderung', process: true, link: '/hra/events/Namensaenderung'},
        {text: 'Geburt', process: false, link: '/hra/events/Geburt'},
        {text: 'Ernennungen', process: false, link: '/hra/events/Ernennungen'},
        {text: 'Ummeldungen', process: true, link: '/hra/events/Ummeldungen'},
        // {text: 'Arbeitszeitmodell', process: false, link: '/hra/events/Arbeitszeitmodell'},
        // {text: 'Signatur', process: false, link: '/hra/events/Signatur'},
        // {text: 'Visitenkarten', process: false, link: '/hra/events/Visitenkarten'},
        {text: 'Zusatzqualifikationen', process: false, link: '/hra/events/Zusatzqualifikationen'},
        {text: 'Geschenke', process: false, link: '/hra/events/Geschenke'},
        {text: 'Jubiläum', process: true, link: '/hra/events/Jubiläum'},
      ]
    },
    auszeiten: {
      headline: "Temporäre Auszeiten",
      items: [
        {text: 'Karenz', process: false, link: '/hra/mitarbeiterinnen/karenz'},
        {text: 'Bildungskarenz', process: true, link: '/hra/mitarbeiterinnen/Bildungskarenz'},
        {text: 'Karenz', process: false, link: '/hra/mitarbeiterinnen/Karenz'},
        {text: 'Elternteilzeit', process: false, link: '/hra/mitarbeiterinnen/Elternteilzeit'},
        {text: 'Wochenhilfe', process: false, link: '/hra/mitarbeiterinnen/Wochenhilfe'},
        {text: 'Unbezahlter Urlaub', process: true, link: '/hra/mitarbeiterinnen/UnbezahlterUrlaub'},
        {text: 'Milizübungen', process: false, link: '/hra/mitarbeiterinnen/Milizübungen'},
        // {text: 'Teilzeit', process: false, link: '/hra/mitarbeiterinnen/Teilzeit'},
        // {text: 'Geringfügigkeiten', process: false, link: '/hra/mitarbeiterinnen/Geringfügigkeiten'},
      ]
    },
    austritt: {
      headline: "Austritt",
      items: [
        {text: 'Kündigung', process: false, link: '/hra/mitarbeiterinnen/karenz'},
        {text: 'DG Kündigung', process: false, link: '/hra/mitarbeiterinnen/Bildungskarenz'},
        {text: 'Pension', process: false, link: '/hra/mitarbeiterinnen/Karenz'},
        {text: 'Todesfall', process: false, link: '/hra/mitarbeiterinnen/Wochenhilfe'},
      ]
    }
  } 
</script>

<template>
  <div class="flex items-center py-3 justify-between">
      <h1 class="my-3 text-3xl font-light text-Blaugrau">
          Persönliche Daten bearbeiten
      </h1>
      <HRAMitarbeiterSuchfeld class="w-1/3"/>
      {{activeTab}}
  </div>
  
  <HRAMitarbeiterInfoBox class="mb-6"/>

  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    <div>
      Liste der letzten Aktionen 
    </div>
    <div class="grid grid-cols-4 gap-12">
      <div v-for="aktion in aktionenFuerMA" class="bg-white p-3 rounded">
        <header class="font-bold text-xl mb-2">
          {{aktion.headline}}
        </header>
        <main>
          <ul class="space-y-1">
            <li v-for="item in aktion.items" class="">

              <a :href="item.link" class="">
                <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau transition">
                  <div class="p-1  transition">
                    <ChevronRightIcon v-show="!item.process" class="w-4 h-4"/>
                    <PlusCircleIcon v-show="item.process" class="w-4 h-4"/>
                  </div>
                  {{item.text}}
                </div>
              </a>
            </li>
          </ul>
        </main>
      </div>

    </div>
    

  </main>

</template>

<style>  
</style>