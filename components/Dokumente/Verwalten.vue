<script setup>
import { ordner, bewerberDokumente } from '~/utils/dokumente.js'
import { PencilIcon, FolderIcon, DocumentIcon, ArchiveBoxIcon, XCircleIcon } from '@heroicons/vue/24/outline'

const editMode = ref(true)

function showDialog() {
      document.getElementById('dokumente-dialog').showModal();
}

function allowDrop(event)
{
    alert("Go ahead")
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
  // ev.preventDefault();
  // let data = ev.dataTransfer.getData('text');
  // ev.target.appendChild(document.getElementById(data));
    alert("You dropped it")
    showDialog()
}

</script>
<template>
    <h3 class="text-lg font-bold text-gray-900 ">Dokumente verwalten</h3>

<!--     <div class="bg-gray-100 p-4 rounded mt-2">
        <h3 class="font-bold text-gray-700 mb-1">Dokumente verwalten</h3>
        <p class="text-sm text-gray-700">Dokumente mit Drag&Drop hinzufügen oder mit Mausklick einen Dialog öffnen.</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 mt-4">
            <div 
                v-for="dir in ordner" 
                :id="dir" v-on:drop="onDrop"  v-on:dragover="onDragOver"
                class="border rounded-lg h-28 bg-white p-4 grid text-gray-400 hover:text-blue-500 hover:shadow-lg">
                <div class="text-sm text-gray-700 place-self-center">{{dir}}</div>
                <ArchiveBoxIcon class=" w-8 h-8 place-self-center" />
            </div>
        </div>

    </div> -->

    <div  class="bg-gray-100 p-4 rounded ">
        <!-- <h2 class="font-bold mb-2">Dokumente für Fr. Babunek Stephanie</h2>
        <p class="font-light mb-4 text-sm"></p> -->

        <table v-if="editMode" class="bg-white border table-auto w-full text-sm">
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
                <tr v-for="dokument in gewaehlteDokumente" class="border-b">
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
                            <XCircleIcon class="text-gray-400 hover:text-red-600 w-5 h-5"/>
                        </button>
                            
                        </div>
                    </td>

                </tr>
            </tbody>
        </table>

        <div class="mt-6 flex justify-end">
            <button @click="showDialog" class="text-sm bg-blue-700 text-white px-2 py-1">Dokumente bearbeiten</button>
        </div>
    </div>




    <dialog id="dokumente-dialog" class="modal shadow-lg bg-gray-100 p-4">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
                <header class="px-4 py-2 h-12  text-lg font-bold ">
                    Dokumente beschlagworten
                </header>
                <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                    <table  class="bg-white border table-auto w-full text-sm">
                        <thead class="bg-gray-100 border ">
                            <tr>
                                <th class="px-4 py-3 text-left">Dokument</th>
                                <th class="w-64">Ordner</th>
                                <th class="w-64">Kategorie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dokument in gewaehlteDokumente" class="border-b">
                                <td class="px-4 py-3">
                                    <InputText :value="dokument.uploadDateiname" width="text-sm w-full"/>
                                </td>
                                <td class="text-left px-4 py-3">
                                    <InputSelect :options="ordner" :selected="dokument.ordner" width="w-full text-sm flex-shrink-0" />
                                </td>
                                <td class="text-left px-4 py-3">
                                     <InputSelect :options="dokumentKategorien" :selected="dokument.kategorie" width="w-full text-sm flex-shrink-0" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  
                  

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