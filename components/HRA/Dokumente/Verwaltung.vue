<script setup>
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
    <div class="grid grid-cols-[auto_1fr] pb-12 pl-4 mt-6">
        
        <div class="space-y-1 px-6 bg-Blaugrau-10">
            <h3 class="mt-4 ml-2 font-bold">
            	Ordner
            </h3>
            <div v-for="ordner, index in Ordner" class="text-sm _bg-red-100">
                <button @click="aktiverOrdner = index" class="py-1 px-2 hover:bg-Blaugrau-25 rounded" :class="{'text-red-500': aktiverOrdner == index}">
                    <span class="font-bold text-Mittelblau " :class="{'text-red-500': aktiverOrdner == index}">{{index}} {{ordner}}</span>
                    <span class="text-Blaugrau pl-2">({{ukoDokumente[index]?.length ? ukoDokumente[index]?.length  : '0'}})</span>
                </button>
            </div>
        </div>
        
        <div class="grid grid-rows-[1fr_auto] ">
            <div class="px-6">
                <h3 class="mt-4 font-bold">HRA Dokumentenverwaltung</h3>
                <table class="table w-full mt-6 text-sm">
                    <thead>
                        <th>Dokumente</th>
                        <th>Typ</th>
                        <th>Datum</th>
                        <th>Aktion</th>
                    </thead>
                    <tbody class="border rounded">
                        <tr v-for="item in ukoDokumente[aktiverOrdner]" class="border-b h-10">
                            <td>
                                <div class="flex gap-2 items-center">
                                    <DocumentTextIcon class="w-5 h-5" />
                                    <div>{{item.file}}.pdf</div>
                                </div>
                            </td>
                            <td class="text-center">
                                <span class="text-sm">
                                    {{item.typ}}
                                </span>
                            </td>
                            <td class="text-center tabular-nums">
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
                <div class="bg-Blaugrau-10 border rounded-lg p-6 mt-6">
                    <div class="grid grid-cols-[minmax(6rem,min-content)_1fr] gap-x-2 gap-y-3">
                        <InputUpload label="Upload" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>