<script setup>
	const props = defineProps({
        secondary: {type: Boolean, default: false}, 
    })
</script>

<template>
	<button class="px-4 py-2 text-sm"
			:class="[secondary
						? 'text-Mittelblau border-transparent hover:border-Mittelblau font-bold hover:bg-Hellgrau'
						: 'text-white bg-Mittelblau border-Mittelblau font-bold hover:bg-Hellblau hover:border-Hellblau']">
		<slot></slot>
	</button>	
</template>