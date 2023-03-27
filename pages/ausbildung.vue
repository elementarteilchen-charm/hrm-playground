<script setup>
  import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline' 
  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { ChevronRightIcon } from '@heroicons/vue/24/outline' 

  import { reactive } from 'vue'
  const tabs = [
        'Ausbildung', 
    ];
  const activeTab = reactive({ tab: tabs[0] });
</script>

<template>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    
    

    <div class="bg-white border rounded overflow-hidden">
      <nav class="">
        <ul class="flex gap-4">
          <li class="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <a href="hra-formular-sidebar">Stammdaten</a></li>
          <li class="px-4 py-2 bg-blue-700 text-white cursor-pointer">Schulbildung</li>        
          <li class="px-4 py-2 hover:border-blue-600 cursor-pointer">Berufsweg</li>
        </ul>
      </nav>
    </div>


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
        

          <div class="p-2 mt-6 border-t flex justify-end space-x-4 items-center text-sm">
            <a href="" class="text-blue-700 hover:underline">Abbrechen</a>
            <button class="px-4 py-2 bg-blue-700 text-white hover:bg-blue-700">Speichern</button>
          </div>
        </div>

      </main>
    </div>
  
  </main>

</template>
