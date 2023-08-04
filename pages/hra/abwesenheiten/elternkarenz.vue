<script setup>
import { ExclamationTriangleIcon, CheckCircleIcon, CloudArrowUpIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const tabs = [
    'Geburtstermin',
    'Familienangehörige',
    'Schulungen',
    'Benachrichtigungen',
];

const bisherigeGeburten = [{
    schwangerschaftsbestaetigung: '2020-03-01',
    voraussichtlicherGeburtstermin: '2020-10-15',
    geburtsdatum: '2020-10-18',
    wochenhilfeStart: '2020-08-15',
    wochenhilfeEnde: '2020-12-18',
    name: 'Valentin'
}, ]

const activeTab = ref(tabs[0]);
const zeigeAnforderungen = ref(false)
const ma = mitarbeiterListe[0]

</script>
<template>
    <div class="flex items-center py-3 justify-between">
        <h1 class="my-3 text-3xl font-light text-Blaugrau">
            Abwesenheiten
        </h1>
        <HRAMitarbeiterSuchfeld class="w-1/3" />
    </div>
    <main class="grid grid-rows-[auto_auto_auto] gap-6">
        <HRAMitarbeiterInfoBox />
        <NavigationHraMitarbeiterinnen :topMenuItems="abwesenheitenMenuItems" :active="0" />
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                <NavigationHraTabMenu heading="Karenz" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                
                <div class="px-4 py-4 border-l pb-12">
                
                    <div v-show="'Geburtstermin' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <div>
                            <h3 class="font-bold text-xl">Geburtstermin</h3>
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <CheckCircleIcon class="w-4 h-4 text-green-500" />
                                <span>Diese Daten können direkt geschrieben werden.</span>
                            </p>
                        </div>
                        <Anmerkung>
                            Wenn wir das so ändern wollen, dass mehr als eine Geburt pro MA erfasst werden kann,
                            sollte das Formular hier mit einer Übersichtstabelle beginnen. <br>
                            Und eine neue Geburt würde mit dem "Neue Geburtstermin erfassen" Button erstellt werden
                        </Anmerkung>

                        <LayoutFormSection title="Bisherige Geburten">
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500" />
                                <span>Diese Daten sind nicht in Persis vorhanden und werden nur in HRA erfasst</span>
                            </p>
                            <table class="w-full mt-3 ">
                                <thead class="text-sm">
                                    <tr>
                                        <th class="px-2">Schwangerschafts&shy;bestätigung</th>
                                        <th class="px-2">Voraussichtlicher Geburtstermin</th>
                                        <th class="px-2">Tatsächlicher Geburtstermin</th>
                                        <th class="px-2">Wochenhilfe Start</th>
                                        <th class="px-2">Wochenhilfe Ende</th>
                                        <th class="px-2">Name</th>
                                        <th class="px-2"></th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm">
                                    <tr v-for="kind in ma.bisherigeGeburten" class="bg-white">
                                        <td class="py-2 px-2 border-b ">{{kind.name}}</td>
                                        <td class="py-2 px-2 border-b ">{{kind.schwangerschaftsbestaetigung}}</td>
                                        <td class="py-2 px-2 border-b ">{{kind.voraussichtlicherGeburtstermin}}</td>
                                        <td class="py-2 px-2 border-b ">{{kind.geburtsdatum}}</td>
                                        <td class="py-2 px-2 border-b ">{{kind.wochenhilfeStart}}</td>
                                        <td class="py-2 px-2 border-b ">{{kind.wochenhilfeEnde}}</td>
                                        <td><PencilIcon class="w-5 h-5" /></td>
                                    </tr>   
                                </tbody>
                            </table>

                            <div class="flex justify-end mt-3">
                                <InputButton @click="showDialog('Geburt erfassen')">Weitere Geburt hinzufügen</InputButton>
                            </div>
                        </LayoutFormSection>

                       <!--  <LayoutFormSection title="Geburtstermin und Wochenhilfe">
                            <div class="grid lg:grid-cols-1 gap-4">
                                <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                                    <InputDate label="Schwangerschaftsbestätigung" />
                                    <InputDate label="Voraussichtlicher Geburtstermin" />
                                    <InputDate label="Tatsächlicher Geburtstermin" />
                                    <InputDate label="Wochenhilfe Start" />
                                    <InputDate label="Wochenhilfe Ende" />
                                </div>
                            </div>
                            <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Geburtsurkunde" />
                        </LayoutFormSection> -->
                    </div>

                    <div v-show="'Schulungen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Schulungen</h3>
                        <Anmerkung>
                            In Zukunft könnte man versuchen die geplanten Schulungen aus easylearn abzufragen und hier anzuzeigen.
                            <br>
                            Alternativ: Eine Link zu easylearn anbieten, um direkt nachsehen zu können
                        </Anmerkung>
                        <LayoutFormSection>
                            <a href="" class="font-bold text-Mittelblau px-3 py-1">Kurse in easylearn anzeigen</a>
                            <ul class="text-sm list-disc">
                                <li class="ml-6">12.08.2023: Polnisch B1</li>
                                <li class="ml-6">03.09.2023: Polnisch B2</li>
                            </ul>

                            <button class="px-4 py-2 bg-Orange text-white border-Orange hover:shadow-lg">
                                Kursperre jetzt aktivieren
                            </button>
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
    
    <LKWWDialog title="Geburt erfassen">
        <LayoutFormSection title="Geburtstermin und Wochenhilfe">
            <div class="grid lg:grid-cols-1 gap-4">
                <div class=" grid grid-cols-[minmax(15rem,min-content)_1fr] gap-2 items-center">
                    <InputDate label="Schwangerschaftsbestätigung" />
                    <InputDate label="Voraussichtlicher Geburtstermin" />
                    <InputDate label="Tatsächlicher Geburtstermin" />
                    <InputDate label="Wochenhilfe Start" />
                    <InputDate label="Wochenhilfe Ende" />
                </div>
            </div>
            <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Geburtsurkunde" />
        </LayoutFormSection>
    </LKWWDialog>

    <div @click="showDialog('Anforderungen')" class="hover:cursor-pointer text-Mittelblau">Anforderungen</div>
    <LKWWDialog title="Anforderungen">
        <ul class="list-disc space-y-1 ml-3">
            <li>Der Prozess beginnt mit der Meldung der Schwangerschaft</li>
            <li>Damit wird der voraussichtliche Geburtstermin bekannt gegeben und in Persis erfasst.</li>
            <li>Beginn der Wochenhilfe wird aktuell manuell berechnet (Wunsch nach Automatisierung)</li>
            <li>Je nach Standort erfolgt die Meldung der Kurssperre (MA*in wird von allen geplanten Schulungen abgemeldet)</li>
            <li>Die Meldung erfolgt derzeit manuell (Möglichkeit / Notwendigkeit das zu automatisieren?)</li>
            <li>8 Wochen vor dem geplanten Geburtstermin beginnt die Wochenhilfe</li>
            <li>MA-in wird in MATATOR manuell auf "inaktiv" eingestellt</li>
            <li>Vorzeitige Wochenhilfe ist möglich wenn medizinisch notwendig</li>
            <li>Info an Personalverrechnung</li>
            <li>8 Wochen nach der Geburt endet die Wochenhilfe (kein Kaiserschnitt)</li>
            <li>Bei Mehrlingsgeburt endet die Wochenhilfe 12 Wochen nach der Geburt</li>
            <li>Mit dem Ende der Wochenhilfe ist das Arbeitsende erreicht. Das Dienstverhältnis wird auf inaktiv gestellt.</li>
            <li>Austrittsmeldung an Verteiler -> Info für das Einsammeln der Leihgaben wird versendet</li>
            <li>Frage: Wie sieht die Info aus? Wer bekommt sie? Ist das Fire-and-Forget oder wird nachgefasst?</li>
            <li>Zuweisung der MA*in zu einer eigenen Kostenstelle</li>
            <li>Die Karenz beginnt mit dem Ende der Wochenhilfe</li>
            <li>Dauer der Karenz wird in Persis erfasst (Enddatum)</li>
            <li>Zuweisung in MATATOR zur "Karenz" Org-Einheit</li>
            <li>MA muss (soll) Geburtsurkunde übermitteln. Die Geburtsurkunde wird in der Digitalen Akte abgelegt</li>
            <li>Familienangehörige werden erfasst</li>
            <li>Im Fall einer geringfügigen Beschäftigung</li>
            <li>6-er Personalnummer bei Karenz (parallel existiert ein inaktives DV)</li>
            <li>Zusatz zum DV für geringfügige Besch.</li>
            <li>Info an Personalverrechnung</li>
            <li>Die Karenz endet</li>
            <li>Die MA*in (Mutter) kehrt zurück - meistens in Elternteilzeit</li>
            <li>Elternteilzeit hat ein individuelles Arbeitszeitmodell, das in AnAb eingetragen wird</li>
            <li>Verbesserung: Hat keine dedizierte ‘Markierung’ (Wunsch danach wäre eventuell da), i.e. ist einfach nur ein Teilzeitvertrag. HR weiß (nur?) anhand des Zeit-Modells, ob es sich um eine Elternteilzeit handelt.</li>
            <li>HR setzt sich eine Erinnerung für das Ende der Elternteilzeit</li>
            <li>Geht der Vater in Elternteilzeit muss er</li>
            <li>eine Geburtsurkunde übermitteln</li>
            <li>eine Vereinbarung zur Elternteilzeit unterschreiben</li>
            <li>Beides wird in der Digitalen Akte abgelegt</li>
            <li>Frage: Wo wird die Vereinbarung vermerkt? Wo wird die Vorlage für die Vereinbarung verwaltet?</li>
            <li>Wochenhilfe muss im System frühzeitig abgebrochen werden können (beispielsweise im Falle einer Totgeburt, etc.). Die Felder in Persis werden nicht geleert.</li>
            <li>Verbesserung: Persis überschreibt mit jeder neuen Schwangerschaft die entsprechenden Schwangerschafts-Felder. Dadurch geht die Historie verloren. Besser ist es ein 1:N Relation zu ermöglichen.</li>
        </ul>
    </LKWWDialog>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>