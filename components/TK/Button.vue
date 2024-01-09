<script setup>


	const props = defineProps({
        secondary: {type: Boolean, default: false}, 
        icon: { type: String, default: ''}
    })
</script>

<template>
	<div>	
		<button class="px-2 py-1 text-xs flex items-center gap-x-2"
				:class="[secondary 
							? 'text-Mittelblau border border-transparent font-bold hover:bg-Hellgrau hover:border-Hellgrau'
							: 'text-white bg-Mittelblau border border-Mittelblau font-bold hover:bg-Hellblau hover:border-Hellblau']">
			<slot></slot>
		</button>	
	</div>
</template>