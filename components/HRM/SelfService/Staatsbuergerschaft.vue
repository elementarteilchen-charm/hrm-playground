<script setup>
    import {  GlobeEuropeAfricaIcon } from '@heroicons/vue/24/outline' ;
    import { showDialog } from '/utils/modal.js'
    
    const title = "Staatsangehörigkeiten";
    const ma = mitarbeiterListe[0]
</script>

<template>
    <MeineDatenBox :title="title" buttonText="Staatsangehörigkeiten verwalten" >
        <div class="px-4 py-2 text-sm"> 
            
              <ul class="space-y-2">
                <li class="flex items-center gap-x-2">
                	<GlobeEuropeAfricaIcon class="w-5 h-5" />
                	<span>Staatsbürgerschaft 1: {{ma.staatsbuergerschaft}}</span>
                </li>
                <li class="flex items-center gap-x-2">
                	<GlobeEuropeAfricaIcon class="w-5 h-5" />
                	<span>Staatsbürgerschaft 2: -</span>
                </li>
              </ul>
        </div>
        <div class="hidden">

Unter der Box dann der Link zur Self Service Anfrage:
„Staatsangehörigkeiten verwalten“
àDann poppt die Anfrage an die HR auf
Anfrage Self Service zur Datenänderung:
Kategorie: Persönliches / Datenänderungen

Grund deiner Nachricht: Staatsangehörigkeit bearbeiten (NEU!)
Als Hinweistext:
Bitte übermittle deinen Staatsbürgerschaftsnachweis.
Dokumenteupload ist ein Pflichtfeld
Deine Nachricht
Staatsangehörigkeiten*
STG 1
NEUE STB1
STB2
NEUE STB2
Auswahlliste (Länderkürzel)
Sie können zwar selbst auswählen, welche Staatsbürgerschaft sie neu haben, aber nur die Bearbeiter können die Änderung neu bestätigen.
Wenn jemand keine zweite hat kann die auch „leer“ bleiben bzw. nur wenn eine 2. STBG vorhanden ist, soll sie angezeigt werden. Bei denen die nur 1 Haben bleibt dementsprechend nur 1 Zeile.
Wenn jemand zuerst 2 hatte und dann die 2. „abgegeben“ hat, soll die Zeile mit STBG 2 auch mit einem „leeren Eintrag“ sozusagen neutralisiert werden – es soll also nicht zwingend ein Land ausgewählt werden müssen in diesem Fall.
Der neue Eintrag müsste sich dann in HRA/Persis bitte zurückschreiben.
Bitte zuerst um Info wegen Aufwandsschätzung – die Funktionalitäten sollten alle schon wo da sein, denke nicht, dass das so viel wird.
        </div>
    </MeineDatenBox>
</template>
