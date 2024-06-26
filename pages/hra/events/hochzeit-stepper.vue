<script setup>

    import { showDialog } from '/utils/modal.js'
    import { Cog6ToothIcon, ExclamationTriangleIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'

    const tabs = [
        'Geburtstermin',
        'Schulungen',
        'Familienangehörige',
        'Benachrichtigungen'
    ];
    const schritte = [
        'Namensänderung',
        'Familienstand',
        'Geschenk',
        'Benachrichtigungen'
    ]
    const activeTab = ref(schritte[0]);
    const zeigeAnforderungen = ref(false)
    const namensaenderung = ref(true)
    const geschenkeAnzeigen = ref(false)

const ma = mitarbeiterListe[0]

function disableNameInput() {
    namensaenderung.value = !namensaenderung.value
}

</script>

<template>

    <header class="px-8 py-4">
        <NavigationHraBreadcrumb :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}]" aktuell="Hochzeit"/>

        <HRAMitarbeiterInfoBox headline="Events & Änderungen" />
    </header>

    <div class="ml-8 mt-3 text-xl text-Mittelblau font-light">
        Hochzeit
    </div>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8 mt-3">
    
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

        <div class="px-4 py-2 bg-white border border-t rounded overflow-hidden w-full 2xl:w-3/4">
            
            <div v-show="'Namensänderung' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                
                <h3 class="font-bold text-xl">Namensänderung</h3>  
                
                <LayoutFormSection>
                    <div class="mb-3">
                        <InputCheckbox3 @no-name-change="disableNameInput" checkboxLabel="Hochzeit ohne Namensänderung" />
                    </div>
                    <div v-show="namensaenderung" class="grid lg:grid-cols-1 gap-4">
                        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                            <InputText label="Vorname" value="Regina" width="w-64" />
                            <InputText label="Nachname" value="Aberl-Konrad" width="w-64" />
                            <InputText label="Geburtsname" value="Babunek" width="w-64" />
                            <InputText label="Nachname nativ" value="Aberl-Konrad" width="w-64" />
                            <InputText label="Nachname Reisepass" value="Aberl-Konrad" width="w-64" />
                        </div>
                        <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Reisepass" />
                        
                    </div>

                </LayoutFormSection>


                <div class="flex justify-between">
                    <div class="flex items-center text-sm font-bold gap-x-2 bg-Orange text-white px-3 py-2 hover:bg-Orange-80">
                        <Cog6ToothIcon class="w-5 h-5 flex-shrink-0" />
                        <button class="">Namensänderung durchführen</button>
                    </div>
                    <InputButton>
                        Speichern
                    </InputButton>
                </div>
               
            </div>

            <div v-show="'Familienstand' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                <h3 class="font-bold text-xl">Familienstand</h3>  
                
                <LayoutFormSection  class="mt-0">
                    <div class="grid lg:grid-cols-2 gap-x-4">
                        <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-3">
                            <InputSelect label="Familienstand" :options="['verheiratet', 'ledig','-']" width="w-32" />
                            <InputDate label="Heiratsdatum" />
                        </div>
                        <p class="pr-2 text-sm text-gray-500 self-center _col-span-2">
                            Durch das Erfassen eines Heiratsdatums wird der Familienstand auf "verheiratet" gesetzt.
                        </p>
                        
                        <div class="font-bold text-lg text-Dunkelblau mt-8 mb-3 col-span-2">
                            Partner*in als Familienangehörige*n erfassen:
                        </div>
                        <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-2">
                            <InputText label="Vorname" value="Christian" width="w-64" />
                            <InputText label="Nachname" value="Aberl-Konrad" width="w-64" />
                            <InputCheckbox label="Nachweis" checkboxLabel="vorhanden" />
                        </div> 
                    
                    </div>
                    <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Heiratsurkunde" />
                    
                    <div class="flex justify-end">
                        
                        <InputButton>
                            Speichern
                        </InputButton>
                    </div>

                </LayoutFormSection>
                
            </div>

            <div v-show="'Geschenk' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                <h3 class="font-bold text-xl">Geschenk</h3> 
                <HRAGeschenke />
            </div>
            
            <div v-show="'Benachrichtigungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                <h3 class="font-bold text-xl">Benachrichtigungen</h3>  
                <LayoutFormSection>

                    <div class="space-y-3">
                        <InputCheckbox checkboxLabel="Email-Info an Verteiler" />
                        <InputCheckbox checkboxLabel="Austrittsmeldung (Wochenhilfe) an Verteiler verschicken" />
                        <InputCheckbox checkboxLabel="Weitere Excel Info Liste an IT, Schulung und Telefonzentrale" />
                        <InputButton>
                            Benachrichtigungen jetzt versenden
                        </InputButton>
                    </div>
                    
                </LayoutFormSection>                
                
            </div>

        </div>

        
        <HRAAenderungsHistorie />


    </main>
     
    <div class="ml-8 mt-3 w-3/4 bg-white border rounded-lg ">
        <AnforderungsDokumentation headerText="Anforderungen Hochzeit" contentPath="/hra/events/hochzeit" />
    </div>
    
   
</template>
