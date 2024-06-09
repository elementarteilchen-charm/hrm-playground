<script setup>
import {
    UserIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, XCircleIcon, ChevronRightIcon, PencilIcon,
    BookmarkIcon, PlusCircleIcon, } from '@heroicons/vue/24/outline'

const tabs = [
    'Persönliche Daten',
    'Adressen',
    'Invalidität',
    'Bankverbindung',
    'Angehörige',
    'Bewilligungen',
];
const activeTab = reactive({ tab: tabs[0] });
const addNewItem = ref(false);

</script>

<template>
    <header class="px-8 py-4  print:hidden">
        <HRAMitarbeiterInfoBox headline="Persönliche Daten bearbeiten" class="mb-6" />
    </header>
        <!-- <NavigationHraBreadcrumb :pfad="[{text: 'Dashboard', link: '/mitarbeiterinnen/dashboard'}]" aktuell=""/> -->
    <main class="px-8 grid grid-cols-4 gap-4 2xl:gap-8">
        <div class="bg-white p-4 rounded">
            <header class="font-bold text-xl mb-2">
                Stammdaten
            </header>
            
            <div>
                <ul class="space-y-1">
                    <li v-for="item in eventsAktionen.stammdaten.items" class="">
                        <a :href="item.link" class="">
                            <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau transition">
                                <div class="p-1  transition">
                                    <ChevronRightIcon class="w-4 h-4" />
                                </div>
                                {{item.text}}
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-white p-4 rounded">
            <header class="font-bold text-xl mb-2">
                Events & Änderungen
            </header>
            <div>
                <ul class="space-y-1">
                    <li v-for="item in eventsAktionen.events.items" class="">
                        <a :href="item.link" class="">
                            <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau transition">
                                <div class="p-1  transition">
                                    <ChevronRightIcon class="w-4 h-4" />
                                </div>
                                <div class="flex gap-2 items-center">
                                    {{item.text}}
                                    <!-- <div v-show="item.erinnerungen>0" class="px-2 py-1 rounded-full bg-Orange text-white text-xs">
                                        {{item.erinnerungen}}    
                                    </div> -->
                                    
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-white p-4 rounded">
            <header class="font-bold text-xl mb-2">
                Temporäre Auszeiten
            </header>
            
            <div>
                <ul class="space-y-1">
                    <li v-for="item in eventsAktionen.auszeiten.items" class="">
                        <a :href="item.link" class="">
                            <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau transition">
                                <div class="p-1  transition">
                                    <ChevronRightIcon class="w-4 h-4" />
                                </div>
                                {{item.text}}
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-white p-4 rounded">
            <header class="font-bold text-xl mb-2">
                Austritt
            </header>
            
            <div>
                <ul class="space-y-1">
                    <li v-for="item in eventsAktionen.austritt.items" class="">
                        <a :href="item.link" class="">
                            <div class="flex gap-1 items-center inline-block text-Mittelblau hover:bg-Mittelblau hover:text-white hover:border-Mittelblau transition">
                                <div class="p-1  transition">
                                    <ChevronRightIcon class="w-4 h-4" />
                                </div>
                                {{item.text}}
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>