<script setup>
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
        <div class="grid grid-cols-[10rem_1fr] gap-2 border bg-white print:hidden">
            <div :style="'background-image: url(/img/'+ ma.avatar + ');'" class="bg-cover bg-center"> </div>
            <div class="py-3">
                <div class="px-4">
                    <div class="font-bold text-xl">
                        <a href="/hra/mitarbeiterinnen/profil" class="text-Mittelblau">
                            {{ma.vorname}} {{ma.name}}
                        </a>
                    </div>
                    <div class="">
                        {{ma.taetigkeit}}
                    </div>
                </div>
                <div class="mt-3 grid grid-cols-3 px-4 py-3">
                    <ul class="text-sm space-y-1 text-Mittelblau">
                        <li v-for="abteilung in ma.abteilungen">
                            {{abteilung}}
                        </li>
                    </ul>
                    <ul class="text-sm space-y-1 text-Mittelblau">
                        <li>{{ma.mandant}} • {{ma.standort}}</li>
                        <li>{{ma.email}}</li>
                        <li>Durchwahl: {{ma.durchwahl}}</li>
                        <li>Tel: +43 664 88370265</li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>