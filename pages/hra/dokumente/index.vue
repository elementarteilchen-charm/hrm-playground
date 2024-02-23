<script setup>
import { DocumentTextIcon, PlusCircleIcon, CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

const tabs = [
    'HRA',
    'Persis',
];

const activeTab = ref(tabs[0]);
const ma = mitarbeiterListe[0]
const aktiverOrdner = ref('01')
</script>
<template>

    <NavigationHraStickyHeader headline="Persönliche Daten bearbeiten">
        <template #breadcrumb>
            <NavigationHraBreadcrumb :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}]" aktuell="Dokumente" />
        </template>
        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Dokumente" />
    </NavigationHraStickyHeader>


    <div class="mx-8 bg-white border rounded">

        <div class="px-2 py-2  flex justify-center items-center gap-x-2">
            <div>
                <button @click="activeTab = 'HRA'" 
                        class="text-white px-3 py-1 rounded-xl text-sm bg-Hellblau hover:scale-110 hover:shadow-lg transition" 
                        :class="{'bg-Hellblau': activeTab=='HRA', 'bg-Hellgrau': activeTab!='HRA'}">
                    HRA 
                </button>
            </div>
            <div>
                <button @click="activeTab = 'Persis'" 
                        class="text-white px-3 py-1 rounded-xl text-sm" 
                        :class="{'bg-Hellblau': activeTab=='Persis', 'bg-Hellgrau': activeTab!='Persis'}">
                    PERSIS
                </button>
            </div>
        </div>

        <div v-show="activeTab == 'HRA'" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <HRADokumenteVerwaltung />
        </div>
        <div v-show="activeTab == 'Persis'" class="px-2 pt-2 grid grid-rows-1 gap-4">
            <HRADokumenteDigitaleAkte />
        </div>
    </div>
</template>