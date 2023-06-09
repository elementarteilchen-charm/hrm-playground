<script setup>
  import { showDialog } from '/utils/modal.js'
  import { CheckCircleIcon, XCircleIcon, PencilIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline' 
  
  const title ="Ausbildung"


  function showConfirmation(msg, event) {
    
    if(msg==="x")
      alert("Löschen?")
      document.getElementById('ausbildung-dialog').showModal(); 
  }
  const gewaehlterSchultyp = ref()
  const gewaehlteSchule = computed(() => {
    return schuldaten.filter(schule => schule.schultyp == gewaehlterSchultyp.value)
  })
</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Ausbildung</h3>

  <div>
    <LayoutFormSection>
      <table class="table-auto bg-white w-full">
        <thead>
          <tr class="font-bold h-12 bg-gray-100">
            <th class="text-left px-2">Schule</th>
            <th class="text-left px-2">Fachrichtung</th>
            <th>Titel</th>
            <th>Abschluss</th>
            <th>Von</th>
            <th>Bis</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="schule in schulen" class="text-sm hover:bg-blue-200 cursor-pointer" 
            @click="showConfirmation('tr', $event)">
            <td class="px-2 py-1 border-b">
              <strong>{{schule.schule}}</strong> <br>
              {{schule.adresse}} <br>
            </td>
            <td class="px-2 py-1 border-b">{{schule.fachrichtung}}</td>
            <td class="px-2 py-1 border-b">{{schule.abschluss}}</td>
            <td class="px-2 py-1 border-b">
              <div class="grid">
                <CheckCircleIcon class="w-5 h-5 text-green-600 place-self-center" v-if="schule.abschluss"/>
              </div>
            </td>
            <td class="px-2 py-1 border-b text-center">{{schule.von}}</td>
            <td class="px-2 py-1 border-b text-center">{{schule.bis}}</td>
            <td class="px-2 py-1 border-b text-center">
              <div class="grid">
                <XCircleIcon class="z-10 w-5 h-5 hover:text-red-600 place-self-center" @click.stop="showConfirmation('x', $event)"/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </LayoutFormSection>
  </div>
  <div class="flex justify-end">
    <button @click="showDialog(title)" class="bg-blue-700 text-white px-3 py-2">Ausbildung hinzufügen</button>
  </div>

  <LKWWDialog :title="title" width="92vh" height="80vh">
    <form action="" method="dialog" class="h-full">
      da: {{gewaehlterSchultyp}} - {{gewaehlteSchule}}
      <fieldset class="border rounded-sm px-3 py-3 mt-3 ">
        
        <legend class="font-light text-blue-600 text-lg">Schule</legend>
        
        <div class="grid grid-cols-[1fr_2fr] gap-4 mb-6 bg-white py-3">
          <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
            <InputSelect label="Schultyp:*" :options="schultypen" width="w-full"/>
            <input type="text" v-model="gewaehlterSchultyp">
          </div>
          <div class=" px-2 grid grid-cols-[minmax(4rem,auto)_1fr] gap-4">
            <InputSelect label="Schule" :options="schuldaten" width="w-full"/>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
            <!-- <InputSelect label="Schultyp:*" :options="['Fachhochschule', 'Gymnasium', 'HAK', 'HTL']" width="w-full"/> -->
            <InputText label="Ort:" value="Eisenstadt" width="w-full"/>
            <InputText label="Postleitzahl" value="7000" width="w-full"/>
            <InputText label="Straße:" value="Campus 1" width="w-full"/>
            <InputSelect label="Land:" :options="['AT','DE', 'PL']" width="w-24" />
          </div>

          <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
            <InputDate label="von:" value="01.10.1994" />
            <InputDate label="bis:" value="30.06.1998" />
            <InputEmptyPlaceholder />
            <InputText label="Diplomthema:" value="" />
            <InputText label="PartnerNr SW2000:" value="197922" />
          </div>
        </div>
      </fieldset>

      <fieldset class="border rounded-sm px-3 py-3 mt-3 ">
        <legend class="font-light text-blue-600 text-lg">Abschluss</legend>
        <div class="grid grid-cols-2 gap-4 ">
          <div class=" grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
            <InputCheckbox label="Abschluss?*:" checkboxLabel="Ja" />
            <InputText label="Abschluss als:" value="Mag.(FH) Diplom fehlt" />
          </div>
          <div class=" grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
            <InputSelect label="Titel vor dem Namen:" :options="['Bacc.','Mag.', 'Ing.']" width="w-32" />
            <InputSelect label="Titel nach dem Namen:" :options="['-', 'MSc.','MBA']" width="w-32" />
          </div>
        </div>
      </fieldset>
        
      <fieldset class="border rounded-sm px-3 py-2 mt-3">
        <legend class="font-light text-blue-600 text-lg">Anrechenbare Werte</legend>
        <div class="grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
          <InputText label="Anrechenbare Werte:" value="48,00" width="w-32"/>
          <InputTextarea label="Bemerkungen:" />
        </div>
      </fieldset>

      <fieldset class="border rounded-sm px-3 py-3 mt-3 ">
          <legend class="font-light text-blue-600 text-lg">Dokumente</legend>
          <div class="grid grid-cols-2 gap-4">
            <div class="border border-gray-300 rounded-md shadow-md w-48 h-24 bg-white p-4 flex space-x-2">
                <ArchiveBoxIcon class="text-gray-400 w-8 h-8 place-self-center" />
                <div @click="showUploadDialog" class="text-sm place-self-center">Zeugnis Upload</div>
            </div>
            <div class="p-4">
              <p>Vorhandenes Dokument:</p>
              <a href="" class="text-blue-700 hover:underline">DiplomScan01 Babunek.pdf</a> 
            </div>
          </div>
      </fieldset>
            
    </form>
  </LKWWDialog>
  
</template>

<style>
  dialog.modal-ausbildung {
      height: 92vh;
      width: 72vw;      
    }
  
</style>