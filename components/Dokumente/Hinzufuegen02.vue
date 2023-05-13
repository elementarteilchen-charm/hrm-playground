<script setup>
import { PencilIcon, FolderIcon, DocumentIcon, ArchiveBoxIcon, 
        XCircleIcon, CheckCircleIcon, PlusCircleIcon } from '@heroicons/vue/24/outline'

const bewerberDokumente = ref(false)

const hinzugefuegteDokumente = [
    {
        uploadDateiname: "Motivationsschreiben Stephanie Babunek.pdf",
        ordner: "01 Bewerbungen und Zeugnisse",
        digitaleAkteDateiname: "2023-03-14 [ Motivationsschreiben Stephanie Babunek ].pdf",
        kategorie: 'Dokument (allgemein)',
        uebernehmen: false,
        status: 'offen'
    },
]
 function addedDocuments() {
    bewerberDokumente = false
 }

function showDialog(id) {
    document.getElementById(id).showModal();
}

function allowDrop(event) {
    ev.preventDefault();
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrag(ev) {
    alert("Dragging")
  // ev.dataTransfer.setData('text', ev.target.id);
}

function onDrop(ev) {
  ev.preventDefault();
  // let data = ev.dataTransfer.getData('text');
  // ev.target.appendChild(document.getElementById(data));
    showDialog('dokumente-hinzufuegen-dialog02')
}

</script>
<template>
    <h3 class="text-lg font-bold text-gray-900 ">Dokumente hinzufügen</h3>

    <div class="bg-gray-100 p-4 rounded mt-2">
        <h3 class="font-bold text-gray-700 mb-1">Dokumente hinzufügen</h3>
        <p class="text-sm text-gray-700">Dokumente mit Drag&Drop hinzufügen oder mit Mausklick einen Dialog öffnen.</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 lg:gap-4 mt-4">
            <label for="upload">
            <div 
                 v-on:drop="onDrop"  v-on:dragover="onDragOver"
                id="vomPC" 
                class=" flex gap-2 h-14   
                        lg:flex-row lg:h-20 
                        border rounded-lg bg-white p-4 text-gray-400 
                        hover:text-blue-500 hover:shadow-lg hover:cursor-pointer">
                <PlusCircleIcon class=" w-8 h-8 place-self-center flex-shrink-0" />
                <div class="text-sm text-gray-700 place-self-center">Vom PC hochladen</div>
                <input id="upload" type="file" name="upload" class="hidden">
            </div>            
            </label>
            <div 
                id="vonDA" 
                v-on:drop="onDrop"  
                v-on:dragover="onDragOver" 
                @click="bewerberDokumente = !bewerberDokumente"
                class=" flex gap-2 h-14   
                        lg:flex-row lg:h-20 
                        border rounded-lg bg-white p-4 text-gray-400 
                        hover:text-blue-500 hover:shadow-lg hover:cursor-pointer">
                <ArchiveBoxIcon class=" w-8 h-8 place-self-center flex-shrink-0" />
                <div class="text-sm text-gray-700 place-self-center">Aus dem Bewerbermodul</div>
            </div>
        </div>
        <Transition>
        <div v-if="bewerberDokumente" >
            <DokumenteBewerberUploads />
        </div>
        </Transition>
    </div>

    <div  class="bg-gray-100 p-4 rounded ">
        <h2 class="font-bold mb-2">Dokumente, die hinzugefügt werden</h2>
        <p class="text-sm text-gray-700 mb-2">Um die unten aufgelisteten Dokumente zu speichern, klicken Sie bitte rechts den "Speichern" Button.</p>
        <table class="bg-white border table-auto w-full text-sm">
            <thead class="bg-gray-100 border ">
                <tr>
                    <th class="py-3 px-4 text-left">Dokument</th>
                    <th class="text-left">Ordner</th>
                    <th class="text-left">Kategorie</th>
                    <th class="text-right">Upload am</th>
                    <th class="text-right">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dokument in hinzugefuegteDokumente" class="border-b">
                    <td class="py-3 px-4">
                        <div draggable="true"  class="cursor-move flex gap-2 items-center">
                            <DocumentIcon class="w-5 h-5" /> {{dokument.uploadDateiname}}
                        </div>
                    </td>
                    <td class="text-left">{{dokument.ordner}}</td>
                    <td class="text-left">{{dokument.kategorie}}</td>

                    <td class="text-right">21.04.2023</td>
                    <td class=""> 
                        <div class="px-4 py-3 grid">
                        <button class="place-self-center">
                            <XCircleIcon class="text-gray-600 hover:text-red-600 w-5 h-5"/>
                        </button>
                            
                        </div>
                    </td>

                </tr>
            </tbody>
        </table>

    </div>


    <dialog id="dokumente-hinzufuegen-dialog02" class="shadow-lg bg-gray-100 p-4">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
                <header class="px-4 py-2 h-12  text-lg font-bold ">
                    Dokumente beschlagworten
                </header>
                <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">

                    <div class=" px-2 grid grid-cols-[minmax(8rem,auto)_1fr] gap-4">
                        <InputText label="Dateiname" :value="hinzugefuegteDokumente[0].uploadDateiname" width="w-full"/>
                        <InputSelect label="Ordner" :options="ordner" :selected="hinzugefuegteDokumente[0].ordner" width="w-full " />
                        <InputSelect label="Kategorie" :options="dokumentKategorien" :selected="hinzugefuegteDokumente.kategorie" width="w-full" />
                        
                    </div>
                    
                </main>

                <footer class="px-4 h-12">
                    <div class="flex justify-end space-x-4">
                        <button class="text-sm text-blue-600 hover:underline">Abbrechen</button>
                        <button formmethod="dialog" class="bg-blue-700 text-white px-3 py-2">Hinzufügen</button>
                    </div>
                </footer>
            </div>
        </form>
    </dialog>
</template>

<style>
    #dokumente-hinzufuegen-dialog02 {
        width: 50vw;
        height: 50vh;
    }
</style>