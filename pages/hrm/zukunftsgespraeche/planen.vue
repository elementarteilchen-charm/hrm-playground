<script setup>
import { showDialog } from '/utils/modal.js'
import { ArrowDownTrayIcon, ClockIcon, CheckCircleIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';
import { reactive } from 'vue'

const title = "Thema anzeigen";
const titleFKPlanung = "Gesprächsvorbereitung Zukunftsgespräch";

const planen = reactive([{
        mitarbeiter: 'Malgorzata Dorner',
        durchzufuehrenBis: '31.10.2023',
        status: 'akzeptiert',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-2.jpg'
    },
    {
        mitarbeiter: 'Michael Auer',
        durchzufuehrenBis: '07.11.2023',
        status: 'bereitFuerGespraech',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-3.jpg'
    },
])


let anstehend = reactive([

    {
        mitarbeiter: 'Karl Winter',
        durchzufuehrenBis: '15.11.2023',
        status: 'angefragt',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-4.jpg'
    },
    {
        mitarbeiter: 'Martin Mielczarek ',
        durchzufuehrenBis: '13.11.2023',
        status: 'akzeptiert',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar.png'
    },
        {
        mitarbeiter: 'Michael Auer',
        durchzufuehrenBis: '07.11.2023',
        status: 'bereitFuerGespraech',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-3.jpg'
    },
])

const dasNeueZG = {
        mitarbeiter: 'Anna Maria Walisch ',
        durchzufuehrenBis: '13.11.2023',
        status: 'akzeptiert',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-2.jpg'
    }

const neuesZGvereinbaren = ref(false)

function prozessStarten() {
    planen.push(dasNeueZG)
    neuesZGvereinbaren.value = false
}

</script>
<template>
    <div class="grid grid-rows-[6rem_1fr] gap-6 ">

        <div class="grid items-center bg-Blaugrau-25 px-16 h-full">
            <h1 class="text-3xl font-light text-Blaugrau">Zukunftsgespräche</h1>
        </div>
        <div class="px-16">
            <!--  Content -->
            <div v-if="!neuesZGvereinbaren" class="mt-3 my-6">
                <InputButton @click="neuesZGvereinbaren = true" >Neues Zukunftsgespräch anlegen</InputButton>
            </div>
            <div v-show="neuesZGvereinbaren" class="bg-white px-3 py-3">
                <div  class="space-y-6">
                    <h2 class="font-bold text-xl">Neues Zukunftsgespräch anlegen</h2>
                    Bitte wählen Sie den/die Mitarbeiter*in aus, mit dem/der Sie das Zukunftsgespräch vereinbaren möchten:
                    <div class=" gap-3 items-center">
                        <InputText label="Mitarbeiter*in" :value="dasNeueZG.mitarbeiter" width="w-3/4"/>
                    </div>

                    <div>
                    <div class="font-bold text-sm text-gray-900">Themen für das Zukunftsgespräch:</div>
                        <InputTextarea title="" class="w-3/4 h-36"></InputTextarea>
                    </div>
                    <InputButton @click="prozessStarten">Zukunftsgespräch anlegen</InputButton>
                </div>
            </div>

            <div class="mt-6 flex gap-3 justify-between">
                <div class="flex">
                    <div class="bg-Hellblau font-bold text-white py-2 px-3">
                        Anstehende Gespräche
                    </div>
                    <div class="text-Mittelblau font-bold py-2 px-3">
                        Erledigte Gespräche
                    </div>
                </div>
                
            </div>
            <div class="space-y-12 mt-6 ">

                <!-- Feedback lesen -->
                <div class="space-y-3">
                    <div class="flex justify-center">
                        <div class="text-sm px-2 py-1 bg-Gruen-logo ">
                            Gesprächswunsch von Mitarbeiter*innen
                        </div>
                    </div>
                    <div v-for="gespraech,idx in anstehend" class="border rounded bg-white px-3 py-2">
                        
                        <div class="grid grid-cols-3">

                            <div class="col-span-1 flex gap-2 items-center">
                                <img :src="'/img/'+ gespraech.avatar " class="w-8 h-8 rounded-full" />
                                <a class="text-Mittelblau" href="">{{gespraech.mitarbeiter}}</a>
                                <span class="text-sm text-gray-400">
                                    ({{gespraech.taetigkeit}})
                                </span>
                                <span class="text-sm text-gray-400">
                                    {{gespraech.mandant}} •
                                </span>
                                <span class="text-sm text-gray-400">
                                    {{gespraech.abteilung}}
                                </span>
                            </div>
                            
                            <div class="flex gap-2 items-center text-sm text-gray-500 ">

                                <div v-if="gespraech.status == 'angefragt'" class="flex gap-2 mx-auto">
                                    <ClipboardDocumentListIcon class="w-5 h-5"/>
                                    <div>
                                        <a v-if="gespraech.status == 'angefragt'" 
                                            @click.prevent="showDialog(title)"
                                            href="" 
                                            class="text-Mittelblau font-bold ">
                                        Thema anzeigen</a>
                                    </div>
                                </div>

                                <div v-if="gespraech.status == 'akzeptiert'" class="flex gap-2 mx-auto">
                                    <ClockIcon class="w-5 h-5 text-green-600"/>
                                    <div>
                                        Geplant
                                    </div>
                                </div>


                            </div>

                            <div class="items-center text-sm justify-self-end">
                                <InputButton v-if="gespraech.status=='angefragt'" :secondary="1">
                                    Planen
                                </InputButton>
                                
                                <InputButton v-if="gespraech.status=='akzeptiert'" :secondary="1">
                                    Vorbereitung
                                </InputButton>

                                <InputButton v-if="gespraech.status=='bereitFuerGespraech'">
                                    Gespräch starten
                                </InputButton>
                            </div>
                        </div>
                    </div>
                </div>
    
    <!-- Planen -->
                <div class="space-y-3">
                    <div class="flex justify-center">
                        <div class="text-sm px-2 py-1 bg-Blau text-white">
                            Von mir gewünschte Zukunftsgespräche
                        </div>
                    </div>
                    <div v-for="gespraech in planen" class="border rounded bg-white px-3 py-2">
                        <div class="grid grid-cols-2">
                            <div class="flex gap-2 items-center">
                                <img :src="'/img/'+ gespraech.avatar " class="w-8 h-8 rounded-full" />
                                <a class="text-Mittelblau" href="">{{gespraech.mitarbeiter}}</a>
                                <span class="text-sm text-gray-400">
                                    ({{gespraech.taetigkeit}})
                                </span>
                                <span class="text-sm text-gray-400">
                                    {{gespraech.mandant}} •
                                </span>
                                <span class="text-sm text-gray-400">
                                    {{gespraech.abteilung}}
                                </span>
                            </div>
                            <div class="flex gap-2 items-center text-sm text-gray-500 place-self-end">
                                <InputButton v-if="gespraech.status=='angefragt'" :secondary="1">
                                    Planen
                                </InputButton>
                                
                                <InputButton 
                                        @click="showDialog(titleFKPlanung)"
                                        v-if="gespraech.status=='akzeptiert'" 
                                        :secondary="1">
                                    Vorbereitung
                                </InputButton>

                                <InputButton v-if="gespraech.status=='bereitFuerGespraech'">
                                    Gespräch starten
                                </InputButton>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    <HRMPopupDialog :title="title" height="40vh" speichern="Akzeptieren">
        <h3 class="font-bold">Wunsch / Vorstellung</h3>
        
        <div class="bg-gray-100 rounded-xl p-3">
            <p>Sugar plum marzipan jelly beans danish chocolate bar ice cream. Sugar plum shortbread cotton candy muffin pastry. Shortbread shortbread lollipop biscuit chocolate bar.</p>
            <p>
                Carrot cake ice cream sweet roll wafer liquorice jujubes macaroon icing. Topping lemon drops dessert cookie biscuit tiramisu cake. Soufflé muffin sweet halvah wafer shortbread jelly beans.
            </p>
        </div>
    </HRMPopupDialog>

    <HRMPopupDialog :title="titleFKPlanung" height="50vh" ok="Einladung senden">
        
        <h3 class="font-bold">Vorstellung Führungskraft</h3>
        <p class="mt-6 mb-3 text-sm text-gray-500">
            Sie haben hier die Möglichekeit den Text für die Einladung zum Zukunftsgespräch anzupassen:
        </p>
        <InputTextarea title="Thema:" class="w-full h-36"/>
    </HRMPopupDialog>
</template>