<script setup>
  import {
      UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
      BookmarkIcon, PlusCircleIcon, } 
      from '@heroicons/vue/24/outline'

  const tabs = [
        'Persönlich', 
        'Adressen und Kontakt', 
        'Bankverbindung',
        'Familienangehörige',
        'Invalidität',
    ];
  const activeTab = reactive({ tab: tabs[0] });
  
  const aktiverMA = ref()
  function callback(data) {
    console.log(data)
    alert("Event callback")
  }
</script>

<template>
    <div class="my-3 text-3xl font-light text-Blaugrau">
      Mitarbeiter*innen
    </div>
  
  <main class="grid grid-rows-[auto_auto_auto] gap-8">

    <div class="my-6">
      <Suche @ma-gewaehlt="callback"/>
    </div>
    


<!--     <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" :active="0"/>

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
          <section class="grid grid-cols-[auto_6rem] gap-2">
            
            <div class="flex items-center gap-2 bg-green-100 p-2">
              <div >                
                <div class="text-xs inline-flex items-center gap-1">
                  <CalendarIcon class="w-4 h-4" /> <span>23.5.2023</span>
                </div>
                <div class="text-sm">
                  Die IBAN fehlt noch. Neues Konto wird erst eingerichtet.
                </div>
              </div>
              <div class="ml-auto flex gap-4">
                <PencilIcon class="w-5 h-5" />
                <CheckCircleIcon class="w-5 h-5" /> 
              </div>
            </div>
            
          <button @click="showDialog" class="ml-auto">
            <div  
              class=" space-x-2 flex items-center text-gray-500 bg-gray-100 py-2 px-4 
                opacity-80 hover:opacity-100 hover:bg-gray-200 hover:text-gray-800 hover:cursor-pointer">
              <BookmarkIcon class="w-5 h-5" />
              <div class="rounded-full bg-red-600 text-white text-xs py-1 px-2">3</div>
            </div>
          </button>
          </section>

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
   -->
  </main>

</template>

<style>  
  
  dialog.modal-erinnerungen::backdrop {
      background: rgba(0.2, 0.2, 0.2, 0.3);
  }
</style>