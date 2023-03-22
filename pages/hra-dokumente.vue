<script setup>
  import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline' 
  import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline' 
  import { PlusCircleIcon } from '@heroicons/vue/24/outline' 
  import { CheckCircleIcon } from '@heroicons/vue/24/outline' 

  import { reactive } from 'vue'

  const tabs = [
        'Übernehmen', 
        'Aus der Bewerbung', 
    ];
  const ordner = [
        '01 Bewerbungen und Zeugnisse', '02 Bewilligungen', '03 Verträge', '04 Infos + Beurteilungen', '05 Dokumente + Urkunden', '07 Diverses', '08 Austritt'
    ];
  const dokumentKategorien = [
        "Anmeldebescheinigung", "Arbeitsbestätigung", "Aufenthaltstitel", "Beschäftigungsbewilligung", "Datenschutzerklärung",
        "Dienstvertrag", "Diplom", "Ersatz", "FXT", "HAS", "Homeoffice", "Inskriptionsbestätigung", "Konkurrenzklausel",
        "Lehrabschlussprüfung", "Maturazeugnis", "Meldezettel", "Personalausweis", "Personaldatenblatt", "Reisepass", "RWR",
        "Schuldaten", "Schulzeugnisse", "Sprachzertifikate", "Uni", "Verpflichtungserklärung", 
      ];
  const bewerberUploads = [
        'Lebenslauf Babunek.pdf', 'Motivationsschreiben Stephanie Babunek.pdf', 
        'Meldezettel.pdf', 'Email Zusage.msg', 'Reisepass.jpg', 'Zeugnis Bachelor Babunek 2019.pdf'
    ];

  let dokumente = [
          {
            uploadDateiname: "Lebenslauf Babunek.pdf",
            ordner: "01 Bewerbungen und Zeugnisse",
            kategorie: "Lebenslauf",
            digitaleAkteDateiname: "2023-03-14 [ Lebenslauf Babunek ].pdf",
            uebernehmen: true,
          },
          {
            uploadDateiname: "Motivationsschreiben Stephanie Babunek.pdf",
            ordner: "01 Bewerbungen und Zeugnisse",
            kategorie: "Lebenslauf",
            digitaleAkteDateiname: "2023-03-14 [ Motivationsschreiben Stephanie Babunek ].pdf",
            uebernehmen: true,
          },
          {
            uploadDateiname: "Reispass Babunek.pdf",
            ordner: "05 Dokumente + Urkunden",
            kategorie: "Reisepass",
            digitaleAkteDateiname: "2023-03-14 [ Reisepass Babunek ].pdf",
            uebernehmen: false,
          },
          {
            uploadDateiname: "Babunek Bescheid Beschäftigungsbewilligung.pdf",
            ordner: "02 Bewilligungen",
            kategorie: "Beschäftigungsbewilligung",
            digitaleAkteDateiname: "2023-03-14 [ Reisepass Babunek ].pdf",
            uebernehmen: true,
          },
          {
            uploadDateiname: "Motivationsschreiben Stephanie Babunek.pdf",
            ordner: "01 Bewerbungen und Zeugnisse",
            kategorie: "Lebenslauf",
            digitaleAkteDateiname: "2023-03-14 [ Motivationsschreiben Stephanie Babunek ].pdf",
            uebernehmen: true,
          },
          {
            uploadDateiname: "Reispass Babunek.pdf",
            ordner: "05 Dokumente + Urkunden",
            kategorie: "Reisepass",
            digitaleAkteDateiname: "2023-03-14 [ Reisepass Babunek ].pdf",
            uebernehmen: false,
          },
          {
            uploadDateiname: "Babunek Bescheid Beschäftigungsbewilligung.pdf",
            ordner: "02 Bewilligungen",
            kategorie: "Beschäftigungsbewilligung",
            digitaleAkteDateiname: "2023-03-14 [ Reisepass Babunek ].pdf",
            uebernehmen: true,
          },
      ];

  const activeTab = reactive({ tab: tabs[0] });

  function showDialog() {
    document.getElementById('dokument-dialog').showModal();
  }
  
  function saveData() {
    console.log("Saving data");
  }    
</script>

