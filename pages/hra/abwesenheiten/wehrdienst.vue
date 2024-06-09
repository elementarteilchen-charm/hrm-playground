<script setup>
import { showDialog } from '/utils/modal.js'

const schritte = [
    'Dauer',
    'Dokumente',
    'Vordienstzeiten',
    'Benachrichtigungen',
];

const activeTab = ref(schritte[0]);
const zeigeAnforderungen = ref(false)
const ma = mitarbeiterListe[0]
</script>
<template>
    <header class="px-8 py-4">
        <NavigationHraBreadcrumb 
                :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}, {text: 'Abwesenheiten', link: '/abwesenheiten'} ]" 
                aktuell="Wehrdienst"/>
        <HRAMitarbeiterInfoBox headline="" />
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8" >
        <div class="text-xl text-Mittelblau font-light">
            Wehrdienst
        </div>
        <div class="flex items-center gap-x-4 border rounded bg-white">
            <div v-for="schritt, index in schritte">
                <button 
                    @click="activeTab = schritt"
                    class="border-transparent rounded px-2 py-3 flex gap-2 items-center group">
                    <div 
                        class="rounded-full  text-white p-1 w-8 
                                group-hover:bg-Mittelblau 
                                group-hover:scale-125
                                transition"
                        :class="{'bg-Mittelblau': activeTab === schritt, 'bg-Blaugrau': activeTab != schritt}">
                        {{index+1}} 
                    </div> 
                    <div class="group-hover:text-Mittelblau"
                        :class="{'text-Mittelblau': activeTab === schritt, 'text-Blaugrau': activeTab != schritt}" >
                        {{schritt}}
                    </div>
                </button>
            </div>
        </div>
        
        <div class="bg-white border border-t rounded overflow-hidden">
            <div class="px-4 py-4 border-l pb-12">

                <div v-show="'Dauer' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection title="Beginn und Ende des Wehrdienstes">
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputDate label="Beginn" />
                            <InputDate label="Ende" />
                            <InputDate label="Wiedereintrittsdatum" />
                        </div>
                    </LayoutFormSection>
                    <div class="flex justify-end">
                        <InputButton>Speichern</InputButton>
                    </div>
                </div>

                <div v-show="'Dokumente' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection title="Einberufungsbefehl">
                        <p class="text-sm font-light mt-3">Bitte hier den aktuellen Einberufungsbefehl hochladen:</p>
                        <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Einberufungsbefehl.pdf" kategorie="Sonstiges" />
                    </LayoutFormSection>
                    <div class="flex justify-end">
                        <InputButton>Speichern</InputButton>
                    </div>
                </div>

                <div v-show="'Benachrichtigungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection title="Benachrichtigungen">
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputCheckbox label="Personalverrechnung" :checked="true"/>
                        </div>
                    </LayoutFormSection>
                    <div class=" flex justify-start">
                        <InputButton>Benachrichtigung jetzt versenden</InputButton>
                    </div>
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
        </div>
        <div class="px-4 py-2 bg-white border rounded ">
            <details class="text-sm">
                <summary>
                    Letzte Änderung durch <b>Martina Daum</b>  am <b>23.05.2024</b> um 9:42
                </summary>
                <div class="mt-4 mb-2 ml-4 font-bold">
                    Vorherige Änderungen:
                </div>
                <ul class="mt-1 ml-4 space-y-1">
                    <li v-for="item in historieAbwesenheiten">{{item}}</li>
                </ul>
            </details>
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