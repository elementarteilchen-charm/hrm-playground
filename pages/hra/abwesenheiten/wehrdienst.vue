<script setup>
import { CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const tabs = [
    'Einberufungsbefehl',
    'Dauer',
    'Personalverrechnung',
    'Vordienstzeiten'
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
        <NavigationHraMitarbeiterinnen :topMenuItems="abwesenheitenMenuItems" :active="4" />
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <NavigationHraTabMenu heading="Wehr- & Zivildienst" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                <div class="px-4 py-4 border-l pb-12">
                    <div v-show="'Einberufungsbefehl' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Einberufungsbefehl">
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <CheckCircleIcon class="w-4 h-4 text-green-500" />
                                <span>Diese Daten können direkt geschrieben werden.</span>
                            </p>
                            <p class="text-sm font-light mt-3">Bitte hier den aktuellen Einberufungsbefehl hochladen:</p>
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
                            <div class="mt-3">
                            	<InputButton @click="activeTab = 'Vordienstzeiten'">Vordienstzeiten Eintrag erstellen</InputButton>
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
                            <InputButton>Personalverrechnung über den Wehr- / Zivildienst informieren</InputButton>
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
                    
                    <div v-show="'Vordienstzeiten' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <HRAPersonVordienstzeiten />
                    </div>

                </div>
            </main>
        </div>
    </main>
    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>
    <LKWWDialog title="Anforderungen">
<ul class="ml-3 list-disc">
	<li>Bescheid muss erfasst werden</li>
	<li>Frage:
		<ul class="ml-3">
		<li>Ablage in Digitaler Akte?</li>
		<li>Datenfeld beim MA? Bzw was heißt "erfasst" genau?</li>
		</ul>
	</li>
	<li>Info an Personalverrechnung</li>
	<li>MA für Zeitraum inaktiv setzen (MATATOR)</li>
	<li>Kann derzeit in Persis nicht erfasst werden</li>
	<li>In welcher Form würden wir das in HRA erfassen?</li>
	<li>Rückkehr wie gewohnt</li>
	<li>Bei Ungewissheiten ob ein Wehrdienst geleistet werden muss (vorübergehende Untauglichkeit, etc.) wird der Vorgang zuerst einmal als Milizübung gehandhabt.</li>
	<li>Nachträglich kann der MA immer noch (“mühsam”) abgemeldet werden (i.e. inaktiv geschalten?), falls er seinen Wehrdienst leisten muss.</li>
	<li>Eine Wehrdienst Abwesenheit wird in Persis als ‘Vordienstzeit’ erfasst</li>
	<li>Persis Feld: ‘Summe anrechenbare Vordienstzeiten’ hat Auswirkungen auf AnAb</li>
</ul>
    </LKWWDialog>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>