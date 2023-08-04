<script setup>
	import { CloudArrowUpIcon } from '@heroicons/vue/24/outline' 
    const props = defineProps({
    	id: {type: Number, default: '1'},
        kategorie: {type: String, default: ''}, 
        mitarbeiter: {type: String, default: ''}, 
        datum: {type: String, default: ''}, 
        status: {type: String, default: 'Offen'}, 
        bearbeiter: {type: String, default: ''}, 
    })
    
    defineEmits(['anfrageBearbeiten'])

</script>
<template>
	<div class="grid grid-cols-[1fr_11rem] bg-white border rounded px-2 py-2  gap-2">
		<div class="text-sm">
			<div class="font-bold">{{kategorie}}</div>
			<div class="text-Hellblau text-gray-400">{{mitarbeiter}}</div>
			<div class="text-gray-400">{{datum}}</div>
		</div>
		<div class="self-center">
			<div @click="$emit('anfrageBearbeiten', id)"
				class="px-2 py-1 text-sm bg-Mittelblau text-white whitespace-nowrap text-center">
				{{status}}
			</div>
			<div class="mt-1 text-xs text-gray-400 text-center">
				{{bearbeiter}}
			</div>
		</div>
	</div>
</template>