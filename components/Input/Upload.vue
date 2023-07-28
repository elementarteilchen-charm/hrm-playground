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
	        
	        <div class="flex items-center py-3 gap-8 ">
	            
	            <svg class="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
	                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
	            </svg>

				<div class="flex flex-col items-center justify-center ">
				    <p class="mb-2 text-sm  dark:text-gray-400">
				        <span class="font-semibold">Hier klicken</span> oder eine Datei hierher ziehen
				    </p>
				    <p class="text-xs text-gray-500 dark:text-gray-400">PDF, JPG, PNG (max. 5 MB)</p>
				</div>
	        </div>

	        <input id="dropzone-file" type="file" class="hidden" />
	    </label>
	</div> 

</template>