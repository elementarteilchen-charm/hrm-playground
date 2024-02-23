<script setup>
	import { CloudArrowUpIcon } from '@heroicons/vue/24/outline' 
    const props = defineProps({
        required: {type: Boolean}, 
        label: {type: String}, 
    })

</script>

<template>
	
	<div v-if="label" class=" self-center text-sm text-gray-700 font-bold whitespace-nowrap">
	    {{label}}<span v-if="required">*</span>
	</div>
	<div class="flex items-center justify-center text-Mittelblau">
	    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 hover:bg-gray-100">
	        
	        <div class="flex items-center py-3 gap-4 ">
	            
	            <CloudArrowUpIcon class="w-5 h-5 flex-shrink-0"/>

				<div class="flex flex-col items-center justify-center ">
				    <p class="mb-2 text-sm  dark:text-gray-400">
				        <span class="font-semibold">Hier klicken</span> oder eine Datei hierher ziehen
				    </p>
				    <p class="text-xs text-gray-500 dark:text-gray-400">PDF, JPG, PNG (max. 12 MB)</p>
				</div>
	        </div>

	        <input id="dropzone-file" type="file" class="hidden" />
	    </label>
	</div> 

</template>