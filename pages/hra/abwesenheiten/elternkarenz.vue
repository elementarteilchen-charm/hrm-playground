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
    const ma = mitarbeiterListe[0]


</script>

<template>
    <header class="px-8 py-4">
        <NavigationHraBreadcrumb :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}]" aktuell="Elternkarenz"/>
        <HRAMitarbeiterInfoBox headline="Events & Änderungen" />
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8">

    
        <div class="bg-white border border-t rounded overflow-hidden">
            
            <main class="">
                
                <div class="px-4 py-4 border-l pb-12 ">

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
                                <InputDate label="Schwangerschaftsbestätigung" value="2023-12-19"/>
                                <InputDate label="Voraussichtlicher Geburtstermin" value="2024-06-05"/>
                              </div>
                          </div>
                          <HRAFormsNachweisUploadBox 
                                  buttonText="Schwangerschaftsbestätigung"
                                  dateiname="" 
                                  ordner="05 Dokumente + Urkunden" 
                                  kategorie="Geburtsurkunde" />
                        <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputDate label="Tatsächlicher Geburtstermin" />
                        </div>
                          <HRAFormsNachweisUploadBox 
                                buttonText="Geburtsurkunde"
                                dateiname="" 
                                ordner="05 Dokumente + Urkunden" 
                                kategorie="Geburtsurkunde" />
                        </LayoutFormSection>

                        <LayoutFormSection title="Wochenhilfe">
                         
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Wochenhilfe Start"  value="2024-04-05"/>
                                <InputDate label="Wochenhilfe Ende"  value="2024-08-05"/>
                              </div>
                          </div>
                        </LayoutFormSection>
                        <div class="flex justify-end">
                            <InputButton>
                                    Speichern
                            </InputButton>
                        </div>
                       
                    </div>

                    <div v-show="'Schulungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        
                        <Anmerkung>
                            Wenn möglich und gewünscht, können wir hier die anstehenden Schulungen aus easylearn anzeigen.
                        </Anmerkung>
                        <Anmerkung>
                            Soll Kurssperre noch gemacht werden? 
                            Wenn ja, müssen wir das whsl an Easylearn kommunizieren.
                        </Anmerkung>

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

                        
                    </div>

                </div>
            
            </main>

        </div>
        <HRAAenderungsHistorie />
    </main>
    
    <div class="ml-8 mt-3 w-3/4 bg-white border rounded-lg ">
        <AnforderungsDokumentation headerText="Anforderungen Elternkarenz" contentPath="/hra/abwesenheiten/elternkarenz" />
    </div>

</template>
