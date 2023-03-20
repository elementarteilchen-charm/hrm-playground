<script setup>
    import { PencilSquareIcon, PlusCircleIcon } from '@heroicons/vue/24/outline' 
    import { ref, reactive } from 'vue'
    
    const kontaktDaten = {
            'name': 'Hr. Babunek Josef', 
            'beziehung': 'Vater',
            'telefon': '+43 676 333 4446',
            'strasse': 'Kaiser Franz Straße 1',
            'ort': '2500 Baden',
            'land': 'AT'
        };

    let kontakt = reactive(kontaktDaten);

    function showDialog() {
      document.getElementById('notfallkontakt-dialog').showModal();
    }
  
    function saveData() {
      console.log("Saving data");
    }    

</script>

<template>

  <div>
    <h3 class="text-lg font-bold text-gray-700 mt-4 mb-2"> Notfallkontakt</h3>
    <div class="mt-6 grid grid-cols-4 gap-4">
      
      <div class="border rounded shadow-md p-4 bg-white">
        <div class="grid grid-cols-[1fr_auto] gap-4">
          <div class="font-bold">{{kontakt.name}}</div>
          <button @click="showDialog()">
            <PencilSquareIcon class=" w-5 h-5 place-self-center text-blue-600 hover:text-blue-500"/>
          </button>
        </div>
        <div class="text-sm text-gray-500">{{kontakt.beziehung}}</div>
        <div class="text-sm">
          <div>{{kontakt.telefon}}</div>
          <div>{{kontakt.strasse}}</div>
          <div>{{kontakt.ort}}</div>
          <div>{{kontakt.land}}</div>
        </div>
      </div>

      <div class="border rounded hover:shadow-lg hover:text-blue-600 bg-white text-blue-500 p-4 h-full grid">
        <button @click="showDialog()" class="place-self-center">
          <PlusCircleIcon class=" w-12 h-12 "/>
        </button>
      </div>
    </div>
  
  
  <dialog  id="notfallkontakt-dialog"  @close="saveData()" class="rounded-lg shadow-lg bg-white p-0">
      <form action="" method="dialog" class="h-full">
          <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
          
              <header class="px-4 py-2 h-12  text-lg font-bold bg-blue-700 text-white">
                  Neuen Notfallkontakt anlegen
              </header>
              
              <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                <div class="mt-6 px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                    <InputText label="Name" :value="kontakt.name" />
                    <InputText label="Beziehung" :value="kontakt.beziehung" />
                    <InputText label="Telefon" :value="kontakt.telefon" />
                    <InputText label="Straße" :value="kontakt.strasse" />
                    <InputText label="Ort" :value="kontakt.ort" />
                    <InputSelect label="Land" :options="['AT', 'DE', 'PL']" />
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
  </dialog>
</div>
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
