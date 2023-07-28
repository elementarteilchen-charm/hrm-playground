<script setup>
  import { showDialog } from '/utils/modal.js'
  import { MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, PencilIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline' 
  
  const title ="Vordienstzeiten"


  const ma = mitarbeiterListe[0]

</script>

<template>
  <div>
    <h3 class="text-lg font-bold text-gray-900 ">Vordienstzeiten</h3>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <CheckCircleIcon class="w-4 h-4 text-green-500"/>
      <span>Diese Daten können direkt geschrieben werden.</span>
    </p>
   <!--  <p class="text-gray-400 text-sm flex items-center gap-2">
      <EnvelopeIcon class="w-4 h-4 text-orange-500"/>
      <span>Es wird eine Emailbenachrichtigung versendet.</span>
    </p> -->
  </div>
  
  <LayoutFormSection title="Vordienstzeiten">
    <table class="table-auto bg-white w-full">
      <thead>
        <tr class="font-bold h-12 bg-gray-100">
          <th class="text-left px-2">Von</th>
          <th class="text-left px-2">Bis</th>
          <th class="text-left px-2">Anrechenbare Zeit</th>
          <th class="text-left px-2">Beruf</th>
          <th class="text-left px-2">Firma</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vordienstzeit in ma.vordienstzeiten" class="text-sm hover:bg-blue-200 cursor-pointer">
          <td class="px-2 py-1 border-b">{{vordienstzeit.von}}</td>
          <td class="px-2 py-1 border-b">{{vordienstzeit.bis}}</td>
          <td class="text-center px-2 py-1 border-b">{{vordienstzeit.anrechenbare_zeit}}</td>
          <td class="px-2 py-1 border-b">{{vordienstzeit.beruf}}</td>
          <td class="px-2 py-1 border-b">{{vordienstzeit.firma}}</td>
        </tr>
      </tbody>
    </table>
  </LayoutFormSection>

  <div class="flex justify-end">
    <button @click="showDialog(title)" class="bg-blue-700 text-white px-3 py-2">Ausbildung hinzufügen</button>
  </div>

  <LKWWDialog :title="title" width="92vw" height="80vh">

  </LKWWDialog>
  
</template>