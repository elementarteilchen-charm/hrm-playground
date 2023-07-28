<script setup>
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'
    
    const title = "Datenschutzeinstellungen";

</script>

<template>
    <div class="border border-gray-300 bg-white pb-3">
        <header class="pr-2 grid grid-cols-[1fr_2rem] gap-2 bg-Blaugrau-10" >
            <h3 class="px-4 py-2 font-bold">
                {{title}}
            </h3>
            <!-- <div @click="showDialog(title)" class="grid place-self-center hover:bg-blue-700 hover:text-white p-1">
                <PencilSquareIcon class="w-5 h-5 " />
            </div> -->
        </header>
        
        <!-- Daten -->
        <div class="px-4 py-2 text-sm"> 
            <div class="grid grid-cols-1 gap-4">
                <p class="mt-2 font-bold">
                    Ich bin damit einverstanden, dass folgende Informationen veröffentlicht werden:
                </p>
                <ul>
                    <li><InputCheckbox checkboxLabel="Hochzeit" /></li>
                    <li><InputCheckbox checkboxLabel="Geburt eines Kindes" /></li>
                    <li><InputCheckbox checkboxLabel="Firmenjubiläum" /></li>
                </ul>
                
                <p class="mt-2 font-bold">
                    Das Insider Magazin lese ich lieber:
                </p>
                <ul>
                    <li>
                        <InputRadio name="insider" :options="['Online', 'In Papierform']" />
                    </li>
                </ul>

            <div>
          </div>
        </div>    
    </div>
    </div>

    <LKWWDialog :title="title" >
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputText label="Kennzeichen 01" value="MD 3355 X" width="w-32"/>
          <InputText label="Kennzeichen 02" value="" width="w-32"/>
        </div>
    </LKWWDialog>

</template>
