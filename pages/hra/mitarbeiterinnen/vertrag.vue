<script setup>
import {
     CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, ArchiveBoxIcon,
    BookmarkIcon, PlusCircleIcon, }
from '@heroicons/vue/24/outline'

const tabs = [
    'Vertrag',

];

const activeTab = ref(tabs[0]);
const ma = mitarbeiterListe[0]
</script>

<template>
    <header class="px-16 mt-3 print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Persönliche Daten bearbeiten</a> &gt; Vertrag
        </div>
        <div class="flex items-center py-3 justify-between">
            <h1 class="my-3 text-3xl font-light text-Blaugrau">
                Persönliche Daten bearbeiten
            </h1>
            <HRAMitarbeiterSuchfeld class="w-1/3" />
        </div>
    </header>

    <div class="px-16">
        <HRAMitarbeiterInfoBox class="mb-6"/>
    </div>    

    <main class="grid grid-rows-[auto_auto_auto] gap-8 px-16">

        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" :active="2" />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu heading="Vertragsdaten" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />                        

                <div class="px-4 my-4 border-l pb-12">

                    <div v-show="activeTab == 'Vertrag'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAVertragVertragsdatensatz />
                    </div>

                </div>
            </main>
        </div>
    </main>
</template>
