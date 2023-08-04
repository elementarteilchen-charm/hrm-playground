<script setup>
    import {ExclamationTriangleIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'

    const tabs = [
        'Geburtstermin',
        'Formulare',
        'Zusatzvereinbarung',
        'Meldung an Personalverrechnung'
    ];
    
    const activeTab = ref(tabs[0]);
    const zeigeAnforderungen = ref(false)

</script>

<template>
    <div class="flex items-center py-3 justify-between">
        <h1 class="my-3 text-3xl font-light text-Blaugrau">
            Abwesenheiten
        </h1>
        <HRAMitarbeiterSuchfeld class="w-1/3"/>
    </div>


    <main class="grid grid-rows-[auto_auto_auto] gap-6">
        
        <HRAMitarbeiterInfoBox />

        <NavigationHraMitarbeiterinnen :topMenuItems="abwesenheitenMenuItems" :active="1" />

        <div class="bg-white border border-t rounded overflow-hidden">
            
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu heading="Familienzeit" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />
                <div class="px-4 py-4 border-l pb-12">

                    <div v-show="'Geburtstermin' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Geburtstermin und Geburtsurkunde</h3>  
                        
                        <LayoutFormSection title="Wochenhilfe">
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Schwangerschaftsbestätigung" />
                                <InputDate label="Voraussichtlicher Geburtstermin" />
                                <InputDate label="Tatsächlicher Geburtstermin" />
                                <InputDate label="Wochenhilfe Start" />
                                <InputDate label="Wochenhilfe Ende" />
                              </div>
                          </div>
                        </LayoutFormSection>
                        <LayoutFormSection title="Geburtsurkunde">
                          
                          <HRAFormsNachweisUploadBox 
                                  dateiname="" 
                                  ordner="05 Dokumente + Urkunden" 
                                  kategorie="Geburtsurkunde" />
                        </LayoutFormSection>
                       
                    </div>

                    <div v-show="'Formulare' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Formulare und Zusatzvereinbarung</h3>  
                        
                        <LayoutFormSection title="Formulare">
                            <InputButton>Formulare für Familienzeit</InputButton>
                        </LayoutFormSection>

                        <LayoutFormSection title="Zusatzvereinbarung">
                            <p>Laden Sie hier die vom MA unterschriebene Zusatzvereinbarung hoch.</p>
                            <HRAFormsNachweisUploadBox 
                                    dateiname="" 
                                    ordner="05 Dokumente + Urkunden" 
                                    kategorie="Sonstiges" />
                            
                        </LayoutFormSection>

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
                                <button class="bg-Orange hover:bg-Orange-80 text-white px-3 py-2">Infos jetzt versenden</button>
                            </div>
                                
                                <h3 class="mt-6 text-sm text-Mittelblau mb-3">Zuletzt versendet</h3>
                                <div class=" p-3 bg-white">
                                    <dl class="text-sm text-gray-600 space-y-1">
                                        <dt class="font-bold">14.06.2023</dt>
                                        <dd class="pl-3">Email-Info an Verteiler</dd>
                                        <dd class="pl-3">Austrittsmeldung (Wochenhilfe) </dd>
                                        

                                        <dt class="font-bold">13.06.2023</dt>
                                        <dd class="pl-3">Info Liste an IT.</dd>
                                    </dl>
                                </div>
                            
                        </LayoutFormSection>
                    </div>

                </div>
            
            </main>

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