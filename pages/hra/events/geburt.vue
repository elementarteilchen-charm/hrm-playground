<script setup>
    import {ExclamationTriangleIcon, CloudArrowUpIcon}
    from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'

    const tabs = [
        'Geburtstermin',
        'Geburtsurkunde',
        'Schulungen',
        'Familienangehörige',
        'Benachrichtigungen'
    ];
    const activeTab = reactive({ tab: tabs[0] });
    const zeigeAnforderungen = ref(false)

</script>
<template>
    <div class="flex items-center justify-between">
        <div class="my-3 ml-3 text-3xl font-light text-Blaugrau">
            Events & Änderungen
        </div>
    </div>
    <div class="my-3 flex gap-2 items-center w-full">
        <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
        
    </div>
    <main class="grid grid-rows-[auto_auto_auto] gap-4">
        
        <HRAMitarbeiterInfoBox />
        <div class="my-1 ml-3 text-2xl font-light text-Blaugrau">
            Geburt 
        </div>
        <div class="bg-white border border-t rounded overflow-hidden">
            
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <div>
                    <nav class="mt-4">
                        <ul class="text-sm">
                            <li v-for="tab, index in tabs" class="border-l-4 border-white pl-4 pr-8 py-3 flex hover:bg-gray-200" :class="[{'border-l-4 border-blue-500 text-blue-700 font-bold': tab == activeTab.tab}]">
                                <a href="#" @click="activeTab.tab = tab">
                                    {{tab}}</a>
                            </li>
                        </ul>

                        <div class="mt-4 px-2 py-6 flex flex-col space-y-3">
                            <a href="" class="px-3 py-2 bg-blue-700 text-white text-center">
                                Speichern</a>
                            <a href="" class="px-3 py-2 text-blue-700 hover:underline text-center">
                                Abbrechen</a>
                        </div>
                    </nav>
                </div>

                <div class="px-4 py-4 border-l pb-12">

                    <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Geburtstermin</h3>  
                        
                        <LayoutFormSection title="Wochenhilfe">
                          
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label=" Schwangerschaftsbestätigung" />
                                <InputDate label="Voraussichtlicher Geburtstermin" />
                                <InputDate label="Tatsächlicher Geburtstermin" />
                                <InputDate label="Wochenhilfe Start" />
                                <InputDate label="Wochenhilfe Ende" />
                              </div>
                          </div>
                        </LayoutFormSection>
                        <div class="w-1/3 grid grid-cols-[2rem_auto] items-center gap-2 hover:cursor-pointer text-Mittelblau p-3 hover:bg-Blaugrau-10 border border-Mittelblau rounded-lg shadow-lg transition">
                             
                            <CloudArrowUpIcon class="w-7 h-7 "/>      
                             <span>Geburtsurkunde hochladen</span>
                        </div>
                    </div>

                    <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Geburtsurkunde</h3> 
                        <LayoutFormSection >
                            <div class="w-1/3 grid grid-cols-[2rem_auto] items-center gap-2 hover:cursor-pointer text-Mittelblau p-3 hover:bg-Blaugrau-10 border border-Mittelblau rounded-lg shadow-lg transition">
                                 
                                <CloudArrowUpIcon class="w-7 h-7 "/>      
                                 <span>Geburtsurkunde hochladen</span>
                            </div>
                        </LayoutFormSection>
                    </div>
                    <div v-show="tabs[2] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Schulungen</h3>  
                        <LayoutFormSection title="Geplante Schulungen">
                            <ul class="text-sm list-disc">
                              <li class="ml-6">12.08.2023: Polnisch B1</li>
                              <li class="ml-6">03.09.2023: Polnisch B2</li>
                            </ul>
                            <div class="mt-6 grid grid-cols-2 gap-4 items-center">
                            <div class="my-3 bg-Orange-10 flex gap-4 items-center p-3">
                                <ExclamationTriangleIcon class="flex-shrink-0 w-6 h-6"/>
                                <p>
                                  Soll für Regina Aberl die Kurssperre aktiviert werden?
                                  Dadurch werden alle geplanten Kurse abgesagt
                                </p>
                            </div>
                          
                            <div class="place-self-center my-6">
                                <!-- <InputCheckbox checkboxLabel="Kursperre aktivieren" /> -->
                                <button class="px-4 py-2 bg-Orange text-white border-Orange hover:shadow-lg">
                                    Kursperre jetzt aktivieren
                                </button>
                            </div>
                          </div>
                          <div>
                              Die Kursperre wurde am 15.06.2023 von Diren Akbulut aktiviert.
                          </div>
                        </LayoutFormSection>
                    </div>

                    <div v-show="tabs[3] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Familienangehörige</h3> 
                        <StammdatenFamilienangehoerige />
                    </div>
                    <div v-show="tabs[4] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
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