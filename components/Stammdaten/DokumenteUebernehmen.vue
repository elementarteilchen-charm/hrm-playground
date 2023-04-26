<script setup>
    import { ordner, bewerberDokumente } from '~/utils/dokumente.js'
    import { FolderIcon, DocumentIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'

    const selectedFiles = ref([]);
</script>
<template>
    <h3 class="text-lg font-bold text-gray-900 ">Dokumente aus dem Bewerbermodul übernehmen</h3>

    <div class="bg-gray-100_ _p-4 rounded ">
        <table class="border bg-white table-fixed w-full text-sm">
            <thead class="bg-gray-50 border">
                <tr>
                    <th class="py-3 px-4 w-1/2">Dokument</th>
                    <th class="px-4 text-right">Größe</th>
                    <th class="px-4 text-right">Datum</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dokument in bewerberDokumente" class="border-b" :class="{'bg-gray-100': dokument.status === 'übernommen'}">
                    <td class="py-4 px-3 " >
                        <div class="space-x-2 flex items-center" >
                            <input 
                                    type="checkbox" 
                                    @click="dokument.status === 'übernommen' ? dokument.status = 'offen' : dokument.status = 'übernommen'"
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
                    <td class="px-3 py-4 text-right">243 kB</td>
                    <td class="px-3 py-4 text-right">21.04.2023</td>

                </tr>
            </tbody>
        </table>
    </div>


</template>