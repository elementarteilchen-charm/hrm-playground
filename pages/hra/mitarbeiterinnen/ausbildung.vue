<script setup>
import {CheckCircleIcon, XCircleIcon, PlusCircleIcon, } from '@heroicons/vue/24/outline'

const tabs = [
    'Sprachkenntnisse',
    'Schulbildung',
    'Zusatzqualifikationen',
    'Vordienstzeiten',
];

const activeTab = ref(tabs[0]);
const ma = mitarbeiterListe[0]
</script>
<template>
    <header class="px-16 py-4  print:hidden">
<!--         <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Persönliche Daten bearbeiten</a> &gt; Ausbildung
        </div> -->
        <HRAMitarbeiterInfoBox headline="Werdegang" class="mb-6" />
    </header>
    <main class="px-16  grid grid-rows-[auto_auto_auto] gap-6">
        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Werdegang" />
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <NavigationHraTabMenu heading="Ausbildung und Qualifikationen" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                <div class="px-4 py-4 border-l pb-12">
                    <div v-show="'Sprachkenntnisse' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonSprachkenntnisse />
                    </div>
                    <div v-show="'Schulbildung' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonAusbildung />
                    </div>
                    <div v-show="'Zusatzqualifikationen'== activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonZusatzqualifikationen />
                    </div>
                    <div v-show="'Vordienstzeiten'== activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonVordienstzeiten />
                    </div>
                </div>
            </main>
        </div>
    </main>
</template>
<style>
</style>