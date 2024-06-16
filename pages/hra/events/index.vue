<script setup>
  import {
    ChevronRightIcon, ChevronDownIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon,  } 
      from '@heroicons/vue/24/outline'

</script>

<template>
  <header class="px-8 py-1 print:hidden">
      <HRAMitarbeiterInfoBox headline="Abwesenheiten" class="mb-2" />
  </header>
  
  <div class="p-8">
    <div class="bg-white py-6 px-3">
      <h2 class="text-Blaugrau text-xl mb-3">Bisherige Events</h2>
      
      <div class="mt-3 flex">
        <details class="">
          <summary class="block bg-Mittelblau px-3  border border-Mittelblau">
            <div class="text-white flex items-center gap-x-2 py-2">
              <div class="text-white">Neues Event erfassen</div>
              <ChevronDownIcon class="w-4 h-4"/> 
            </div>
          </summary>
          
          <ul class="space-y-1 py-2 border-l border-r px-2 bg-white shadow">
            <li v-for="item in eventsAktionen.events.items" class="">
              <a :href="item.link" class="">
                <div class="flex gap-1 items-center inline-block hover:underline">
                    <ChevronRightIcon class="w-4 h-4"/>
                  <span>{{item.text}}</span>
                </div>
              </a>
            </li>
          </ul>

        </details>
      </div>
      
      <div class="mt-3">
        Hier die Liste der Events
      </div>  
    </div>
  </div>

  <main class="grid grid-cols-2 gap-8 px-8">

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
  </main>
</template>