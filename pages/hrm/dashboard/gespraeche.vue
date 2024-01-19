<script setup>
import { showDialog } from '/utils/modal.js'
import { ArrowDownTrayIcon, ClockIcon, CheckCircleIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';
import { reactive } from 'vue'


let anstehend = reactive([

    {
        mitarbeiter: 'Karl Winter',
        durchzufuehrenBis: '15.11.2023',
        status: 'angefragt',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-4.jpg',
        ueberfaellig: true
    },
    {
        mitarbeiter: 'Martin Mielczarek ',
        durchzufuehrenBis: '13.11.2023',
        status: 'akzeptiert',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar.png',
        ueberfaellig: false
    },
    {
        mitarbeiter: 'Michael Auer',
        durchzufuehrenBis: '07.11.2023',
        status: 'bereitFuerGespraech',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-3.jpg',
        ueberfaellig: true
    },
])



const neuesZGvereinbaren = ref(false)
const detailsAnzeigen = ref(false)


function anzahlUeberfaelligeGespraeche() { 
    return Math.floor(Math.random() * 5) + 1
}

const gespraechsTypen = ['Leistungsbeurteilungen', 'Entwicklungsgespräche', 'Kompetenzabgleiche']
const fuehrungskraftListe = ref([{
        name: 'Slobodan Lukic',
        taetigkeit: 'GDM',
        avatar: 'avatar.png',
        detailsAnzeigen: false
    },
    {
        name: 'Filip Grybowski',
        taetigkeit: 'GDM',
        avatar: 'avatar-4.jpg',
        detailsAnzeigen: false
    },
    {
        name: 'Arthur Kupidlowski',
        taetigkeit: 'GDM',
        avatar: 'avatar-3.jpg',
        detailsAnzeigen: false        
    },
    {
        name: 'Zlatko Brzulovic',
        taetigkeit: 'GDM',
        avatar: 'avatar-3.jpg',
        detailsAnzeigen: false        
    },

])
</script>

<template>

    <div class="grid grid-rows-[6rem_1fr] gap-6 ">

        <div class="grid items-center bg-Blaugrau-25 px-16 h-full">
            <h1 class="text-3xl font-light text-Blaugrau">Dashboard Gespräche</h1>
        </div>
        
        <div class="px-16">
            <!--  Content -->
            <div class="mt-6 flex gap-3 justify-between">
                <div class="flex">
                    <div class="bg-Hellblau font-bold text-white py-2 px-3">
                        Überfällige Gespräche in VDI Zentral - Südosteuropa / SE - PL / Balt. / Bettendorf
                    </div>
                </div>
            </div>

            
            <div v-for="fk, index in fuehrungskraftListe" class="space-y-3 mt-6">
                <div class="border rounded bg-white px-6 py-4">
                    
                    <h2 class="font text-Mittelblau text-lg flex gap-2 items-center">
                        <img :src="'/img/'+ fk.avatar " class="w-8 h-8 rounded-full" />{{fk.name}} ({{fk.taetigkeit}})
                    </h2>
                    
                    <div class="mt-4">
                        <div v-for="typ, index in gespraechsTypen" class="space-y-3">
                            <div class="">
                                <button class="py-1 font-bold mt-3 flex gap-2" v-on:click="fk.detailsAnzeigen = !fk.detailsAnzeigen">
                                    <div>{{typ}}</div>
                                    <div>{{anzahlUeberfaelligeGespraeche()}}</div>
                                </button>
                                <div v-show="fk.detailsAnzeigen">                                    
                              
                                    <div v-for="gespraech,idx in anstehend" class="ml-3 px-3 py-1">

                                        <div class="grid grid-cols-3">
                                            <div class="flex gap-2 items-center">
                                                <a class="text-Mittelblau" href="">{{gespraech.mitarbeiter}}</a>
                                                <span class="text-sm text-gray-400">
                                                    ({{gespraech.taetigkeit}})
                                                </span>
                                                <span class="text-sm text-gray-400">
                                                    {{gespraech.abteilung}}
                                                </span>
                                            </div>
                                            <div class="flex gap-2 items-center text-sm text-gray-500 ">
                                                überfällig seit {{gespraech.durchzufuehrenBis}}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>