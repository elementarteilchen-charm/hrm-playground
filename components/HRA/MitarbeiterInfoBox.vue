<script setup>
	const ma = mitarbeiterListe[0]
</script>
<template>
	<div class="grid grid-cols-[10rem_1fr] gap-2 border bg-white">

	    <div :style="'background-image: url(/img/'+ ma.avatar + ');'" class="bg-cover bg-center"> </div>
	    
	    <div class="py-3">
		    <div class="px-4">
		    
		        <div class="font-bold text-xl">
		            <a href="/hra/mitarbeiterinnen/profil">
		            	{{ma.vorname}} {{ma.name}}		            	
		            </a>
		        </div>
		        <div class="content-end">
		            {{ma.taetigkeit}}
		        </div>
		        <!-- <h3>Letzte Aktionen</h3> -->
		    
		    </div>
		    <div class="grid grid-cols-3 px-4">
		    	
		        <ul class="text-sm space-y-1 text-Mittelblau">
		            <li v-for="abteilung in ma.abteilungen">
		                {{abteilung}}
		            </li>
		        </ul>
	    
		        <ul class="text-sm space-y-1 text-Mittelblau">
		            <li>{{ma.mandant}} • {{ma.standort}}</li>
		            <li>{{ma.email}}</li>
		            <li>Durchwahl: {{ma.durchwahl}}</li>
		            <li>Tel: +43 664 88370265</li>
		        </ul>
		        <div>
		        	<strong>Historie</strong>
			        <ul class="text-sm space-y-1 text-Mittelblau">
			        	<li>Namensänderung</li>
			        	<li>Reisepass hochgeladen</li>
			        </ul>
		        </div>
	    	</div>
	    </div>
	</div>
</template>