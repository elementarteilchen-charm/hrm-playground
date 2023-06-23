<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
    BookmarkIcon, PlusCircleIcon, }
from '@heroicons/vue/24/outline'

  const tabs = [
        'Schulbildung', 
        'Sprachkenntnisse',
        'Qualifikationen'
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
            Ausbildung
        </div>
    </div>
    <div class="my-3 flex gap-2 items-center w-full">
        <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
    </div>
    <main class="grid grid-rows-[auto_auto_auto] gap-8">
        
        <HRAMitarbeiterInfoBox />

        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" :active="1" />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu :tabs="tabs" @newtab="newTab"/>

                <div class="px-4 py-4 border-l pb-12">
                    <div v-show="tabs[0] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenAusbildung />
                    </div>
                    <div v-show="tabs[1] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenSprachkenntnisse />
                    </div>
                    <div v-show="tabs[2] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenQualifikationen />
                    </div>
                    
                </div>
            </main>
        </div>
    </main>
</template>
<style>

</style>