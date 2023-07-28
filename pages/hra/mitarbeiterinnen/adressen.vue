<script setup>
    import {
        UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon, PencilIcon,
        BookmarkIcon, PlusCircleIcon, }
    from '@heroicons/vue/24/outline'

    topMenuItems.push({link: '/hra/mitarbeiterinnen/suche', linkText: 'Zurück'})

    // const tabs = [
    //     'Adressen und Kontakt',
    // ];

    const tabs = aktionenFuerMA[0].items.map(item => item.text)
    const activeTab = ref(tabs[1]);

    function newTab(ev) {
        activeTab.value = tabs[tabs.indexOf(ev)]
    }

    const ma = mitarbeiterListe[0]
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="my-3 ml-3 text-3xl font-light text-Blaugrau">
            Stammdaten Adresse
        </div>
    </div>
    <div class="my-3 flex gap-2 items-center w-full">
        <input class="border rounded border-gray-200 px-4 py-2 w-full" value="" placeholder="Name, Bereich, Abteilung, ...">
    </div>
    <main class="grid grid-rows-[auto_auto_auto] gap-8">
        
        <HRAMitarbeiterInfoBox />

        <div class="bg-white border border-t rounded overflow-hidden">
            <main class="grid lg:grid-cols-[minmax(12rem,auto)_1fr]">
                
                <div>
                    <h3 class="font-bold px-4 pt-6 text-Mittelgrau text-lg">Persönliche Daten</h3>
                    <NavigationHraAktionenMenu :tabs="tabs" @newtab="newTab"/>
                </div>

                <div class="px-4 py-4 border-l pb-12">
                    <div v-show="tabs[0] == activeTab" class="px-2 pt-2 grid grid-rows-1 gap-4">
                        <h3 class="text-lg font-bold text-gray-900 ">Kontaktdaten und Adressen</h3>

                        <LayoutFormSection title="Kontaktdaten">
                          <div class="grid lg:grid-cols-2 gap-4">
                              <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-2">  
                                <InputText label="Mobilnummer:" value="+43 664 355 8894" width="w-64"/>
                                <InputText label="Telefon:" value="" width="w-64"/>
                                <InputText label="E-Mail:" value="steph89@gmail.com" width="w-64"/>
                              </div>

                          </div>
                        </LayoutFormSection>

                        <LayoutFormSection title="Wohnadresse">
                            <div class="grid lg:grid-cols-2 gap-4">
                                <InputText2 label="Straße" value="Hauptstraße 23/5/4" />
                                <InputText2 label="PLZ" value="3210" width="w-16"/>
                                <InputText2 label="Ort" value="Krems" />
                                <InputSelect2 label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
                                <InputCheckbox2  label="Hauptwohnsitz" checkboxLabel=""/>
                                <div>&nbsp;</div>
                                <InputCheckbox2  label="Home Office" checkboxLabel=""/>
                                <div>&nbsp;</div>
                            </div>

                        </LayoutFormSection>

                        <LayoutFormSection title="Heimatadresse">
                          <div class="grid lg:grid-cols-2 gap-4">
                                <InputText2 label="Straße" value="Hauptstraße 23/5/4" />
                                <InputText2 label="PLZ" value="3210" width="w-16"/>
                                <InputText2 label="Ort" value="St. Pölten" />
                                <InputSelect2 label="Land" :options="['AT','DE', 'PL']" width="w-32"/>
                                <InputCheckbox2  label="Hauptwohnsitz" checkboxLabel=""/>
                                <div>&nbsp;</div>
                                <InputCheckbox2  label="Home Office" checkboxLabel=""/>
                                <div>&nbsp;</div>
                            </div>
                        </LayoutFormSection>
                    </div>
            
                </div>
            </main>
        </div>
    </main>
</template>

<style>
</style>