<script setup>
  import {
    ChevronRightIcon, ChevronDownIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon,  } 
      from '@heroicons/vue/24/outline'

    const bisherigeEvents = [
      { 
        datum: '2023-06-13',
        anlass: 'Jubiläum 5J',
        bemerkung: 'Buch'
      },
      { 
        datum: '2022-03-11',
        anlass: 'Geburt',
        bemerkung: 'Glückwunschkarte'
      },
    ]

    const eventsZurAuswahl = [
        { 
          text: 'Hochzeit', 
          link: '/hra/events/Hochzeit-stepper',
        },
        { 
          text: 'Namensaenderung', 
          link: '/hra/events/Namensaenderung',
        },
        { 
          text: 'Geburt', 
          link: '/hra/events/Geburt',
        },
        { 
          text: 'Jubiläum', 
          link: '/hra/events/jubilaeum',
        },
    ]

    const neuErfassen = [
        {text: 'Namensänderung', link: '/hra/events/Namensaenderung'},
        {text: 'Hochzeit', link: '/hra/events/Hochzeit-stepper'},
        {text: 'Jubiläum', link: '/hra/events/jubilaeum'}
      ]

</script>

<template>
  <header class="px-8 py-1 print:hidden">
      <HRAMitarbeiterInfoBox headline="Abwesenheiten" class="mb-2" />
  </header>
  
  <div class="p-8">
    <div class="bg-white py-6 px-3">
      
      <h2 class="text-Blaugrau text-xl mb-3">Neues Event erfassen</h2>
      <div class="bg-white py-6">
        
        <div class="grid grid-cols-5  gap-6  ">
          <a v-for="action in neuErfassen" 
              class="text-center inline-block place-content-center 
                  border rounded shadow opacity-80 
                  hover:opacity-100 hover:shadow-lg hover:border-Blaugrau-25
                  min-w-24 h-24 text-Mittelblau 
                  bg-Blaugrau-10 hover:bg-Blaugrau-10 
                  flex items-center"
              :href="action.link">
            <ChevronRightIcon class="w-4 h-4" />{{action.text}}
          </a>
        </div>
</div>
      <h2 class="text-Blaugrau text-xl mb-0">Bisherige Events</h2>

      <div class="mt-3">
        <table class="table text-sm w-3/4">
          <thead class="bg-Hellgrau h-8">
            <th class="">Datum</th>
            <th>Anlass</th>
            <th>Bemerkung</th>
          </thead>
          <tbody>
            <tr v-for="event,idx in bisherigeEvents" class="border border-b">
              <td class="px-2 py-1 text-center tabular-nums border-r" style="width: 12ch">{{event.datum}}</td>
              <td class="px-2 py-1 border-r">{{event.anlass}}</td>
              <td class="px-2 py-1">{{event.bemerkung}}</td>

            </tr>
          </tbody>
        </table>
      </div>  
    </div>
  </div>

<!--   <main class="grid grid-cols-2 gap-8 px-8">

    <div class="bg-white p-4 rounded">
      <header class="font-bold text-xl mb-2">
        Events & Änderungen
      </header>
      <main>
        <ul class="space-y-1">
          <li v-for="item in eventsAktionen.events.items" class="">
            <a :href="item.link" class="">
              <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau">
                <div class="p-1 ">
                  <ChevronRightIcon class="w-4 h-4"/>                    
                </div>
                {{item.text}}
              </div>
            </a>
          </li>
        </ul>
      </main>
    </div>
  </main> -->
</template>