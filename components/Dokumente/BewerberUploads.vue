<script setup>
import { PencilIcon, FolderIcon, DocumentIcon, ArchiveBoxIcon, 
        XCircleIcon, CheckCircleIcon, PlusCircleIcon } from '@heroicons/vue/24/outline'

const hinzugefuegteDokumente = [
    {
        uploadDateiname: "Motivationsschreiben Stephanie Babunek.pdf",
        ordner: "01 Bewerbungen und Zeugnisse",
        digitaleAkteDateiname: "2023-03-14 [ Motivationsschreiben Stephanie Babunek ].pdf",
        kategorie: 'Dokument (allgemein)',
        uebernehmen: false,
        status: 'offen'
    },
    {
        uploadDateiname: "Meldezettel.pdf",
        ordner: "01 Bewerbungen und Zeugnisse",
        digitaleAkteDateiname: "2023-03-14 [ Motivationsschreiben Stephanie Babunek ].pdf",
        kategorie: 'Dokument (allgemein)',
        uebernehmen: false,
        status: 'offen'
    },
    {
        uploadDateiname: "Anschreiben Email.pdf",
        ordner: "01 Bewerbungen und Zeugnisse",
        digitaleAkteDateiname: "2023-03-14 [ Motivationsschreiben Stephanie Babunek ].pdf",
        kategorie: 'Dokument (allgemein)',
        uebernehmen: false,
        status: 'offen'
    },
]

</script>
<template>
    
    <div class="bg-blue-100 p-4 rounded mt-2">
        <!-- <h3 class="font-bold text-gray-700 mb-1">Dokumente aus dem Bewerber-Modul</h3>
        <p class="text-sm text-gray-700">Dokumente mit Drag&Drop hinzufügen oder mit Mausklick einen Dialog öffnen.</p> -->
        <table class="bg-white border table-auto w-full text-sm">
            <thead class="bg-gray-100 border ">
                <tr>
                    <th class="py-3 px-4 text-left">Dokument</th>

                    <th class="text-right">Upload am</th>
                    <th class="text-right">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dokument in hinzugefuegteDokumente" class="border-b">
                    <td class="py-3 px-4">
                        <div draggable="true"  class="cursor-move flex gap-2 items-center">
                            <InputCheckbox :checkboxLabel="dokument.uploadDateiname" />
                        </div>
                    </td>
                    <td class="text-right">21.04.2023</td>
                </tr>
            </tbody>
        </table>
        <div class="mt-3">
            <button @click="$emit('addedDocuments')" class="px-2 py-1 text-white bg-blue-600">Übernehmen</button>
        </div>
    </div>

</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>