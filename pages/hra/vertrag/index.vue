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
                        
        <div class="px-3 bg-white border  rounded overflow-hidden ">
            <HRAVertragAuflistungVoll />
        </div>

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu heading="Vertragsdaten bearbeiten" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />

                <div class="px-4 my-4 border-l pb-12">

                    <div v-show="activeTab == 'Verträge'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <!-- <HRAVertragVertragsdatensatzneu /> -->
                    </div>

                    <div v-show="activeTab == 'Beschäftigung'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        
                        <LayoutFormSection title="Jubiläumsdatum und aktives DV">
                            <div class=" grid grid-cols-[minmax(14rem,min-content)_1fr] gap-2">  
                              <InputDate label="Datum Jubiläumsberechnung" />
                              <InputDate label="Aktives DV seit" />
                            </div>
                        </LayoutFormSection>

                        <LayoutFormSection title="Befristetes Arbeitsverhältnis">
                            <div class=" grid grid-cols-[minmax(14rem,min-content)_1fr] gap-2">  
                              <InputDate label="Befristung von" />
                              <InputDate label="Befristung bis" />
                              <InputText label="Bemerkung" width="w-1/2"/>
                            </div>
                        </LayoutFormSection>

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
