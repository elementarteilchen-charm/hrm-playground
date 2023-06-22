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
        {text: 'Namensaenderung', link: '/hra/events/Namensaenderung'},
        {text: 'Geburt', link: '/hra/events/Geburt'},
        {text: 'Ernennungen', link: '/hra/events/Ernennungen'},
        {text: 'Ummeldungen', link: '/hra/events/Ummeldungen'},
        {text: 'Arbeitszeitmodell', link: '/hra/events/Arbeitszeitmodell'},
        {text: 'Signatur', link: '/hra/events/Signatur'},
        {text: 'Visitenkarten', link: '/hra/events/Visitenkarten'},
        {text: 'Zusatzqualifikationen', link: '/hra/events/Zusatzqualifikationen'},
        {text: 'Geschenke', link: '/hra/events/Geschenke'},
        {text: 'Jubiläum', link: '/hra/events/Jubiläum'},
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
</script>

<template>
    <div class="my-3 text-3xl font-light text-Blaugrau">
      Mitarbeiter*in
    </div>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    <div class="my-6">
      <HRAProfilHeader />
    </div>
    <div>
      Liste der letzten Aktionen
    </div>
    <div class="grid grid-cols-4 gap-12">
      <div class="bg-white p-3 rounded">
        <header class="font-bold text-xl mb-2">
          Stammdaten
        </header>
        <main>
          <ul class="space-y-1">
            <li v-for="item in aktionen.stammdaten.items" class="">
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

      <div class="bg-white p-3 rounded">
        <header class="font-bold text-xl mb-2">
          Auszeiten
        </header>
        <main>
          <ul class="space-y-1">
            <li v-for="item in aktionen.auszeiten.items" class="">
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
      <div class="bg-white p-3 rounded">
        <header class="font-bold text-xl mb-2">
          Austritt
        </header>
        <main>
          <ul class="space-y-1">
            <li v-for="item in aktionen.austritt.items" class="">
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
    </div>
    

  </main>

</template>

<style>  
</style>