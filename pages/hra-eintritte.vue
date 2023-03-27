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
  let topMenuItems = [
      {
        linkText: "Stammdaten",
        link: "hra-eintritte",
        active: true
      },
      {
        linkText: "Organisationsdaten",
        link: "hra-organisationsdaten",
        active: false
      },
      {
        linkText: "Ausbildung",
        link: "schulbildung",
        active: false
      },
      {
        linkText: "Dokumente",
        link: "hra-dokumente",
        active: false
      },
      {
        linkText: "Vertrag",
        link: "vertragsdaten",
        active: false
      }
    ];
  const activeTab = reactive({ tab: tabs[0] });

</script>

<template>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    <EintretendePersonHeader vorname="Stephanie" anrede="Fr." nachname="Babunek"/>
    
    <NavigationTopMenu :topMenuItems="topMenuItems" :activeMenuItem="topMenuItems[0]"/>

    <div class="bg-white border border-t-4 rounded overflow-hidden">

      <main class="grid lg:grid-cols-[10rem_1fr]">
            
        <nav class="mt-4">
          <ul class="text-sm">
            <li v-for="tab, index in tabs" 
                class="pl-4 pr-8 py-3 flex hover:bg-gray-200"
                :class="[{'bg-gray-400 text-white font-bold': tab == activeTab.tab}]">
                <a href="#" @click="activeTab.tab = tab">
                  {{tab}}</a>
            </li>
          </ul>
        </nav>
        
        <div class="px-4 py-4 border-l">
          <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenPersoenlich02 />
            <StammdatenLand />
          </div>
          <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
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
        

          <div class="p-2 mt-6 border-t flex justify-end space-x-4 items-center text-sm">
            <a href="" class="text-blue-700 hover:underline">Abbrechen</a>
            <button class="px-4 py-2 bg-blue-700 text-white hover:bg-blue-700">Speichern</button>
          </div>
        </div>

      </main>
    </div>
  
  </main>

</template>
