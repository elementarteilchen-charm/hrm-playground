<script setup>
</script>
<template>
    <div class="px-4 py-2 bg-white border rounded ">
        <details class="text-sm">
            <summary>
                Letzte Änderung durch <b>Martina Daum</b> am <b>23.05.2024</b> um 9:42
            </summary>
            <div class="mt-4 mb-2 ml-4 font-bold">
                Vorherige Änderungen:
            </div>
            <ul class="mt-1 ml-4 space-y-1">
                <li v-for="item in historieAbwesenheiten">{{item}}</li>
            </ul>
        </details>
    </div>
</template>