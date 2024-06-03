<script setup>
import { ClockIcon, CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const schritte = [
    'Dauer',
    'Dokumente',
    // 'Vordienstzeiten',
    'Benachrichtigungen'
]
const activeTab = ref(schritte[0]);
const zeigeAnforderungen = ref(false)

</script>
<template>
    
    <header class="px-8 py-4">
        <NavigationHraBreadcrumb 
                :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}, {text: 'Abwesenheiten', link: '/abwesenheiten'} ]" 
                aktuell="Unbezahlter Urlaub"/>
        <HRAMitarbeiterInfoBox headline="" />
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8" >

        <div class="text-xl text-Mittelblau font-light">
            Unbezahlter Urlaub
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

        

        <div class="bg-white border  rounded">
            <div class="px-4 py-4 ">
                <div v-show="'Dauer' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection title="Anfrage Unbezahlter Urlaub">
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputDate label="Gesprächstermin" />
                            <InputTextarea label="Gesprächsnotizen" class="w-4/5 h-24" />
                        </div>
                    </LayoutFormSection>
                    <LayoutFormSection title="Beginn und Ende des unbezahlten Urlaubs">
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputDate label="Beginn" />
                            <InputDate label="Ende" />
                            <InputDate label="Wiedereintrittsdatum" />
                        </div>
                        <!-- <p class="text-gray-400 text-sm flex items-center gap-2 w-1/2 my-3">
                               <ExclamationTriangleIcon class="w-4 h-4 text-orange-500 flex-shrink-0" />
                               <span>Bildungskarenzzeit reduziert die Summe der anrechenbaren Zeit → wird aktuell in Persis als Eintrag in Vordienstzeiten erfasst</span>
                           </p> -->
                    </LayoutFormSection>
                    <div class="flex justify-end">
                        <InputButton>Speichern</InputButton>
                    </div>
                </div>

                <div v-show="'Benachrichtigungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection title="Benachrichtigungen">
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputCheckbox label="Personalverrechnung" />
                        </div>
                    </LayoutFormSection>
                    <div class=" flex justify-start">
                        <InputButton>Benachrichtigung jetzt versenden</InputButton>
                    </div>
                </div>

                <div v-show="'Dokumente' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
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