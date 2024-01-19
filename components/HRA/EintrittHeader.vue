<script setup>
import { CheckCircleIcon, HomeIcon, ClockIcon, CalendarIcon, EnvelopeIcon, UserIcon, CreditCardIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/vue/24/outline';

const person = mitarbeiterListe[0]
</script>

<template>
    <div class="my-6 mx-16 bg-white border rounded grid grid-cols-[16rem_1fr]">
        
        <div class="overflow-hidden h-48">
            <div :style="'background-image: url(/img/'+ person.avatar + ');' " class="h-full bg-cover bg-center"></div>
        </div>
        
        <div class="p-4">
            <div>
                <div class="space-x-1">
                    <span class="inline-block text-xs font-bold text-white bg-Orange p-1 rounded">
                        Eintritt
                    </span>
                    <span class="inline-block text-xs font-bold text-Mittelgrau bg-Orange_ p-1 rounded">
                        am {{person.eintrittstag}}
                    </span>
                </div>
                <div class="mt-1 flex-col lg:flex-row justify-between items-center">
                    <div>
                        <a href="" class="text-xl font-bold hover:underline ">
                            {{person.anrede}} {{person.name}} {{person.vorname}}</a>
                    </div>
                    <!-- <div class="text-sm font-bold ">
                        <span class="text-Mittelgrau">Eintritt am </span>
                        <span class="text-Dunkelgrau">{{person.eintrittstag}}</span>
                    </div> -->
                </div>
            </div>

            <!-- <div class="mt-4 flex gap-x-8 "> -->
            <div class="mt-4 grid grid-cols-1 lg:grid-cols-3 xl:w-3/4 gap-8 ">
                <div class="space-y-1">
                    <div class="text-sm flex items-center gap-2 text-Dunkelgrau font-bold">
                        <UserIcon class="w-5 h-5 flex-shrink-0" /> PersonalNr: {{person.pnr}}
                    </div>
                    <div class="text-sm flex gap-x-2 items-center text-Mittelgrau">
                        <HomeIcon class="w-5 h-5 flex-shrink-0" /> 
                        <div class="flex-shrink-0">
                            {{person.mandant}} &middot; {{person.standort}}
                        </div>
                    </div>
                </div>
                

                <div class="space-y-1">
                    <div class="text-sm flex items-center gap-2 ">
                        <CalendarIcon class="w-5 h-5 flex-shrink-0" /> {{person.geburtsdatum}}
                    </div>
                    <div class="text-sm flex items-center gap-2 ">
                        <ClockIcon class="w-5 h-5 flex-shrink-0" /> {{person.alter}} Jahre
                    </div>
                    <div class="text-sm flex items-center gap-2 ">
                        <GlobeAltIcon class="w-5 h-5 flex-shrink-0" /> {{person.staatsbuergerschaft}} / {{person.staatsbuergerschaft2}}
                    </div>
                    <!-- <div class="text-sm flex items-center gap-2 ">
                        <PhoneIcon class="w-5 h-5 flex-shrink-0" /> {{person.mobil}}
                    </div> -->
                </div>
                <div class="space-y-1">
                    <div class="text-sm flex items-center gap-2 _">
                        <CheckCircleIcon class="w-5 h-5 flex-shrink-0" /> 
                        <span :title="person.kontonummer">
                            Bankverbindung
                        </span>    
                    </div>
                    <div class="text-sm flex items-center gap-2 ">
                        <CheckCircleIcon class="w-5 h-5 flex-shrink-0" /> Aufenthaltsbewilligung
                    </div>
                    <div class="text-sm flex items-center gap-2 ">
                        <CheckCircleIcon class="w-5 h-5 flex-shrink-0" /> Beschäftigungsbewilligung
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- 
    <div class="my-6 mx-16 bg-white border rounded flex">
        <div class="w-40 h-48">
            <div :style="'background-image: url(/img/'+ person.avatar + ');' " class="w-[20rem] h-full bg-cover bg-center"></div>
        </div>
        <div class="w-full">
            <div class="mt-3 _flex justify-between items-center ">
                <div class="px-6">
                    <a href="" class="text-xl font-bold hover:underline ">
                        {{person.anrede}} {{person.name}} {{person.vorname}}</a>
                </div>
                <div class="pl-6 text-sm font-bold ">
                    <span class="text-Mittelgrau">Eintritt am </span>
                    <span class="text-Dunkelgrau">{{person.eintrittstag}}</span>
                </div>
            </div>
            <div class="mt-3 flex pl-6 ">
                <div class="w-1/4 xl:w-48 space-y-1">
                    <div class="text-sm flex items-center gap-2 text-Dunkelgrau font-bold">
                        <UserIcon class="w-5 h-5" /> {{person.pnr}}
                    </div>
                    <div class="text-sm flex items-center gap-2 text-Mittelgrau">
                        <HomeIcon class="w-5 h-5" /> {{person.mandant}} &middot; {{person.standort}}
                    </div>
                </div>
                <div class="w-1/4 xl:w-48 ">
                    <div class="text-sm text-Dunkelgrau space-y-1">
                        <div v-for="sprache in person.sprachkenntnisse " :class="{'font-bold': sprache.muttersprache }">
                            {{sprache.sprache}} ({{sprache.niveau}})
                        </div>
                    </div>
                </div>
                <div class="w-1/4 xl:w-64 space-y-1">
                    <div class="text-sm flex items-center gap-2 text-Mittelgrau">
                        <EnvelopeIcon class="w-5 h-5" /> {{person.email_privat}}
                    </div>
                    <div class="text-sm flex items-center gap-2 text-Mittelgrau">
                        <PhoneIcon class="w-5 h-5" /> {{person.mobil}}
                    </div>
                    <div class="text-sm flex items-center gap-2 text-Mittelgrau">
                        <CreditCardIcon class="w-5 h-5" /> {{person.kontonummer}}
                    </div>
                </div>
                <div class="w-1/4 xxl:w-64 space-y-1">
                    <div class="text-sm flex items-center gap-2 text-Mittelgrau">
                        <ClockIcon class="w-5 h-5" /> {{person.alter}} Jahre
                    </div>
                    <div class="text-sm flex items-center gap-2 text-Mittelgrau">
                        <CalendarIcon class="w-5 h-5" /> {{person.geburtsdatum}}
                    </div>
                </div>
            </div>
        </div>
    </div> -->

</template>