<script setup>
    import {ExclamationTriangleIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'

    const tabs = [
        'Geburtstermin',
        'Schulungen',
        'Familienangehörige',
        'Benachrichtigungen'
    ];
    const schritte = [
        'Geburtstermin',
        'Schulungen',
        'Familienangehörige',
        'Benachrichtigungen'
    ]
    const activeTab = ref(tabs[0]);
    const zeigeAnforderungen = ref(false)
    

</script>

<template>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8">

        <HRAMitarbeiterInfoBox headline="Events & Änderungen" />
        <NavigationHraMitarbeiterinnen :topMenuItems="eventMenuItems" active="Geburt" />

    
        <div class="bg-white border border-t rounded overflow-hidden">
            
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <!-- <NavigationHraTabMenu heading="Geburt" :tabs="tabs"  @newtab="(ev) => activeTab = ev" /> -->

                <div class="px-4 py-4 border-l pb-12">

                    <div class="flex items-center gap-x-4 mb-6 border rounded bg-Blaugrau-10">
                        <div v-for="schritt, index in schritte" >
                            <button 
                                @click="activeTab = schritt"
                                class="border-transparent rounded px-2 py-3 flex gap-2 items-center group">
                                <div 
                                    class="rounded-full  text-white p-1 w-8 group-hover:bg-Orange-80"
                                    :class="{'bg-Orange-80 drop-shadow-none': activeTab === schritt, 'drop-shadow-md bg-Blaugrau': activeTab != schritt}">
                                    {{index+1}} 
                                </div> 
                                <div class="text-Mittelblau" >
                                    {{schritt}}
                                </div>
                            </button>
                        </div>
                    </div>

                    <div v-show="'Geburtstermin' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Geburtstermin</h3>  
                        
                        <LayoutFormSection title="Schwangerschaft">
                         
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Schwangerschaftsbestätigung" />
                                <InputDate label="Voraussichtlicher Geburtstermin" />
                              </div>
                          </div>
                          <HRAFormsNachweisUploadBox 
                                  dateiname="" 
                                  ordner="05 Dokumente + Urkunden" 
                                  kategorie="Geburtsurkunde" />
                        </LayoutFormSection>

                        <LayoutFormSection title="Wochenhilfe">
                         
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Tatsächlicher Geburtstermin" />
                                <InputDate label="Wochenhilfe Start" :reminder="true" />
                                <InputDate label="Wochenhilfe Ende" :reminderIsSet="new Date()" />
                              </div>
                          </div>
                          <HRAFormsNachweisUploadBox 
                                  dateiname="" 
                                  ordner="05 Dokumente + Urkunden" 
                                  kategorie="Geburtsurkunde" />
                        </LayoutFormSection>
                        <div class="flex justify-end">
                            <InputButton>
                                    Speichern
                            </InputButton>
                        </div>
                       
                    </div>

                    <div v-show="'Schulungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Schulungen</h3>  
                        
                        <LayoutFormSection title="Geplante Schulungen">
                            <ul class="text-sm list-disc mb-6">
                              <li class="ml-6">12.08.2023: Polnisch B1</li>
                              <li class="ml-6">03.09.2023: Polnisch B2</li>
                            </ul>
                          
                            
                            <InputButton>
                                Kursperre jetzt aktivieren
                            </InputButton>
                            
                        </LayoutFormSection>
                        <div class="mt-6 border bg-Dungelgrau-8 p-3">
                            <h3 class="text-sm font-bold text-gray-700">Vorige Aktionen</h3>
                            <ul>
                                <li>
                                    Die Kursperre wurde am 15.06.2023 von Diren Akbulut aktiviert.   
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div v-show="'Familienangehörige' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Familienangehörige</h3> 
                        <StammdatenFamilienangehoerige />
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

        </div>
    </main>
     
    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>

    <LKWWDialog title="Anforderungen">
            <li>Schwangerschaft wird von MA*in an HR gemeldet (Telefon, Email, Self Service)</li>
            <li>Wochenhilfe wird manuell berechnet (nach dem voraussichtlichen Geburtstermin)</li>
            <li>Wochenhilfe wird in Persis erfasst über Beschäftigung > Zeiten und Bewilligungen Formular  Wochenhilfe</li>
            <li>Tabelle: MA_EINAUS</li>
            <li>WND: Kursperre wird in Persis eingetragen (Kurssperre ist für easylearn relevant. wird synchronisiert?)</li>
            <li>KUF: Trägt keine Kurssperre ein</li>
            <li>Nach der Geburt wird das tatsächliche Geburtsdatum in Persis erfasst</li>
            <li>Ende der Wochenhilfe wird in Persis erfasst (Verbesserung: das könnte automatisch vorgeschlagen werden, muss jedoch überschreibbar sein)</li>
            <li>Elternteilzeit wird erfasst wenn MA*in in ETZ geht</li>
            <li>In An/Ab wird das Zeitmodell eingetragen falls ETZ</li>
            <li>Gutschein und Glückwunschkarte (Word Vorlage, die vom Vorstand unterschrieben wird) wird an Mutter überreicht</li>
            <li>KUF hat 2 verschiedene Arten von Gutscheinen</li>
            <li>KUF verwaltet die Gutscheine in einer Excel Liste von Martina Daum</li>
            <li>Email Info an (Frage) Verteiler (welcher?)</li>
            <li>Frau X ist ab DD.MM.YYYY in Wochenhilfe</li>
            <li>Mutter geht in Karenz</li>
            <li>"Austrittsmeldung" wird verschickt (Frage) an welchen Verteiler?</li>
            <li>WND: Geburtsurkunde wird in DA abgelegt</li>
            <li>Väter Urlaubstag (wird in An/Ab eingetragen)</li>
            <li>Familienangehörige → Neuer Eintrag</li>
            <li>Tabelle: MA_KOPERS</li>


    </LKWWDialog>

</template>

<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>