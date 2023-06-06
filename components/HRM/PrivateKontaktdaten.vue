<script setup>
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    
    const title = "Private Kontaktdaten";

    function showDialog(dialogId) {
        document.getElementById(dialogId).showModal();
    }

</script>

<template>
    <div class="border border-gray-200  bg-white pb-3">
        <header class="pr-2 grid grid-cols-[1fr_2rem] gap-2 bg-Blaugrau-10" >
            <h3 class="px-4 py-2 font-bold">
                {{title}}
            </h3>
            <div @click="showDialog(title)" class="grid place-self-center hover:bg-blue-700 hover:text-white p-1">
                <PencilSquareIcon class="w-5 h-5 " />
            </div>
        </header>
        <!-- Daten -->
        <div class="px-4 py-2 text-sm"> 
            <div class="grid grid-cols-2 gap-4">
          <ul>
            <li>Gauermannstraße 43/2</li>
            <li>2542 Kottingbrunn</li>
            <li>Österreich</li>
            <li>—</li>
          </ul>
          <ul>
            <li>jan.ehrenreich@gmx.at</li>
            <li>+4366488458016</li>
          </ul>
        </div>    
    </div>
    </div>

    <LKWWDialog :title="title">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputText label="Private Email:" value="jan.ehrenreich@gmx.at" width="w-4/5"/>
          <InputPhone label="Private Telefonnummer:" value="4366488458016" width="w-4/5"/>
        </div>
    </LKWWDialog>

</template>

