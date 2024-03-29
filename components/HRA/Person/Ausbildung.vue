<script setup>
  import { showDialog } from '/utils/modal.js'
  import { EnvelopeIcon, CheckCircleIcon, XCircleIcon, PencilIcon, ArchiveBoxIcon, MagnifyingGlassIcon} from '@heroicons/vue/24/outline' 
  
  const title ="Ausbildung"

  function showConfirmation(msg, event) {
    
    if(msg==="x")
      alert("Löschen?")
      document.getElementById('ausbildung-dialog').showModal(); 
  }

  const showSearchbox = ref(true)
  const gesuchteSchule = ref()
  const gesuchterSchultyp = ref()
  const gesuchtePLZ = ref()
  const gesuchterOrt = ref()

  
  const updateSuchergebnis = computed(() => {
  
    let rePlz = new RegExp("^" + gesuchtePLZ.value)
    let reSchultyp = new RegExp(gesuchterSchultyp.value,'i')
    let reOrt = new RegExp(gesuchterOrt.value, 'i')
    let result = schuldaten

    if (gesuchterSchultyp != undefined)
      result = result.filter(schule => reSchultyp.test(schule.Schultyp))
    if (gesuchtePLZ != undefined)
      result = result.filter(schule => rePlz.test(schule.Postleitzahl))
    if (gesuchterOrt != undefined)
      result = result.filter(schule => reOrt.test(schule.Ort))
    return result 

    // Alternativ
    return schuldaten
              .filter(schule => reOrt.test(schule.Ort))
              .filter(schule => reSchultyp.test(schule.Schultyp))
              .filter(schule => rePlz.test(schule.Postleitzahl))
  })


</script>

<template>
  <div>
    <h3 class="text-lg font-bold text-gray-900 ">Schulbildung</h3>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <CheckCircleIcon class="w-4 h-4 text-green-500"/>
      <span>Diese Daten können direkt geschrieben werden.</span>
    </p>
   <!--  <p class="text-gray-400 text-sm flex items-center gap-2">
      <EnvelopeIcon class="w-4 h-4 text-orange-500"/>
      <span>Es wird eine Emailbenachrichtigung versendet.</span>
    </p> -->
  </div>
  
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

  <div class="flex justify-end">
    <button @click="showDialog(title)" class="bg-blue-700 text-white px-3 py-2">Ausbildung hinzufügen</button>
  </div>

  <LKWWDialog :title="title" width="92vw" height="80vh">
      <div  @click="showSearchbox = !showSearchbox"
                class="flex items-center gap-2 w-24 cursor-pointer bg-Mittelblau hover:bg-Hellblau text-white text-sm font-bold px-4 py-2">
            <MagnifyingGlassIcon class="w-5 h-5"/>Suche
      </div>
      <div class=" ">
        <div class="grid grid-cols-4 gap-4 items-center">
        

          <div class="text-sm" :class="{'hidden': showSearchbox}">
            <label for="gesuchterSchultyp_" class="font-bold block">Schultyp</label>
            <input type="search" list="schultypenListe" id="gesuchterSchultyp_" v-model="gesuchterSchultyp" placeholder="AHS, Fachhochschule, ..." class="w-full text-sm p-1 form-input border-gray-300 rounded"> 
          </div>

          <div class="text-sm" :class="{'hidden': showSearchbox}">
            <label for="gesuchtePLZ" class="font-bold block">PLZ</label>
            <input type="search"  id="gesuchtePLZ" v-model="gesuchtePLZ" class="w-full text-sm p-1 form-input border-gray-300 rounded">
  
          </div>
          <div class="text-sm" :class="{'hidden': showSearchbox}">
            <label for="gesuchterOrt" class="font-bold block">Ort</label>
            <input type="search" list="schulOrtListe" id="gesuchterOrt" v-model="gesuchterOrt" class="w-full text-sm p-1 form-input border-gray-300 rounded">
          </div>
        </div>

        
        <div :class="{'hidden': showSearchbox}">
            <div class="text-Mittelblau font-bold my-3">Suchergebnis</div>
            <div class="h-32 overflow-auto text-clip text-sm bg-white p-3 space-y-1">
              <li v-for="schule in updateSuchergebnis">
                <a class="hover:underline text-Mittelblau" href="">
                {{schule.Schultyp}} - {{schule.Postleitzahl}} {{schule.Ort}}, {{schule.Adresse}}</a>
              </li>
            </div>
        </div>
      
      </div>

      
      <fieldset class="border rounded-sm px-3 py-3 mt-3 ">
              
        <legend class="font-light text-blue-600 text-lg">Schule</legend>

        <div class="grid grid-cols-2 gap-4">
          <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
            <!-- <InputSelect label="Schultyp:*" :options="['Fachhochschule', 'Gymnasium', 'HAK', 'HTL']" width="w-full"/> -->
            <InputText label="Ort:" value="Eisenstadt" width="w-full"/>
            <InputText label="Postleitzahl" value="7000" width="w-full"/>
            <InputText label="Straße:" value="Campus 1" width="w-full"/>
            <InputSelect label="Land:" :options="['AT','DE', 'PL']" width="w-24" />
          </div>

          <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
            <InputDate label="von:" value="1994-01-01" />
            <InputDate label="bis:" value="1998-06-30" />
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

          
    <datalist id="schultypenListe">
      <option v-for="schultyp in schultypen" :value="schultyp" />
    </datalist>

    <datalist id="schulOrtListe">
      <option v-for="schulort in schulOrtListe" :value="schulort" />
    </datalist>
  </LKWWDialog>
  
</template>

<style>
  
</style>