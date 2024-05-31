<script setup>
  import { CheckCircleIcon, EnvelopeIcon, XCircleIcon } from '@heroicons/vue/24/outline' 
  const modalID = 'bankverbindung-dialog'

  function showDialog() {
        document.getElementById(modalID).showModal();
    }
  function showConfirmation(msg, event) {
      
      if(msg==="x")
        alert("Löschen?")
        document.getElementById('ausbildung-dialog').showModal(); 
    }
</script>

<template>
  <div>
    <h3 class="text-lg font-bold text-gray-900 ">Bankverbindung</h3>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <CheckCircleIcon class="w-4 h-4 text-green-500"/>
      <span>Diese Daten können direkt geschrieben werden.</span>
    </p>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <EnvelopeIcon class="w-4 h-4 text-orange-500"/>
      <span>Es wird eine Emailbenachrichtigung versendet.</span>
    </p>
  </div>

  <LayoutFormSection title="Bankdaten">
    <table class="table-auto bg-white w-full">
      <thead>
        <tr class="font-bold h-12 bg-gray-100">
          <th class="text-left px-2">Gültig von</th>
          <th class="text-left px-2">Gültig bis</th>
          <th class="text-left px-2">Bankname</th>
          <th class="text-left px-2">Inhaber*in</th>
          <th class="text-left px-2">IBAN</th>
          <th class="text-left px-2">BIC</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bank in bankdaten" class="text-sm hover:bg-blue-200 cursor-pointer" 
          @click="showConfirmation('tr', $event)">
          <td class="px-2 py-2 border-b">{{bank.gueltig_von}}</td>
          <td class="px-2 py-2 border-b">{{bank.gueltig_bis}}</td>
          <td class="px-2 py-2 border-b"> {{bank.bankname}} </td>
          <td class="px-2 py-2 border-b"> {{bank.kontoinhaber}} </td>

          <td class="px-2 py-2 border-b ">{{bank.iban}}</td>
          <td class="px-2 py-2 border-b ">{{bank.bic}}</td>
          <td class="px-2 py-2 border-b ">
            <div class="grid">
              <XCircleIcon class="z-10 w-5 h-5 hover:text-red-600 place-self-center" @click.stop="showConfirmation('x', $event)"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-6 flex justify-end">
      <button @click="showDialog" class="bg-blue-700 text-white px-3 py-2">Bankdaten hinzufügen</button>
    </div>

  </LayoutFormSection>


  <dialog id="bankverbindung-dialog" class="modal-bankverbindung shadow-lg bg-gray-100 p-4">
    <form action="" method="dialog" class="h-full">
      <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
        <header class="px-4 py-2 h-12  text-lg font-bold ">
            Bankverbindung bearbeiten
        </header>
        <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">

          <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
            <InputText label="Kontoinhaber"  value="Stephanie Babunek" width="w-64"/>
            <InputText label="Bankname" value="Erste Österreichische Sparkasse" width="w-64"/>
            <InputText label="IBAN"  value="AT88 1234 2222 3333 4212" width="w-64"/>
            <InputText label="BIC"  value="GIBXX WWWW 30495"  width="w-64"/>
            <InputDate label="Gültig von" />
            <InputDate label="Gültig bis" />
          </div>

        </main>
        <footer class="px-4 h-12">
            <div class="flex justify-end space-x-4">
                <button class="text-sm text-blue-600 hover:underline">Abbrechen</button>
                <button formmethod="dialog" class="bg-blue-700 text-white px-3 py-2">Speichern</button>
            </div>
        </footer>
      </div>
    </form>
  </dialog>
</template>

<style>
  dialog.modal-bankverbindung {
      height: 40vh;
      width: 60vw;      
    }
  
  dialog::backdrop {
      background: rgba(0.2, 0.2, 0.2, 0.4);
  }
</style>