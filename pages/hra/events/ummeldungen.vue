<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, BookmarkIcon, PlusCircleIcon, ArchiveBoxIcon, TrashIcon
}
from '@heroicons/vue/24/outline'

const tabs = [
    'Vertragsdatensatz',
    'Vertragsklauseln',
    'Serienbrief-Daten',
];
const activeTab = reactive({ tab: tabs[0] });
const zeigeAnforderungen = ref(false)
</script>
<template>
    <div class="flex items-end justify-between my-3">
        <div>
            <div class="text-sm font-light text-Blaugrau">
                Events & Änderungen
            </div>
            <div class="mb-3_ text-3xl font-light text-Blaugrau">
                Ummeldung 
            </div>
        </div>
        <div class=" flex gap-2 items-center w-1/2">
            <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
        </div>
    </div>

    <div class="flex_ justify-end">
        <div class="">
            
        <HRAMitarbeiterInfoBox />
        </div>
    </div>
    
    <main class="mt-6 grid grid-rows-[auto_auto_auto] gap-8">
    
        
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
                    <div class="mb-3 text-xl font-bold ">
                        Ummeldung > {{activeTab.tab}}
                    </div>
                    <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        
                        <div    @click="zeigeAnforderungen = !zeigeAnforderungen" 
                                class="hover:cursor-pointer text-Mittelblau">
                            Anforderungen
                        </div>
                        <div v-show="zeigeAnforderungen" >
                            <li>Anlegen eines neuen Vertragsdatensatzes in Persis.</li>
                            <li>Achtung: Austrittsdatum darf nicht gesetzt werden, sonst wird der useraccount deaktiviert !</li>
                            <li>Der VDS muss in Persis im Vorhinein eingestellt werden.</li>
                            <li>Die Zuordnung in MATATOR ist bereits vorher erfolgt.</li>
                            <li>Vertragsklauseln in Persis hinzufügen (Freitextfeld NDA, ...)  - in Mitarbeiter > Diverses im Feld Konkurrenztext</li>
                            <li class="py-3 px-4"><code>
                                MA*innen können von einem Mandaten zu einem anderen wechseln (zB LKW → WGS)
                                Aus steuerlichen Gründen sollte die Ummeldung zu Jahresanfang stattfinden.
                                MA*innen wechseln aber schon oft unter dem Jahr die Arbeitsstelle. Dieser Wechsel findet dann nur in MATATOR statt, der Dienstvertrag und damit die gehaltsabzahlende Firma bleibt vorerst noch unverändert.
                                <br>
                                Außerhalb von Persis werden derzeit diese Arbeitsschritte durchgeführt:
                                Mandantenwechsel werden manuell per MS-Access Abfrage von Fr. Koller erkannt.
                                Die Abfrage holt sich aus den Persis Tabellen die Information "Wer sitzt nicht dort wo der Mandant eingetragen ist?"
                                Datenbank siehe R:\HEINZL\persis.accdb Abfrage: "Koller - Ummeldungen zum Jahresende"
                                Die Daten der Abfrage werden im Excel mit weiteren Daten verknüpft.
                                <br>
                                Diese Excel Tabelle dient dann als Grundlage für einen Serienbrief in Word.
                                Die MA Liste wird dann noch mit dem Vorstand abgestimmt, denn nicht alle Ummeldungen werden auch tatsächlich durchgeführt.
                                Der erstellte Serienbrief beinhaltet diverse Information und den neuen Vertrag und wird an MA versendet.
                                Ummeldungsbrief PDF, Serienbrief, Urlaub, Abfertigungsansprüche, Konkurrenzklausel, etc,  
                                (Frage) Wo liegen diese Serienbrief-Vorlagen?
                                Der Brief wird vom MA unterschrieben und zurück gesendet.
                                Der unterschriebene Brief wird in der Digitalen Akte abgelegt.

                            </code>        
                            </li>                 
                        </div>

                        <VertragVertragsdatensatz />
                        
                    </div>

                    <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Vertragsklauseln">
                          <div class="grid lg:grid-cols-2 gap-4 py-3">
                                <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-2">  
                                    <InputCheckbox label="NDA"/>
                                    <InputCheckbox label="LKW"/>
                                    <InputCheckbox label="CIA"/>
                                    <InputCheckbox label="FBI"/>
                                    <InputCheckbox label="HO"/>
                                    
                                </div>
                            
                          </div>
                          
                        </LayoutFormSection>
                    </div>
                    
                    <div v-show="tabs[2] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        Serienbrief Daten <br>
                        
                         <a href="" class="px-3 py-2 bg-blue-700 text-white text-center w-1/2">
                                Start Abfrage für Export von Excel Liste</a>
                        <code>
                            Mandantenwechsel werden manuell per MS-Access Abfrage von Fr. Koller erkannt.
                            Die Abfrage holt sich aus den Persis Tabellen die Information "Wer sitzt nicht dort wo der Mandant eingetragen ist?"
                            Datenbank siehe R:\HEINZL\persis.accdb Abfrage: "Koller - Ummeldungen zum Jahresende"
                            Die Daten der Abfrage werden im Excel mit weiteren Daten verknüpft.
                            <br>
                            Diese Excel Tabelle dient dann als Grundlage für einen Serienbrief in Word.
                            Die MA Liste wird dann noch mit dem Vorstand abgestimmt, denn nicht alle Ummeldungen werden auch tatsächlich durchgeführt.
                            Der erstellte Serienbrief beinhaltet diverse Information und den neuen Vertrag und wird an MA versendet.
                            Ummeldungsbrief PDF, Serienbrief, Urlaub, Abfertigungsansprüche, Konkurrenzklausel, etc,  
                            (Frage) Wo liegen diese Serienbrief-Vorlagen?
                            Der Brief wird vom MA unterschrieben und zurück gesendet.
                            Der unterschriebene Brief wird in der Digitalen Akte abgelegt.
                        </code>
                    </div>
                    <div v-show="tabs[3] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <div v-show="zeigeAnforderungen">
                             <li>Das Hochzeitsgeschenk wurde überreicht</li>
                            <li>Die erfassten Daten zum Hochzeitsgeschenk sind (Tabelle LKW_MA_GESCHENK):</li>
                            <li>Kategorie, Bezeichnung, Betrag, Ereignisdatum, Ausgabedatum, ausgegeben von, Betriebszugehörigkeit</li>
                            <li>Betrag aus Sharepoint je nach Betriebszugehörigkeit</li>
                            <li>Dauer der Zugehörigkeit ist wichtig für Auswertungen und Bestellungen</li>
                            <li>Geschenk nur für 1. Hochzeit</li>
                            <li>In Outlook wird eine Aufgabe mit Erinnerung erstellt, in der die Bestellungen der Gutscheine für die frisch Verheirateten erfasst werden</li>
                        </div>
                        <LayoutFormSection>
                            Geschenk erfassen
                            <li>Die erfassten Daten zum Hochzeitsgeschenk sind (Tabelle LKW_MA_GESCHENK):</li>
                            <li>Kategorie, Bezeichnung, Betrag, Ereignisdatum, Ausgabedatum, ausgegeben von, Betriebszugehörigkeit</li>
                        </LayoutFormSection>
                    </div>
                    <div v-show="tabs[4] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <div v-show="zeigeAnforderungen">
                            <li>Benachrichtigung per Email "Es hat eine Namensänderung stattgefunden" an Verteiler versendet (IT, Rechnungswesen)</li>
                            <li>WND: Email Verteiler Pers-Stammdatenblatt (Verrechnung)</li>
                            <li>Korrespondenz: Stammdatenblatt aus Persis mit alter Name und neuer Name</li>
                            <li>KUF: Excel Info Liste an IT, PersSchulung, Telefon</li>
                        </div>
                        
                        <LayoutFormSection>
                            <div class="space-y-3">
                                <InputCheckbox checkboxLabel="IT und Rechnungswesen benachrichtigen" />
                                <InputCheckbox checkboxLabel="WND: Personalverrechnung benachrichtigen" />
                                <InputCheckbox checkboxLabel="Excel Info Liste an IT, Schulung und Telefonzentrale" />
                                <button class="bg-Mittelblau hover:bg-Dunkelblau text-white px-3 py-2">Alle Änderungen durchführen</button>
                            </div>
                        </LayoutFormSection>
                    </div>

                </div>
            </main>
        </div>
    </main>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>