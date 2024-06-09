<script setup>
import { showDialog } from '/utils/modal.js'

const schritte = [
    'Dauer',
    'Dokumente',
    'Benachrichtigungen'
]
const activeTab = ref(schritte[0]);
const zeigeAnforderungen = ref(false)

</script>
<template>
    
    <header class="px-8 py-4">
        <NavigationHraBreadcrumb 
                :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}, {text: 'Abwesenheiten', link: '/abwesenheiten'} ]" 
                aktuell="Milizübung"/>
        <HRAMitarbeiterInfoBox headline="" />
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8" >
        <div class="text-xl text-Mittelblau font-light">
            Milizübung
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
                    
                    <LayoutFormSection title="Beginn und Ende der Milizübung">
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
                        <h2 class="mt-3">
                            Bitte hier den aktuellen Einberufungsbefehl hochladen:
                        </h2>
                        <HRAFormsNachweisUploadBox ordner="05 Dokumente + Urkunden" dateiname="Einberufungsbefehl.pdf" kategorie="Sonstiges" />
                    </LayoutFormSection>
                    <LayoutFormSection title="Bestätigung für das Bundesheer">
                        <div>
                            <InputTextarea label="Zusatztext" />    
                        </div>
                        <InputButton>Bestätigung erstellen</InputButton>
                    </LayoutFormSection>
 
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
</style>