<template>
  
  <div class="mt-4 w-100">
    <div class="bg-white p-4 border rounded flex items-center justify-between">
      <div class="font-bold">
        Eintrittsdaten für Fr. Babunek Stephanie bearbeiten
      </div>
      <div>
        <a class="p-2 text-blue-600 hover:underline inline-flex" href=""> 
          <PlusCircleIcon class="w-4 mr-1 text-blue-600"/>
          Zusammenfassung</a>
      </div>
    </div>
    <div>

    <div class="px-4 py-6 mt-8 bg-gray-100 border rounded">      
      <nav class="bg-white border-b border-t border-blue-700">
        <ul class="flex space-x-4">
          <li class="p-2 border-transparent p-2 hover:border-blue-600 cursor-pointer">Stammdaten</li>
          <li class="border-transparent p-2 hover:border-blue-600 cursor-pointer">Schulbildung</li>
          <li class="p-2 border-blue-700 font-bold bg-blue-700 text-white cursor-pointer">Dokumente</li>
        </ul>
      </nav>

      <main class="mt-2">
        <nav class=" text-sm bg-white border-b border-t border-gray-400">
          <ul class="flex items-center space-x-4 text-sm">
            <li v-for="tab, index in tabs" 
                class="px-2 py-2 flex"
                :class="[{'bg-gray-400 text-white font-bold': tab == activeTab.tab}]">
                <a href="#" @click="activeTab.tab = tab">
                    {{tab}}</a>
            </li>
          </ul>
        </nav>
        
        <div class="my-4 grid grid-cols-3 gap-8">
          <template v-for="dokument in dokumente">
            
            <div class="border rounded shadow-md bg-white px-4 py-2 grid grid-rows-[auto_1fr_auto]">
              <div class="flex justify-between items-start pb-2">
                <span class="text-sm text-orange-600">{{dokument.kategorie}}</span>
                <div v-if="dokument.uebernehmen" class="w-6 h-6 text-green-600 flex-shrink-0">
                  <CheckCircleIcon />
                </div>
              </div>
              <h3 class="font-bold leading-tight ">{{dokument.uploadDateiname}}</h3>
              <main>
                <ul class="text-sm">
                  
                  <li class="text-green-600">{{dokument.ordner}}</li>
                </ul>
              </main>
              <footer class="py-2">
                <button @click="showDialog()" class="px-2 py-1 text-sm bg-blue-700 text-white">
                  Bearbeiten
                </button>
              </footer>
            </div>
          </template>
        </div>

        <div class="grid grid-row-[2rem_1fr_2rm] text-sm">
          <div>
            Tabelle mit Modal <br>
            Im Modal alle Attribute editieren <br>
            Tabelle filtern / sortieren

          </div>
          <header class="grid grid-cols-[8rem_32rem_16rem_48rem_auto] gap-4 bg-gray-500 text-white py-2 px-2">
            <div>Ordner</div>
            <div>Datei</div>
            <div>Kategorie</div>
            <div>Dateiname</div>
            <div>Aktion</div>
          </header>

          <div class="grid grid-cols-[8rem_auto_auto_48rem_auto] gap-4  border-l border-r px-2 py-4">
            <div>
              <InputSelect :options="ordner" width="w-32"/>
            </div>
            <div>
              <InputSelect :options="bewerberUploads" width=""/>
            </div>
            <div>
              <InputSelect :options="dokumentKategorien" width="w-48"/>
            </div>            
            <div>
              <InputText value="2023-03-16 [ Lebenslauf.pdf ]" width="w-64"/>
            </div>
            <div>Radio übernehmen</div>
          </div>

          <footer class="bg-gray-500 text-white py-2 px-2">
            footer
          </footer>
        </div>

        <div v-show="tabs[0] == activeTab.tab" class="px-2 pt-2 grid grid-rows-1 gap-16">
        </div>          

        <div class="p-2 mt-6 flex justify-start space-x-4 items-center text-sm">
          <a href="" class="text-blue-600 hover:underline">Abbrechen</a>
          <button class="px-2 py-2 bg-blue-600 text-white hover:bg-blue-700">Speichern</button>
        </div>

      </main>
    </div>
      
    </div>

  </div>
  <dialog  id="dokument-dialog"  @close="saveData()" class="rounded-lg shadow-lg bg-white p-0">
      <form action="" method="dialog" class="h-full">
          <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
          
              <header class="px-4 py-2 h-12  text-lg font-bold bg-blue-700 text-white">
                  Dokument beschlagworten
              </header>
              
              <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                <div class="mt-6 px-2 grid grid-cols-[minmax(6rem,auto)_1fr] gap-4">
                    <div class="text-sm font-light">
                      Datei 
                    </div>
                    <div class="font-bold">{{dokumente[0].uploadDateiname}}</div>
                    <InputSelect label="Kategorie" :options="dokumentKategorien" width="w-4/5"/>
                    <InputSelect label="Ordner" :options="ordner" width="w-4/5"/>
                    <InputText label="Dateiname" :value="dokumente[0].digitaleAkteDateiname" width="w-4/5"/>
                    <InputRadio label="Übernehmen" :options="['Ja', 'Nein']" />
                </div>
              </main>

              <footer class="px-4 py-2 border-t bg-gray-100 h-12">
                <div class="flex justify-end space-x-4">
                    <button class="text-sm text-blue-600 hover:underline">Schließen</button>
                    <button  formmethod="dialog" class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-2 py-1 rounded">Speichern</button>
                </div>
              </footer>
          </div>
      </form>
  </dialog>
</template>

<style>
    dialog {
        width: 50vw;
        min-width: 32rem;
        max-width: 800px;
        min-height: fit-content;
        height: 50vh;
    }

    dialog::backdrop {
      background: rgba(0.2,0.2,0.2, 0.4);  
    } 
</style>