<script setup>
  import {  ArrowDownTrayIcon } from '@heroicons/vue/24/outline' ;
  const hauptkategorien = ['Gehalt', 'Vertrag']
  const downloads = [
    {
        anzeigetext: 'Pendlerpauschale', 
        zuletztAktualisiert: '2023-04-01',
        hauptkategorie: 'Gehalt',
        hinweis: "Verwenden Sie dieses Formular für den Antrag der Pendlerpauschale."
    }, 
    {
        anzeigetext: 'Grenzgänger', 
        datum: '2023-04-01',
        hauptkategorie: 'Gehalt',
        hinweis: "Grenzgänger sind Personen, die Ihren Wohnsitz in Deutschland haben und in Österreich arbeiten."
    },
    {
        anzeigetext: 'Flexitime', 
        datum: '2023-04-01',
        hauptkategorie: 'Vertrag',
        hinweis: "Die Flexitime-Vereinbarung. Diese müssen Sie unterschrieben an die Personalabteilung übermitteln."
    }
]

  function filterBy(kategorie) {
    return downloads.filter(download => download.hauptkategorie === kategorie);
  }
</script>

<template>

  <div class="grid grid-rows-[6rem_1fr] gap-8 ">
    
    <div class="grid items-center bg-Blaugrau-25 px-6 h-full">
      <h1 class="text-3xl font-light text-Blaugrau">Downloads und Links</h1>
    </div>
    
    <div class="px-6">

  
      <div>
       
        <code><pre>
            downloads = [
              {
                anzeigetext: 'Pendlerpauschale', 
                zuletztAktualisiert: '2023-04-01', // brauchen wir vielleicht nicht...
                hauptkategorie: 'Gehalt',
                kategorie: 'Pendlerpauschale',
                hinweis: "Verwenden Sie dieses Formular für den Antrag der Pendlerpauschale."
              } 
            ]</pre>
        </code>
      </div>
  
        <div class="mt-8 grid grid-cols-1 gap-8">
          
          <div class="border border-gray-300 bg-white py-3">
        
            <div v-for="kategorie in hauptkategorien">
              <div class="px-4 font-light  mt-3 text-xl text-Blaugrau">
                {{kategorie}}
              </div>
            
              <div v-for="download in filterBy(kategorie)" class="py-2 ">
                <div class="px-4 ">

                    <a  href="" 
                        class="flex gap-2 text-Mittelblau hover:underline">
                        <ArrowDownTrayIcon class="w-5 h-5" />
                        {{download.anzeigetext}} 
                    </a>
                    <div class="text-sm text-gray-700 px-7">
                      {{download.hinweis}}
                    </div>
                    <div class="my-1 text-sm pl-7">
                      <a class="text-Mittelblau hover:underline" href="/hrm/personalabteilung-kontaktieren">Anfrage zu {{download.anzeigetext}}</a></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
