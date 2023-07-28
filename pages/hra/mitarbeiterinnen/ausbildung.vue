<script setup>
import {
    CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
    BookmarkIcon, PlusCircleIcon, }
from '@heroicons/vue/24/outline'

  const tabs = [
        'Sprachkenntnisse',
        'Schulbildung', 
        'Zusatzqualifikationen',
        'Vordienstzeiten',
    ];

const activeTab = ref(tabs[0]);

function newTab(ev) {
    activeTab.value = tabs[tabs.indexOf(ev)]
}

const ma = mitarbeiterListe[0]
</script>
<template>
    <div class="flex items-center py-3 justify-between">
        <h1 class="my-3 text-3xl font-light text-Blaugrau">
            Persönliche Daten bearbeiten
        </h1>
        <HRAMitarbeiterSuchfeld class="w-1/3"/>
        {{activeTab}}
    </div>
    
    
    <main class="grid grid-rows-[auto_auto_auto] gap-6">
        
        <HRAMitarbeiterInfoBox />

        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" :active="1" />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <nav>
                    <h3 class="px-4 mt-6 text-lg font-light text-Blaugrau">
                        Ausbildung und Qualifikationen
                    </h3>        
                    
                    <NavigationHraTabMenu :tabs="tabs" @newtab="newTab"/>
                </nav>

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