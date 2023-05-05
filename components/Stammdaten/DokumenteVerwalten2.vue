<script setup>
import { ordner, bewerberDokumente } from '~/utils/dokumente.js'
import { PencilIcon, FolderIcon, DocumentIcon, ArchiveBoxIcon, XCircleIcon } from '@heroicons/vue/24/outline'



const uploadOrdner = [
    '01 Bewerbungen und Zeugnisse', '02 Bewilligungen', '03 Verträge', '04 Infos + Beurteilungen', '05 Dokumente + Urkunden', '07 Diverses',]

const editMode = ref(true)

function showEditDialog() {
    document.getElementById('dokumente-dialog').showModal();
}

function showAddFileDialog()
{
    document.getElementById('upload-dokumente-dialog').showModal();
}

function showConfirmDelete()
{
    alert("Wirklich löschen?");
}

</script>
<template>
    <h3 class="text-lg font-bold text-gray-900 ">NEU! Dokumente im Eintrittsmanagement verwalten</h3>
    <div class="bg-gray-100 p-4 rounded mt-6">
        <h3 class="font-bold text-gray-700 mb-1">Dokumente hinzufügen</h3>
        <p class="my-b text-sm text-gray-700">Dokumente mit Drag&Drop hinzufügen oder mit Mausklick einen Dialog öffnen.</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 mt-6">
            <div v-for="ordner in uploadOrdner" class="border rounded-lg h-32 bg-white p-4 grid "
                 >
                <div class="text-sm place-self-center">{{ordner}}</div>
                <ArchiveBoxIcon @click="showAddFileDialog" class="text-gray-400 w-8 h-8 place-self-center hover:text-blue-500" />
            </div>
        </div>


    </div>

    <div  class="bg-gray-100_ _p-4 rounded ">

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
                        <a href="" class="text-blue-700 hover:underline">{{dokument.uploadDateiname}}</a>
                    </td>
                    <td class="text-left">{{dokument.ordner}}</td>
                    <td class="text-left">{{dokument.kategorie}}</td>

                    <td class="text-right">
                        <span>21.04.2023</span> <br>
                        <span class="text-xs text-gray-400">Melanie Schmid</span>
                    </td>
                    <td class=""> 
                        <div class="px-4 py-2 flex gap-4 justify-end">
                        <button @click="showEditDialog" class="place-self-center">
                            <PencilIcon class="text-gray-400 hover:text-red-600 w-5 h-5"/>
                        </button>
                        <button @click="showConfirmDelete" class="place-self-center">
                            <XCircleIcon class="text-gray-400 hover:text-red-600 w-5 h-5"/>
                        </button>
                            
                        </div>
                    </td>

                </tr>
            </tbody>
        </table>

        <div class="mt-6 flex justify-end">
            <button @click="showEditDialog" class="text-sm bg-blue-700 text-white px-2 py-1">Dokumente bearbeiten</button>
        </div>
    </div>


    
    <dialog id="upload-dokumente-dialog" class="shadow-lg bg-gray-100 p-4">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
                <header class="px-4 py-2 h-12  text-lg font-bold ">
                    Neues Dokument hinzufügen
                </header>
                <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                     <div class="grid lg:grid-cols-1 gap-4">
                        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                            <InputText label="Dateiname" value="emailattachment012389.pdf" width="text-sm w-4/5"/>
                            <InputSelect label="Ordner" :options="ordner"  width="w-4/5 text-sm flex-shrink-0" />
                            <InputSelect label="Kategorie" :options="dokumentKategorien"  width="w-4/5 text-sm flex-shrink-0" />
                        </div>
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
    <dialog id="dokumente-dialog" class="shadow-lg bg-gray-100 p-4" style="width: 50vw; height: 50vh">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
                <header class="px-4 py-2 h-12  text-lg font-bold ">
                    Dokumente beschlagworten
                </header>
                <main class="px-4 py-2" style="height: calc(100% - 1rem); overflow-y: auto;">
                     <div class="grid lg:grid-cols-1 gap-4">
                        <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">
                            <InputText label="Dateiname" value="Lebenslauf Babunek.pdf" width="text-sm w-4/5"/>
                            <InputSelect label="Ordner" :options="ordner"  :selected="ordner[1]" width="w-4/5 text-sm flex-shrink-0" />
                            <InputSelect label="Kategorie" :options="dokumentKategorien"  :selected="dokumentKategorien[2]" width="w-4/5 text-sm flex-shrink-0" />
                        </div>
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

<style type="">
    #upload-dokumente-dialog {
        width: 50vw;
        height: 50vh;
    }
</style>