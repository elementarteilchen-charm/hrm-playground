<script setup>
import {
    CheckCircleIcon,
    XCircleIcon,
    PlusCircleIcon,
}
from '@heroicons/vue/24/outline'
import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline'
import { CloudArrowUpIcon } from '@heroicons/vue/24/outline'

const tabs = [
    'Hinzufügen',
    'Verwalten',
    // 'Dokumente hochladen', 
];

const activeTab = ref(tabs[0]);
const ma = mitarbeiterListe[0]
</script>
<template>
    <header class="px-16 py-4  print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Persönliche Daten bearbeiten</a> &gt; Dokumente
        </div>
        <HRAMitarbeiterInfoBox headline="Dokumente" class="mb-6" />
    </header>
    <main class="px-16 grid grid-rows-[auto_auto_auto] gap-6">
        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Dokumente" />
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <NavigationHraTabMenu heading="Dokumente" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
            </main>
        </div>
    </main>
</template>