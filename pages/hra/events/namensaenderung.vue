<script setup>
    import {ExclamationTriangleIcon, TrashIcon, CloudArrowUpIcon} from '@heroicons/vue/24/outline'
    import { showDialog } from '/utils/modal.js'
    const title = "Anforderungen"
    const tabs = [
        'Namensänderung',
        'Reisepass',
        'Durchführen'
    ];
    const ma = mitarbeiterListe[1]
    const activeTab = ref(tabs[0]);
    const zeigeAnforderungen = ref(false)
    const zeigeProzessinfo = ref(true)

    function newTab(ev) {
        console.log(ev)
        activeTab.value = tabs[tabs.indexOf(ev)]
    }
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

        <div @click="zeigeProzessinfo = true" class="my-1 ml-3 text-2xl font-light text-Blaugrau hover:cursor-pointer">
            Namensänderung
        </div>
        <div v-show="zeigeProzessinfo" class="bg-white rounded my-3 text-white bg-Orange-80 flex gap-4 p-4">
            <ExclamationTriangleIcon @click="zeigeProzessinfo = false" class="text-white w-6 h-6 flex-shrink-0 place-self-center" />
            <div>Der Prozess für die Namensänderung wurde am 23.6.2023 um 14:32 gestartet.</div>
        </div>
        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <NavigationHraTabMenu :tabs="tabs" @newtab="newTab" />

                <div class="px-4 py-4 border-l pb-12">
                    
                    <div v-if="tabs[0] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Namensänderung</h3>
                    
                        <ul>
                            <li>Bitte kontrollieren Sie mit dem neuen Reisepass die korrekte Schreibweise und den nativen Namen.</li>
                            <li>Meldung an die Gehaltsverrechnung wegen SVA</li>
                            <li>Neue UserID und Email wird per Nachtlauf automatisch erstellt</li>
                            <li>Benachrichtigung an User per EMail</li>
                        </ul>
                        
                        <LayoutFormSection title="">
                            <div class="grid lg:grid-cols-1 gap-4">
                                <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                                    <InputText label="Vorname" value="Stephanie" />
                                    <InputText label="Geburtsname" value="Babunek" />
                                    <InputText label="Nachname" value="Aberl-Konrad" />
                                    <InputText label="Nachname nativ" value="Aberl-Konrad" />
                                    <InputText label="Nachname Reisepass" value="Aberl-Konrad" />
                                </div>
                            </div>
                        </LayoutFormSection>

                        <section class="mt-4">
                            <h3 class="font-bold mb-2">Neuer Reisepass</h3>
                            <div class="flex items-center gap-4">
                                <div class="border border-gray-400 rounded-md shadow-md w-32 h-12 bg-white p-4 flex space-x-2">
                                    <CloudArrowUpIcon class="text-gray-400 w-6 h-6 flex-shrink-0 place-self-center" />
                                    <div @click="showUploadDialog" class="text-sm place-self-center">Upload</div>
                                </div>
                                <div class="p-4 flex gap-4">
                                    <a href="" class="text-blue-700 hover:underline">Aberl-Konrad Reisepass.pdf</a>
                                    <TrashIcon class="w-5 h-5" />
                                </div>
                            </div>
                        </section>
                    </div>
                    
                    <div v-if="tabs[1] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <DokumenteVerwalten />
                    </div>

                    <div v-if="tabs[2] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="font-bold text-xl">Benachrichtigungen</h3>
                        <ul>
                            <li>Bitte kontrollieren Sie mit dem neuen Reisepass die korrekte Schreibweise und den nativen Namen.</li>
                            <li>Meldung an die Gehaltsverrechnung wegen SVA</li>
                            <li>Neue UserID und Email wird per Nachtlauf automatisch erstellt</li>
                            <li>Benachrichtigung an User per EMail</li>
                        </ul>
                        <LayoutFormSection>
                            <div class="space-y-3">
                                <InputCheckbox checkboxLabel="IT und Rechnungswesen benachrichtigen" />
                                <InputCheckbox checkboxLabel="WND: Personalverrechnung benachrichtigen" />
                                <InputCheckbox checkboxLabel="Excel Info Liste an IT, Schulung und Telefonzentrale" />
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