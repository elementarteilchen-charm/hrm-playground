<script setup>
    import {ExclamationTriangleIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'

    const tabs = [
        'Geburtstermin',
        'Schulungen',
        'Familienangehörige',
        'Benachrichtigungen'
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

        <NavigationHraMitarbeiterinnen :topMenuItems="abwesenheitenMenuItems" :active="0" />

        <div class="bg-white border border-t rounded overflow-hidden">
            
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu heading="Karenz" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />
                <div class="px-4 py-4 border-l pb-12">

                    <div v-show="'Geburtstermin' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Geburtstermin</h3>  
                        
                        <LayoutFormSection title="Wochenhilfe">
                          Weitere Geburt hinzufügen
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                <InputDate label="Schwangerschaftsbestätigung" />
                                <InputDate label="Voraussichtlicher Geburtstermin" />
                                <InputDate label="Tatsächlicher Geburtstermin" />
                                <InputDate label="Wochenhilfe Start" />
                                <InputDate label="Wochenhilfe Ende" />
                              </div>
                          </div>
                          <HRAFormsNachweisUploadBox 
                                  dateiname="" 
                                  ordner="05 Dokumente + Urkunden" 
                                  kategorie="Geburtsurkunde" />
                        </LayoutFormSection>
                       
                    </div>

                    <div v-show="'Schulungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Schulungen</h3>  
                        
                        <LayoutFormSection>
                            <ul class="text-sm list-disc">
                              <li class="ml-6">12.08.2023: Polnisch B1</li>
                              <li class="ml-6">03.09.2023: Polnisch B2</li>
                            </ul>
                            
                            <div class="my-3 bg-Orange-10 flex gap-4 items-center p-3">
                                <ExclamationTriangleIcon class="flex-shrink-0 w-6 h-6"/>
                                <p>
                                  Soll für Regina Aberl die Kurssperre aktiviert werden?
                                  Dadurch werden alle geplanten Kurse abgesagt
                                </p>
                            </div>
                          
                            <button class="px-4 py-2 bg-Orange text-white border-Orange hover:shadow-lg">
                                Kursperre jetzt aktivieren
                            </button>
                            
                        </LayoutFormSection>
                        <div class="mt-6 border bg-Hellgrau p-3">
                            <h3 class="text-sm font-bold text-gray-700">Vorherige Aktionen</h3>
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
        Der Prozess beginnt mit der Meldung der Schwangerschaft  
        Damit wird der voraussichtliche Geburtstermin bekannt gegeben und in Persis erfasst.
        Beginn der Wochenhilfe wird aktuell manuell berechnet (Wunsch nach Automatisierung)
        Je nach Standort erfolgt die Meldung der Kurssperre (MA*in wird von allen geplanten Schulungen abgemeldet)
        Die Meldung erfolgt derzeit manuell (Möglichkeit / Notwendigkeit das zu automatisieren?)
        8 Wochen vor dem geplanten Geburtstermin beginnt die Wochenhilfe
        MA-in wird in MATATOR manuell auf "inaktiv" eingestellt  
        Vorzeitige Wochenhilfe ist möglich wenn medizinisch notwendig
        Info an Personalverrechnung 
        8 Wochen nach der Geburt endet die Wochenhilfe (kein Kaiserschnitt)
        Bei Mehrlingsgeburt endet die Wochenhilfe 12 Wochen nach der Geburt
        Mit dem Ende der Wochenhilfe ist das Arbeitsende erreicht. Das Dienstverhältnis wird auf inaktiv gestellt.
        Austrittsmeldung an Verteiler -> Info für das Einsammeln der Leihgaben wird versendet
        Frage: Wie sieht die Info aus? Wer bekommt sie? Ist das Fire-and-Forget oder wird nachgefasst?
        Zuweisung der MA*in zu einer eigenen Kostenstelle
         Die Karenz beginnt mit dem Ende der Wochenhilfe
        Dauer der Karenz wird in Persis erfasst (Enddatum)
        Zuweisung in MATATOR zur "Karenz" Org-Einheit
        MA muss (soll) Geburtsurkunde übermitteln. Die Geburtsurkunde wird in der Digitalen Akte abgelegt
        Familienangehörige werden erfasst
        Im Fall einer geringfügigen Beschäftigung
        6-er Personalnummer bei Karenz (parallel existiert ein inaktives DV)
        Zusatz zum DV für geringfügige Besch.
        Info an Personalverrechnung
        Die Karenz endet
        Die MA*in (Mutter) kehrt zurück - meistens in Elternteilzeit
        Elternteilzeit hat ein individuelles Arbeitszeitmodell, das in AnAb eingetragen wird
        Verbesserung: Hat keine dedizierte ‘Markierung’ (Wunsch danach wäre eventuell da), i.e. ist einfach nur ein Teilzeitvertrag. HR weiß (nur?) anhand des Zeit-Modells, ob es sich um eine Elternteilzeit handelt.
        HR setzt sich eine Erinnerung für das Ende der Elternteilzeit
        Geht der Vater in Elternteilzeit muss er
        eine Geburtsurkunde übermitteln
        eine Vereinbarung zur Elternteilzeit unterschreiben
        Beides wird in der Digitalen Akte abgelegt
        Frage: Wo wird die Vereinbarung vermerkt? Wo wird die Vorlage für die Vereinbarung verwaltet?

        Wochenhilfe muss im System frühzeitig abgebrochen werden können (beispielsweise im Falle einer Totgeburt, etc.). Die Felder in Persis werden nicht geleert.
        Verbesserung: Persis überschreibt mit jeder neuen Schwangerschaft die entsprechenden Schwangerschafts-Felder. Dadurch geht die Historie verloren. Besser ist es ein 1:N Relation zu ermöglichen.
    </LKWWDialog>

</template>

<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>