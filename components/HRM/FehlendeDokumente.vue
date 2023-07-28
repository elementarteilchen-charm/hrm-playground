<script setup>
    import { showDialog } from '/utils/modal.js'
    import {    
        QuestionMarkCircleIcon, CreditCardIcon, ChevronRightIcon, ChevronDownIcon, CloudArrowUpIcon,
        ArrowRightIcon, PencilSquareIcon, ArchiveBoxIcon, HomeIcon, DocumentIcon
    } from '@heroicons/vue/24/outline' ;

    const inBearbeitung = ref(false);
    const showDocumentUpload = ref(false);
    const title = "Fehlende Dokumente"
    const dokumente = ref([
            {
                name: 'Dienstzeugnisse', 
                hinweis: 'Bitte laden Sie die Dokumente hoch',
                sichtbar: false
            },
            {
                name: 'Grundschuldaten', 
                hinweis: 'Es genügt das Abschlusszeugnis (Bak, Master, Magister) mit Ihrem Namen und dem Stempel der Hochschule.',
                sichtbar: false
            },
            {
                name: 'Aufenthaltstitel',
                sichtbar: false,
                hinweis: "Auf der Bestätigung / dem Zeugnis muss Ihr Name und der Name der Ausbildungsstätte sichtbar sein."
            },
            {
                name: 'Dienstvertrag',
                sichtbar: false,
                hinweis: "Auf der Bestätigung / dem Zeugnis muss Ihr Name und der Name der Ausbildungsstätte sichtbar sein."
            }
        ])
</script>

<template>
    <div class="col-span-2"> <!-- Die Box soll über die volle Breite gehen -->
        <div class="grid grid-rows-[auto_1fr_auto] border border-gray-300 bg-white shadow-md">
            
            <header class="pr-2  text-white bg-red-500" >
                <h3 class="px-4 py-2 font-bold" @click="inBearbeitung = !inBearbeitung">
                    {{title}}
                </h3>
            </header>
            
            <!-- Daten -->
            
            <div class="px-4 py-4">
                <h3 class="font-bold text-lg">Angeforderte Dokumente hochladen</h3>
                <p class="mb-3">
                    Bitte laden Sie folgende Dokumente schnellstmöglich hoch.
                </p>

                <div v-for="dok in dokumente" class="mb-2">
                    <div @click="dok.sichtbar = !dok.sichtbar" 
                        :class="{
                            'bg-Blaugrau-10 border-gray-200 border-x': dok.sichtbar,
                            'border-transparent': !dok.sichtbar
                        }"
                        class="border" >
                        <div class="flex items-center gap-2 hover:cursor-pointer text-Mittelblau p-2 hover:bg-Blaugrau-10">
                             <div class="grid hover:text-Hellblau hover:bg-Blaugrau-25 text-Mittelblau">
                                <CloudArrowUpIcon class="w-5 h-5 place-self-center"/>     
                             </div>
                             <span>{{dok.name}}</span>
                        </div>
                    </div>

                    <div v-if="dok.sichtbar" class="border-l border-r border-b bg-Blaugrau-10 py-3 px-6">
                        <p class="my-3 text-Blaugrau text-sm">{{dok.hinweis}}</p>
                        <div class="mt-6 border shadow-inner h-12 flex items-center justify-center bg-white">
                            <label for="dokupload" class="flex items-center justify-center gap-4 text-Mittelgrau">
                                <CloudArrowUpIcon class="w-5 h-5"/>
                                <span class="text-sm">Dateien zum Hochladen hierher ziehen (max. 5 MB)</span>
                            </label>
                            <input id="dokupload" class="hidden" type="file">
                            
                        </div>
                        <div class="mt-6 flex justify-end items-center gap-8">
                            <a href="" class="text-Mittelblau font-bold hover:underline">Abbrechen</a>
                            <a href="" class="px-3 py-2 text-white bg-Mittelblau font-bold">Speichern</a>
                        </div>
                    </div>

                </div>
            </div>

            <footer class="px-4 py-4 text-sm flex justify-start">
                <a v-if="buttonText" class="text-Mittelblau font-bold hover:underline flex gap-1" href="/hrm/personalabteilung-kontaktieren">
                    <span>{{buttonText}}</span><ChevronRightIcon class="w-5 h-5"/></a>
            </footer>
        </div>
    </div>
</template>

<style>

</style>