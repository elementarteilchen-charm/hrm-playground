<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, BookmarkIcon, PlusCircleIcon, ArchiveBoxIcon, TrashIcon, ExclamationTriangleIcon
}
from '@heroicons/vue/24/outline'

const tabs = [
    'Namensänderungen',
    'Familienstand',
    'Angehörige',
    'Geschenk',
    'Benachrichtigungen',
];
const activeTab = reactive({ tab: tabs[0] });
const zeigeAnforderungen = ref(false)
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="my-3 text-3xl font-light text-Blaugrau">
            Events & Änderungen
        </div>
    </div>
    <div class="mb-3 flex gap-2 items-center w-full">
        <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
        
    </div>
    <main class="grid grid-rows-[auto_auto_auto] gap-8">
        <HRAMitarbeiterInfoBox />
        
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
                    <div class="bg-Orange rounded p-3 text-white flex items-center gap-2 w-3/4">
                        <div>
                            <ExclamationTriangleIcon class="w-5 h-5"/>
                        </div>
                        <div>
                            Sie haben diesen Prozess am 20.06.2023 um 12:40 gestartet.
                        </div>
                    </div>
                    <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        
                        <div    @click="zeigeAnforderungen = !zeigeAnforderungen" 
                                class="hover:cursor-pointer text-Mittelblau">
                            Anforderungen
                        </div>
                        <div v-show="zeigeAnforderungen" >
                            <li>MA*in gibt Heirat bekannt (Email oder Telefonisch, Self Service)</li>
                            <li>Namensänderung wird vorgenommen</li>
                            <li>Der neue Name wird im Feld "Name" eingetragen</li>
                            <li>Der alte Name wird im Feld "Geburtsname" gespeichert.</li>
                            <li>Status wird auf "Verheiratet" gesetzt</li>
                            <li>Das Datum der Heirat wird erfasst</li>
                            <li>Als Familienangehöriger wird der/die Partner*in in Persis erfasst</li>
                            <li>Über die Checkbox "Nachweis" wird festgehalten, dass die Heiratsurkunde an HR übermittelt wurde.</li>
                            <li>Heiratsurkunde muss zeitnah an HR übermittelt werden (ist jedoch kein Blocker), damit der Sonderurlaub gewährt werden kann.</li>
                            <li>Der Sonderurlaub wird in An/Ab verwaltet.</li>
                            <li>Die Kopie vom neuen Reisepass ist für HR wünschenswert für den korrekten Namen</li>
                            <li>Notwendig ist der Reisepass für die Meldung an die SVA und die Gehaltsabrechnung</li>
                        </div>

                        <LayoutFormSection title="Namensänderung">
                          
                          <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                                <InputText label="Vorname" value="Stephanie"/>
                                <InputText label="Geburtsname" value="Babunek"/>
                                <InputText label="Nachname" value="Babunek-Hollerer"/>
                                <InputText label="Nachname nativ" value="Babunek-Hollerer"/>
                                <InputText label="Nachname Reisepass" value="Babunek-Hollerer"/>
                              </div>
                          </div>
                          <section class="mt-4">
                            <h3 class="font-bold mb-2">Reisepass</h3>
                            <div class="flex items-center gap-4">
                              <div class="border border-gray-400 rounded-md shadow-md w-32 h-12 bg-white p-4 flex space-x-2">
                                  <ArchiveBoxIcon class="text-gray-400 w-6 h-6 flex-shrink-0 place-self-center" />
                                  <div @click="showUploadDialog" class="text-sm place-self-center">Upload</div>
                              </div>
                              <div class="p-4 flex gap-4">
                                <a href="" class="text-blue-700 hover:underline">Babunek-Hollerer Reisepass.pdf</a> 
                                <TrashIcon class="w-5 h-5" />
                              </div>
                              
                            </div>
                          </section>    
                        </LayoutFormSection>



                    </div>

                    <div v-show="tabs[1] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                                                <LayoutFormSection title="Familienstand">
                                                  <div class="grid lg:grid-cols-2 gap-4">
                                                        <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-2">  
                                                            <InputSelect label="Familienstand" :options="['verheiratet', 'ledig','-']" width="w-32"/>
                                                            <InputDate label="Seit" />
                                                            <InputDate label="Bis" />
                                                        </div>
                                                    
                                                  </div>
                                                  <section class="mt-4">
                                                    <h3 class="font-bold mb-2">Heiratsurkunde</h3>
                                                    <div class="flex items-center gap-4">
                                                      <div class="border border-gray-400 rounded-md shadow-md w-32 h-12 bg-white p-4 flex space-x-2">
                                                          <ArchiveBoxIcon class="text-gray-400 w-6 h-6 flex-shrink-0 place-self-center" />
                                                          <div @click="showUploadDialog" class="text-sm place-self-center">Upload</div>
                                                      </div>
                                                      <div class="p-4 flex items-center gap-4">
                                                        <a href="" class="text-blue-700 hover:underline">Babunek-Hollerer Heiratsurkunde.pdf</a> 
                                                        <TrashIcon class="w-5 h-5" />
                                                      </div>
                                                      
                                                    </div>
                                                  </section>        
                                                </LayoutFormSection>
                    </div>
                    
                    <div v-show="tabs[2] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenFamilienangehoerige />
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