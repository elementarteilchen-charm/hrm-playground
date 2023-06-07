<script setup>
    import { showDialog } from '/utils/modal.js'
    import {    
        QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, 
        ArrowRightIcon, PencilSquareIcon, ArchiveBoxIcon, HomeIcon 
    } from '@heroicons/vue/24/outline' ;

    const inBearbeitung = ref(false);
    const title = "Fehlende Dokumente"
    const buttonText = "Dokumente hochladen"
    const dokumente = ['Reisepass Kopie', 'Abschlusszeugnis Uni', 'Notfallsanitäter Ausbildung'] 
</script>

<template>
    <div class="col-span-2"> <!-- Die Box soll über die volle Breite gehen -->
        <div class="grid grid-rows-[auto_1fr_auto] border border-gray-300 bg-white shadow-md">
            
            <header class="pr-2  text-white bg-red-500" >
                <h3 class="px-4 py-2 font-bold" @click="inBearbeitung = !inBearbeitung">
                    {{title}}
                </h3>
            </header>
            
            <!-- Daten -->
            
            <div class="px-4 py-4 text-sm">
                <div v-if="inBearbeitung" class="px-2 bg-Orange-10 h-8 flex items-center rounded hover:cursor-pointer">
                    <a class="flex justify-between flex-shrink-0 w-full" href="/hrm/meine-anfragen">
                            <div class="text-sm text-orange-700">Der Vorgang ist in Bearbeitung</div>
                            <QuestionMarkCircleIcon class="w-5 h-5 text-orange-700" />
                    </a>  
                </div>
                <div v-for="dok in dokumente" class="mb-2 flex gap-2">
                    <DocumentIcon class="w-5 h-5"/> {{dok}}
                </div>
            </div>

            <footer class="px-4 py-4 text-sm flex justify-start">
                <a v-if="buttonText" class="text-Mittelblau font-bold hover:underline flex gap-1" href="/hrm/personalabteilung-kontaktieren">
                    <span>{{buttonText}}</span><ChevronRightIcon class="w-5 h-5"/></a>
            </footer>
        </div>
    </div>
</template>

<style>

</style>