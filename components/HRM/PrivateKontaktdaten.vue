<script setup>
    import {  PencilSquareIcon } from '@heroicons/vue/24/outline' ;
    
    const title = "Private Kontaktdaten";

    function showDialog(dialogId) {
        document.getElementById(dialogId).showModal();
    }

</script>

<template>
    <div class="border border-gray-300 rounded_ _shadow bg-white pb-3">
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
        <div class="px-4 py-2 text-sm"> 
            <div class="grid grid-cols-2 gap-4">
          <ul>
            <li>Gauermannstraße 43/2</li>
            <li>2542 Kottingbrunn</li>
            <li>Österreich</li>
            <li>—</li>
          </ul>
          <ul>
            <li>jan.ehrenreich@gmx.at</li>
            <li>+4366488458016</li>
          </ul>
        </div>    
    </div>
    </div>


    <dialog  :id="title"  class="shadow-lg p-0 bg-gray-200" style="width: 50vw; height: 50vh;">
        <form action="" method="dialog" class="h-full">
            <div class="grid grid-rows-[auto_1fr_3rem] h-full">
            
                <header class="px-4 py-3 text-lg">
                    {{title}} bearbeiten
                </header>
                
                <main class="px-4 py-2" 
                    style="height: calc(100% + 1rem); overflow-y: auto;">
                    <div class=" grid grid-cols-[minmax(6rem,min-content)_1fr] gap-2">  
                      <InputText label="Private Email:" value="jan.ehrenreich@gmx.at" width="w-4/5"/>
                      <InputPhone label="Private Telefonnummer:" value="4366488458016" width="w-4/5"/>
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