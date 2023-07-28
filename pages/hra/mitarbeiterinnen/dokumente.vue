<script setup>

  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 
  import { CloudArrowUpIcon } from '@heroicons/vue/24/outline' 

  const tabs = [
        'Hinzufügen', 
        'Verwalten', 
        // 'Dokumente hochladen', 
    ];
  
  const activeTab = ref(tabs[0]);
  function newTab(ev) {
      activeTab.value = tabs[tabs.indexOf(ev)]
      console.log("changed to " + ev)
  }
</script>

<template>

  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    <EintretendePersonHeader vorname="Stephanie" anrede="Fr." nachname="Babunek"/>
    
    <div class="bg-white border border-t border-t-gray-300 rounded overflow-hidden">
  
      <main class="grid lg:grid-cols-[minmax(min-content,12rem)_1fr]">
        <div>
          <h3 class="font-bold px-4 py-4">Dokumente</h3>
          <NavigationHraTabMenu :tabs="tabs" @newtab="newTab"/>
        </div>

     
        <div class="px-4 py-6 border-l">
          <div v-show="tabs[0] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <div class=" grid grid-cols-3 xl:grid-cols-4 gap-4">
              <div v-for="o in ordner" class="text-sm p-4 border rounded flex items-center gap-2 hover:bg-gray-100">
                <CloudArrowUpIcon class="text-Mittelblau w-6 h-6 flex-shrink-0 "/>
                <div class="text-left">
                  {{o}}
                </div>
              </div>
            </div>
            <DokumenteVerwalten />
          </div>
          <div v-show="tabs[1] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
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