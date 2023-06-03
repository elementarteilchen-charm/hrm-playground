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
  <h1 class="text-3xl font-light mb-3">Downloads und Links</h1>
  
  <div>
    <pre>
    <code>
downloads = [
  {
    anzeigetext: 'Pendlerpauschale', 
    zuletztAktualisiert: '2023-04-01',
    hauptkategorie: 'Gehalt',
    hinweis: "Verwenden Sie dieses Formular für den Antrag der Pendlerpauschale."
  } 
]
    </code>
    </pre>
  </div>
  
  <div class="mt-8 grid grid-cols-1 gap-8">
    
    <div class="border border-gray-300 bg-white py-3">
  
      <div v-for="kategorie in hauptkategorien">
        <div class="px-4 font-light  mt-3 text-xl">
          {{kategorie}}
        </div>
      
        <div v-for="download in filterBy(kategorie)" class="py-2 ">
          <div class="px-4 ">

              <a  href="" 
                  class="flex gap-2 text-blue-700 hover:underline">
                  {{download.anzeigetext}} 
                  <ArrowDownTrayIcon class="w-5 h-5" />
              </a>
              <div class="text-sm text-gray-700">
                {{download.hinweis}}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
