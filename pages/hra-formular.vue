<script setup>
  import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline' 
  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { ChevronRightIcon } from '@heroicons/vue/24/outline' 

  import { reactive } from 'vue'
  const tabs = [
        'Persönlich', 
        'Adresse', 
        'Notfallkontakt'
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

    <div class="px-4 py-6 mt-8 bg-white border rounded">      
      <nav class="">
        <ul class="flex space-x-4">
          <li class="border-b-4 p-2 border-blue-600 font-bold bg-blue-600 text-white cursor-pointer">Stammdaten</li>
          <li class="border-b-4 border-transparent p-2 hover:border-blue-600 cursor-pointer">Schulbildung</li>
          <li class="border-b-4 border-transparent p-2 hover:border-blue-600 cursor-pointer">Berufsweg</li>
        </ul>
      </nav>

      <main class="mt-6">
        
        <div class="border-b">
          
          <nav class="text-sm ">
            <ul class="flex items-center space-x-4 text-sm">
              <li v-for="tab, index in tabs" 
                  class="px-2 py-2 flex"
                  :class="[{'bg-blue-600 text-white font-bold': tab == activeTab.tab}]">
                  <a href="#" @click="activeTab.tab = tab">
                      {{tab}}</a>
              </li>
            </ul>
          </nav>
        
        </div>

          <div v-show="tabs[0] == activeTab.tab" class=" px-2 ">
            <StammdatenName />
            <StammdatenLand />
          </div>
          <div v-show="tabs[1] == activeTab.tab" class="px-2">
            <StammdatenAdresse />
          </div>
          <div v-show="tabs[2] == activeTab.tab" class="px-2">
            {{activeTab}}
          </div>
        <div class="mt-6">          
        </div>


        <div class="p-2 mt-6 flex justify-end space-x-4 items-center text-sm">
          <a href="" class="text-blue-600 hover:underline">Abbrechen</a>
          <button class="px-2 py-1 bg-blue-600 text-white hover:bg-blue-700">Speichern</button>
        </div>

      </main>
    </div>
      
    </div>

  </div>
</template>
