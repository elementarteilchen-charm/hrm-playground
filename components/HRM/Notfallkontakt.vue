<script setup>
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    
    const title = "Notfallkontakt";
    const kontakt = {
        'name': 'Hr. Babunek Josef',
        'beziehung': 'Vater',
        'telefon': '+43 676 333 4446',
        'strasse': 'Kaiser Franz Straße 1',
        'ort': '2500 Baden',
        'land': 'AT'
    };

</script>

<template>
    <div class="border border-gray-300 bg-white pb-3">
        <header class="pr-2 grid grid-cols-[1fr_2rem] gap-2 bg-Blaugrau-10">
            <h3 class="px-4 py-2 font-bold">
                {{title}}
            </h3>
            <div @click="showDialog(title)" class="grid place-self-center hover:bg-blue-700 hover:text-white p-1">
                <PencilSquareIcon class="w-5 h-5 " />
            </div>
        </header>
        <!-- Daten -->
        <div class="px-4 py-2 text-sm"> 
            <ul>
                <li><strong>{{kontakt.name}}</strong> ({{kontakt.beziehung}})</li>
                <li>{{kontakt.telefon}}</li>
                <li>{{kontakt.strasse}}, {{kontakt.plz}} {{kontakt.ort}}, {{kontakt.land}}</li>
            </ul>
        </div>
    </div>

    <LKWWDialog :title="title">
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputSelect label="Beziehung" :options="['Mutter', 'Vater', 'Schwester', 'Sonstig']"/>
          <InputText label="Name" value="Babunek" width="w-1/2"/>
          <InputText label="Vorname" value="Valerie" width="w-1/2"/>
          <InputText label="Handy" value="+43 676 555 2563" width="w-1/2"/>
          <InputText label="Telefon" value="" width="w-1/2"/>
        </div>
    </LKWWDialog>

</template>
