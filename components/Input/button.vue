<script setup>
	const props = defineProps({
        secondary: {type: Boolean, default: false}, 
    })
</script>

<template>
	<button class="px-3 py-2"
			:class="[secondary 
						? 'text-Mittelblau border border-transparent font-bold hover:bg-Hellgrau hover:border-Hellgrau'
						: 'text-white bg-Mittelblau border border-Mittelblau font-bold hover:bg-Hellblau hover:border-Hellblau']">
		<slot></slot>
	</button>	
</template>