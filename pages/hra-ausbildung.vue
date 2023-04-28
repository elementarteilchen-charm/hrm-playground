<script setup>
  import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline' 
  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { ChevronRightIcon } from '@heroicons/vue/24/outline' 

  import { reactive } from 'vue'
   let topMenuItems = [
      {
        linkText: "Stammdaten",
        link: "hra-eintritte",
        active: false
      },

      {
        linkText: "Ausbildung",
        link: "hra-ausbildung",
        active: true
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
  const tabs = [
        'Ausbildung', 
    ];
  const activeTab = reactive({ tab: tabs[0] });
</script>

<template>
  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    <EintretendePersonHeader vorname="Stephanie" anrede="Fr." nachname="Babunek"/>
    
    <NavigationTopMenu :topMenuItems="topMenuItems" :activeMenuItem="topMenuItems[1]"/>
  </main>

  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
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
            <StammdatenAusbildung />
          </div>
        
        </div>

      </main>
    </div>
  
  </main>

</template>
