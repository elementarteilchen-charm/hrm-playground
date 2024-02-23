<script setup>

	const props = defineProps({
        pfad: { type: Array, default: [] },
        aktuell: {type: String, default: "Dashboard"}
    })
    const ma = mitarbeiterListe[0]
</script>

<template>
    <div class="text-gray-500 text-sm_ flex items-center gap-x-2">
        <!-- <div class="font-bold">{{ma.vorname}} {{ma.name}}</div> -->
        <div class="font-bold">
        	<a href="/hra/mitarbeiterinnen" class=" text-Mittelblau hover:underline font-bold">Mitarbeiter*innen</a> </div>
        <div v-for="item in pfad">
	        &gt; 
	        <a :href="'/hra' + item.link" class=" text-Mittelblau hover:underline font-bold">
	            {{item.text}}</a>
	        
        </div>
        <div v-if="aktuell">&gt; {{aktuell}}</div>
    </div>
</template>