<script setup>
  import { CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline' 

  const title = "Vertragsdatensatz"
  
  function showDialog(dialogId) {
        document.getElementById(dialogId).showModal();
    }

  const vds = vertragsdatensaetze[0]

  const austritt = ref(true)

</script>

<template>
  <LayoutFormSection title="Vertragsdatensätze verwalten">
    <h3 class="text-lg font-bold text-gray-900 "></h3>
    
      <table class="table w-full text-sm bg-white">
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
          <tr class="bg-gray-100 border-b 2xl:hidden transition" >
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
          <tr 
              v-for="vertrag, index in vertragsdatensaetze" 
              class="h-10">
            <td class="border-b py-1 pl-1 pr-4 tabular-nums text-right border-r">{{vertrag.personalnr}}</td>
            <td class="border-b py-1 px-2 2xl:table-cell hidden transition border-r"><CheckCircleIcon class="mx-auto w-5 h-5" v-if="vertrag.geringfuegig"/></td>
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
      <div class="mt-4 flex justify-end">
        <button @click="showDialog(title)" class="bg-blue-700 text-white px-3 py-2">Vertragsdatensatz hinzufügen</button>
      </div>
  </LayoutFormSection>

  <LKWWDialog :title="title" height="70vh" width="75vw">
    
        <div class="grid lg:grid-cols-1 gap-4_">

          <div class="grid grid-rows-1 gap-y-4">
            <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">  
              <InputCheckbox label="Neueintritt" />
              <InputSelect label="PersonalNr" :options="[13496, 15673]" :selected="vds.personalnr" width="w-1/2"/>
              <InputSelect label="Mandant" :options="['WGS', 'LKW', 'CTX']" width="w-1/2"/>
              <InputSelect label="Standort" :options="['WND', 'KUF']" width="w-1/2"/>
              <InputSelect label="Arbeitsverhältnis" :options="['Angestellter', 'Praktikant', 'Ferial']" width="w-1/2"/>
              <InputDate label="Eintrittstag" :value="vds.dienstantritt" width="w-36"/>
              <InputDate label="DV-Beginn" :value="vds.dvbeginn" width="w-36"/>
              <InputDate label="DV-Ende" :value="vds.dvende" width="w-36"/>
              <InputDate label="Jubiläumsdatum" :value="vds.dienstantritt" width="w-36"/>
              <InputCheckbox label="Grenzgänger" />
            </div>
          </div>
          
        </div>
          
        <section v-if="austritt" class="mt-6 font-light text-xl text-Blaugrau">
          Austritt 
        </section>
        <div class="mt-3 grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">  
          <InputDate label="Letzter Arbeitstag" :value="vds.letzterArbeitstag" width="w-36"/>
          <InputDate label="Techn. Austrittsdatum" width="w-36"/>
          <InputSelect label="Art der Kündigung" :options="['DN Kündigung', 'DG Kündigung', 'Einvernehmliche']" width="w-1/2"/>
          <InputSelect label="Grund der Kündigung" :options="['DG1', 'DG2', 'DG3']" width="w-1/2"/>
          <InputTextarea label="Bemerkung"/>
        </div>

  </LKWWDialog>

  <dialog id="_Vertragsdatensatz" class="shadow-lg p-0 bg-Blaugrau-10" 
          style="width: 50vw; height: 70vh">
    <form action="" method="dialog" class="h-full">
        <div class="grid grid-rows-[auto_1fr_3rem] h-full">
    
            <header class="px-6 py-6 text-xl text-Blaugrau flex justify-between">
                <div>{{title}}</div>
            </header>
        
            <main class="px-6" 
                style="height: calc(100% -3rem); overflow-y: auto;">
                <div class="grid lg:grid-cols-2 gap-4">
                  <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">  
                    <InputSelect label="PersonalNr" :options="[13496, 15673]" :selected="vds.personalnr"/>
                    <InputDate label="Dienstantritt" :value="vds.dienstantritt"/>
                    <InputDate label="DV Beginn" :value="vds.dvbeginn"/>
                    <InputDate label="DV Ende" :value="vds.dvende"/>
                    <div></div><div></div>
                  </div>
                  <div class=" grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">  
                    <InputCheckbox label="Neueintritt" />
                    <InputCheckbox label="Grenzgänger" />
                    <InputCheckbox label="Geringfügig / Karenz" />
                    <InputSelect label="Mandant" :options="['WGS', 'LKW', 'CTX']"/>
                    <InputSelect label="Standort" :options="['WND', 'KUF']"/>
                    <InputSelect label="Arbeitsverhältnis" :options="['Angestellter', 'Praktikant', 'Ferial']"/>
                  </div>
                </div>
                  
                <div class="mt-6 grid grid-cols-[minmax(12rem,min-content)_1fr] items-baseline gap-3">  
                  <InputDate label="Letzter Arbeitstag" :value="vds.letzterArbeitstag"/>
                  <InputDate label="Techn. Austrittsdatum" />
                  <InputSelect label="Art der Kündigung" :options="['DN Kündigung', 'DG Kündigung', 'Einvernehmliche']" width="w-1/2"/>
                  <InputSelect label="Grund der Kündigung" :options="['DG1', 'DG2', 'DG3']" width="w-1/2"/>
                </div>

            </main>

            <footer class="px-4 ">
              <div class="flex justify-end space-x-6">
                  <button class="text-sm text-Mittelblau font-bold hover:underline">Abbrechen</button>
                  <button type="submit" class="bg-Mittelblau hover:bg-Hellblau text-white text-sm font-bold px-4 py-2">Speichern</button>
              </div>
            </footer>
        </div>
    </form>
  </dialog>
  
</template>
<style>
dialog::backdrop {
      background: rgba(0.2,0.2,0.2, 0.4);  
    } 
</style>