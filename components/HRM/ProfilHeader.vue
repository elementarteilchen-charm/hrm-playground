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

	    <!-- <HRMFehlendeDokumente :dokumente="fehlendeDokumente" /> -->
	  </div>
	    
  </div>
</template>