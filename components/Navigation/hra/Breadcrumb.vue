<script setup>
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
	const props = defineProps({
        pfad: { type: Array, default: [] },
        aktuell: {type: String, default: "Dashboard"}
    })
    const ma = mitarbeiterListe[0]
</script>

<template>
    <div class="mt-3 text-gray-500 text-sm flex items-center gap-x-2">

        <a href="/hra/mitarbeiterinnen/suche" class="inline-block">
            <MagnifyingGlassIcon class="w-5 h-5"/>
        </a>

        <div v-for="item in pfad">
	        &gt; 
	        <a :href="'/hra' + item.link" class=" text-Mittelblau hover:underline">
	            {{item.text}}</a>
	        
        </div>
        <div v-if="aktuell">&gt; {{aktuell}}</div>
    </div>
</template>