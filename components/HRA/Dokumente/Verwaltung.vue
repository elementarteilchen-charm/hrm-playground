<script setup>
    import { DocumentTextIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
	const Ordner = {
	    '01': 'Bewerbungen Zeugnisse',
	    '02': 'Bewilligungen',
	    '03': 'Verträge',
	    '04': 'Infos und Beurteilungen',
	    '05': 'Dokumente & Urkunden',
	    '07': 'Diverses',
	}
	
	const aktiverOrdner = ref('01')
</script>

<template>
    <div class="grid grid-cols-[28ch_1fr] pb-12  mt-3">
        
        <div class="py-3 bg-Blaugrau-10 rounded">
            <h3 class="px-4 mb-3 font-bold">
            	HRA Dokumentenverwaltung
            </h3>
            <div v-for="ordner, index in Ordner" class="mb-1 text-sm" >
                <button @click="aktiverOrdner = index" class="px-4 py-1 hover:bg-Blaugrau-25 rounded" :class="{'text-red-500': aktiverOrdner == index}">
                    <span class="font-bold text-Mittelblau " :class="{'text-red-500': aktiverOrdner == index}">{{index}} {{ordner}}</span>
                    <span class="text-Blaugrau pl-2">({{ukoDokumente[index]?.length ? ukoDokumente[index]?.length  : '0'}})</span>
                </button>
            </div>
        </div>
        
        <div class="grid grid-rows-[1fr_auto] ">
            <div class="ml-8 pr-4">
                <h3 class="mt-4 font-bold">HRA Dokumentenverwaltung</h3>
                <table class="table w-full mt-6">
                    <thead class="bg-Blaugrau-10 text-sm">
                        <tr>
                            <th class="px-2">Dokumente</th>
                            <th class="px-2" style="width: 12ch;">Typ</th>
                            <th class="px-2">Datum</th>
                            <th class="px-2">Aktion</th>
                        </tr>
                    </thead>
                    <tbody class="border rounded text-sm">
                        <tr v-for="item in ukoDokumente[aktiverOrdner]" class="border-b h-10">
                            <td>
                                <div class="flex gap-2 items-center">
                                    <DocumentTextIcon class="w-5 h-5 flex-shrink-0" />
                                    <div  class="docdescription truncate">{{item.file}}.pdf</div>
                                </div>
                            </td>
                            <td class="" >
                                <span class="text-sm">
                                    {{item.typ}}
                                </span>
                            </td>
                            <td class="text-center tabular-nums text-nowrap" style="width: 12ch;">
                                {{item.datum}}
                            </td>
                            <td>
                                <div class="flex items-center gap-x-2">
                                    <PencilIcon class="w-5 h-5" />
                                    <TrashIcon class="w-5 h-5" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-4/5 xl:w-1/2 mx-auto">
                <InputUpload  />
            </div>
        </div>
    </div>
</template>
<style>
@media screen and (min-width: 1200px) {
  .docdescription {
    max-width: 100%;
  }
}

/* For screens smaller than 1200px */
@media screen and (max-width: 1200px) {
  .docdescription {
    max-width: 20ch;
  }
}


    
</style>