<script setup>
    import {  QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, ArrowRightIcon, PencilSquareIcon, ArchiveBoxIcon, HomeIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'

    const title = "Adresse";
    const inBearbeitung = ref(false);

</script>
<template>
    <MeineDatenBox :title="title" buttonText="Adressänderung bekannt geben">
        <div class="grid grid-cols-[1fr_auto] gap-4">
            <div class="flex gap-2">
                <HomeIcon class="w-5 h-5 " />
                <ul>
                    <li>Gauermannstraße 43/2</li>
                    <li>2542 Kottingbrunn</li>
                    <li>Österreich</li>
                    <li>—</li>
                </ul>
            </div>
            <div @click="showDialog(title)" class=" w-9 h-9 border-transparent rounded-full 
                        text-blue-600
                        hover:bg-blue-700 hover:text-white hover:text-white
                        p-2 
                        transition duration-300">
                <PencilSquareIcon class="w-5 h-5 " />
            </div>
        </div>
    </MeineDatenBox>

    <LKWWDialog :title="title" >
        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
            <InputText label="Straße:" value="Gauermannstraße 43/2" width="w-4/5" />
            <InputText label="PLZ:" value="2542" width="w-4/5" />
            <InputText label="Ort:" value="Kottingbrunn" width="w-4/5" />
            <InputSelect label="Land:" :options="['AT', 'DE', 'SK']" width="w-4/5" />
            <div class="font-bold text-sm text-gray-700">Nachweis:</div>
            <div class="flex gap-4">
                <div class="border border-gray-300 rounded-md w-32 h-12 bg-white p-4 flex space-x-2" style="box-shadow: rgba(50, 50, 50, 0.1) 0px 2px 4px 0px inset;">
                    <ArchiveBoxIcon class="text-gray-400 w-8 h-8 place-self-center" />
                    <div @click="showUploadDialog" class="text-sm place-self-center">Meldezettel</div>
                </div>
                <div class="p-4">
                    <p>Bitte laden Sie einen Nachweis für Ihre neue Adresse hoch. </p>
                </div>
            </div>
        </div>
    </LKWWDialog>

</template>
<style>
</style>