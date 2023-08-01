<script setup>
import { CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const tabs = [
    'Bildungsziele',
    'Dauer',
    'AMS Formular',
    'Firmenvereinbarung',
    'Vordienstzeiten'
];

const activeTab = ref(tabs[0]);
const zeigeAnforderungen = ref(false)
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
        <NavigationHraMitarbeiterinnen :topMenuItems="abwesenheitenMenuItems" :active="1" />
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <NavigationHraTabMenu heading="Bildungskarenz" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                <div class="px-4 py-4 border-l pb-12">

                    <div v-show="'Dauer' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Beginn und Ende der Bildungskarenz">
                            <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Beginn" />
                                <InputDate label="Ende" />
                            </div>
                            <p class="text-gray-400 text-sm flex items-center gap-2 w-1/2 my-3">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500 flex-shrink-0" />
                                <span>Bildungskarenzzeit reduziert die Summe der anrechenbaren Zeit → wird aktuell in Persis als Eintrag in Vordienstzeiten erfasst</span>
                            </p>
                            <InputButton @click="activeTab = 'Vordienstzeiten'">Vordienstzeiten Eintrag erstellen</InputButton>
                        </LayoutFormSection>
                    </div>
                    
                    <div v-show="'Bildungsziele' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Bildungsziele">
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
                                <InputCheckbox label="AMS Bestätigung" checkboxLabel="liegt vor" />
                            </div>
                            <div class="mt-6 font-bold">Bestätigung über geplante Ausbildung</div>
                            <p class="text-sm font-light text-Mittelgrau">Kursanmeldung, Inskriptionsbestätigung, ...</p>
                            <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="WIFI Kurs SocialMedia.pdf" kategorie="Sonstiges" />
                        </LayoutFormSection>
                    </div>
                    <div v-show="'AMS Formular' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <p class="text-gray-400 text-sm flex items-center gap-2">
                            <CheckCircleIcon class="w-4 h-4 text-green-500" />
                            <span>Diese Daten können direkt geschrieben werden.</span>
                        </p>
                        <LayoutFormSection title="AMS Formular">
                            <p>Bitte laden Sie hier das AMS Formular hoch.</p>
                            <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="AMS Formular.pdf" kategorie="Sonstiges" />
                        </LayoutFormSection>
                    </div>
                    <div v-show="'Firmenvereinbarung' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection>
                            <p class="text-gray-400 text-sm flex items-center gap-2 w-1/2 my-3">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500 flex-shrink-0" />
                                <span>Download des Templates oder andere Lösung</span>
                            </p>
                            <p>Von HR wird eine Firmenvereinbarung erstellt (Dauer, Klauseln, Wiedereintrittsdatum)</p>
                        </LayoutFormSection>
                    </div>
                    <div v-show="'Vordienstzeiten' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonVordienstzeiten />
                    </div>
                </div>
            </main>
        </div>
    </main>
    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>
    <LKWWDialog title="Anforderungen">
        <ul>
            <li>Der Antrag auf Bildungskarenz beginnt mit einer Anfrage bei HR -> Gespräch mit HR über Bildungsziele</li>
            <li>Bestätigung über geplante Ausbildung muss von MA*in vorgelegt werden (Erfassung Digitale Akte)</li>
            <li>Von HR wird eine Firmenvereinbarung erstellt (Dauer, Klauseln, Wiedereintrittsdatum)</li>
            <li>Das AMS Formular muss vorgelegt werden</li>
            <li>Beginn der Bildungskarenz: MA*in wird auf "Inaktiv" in MATATOR gestellt</li>
            <li>Ende der Bildungskarenz: MA*in wird "Aktiv" in MATATOR gestellt</li>
            <li>Auswirkungen auf 6. Urlaubswoche und Jubiläum: Bildungskarenz zählt nicht mit → wird aktuell in Persis als Eintrag in Vordienstzeiten erfasst, Bildungskarenzzeit reduziert die Summe der anrechenbaren Zeit</li>
        </ul>
    </LKWWDialog>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>