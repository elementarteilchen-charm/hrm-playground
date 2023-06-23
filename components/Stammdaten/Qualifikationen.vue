<script setup>
  import { showDialog } from '/utils/modal.js'
  import { MagnifyingGlassIcon, CheckCircleIcon, XCircleIcon, PencilIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline' 
  
  const title ="Ausbildung"


</script>

<template>
  <h3 class="text-lg font-bold text-gray-900 ">Qualifikation</h3>

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
    <button @click="showDialog(title)" class="bg-blue-700 text-white px-3 py-2">Qualifikation hinzufügen</button>
  </div>

  <LKWWDialog :title="title" width="92vw" height="80vh">

  </LKWWDialog>
  
</template>

<style>
  
</style>