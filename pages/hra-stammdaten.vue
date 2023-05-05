<script setup>
  import {
      UserIcon, UserGroupIcon, CalendarIcon,
      CheckCircleIcon, XCircleIcon, 
      ClockIcon, PencilIcon,
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
  const addNewItem = ref(false);

  function  showDialog() {
    document.getElementById('erinnerungen-dialog').showModal();
  }

  function erinnerungLoeschen() {
    alert('Wirklich löschen?')
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
  
  </main>

  <dialog 
        id="erinnerungen-dialog" 
        class="modal-erinnerungen border rounded-lg bg-gray-200 " 
        style="height: 52vh; width: 66vw; overflow-y: hidden; ">
    <form action="" method="dialog">
      
      <div class="grid" :style="{'grid-template-rows: 7rem 1fr 2rem': addNewItem, 'grid-template-rows: 4rem 1fr 2rem': !addNewItem}">
        
        <header :class="{'h-12': !addNewItem, 'h-24': addNewItem}">
          <div class="grid grid-cols-3">          
            <h1 class="self-center py-2 font-bold text-lg">{{erinnerungen.length}} Erinnerungen</h1>
            <!-- Nav -->
            <div class="self-center flex justify-self-center justify-between w-36 gap-2 bg-white rounded-lg overflow-hidden">
              <div @click="addNewItem = !addNewItem" class="p-2 hover:bg-green-600 hover:text-green-100" title="Neue Erinnerung">
                <PlusCircleIcon class="w-6 h-6  " />
              </div>
              <div class="p-2 hover:bg-green-600 hover:text-green-100" title="Nur eigene Erinnerungen anzeigen">
                <UserIcon class="w-6 h-6" />
              </div>
              <div class="p-2 hover:bg-green-600 hover:text-green-100" title="Alle Erinnerungen anzeigen">
                <UserGroupIcon class="w-6 h-6" />
              </div>
            </div>
            <div  class="self-center justify-self-end p-2 text-gray-700 bg-white hover:bg-red-600 hover:text-white rounded-lg">
              <XCircleIcon class="w-6 h-6"/>
            </div>
          </div>  
          <div v-if="addNewItem" class="py-2">
            <div class="h-12_ flex items-center px-2 py-2 bg-green-100 rounded-lg gap-4 font-bold text-sm ">
              <InputText name="neueErinnerung" width="w-full"/>
              <InputDate name="faelligBis" width="text-sm"/>
              <a href="">X</a>
              <button>Speichern</button>
            </div>
          </div>
        </header>

        <main class="overflow-auto" 
              style="height: calc(50vh - 7rem);">
          <div class="grid grid-cols-[3fr_auto_2fr] px-2 py-1 bg-white rounded-lg gap-4 font-bold text-sm ">
            <div>Erinnerung</div>
            <div class="w-7">&nbsp;</div>
            <div class="grid grid-cols-2 items-center gap-4">
              <div class="justify-self-center pr-6">Datum</div>
              <div class="pl-4">Erfasst von</div>
            </div>
          </div>

          <div  v-for="erinnerung, index in erinnerungen" 
                class="mt-3 grid grid-cols-[3fr_auto_2fr] px-2 gap-4 text-sm">
            <div class="self-center">
              <div class="text-xs font-light text-gray-500">{{erinnerung.seite}}</div>
              {{erinnerung.erinnerung}}
            </div>
            
            <div class="self-center p-2 rounded-lg">
              <InputCheckbox :name="erinnerung.erinnerung"/>
            </div>

            <!-- Action Section -->
            <div class="grid grid-cols-2 items-center gap-4">
              <div>
                <div v-if="erinnerung.faelligDatum" class="flex" title="Datum ändern">
                  <input type="date" id="faellig" class="py-1 px-0 bg-gray-200 border-none text-sm" :value="erinnerung.faelligDatum">
                  <label class="self-center" for="faellig"><CalendarIcon class="w-5 h-5" /></label>
                </div>
                <div v-else  class="flex" title="Datum ändern">
                  <input type="date" id="faellig" class="py-1 px-0 bg-gray-200 border-none text-sm" placeholder="nix">
                  <label class="self-center" for="faellig"><CalendarIcon class="w-5 h-5" /></label>
                </div>
              </div>
            
              <div class="justify-self-start pl-4 text-sm font-light">
                {{erinnerung.erstelltVon}}
              </div>
              
            </div>
          </div>
        </main>

        <footer class="h-12 py-1">
          <div class="flex items-center justify-end space-x-4">
              <button class="text-sm text-blue-600 hover:underline">Abbrechen</button>
              <button formmethod="dialog" class="bg-blue-700 text-white px-2 py-1">Speichern</button>
          </div>
        </footer>  
      </div>
      
    </form>
  </dialog>
</template>

<style>  
  
  dialog.modal-erinnerungen::backdrop {
      background: rgba(0.2, 0.2, 0.2, 0.3);
  }
</style>