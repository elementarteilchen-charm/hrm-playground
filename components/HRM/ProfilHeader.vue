<script setup>
	import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
	
  const props = defineProps({
  								'fehlendeDokumente': {type: Array, default: []}
  							})
	const ma = {titel: "Mag. (FH)", vorname: "Jan Michael", nachname: "Ehrenreich"}

</script>

<template>
  <div class="border bg-white px-4 py-6">
    <!-- <h1 class="text-xl font-bold mb-3">{{ma.titel}} {{ma.vorname}} {{ma.nachname}}</h1> -->
    
    <div class="grid grid-cols-3 gap-6">
    	
    	<div class="col-span-2 grid grid-cols-[10rem_1fr] gap-6"> 
      	<div>
	      	<img src="~/assets/img/avatar.png" alt="">
	      	<a class="text-xs text-blue-600 hover:underline" href="">Foto herunterladen</a>
      	</div>
	     	<div class="text-sm">
	     		<h1 class="text-xl font-bold mb-3">{{ma.titel}} {{ma.vorname}} {{ma.nachname}}</h1>
		      	<h2 class="font-bold text-gray-700">Meine privaten Kontaktdaten</h2>
		      	<ul>
		      		<li>Gauermannstraße 43/2, 2542 Kottingbrunn, AT</li>
		      		<li>+4366488458016</li>
		      		<li>—</li>
		      		<li>jan.ehrenreich@gmx.at</li>
		      	</ul>
	     	</div>
      </div>

	    <HRMFehlendeDokumente :dokumente="fehlendeDokumente" />
	  </div>
	    
	    <!-- <div class="grid grid-cols-2 gap-6 bg-red-100">
	     	
	     	
			<div class="text-sm">
				<h2 class="font-bold text-gray-700">Meine beruflichen Kontaktdaten</h2>
				<ul>
					<li>Walter Business Park 1, 2400 Wr. Neudorf, AT</li>
					<li>+43 2236 1234 56</li>
					<li>—</li>
					<li>ehrenreich@walter-group.com</li>
				</ul>
			</div> -->

	     

    <!-- <div class="flex justify-end">
    	<button class="bg-blue-700 text-white px-3 py-2 text-sm">Daten ändern</button>
    </div> -->
  </div>
</template>