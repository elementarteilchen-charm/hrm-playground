<script setup>
    import {  XCircleIcon, PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    
    const props = defineProps({
        title: {type: String, default: ''}, 
        id: {type: String, default: ''}, 
        width: {type: String, default: '50vw'},
        height: {type: String, default: '50vh'}
    })


</script>
<template>
	<dialog :id="id ? id : title"
	        class="shadow-lg p-0 bg-Blaugrau-10" 
	        :style="'width:' + width + ';height:' + height +';'">

	        <form action="" method="dialog" class="h-full">
	            <div class="grid grid-rows-[auto_1fr_3rem] h-full">
	        
	                <header class="px-6 py-6 text-xl text-Blaugrau flex justify-between">
	                    <div v-if="title">{{title}}</div>
	                    <slot name="header"></slot>
	                </header>
	            
	                <main class="px-6" 
	                    style="height: calc(100% -3rem); overflow-y: auto;">
	                    
	                    <slot></slot>

	                </main>

	                <footer class="px-4 ">
	                        <div class="flex justify-end space-x-6">
	                            <button class="text-sm text-Mittelblau font-bold hover:underline">Abbrechen</button>
	                            <button type="submit" class="bg-Mittelblau hover:bg-Hellblau text-white text-sm font-bold px-4 py-2">Speichern</button>
	                        </div>
	                </footer>
	            </div>
	        </form>
	</dialog>
</template>

<style>
    dialog::backdrop {
      background: rgba(0.2,0.2,0.2, 0.4);  
    } 
</style>