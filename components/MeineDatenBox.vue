<script setup>
    import { showDialog } from '/utils/modal.js'
    import {    
        QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, 
        ArrowRightIcon, PencilSquareIcon, ArchiveBoxIcon, HomeIcon 
    } from '@heroicons/vue/24/outline' ;

    const inBearbeitung = ref(false);
    
    const props = defineProps({
        title: {type: String}, 
        type: {type: String, default: ''},
        buttonText: {type: String, default: 'Bearbeiten'},
        buttonLink: {type: String, default: ''}
    });
 
</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] border border-gray-300 bg-white shadow-md">
        
        <header class="pr-2  bg-Blaugrau-10" >
            <h3 class="px-6 py-2 text-sm font-bold" @click="inBearbeitung = !inBearbeitung">
                {{title}}
            </h3>
        </header>
        
        <!-- Daten -->
        
        <div class="px-6 py-4 text-sm">
            <div v-if="inBearbeitung" class="px-2 mb-3 bg-Orange-10 h-8 flex items-center rounded hover:cursor-pointer">
                <a class="flex justify-between flex-shrink-0 w-full" href="/hrm/meine-anfragen">
                        <div class="text-sm text-orange-700">Der Vorgang ist in Bearbeitung</div>
                        <QuestionMarkCircleIcon class="w-5 h-5 text-orange-700" />
                </a>  
            </div>
            <slot></slot>
        </div>

        <footer class="px-6 py-4 text-sm flex justify-start">
            <a v-if="buttonText" class="text-Mittelblau font-bold hover:underline flex gap-1" href="/hrm/personalabteilung-kontaktieren">
                <span>{{buttonText}}</span><ChevronRightIcon class="w-5 h-5"/></a>
        </footer>
    </div>

    
</template>

<style>
 
</style>