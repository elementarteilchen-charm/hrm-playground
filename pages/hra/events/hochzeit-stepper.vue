<script setup>
    import {Cog6ToothIcon, ExclamationTriangleIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'

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

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8">
        <!-- <NavigationHraMitarbeiterinnen :topMenuItems="eventMenuItems" active="Hochzeit" /> -->
    
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

                <div class="mt-6 border bg-Dungelgrau-8 p-3">
                    <h3 class="text-sm font-bold text-gray-700">Vorige Aktionen</h3>

                    <div class=" ">
                        <dl class="text-sm text-gray-600 space-y-1">
                            <dt class="font-bold">14.06.2023</dt>
                            <dd class="pl-3">Email-Info an Verteiler</dd>
                            <dd class="pl-3">Austrittsmeldung (Wochenhilfe) </dd>
                            

                            <dt class="font-bold">13.06.2023</dt>
                            <dd class="pl-3">Info Liste an IT.</dd>
                        </dl>
                    </div>    
                </div>
                
            </div>

        </div>
    </main>
     
    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>

    <LKWWDialog title="Anforderungen">
        <li>MA*in gibt Heirat bekannt (Email oder Telefonisch, Self Service)</li>
        <li>Namensänderung wird vorgenommen</li>
        <li>Der neue Name wird im Feld "Name" eingetragen</li>
        <li>Der alte Name wird im Feld "Geburtsname" gespeichert.</li>
        <li>Familienstand wird auf "Verheiratet" gesetzt</li>
        <li>Das Datum der Heirat wird erfasst</li>
        <li>Als Familienangehöriger wird der/die Partner*in in Persis erfasst</li>
        <li>Über die Checkbox "Nachweis" wird festgehalten, dass die Heiratsurkunde an HR übermittelt wurde.</li>
        <li>Heiratsurkunde muss zeitnah an HR übermittelt werden (ist jedoch kein Blocker), damit der Sonderurlaub gewährt werden kann.</li>
        <li>Der Sonderurlaub wird in An/Ab verwaltet.</li>
        <li>Die Kopie vom neuen Reisepass ist für HR wünschenswert für den korrekten Namen</li>
        <li>Notwendig ist der Reisepass für die Meldung an die SVA und die Gehaltsabrechnung</li>
    </LKWWDialog>

</template>

<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>