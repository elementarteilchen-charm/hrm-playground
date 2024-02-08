<script setup>
	import { DocumentTextIcon, PlusCircleIcon, CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

	const tabs = [
	    'HRA Dokumentenverwaltung',
	    'Persis Digitale Akte',
	];

	const activeTab = ref(tabs[0]);
	const ma = mitarbeiterListe[0]
	const aktiverOrdner = ref('01')
</script>

<template>
    <header class="px-8 py-4  print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/mitarbeiterinnen" class=" hover:text-Mittelblau ">
                Persönliche Daten bearbeiten</a> &gt; Dokumentenverwaltung
        </div>
        <HRAMitarbeiterInfoBox headline="Dokumentenverwaltung" class="mb-6" />
    </header>
    <main class="px-8 grid grid-rows-[1fr_auto]  gap-6" >
        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Dokumente" />
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <NavigationHraTabMenu heading="Dokumente" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                
                <div v-show="activeTab == 'HRA Dokumentenverwaltung'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                	<HRADokumenteVerwaltung />
                </div>
                
                <div v-show="activeTab == 'Persis Digitale Akte'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                	<HRADokumenteDigitaleAkte />
                </div>
            </main>
        </div>
    </main>
    <div>
    </div>
</template>