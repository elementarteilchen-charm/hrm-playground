<script setup>
  import {
    ChevronRightIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, PlusCircleIcon } 
      from '@heroicons/vue/24/outline'

</script>

<template>
  <div class="flex items-center py-3 justify-between">
      <h1 class="my-3 text-3xl font-light text-Blaugrau">
          Persönliche Daten bearbeiten
      </h1>
      <HRAMitarbeiterSuchfeld class="w-1/3"/>
  </div>
  
  <HRAMitarbeiterInfoBox class="mb-6"/>

  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    <div>
      Später: Liste der letzten Aktionen 
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