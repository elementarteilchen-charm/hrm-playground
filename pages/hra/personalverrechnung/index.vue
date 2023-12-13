<script setup>
import { PencilSquareIcon, UserIcon, FunnelIcon, XCircleIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

let alleFilter = reactive({
    'geschlecht': '',
    'standort': '',
    'mandant': ''
})

let dynEintritte = eintritte

const gefilterteEintritte = computed(() => {

    console.log("computed")

    if (alleFilter.geschlecht == '' && alleFilter.standort == '' && alleFilter.mandant == '') {
        console.log("return eintritte")
        return eintritte
    }

    let gefiltert = dynEintritte
    if (alleFilter.geschlecht) {

        gefiltert = dynEintritte.filter(function(eintritt) {
            return eintritt.geschlecht == alleFilter.geschlecht
        })
    }
    if (alleFilter.standort) {
        gefiltert = gefiltert.filter(function(eintritt) {
            return eintritt.standort == alleFilter.standort
        })
    }
    if (alleFilter.mandant) {
        gefiltert = gefiltert.filter(function(eintritt) {
            return eintritt.mandant == alleFilter.mandant
        })
    }

    return gefiltert
    // return gefiltertGeschlecht.concat(gefiltertStandort.filter(item => !gefiltertGeschlecht.includes(item)));
    // return [...gefiltertGeschlecht, ...gefiltertStandort]

})

function clearAlleFilter() {
    alleFilter.geschlecht = ''
    alleFilter.mandant = ''
    alleFilter.standort = ''
}
const filterAktiv = computed(() => {
    return alleFilter.geschlecht || alleFilter.standort || alleFilter.mandant
})
</script>
<template>
    <div class="my-3 text-3xl font-light text-Blaugrau">
        Personalverrechnung
    </div>
    <main class="">
        <div class="my-6">
            <HRAProfilHeader />
        </div>
        <div class="flex gap-4 items-center ml-6 h-10 ">
            <h3 class="font-bold">Aktive Filter:</h3>
            <div v-show="alleFilter.geschlecht" class="flex shadow-md">
                <span v-if="alleFilter.geschlecht == 'W'" class="text-sm bg-green-500 text-white px-2 py-1 rounded-l-lg">Frau</span>
                <span v-if="alleFilter.geschlecht == 'M'" class="text-sm bg-green-500 text-white px-2 py-1 rounded-l-lg">Herr</span>
                <button v-on:click="alleFilter.geschlecht=''">
                    <XCircleIcon class="w-6 h-7 text-white bg-green-700 rounded-r-lg py-1" />
                </button>
            </div>
            <div v-show="alleFilter.standort" class="flex shadow-md">
                <span v-if="alleFilter.standort != ''" class="text-sm bg-green-500 text-white px-2 py-1 rounded-l-lg">{{alleFilter.standort}}</span>
                <button v-on:click="alleFilter.standort=''">
                    <XCircleIcon class="w-6 h-7 text-white bg-green-700 rounded-r-lg py-1" />
                </button>
            </div>
            <div v-show="alleFilter.mandant" class="flex shadow-md">
                <span v-if="alleFilter.mandant != ''" class="text-sm bg-green-500 text-white px-2 py-1 rounded-l-lg">{{alleFilter.mandant}}</span>
                <button v-on:click="alleFilter.mandant=''">
                    <XCircleIcon class="w-6 h-7 text-white bg-green-700 rounded-r-lg py-1" />
                </button>
            </div>
            <div class="flex">
                <button v-show="filterAktiv" v-on:click="clearAlleFilter">
                    <XCircleIcon class="w-6 " />
                </button>
            </div>
        </div>
        <table class="table-fixed w-4/5 ml-6 bg-white mt-3 shadow-lg">
            <thead >
                <tr class="bg-gray-500 text-white">
                    <th class="px-1 py-1 w-32 text-sm">Mandant</th>
                    <th class="px-3 py-1 w-24 h-12 text-sm space-y-1">
                        Standort
                    </th>
                    <th class="px-3 py-1 w-24 text-sm">Anrede</th>
                    <th class="px-3 py-1 text-sm">Name</th>
                    <th class="px-3 py-1 text-sm">Vorname</th>
                    <th class="px-3 py-1 w-48 text-sm">Eintrittstag</th>
                    <th class="px-3 py-1 w-12 text-sm">Edit</th>
                </tr>

                <tr v-show="filterAktiv" class="bg-gray-200">
                    <th class="px-3 py-2">
                      <div v-show="alleFilter.mandant" class="flex justify-center items-center">
                          <span v-if="alleFilter.mandant != ''" class="text-xs bg-gray-500 text-white px-2 py-1 rounded-l-lg">{{alleFilter.mandant}}</span>
                          <button v-on:click="alleFilter.mandant=''" class="h-6">
                              <XCircleIcon class="h-6  text-white bg-gray-500 rounded-r-lg py-1" />
                          </button>
                      </div>
                    </th>
                    <th class="px-3 py-2">
                        <div v-show="alleFilter.standort" class="flex justify-center ">
                            <span v-if="alleFilter.standort != ''" class="text-xs bg-gray-500 text-white px-2 py-1 rounded-l-lg">{{alleFilter.standort}}</span>
                            <button v-on:click="alleFilter.standort=''" class="h-6">
                                <XCircleIcon class="h-6 text-white bg-gray-500 rounded-r-lg py-1" />
                            </button>
                        </div>
                    </th>
                    <th class="px-3 py-2">
                      <div v-show="alleFilter.geschlecht" class="flex justify-center">
                          <span v-if="alleFilter.geschlecht == 'W'" class="text-xs bg-gray-500 text-white px-2 py-1 rounded-l-lg">Frau</span>
                          <span v-if="alleFilter.geschlecht == 'M'" class="text-xs bg-gray-500 text-white px-2 py-1 rounded-l-lg">Herr</span>
                          <button v-on:click="alleFilter.geschlecht=''">
                              <XCircleIcon class="h-6 text-white bg-gray-500 rounded-r-lg py-1" />
                          </button>
                      </div>

                    </th>
                    <th class="px-3 py-1"></th>
                    <th class="px-3 py-1"></th>
                    <th class="px-3 py-1"></th>
                    <th class="px-3 py-1"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="eintritt in gefilterteEintritte" class="border-b hover:bg-gray-100">
                    <td class="group pl-6 pr-3 h-10 border-r ">
                        <div class="flex justify-between items-center gap-2">
                            <div class="group-hover:font-bold">{{eintritt.mandant}}</div>
                            <div class="group-hover:block pt-1 px-2 border rounded-full hidden flex items-center gap-2" :class=" {
                                  'bg-green-600': alleFilter.mandant=='', 
                                  'bg-red-600': alleFilter.mandant==eintritt.mandant
                          }">
                                <button v-if="alleFilter.mandant==''" v-on:click="alleFilter.mandant=eintritt.mandant">
                                    <FunnelIcon class="w-4 h-4 text-white" />
                                </button>
                                <button v-if="alleFilter.mandant==eintritt.mandant" v-on:click="alleFilter.mandant=''">
                                    <XCircleIcon class="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </td>
                    <td class="group h-10 border-r ">
                        <div class=" px-3 flex justify-between items-center gap-2 group-hover:bg-green-500">
                            <div class="group-hover:font-bold">{{eintritt.standort}}</div>
                            <div class="group-hover:block pt-1 px-2 border rounded-full hidden flex items-center gap-2" :class="
                                {
                                  'bg-green-600': alleFilter.standort=='', 
                                  'bg-red-600': alleFilter.standort==eintritt.standort
                                }
                          ">
                                <button v-if="alleFilter.standort==''" v-on:click="alleFilter.standort=eintritt.standort">
                                    <FunnelIcon class="w-4 h-4 text-white" />
                                </button>
                                <button v-if="alleFilter.standort==eintritt.standort" v-on:click="alleFilter.standort=''">
                                    <XCircleIcon class="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </td>
                    <td class="group px-3 h-10  border-r">
                        <div class="flex justify-between items-center gap-2">
                            <span class="">
                                {{eintritt.geschlechtAnrede}}
                            </span>
                            <div class="group-hover:block pt-1 px-2 border rounded-full hidden flex items-center gap-2" :class="
                                {
                                  'bg-green-600': alleFilter.geschlecht=='', 
                                  'bg-red-600': alleFilter.geschlecht==eintritt.geschlecht
                                }
                          ">
                                <button v-if="alleFilter.geschlecht==''" v-on:click="alleFilter.geschlecht=eintritt.geschlecht">
                                    <FunnelIcon class="w-4 h-4 text-white" />
                                </button>
                                <button v-if="alleFilter.geschlecht==eintritt.geschlecht" v-on:click="alleFilter.geschlecht=''">
                                    <XCircleIcon class="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </td>
                    <td class="px-2 py-2 font-bold">{{eintritt.nachname}}</td>
                    <td class="px-2 py-2 border-r">{{eintritt.vorname}}</td>
                    <td class="px-2 py-2 border-r">{{eintritt.eintrittsdatum}}</td>
                    <td class="px-2 py-2 border-r ">
                      <PencilSquareIcon class="w-4 h-4 mx-auto" />
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>
<style>
</style>