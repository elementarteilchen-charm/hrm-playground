<script setup>
import {
     CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, ArchiveBoxIcon, BookmarkIcon, PlusCircleIcon, }
    from '@heroicons/vue/24/outline'

const abwesenheitenActions = [
    'Elternkarenz',
    'Bildungskarenz',
    'Unbezahlter Urlaub',
    'Milizübung'
  ]

const ma = mitarbeiterListe[0]


</script>

<template>
    <header class="px-8 py-1 print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Persönliche Daten </a> &gt; Vertrag
        </div>
        <HRAMitarbeiterInfoBox headline="Persönliche Daten" class="mb-2"/>
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-8 px-8">
      Übersicht <br>
      Abwesenheiten anzeigen <br>
      Aktionen erlauben <br>
        <!-- <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Vertrag" /> -->
        <div>
          <div class="border rounded bg-white p-3 w-1/2">
            <div class="flex justify-between items-center">
              
              <h2 class="font-light text-xl text-Mittelblau mb-2">Abwesenheiten</h2>

            </div>

            <div class="grid grid-cols-[20ch_8ch_12ch_12ch] border-b text-sm text-muted bg-Blaugrau-10"> 
              <div class="px-2 py-1"> Abwesenheit </div>
              <div class="px-2 py-1"> Status </div>
              <div class="px-2 py-1 text-center"> Von </div>
              <div class="px-2 py-1 text-center"> Bis </div>
            </div>
            <div v-for="abwesenheit, index in ma.abwesenheiten"  
                class="grid grid-cols-[20ch_8ch_12ch_12ch]  
                      hover:bg-Blaugrau-10
                      py-1 border-b border-b-Blaugrau text-sm">
              <div class="px-2 py-1">
                {{abwesenheit.art}}
              </div>
              <div class="px-2 py-1">
                <span v-if="abwesenheit.aktiv" 
                    class="inline-block border-transparent h-5 px-2 py-[2px] rounded bg-Gruen text-white text-xs">Aktiv</span>
              </div>
              <div class="px-2 py-1 tabular-nums">
                {{abwesenheit.von}}
              </div>
              <div class="px-2 py-1 tabular-nums">
                {{abwesenheit.bis}}
              </div>
            </div>
          
          <div class="mt-3 flex justify-end">
            
            <button popovertarget="aktionen" class="flex gap-2 items-center bg-Mittelblau text-white px-2 py-1">
              <PlusCircleIcon class="w-5 h-5"/> Neue Abwesenheit
            </button>

              <div class="absolute">
                <div popover="auto" id="aktionen" class="border rounded shadow-lg">
                  <div v-for="action in abwesenheitenActions" >
                      <a class="px-2 py-1 hover:bg-Blaugrau-10 block" href="/hra/mitarbeiterinnen/abwesenheiten">
                        {{action}}
                      </a>
                    
                  </div>
                </div>
              </div>  
            </div>
          </div>

        </div>
    </main>
</template>

<style>
      :popover-open {
        width: fit-content;
        height: fit-content;
        position: absolute;
        inset: unset;
        bottom: 50%;
        right: 50%;
        margin: 0;
      }
</style>

