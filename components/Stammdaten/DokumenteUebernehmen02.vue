<script setup>
  import { ordner, bewerberDokumente } from '~/utils/dokumente.js'
  import { FolderIcon, DocumentIcon } from '@heroicons/vue/24/outline' 

</script>

<template>
  
  <h3 class="text-lg font-bold text-gray-900 ">Dokumente aus dem Bewerbermodul übernehmen</h3>

  <div class="bg-gray-100 p-4 rounded">
    <h3 class="font-bold text-gray-700 mb-2">Dokumente</h3>
      <div class="grid grid-rows-1 gap-8">
        
        <div v-for="dokument in bewerberDokumente"
            class="grid grid-cols-2 border bg-white overflow-hidden rounded p-4 text-sm ">
          
          <div class="pt-1">
              <InputCheckbox 
                  :label="dokument.uploadDateiname"
                  :checked="dokument.uebernehmen" 
                  labelStyle="font-bold text-yellow-500"
                  checkboxStyle="text-blue-600 rounded-xl"/>
          </div>
          
          <div class="space-y-2">
            <div class="flex items-center">
              <FolderIcon class="w-5 h-5 mr-2 " />
              <InputSelect :options="ordner" :selected="dokument.ordner" width="w-full text-sm flex-shrink-0" />
            </div>
              
            <div class="flex items-center">
              <DocumentIcon class="w-5 h-5 mr-2" />
              <InputTextX :value="dokument.digitaleAkteDateiname" width="w-full text-sm"/>
            </div>
          </div>

        </div>

      </div>
  </div>

</template>