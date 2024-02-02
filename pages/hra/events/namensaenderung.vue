<script setup>
import { ExclamationTriangleIcon, TrashIcon, CloudArrowUpIcon } from '@heroicons/vue/24/outline'
import { showDialog } from '/utils/modal.js'

const title = "Anforderungen"

const tabs = [
    'Nachname',
    'Stammdatenblatt',
    'Durchführen'
];

const stammdatenfelder = ['Nachname', 'Vorname', 'Personal-Nr', 'Standort', 'Mandant', 'UserID',
    'von / nach Abteilung ', 'Beschäftigungsart', '(Wieder)Eintritt am', 'Austritt am ',
]
const ma = mitarbeiterListe[0]
const activeTab = ref(tabs[0]);
</script>

<template>
    

    <main class="grid grid-rows-[auto_auto_auto] gap-6 px-16 ">
        
        <HRAMitarbeiterInfoBox headline="Events und Änderungen"/>
        <NavigationHraMitarbeiterinnen :topMenuItems="eventMenuItems" :active="Namensänderung" />
        
        <div class="bg-white border border-t rounded overflow-hidden print:border-0">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <div class="print:hidden">
                    <NavigationHraTabMenu heading="Namensänderung" :tabs="tabs" @newtab="(ev) => activeTab = ev" />
                </div>
                <div class="px-4 py-4 border-l pb-12 print:border-0">
                    <div v-if="'Nachname' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 ">Namensänderung</h3>
                            <p class="text-gray-400 text-sm flex items-center gap-2">
                                <ExclamationTriangleIcon class="w-4 h-4 text-orange-500" />
                                <span>Diese Änderung bewirkt weitere Prozesse außerhalb von HRA.</span>
                            </p>
                        </div>
                        <div class="border rounded p-3 text-sm text-Dunkelgrau">
                            <ul class="ml-6 list-disc">
                                <li>Bitte kontrollieren Sie mit dem neuen Reisepass die korrekte Schreibweise und den nativen Namen.</li>
                                <li>Die Personalverrechnung wird automatisch per Email informiert</li>
                                <li>WND: Email Verteiler Pers-Stammdatenblatt (Verrechnung)</li>
                                <li>Die neue UserID und Email wird per Nachtlauf automatisch erstellt</li>
                                <li>Die Benachrichtigung an Fr. Aberl erfolgt per EMail</li>
                                <li>Die Benachrichtigung über die Namensänderung wird an den Verteiler (IT, Rechnungswesen) per Email versendet</li>
                                <li>Korrespondenz: Stammdatenblatt aus Persis mit alter Name und neuer Name</li>
                                <li>KUF: Excel Info Liste an IT, PersSchulung, Telefon</li>
                            </ul>
                        </div>
                        <LayoutFormSection title="">
                            <div class="grid lg:grid-cols-1 gap-4">
                                <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                                    <InputText label="Vorname" value="Stephanie" />
                                    <InputText label="Nachname" value="Aberl-Konrad" />
                                    <InputText label="Geburtsname" value="Babunek" />
                                    <InputText label="Nachname nativ" value="Aberl-Konrad" />
                                    <InputText label="Nachname Reisepass" value="Aberl-Konrad" />
                                </div>
                            </div>
                            <HRAFormsNachweisUploadBox dateiname="" ordner="05 Dokumente + Urkunden" kategorie="Sonstiges" />
                        </LayoutFormSection>
                    </div>
                    <div v-if="'Stammdatenblatt' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Stammdatenblatt ausdrucken</h3>
                        <LayoutFormSection title="Stammdatenblatt">
                            <table class="table-fixed bg-white">
                                <tbody>
                                    <tr class="h-8 border-b">
                                        <td class="px-4">Nachname</td>
                                        <td class="px-4 font-bold">Aberl</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">Vorname</td>
                                        <td class="px-4 font-bold">Regina</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">Personal-Nr</td>
                                        <td class="px-4 font-bold">15324</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">Standort</td>
                                        <td class="px-4 font-bold">WND</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">Mandant</td>
                                        <td class="px-4 font-bold">LKW</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">UserID</td>
                                        <td class="px-4 font-bold">aberl</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">von / nach Abteilung </td>
                                        <td class="px-4 font-bold">Trucking IT - Ost V13T00</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">Beschäftigungsart</td>
                                        <td class="px-4 font-bold">Angestellte</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">(Wieder)Eintritt am</td>
                                        <td class="px-4 font-bold">02.11.2023</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 h-8 border-b">Austritt am </td>
                                        <td class="px-4 font-bold">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </LayoutFormSection>
                    </div>
                    <div v-if="'Durchführen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Namensänderung durchführen</h3>
                        <LayoutFormSection>
                            <div class="space-y-3">
                            <p>
                                Mit einem Klick auf den Button "Namensänderung durchführen" werden die Umsysteme benachrichtigt.
                            </p>
                            <p>Die Abarbeitung der Änderung kann einige Zeit in Anspruch nehmen.</p>
                            <p>Folgende Schritte werden durchgeführt:</p>
                                <CheckedItem>Der neue Name wird im System gespeichert.</CheckedItem>
                                <CheckedItem>Die Benachrichtigung an Fr. Aberl erfolgt per EMail</CheckedItem>
                                <CheckedItem>IT, Personalverrechnung, Schulung und Telefonzentrale werden benachrichtigt</CheckedItem>
                                <button class="bg-Orange hover:bg-Orange-80 text-white px-3 py-2">Namensänderung durchführen</button>
                            </div>
                        </LayoutFormSection>
                    </div>
                </div>
            </main>
        </div>
    </main>
    
    <div @click="showDialog(title)" class="hover:cursor-pointer text-Mittelblau print:hidden">
        Anforderungen
    </div>
    <LKWWDialog :title="title">
        <ul>
            <li>Namensänderungen sind wie Hochzeit, jedoch ohne Geschenk.</li>
            <li>Neuer Reisepass für den nativen Namen und die korrekte Schreibweise</li>
            <li>Meldung an die Gehaltsverrechnung wegen SVA</li>
            <li>Neue UserID und Email wird per Nachtlauf automatisch erstellt</li>
            <li>Benachrichtigung an User per EMail</li>
            <li>Benachrichtigung per Email "Es hat eine Namensänderung stattgefunden" an Verteiler versendet (IT, Rechnungswesen)</li>
            <li>WND: Email Verteiler Pers-Stammdatenblatt (Verrechnung)</li>
            <li>Korrespondenz: Stammdatenblatt aus Persis mit alter Name und neuer Name</li>
            <li>KUF: Excel Info Liste an IT, PersSchulung, Telefon</li>
        </ul>
    </LKWWDialog>
</template>
<style>
</style>