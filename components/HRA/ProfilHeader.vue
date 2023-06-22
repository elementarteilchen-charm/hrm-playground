<script setup>
	const ma = mitarbeiterListe[0]
</script>
<template>
    <div class="grid grid-cols-[2fr_5fr_5fr] gap-2  border bg-white ">
        <div class="">
            <img :src="'/img/' + ma.avatar" alt="">
        </div>
        <div class="px-4 py-6">
            <div class="font-bold text-xl">
                <a href="/hra/mitarbeiterinnen/profil" class="text-Mittelblau hover:underline">
                    {{ma.vorname}} {{ma.name}}</a>
            </div>
            <div>
                {{ma.taetigkeit}}
            </div>
            <ul class="text-sm space-y-1 text-Mittelblau">
                <li v-for="abteilung in ma.abteilungen">
                    {{abteilung}}
                </li>
            </ul>
        </div>
        <div class="text-sm">
            <div class="text-xl">&nbsp;</div>
            <ul class="text-sm space-y-1 text-Mittelblau">
                <li>mandant: {{ma.mandant}} </li>
                <li>standort: {{ma.standort}}</li>
                <li>email: {{ma.email}}</li>
                <li>durchwahl: '2002',</li>
                <li>mobil: '+43 664 88370265',</li>
            </ul>
        </div>
    </div>
</template>