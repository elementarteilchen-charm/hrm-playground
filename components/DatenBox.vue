<script setup>
    
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;

    const props = defineProps({
        title: {type: String}, 
        type: {type: String, default: ''},
        buttonText: {type: String, default: 'Bearbeiten'},
        buttonLink: {type: String, default: '#'}
    });

    function showDialog(dialogId) {
        document.getElementById(dialogId).showModal();
    }
    function closeDialog() {
     document.getElementById('daten-dialog').showModal();   
    }
</script>

<template>
    <div class="border border-gray-300 rounded shadow bg-white pb-3">
        <header class="pr-2 grid grid-cols-[1fr_2rem] gap-2 bg-gray-200" 
                :class="{'bg-red-600 text-white': type === 'alert'}">
            <h3 class="px-4 py-2 font-bold">
                {{title}}
            </h3>
            <div @click="showDialog(title)" class="grid place-self-center hover:bg-blue-700 hover:text-white p-1">
                <PencilSquareIcon class="w-5 h-5 " />
            </div>
        </header>
        <!-- Daten -->
        <div class="px-4 py-1 text-sm"> 
            <slot></slot>
        </div>    
        
        <!-- <div class="flex justify-end px-4">
            <button class="bg-blue-700 text-white text-sm px-2 py-1" @click="showDialog()">
                {{buttonText}}
            </button>
        </div> -->
    </div>

    <dialog  :id="title"  class="shadow-lg p-0 bg-gray-200" style="width: 50vw; height: 50vh;">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[auto_1fr_3rem] h-full">
            
                <header class="px-4 py-3 text-lg">
                    {{title}} bearbeiten
                </header>
                
                <main class="px-4 py-2" 
                    style="height: calc(100% + 1rem); overflow-y: auto;">

                    <div class="space-y-3">
                        <div>
                            <label for="datum-von" class="block text-sm font-bold text-gray-700 mr-2">Feld 01</label> 
                            <input type="text" 
                                    class="text-sm border rounded py-1 px-2 w-4/5"
                                    value="01.01.2003" name="datumVon" id="datum-von">
                        </div>
                    
                        <div>
                            <label for="datum-Bis" class="block text-sm font-bold text-gray-700 mr-2">Feld 02</label>
                            <input type="text" 
                                    class="text-sm border rounded py-1 px-2 w-4/5"
                                    name="datumBis" id="datum-Bis">
                        </div>
                    </div>

                </main>

                <footer class="px-4 py-2 border-t bg-gray-100">
                        <div class="flex justify-end space-x-4">
                            <button class="text-sm text-blue-600 hover:underline">Schließen</button>
                            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-2 py-1 rounded">Speichern</button>
                        </div>
                </footer>
            </div>
        </form>
    </dialog>
</template>

<style>
    dialog.daten-dialog {
        width: 60vw;
        max-width: 1200px;
        height: 80vh;
        max-height: 640px;
        min-height: 32rem;
    }

    dialog::backdrop {
      background: rgba(0.2,0.2,0.2, 0.4);  
    } 
</style>