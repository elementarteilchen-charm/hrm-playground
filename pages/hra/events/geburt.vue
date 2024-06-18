<script setup>
    import { showDialog } from '/utils/modal.js'
    import {ExclamationTriangleIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'

    const schritte = [
        'Geburtstermin',
        'Schulungen',
        'Familienangehörige',
        'Elternkarenz',
        'Benachrichtigungen'
    ]
    const activeTab = ref(schritte[0]);
    const zeigeAnforderungen = ref(false)
    const ma = mitarbeiterListe[0]
</script>

<template>

    <header class="px-8 py-4">
        <NavigationHraBreadcrumb :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}]" aktuell="Geburt"/>
        <HRAMitarbeiterInfoBox headline="Events & Änderungen" />
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8" >
        <div class="text-xl text-Mittelblau font-light">
            Geburt und Elternkarenz
        </div>

        <div class="bg-white border border-t rounded overflow-hidden">
            
            <main class="">
                
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
                                <InputDate label="Tatsächlicher Geburtstermin" />
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
                                <InputDate label="Wochenhilfe Start"  />
                                <InputDate label="Wochenhilfe Ende"  />
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
                    
                    <div v-show="'Elternkarenz' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Elternkarenz</h3> 
                        <LayoutFormSection title="">
                         
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Karenz von"  />
                                <InputDate label="Karenz bis"  />
                              </div>
                          </div>
                          <HRAFormsNachweisUploadBox 
                                  dateiname="" 
                                  ordner="05 Dokumente + Urkunden" 
                                  kategorie="Geburtsurkunde" />
                        </LayoutFormSection>
                    </div>

                    <div v-show="'Benachrichtigungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Benachrichtigungen</h3>  
                        <LayoutFormSection>

                            <div class="space-y-3">
                                <InputCheckbox checkboxLabel="Email-Info an Verteiler" />
                                <div>
                                    <InputCheckbox checkboxLabel="Austrittsmeldung (Wochenhilfe) an Verteiler verschicken" checked />
                                    <div class="ml-7">
                                        <small>Versendet am 11.6.2024 durch Martina Daum</small>
                                    </div>
                                </div>
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
    
    
    <div class="ml-8 mt-3 w-3/4 bg-white border rounded-lg shadow-lg z-10">
        <AnforderungsDokumentation headerText="Anforderungen Geburt" contentPath="/hra/events/geburt" />
    </div>
    
</template>
