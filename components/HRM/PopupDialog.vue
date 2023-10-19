<script setup>
    import {  XCircleIcon, PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    
    const props = defineProps({
        title: {type: String, default: ''}, 
        ok: {type: String, default: 'OK'}, 
        abbrechen: {type: String, default: 'Abbrechen'}, 
        width: {type: String, default: '50vw'},
        height: {type: String, default: '50vh'}
    })


</script>
<template>
	<dialog :id="title"  
	        class="shadow-lg p-0 bg-Blaugrau-10" 
	        :style="'width: ' + width + '; height: ' + height +';'">

	        <form action="" method="dialog" class="h-full">
	            <div class="grid grid-rows-[auto_1fr_4rem] h-full">
	        
	                <header class="px-3 py-6 text-xl bg-Mittelblau text-white font-bold flex justify-between">
	                    <div>{{title}}</div>
	                    <slot name="header"></slot>
	                </header>
	            
	                <main class="px-6 py-3 bg-white" style="height: calc(100% -4rem); overflow-y: auto;">
	                    <slot></slot>
	                </main>

	                <footer class="px-4 self-center">
                        <div class="flex justify-end gap-6">
                            <button class="text-sm text-Mittelblau font-bold hover:underline">{{abbrechen}}</button>
                            <button type="submit" class="bg-Mittelblau hover:bg-Hellblau text-white text-sm font-bold px-4 py-3">{{ok}}</button>
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