<script setup>
import { CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const tabs = [
    'Einberufungsbefehl',
    'Dauer',
    'Personalverrechnung',
    'Bestätigung für BH',
    'Vorige Milizübungen'
];

const activeTab = ref(tabs[0]);
const zeigeAnforderungen = ref(false)
const ma = mitarbeiterListe[0]
</script>
<template>
    <div class="flex items-center py-3 justify-between">
        <h1 class="my-3 text-3xl font-light text-Blaugrau">
            Abwesenheiten
        </h1>
        <HRAMitarbeiterSuchfeld class="w-1/3" />
    </div>
    <main class="grid grid-rows-[auto_auto_auto] gap-6">
        <HRAMitarbeiterInfoBox />
        <NavigationHraMitarbeiterinnen :topMenuItems="abwesenheitenMenuItems" :active="2" />
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <NavigationHraTabMenu heading="Milizübung" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                <div class="px-4 py-4 border-l pb-12">
                    <div v-show="'Einberufungsbefehl' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Einberufungsbefehl">
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <CheckCircleIcon class="w-4 h-4 text-green-500" />
                                <span>Diese Daten können direkt geschrieben werden.</span>
                            </p>
                            <p class="text-sm font-light text-Mittelgrau">Bitte hier den akteullen Einberufungsbefehl hochladen:</p>
                            <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Einberufungsbefehl.pdf" kategorie="Sonstiges" />
                        </LayoutFormSection>
                    </div>
                    <div v-show="'Dauer' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Beginn und Ende der Bildungskarenz">
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500" />
                                <span>Diese Daten werden nicht in Persis erfasst und werden nur in HRA gespeichert</span>
                            </p>
                            <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Beginn" />
                                <InputDate label="Ende" />
                            </div>
                        </LayoutFormSection>
                    </div>
                    <div v-show="'Personalverrechnung' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Info an die Personalverrechnung">
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <CheckCircleIcon class="w-4 h-4 text-green-500" />
                                <span>Diese Daten können direkt geschrieben werden.</span>
                            </p>
                            <p class="mb-3 text-gray-400 text-sm flex items-center gap-2">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500" />
                                <span>Diese Daten werden nicht in Persis erfasst und werden nur in HRA gespeichert</span>
                            </p>
                            <InputButton>Personalverrechnung über die Milizübung informieren</InputButton>
                            <div class="mt-6">
                                <h3 class="mb-1 font-bold">Verlauf</h3>
                                31.07.2023: Info an Personalverrechnung versendet.
                            </div>
                        </LayoutFormSection>
                    </div>
                    <div v-show="'Bestätigung für BH' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Bestätigung für BH erstellen">
                            <p class="mb-3 text-gray-400 text-sm flex items-center gap-2">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500" />
                                <span>Diese Daten werden nicht in Persis erfasst und werden nur in HRA gespeichert</span>
                            </p>
                            <InputButton>Bestätigung erstellen / runter laden</InputButton>
                        </LayoutFormSection>
                    </div>
                    <div v-show="'Vorige Milizübungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Vorige Milizübungen">
                            <table class="table-auto bg-white w-1/2">
                                <thead>
                                    <tr class="font-bold h-12 bg-gray-100">
                                        <th class="text-left px-2">Von</th>
                                        <th class="text-left px-2">Bis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="milizuebung in ma.milizuebungen" class="text-sm hover:bg-blue-200 cursor-pointer">
                                        <td class="px-2 py-1 border-b">{{milizuebung.von}}</td>
                                        <td class="px-2 py-1 border-b">{{milizuebung.bis}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </LayoutFormSection>
                    </div>
                </div>
            </main>
        </div>
    </main>
    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>
    <LKWWDialog title="Anforderungen">
        <ul>
            <li>Notwendig ist die Vorlage des Einberufungsbefehls</li>
            <li>Ablage in Digitaler Akte</li>
            <li>Bestätigung vom Unternehmen für BH</li>
            <li>Frage: Word Vorlage? Oder wird individuell erstellt?</li>
            <li>Info an Personalverrechung</li>
            <li>MA bleibt aktiv</li>
            <li>Eintrag in AnAb für Abwesenheit</li>
        </ul>
    </LKWWDialog>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>