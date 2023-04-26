<script setup>
  // dokumente, dokumentKategorien, ordner werden aus 
  // dem 'utils' Verzeichnis auto-imported

  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 

  import { reactive } from 'vue';

  let topMenuItems = [
      { linkText: "Stammdaten", link: "hra-eintritte", active: false },
      { linkText: "Ausbildung", link: "schulbildung", active: false },
      { linkText: "Dokumente", link: "hra-dokumente", active: true },
      { linkText: "Vertrag", link: "vertragsdaten", active: false }
    ];

  const tabs = [
        'Verwalten', 
        'Übernehmen', 
    ];
  
  const activeTab = reactive({ tab: tabs[0] });
  
</script>

<template>
  <div class="text-sm text-blue-700 font-light mb-4 ml-4 ">
    breadcrumb > breadcrumb
  </div>

  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    <EintretendePersonHeader vorname="Stephanie" anrede="Fr." nachname="Babunek"/>
    
    <NavigationTopMenu :topMenuItems="topMenuItems" :activeMenuItem="topMenuItems[2]"/>

    <div class="bg-white border border-t-4 border-t-gray-300 rounded overflow-hidden">
  
      <main class="grid lg:grid-cols-[minmax(min-content,12rem)_1fr]">
            
        <nav class="pt-6">
          <ul class="text-sm">
            <li v-for="tab, index in tabs" 
                class="pl-4 pr-8 py-3 flex hover:bg-gray-200"
                :class="[{'bg-gray-400 text-white font-bold': tab == activeTab.tab}]">
                <a href="#" @click="activeTab.tab = tab">
                  {{tab}}</a>
            </li>
          </ul>
        </nav>
     
        <div class="px-4 py-6 border-l">
          <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenDokumenteVerwalten />
          </div>
          <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenDokumenteUebernehmen />
          </div>

          <div class="p-2 mt-8 flex justify-end space-x-4 items-center text-sm">
            <a href="" class="text-blue-700 hover:underline">Abbrechen</a>
            <button class="px-4 py-2 bg-blue-700 text-white hover:bg-blue-700">Speichern</button>
          </div>
        </div>        
        
      </main>
    </div>
      
  </main>
</template>