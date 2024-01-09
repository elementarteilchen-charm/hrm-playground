<script setup>
	import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
	
  const props = defineProps({
  								'fehlendeDokumente': {type: Array, default: []}
  							})
	const ma = mitarbeiterListe[0]
</script>

<template>
  <div class="border bg-white px-4 py-6">

    
    <div class="grid grid-cols-3 gap-x-6">
    	<div class="col-span-3">
      		<h1 class="text-xl font-bold">{{ma.titel}} {{ma.vorname}} {{ma.name}}</h1>
    	</div>
    	<div class="mt-3 col-span-2 grid grid-cols-[10rem_1fr] gap-6"> 
      	<div>
	      	<img src="~/assets/img/avatar-2.jpg" alt="">
	      	<a class="text-xs text-blue-600 hover:underline" href="">Foto herunterladen</a>
      	</div>
	     	<div class="text-sm">
	     		
		      	<h2 class="font-bold text-Mittelgrau">Meine privaten Kontaktdaten</h2>
		      	<ul>
		      		<li>Gauermannstraße 43/2, 2542 Kottingbrunn, AT</li>
		      		<li>+4366488458016</li>
		      		<li>—</li>
		      		<li>{{ma.email_privat}}</li>
		      	</ul>
	     	</div>
      </div>

	    <!-- <HRMFehlendeDokumente :dokumente="fehlendeDokumente" /> -->
	  </div>
	    
  </div>
</template>