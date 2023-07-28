<script setup>
  import { CurrencyEuroIcon, DocumentTextIcon, UserCircleIcon, ClockIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, PlusCircleIcon, Bars3Icon, ChevronRightIcon } from '@heroicons/vue/24/outline' ;  
  
  const zeigeHRM = ref(false)
  // const zeigeHRM = ref(true)
  const route = useRoute()
</script>

<template>
  <div class="grid grid-rows-[55px_1fr_1rem] bg-Blaugrau-10 h-screen">

    <div class="bg-Mittelblau flex items-center h-[55px]">
      <div class="pl-4 text-2xl font-bold italic place-self-center text-white uppercase">Walter Group
      <span class="text-Gruen-logo">HRA</span></div>
    </div>
    
    <div class="grid grid-cols-[250px_1fr] gap-8">
      
      <div class="border-r">
        
        <div class="flex justify-end p-2">
          <a href="/" class="hover:bg-Mittelblau hover:text-white text-Mittelblau">
          <Bars3Icon class="w-5 h-5"/></a>
        </div>

        
        <nav class="">
          <ul class="space-y-3">
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <UserCircleIcon class="w-5 h-5 text-Mittelblau"/>
              <a href="/hra/mitarbeiterinnen/suche" 
                  :class="{'font-bold': route.path === '/hra/mitarbeiterinnen/suche'}">
                Mitarbeiter*innen</a>
            </li>
            
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <ArrowRightOnRectangleIcon class="w-5 h-5 text-blue-800"/>
              <a href="/hra-stammdaten" class="">
                Eintritte</a>
            </li>
            <li class="">
              
              <div class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                <ClockIcon class="w-5 h-5 text-blue-800"/>
                <a href="/hra/events/uebersicht"  :class="{'font-bold': route.path === '/hra/events/suche'}">
                  Events & Änderungen</a>
              </div>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <ClockIcon class="w-5 h-5 text-blue-800"/>
              <a href="/" class="">
                Abwesenheiten</a>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <ArrowLeftOnRectangleIcon class="w-5 h-5 text-blue-800"/>
              <a href="/" class="">
                Austritte</a>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <DocumentTextIcon class="w-5 h-5 text-blue-800"/>
              <a href="/hra-dokumente">
                Dokumente
              </a>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <CurrencyEuroIcon class="w-5 h-5 text-blue-800"/>
              <a href="/hra/personalverrechnung/" :class="{'font-bold': route.path === '/hra/personalverrechnung/'}">
                Personalverrechnung
              </a>
            </li>

          </ul>
        </nav>

        <div v-if="zeigeHRM" class="px-4 mt-12 mb-6 py-2 bg-OrangeGelb text-white">
          HRM
        </div>
        <nav v-if="zeigeHRM">
          <ul class="space-y-3">
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">  
                  <span class="font-bold">Self Service</span>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <a href="/hrm/personalabteilung-kontaktieren" class="hover:underline text-blue-700">
                Personalabteilung kontaktieren
              </a>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <a href="/hrm/meine-anfragen" class="hover:underline text-blue-700">
                Meine Anfragen
              </a>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <a href="/hrm/meine-daten" class="hover:underline text-blue-700">
                Meine Daten
              </a>
            </li>
            <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
              <a href="/hrm/downloads" class="hover:underline text-blue-700">
                Downloads
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div class="pr-8 max-w-[1600px]  bg-Blaugrau-10" 
          style="height: calc(100vh - 4rem - 1rem); overflow-y: auto;">
        <NuxtPage />
      </div>

    </div>
    <div class="bg-gray-600 text-white text-gray-200 text-xs">Footer</div>
  </div>
</template>
