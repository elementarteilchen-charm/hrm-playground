<script setup>
  import {ArrowRightCircleIcon, XCircleIcon, BookmarkIcon, PlusCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

  const tabs = [
        'Persönlich', 
        'Adressen und Kontakt', 
        'Bankverbindung',
        'Familienangehörige',
        'Invalidität',
    ];
  const activeTab = reactive({ tab: tabs[0] });

  function  showDialog() {
    document.getElementById('erinnerungen-dialog').showModal();
  }
</script>

<template>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    <EintretendePersonHeader vorname="Stephanie" anrede="Fr." nachname="Babunek"/>
    <NavigationTopMenu :topMenuItems="topMenuItems" :active="0"/>

    <div class="bg-white border border-t rounded overflow-hidden">

      <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
          
        <div>
          <nav class="mt-4">
            <ul class="text-sm">
              <li v-for="tab, index in tabs" 
                  class="border-l-4 border-white pl-4 pr-8 py-3 flex hover:bg-gray-200"
                  :class="[{'border-l-4 border-blue-500 text-blue-700 font-bold': tab == activeTab.tab}]">
                  <a href="#" @click="activeTab.tab = tab">
                    {{tab}}</a>
              </li>
            </ul>

            <button @click="showDialog" class="w-full">
            <div 
              
              class="mt-4 space-x-2 flex items-center text-gray-500 bg-gray-100 py-2 pl-4 
                opacity-80 hover:opacity-100 hover:bg-gray-200 hover:text-gray-800 hover:cursor-pointer">
              <BookmarkIcon class="w-5 h-5" />
              <div class="text-sm">Erinnerungen</div>
              <div class="rounded-full bg-red-600 text-white text-xs py-1 px-2">3</div>
            </div>
            </button>

            <div class="mt-4 px-2 py-6 flex flex-col space-y-3">
              <a href="" class="px-3 py-2 bg-blue-700 text-white text-center">
                Speichern</a>
              <a href="" class="px-3 py-2 text-blue-700 hover:underline text-center">
                Abbrechen</a>
            </div>
          </nav>

        </div>
        
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
          
           <div v-show="tabs[2] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenBankverbindung />
          </div>
          <div v-show="tabs[4] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenBehinderung />
          </div>
          <div v-show="tabs[5] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <StammdatenNotfallkontakt />
          </div>

        
        </div>

      </main>
    </div>
  
  </main>

  <dialog 
        id="erinnerungen-dialog" 
        class="modal-erinnerungen p-4 border rounded-lg bg-gray-200 " >
    <form action="" method="dialog">
      
      <div class="grid grid-rows-[2rem_1fr_2rem]">
        <header class="py-3 text-lg font-bold flex items-center justify-between">
          <div>Erinnerungen</div>
          <XCircleIcon class="w-6 h-6 text-gray-500" />
        </header>

        <main class="overflow-auto">
          <table class="table-fixed text-sm">
            <thead>
              <tr>
                <th>Erinnerung</th>
                <th>Fällig bis</th>
                <th>Erfasst von</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="erinnerung in erinnerungen">
                <td class="px-2 py-1">{{erinnerung.erinnerung}}</td>
                <td class="px-2 py-1">{{erinnerung.faelligDatum}}</td>
                <td class="px-2 py-1">{{erinnerung.erstelltVon}}</td>
                
              </tr>
            </tbody>
          </table>
        </main>
        <footer class=" bg-white">
          <div class="flex items-center justify-end space-x-4">
              <button class="text-sm text-blue-600 hover:underline">Abbrechen</button>
              <button formmethod="dialog" class="bg-blue-700 text-white px-2 py-1">Hinzufügen</button>
          </div>
        </footer>  
      </div>
      
    </form>
  </dialog>
</template>

<style>
  dialog.modal-erinnerungen {
    height: 20rem;
    width: 66vw;
    overflow-y: hidden;
    /*left: 10vh;
    top: calc(66vh - 2rem);*/
  }
  
  
  dialog.modal-erinnerungen::backdrop {
      background: rgba(0.2, 0.2, 0.2, 0.3);
  }
</style>