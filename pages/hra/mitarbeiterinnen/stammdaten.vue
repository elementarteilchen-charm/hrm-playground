<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
    BookmarkIcon, PlusCircleIcon, }
from '@heroicons/vue/24/outline'

topMenuItems.push({link: '/hra/mitarbeiterinnen/suche', linkText: 'Zurück'})

const tabs = [
    'Persönlich',
    'Adressen und Kontakt',
    'Bankverbindung',
    'Familienangehörige',
    'Invalidität',
];

const activeTab = ref(tabs[0]);

function newTab(ev) {
    activeTab.value = tabs[tabs.indexOf(ev)]
}

const ma = mitarbeiterListe[0]

</script>
<template>
    <div class="flex items-center justify-between">
        <div class="my-3 ml-3 text-3xl font-light text-Blaugrau">
            Stammdaten
        </div>
    </div>
    <div class="my-3 flex gap-2 items-center w-full">
        <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
    </div>
    <main class="grid grid-rows-[auto_auto_auto] gap-8">
        
        <HRAMitarbeiterInfoBox />

        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" :active="0" />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu :tabs="tabs" @newtab="newTab"/>

                <div class="px-4 py-4 border-l pb-12">
                    <div v-show="tabs[0] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenPersoenlich />
                        <StammdatenLand />
                        <StammdatenFamilienstand />
                    </div>
                    <div v-show="tabs[1] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenAdresse />
                    </div>
                    <div v-show="tabs[2] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenBankverbindung />
                    </div>
                    <div v-show="tabs[3] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenFamilienangehoerige />
                    </div>
                    <div v-show="tabs[4] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenBehinderung />
                    </div>
                    <div v-show="tabs[5] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenNotfallkontakt />
                    </div>
                </div>
            </main>
        </div>
    </main>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>