<script setup>
    import {  XCircleIcon, PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'

    const title = "Qualifikationen";
    const qualifikationen = [
        ['Photoshop Basiskurs', '02-2021'],
        ['Online Marketing Master', '07-2022'],
        ['Social Media - Content Creator', '03-2023']
        ]

</script>

<template>
    <div class="border border-gray-300 bg-white pb-3">
        <header class="pr-2 grid grid-cols-[1fr_2rem] gap-2 bg-Blaugrau-10" >
            <div>
                <h3 class="px-4 py-2 font-bold">
                    {{title}}
                </h3>
                <div class="px-4 font-light text-xs text-red-500"> Letzte Aktualisierung 23.04.2023 8:00</div>
            </div>

            <div @click="showDialog(title)" class="grid place-self-center hover:bg-blue-700 hover:text-white p-1">
                <PencilSquareIcon class="w-5 h-5 " />
            </div>
        </header>
        <!-- Daten -->
        <div class="px-4 py-2 text-sm"> 
            <div class="" v-for="qualifikation in qualifikationen">
                  {{qualifikation[1]}}: {{qualifikation[0]}}
            </div>    
            <div><span class="text-red-400 pr-2">In Bearbeitung</span>Französisch</div>
        </div>
    </div>
    
    <LKWWDialog :title="title">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
            <InputText v-for="qualifikation in qualifikationen" label="Qualifikation" :value="qualifikation" width="w-4/5"/>
        </div>
    </LKWWDialog>


</template>