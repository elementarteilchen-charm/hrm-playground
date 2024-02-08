<script setup>
import { UserGroupIcon, HomeIcon, EnvelopeIcon, PhoneIcon, ExclamationTriangleIcon, TrashIcon, CloudArrowUpIcon } from '@heroicons/vue/24/outline'

const ma = mitarbeiterListe[0]
const props = defineProps({
    headline: { type: String, default: "" },
})
</script>
<template>
    <div>
        <div class="flex items-center py-3 justify-between">
            <h1 class="my-3 text-3xl font-light text-Blaugrau">
                {{headline}}
            </h1>
            <HRAMitarbeiterSuchfeld class="w-1/3" />
        </div>

        <div class="grid grid-cols-[16rem_1fr] gap-2 border bg-white print:hidden">
            
            <div :style="'background-image: url(/img/'+ ma.avatar + ');'" class="bg-cover bg-center"> </div>
            
            <div class="py-3 ">
                <div class="px-4 space-y-1">
                    
                    <div class="flex items-center justify-between">
                        <span class="px-2 py-1 rounded-md font-bold text-xs text-white bg-Gruen">Aktiv</span>
                        <span class="px-2 py-1 rounded-md font-bold text-xs text-white bg-Orange">3 Erinnerungen</span>
                    </div>

                    <div class="font-bold text-2xl">
                        {{ma.vorname}} {{ma.name}}
                    </div>
                    <div class="text-sm">
                        {{ma.taetigkeit}}
                    </div>
                </div>
                
                <hr class="ml-4 mt-4 border-t-2 border-Mittelblau w-8" />

                <div class="mt-3 grid grid-cols-3 px-4 py-3">
                    <ul class="text-sm space-y-1 text-Blaugrau">
                        <li v-for="abteilung in ma.abteilungen" class="flex items-center gap-x-2">
                            <UserGroupIcon class="w-5 h-5" />
                            <div>
                                {{abteilung}}
                            </div>
                        </li>
                    </ul>
                    <ul class="text-sm space-y-1 text-Blaugrau">
                        <li class="flex items-center gap-x-2">
                            <HomeIcon class="w-5 h-5" />
                            <div>
                                {{ma.mandant}} • {{ma.standort}}
                            </div>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <EnvelopeIcon class="w-5 h-5" />
                            <div>{{ma.email}}</div>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <PhoneIcon class="w-5 h-5" />
                            <div>Durchwahl: {{ma.durchwahl}}</div>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <PhoneIcon class="w-5 h-5" />
                            <div>Tel: +43 664 88370265</div>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>