<script setup>
    import {  QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, ArrowRightIcon, PencilSquareIcon, ArchiveBoxIcon, HomeIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'

    const title = "Adresse";
    const inBearbeitung = ref(false);

</script>
<template>
    
    <div class="grid grid-rows-[auto_1fr_auto] border border-gray-200 bg-white shadow-md">
        
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
        </header>
        
        <!-- Daten -->
        
        <div class="px-4 py-2 text-sm">
            <div class="grid grid-cols-[1fr_auto] gap-4">
                <div class="flex gap-2 pt-3">
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
        </div>

        <footer class="px-4 py-4 text-sm flex justify-start">
            <a class="text-Mittelblau font-bold hover:underline flex gap-1" href="/hrm/personalabteilung-kontaktieren">
                <span>Adressänderung bekannt geben</span><ChevronRightIcon class="w-5 h-5"/></a>
        </footer>
    </div>


    <dialog :id="title" class="shadow-lg p-0 bg-gray-200" style="width: 50vw; height: 50vh;">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[auto_1fr_3rem] h-full">
                <header class="px-4 py-3 text-lg">
                    {{title}} bearbeiten
                </header>
                <main class="px-4 py-2" style="height: calc(100% + 1rem); overflow-y: auto;">
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
                </main>
                <footer class="px-4 py-2 border-t ">
                    <div class="flex justify-end space-x-4">
                        <button class="text-sm text-blue-600 hover:underline">Abbrechen</button>
                        <button class="bg-blue-700 hover:bg-blue-600 text-white text-sm px-2 py-1">Speichern</button>
                    </div>
                </footer>
            </div>
        </form>
    </dialog>
</template>
<style>
</style>