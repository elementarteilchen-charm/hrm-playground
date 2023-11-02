<script setup>
import {UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon, BookmarkIcon, PlusCircleIcon,
    ArchiveBoxIcon, TrashIcon, ExclamationTriangleIcon, Cog6ToothIcon
}
from '@heroicons/vue/24/outline'

const tabs = [
    'Daten erfassen',
];
const datenfelder = ['Kategorie', 'Bezeichnung', 'Betrag', 'Ereignisdatum', 'Ausgabedatum', 'ausgegeben von', 'Betriebszugehörigkeit']

const zeigeAnforderungen = ref(false)
const ma = mitarbeiterListe[0]
const activeTab = ref(tabs[0]);
const namensaenderung = ref(true)
const geschenkeAnzeigen = ref(false)

function disableNameInput() {
    console.log("disableNameChange")
    namensaenderung.value = !namensaenderung.value
}
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
        <div class="bg-white border border-t rounded overflow-hidden ">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu heading="Hochzeit" :tabs="tabs" @newtab="(ev) => activeTab = ev" />

                <div class="px-4 py-4 border-l pb-12">
                    <h3 class="text-lg font-bold mb-3">Daten erfassen</h3>
                    
                    <LayoutFormSection>
                        <div class="mb-3">
                            <InputCheckbox3 @no-name-change="disableNameInput" checkboxLabel="Hochzeit ohne Namensänderung" />
                        </div>
                        <div v-show="namensaenderung" class="grid lg:grid-cols-1 gap-4">
                            <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                                <InputText label="Vorname" value="Regina" width="w-64" />
                                <InputText label="Nachname" value="Aberl-Konrad" width="w-64" />
                                <InputText label="Geburtsname" value="Babunek" width="w-64" />
                                <InputText label="Nachname nativ" value="Aberl-Konrad" width="w-64" />
                                <InputText label="Nachname Reisepass" value="Aberl-Konrad" width="w-64" />
                            </div>
                            <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Reisepass" />
                            <div class="flex w-64 items-center _justify-center gap-x-2 mt-3 bg-Orange text-white px-3 py-2 hover:bg-Orange-80">
                                <Cog6ToothIcon class="w-5 h-5 flex-shrink-0" />
                                <button class="">Änderungen durchführen</button>
                            </div>
                        </div>

                    </LayoutFormSection>

                    <LayoutFormSection title="Familienstand" class="mt-6">
                        <div class="grid lg:grid-cols-2 gap-x-4">
                            <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-x-2">
                                <!-- <InputSelect label="Familienstand" :options="['verheiratet', 'ledig','-']" width="w-32" /> -->
                                <InputDate label="Heiratsdatum" />
                            </div>
                            <p class="pr-2 text-sm text-gray-500 self-center _col-span-2">
                                Durch das Erfassen eines Heiratsdatums wird der Familienstand auf "verheiratet" gesetzt.
                            </p>
                            
                            <div class="font-light my-6 col-span-2">
                                Partner*in als Familienangehörige*n erfassen:
                            </div>
                            <div class=" grid grid-cols-[minmax(8rem,min-content)_1fr] gap-2">
                                <InputText label="Vorname" value="Christian" width="w-64" />
                                <InputText label="Nachname" value="Aberl-Konrad" width="w-64" />
                            </div>
                        
                        </div>
                        <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Heiratsurkunde" />
                    </LayoutFormSection>

                    <LayoutFormSection title="Geschenke" class="mt-6">
                        <div class="flex justify-start mt-3 gap-x-4">
                            <InputButton>Neues Geschenk erfassen</InputButton>
                            <button @click="geschenkeAnzeigen = !geschenkeAnzeigen" class="text-Mittelblau px-2 py-1 hover:bg-gray-200">Bisherige Geschenke anzeigen</button>
                        </div>

                        <table v-show="geschenkeAnzeigen" class="mt-3 border rounded bg-white w-full">
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
                    </LayoutFormSection>


                    <LayoutFormSection title="Durchführen aller Änderungen" class="mt-6 hidden">
                        <CheckedItem>Benachrichtigung per Email an Verteiler versendet (IT, Rechnungswesen)
                        </CheckedItem>
                        <CheckedItem><strong>Korrespondenzen:</strong> Stammdatenblatt aus Persis mit alter Name und neuer Name</CheckedItem>
                        <CheckedItem><strong>WND:</strong> Email an Verteiler Pers-Stammdatenblatt (Verrechnung)</CheckedItem>
                        <CheckedItem><strong>KUF:</strong> Excel Info Liste an Verteiler (IT, PersSchulung, Telefon)</CheckedItem>
                        <div class="flex items-center justify-center gap-2 mt-3 bg-Orange text-white px-3 py-2 hover:bg-Orange-80">
                            <Cog6ToothIcon class="w-5 h-5" />
                            <button class="">Alle Änderungen durchführen</button>
                        </div>
                    </LayoutFormSection>

                </div>
            </main>
        </div>


        <div @click="zeigeAnforderungen = !zeigeAnforderungen" class="hover:cursor-pointer text-Mittelblau">
            Anforderungen
        </div>
        <div v-show="zeigeAnforderungen">
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
</style>