<script setup>
import { CurrencyEuroIcon, DocumentTextIcon, UserCircleIcon, ClockIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, PlusCircleIcon, Bars3Icon, ChevronRightIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline';

// const zeigeHRM = ref(false)
const zeigeHRM = ref(true)
const route = useRoute()
</script>
<template>
    <div class="grid grid-rows-[55px_1fr_1rem] bg-Blaugrau-10 h-screen">
        <div class="bg-Mittelblau flex items-center h-[55px] print:hidden">
            <div class="pl-4 text-2xl font-bold italic place-self-center text-white uppercase">Walter Group
                <span class="text-Gruen-logo">HRA</span></div>
        </div>

        <div class="grid grid-cols-[250px_1fr] print:block">
            <div class="overflow-y-auto border-r print:hidden" style="height: calc(100vh - 55px - 1rem);">
                <div class="flex justify-end p-2">
                    <a href="/" class="hover:bg-Mittelblau hover:text-white text-Mittelblau">
                        <Bars3Icon class="w-5 h-5" /></a>
                </div>
                <nav class="">
                    <ul class="space-y-1 text-sm">
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <UserCircleIcon class="w-5 h-5 text-Mittelblau" />
                            <a href="/hra/mitarbeiterinnen/suche" :class="{'font-bold': route.path === '/hra/mitarbeiterinnen/suche'}">
                                Mitarbeiter*innen</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ArrowRightOnRectangleIcon class="w-5 h-5 text-blue-800" />
                            <a href="/hra-stammdaten" class="">
                                Eintritte</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ArrowRightOnRectangleIcon class="w-5 h-5 text-blue-800" />
                            <a href="/hra/wiedereintritte" class="">
                                Wiedereintritte</a>
                        </li>
                        <li class="">
                            <div class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                                <ClockIcon class="w-5 h-5 text-blue-800" />
                                <a href="/hra/events/" :class="{'font-bold': route.path === '/hra/events/'}">
                                    Events & Änderungen</a>
                            </div>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ClockIcon class="w-5 h-5 text-blue-800" />
                            <a href="/hra/abwesenheiten/" class="">
                                Abwesenheiten</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ArrowLeftOnRectangleIcon class="w-5 h-5 text-blue-800" />
                            <a href="/" class="">
                                Austritte</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <DocumentTextIcon class="w-5 h-5 text-blue-800" />
                            <a href="/hra-dokumente">
                                Dokumente
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <CurrencyEuroIcon class="w-5 h-5 text-blue-800" />
                            <a href="/hra/personalverrechnung/" :class="{'font-bold': route.path === '/hra/personalverrechnung/'}">
                                Personalverrechnung
                            </a>
                        </li>
                    </ul>
                </nav>
                <div v-if="zeigeHRM" class="px-4 mt-12 mb-6 py-2 bg-OrangeGelb text-white">
                    HRM
                </div>
                <nav v-if="zeigeHRM">
                    <div class="flex gap-2 px-4 py-2 items-center font-bold hover:bg-Hellblau hover:text-white">
                        <ChatBubbleBottomCenterTextIcon class="w-5 h-5 text-blue-800 flex-shrink-0" />
                        Entwicklungsgespräche
                    </div>
                    <ul class="ml-7 space-y-1 text-sm">
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/entwicklungsgespraeche/planen">
                                Planen
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/entwicklungsgespraeche/durchfuehren">
                                Durchführen
                            </a>
                        </li>
                      </ul>         
                    <div class="flex gap-2 px-4 py-1 items-center font-bold hover:bg-Hellblau hover:text-white">
                        <ChatBubbleBottomCenterTextIcon class="w-5 h-5 text-blue-800" />
                        Zukunftsgespräche
                    </div>    
                     <ul class="ml-7 space-y-1">
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/zukunftsgespraeche/planen">
                                Planen
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/zukunftsgespraeche/durchfuehren">
                                Durchführen
                            </a>
                        </li>
                    </ul>           
                    <ul class="mt-3 space-y-1 text-sm">
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <span class="">Self Service</span>
                        </li>
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/personalabteilung-kontaktieren" class="">
                                Personalabteilung kontaktieren
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/anfragenbearbeiten" class="">
                                Anfragen bearbeiten
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/meine-anfragen" class="">
                                Meine Anfragen
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/meine-daten" class="">
                                Meine Daten
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-1 items-center hover:bg-Hellblau hover:text-white">
                            <a href="/hrm/downloads" class="">
                                Downloads
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="bg-Blaugrau-10 print:h-full print:overflow-auto" style="height: calc(100vh - 55px - 1rem); overflow-y: auto;">
                <div class="max-w-[1600px] print:w-auto">
                    <NuxtPage />
                </div>
            </div>
        </div>
        <div class="bg-gray-600 text-white text-gray-200 text-xs print:hidden">Footer</div>
    </div>
</template>