<script setup>
import {
     CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, ArchiveBoxIcon, BookmarkIcon, PlusCircleIcon, }
    from '@heroicons/vue/24/outline'

const tabs = [
    'Verträge',
    'Beschäftigung',
    'Konkurrenzklauseln',
    'Vertragsdokumente',
];

const activeTab = ref(tabs[0]);
const ma = mitarbeiterListe[0]

</script>

<template>
    <header class="px-8 py-4  print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Persönliche Daten bearbeiten</a> &gt; Vertrag
        </div>

        <HRAMitarbeiterInfoBox headline="Persönliche Daten bearbeiten" class="mb-6"/>
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-8 px-8">

        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Vertrag" />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu heading="Vertragsdaten bearbeiten" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />

                <div class="px-4 my-4 border-l pb-12">
                    <div v-show="activeTab == 'Verträge'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAVertragAuflistung />
                        <HRAVertragVertragsdatensatzneu />
                    </div>
                    <div v-show="activeTab == 'Beschäftigung'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAVertragDokumente />
                    </div>
                    <div v-show="activeTab == 'Konkurrenzklauseln'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAVertragDokumente />
                    </div>
                    <div v-show="activeTab == 'Vertragsdokumente'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAVertragDokumente />
                    </div>

                </div>
            </main>
        </div>
    </main>
</template>
