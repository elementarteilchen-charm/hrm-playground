<script setup>
  import { PlusCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline' ;  
</script>

<template>
  <div class="grid grid-rows-[4rem_1fr_1rem] h-screen">
    <div class="bg-blue-700 text-white h-16">HRA</div>
    <div class="grid grid-cols-[12rem_1fr] bg-white">
      
      <div class="bg-gray-200 border-r">
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
              <a href="/hra-dokumente" class="hover:underline text-blue-700">
                HRA Dokumente
              </a>
            </li>
            <li class="flex gap-2 items-center">
              <ChevronRightIcon class="w-4 h-4 text-blue-700"/>
              <a href="/" class="hover:underline text-blue-700">
                Abwesenheiten</a>
            </li>
            <li>
              &nbsp;
            </li>

            <li>
              <a href="/hrm/meine-daten" class="hover:underline text-blue-700">
                Meine Daten
              </a>
            </li>
            <li>
              <a href="/hrm/personalabteilung-kontaktieren" class="hover:underline text-blue-700">
                Personalabteilung kontaktieren
              </a>
            </li>
            <li>
              <a href="/hrm/meine-anfragen" class="hover:underline text-blue-700">
                Meine Anfragen
              </a>
            </li>
            <li>
              <a href="/hrm/downloads" class="hover:underline text-blue-700">
                Downloads und Links
              </a>
            </li>


          </ul>
        </nav>
      </div>
      
      <div class="p-6    bg-gray-100" 
          style="height: calc(100vh - 4rem - 1rem); overflow-y: auto;">
          <div class="mx-auto container max-w-5xl">
            <NuxtPage />
          </div>
      </div>

    </div>
    <div class="bg-gray-600 text-white text-gray-200 text-xs">Footer</div>
  </div>
</template>
