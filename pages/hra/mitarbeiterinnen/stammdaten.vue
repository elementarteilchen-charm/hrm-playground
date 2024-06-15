<script setup>
import {
     CheckCircleIcon, ArrowDownCircleIcon, XCircleIcon, ClockIcon, PencilIcon, ArchiveBoxIcon,
    BookmarkIcon, PlusCircleIcon, }
from '@heroicons/vue/24/outline'

const tabs = [
    'Persönlich', 'Adressen und Kontakt', 'Staatsangehörigkeit', 'Bewilligungen', 'Bankverbindung',
    'Familienangehörige', 'Familienstand', 'Sozialversicherung', 'Notfallkontakt', 'Invalidität',
 ];

const activeTab = ref(tabs[0]);

function newTab(ev) {
    activeTab.value = tabs[tabs.indexOf(ev)]
}

const ma = mitarbeiterListe[0]
</script>

<template>
    <NavigationHraStickyHeader headline="Persönliche Daten bearbeiten">
        <template #breadcrumb>
            <NavigationHraBreadcrumb :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}]" aktuell="Stammdaten"/>  
        </template>
        <NavigationHraMitarbeiterinnen :topMenuItems="topMenuItems" active="Stammdaten" />
    </NavigationHraStickyHeader>

    <main class="grid grid-rows-[auto_auto_auto] gap-x-8 px-8">

        <div class="mt-0 bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                    
                <NavigationHraTabMenu heading="Persönliche Daten bearbeiten" :tabs="tabs" @newtab="newTab"/>

                <div class="px-4 my-4 border-l pb-12">

                    <div v-show="activeTab == 'Persönlich'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonPersoenlich />
                    </div>
                    <div v-show="activeTab == 'Staatsangehörigkeit'" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonStaatsangehoerigkeit />
                    </div>
                    <div v-show="activeTab == 'Adressen und Kontakt'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonAdresse />
                    </div>
                    
                    <div v-show="activeTab == 'Bankverbindung'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonBankverbindung />
                    </div>

                    <div v-show="activeTab == 'Bewilligungen'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonBewilligungen />
                    </div>

                    <div v-show="activeTab == 'Familienangehörige'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonFamilienangehoerige />
                    </div>
                    <div v-show="activeTab == 'Familienstand'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonFamilienstand />
                    </div>
                    <div v-show="activeTab == 'Sozialversicherung'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonSozialversicherung />
                    </div>
                    <div v-show="activeTab == 'Notfallkontakt'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonNotfallkontakt />
                    </div>
                    <div v-show="activeTab == 'Invalidität'" class="px-2 grid grid-rows-1 gap-4">
                        <HRAPersonInvaliditaet />
                    </div>

                </div>
            </main>
        </div>
    </main>
</template>
