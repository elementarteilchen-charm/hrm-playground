<script setup>
    import { DocumentTextIcon, ChevronDownIcon, ChevronUpIcon, PlusCircleIcon, CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline' 

  const title = "Vertragsdatensatz"
  const vertragsDatei = "Vertrag"

  function showDialog(dialogId) {
        document.getElementById(dialogId).showModal();
    }

  const vds = vertragsdatensaetze[0]
  const vertrag = vertragsdatensaetze[1]
  const austritt = ref(true)

  const zeigeVertragsdokument = ref(false)

</script>
<template>
    <LayoutFormSection title="">
        <section>
            <h3 class="text-lg font-bold text-gray-900 ">Aktueller Vertrag</h3>
            <div>
                <div class="p-8 border rounded bg-white shadow-lg space-y-6">
                    <div class="grid grid-cols-4 gap-x-4 gap-y-8">
                        <div class="">
                            <div class="font-bold">PersonalNr</div>
                            {{vertrag.personalnr}}
                        </div>
                        <div>
                            <div class="font-bold">DV Beginn</div>
                            {{vertrag.dvbeginn}}
                        </div>
                        <div>
                            <div class="font-bold">Arbeitsverhältnis</div>
                            {{vertrag.arbeitsverhaeltnis}}
                        </div>
                        <div>
                          <div class="flex justify-between">
                              <InputButton @click="showDialog(vertragsDatei)" :secondary="true">
                                  <div class="flex gap-x-2 items-center">
                                      <DocumentTextIcon class="flex-shrink-0 w-5 h-5" />
                                      Dokumente anzeigen
                                  </div>
                              </InputButton>
                          </div>
                        </div>
                        <div class="font-bold flex gap-x-2">
                            <div>{{vertrag.mandant}}</div>
                            <div>&middot;</div>
                            <div>{{vertrag.standort}}</div>
                        </div>
                        <div>
                            <div class="font-bold text-Blaugrau">DV Ende</div>
                            <!-- {{vertrag.dvende}} --> &ndash;
                        </div>
                        <div>
                            <div class="font-bold text-Blaugrau">Letzter Arbeitstag</div>
                            <!-- {{vertrag.letzterArbeitstag}} -->
                            &ndash;
                        </div>
                        <div>
                            <div class="font-bold text-Blaugrau">Techn. Austrittsdatum</div>
                            {{vertrag.technischesAustrittsdatum}}
                        </div>
                    </div>

                </div>
                <div class="">
                </div>

                <div class="mt-6 flex gap-4 text-sm flex justify-between">
                    <InputButton :secondary="true">
                        <div class="flex gap-x-2 items-center">
                            <PencilIcon class="w-5 h-5" />Vertrag bearbeiten
                        </div>
                    </InputButton>
                    <div class="flex gap-x-2">
                        <InputButton>
                            <div class="flex gap-x-2 items-center">
                                <XCircleIcon class="w-5 h-5" /> Vertrag beenden
                            </div>
                        </InputButton>
                        <InputButton>
                            <div class="flex gap-x-2 items-center">
                                <PlusCircleIcon class="w-5 h-5" /> Neuer Vertrag
                            </div>
                        </InputButton>
                    </div>
                </div>
            </div>
        </section>
        <div class="mt-12">
            Verträge
            <div class="hidden">
                hier listen wir die vorigen Verträge <br>
                Wenn ich einen auswähle, werden oben die Details angezeigt und ich kann evtl bearbeiten?
            </div>
        </div>
        <h3 class="text-lg font-bold text-gray-900 "></h3>
        
        <table class=" table w-full text-sm bg-white">
            <thead class="bg-gray-200 h-16 _text-left text-gray-500 ">
                <tr>
                    <th class="px-2 py-3 text-sm ">PersonalNr</th>
                    <th class="px-2 py-1 text-sm 2xl:table-cell hidden transition">Grfg. Karenz</th>
                    <th class="px-2 py-1 text-sm ">
                        Dienstantritt
                    </th>
                    <th class="px-2 py-1 text-sm 2xl:table-cell hidden transition whitespace-pre">
                        DV Beginn
                    </th>
                    <th class="px-2 py-1 text-sm 2xl:table-cell hidden transition whitespace-pre">DV Ende</th>
                    <th class="px-2 py-1 text-sm ">Mandant</th>
                    <th class="px-2 py-1 text-sm ">Standort</th>
                    <th class="px-2 py-1 text-sm ">Arbeitsverhältnis</th>
                    <th class="px-2 py-1 text-sm text-center">Letzter Arbeitstag</th>
                    <th class="px-2 py-1 text-sm text-center">Techn. Austrittsdatum</th>
                    <th class="px-2 py-1 text-sm ">Freigegeben</th>
                    <th class="px-2 py-1 text-sm text-center">Edit</th>
                </tr>
                <tr class="bg-gray-100 border-b 2xl:hidden transition">
                    <th></th>
                    <th class="px-2 py-1 text-xs ">
                        <dl class="2xl:hidden transition  text-Blaugrau">
                            <dd>DV Beginn</dd>
                            <dd>DV Ende</dd>
                        </dl>
                    </th>
                    <th colspan="7"></th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="vertrag, index in vertragsdatensaetze" class="h-10">
                    <td class="border-b py-1 pl-1 pr-4 tabular-nums text-right border-r">{{vertrag.personalnr}}</td>
                    <td class="border-b py-1 px-2 2xl:table-cell hidden transition border-r">
                        <CheckCircleIcon class="mx-auto w-5 h-5" v-if="vertrag.geringfuegig" />
                    </td>
                    <td class="border-b py-1 px-2 tabular-nums border-r">
                        {{vertrag.dienstantritt}}
                        <dl class="2xl:hidden transition space-y-1 mt-1 text-Blaugrau">
                            <dd>{{vertrag.dvbeginn}}</dd>
                            <dd>{{vertrag.dvende}}</dd>
                        </dl>
                    </td>
                    <td class="border-b py-1 px-2 tabular-nums border-r 2xl:table-cell hidden transition whitespace-pre">{{vertrag.dvbeginn}}</td>
                    <td class="border-b py-1 px-2 tabular-nums border-r 2xl:table-cell hidden transition whitespace-pre">{{vertrag.dvende}}</td>
                    <td class="border-b py-1 px-2 text-center ">{{vertrag.mandant}} </td>
                    <td class="border-b py-1 px-2 text-center border-r ">{{vertrag.standort}}</td>
                    <td class="border-b py-1 px-2 text-center border-r">{{vertrag.arbeitsverhaeltnis}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.letzterArbeitstag}}</td>
                    <td class="border-b py-1 px-2 text-center tabular-nums border-r whitespace-pre">{{vertrag.technischesAustrittsdatum}}</td>
                    <td class="border-b py-1 px-2 text-center border-r">Ja</td>
                    <td class="border-b py-1 px-2 ">{{vertrag.neueintrit}}</td>
                    <!-- <td class="border-b px-2 ">
              <div class="flex items-center gap-2 h-full">
                <a @click="showDialog('Vertragsdatensatz')"><PencilIcon class="w-5 h-5 text-Mittelblau" /></a>
                <TrashIcon class="w-5 h-5 text-Mittelblau" />
              </div>
            </td> -->
                </tr>
            </tbody>
        </table>
        <div class="hidden mt-4 flex justify-end">
            <button @click="showDialog(title)" class="bg-blue-700 text-white px-3 py-2">Vertragsdatensatz hinzufügen</button>
        </div>
    </LayoutFormSection>
    <LKWWDialog :title="vertragsDatei" height="85vh" width="50vw">
        <embed style="width: 640px; aspect-ratio: 3 / 4;" src="/data/TEST-Dienstvertrag.pdf" type="application/pdf">
    </LKWWDialog>
    <LKWWDialog :title="title" height="70vh" width="75vw">
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
    </LKWWDialog>
</template>