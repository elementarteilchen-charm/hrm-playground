<script setup>
  import { ArrowRightCircleIcon, ArrowDownCircleIcon, PlusCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline' 

  const tabs = [
        'Vertrag', 
        'Zusatzvereinbarungen',
    ];
  const activeTab = reactive({ tab: tabs[0] });

</script>

<template>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    <EintretendePersonHeader vorname="Stephanie" anrede="Fr." nachname="Babunek"/>
    <NavigationTopMenu :topMenuItems="topMenuItems" :active="3" />

    <div class="bg-white border border-t rounded overflow-hidden">

      <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
          
        <nav class="mt-4">
          <ul class="text-sm">
            <li v-for="tab, index in tabs" 
                class="border-l-4 border-transparent pl-4 pr-8 py-3 flex hover:bg-gray-200"
                :class="[{'border-l-4 border-blue-500 text-blue-700 font-bold': tab == activeTab.tab}]">
                <a href="#" @click="activeTab.tab = tab">
                  {{tab}}</a>
            </li>
          </ul>

          <div class="mt-4 border-t border-b px-2 py-6 flex flex-col space-y-3">
            <a href="" class="px-3 py-2 bg-blue-700 text-white text-center">
              Speichern
            </a>
            <a href="" class="px-3 py-2 text-blue-700 hover:underline text-center">
              Abbrechen
            </a>
          </div>
        </nav>
        
        <div class="px-4 py-4 border-l pb-12">

          <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenPersoenlich />
            <StammdatenLand />
            <StammdatenFamilienstand />
          </div>
          <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenAdresse />
          </div>
          <div v-show="tabs[3] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenFamilienangehoerige />
          </div>

        </div>

      </main>
    </div>
  
  </main>

</template>
