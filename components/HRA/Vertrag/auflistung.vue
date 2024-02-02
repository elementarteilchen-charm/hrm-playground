<script setup>
    import { DocumentTextIcon, ChevronDownIcon, ChevronUpIcon, PlusCircleIcon, CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline' 

  const vertragBearbeitenDialog = "Vertrag bearbeiten"
  const vertragBeendenDialog = "Vertrag beenden"
  const vertragsDatei = "Vertrag"
  const derVertrag = ref(vertragsdatensaetze[0])

  function showDialog(dialogId, vertrag) {
        derVertrag.value = vertrag;
        document.getElementById(dialogId).showModal();
    }

  const vertrag = vertragsdatensaetze[1]
  const austritt = ref(true)

  const zeigeVertragsdokument = ref(false)

</script>
<template>
    <div class="space-y-6">
    <LayoutFormSection title="Freigegebene Verträge">

        <table class=" table w-full text-sm bg-white">
            <thead class="bg-gray-200 h-16  text-gray-500 ">
                <tr>
                    <th class="px-2 py-3 text-xs ">PersonalNr</th>
                    <th class="px-2 py-1 text-xs">Grfg. Karenz</th>
                    <th class="px-2 py-1 text-xs ">
                        Dienstantritt
                    </th>
                    <th class="px-2 py-1 text-xs whitespace-pre">
                        DV Beginn
                    </th>
                    <th class="px-2 py-1 text-xs whitespace-pre">DV Ende</th>
                    <th class="px-2 py-1 text-xs ">Mandant</th>
                    <th class="px-2 py-1 text-xs ">Standort</th>
                    <th class="px-2 py-1 text-xs ">Arbeitsverhältnis</th>
                    <th class="px-2 py-1 text-xs text-center">Letzter Arbeitstag</th>
                    <th class="px-2 py-1 text-xs text-center">Techn. Austrittsdatum</th>
                    <th class="px-2 py-1 text-xs ">Freigegeben</th>
                </tr>
               
            </thead>
            <tbody class="">
                <tr v-for="vertrag, index in vertragsdatensaetze" class="h-10" :class="{'font-bold': vertrag.aktiv}">
                    <td class="border-b  border-r hover:bg-gray-100">
                        <button @click="showDialog(vertragBearbeitenDialog, vertrag)" 
                                class="tabular-nums py-1 pl-1 pr-4 text-right w-full ">
                            {{vertrag.personalnr}}
                        </button>
                    </td>
                    <td class="border-b py-1 px-2 border-r">
                        <CheckCircleIcon class="mx-auto w-5 h-5" v-if="vertrag.geringfuegig" />
                    </td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">
                        {{vertrag.dienstantritt}}
                    </td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.dvbeginn}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.dvende}}</td>
                    <td class="border-b py-1 px-2 text-center ">{{vertrag.mandant}} </td>
                    <td class="border-b py-1 px-2 text-center border-r ">{{vertrag.standort}}</td>
                    <td class="border-b py-1 px-2 text-center border-r">{{vertrag.arbeitsverhaeltnis}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.letzterArbeitstag}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.technischesAustrittsdatum}}</td>
                    <td class="border-b py-1 px-2 ">{{vertrag.neueintrit}}</td>

                </tr>
            </tbody>
        </table>
        <div class="mt-3 flex gap-4 text-sm flex justify-end">
            <InputButton>
                <div class="flex gap-x-2 items-center">
                    <PlusCircleIcon class="w-5 h-5" />Neuen Vertrag erstellen
                </div>
            </InputButton>
        </div>
</LayoutFormSection>

