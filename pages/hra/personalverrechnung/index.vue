<script setup>
  import {
    ChevronRightIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon,  } 
      from '@heroicons/vue/24/outline'

  const aktionen = {
    stammdaten: {
      headline: "Eintritt",
      items: [
        {text: "Geplante Eintritte", link: "/hra/personalverrechnung/geplanteEintritte"},
        {text: "Vertrag", link: "/hra/mitarbeiterinnen/vertrag"},
        {text: "Dokumente", link: "/hra/mitarbeiterinnen/dokumente"},
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
    
  } 
</script>

<template>
  <div class="my-3 text-3xl font-light text-Blaugrau">
    Personalverrechnung
  </div>
  <Anmerkung>
    Wird nur Personen mit dem Personalverrechnungs-Recht angezeigt
  </Anmerkung>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    
<!--     <div class="my-6">
      <HRAProfilHeader />
    </div> -->

    <div class="my-3 flex gap-2 items-center w-full">
        <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
    </div>   

    <div>
      Liste der letzten Aktionen
    </div>
    <div class="grid grid-cols-4 gap-12">
      <div v-for="aktion in aktionen" class="bg-white p-3 rounded">
        <header class="font-bold text-xl mb-2">
          {{aktion.headline}}
        </header>
        <main>
          <ul class="space-y-1">
            <li v-for="item in aktion.items" class="">
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
      <!-- <div class="bg-white p-3 rounded">
        <header class="font-bold text-xl mb-2">
          Eintritte
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
      </div> -->
     <!--  <div class="bg-white p-3 rounded">
        <header class="font-bold text-xl mb-2">
          Austritte
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
      </div> -->

      <!-- <div class="bg-white p-4 rounded">
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
        
      </div> -->

    </div>
    

  </main>

</template>

<style>  
</style>