<script setup>
import { CurrencyEuroIcon, DocumentTextIcon, UserCircleIcon, ClockIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, PlusCircleIcon, Bars3Icon, ChevronRightIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline';


// const zeigeHRM = ref(false)
const zeigeHRM = useCookie('zeigeHRM')
const route = useRoute()
const menuOpen = useCookie('menuOpen')


</script>
<template>
    <div class="grid grid-rows-[55px_1fr_1rem] bg-Blaugrau-10 h-screen">

        <div class="bg-Mittelblau flex items-center justify-between h-[55px] print:hidden">
            <div class="pl-4 text-2xl font-bold italic place-self-center text-white uppercase">Walter Group
                <button v-on:click="zeigeHRM = !zeigeHRM">
                    <span class="text-Gruen-logo italic">
                        <span v-show="zeigeHRM">HRM</span>
                        <span v-show="!zeigeHRM">HRA</span>
                    </span>
                </button>
            </div>
            <div class="flex gap-x-4 items-center">
                <div class="text-white">
                    Anna-Maria Walisch
                </div>
                <div class="text-white ">
                    <NavigationHraErinnerungen />
                </div>

                <div class="mr-4 text-white">
                    <NavigationHraBenachrichtigungen />
                </div>
            </div>
        </div>

        <div class="grid print:block" :class="[menuOpen ? 'grid-cols-[2.5rem_1fr]' : 'grid-cols-[250px_1fr]']">
            
            <div class="overflow-y-auto border-r print:hidden" style="height: calc(100vh - 55px - 1rem);">
                <div class="flex justify-end p-2">
                    <a v-on:click="menuOpen = !menuOpen" class="hover:bg-Mittelblau hover:text-white text-Mittelblau">
                        <Bars3Icon class="w-5 h-5"flex-shrink-0  /></a>
                </div>
                <nav v-show="!zeigeHRM" class="">
                    <ul class="space-y-1 text-sm">
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <UserCircleIcon class="w-5 h-5 flex-shrink-0 text-Mittelblau" />
                            <a href="/hra/mitarbeiterinnen/suche" :class="{'font-bold': route.path === '/hra/mitarbeiterinnen/suche'}">
                                Mitarbeiter*innen</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ArrowRightOnRectangleIcon class="w-5 h-5 flex-shrink-0 text-blue-800" />
                            <a href="/hra" class="">
                                Eintritte</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ArrowRightOnRectangleIcon class="w-5 h-5 flex-shrink-0 text-blue-800" />
                            <a href="/hra/wiedereintritte" class="">
                                Wiedereintritte</a>
                        </li>
                        <li class="">
                            <div class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                                <ClockIcon class="w-5 h-5 flex-shrink-0 text-blue-800" />
                                <a href="/hra/events/" :class="{'font-bold': route.path === '/hra/events/'}">
                                    Events & Änderungen</a>
                            </div>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ClockIcon class="w-5 h-5 flex-shrink-0 text-blue-800" />
                            <a href="/hra/abwesenheiten/" class="">
                                Abwesenheiten</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <ArrowLeftOnRectangleIcon class="w-5 h-5 flex-shrink-0 text-blue-800" />
                            <a href="/" class="">
                                Austritte</a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <DocumentTextIcon class="w-5 h-5 flex-shrink-0 text-blue-800" />
                            <a href="/hra-dokumente">
                                Dokumente
                            </a>
                        </li>
                        <li class="flex gap-2 px-4 py-2 items-center hover:bg-Hellblau hover:text-white">
                            <CurrencyEuroIcon class="w-5 h-5 flex-shrink-0 text-blue-800" />
                            <a href="/hra/personalverrechnung/" :class="{'font-bold': route.path === '/hra/personalverrechnung/'}">
                                Personalverrechnung
                            </a>
                        </li>
                    </ul>
                </nav>

                <div v-show="zeigeHRM">
                    <NavigationHrmMain />
                </div>
            </div>

            <div class="bg-Blaugrau-10 print:h-full print:overflow-auto" style="height: calc(100vh - 55px - 1rem); overflow-y: auto;">
                <div class="print:w-auto">
                    <NuxtPage />
                </div>
            </div>
        </div>
        <div class="bg-gray-600 text-white text-gray-200 text-xs print:hidden">Footer</div>
    </div>
</template>

