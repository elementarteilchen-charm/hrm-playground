<script setup>
    import { PencilSquareIcon, PlusCircleIcon } from '@heroicons/vue/24/outline' 
    import { ref, reactive } from 'vue'
    
    const modalID = 'nativername';

    const kontaktDaten = {
            'reisepass': {'vorname': 'Stephanie', 'nachname': 'Babunek'},
            'native': {'vorname': 'Stephanie', 'nachname': 'Babunèk'},
            'geburtsname': {'vorname': '', 'nachname': ''},
        };

    let kontakt = reactive(kontaktDaten);

    function showDialog() {
      document.getElementById(modalID).showModal();
    }
  
    function saveData() {
      console.log("Saving data");
    }    

</script>

<template>

  <div>
      
    <div class="border rounded px-4 py-2 bg-white">
      <div class="flex justify-between">
        <h3 class="font-bold text-gray-700 ">Andere Schreibweisen</h3>        
        <button @click="showDialog()">
          <PencilSquareIcon class=" w-5 h-5 place-self-center text-blue-600 hover:text-blue-500"/>
        </button>
      </div>

      <div class="mt-4">
        <div class="grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
          <div class="self-center text-sm text-gray-500">Reisepassname:</div> 
          <div>{{kontakt.reisepass.vorname}} {{kontakt.reisepass.nachname}}</div>
        </div>
        <div class="grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
          <div class="self-center text-sm text-gray-500">Nativer Name:</div>
          <div> {{kontakt.native.vorname}} {{kontakt.native.nachname}} </div>
        </div>
        <div class="grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
          <div class="self-center text-sm text-gray-500">Geburtsname:</div>
          <div> {{kontakt.geburtsname.nachname ? kontakt.geburtsname.nachname : '-'}}</div>
        </div>
      </div>

      <!-- <div class="border rounded hover:shadow-lg hover:text-blue-600 bg-white text-blue-500 p-4 h-full grid">
        <button @click="showDialog()" class="place-self-center">
          <PlusCircleIcon class=" w-12 h-12 "/>
        </button>
      </div> -->
    </div>
  
  
  <dialog  :id="modalID"  @close="saveData()" class="rounded-lg shadow-lg bg-white p-0">
      <form action="" method="dialog" class="h-full">
          <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
          
              <header class="px-4 py-2 h-12  text-lg font-bold bg-blue-700 text-white">
                  Neuen Notfallkontakt anlegen
              </header>
              
              <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                <StammdatenNativerName />
              </main>

              <footer class="px-4 py-2 border-t bg-gray-100 h-12">
                <div class="flex justify-end space-x-4">
                    <button class="text-sm text-blue-600 hover:underline">Schließen</button>
                    <button  formmethod="dialog" class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-2 py-1 rounded">Speichern</button>
                </div>
              </footer>
          </div>
      </form>
  </dialog>
</div>
</template>

<style>
    dialog.nativername {
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
