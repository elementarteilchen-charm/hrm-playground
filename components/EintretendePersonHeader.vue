<script setup>
  import {  PlusCircleIcon } from '@heroicons/vue/24/outline' ;
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid' ;

  const props = defineProps({
        vorname: {type: String}, 
        nachname: {type: String}, 
        anrede: {type: String}
      });

</script>

<template>
  <div class="bg-white p-4 border rounded flex items-center justify-between">
    <div class="font-bold">
      Eintrittsdaten für {{anrede}}
      <a href="" class="hover:bg-blue-100 text-blue-600 inline-flex items-center">
        {{nachname}} {{vorname}} <MagnifyingGlassIcon class="ml-1 w-5 h-5"/>
      </a> bearbeiten
    </div>
    <div>
      <a class="p-2 text-blue-600 hover:underline inline-flex" href=""> 
        <PlusCircleIcon class="w-4 mr-1 text-blue-600"/>
        Zusammenfassung</a>
    </div>
  </div>  
</template>