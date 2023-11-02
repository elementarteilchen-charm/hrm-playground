<script setup>
	import { CloudArrowUpIcon } from '@heroicons/vue/24/outline' 
    const props = defineProps({
        dateiname: {type: String, default: ''}, 
        ordner: {type: String, default: ''}, 
        kategorie: {type: String, default: ''}, 
        justify: {type: String, default: 'start'}, 
    })
    const showUploadBox = ref(false)
</script>

<template>
	<div class="my-3 flex justify-{{justfiy}}">
		<button class="px-3 py-2 flex gap-2 items-center border border-transparent bg-gray-50 hover:bg-Blaugrau-25 transition text-Mittelblau" @click="showUploadBox = !showUploadBox">
			<CloudArrowUpIcon class="w-5 h-5"/>Nachweisdokument hochladen
		</button>
	</div>

	<div v-show="showUploadBox" class="border rounded-lg bg-white p-6 mt-6">
		<div class="grid grid-cols-[minmax(6rem,min-content)_1fr] gap-x-2 gap-y-3">
		    <InputUpload label="Upload" />
		    <InputText label="Dateiname" :value="dateiname" width="w-4/5"/>
		    <InputSelect :options="digitaleAkteOrdner" :selected="ordner" label="Ordner" width="w-4/5"/>
		    <InputSelect :options="dokumentKategorien_volleListe" :selected="kategorie" label="Typ" width="w-4/5"/>
		</div>
	</div>
</template>