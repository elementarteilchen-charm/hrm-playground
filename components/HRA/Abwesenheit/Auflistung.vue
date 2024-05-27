<script setup>
    import { PencilIcon, MinusCircleIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid' 

    const abwesenheitenActions = [
        'Elternkarenz',
        'Bildungskarenz',
        'Unbezahlter Urlaub',
        'Milizübung'
      ]

    const ma = mitarbeiterListe[0]
</script>

<template>
        <LayoutDashboardCard header="Abwesenheiten" buttonText="Abwesenheit erfassen" buttonLink="/hra/Abwesenheiten">
            <div class="px-3">
                <div class="grid grid-cols-[19ch_8ch_12ch_12ch] border-b text-sm font-bold text-muted bg-Blaugrau-10"> 
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

            </div>    
        </LayoutDashboardCard>
    
</template>