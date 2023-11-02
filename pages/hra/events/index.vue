<script setup>
  import {
    ChevronRightIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon,  } 
      from '@heroicons/vue/24/outline'

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
          <li v-for="item in eventsAktionen.events.items" class="">
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
  </main>
</template>

<style>  
</style>