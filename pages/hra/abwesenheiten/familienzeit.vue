<script setup>
    import { showDialog } from '/utils/modal.js'

    const schritte = [
        'Termine und Dauer',
        'Dokumente',
        'Familienangehörige',
        'Benachrichtigungen'
    ];
    
    const activeTab = ref(schritte[0]);
    const zeigeAnforderungen = ref(false)

</script>

<template>
    <header class="px-8 py-4">
        <NavigationHraBreadcrumb 
                :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}, {text: 'Abwesenheiten', link: '/abwesenheiten'} ]" 
                aktuell="Familienzeit"/>
        <HRAMitarbeiterInfoBox headline="" />
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-8" >

        <div class="text-xl text-Mittelblau font-light">
            Familienzeit
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
            <div class="px-4 py-4">
                <div v-show="'Termine und Dauer' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <h3 class="font-bold text-xl">Geburtstermin und Geburtsurkunde</h3>  
                    
                    <LayoutFormSection title="">
                        <div class="space-y-8">
                        <div class="grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                            <InputDate label="Schwangerschaftsbestätigung" />
                        </div>

                        <div class="grid grid-cols-2">  
                            <div class="grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Voraussichtlicher Geburtstermin" />
                            </div>
                            <div class="grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Tatsächlicher Geburtstermin" />
                            </div>
                        </div>
                          
                        <div class="grid grid-cols-2">  
                            <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Wochenhilfe Start" />
                            </div>
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Wochenhilfe Ende" />
                              </div>
                          </div>

                          <div class="grid grid-cols-2">  
                            <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Familienzeit Start" />
                            </div>

                            <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Familienzeit Ende" />
                            </div>
                          </div>
                          </div>
                    </LayoutFormSection>
                    
                   <div>
                       <InputButton>Speichern</InputButton>
                   </div>
                </div>

                <div v-show="'Dokumente' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <!-- <h3 class="font-bold text-xl">Formulare</h3>   -->
                    
<!--                     <LayoutFormSection title="Formulare">
                        <InputButton>Formulare für Familienzeit</InputButton>
                    </LayoutFormSection> -->
                    <LayoutFormSection title="Geburtsurkunde">
                      <HRAFormsNachweisUploadBox 
                              dateiname="Geburtsurkunde.jpg" 
                              ordner="05 Dokumente + Urkunden" 
                              kategorie="Geburtsurkunde" />
                    </LayoutFormSection>
                    <LayoutFormSection title="Formulare">
                        <p>Laden Sie hier die vom MA unterschriebene Zusatzvereinbarung hoch.</p>
                        <HRAFormsNachweisUploadBox 
                                dateiname="" 
                                ordner="05 Dokumente + Urkunden" 
                                kategorie="Sonstiges" />
                        
                    </LayoutFormSection>
                    <div>
                       <InputButton>Speichern</InputButton>
                   </div>
                </div>

                <div v-show="'Familienangehörige' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <h3 class="font-bold text-xl">Familienangehörige</h3> 
                    <StammdatenFamilienangehoerige />
                </div>
                
                <div v-show="'Benachrichtigungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                    <LayoutFormSection>

                        <div class="space-y-3">
                            <InputCheckbox checkboxLabel="(Glückwunsch?) Email-Info an Verteiler" />
                            <InputCheckbox checkboxLabel="Austrittsmeldung (Wochenhilfe) an Verteiler verschicken" />
                            <InputCheckbox checkboxLabel="Weitere Excel Info Liste an IT, Schulung und Telefonzentrale" />
                            <InputButton>Benachrichtigungen versenden</InputButton>
                        </div>

                    </LayoutFormSection>
                </div>
            </div>
        </div>
    </main>

    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>

    <LKWWDialog title="Anforderungen">
    <ul>
        <li>Der Antrag auf Familienzeit muss mindestens 4 Monate vor dem voraussichtlichen Geburtstermin erfolgen</li>
        <li>Formulare dafür werden von HR bereitgestellt. MA kann diese dann ausgefüllt zurück senden (Self Service Download Seite?)</li>
        <li>Papamonat muss während der Wochenhilfe konsumiert werden.</li>
        <li>Notwendig ist die Übermittlung der Geburtsurkunde</li>
        <li>MA muss Zusatzvereinbarung unterschreiben (Frage: Wann, woher, Ablage in Digitaler Akte)</li>
        <li>Es erfolgt die Meldung an die Personalverrechung. Frage: Wann und in welcher Form (Vermutung derzeit per Email)</li>
        <li>Papa wird in MATATOR auf "Inaktiv" gestellt</li>
    </ul>
    </LKWWDialog>

</template>

<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>