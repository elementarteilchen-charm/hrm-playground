<script setup>
  import {ArrowRightCircleIcon, ArrowDownCircleIcon, BookmarkIcon, PlusCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

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

            <button >
            <div 
              @click="showDialog"
              class="mt-4 space-x-2 flex items-center text-gray-500 bg-gray-100 py-2 pl-4 
                opacity-80 hover:opacity-100 hover:bg-gray-200 hover:text-gray-800 hover:cursor-pointer">
              <BookmarkIcon class="w-5 h-5" />
              <div class="">Erinnerungen</div>
              <div class="rounded-full bg-red-600 text-white text-xs py-1 px-2">3</div>
            </div>
            </button>

            <div class="mt-4 border_ border-b px-2 py-6 flex flex-col space-y-3">
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

  <dialog id="erinnerungen-dialog">
    <header>
      Erinnerungen
    </header>
    <main>
      Liste der Erinnerungen
    </main>
    <footer>
      <button>Schließen</button>
    </footer>

  </dialog>
</template>
