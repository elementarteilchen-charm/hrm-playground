<script setup>
import { CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const schritte = [
    'Bildungsziele',
    // 'Dauer',
    'Dokumente',
    'Vordienstzeiten',
    'Benachrichtigungen'
]
const activeTab = ref(schritte[0]);
const zeigeAnforderungen = ref(false)

</script>
<template>
    
    <header class="px-8 py-4">
        <NavigationHraBreadcrumb 
                :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}, {text: 'Abwesenheiten', link: '/abwesenheiten'} ]" 
                aktuell="Bildungskarenz"/>
        <HRAMitarbeiterInfoBox headline="Abwesenheiten" />
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8" >
        <div class="text-xl text-Mittelblau font-light">
            Bildungskarenz
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
           
            <div class="px-4 py-2 border-l pb-12">

                <div v-show="'Bildungsziele' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection title="Bildungsziele">
                        
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputDate label="Gesprächstermin" />
                            <InputTextarea label="Gesprächsnotizen" class="w-4/5 h-24" />
                            <InputCheckbox label="AMS Bestätigung" checkboxLabel="liegt vor" />
                        </div>
                        
                    </LayoutFormSection>
                    <LayoutFormSection title="Beginn und Ende">
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputDate label="Beginn" value="2024-10-01"/>
                            <InputDate label="Ende" value="2025-01-30"/>
                            <InputDate label="Wiedereintrittsdatum" value="2025-02-01"/>
                        </div>
                        <p class="text-gray-400 text-sm flex items-center gap-2 w-1/2 my-3">
                            <ExclamationTriangleIcon class="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span>Bildungskarenzzeit reduziert die Summe der anrechenbaren Zeit → Eintrag in Vordienstzeiten</span>
                        </p>
                        <InputButton @click="activeTab = 'Vordienstzeiten'">Vordienstzeiten Eintrag erstellen</InputButton>
                    </LayoutFormSection>
                </div>

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
                


                <div v-show="'Dokumente' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection title="AMS Formular">
                        <div class="mt-6 font-bold">Bestätigung über geplante Ausbildung</div>
                        <p class="text-sm font-light text-Mittelgrau">Kursanmeldung, Inskriptionsbestätigung, ...</p>
                        <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="WIFI Kurs SocialMedia.pdf" kategorie="Sonstiges" />
                        <div class="mt-6 font-bold">AMS Formular</div>
                        <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="AMS Bildungskarent Formular.pdf" kategorie="Sonstiges" />
                    </LayoutFormSection>

                    <LayoutFormSection title="Firmenvereinbarung">
                        <div>
                            <div class="grid grid-cols-[minmax(0rem,min-content)_1fr] gap-2 items-center">
                                <InputCheckbox checkboxLabel="Klausel A"/>
                                <InputCheckbox checkboxLabel="Klausel B"/>
                                <InputCheckbox checkboxLabel="Klausel C"/>
                            </div>
                            <InputTextarea label="Klauseln" />    
                        </div>
                        <InputButton :secondary="true">Dokument erstellen</InputButton>
                    </LayoutFormSection>
                </div>

                <div v-show="'Firmenvereinbarung' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    
                </div>

                <div v-show="'Vordienstzeiten' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <HRAPersonVordienstzeiten />
                </div>

                <div v-show="'Benachrichtigungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    Hier können Benachrichtigungen versendet werden
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