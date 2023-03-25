<script setup>
  // dokumente, dokumentKategorien, ordner werden aus 
  // dem 'utils' Verzeichnis auto-imported

  import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline' 
  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 

  import { reactive } from 'vue';

  let topMenuItems = [
      { linkText: "Stammdaten", link: "hra-eintritte", active: false },
      { linkText: "Organisationsdaten", link: "hra-organisationsdaten", active: false },
      { linkText: "Ausbildung", link: "schulbildung", active: false },
      { linkText: "Dokumente", link: "hra-dokumente", active: true },
      { linkText: "Vertrag", link: "vertragsdaten", active: false }
    ];

  const tabs = [
        'Übernehmen', 
        'Aus der Bewerbung', 
    ];
  
  const activeTab = reactive({ tab: tabs[0] });
  
  function showDialog() {
    document.getElementById('dokument-dialog').showModal();
  }
  
  function saveData() {
    console.log("Saving data");
  }    
</script>

<template>
  <main class="grid grid-rows-[auto_auto_auto] gap-8">
    
    <EintretendePersonHeader vorname="Stephanie" anrede="Fr." nachname="Babunek"/>
    
    <NavigationTopMenu :topMenuItems="topMenuItems" :activeMenuItem="topMenuItems[3]"/>

    <div class="bg-white border border-t-4 border-t-gray-300 rounded overflow-hidden">
  
      <main class="grid lg:grid-cols-[12rem_1fr]">
            
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
            <StammdatenDokumenteUebernehmen />
          </div>
         

          <div class="p-2 mt-8 flex justify-end space-x-4 items-center text-sm">
            <a href="" class="text-blue-700 hover:underline">Abbrechen</a>
            <button class="px-4 py-2 bg-blue-700 text-white hover:bg-blue-700">Speichern</button>
          </div>
        </div>        
        
        
        <!-- <div class="my-4 grid grid-cols-3 gap-8">
          <template v-for="dokument in dokumente">
            
            <div class="border rounded shadow-md bg-white px-4 py-2 grid grid-rows-[auto_1fr_auto]">
              <div class="flex justify-between items-start pb-2">
                <span class="text-sm text-orange-600">{{dokument.kategorie}}</span>
                <div v-if="dokument.uebernehmen" class="w-6 h-6 text-green-600 flex-shrink-0">
                  <CheckCircleIcon />
                </div>
              </div>
              <h3 class="font-bold leading-tight ">{{dokument.uploadDateiname}}</h3>
              <main>
                <ul class="text-sm">
                  
                  <li class="text-green-600">{{dokument.ordner}}</li>
                </ul>
              </main>
              <footer class="py-2">
                <button @click="showDialog()" class="px-2 py-1 text-sm bg-blue-700 text-white">
                  Bearbeiten
                </button>
              </footer>
            </div>
          </template>
        </div>
 -->


       <!--  <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-16">
        </div>    -->       


      </main>
    </div>
      
  </main>
<!--   <dialog  id="dokument-dialog"  @close="saveData()" class="rounded-lg shadow-lg bg-white p-0">
      <form action="" method="dialog" class="h-full">
          <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
          
              <header class="px-4 py-2 h-12  text-lg font-bold bg-blue-700 text-white">
                  Dokument beschlagworten
              </header>
              
              <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                <div class="mt-6 px-2 grid grid-cols-[minmax(6rem,auto)_1fr] gap-4">
                    <div class="text-sm font-light">
                      Datei 
                    </div>
                    <div class="font-bold">{{dokumente[0].uploadDateiname}}</div>
                    <InputSelect label="Kategorie" :options="dokumentKategorien" width="w-4/5"/>
                    <InputSelect label="Ordner" :options="ordner" width="w-4/5"/>
                    <InputText label="Dateiname" :value="dokumente[0].digitaleAkteDateiname" width="w-4/5"/>
                    <InputRadio label="Übernehmen" :options="['Ja', 'Nein']" />
                </div>
              </main>

              <footer class="px-4 py-2 border-t bg-gray-100 h-12">
                <div class="flex justify-end space-x-4">
                    <button class="text-sm text-blue-600 hover:underline">Schließen</button>
                    <button  formmethod="dialog" class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-2 py-1 rounded">Speichern</button>
                </div>
              </footer>
          </div>
      </form>
  </dialog> -->
</template>

<style>
    dialog {
        width: 50vw;
        min-width: 32rem;
        max-width: 800px;
        min-height: fit-content;
        height: 50vh;
    }

    dialog::backdrop {
      background: rgba(0.2,0.2,0.2, 0.4);  
    } 
</style>