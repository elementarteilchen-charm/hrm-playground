<script setup>
import { showDialog } from '/utils/modal.js'
import { ArrowDownTrayIcon, ClockIcon, CheckCircleIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline';

const title = "Fragebogen freigeben";
const planen = [{
        mitarbeiter: 'Malgorzata Dorner',
        durchzufuehrenBis: '31.10.2023',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-2.jpg'
    },
    {
        mitarbeiter: 'Michael Auer',
        durchzufuehrenBis: '07.11.2023',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-3.jpg'
    },
]

const ausgefuellt = [
    {
        mitarbeiter: 'Slobodan Lukic',
        durchzufuehrenBis: '15.11.2023',
        status: 'unbeantwortet',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-4.jpg'
    },
    {
        mitarbeiter: 'Filip Grzybowski',
        durchzufuehrenBis: '13.11.2023',
        status: 'beantwortet',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar.png'
    },

]
const anstehend = [

    {
        mitarbeiter: 'Karl Winter',
        durchzufuehrenBis: '15.11.2023',
        status: 'unbeantwortet',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar-4.jpg'
    },
    {
        mitarbeiter: 'Martin Mielczarek ',
        durchzufuehrenBis: '13.11.2023',
        status: 'beantwortet',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar.png'
    },

    {
        mitarbeiter: 'Anna Maria Walisch ',
        durchzufuehrenBis: '13.11.2023',
        status: 'notizenerfasst',
        taetigkeit: 'TM',
        mandant: 'LKW',
        abteilung: 'V02522',
        avatar: 'avatar.png'
    },

]
</script>
<template>
    <div class="grid grid-rows-[6rem_1fr] gap-6 ">
        <div class="grid items-center bg-Blaugrau-25 px-6 h-full">
            <h1 class="text-3xl font-light text-Blaugrau">Entwicklungsgespräche</h1>
        </div>
        <div>
            <!--  Content -->
            <div class="bg-white p-3">
                <div class="flex gap-3 items-center justify-between">
                    <div class="w-3/5">
                        <InputText placeholder="Name oder Einheitencode" width="w-full" />
                    </div>
                    <InputCheckbox checkboxLabel="Delegierte Gespräche anzeigen" labelStyle="text-sm flex-shrink-0" />
                    <div class="px-1">
                        X
                    </div>
                </div>
            </div>
            <div class="mt-3 flex gap-3 justify-between">
                <div class="flex">
                    <div class="bg-Hellblau font-bold text-white py-2 px-3">
                        Anstehende Gespräche
                    </div>
                    <div class="text-Mittelblau font-bold py-2 px-3">
                        Erledigte Gespräche
                    </div>
                </div>
                <InputButton>Gespräche delegieren</InputButton>
            </div>
            <div class="space-y-12 mt-6 ">

                <!-- Feedback lesen -->
                <div class="space-y-3">
                    <div class="flex justify-center">
                        <div class="text-sm px-2 py-1 bg-Orange text-white">
                            Gespräche in Vorbereitung
                        </div>
                    </div>
                    <div v-for="gespraech in anstehend" class="border rounded bg-white px-3 py-2">
                        <div class="grid grid-cols-5">
                            <div class="col-span-2 flex gap-2 items-center">
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
                            <div class="place-self-center">
                                <div class="text-gray-400 text-xs">Durchzuführen bis</div>
                                <div class="text-xs text-center">{{gespraech.durchzufuehrenBis}}</div>
                            </div>
                            <div class="flex gap-2 self-center items-center text-sm text-gray-500 place-self-end">
                                <div v-if="gespraech.status == 'unbeantwortet'" class="flex gap-2">
                                    <ClockIcon class="w-5 h-5"/>
                                    <div>Warten auf Antwort</div>
                                </div>
                                <div v-if="gespraech.status == 'beantwortet'" class="flex gap-2">
                                    <CheckCircleIcon class="w-5 h-5 text-green-600"/>
                                    <div>
                                        <a class="text-Mittelblau font-bold" href="">
                                            Antworten erhalten</a>
                                    </div>

                                </div>
                                <div v-if="gespraech.status == 'notizenerfasst'" class="flex gap-2">
                                    <ClipboardDocumentListIcon class="w-5 h-5 text-gray-600"/>
                                    <div>
                                        <a class="text-Mittelblau font-bold" href="">
                                            Notizen bearbeiten</a>
                                    </div>

                                </div>

                            </div>

                            <div class="items-center text-sm self-center justify-self-end">
                                <div class="">
                                    <a v-if="gespraech.status == 'unbeantwortet'" href="" class="px-3 text-gray-400 font-bold " disabled>
                                    Gespräch starten</a>
                                </div>
                                
                                <InputButton v-if="gespraech.status=='beantwortet'">
                                    Notizen erfassen
                                </InputButton>

                                <InputButton v-if="gespraech.status=='notizenerfasst'">
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
                            Zu planen
                        </div>
                    </div>
                    <div v-for="gespraech in planen" class="border rounded bg-white px-3 py-2">
                        <div class="grid grid-cols-3">
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
                            <div class="place-self-center">
                                <div class="text-gray-400 text-xs">Planen bis</div>
                                <div class="text-xs text-center">{{gespraech.durchzufuehrenBis}}</div>
                            </div>
                            <div class="flex gap-2 items-center text-sm text-gray-500 place-self-end">
                                <InputButton @click="showDialog(title)">Planen</InputButton>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div class="flex justify-center">
                        <div class="text-sm px-2 py-1 bg-Rot text-white">
                            Überfällige Gespräche
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <HRMPopupDialog :title="title" height="25vh">
        <p>
            Der Fragebogen soll von beiden Seiten innerhalb von 3 Tagen ausgefüllt werden, mit gemeinsamen Gespräch am selben oder nächsten Tag.
        </p>
        <p>
            Möchten Sie den Fragebogen freigeben?
        </p>
    </HRMPopupDialog>
</template>