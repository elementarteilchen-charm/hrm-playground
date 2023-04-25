<script setup>
    import { ordner, bewerberDokumente } from '~/utils/dokumente.js'
    import { FolderIcon, DocumentIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'

    const selectedFiles = ref([]);
</script>
<template>
    <h3 class="text-lg font-bold text-gray-900 ">Dokumente aus dem Bewerbermodul übernehmen</h3>

    <div class="bg-gray-100 p-4 rounded ">
        {{selectedFiles}}
        <table class="table-fixed w-full text-sm">
            <thead>
                <tr>
                    <th class="w-1/2">Dokument</th>
                    <th>Größe</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dokument in bewerberDokumente" class="border-b">
                    <td class="py-1">

                        <div class="space-x-2 flex items-center">
                            <input 
                                    type="checkbox" 
                                    v-model="selectedFiles" 
                                    class="rounded-lg w-4 h-4" 
                                    :id="dokument.uploadDateiname" 
                                    :value="dokument.uploadDateiname"
                                    :name="dokument.uploadDateiname" />
                            <label >
                                <a href="" class="text-blue-700 hover:underline">{{dokument.uploadDateiname}}</a>
                            </label>
                        </div>
                    </td>
                    <td class="text-right">243 kB</td>

                </tr>
            </tbody>
        </table>
    </div>
<!--     <div class="bg-gray-100 p-4 rounded ">
        <h3 class="font-bold text-gray-700 mb-2">Dokumente</h3>
        <div class="grid grid-rows-1 gap-12">
            <div v-for="dokument in bewerberDokumente" class="bg-white rounded p-4 grid grid-rows-2 gap-2">
                <div class="">
                    <InputCheckbox :checkboxLabel="dokument.uploadDateiname" :checked="dokument.uebernehmen" labelStyle="text-lg font-bold " checkboxStyle="text-blue-600 rounded-xl h-5 w-5" />
                </div>
                <div class="grid grid-cols-3 rounded gap-4 ">
                    <div class="flex items-center gap-2">
                        <div class="rounded-full p-2 grid self-place-center bg-yellow-100  ">
                            <FolderIcon class="w-5 h-5 " />
                        </div>
                        <InputSelect :options="ordner" :selected="dokument.ordner" width="w-full text-sm flex-shrink-0" />
                    </div>
                    <div class="flex items-center gap-2 ">
                        <div class="rounded-full p-2 grid self-place-center bg-gray-200  ">
                            <ArchiveBoxIcon class="w-5 h-5" />
                        </div>
                        <InputSelect :options="dokumentKategorien" :selected="dokument.kategorie" width="w-full text-sm flex-shrink-0" />
                    </div>
                    <div class="flex items-center gap-2 ">
                        <div class="rounded-full p-2 grid self-place-center bg-blue-200  ">
                            <DocumentIcon class="w-5 h-5" />
                        </div>
                        <InputTextX :value="dokument.digitaleAkteDateiname" width="w-full text-sm" />
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>