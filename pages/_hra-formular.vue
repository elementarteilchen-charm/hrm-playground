<script setup>
  import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline' 
  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { ChevronRightIcon } from '@heroicons/vue/24/outline' 

  import { reactive } from 'vue'
  const tabs = [
        'Persönlich', 
        'Adresse', 
        'Notfallkontakt',
        'Adresse02', 
        'Persönlich02', 
    ];
  const activeTab = reactive({ tab: tabs[0] });
</script>

<template>
  
  <Suche />
  <div class="mt-4 w-100">
    <div class="bg-white p-4 border rounded flex items-center justify-between">
      <div class="font-bold">
        Eintrittsdaten für Fr. Babunek Stephanie bearbeiten
      </div>
      <div>
        <a class="p-2 text-blue-600 hover:underline inline-flex" href=""> 
          <PlusCircleIcon class="w-4 mr-1 text-blue-600"/>
          Zusammenfassung</a>
      </div>
    </div>
    <div>

    <div class="px-4_ py-6_ mt-4 bg-white border rounded overflow-hidden">      
      <nav class="bg-white border-b ">
        <ul class="flex space-x-4">
          <li class="px-4 py-2 bg-blue-700 text-white cursor-pointer">Stammdaten</li>
          <li class="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">Schulbildung</li>
          <li class="px-4 py-2 hover:border-blue-600 cursor-pointer">Berufsweg</li>
        </ul>
      </nav>

      <main class="mt-8 px-4">
        <h3 class="font-bold text-lg px-2 py-2">Persönlich</h3>
        <div class="px-2 py-4">
          
          <nav class="text-sm bg-white  border-gray-400">
            <ul class="flex items-center space-x-4 text-sm">
              <li v-for="tab, index in tabs" 
                  class="px-2 py-2 flex"
                  :class="[{'bg-gray-400 text-white font-bold': tab == activeTab.tab}]">
                  <a href="#" @click="activeTab.tab = tab">
                      {{tab}}</a>
              </li>
            </ul>
          </nav>
        
        </div>

          <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-16">
            <StammdatenPersoenlich />
            <StammdatenLand />
          </div>
          <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-8">
            <StammdatenAdresse />
          </div>
          <div v-show="tabs[2] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-8">
            <StammdatenNotfallkontakt01 />
          </div>
          <div v-show="tabs[3] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-8">
            <StammdatenAdresse02 />
          </div>
          <div v-show="tabs[4] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-16">
            <StammdatenPersoenlich02 />
            <StammdatenLand />
            <StammdatenAdresse />
            <StammdatenNotfallkontakte />
          </div>
        

        <div class="p-2 mt-6 flex justify-start space-x-4 items-center text-sm">
          <a href="" class="text-blue-600 hover:underline">Abbrechen</a>
          <button class="px-2 py-2 bg-blue-600 text-white hover:bg-blue-700">Speichern</button>
        </div>

      </main>
    </div>
      
    </div>

  </div>
</template>
