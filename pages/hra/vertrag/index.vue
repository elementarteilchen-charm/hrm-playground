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
    <header class="px-8 py-1 print:hidden">
        <HRAMitarbeiterInfoBox headline="Persönliche Daten bearbeiten" class="mb-2"/>
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-8 px-8">
                        
        <div class="py-6 px-3 bg-white border rounded overflow-hidden ">
            <h2 class="text-xl font-bold my-3">Verträge</h2>
            <HRAVertragAuflistungVoll />
        </div>


    </main>
</template>
