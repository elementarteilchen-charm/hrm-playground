<script setup>
import { ordner, bewerberDokumente } from '~/utils/dokumente.js'
import { FolderIcon, DocumentIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'
</script>
<template>
    <h3 class="text-lg font-bold text-gray-900 ">Dokumente aus dem Bewerbermodul übernehmen</h3>
<!--     <div class="bg-gray-100 p-4 rounded">
        <h3 class="font-bold text-gray-700 mb-2">Dokumente</h3>
        <div class="grid grid-rows-1 gap-8">
            <div v-for="dokument in bewerberDokumente" class="grid grid-cols-2 border bg-white overflow-hidden rounded p-4 text-sm ">
                <div class="pt-1">
                    <InputCheckbox :checkboxLabel="dokument.uploadDateiname" :checked="dokument.uebernehmen" labelStyle="font-bold text-yellow-500" checkboxStyle="text-blue-600 rounded-xl" />
                </div>
                <div class="space-y-2">
                    <div class="flex items-center">
                        <div class="rounded-full p-2 grid self-place-center bg-yellow-400 mr-2 ">
                            <FolderIcon class="w-5 h-5 " />
                        </div>
                        <InputSelect :options="ordner" :selected="dokument.ordner" width="w-full text-sm flex-shrink-0" />
                    </div>
                    <div class="flex items-center">
                        <div class="rounded-full p-2 grid self-place-center bg-gray-200 mr-2 ">
                            <ArchiveBoxIcon class="w-5 h-5" />
                        </div>
                        <InputSelect :options="dokumentKategorien" :selected="dokument.kategorie" width="w-full text-sm flex-shrink-0" />
                    </div>
                    <div class="flex items-center">
                        <div class="rounded-full p-2 grid self-place-center bg-blue-200 mr-2 ">
                            <DocumentIcon class="w-5 h-5" />
                        </div>
                        <InputTextX :value="dokument.digitaleAkteDateiname" width="w-full text-sm" />
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- NEU -->
    <div class="bg-gray-100 p-4 rounded ">
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
    </div>
</template>