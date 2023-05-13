<script setup>
    
    import {  PencilSquareIcon, DocumentIcon } from '@heroicons/vue/24/outline' ;

    const props = defineProps({
        dokumente: {type: Array, default: []},
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
    <div class="bg-yellow-300 grid grid-rows-[auto_1fr_auto] rounded overflow-hidden">
        <header class="pr-2 bg-yellow-200  _border-b-2 border-b-yellow-100" >
            <h3 class="text-sm px-4 py-2 font-bold">
                Fehlende Dokumente und Informationen
            </h3>
        </header>
        <!-- Daten -->
        <div class="px-4 py-3 text-sm"> 
            <slot></slot>
            <div v-for="dok in dokumente" class="mb-2 flex gap-2">
                <DocumentIcon class="w-5 h-5"/> {{dok}}
            </div>
        </div>
        <footer class="grid bg-yellow-200 py-2 px-4">
            <button class="place-self-center text-sm">Hochladen</button>
        </footer>    
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