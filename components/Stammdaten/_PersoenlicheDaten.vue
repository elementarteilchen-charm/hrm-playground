<script setup>

</script>

<template>
    <div class="grid grid-row-1 gap-8 border-r">
  		<div>
    		<h3 class="text-lg font-bold text-gray-700 mt-8 mb-4">Name</h3>
	      	<div class="grid lg:grid-cols-2 gap-4">
	      
		        <div class="grid grid-cols-[minmax(6rem,auto)_1fr] gap-4 ">
		      
		          <!-- <InputText label="Personalnummer" value="15634" :readonly=true width="w-32"/> -->
		          <InputRadio label="Geschlecht" :options="['Frau','Mann', 'Divers']" />
		          <InputSelect label="Titel vor dem Namen" :options="['BA','Mag.', 'MSc.']" />
		          <InputText label="Vorname" value="Stephanie"/>
		          <InputText label="Nachname" value="Babunek"/>
		          <InputSelect label="Titel nach dem Namen" :options="['-', 'BA','Mag.', 'MSc.']" width="w-32"/>
		          <InputSelect label="Konfession" :options="['-', 'Röm. Kath.','Evangelisch', 'Moslem']" width="w-32"/>

		          
		        </div>
		    </div>
	    </div>

  		<div>
    		<h3 class="text-lg font-bold text-gray-700 mt-8 mb-4">Geburtsdatum und Sozialversicherungsnummer</h3>
	      	<div class="grid lg:grid-cols-2 gap-4">
	      
		        <div class="grid grid-cols-[minmax(6rem,auto)_1fr] gap-4 ">
		       
		          <InputDate label="Geburtsdatum" value="2000-03-14" />
		          <InputText label="Sozialversicherungsnummer:" value="4352" width="w-32"/>
		          
		        </div>
		    </div>
	    </div>

	    <div>
	       	<h3 class="text-lg font-bold text-gray-700 mt-8 mb-4">Staatsangehörigkeit, Geburtsland, Geburtsname</h3>
	    		<div class="grid lg:grid-cols-2 gap-4">
	       		<div class="grid grid-cols-[minmax(6rem,auto)_1fr] gap-4 ">
		          	<InputSelect label="Staatsangehörigkeit" :options="['Österreich', 'DE','IT']" width="w-32"/>
		          	<InputSelect label="Staatsangehörigkeit 2" :options="['-', 'DE','IT']" width="w-32"/>
	       			<InputText label="Geburtsort" value="Krems an der Donau"/>
		          	<InputSelect label="Geburtsland" :options="['Östereich', 'DE','IT']" width="w-32"/>
	       			
	       		</div>
	       	</div>
	    </div>

	    <div>
	    	<h3 class="text-lg font-bold text-gray-700 mt-8 mb-4">Reisepassname</h3>
	 		<div class="grid lg:grid-cols-2 gap-4">
	    		<div class="grid grid-cols-[minmax(6rem,auto)_1fr] gap-4 ">
					<InputText label="Reisepass Vorname" value="Stephanie" />
		            <InputText label="Reisepass Nachname" value="Babunek"/>
	    		</div>
	    	</div>
	    </div>
	        <div>
	        	<h3 class="text-lg font-bold text-gray-700 mt-8 mb-4">Nativer Name und Geburtsname</h3>
	     		<div class="grid lg:grid-cols-2 gap-4">
	        		<div class="grid grid-cols-[minmax(6rem,auto)_1fr] gap-4 ">	            
	    	            <InputText label="Nativer Vorname"/>
	    	            <InputText label="Nativer Nachname"/>
	    	            
	    	            <InputText label="Geburtsname"/>
	        		</div>
	        	</div>
	        </div>
	</div>
</template>
