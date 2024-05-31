<script setup>
  import {ChevronRightIcon, UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon} from '@heroicons/vue/24/outline'
  const abwesenheitenActions = [
        'Elternkarenz',
        'Bildungskarenz',
        'Unbezahlter Urlaub',
        'Milizübung'
      ]
  const ma = mitarbeiterListe[0]

  function bearbeiten(abwesenheitBezeichnung) {
    alert(abwesenheitBezeichnung)
    document.getElementById(abwesenheitBezeichnung).showModal();
  }

</script>

<template>
    <header class="px-8 py-1 print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Abwesenheiten </a>
        </div>
        <HRAMitarbeiterInfoBox headline="Abwesenheiten" class="mb-2" />
    </header>

    
    <div class="p-8">
      <div class="bg-white p-3">
        
      
        <table class="bg-white border-b text-sm  w-3/4">
          <thead class="font-bold text-muted bg-Blaugrau-10 ">
            <tr>
              <th class="px-2 py-1">Abwesenheit</th>
              <th class="px-2 py-1">Status</th>
              <th class="px-2 py-1 text-center">Von</th>
              <th class="px-2 py-1 text-center">Bis</th>
              <th class="px-2 py-1 text-center">Bearbeiten</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="abwesenheit, index in ma.abwesenheiten" 
                class="hover:bg-Blaugrau-10 py-1 border-b ">
              <td class="px-2 py-1">
                {{abwesenheit.art}}
              </td>
              <td class="px-2 py-1">
                <span v-if="abwesenheit.aktiv" 
                      class="inline-block border-transparent h-5 px-2 py-[2px] rounded bg-Gruen text-white text-xs">Laufend</span>
              </td>
              <td class="px-2 py-1 tabular-nums text-center">
                {{abwesenheit.von}}
              </td>
              <td class="px-2 py-1 tabular-nums text-center">
                {{abwesenheit.bis}}
              </td>
              <td class="px-2 py-1 text-center">
                <button v-on:click="bearbeiten(abwesenheit.art)" href=""  class="text-Mittelblau hover:underline">
                  Bearbeiten
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    
    <template v-for="abwesenheit in abwesenheitenActions">
      <dialog title="{{abwesenheit.art}}">
        {{abwesenheit}}
      </dialog>
    </template>
</template>

     <!--  <div class="px-3 py-3 bg-white border rounded">
      <dialog :id="abwesenheit.art">
        {{abwesenheit}}
        
      </dialog>
          <div class="grid grid-cols-[19ch_8ch_12ch_12ch_12ch] border-b text-sm font-bold text-muted bg-Blaugrau-10"> 
              <div class="px-2 py-1"> Abwesenheit </div>
              <div class="px-2 py-1"> Status </div>
              <div class="px-2 py-1 text-center"> Von </div>
              <div class="px-2 py-1 text-center"> Bis </div>
              <div class="px-2 py-1 text-center"> Bearbeiten </div>
          </div>

          <div v-for="abwesenheit, index in ma.abwesenheiten"  
              class="grid grid-cols-[20ch_8ch_12ch_12ch_12ch]  
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
            <div class="px-2 py-1">
              <a href="" class="text-Mittelblau hover:underline">Bearbeiten</a> 
            </div>
          </div>        

      </div>
       -->
<!-- <div class="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6 px-8">
    
    <main>
        <ul class="space-y-1">
            <li v-for="item in eventsAktionen.auszeiten.items" class="">
                <a :href="item.link" class="">
                    <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau transition">
                        <div class="p-1  transition">
                            <ChevronRightIcon class="w-4 h-4" />
                        </div>
                        {{item.text}}
                    </div>
                </a>
            </li>
        </ul>
    </main>
</div> -->