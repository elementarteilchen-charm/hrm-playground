<script setup>
	 const route = useRoute()
	const items = [
		'Hochzeit',
	    'Namensaenderung',
	    'Geburt',
	    'Ernennungen',
	    'Ummeldungen',
	    'Arbeitszeitmodell',
	    'Signatur',
	    'Visitenkarten',
	    'Zusatzqualifikationen',
	    'Geschenke',
	    'Jubiläum',
	]	
</script>

<template>
	<li v-for="item in items" class="text-sm hover:bg-Hellblau hover:text-white">
		<a :href="'/hra/events/' + item" 
			:class="{'font-bold': route.path === '/hra/events/' + item}"
		>{{item}}</a>
		
    </li>
</template>