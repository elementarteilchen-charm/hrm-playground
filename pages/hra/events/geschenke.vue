<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, BookmarkIcon, PlusCircleIcon, ArchiveBoxIcon, TrashIcon, ExclamationTriangleIcon
}
from '@heroicons/vue/24/outline'

const tabs = [
    'Geschenk',
];

const zeigeAnforderungen = ref(false)
const ma = mitarbeiterListe[0]
const activeTab = ref(tabs[0]);

const datenfelder = ['Kategorie', 'Bezeichnung', 'Betrag', 'Ereignisdatum', 'Ausgabedatum', 'ausgegeben von', 'Betriebszugehörigkeit']


</script>

<template>
    <header class="px-16 mt-3 print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/events" class=" hover:text-Mittelblau ">
                Events & Änderungen</a> &gt; Geschenke
        </div>
        <div class="flex items-center py-3 justify-between">
            <h1 class="my-3 text-3xl font-light text-Blaugrau">
                Events & Änderungen
            </h1>
            <HRAMitarbeiterSuchfeld class="w-1/3" />
        </div>
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-16">
        <HRAMitarbeiterInfoBox />
        <NavigationHraMitarbeiterinnen :topMenuItems="eventMenuItems" :active="1" />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">

                <NavigationHraTabMenu heading="Geschenke" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />

                <div class="px-4 py-4 border-l pb-12">

                    <div v-show="'Familienangehörige' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenFamilienangehoerige />
                    </div>
                    
                    <div v-show="'Geschenk' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        
                        <LayoutFormSection title="Geschenke">
                            
                            <table class="border rounded bg-white">
                                <thead>
                                    <tr class="text-sm h-10 bg-gray-100">
                                        <th v-for="feld in datenfelder" class="px-2">{{feld}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="geschenk in geschenke" class="text-sm border-b">
                                        <td class="px-2 py-2">{{geschenk.Kategorie}}</td>
                                        <td class="px-2 ">{{geschenk.Bezeichnung}}</td>
                                        <td class="px-2 text-right tabular-nums">{{geschenk.Betrag}}</td>
                                        <td class="px-2 text-center tabular-nums">{{geschenk.Ereignisdatum}}</td>
                                        <td class="px-2 text-center tabular-nums">{{geschenk.Ausgabedatum}}</td>
                                        <td class="px-2 ">{{geschenk.ausgegeben_von}}</td>
                                        <td class="px-2 text-right">{{geschenk.Betriebszugehörigkeit}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </LayoutFormSection>
                        <li>Die erfassten Daten zum Hochzeitsgeschenk sind (Tabelle LKW_MA_GESCHENK):</li>
                    </div>
                    

                </div>
            </main>
        </div>
        <div    @click="zeigeAnforderungen = !zeigeAnforderungen" 
                class="hover:cursor-pointer text-Mittelblau">
            Anforderungen
        </div>
        <div v-show="zeigeAnforderungen" >
            <li>Die erfassten Daten zum Hochzeitsgeschenk sind (Tabelle LKW_MA_GESCHENK):</li>
            <li>Kategorie, Bezeichnung, Betrag, Ereignisdatum, Ausgabedatum, ausgegeben von, Betriebszugehörigkeit</li>
            <li>Betrag aus Sharepoint je nach Betriebszugehörigkeit</li>
            <li>Dauer der Zugehörigkeit ist wichtig für Auswertungen und Bestellungen</li>
            <li>Geschenk nur für 1. Hochzeit</li>
        </div>
    </main>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>