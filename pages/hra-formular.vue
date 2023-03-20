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

    <div class="px-4 py-6 mt-8 bg-gray-100 border rounded">      
      <nav class="bg-white border-b border-t border-blue-700">
        <ul class="flex space-x-4">
          <li class="border-b-4_ p-2 border-blue-700 font-bold bg-blue-700 text-white cursor-pointer">Stammdaten</li>
          <li class="border-b-4_ border-transparent p-2 hover:border-blue-600 cursor-pointer">Schulbildung</li>
          <li class="border-b-4_ border-transparent p-2 hover:border-blue-600 cursor-pointer">Berufsweg</li>
        </ul>
      </nav>

      <main class="mt-2">
        
        <div class="">
          
          <nav class="text-sm bg-white border-b border-t border-gray-400">
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
          <div v-show="tabs[3] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-8">
            <StammdatenAdresse02 />
          </div>
          <div v-show="tabs[2] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-8">
            <!-- <StammdatenNotfallkontakte /> -->
          </div>
          <div v-show="tabs[4] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-16">
            <StammdatenPersoenlich02 />
            <StammdatenLand />
            <StammdatenAdresse />
            <StammdatenNotfallkontakte />
          </div>
        <div class="mt-6">          
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
