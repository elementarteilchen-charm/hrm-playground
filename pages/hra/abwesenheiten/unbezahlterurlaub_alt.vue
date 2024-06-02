w<script setup>
import { CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const tabs = [
    'Anfrage',
    'Dauer',
    'Firmenvereinbarung',
    'Historie',
    'Durchführen'
];

const activeTab = ref(tabs[0]);
const zeigeAnforderungen = ref(false)
const ma = mitarbeiterListe[0]

const urlaubsanfrage = {
	von: '2023-09-01',
	bis: '2023-12-31',
	gespraechsdatum: '2023-06-04',
	firmenvereinbarung: true
}

const anfrage = ref(urlaubsanfrage)
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
        <div class="flex justify-between">
            <NavigationHraMitarbeiterinnen :topMenuItems="abwesenheitenMenuItems" :active="5" />
            <InputButton>Abschließen</InputButton>
        </div>
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <div>
                    <NavigationHraTabMenu heading="Unbezahlter Urlaub" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                </div>
                <div class="px-4 py-4 border-l pb-12">
                    <div v-show="'Dauer' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Beginn und Ende des unbezahlten Urlaubs">
                            <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Beginn" :value="anfrage.von" />
                                <InputDate label="Ende" :value="anfrage.bis"/>
                            </div>
                            <!-- <p class="text-gray-400 text-sm flex items-center gap-2 w-1/2 my-3">
                                   <ExclamationTriangleIcon class="w-4 h-4 text-orange-500 flex-shrink-0" />
                                   <span>Bildungskarenzzeit reduziert die Summe der anrechenbaren Zeit → wird aktuell in Persis als Eintrag in Vordienstzeiten erfasst</span>
                               </p> -->
                        </LayoutFormSection>
                    </div>

                    <div v-show="'Anfrage' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Anfrage">
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <CheckCircleIcon class="w-4 h-4 text-green-500" />
                                <span>Diese Daten können direkt geschrieben werden.</span>
                            </p>
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500" />
                                <span>Diese Daten sind nicht in Persis vorhanden und werden nur in HRA erfasst</span>
                            </p>
                            <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Gesprächstermin" />
                                <InputTextarea label="Gesprächsnotizen" class="w-4/5 h-24" />
                            </div>
                        </LayoutFormSection>
                    </div>

                    <div v-show="'Firmenvereinbarung' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection>
                            <p class="text-gray-400 text-sm flex items-center gap-2 w-1/2 my-3">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500 flex-shrink-0" />
                                <span>Download des Templates oder andere Lösung</span>
                            </p>
                            <p>Von HR wird eine Firmenvereinbarung erstellt (Dauer, Klauseln, Wiedereintrittsdatum)</p>
                            <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Firmenvereinbarung UU.pdf" kategorie="Sonstiges" />

                        </LayoutFormSection>
                    </div>
                    <div v-show="'Historie' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Vorige unbezahlte Urlaube">
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
                    <div v-show="'Durchführen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Kontrolle und Abschluss">
                        	<div class="space-y-3 mb-6">
	                        	<CheckedItem>
	                        		<p> {{ma.vorname}} {{ma.name}} hat am {{anfrage.gespraechsdatum}} unbezahlten Urlaub beantragt.</p>
	                        	</CheckedItem>
	                        	<CheckedItem>
	                        		Beginn: {{anfrage.von}} <br>
	                        		Ende: {{anfrage.bis}}
	                        	</CheckedItem>
	                        	<CheckedItem>
	                        		<p> Die Firmenvereinbarung wurde hochgeladen.</p>
	                        	</CheckedItem>
                        	</div>
                        	<InputButton>Alle Daten übernehmen und Benachrichtigungen versenden</InputButton>
                        </LayoutFormSection>
                    </div>
                </div>
            </main>
        </div>
    </main>
    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>
    <LKWWDialog title="Anforderungen">
        <ul>
            <li>Anfrage für unbezahlten Urlaub -> Gespräch mit HR</li>
            <li>Es wird eine Firmenvereinbarung erstellt (Dauer, Klauseln, Wiedereintrittsdatum)</li>
            <li>Erfassung in "Beschäftigung" in Persis</li>
            <li>Es erfolgt die Meldung an die Personalverrechnung</li>
            <li>MA*in wird "Inaktiv" in MATATOR</li>
            <li>Verbesserungswunsch:
                <ul class="ml-6">
                    <li>Derzeit ist nur ein Datensatz möglich.</li>
                    <li>Dadurch geht die Historie verloren</li>
                    <li>Erfassung mehrere Datensätze ist wünschenswert</li>
                </ul>
            </li>
        </ul>
    </LKWWDialog>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>