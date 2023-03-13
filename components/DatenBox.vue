<script setup>
    

    const props = defineProps({
        title: {type: String}, 
        buttonText: {type: String, default: 'Link'},
        buttonLink: {type: String, default: '#'}
    });

    function showDialog() {
        document.getElementById('daten-dialog').showModal();
    }
    function closeDialog() {
     document.getElementById('daten-dialog').showModal();   
    }
</script>

<template>
    <div class="border px-4 py-2 rounded shadow bg-white grid grid-rows-[1.25rem_1fr_auto] gap-4">
        <h3 class="font-bold text-lg grid align-content-center ">
            {{title}}
        </h3>
        <!-- Daten -->
        <div class=""> 
            <slot></slot>
        </div>    
        
        <div class="py-2">
            <button class="bg-blue-600 text-white text-sm px-2 py-1 rounded" @click="showDialog()">
                Bearbeiten
            </button>
        </div>
    </div>

    <dialog  id="daten-dialog"  class="rounded-lg shadow-lg bg-white p-0">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[3rem_1fr_3rem] h-full">
            
                <header class="px-4 py-2 h-12  text-lg font-bold bg-blue-600 text-white">
                    {{title}} bearbeiten
                </header>
                
                <main class="px-4 py-2" style="height: calc(80vh - 3rem - 3rem); overflow-y: auto;">

                    <div class="grid grid-cols-2">
                        <div>
                            <label for="datum-von" class="block text-sm font-bold text-gray-700 mr-2">Von:</label> 
                            <input type="text" 
                                    class="text-sm border rounded py-1 px-2 w-24"
                                    value="01.01.2003" name="datumVon" id="datum-von">
                        </div>
                    
                        <div>
                            <label for="datum-Bis" class="block text-sm font-bold text-gray-700 mr-2">Bis:</label>
                            <input type="text" 
                                    class="text-sm border rounded py-1 px-2 w-24"
                                    value="01.01.2003" name="datumBis" id="datum-Bis">
                        </div>
                    </div>

                    <table class="table-fixed w-full mt-8 border" >
                        <thead>
                            <tr class="bg-gray-200 text-sm">
                                <th class="text-center h-8">Von</th>
                                <th class="text-center h-8">Bis</th>
                                <th class="text-center h-8">Ausbildung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-sm">
                                <td class="border-b border-r px-2 py-1">September 2001</td>
                                <td class="border-b border-r px-2 py-1">Juli 2005</td>
                                <td class="border-b border-r px-2 py-1">HAK Wr Neustadt</td>
                            </tr>
                            <tr class="text-sm">
                                <td class="border-b border-r px-2 py-1">September 2001</td>
                                <td class="border-b border-r px-2 py-1">Juli 2005</td>
                                <td class="border-b border-r px-2 py-1">HAK Wr Neustadt</td>
                            </tr>
                            <tr class="text-sm">
                                <td class="border-b border-r px-2 py-1">September 2001</td>
                                <td class="border-b border-r px-2 py-1">Juli 2005</td>
                                <td class="border-b border-r px-2 py-1">HAK Wr Neustadt</td>
                            </tr>
                        </tbody>
                    </table>

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
    dialog {
        width: 60vw;
        max-width: 1200px;
        height: 80vh;
        max-height: 720px;
        min-height: 16rem;
    }

    dialog::backdrop {
      background: rgba(0.2,0.2,0.2, 0.4);  
    } 
</style>