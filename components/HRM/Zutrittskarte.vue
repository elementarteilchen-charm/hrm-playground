<script setup>
    import {  QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, ArrowRightIcon, PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'
    
    const title = "Zutrittskarte";
    const inBearbeitung = ref(false);
</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] border border-gray-300 bg-white">
        
        <header class="pr-2 grid grid-cols-[1fr_auto] gap-2 items-center bg-Blaugrau-10" >
            <h3 class="px-4 py-2 font-bold" @click="inBearbeitung = !inBearbeitung">
                {{title}}
            </h3>
            <div v-if="inBearbeitung" class="px-4">
                <a href="/hrm/meine-anfragen">
                    <div class="flex gap-2">
                        <span class="text-xs text-orange-500">In Bearbeitung</span>
                        <QuestionMarkCircleIcon class="w-4 h-4 text-orange-500" />
                    </div>
                </a>
            </div>
            <!-- <div @click="showDialog(title)" class="grid place-self-center hover:bg-blue-700 hover:text-white p-1">
                <PencilSquareIcon class="w-5 h-5 " />
            </div> -->
        </header>
        
        <!-- Daten -->
        <div class="px-4 py-3 text-sm">
            <div class="flex gap-2">
                <CreditCardIcon class="w-5 h-5 " />
                <span>Kartennummer: 12314576646843</span>
            </div>
        </div>    
        <footer class="px-4 py-3 text-sm flex justify-end">
            <a class="text-Mittelblau hover:underline flex gap-2" href="/hrm/personalabteilung-kontaktieren">
                <span>Neue Karte beantragen</span><ChevronRightIcon class="w-5 h-5"/></a>
        </footer>
    </div>

    <LKWWDialog :title="title" >
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
          <InputText label="Kennzeichen 01" value="MD 3355 X" width="w-32"/>
          <InputText label="Kennzeichen 02" value="" width="w-32"/>
        </div>
    </LKWWDialog>

</template>
