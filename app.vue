<script setup>
  import { PlusCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline' ;  
</script>

<template>
  <div class="grid grid-rows-[55px_1fr_1rem] h-screen">
    
    <div class="bg-Mittelblau flex items-center h-[55px]">
      <div class="pl-4 text-2xl place-self-center text-white uppercase">Walter Group HRA</div>
    </div>
    
    <div class="grid grid-cols-[250px_1fr] bg-white">
      
      <div class="bg-Blaugrau-10 border-r">
        <nav class="p-6 text-sm">
          <ul class="space-y-3">
            <li class="flex gap-2 items-center">
              <ChevronRightIcon class="w-4 h-4 text-blue-700"/>
              <a href="/" class="hover:underline text-blue-700">
                Start</a>
            </li>
            <li class="flex gap-2 items-center">
              <ChevronRightIcon class="w-4 h-4 text-blue-700"/>
              <a href="/hra-stammdaten" class="hover:underline text-blue-700">
                Eintritte</a>
            </li>
            <li class="flex gap-2 items-center">
              <ChevronRightIcon class="w-4 h-4 text-blue-700"/>
              <a href="/" class="hover:underline text-blue-700">
                Abwesenheiten</a>
            </li>
            <li>
              <hr>  
            </li>
            <li>
              <a href="/meine-daten" class="hover:underline text-blue-700">
                Meine Daten
              </a>
            </li>

            <li>
              <a href="/hra-dokumente" class="hover:underline text-blue-700">
                HRA Dokumente
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div class="p-6  max-w-[1600px]  bg-white" 
          style="height: calc(100vh - 4rem - 1rem); overflow-y: auto;">
        <NuxtPage />
      </div>

    </div>
    <div class="bg-gray-600 text-white text-gray-200 text-xs">Footer</div>
  </div>
</template>
