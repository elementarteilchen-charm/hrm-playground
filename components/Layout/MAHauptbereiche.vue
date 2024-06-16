<script setup>
    const route = useRoute()
</script>
<template>
    <div class="bg-white flex gap-x-8 border shadow-md">
        <div class="border-b-2 hover:bg-Blaugrau-25 px-3 py-2" 
            :class="{
                'border-Mittelblau': '/hra/mitarbeiterinnen/stammdaten' == $route.fullPath,
                'border-transparent ': '/hra/mitarbeiterinnen/stammdaten' != $route.fullPath
            }">
            <a  href="/hra/mitarbeiterinnen/stammdaten" :class="{'font-bold': '/hra/mitarbeiterinnen/stammdaten' == $route.fullPath}">
                <!-- Mitarbeiter*in -->
                Daten
            </a>
        </div>
        <div class="border-b-2 hover:bg-Blaugrau-25 px-3 py-2" 
            :class="{
                'border-Mittelblau': '/hra/vertrag' == $route.fullPath,
                'border-transparent ': '/hra/vertrag' != $route.fullPath
            }">
            <a  href="/hra/vertrag" :class="{'font-bold': '/hra/vertrag' == $route.fullPath}">
                Verträge
            </a>
        </div>
        <div class="border-b-2 hover:bg-Blaugrau-25 px-3 py-2" 
            :class="{
                'border-Mittelblau': '/hra/abwesenheiten' == $route.fullPath,
                'border-transparent ': '/hra/abwesenheiten' != $route.fullPath
            }">
            <a href="/hra/abwesenheiten" 
                class="border-transparent border-b-2"
                :class="{'font-bold': '/hra/abwesenheiten' == $route.fullPath}">
                Abwesenheiten
            </a>
        </div>
        <div class="border-b-2 hover:bg-Blaugrau-25 px-3 py-2" 
            :class="{
                'border-Mittelblau': '/hra/events' == $route.fullPath,
                'border-transparent ': '/hra/events' != $route.fullPath
            }">
            <a href="/hra/events" :class="{'font-bold': '/hra/events' == $route.fullPath}">
                Events
            </a>
        </div>
        <div class="border-b-2 hover:bg-Blaugrau-25 px-3 py-2" 
            :class="{
                'border-Mittelblau': '/hra/dokumente' == $route.fullPath,
                'border-transparent ': '/hra/dokumente' != $route.fullPath
            }">
            <a href="/hra/dokumente" :class="{'font-bold': '/hra/dokumente' == $route.fullPath}">
                Dokumente
            </a>
        </div>
    </div>
</template>