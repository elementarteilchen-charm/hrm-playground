<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, BookmarkIcon, PlusCircleIcon, ArchiveBoxIcon, TrashIcon, ExclamationTriangleIcon, Cog6ToothIcon
}
from '@heroicons/vue/24/outline'

const tabs = [
    'Nachname',
    'Familienstand',
    'Familienangehörige',
    'Geschenk',
    'Durchführen',
];
const datenfelder = ['Kategorie', 'Bezeichnung', 'Betrag', 'Ereignisdatum', 'Ausgabedatum', 'ausgegeben von', 'Betriebszugehörigkeit']

const zeigeAnforderungen = ref(false)
const ma = mitarbeiterListe[0]
const activeTab = ref(tabs[0]);

</script>

<template>
    <header class="px-16 mt-3 print:hidden">
        <div class="text-gray-500 text-sm">
            <a href="/hra/events" class=" hover:text-Mittelblau ">
                Events & Änderungen</a> &gt; Hochzeit
        </div>
        <div class="flex items-center py-3 justify-between">
            <h1 class="my-3 text-3xl font-light text-Blaugrau">
                Events & Änderungen
            </h1>
            <HRAMitarbeiterSuchfeld class="w-1/3" />
        </div>
    </header>

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-16">
        <HRAMitarbeiterInfoBox />
        <NavigationHraMitarbeiterinnen :topMenuItems="eventMenuItems" :active="1" />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">

                <NavigationHraTabMenu heading="Hochzeit" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />                        


                <div class="px-4 py-4 border-l pb-12">

                    <div v-show="'Nachname' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">

                        <LayoutFormSection title="Namensänderung">
                          
                            <div class="grid lg:grid-cols-1 gap-4">
                              <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                                <InputText label="Vorname" value="Regina" />
                                <InputText label="Nachname" value="Aberl-Konrad" />
                                <InputText label="Geburtsname" value="Babunek" />
                                <InputText label="Nachname nativ" value="Aberl-Konrad" />
                                <InputText label="Nachname Reisepass" value="Aberl-Konrad" />
                              </div>
                            </div>
                            
                            <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Reisepass" />

                        </LayoutFormSection>

                    </div>

                    <div v-show="'Familienstand' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <LayoutFormSection title="Familienstand">
                          <div class="grid lg:grid-cols-2 gap-4">
                                <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-2">  
                                    <InputSelect label="Familienstand" :options="['verheiratet', 'ledig','-']" width="w-32"/>
                                    <InputDate label="Seit" />
                                    <InputDate label="Bis" />
                                </div>                            
                          </div>
                            <HRAFormsNachweisUploadBox 
                                    dateiname="" 
                                    ordner="05 Dokumente + Urkunden" 
                                    kategorie="Heiratsurkunde" />
                        </LayoutFormSection>
                    </div>
                    
                    <div v-show="'Familienangehörige' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <StammdatenFamilienangehoerige />
                    </div>

                    <div v-show="'Geschenk' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        
                        <LayoutFormSection title="Geschenke">
                            
                            <table class="border rounded bg-white w-full">
                                <thead>
                                    <tr class="text-sm h-10 bg-gray-100">
                                        <th v-for="feld in datenfelder" class="px-2">{{feld}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="geschenk in geschenke" class="text-sm border-b">
                                        <td class="px-2 py-2">{{geschenk.Kategorie}}</td>
                                        <td class="px-2 ">{{geschenk.Bezeichnung}}</td>
                                        <td class="px-2 text-right tabular-nums">{{geschenk.Betrag}}</td>
                                        <td class="px-2 text-center tabular-nums">{{geschenk.Ereignisdatum}}</td>
                                        <td class="px-2 text-center tabular-nums">{{geschenk.Ausgabedatum}}</td>
                                        <td class="px-2 ">{{geschenk.ausgegeben_von}}</td>
                                        <td class="px-2 text-right">{{geschenk.Betriebszugehörigkeit}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="flex justify-end mt-3">
                                <InputButton>Neues Geschenk</InputButton>
                            </div>
                        </LayoutFormSection>
                        <div v-show="zeigeAnforderungen">
                            <li>Die erfassten Daten zum Hochzeitsgeschenk sind in Tabelle LKW_MA_GESCHENK</li>
                            <li>Das Hochzeitsgeschenk wurde überreicht</li>
                            <li>Kategorie, Bezeichnung, Betrag, Ereignisdatum, Ausgabedatum, ausgegeben von, Betriebszugehörigkeit</li>
                            <li>Betrag aus Sharepoint je nach Betriebszugehörigkeit</li>
                            <li>Dauer der Zugehörigkeit ist wichtig für Auswertungen und Bestellungen</li>
                            <li>Geschenk nur für 1. Hochzeit</li>
                            <li>In Outlook wird eine Aufgabe mit Erinnerung erstellt, in der die Bestellungen der Gutscheine für die frisch Verheirateten erfasst werden</li>
                        </div>
                    </div>

                    <div v-show="'Durchführen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        
                        
                        
                        <LayoutFormSection title="Durchführen aller Änderungen">
                            
                            <CheckedItem>Benachrichtigung per Email an Verteiler versendet (IT, Rechnungswesen)
                            </CheckedItem>
                            <CheckedItem><strong>Korrespondenzen:</strong> Stammdatenblatt aus Persis mit alter Name und neuer Name</CheckedItem>
                            <CheckedItem><strong>WND:</strong> Email an Verteiler Pers-Stammdatenblatt (Verrechnung)</CheckedItem>
                            <CheckedItem><strong>KUF:</strong> Excel Info Liste an Verteiler (IT, PersSchulung, Telefon)</CheckedItem>
                            
                            <div class="flex items-center justify-center gap-2 mt-3 bg-Orange text-white px-3 py-2 hover:bg-Orange-80">
                                <Cog6ToothIcon class="w-5 h-5"/>
                                <button class="">Alle Änderungen durchführen</button>
                            </div>
                        </LayoutFormSection>
                    </div>

                </div>
            </main>
        </div>
        <div    @click="zeigeAnforderungen = !zeigeAnforderungen" 
                class="hover:cursor-pointer text-Mittelblau">
            Anforderungen
        </div>
        <div v-show="zeigeAnforderungen" >
            <li>MA*in gibt Heirat bekannt (Email oder Telefonisch, Self Service)</li>
            <li>Namensänderung wird vorgenommen</li>
            <li>Der neue Name wird im Feld "Name" eingetragen</li>
            <li>Der alte Name wird im Feld "Geburtsname" gespeichert.</li>
            <li>Familienstand wird auf "Verheiratet" gesetzt</li>
            <li>Das Datum der Heirat wird erfasst</li>
            <li>Als Familienangehöriger wird der/die Partner*in in Persis erfasst</li>
            <li>Über die Checkbox "Nachweis" wird festgehalten, dass die Heiratsurkunde an HR übermittelt wurde.</li>
            <li>Heiratsurkunde muss zeitnah an HR übermittelt werden (ist jedoch kein Blocker), damit der Sonderurlaub gewährt werden kann.</li>
            <li>Der Sonderurlaub wird in An/Ab verwaltet.</li>
            <li>Die Kopie vom neuen Reisepass ist für HR wünschenswert für den korrekten Namen</li>
            <li>Notwendig ist der Reisepass für die Meldung an die SVA und die Gehaltsabrechnung</li>
        </div>
    </main>
</template>
<style>
dialog.modal-erinnerungen::backdrop {
    background: rgba(0.2, 0.2, 0.2, 0.3);
}
</style>