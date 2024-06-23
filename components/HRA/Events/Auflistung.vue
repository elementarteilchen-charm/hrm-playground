<script setup>
    import { PencilIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid' 

    const eventsActions = [
        'Namensänderung',
        'Hochzeit',
        'Geburt',
      ]

    const ma = mitarbeiterListe[0]
</script>

<template>
        <LayoutDashboardCard header="Events & Änderungen" buttonText="Event erfassen" buttonLink="/hra/events">
            <div class="px-3">

                <div class="grid grid-cols-[12rem_8rem_8rem] border-b text-sm text-muted font-bold bg-Blaugrau-10"> 
                    <div class="px-2 py-1"> Ereignis </div>
                    <div class="px-2 py-1 text-center"> Datum </div>
                    <div class="px-2 py-1 text-center"> &nbsp; </div>
                </div>

                <div v-for="abwesenheit, index in ma.events"  
                    class="grid grid-cols-[12rem_8rem_8rem]  
                          hover:bg-Blaugrau-10
                          py-1 border-b border-b-Blaugrau text-sm">
                  <div class="px-2 py-1">
                    {{abwesenheit.art}}
                  </div>
                  <div class="px-2 py-1 text-center tabular-nums">
                    {{abwesenheit.von}}
                  </div>
                  <div class="px-2 py-1 tabular-nums">
                    {{abwesenheit.bis}}
                  </div>
                </div>   
            </div>  
        </LayoutDashboardCard>
        
</template>