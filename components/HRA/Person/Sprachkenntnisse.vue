<script setup>
  import { showDialog } from '/utils/modal.js'
  import { MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, PencilIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline' 
  
  const title ="Sprachkenntnisse"

  const ma = mitarbeiterListe[0]

</script>

<template>
  <div>
    <h3 class="text-lg font-bold text-gray-900 ">Sprachkenntnisse</h3>
    <p class="text-gray-400 text-sm flex items-center gap-2">
      <CheckCircleIcon class="w-4 h-4 text-green-500"/>
      <span>Diese Daten können direkt geschrieben werden.</span>
    </p>
   <!--  <p class="text-gray-400 text-sm flex items-center gap-2">
      <EnvelopeIcon class="w-4 h-4 text-orange-500"/>
      <span>Es wird eine Emailbenachrichtigung versendet.</span>
    </p> -->
  </div>
  
  <LayoutFormSection title="Sprachkenntnisse">
    <table class="table-auto bg-white w-full">
      <thead>
        <tr class="font-bold h-12 bg-gray-100">
          <th class="text-left px-2">Sprache</th>
          <th class="text-left px-2">Niveau</th>
          <th>Muttersprache</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sprache in ma.sprachkenntnisse" class="text-sm hover:bg-blue-200 cursor-pointer">
          <td class="px-2 py-1 border-b">
            <strong>{{sprache.sprache}}</strong> 
          </td>
          <td class="px-2 py-1 border-b">{{sprache.niveau}}</td>
          <td class="px-2 py-1 border-b">
            <div class="grid">
              <CheckCircleIcon class="w-5 h-5 text-green-600 place-self-center" v-if="sprache.muttersprache"/>
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

  </LKWWDialog>
  
</template>

<style>
  
</style>