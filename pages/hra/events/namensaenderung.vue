<script setup>
    import {ExclamationTriangleIcon, TrashIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'
    const title = "Anforderungen"

    const tabs = [
        'Nachname',
        'Stammdatenblatt',
        'Durchführen'
    ];
    const ma = mitarbeiterListe[0]
    const activeTab = ref(tabs[0]);

</script>

<template>
    <div class="flex items-center py-3 justify-between">
        <h1 class="my-3 text-3xl font-light text-Blaugrau">
            Events & Änderungen
        </h1>
        <HRAMitarbeiterSuchfeld class="w-1/3"/>
    </div>
        
    <main class="grid grid-rows-[auto_auto_auto] gap-6">
        <HRAMitarbeiterInfoBox />
        <NavigationHraMitarbeiterinnen :topMenuItems="eventMenuItems" :active="0" />
        
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">

                <NavigationHraTabMenu heading="Namensänderung" :tabs="tabs"  @newtab="(ev) => activeTab = ev" />                        
                
                <div class="px-4 py-4 border-l pb-12">
                    
                    <div v-if="'Nachname' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <div>
                          <h3 class="text-lg font-bold text-gray-900 ">Namensänderung</h3>
                          <p class="text-gray-400 text-sm flex items-center gap-2">
                            <ExclamationTriangleIcon class="w-4 h-4 text-orange-500"/>
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
                            <HRAFormsNachweisUploadBox 
                                    dateiname="" 
                                    ordner="05 Dokumente + Urkunden" 
                                    kategorie="Sonstiges" />
                        </LayoutFormSection>

                    </div>
                    
                    <div v-if="'Stammdatenblatt' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        Stammdatenblatt mit alter Name, neuer Name
                    </div>

                    <div v-if="'Durchführen' == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Namensänderung durchführen</h3>
                   
                        <LayoutFormSection>
                            <div class="space-y-3">
                                <CheckedItem>Neuen Namen im System speichern</CheckedItem>
                                <CheckedItem>Änderung der Email und des Anmeldenamens von Regina Aberl anstoßen</CheckedItem>
                                <CheckedItem>IT und Rechnungswesen benachrichtigen</CheckedItem>
                                <CheckedItem>WND: Personalverrechnung benachrichtigen</CheckedItem>
                                <CheckedItem>Excel Info Liste an IT, Schulung und Telefonzentrale</CheckedItem>
                                
                                <button class="bg-Orange hover:bg-Orange-80 text-white px-3 py-2">Namensänderung durchführen</button>
                            </div>
                        </LayoutFormSection>
                    </div>
                </div>

            </main>
        </div>
    </main>

    <div @click="showDialog(title)" class="hover:cursor-pointer text-Mittelblau">
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