<LayoutFormSection title="In Vorbereitung">
        <table class=" table w-full text-sm bg-white">
            <thead class="bg-gray-200 h-16  text-gray-500 ">
                <tr>
                    <th class="px-2 py-3 text-xs ">PersonalNr</th>
                    <th class="px-2 py-1 text-xs">Grfg. Karenz</th>
                    <th class="px-2 py-1 text-xs ">
                        Dienstantritt
                    </th>
                    <th class="px-2 py-1 text-xs whitespace-pre">
                        DV Beginn
                    </th>
                    <th class="px-2 py-1 text-xs whitespace-pre">DV Ende</th>
                    <th class="px-2 py-1 text-xs ">Mandant</th>
                    <th class="px-2 py-1 text-xs ">Standort</th>
                    <th class="px-2 py-1 text-xs ">Arbeitsverhältnis</th>
                    <th class="px-2 py-1 text-xs text-center">Letzter Arbeitstag</th>
                    <th class="px-2 py-1 text-xs text-center">Techn. Austrittsdatum</th>
                    <th class="px-2 py-1 text-xs ">Freigegeben</th>
                </tr>
               
            </thead>
            <tbody class="">
                <tr v-for="vertrag, index in vertragInVorbereitung" class="h-10" :class="{'font-bold': vertrag.aktiv}">
                    <td class="group border-b  border-r hover:bg-gray-100 relative">
                        <button @click="showDialog(vertragBearbeitenDialog, vertrag)" 
                                class="tabular-nums py-1 pl-1 pr-4 text-right w-full ">
                            {{vertrag.personalnr}}
                        </button>
                        <div class="group-hover:block hidden absolute rounded-lg top-0 left-0 w-full h-full shadow-lg text-center bg-Mittelblau text-white transition delay-300 ">
                            {{vertrag.personalnr}}
                        </div>
                    </td>
                    <td class="border-b py-1 px-2 border-r">
                        <CheckCircleIcon class="mx-auto w-5 h-5" v-if="vertrag.geringfuegig" />
                    </td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">
                        {{vertrag.dienstantritt}}
                        
                    </td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.dvbeginn}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.dvende}}</td>
                    <td class="border-b py-1 px-2 text-center ">{{vertrag.mandant}} </td>
                    <td class="border-b py-1 px-2 text-center border-r ">{{vertrag.standort}}</td>
                    <td class="border-b py-1 px-2 text-center border-r">{{vertrag.arbeitsverhaeltnis}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.letzterArbeitstag}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.technischesAustrittsdatum}}</td>
                    <td class="border-b py-1 px-2 ">{{vertrag.neueintrit}}</td>
                </tr>
            </tbody>
        </table>
    </LayoutFormSection>
    </div>

    <LKWWDialog :title="vertragBearbeitenDialog" height="70vh" width="75vw">
        <div class="grid lg:grid-cols-1 gap-4_">
            <div class="grid grid-rows-1 gap-y-4">
                <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">
                    <InputCheckbox label="Neueintritt" :checked="derVertrag.neueintritt"/>
                    <InputText label="PersonalNr" :value="derVertrag.personalnr" width="w-1/2" />
                    <InputSelect label="Mandant" :options="['WGS', 'LKW', 'CTX']" width="w-1/2" />
                    <InputSelect label="Standort" :options="['WND', 'KUF']" width="w-1/2" />
                    <InputSelect label="Arbeitsverhältnis" :options="['Angestellter', 'Praktikant', 'Ferial']" width="w-1/2" />
                    <InputDate label="Eintrittstag" :value="derVertrag.dienstantritt" width="w-36" />
                    <InputDate label="DV-Beginn" :value="derVertrag.dvbeginn" width="w-36" />
                    <InputDate label="DV-Ende" :value="derVertrag.dvende" width="w-36" />
                    <InputDate label="Jubiläumsdatum" :value="derVertrag.dienstantritt" width="w-36" />
                    <InputCheckbox label="Grenzgänger" />
                </div>
            </div>
        </div>
        
    </LKWWDialog>

<!--     <LKWWDialog :title="vertragBeendenDialog" height="70vh" width="75vw">
        <div class="grid lg:grid-cols-1 gap-4_">
            <div class="grid grid-rows-1 gap-y-4">
                <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">
                    <InputCheckbox label="Neueintritt" />
                    <InputSelect label="PersonalNr" :options="[13496, 15673]" :selected="vds.personalnr" width="w-1/2" />
                    <InputSelect label="Mandant" :options="['WGS', 'LKW', 'CTX']" width="w-1/2" />
                    <InputSelect label="Standort" :options="['WND', 'KUF']" width="w-1/2" />
                    <InputSelect label="Arbeitsverhältnis" :options="['Angestellter', 'Praktikant', 'Ferial']" width="w-1/2" />
                    <InputDate label="Eintrittstag" :value="vds.dienstantritt" width="w-36" />
                    <InputDate label="DV-Beginn" :value="vds.dvbeginn" width="w-36" />
                    <InputDate label="DV-Ende" :value="vds.dvende" width="w-36" />
                    <InputDate label="Jubiläumsdatum" :value="vds.dienstantritt" width="w-36" />
                    <InputCheckbox label="Grenzgänger" />
                </div>
            </div>
        </div>
        <section v-if="austritt" class="mt-6 font-light text-xl text-Blaugrau">
            Austritt
        </section>
        <div class="mt-3 grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">
            <InputDate label="Letzter Arbeitstag" :value="vds.letzterArbeitstag" width="w-36" />
            <InputDate label="Techn. Austrittsdatum" width="w-36" />
            <InputSelect label="Art der Kündigung" :options="['DN Kündigung', 'DG Kündigung', 'Einvernehmliche']" width="w-1/2" />
            <InputSelect label="Grund der Kündigung" :options="['DG1', 'DG2', 'DG3']" width="w-1/2" />
            <InputTextarea label="Bemerkung" />
        </div>
    </LKWWDialog> -->
</template>